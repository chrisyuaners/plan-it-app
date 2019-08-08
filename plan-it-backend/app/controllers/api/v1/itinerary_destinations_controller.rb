class Api::V1::ItineraryDestinationsController < ApplicationController
  def index
    itinerary_destinations = ItineraryDestination.all
    render json: itinerary_destinations
  end

  def create
    itinerary_destination = ItineraryDestination.create(itinerary_destination_params)
    render json: itinerary_destination
  end

  def update
    itinerary_destination = ItineraryDestination.find(params[:id])
    itinerary_destination.update(itinerary_destination_params)
    render json: itinerary_destination
  end

  def destroy
    itinerary_destination = ItineraryDestination.find(params[:id])
    itinerary_destination.destroy
  end

  private

  def itinerary_destination_params
    params.require(:itinerary_destination).permit(:itinerary_id, :destination_id, :from)
  end
end
