class ItineraryDestinationSerializer < ActiveModel::Serializer
  attributes :id, :itinerary, :destination, :from, :itinerary_id, :destination_id
  has_one :itinerary
  has_one :destination
end
