class Api::V1::TripsController < ApplicationController
  def index
    render json: session_user.trips
  end

  def show
    trip = Trip.find(params[:id])
    render json: trip
  end

  def create
    creator = User.find(trip_params[:creator_id])
    trip = Trip.create(trip_params)
    trip.users.push(creator)
    userTrip = UserTrip.where(trip_id: trip.id)
    render json: {trip: TripSerializer.new(trip), user_trip: userTrip}
  end

  def update
    trip = Trip.find(params[:id])
    trip.update(trip_params)
    render json: trip
  end

  def destroy
    trip = Trip.find(params[:id])

    itins = trip.user_trips.map {|user_trip| user_trip.itineraries }.flatten
    itins_destinations = itins.map {|itin| itin.itinerary_destinations }.flatten
    user_trips = trip.user_trips.map {|user_trip| user_trip}
    users = trip.users.map {|user| user}
    comments = trip.comments.map {|comment| comment}
    expenses = trip.expenses.map {|expense| expense}
    todos = trip.todos.map {|todo| todo}

    tripData = {
      id: trip.id,
      creator_id: trip.creator_id,
      description: trip.description,
      end_date: trip.end_date,
      start_date: trip.start_date,
      title: trip.title,
      user_trips: user_trips,
      users: users,
      comments: comments,
      expenses: expenses,
      todos: todos
    }

    objects_to_delete = {
      trip: tripData,
      itineraries: itins,
      itinerary_destinations: itins_destinations
    }

    itins.each {|itin| itin.destroy}
    itins_destinations.each {|itinDes| itinDes.destroy}
    trip.destroy

    render json: objects_to_delete
  end

  private

  def trip_params
    params.require(:trip).permit(:start_date, :end_date, :title, :description, :creator_id)
  end
end
