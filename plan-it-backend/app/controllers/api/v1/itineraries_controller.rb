class Api::V1::ItinerariesController < ApplicationController
  def index
    itineraries = Itinerary.all
    render json: itineraries
  end

  def create
    itinerary = Itinerary.create(itinerary_params)
    destination_from = Destination.where(city: params[:cityFrom], country: params[:countryFrom])[0]
    destination_to = Destination.where(city: params[:cityTo], country: params[:countryTo])[0]
    itinerary_destination_from = ItineraryDestination.create(itinerary_id: itinerary.id, destination_id: destination_from.id, from: true)
    itinerary_destination_to = ItineraryDestination.create(itinerary_id: itinerary.id, destination_id: destination_to.id, from: false)
    debugger
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
