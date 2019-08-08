class ItineraryDestinationSerializer < ActiveModel::Serializer
  attributes :id, :itinerary, :destination, :from
  has_one :itinerary
  has_one :destination
end
