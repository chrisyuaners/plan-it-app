class Api::V1::TripsController < ApplicationController
  def index
    trips = Trip.all
    render json: trips
  end

  def show
    trip = Trip.find(params[:id])
    render json: trip
  end

  def create
    creator = User.find(trip_params[:creator_id])
    trip = Trip.create(trip_params)
    trip.users.push(creator)
    userTrip = UserTrip.find(trip.id)
    render json: {trip: trip, userTrip: userTrip}
  end

  def update
    trip = Trip.find(params[:id])
    trip.update(trip_params)
    render json: trip
  end

  def destroy
    trip = Trip.find(params[:id])
    itineraries = Itinerary.select {|itin| itin.user_trip_id == params[:userTripId]}
    itineraries.each {|itin| itin.destroy}
    trip.destroy
    render json: trip
  end

  private

  def trip_params
    params.require(:trip).permit(:start_date, :end_date, :title, :description, :creator_id)
  end
end
