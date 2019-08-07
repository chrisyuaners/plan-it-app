class ItineraryDestinationSerializer < ActiveModel::Serializer
  attributes :id, :from
  has_one :itinerary
  has_one :destination
end
