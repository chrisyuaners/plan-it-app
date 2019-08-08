class ItinerariesController < ApplicationController
  def index
    itineraries = Itinerary.all
    render json: itineraries
  end

  def create
    itinerary = Itinerary.create(itinerary_params)
    render json: itinerary
  end

  def update
    itinerary = Itinerary.find(params[:id])
    itinerary.update(itinerary_params)
    render json: itinerary
  end

  def destroy
    itinerary = Itinerary.find(params[:id])
    itinerary.destroy
  end

  private

  def itinerary_params
    params.require(:itinerary).permit(:user_trip_id, :departure, :arrival, :address)
  end
end
