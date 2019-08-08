class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :departure, :arrival, :address, :destinations, :itinerary_destinations
  belongs_to :user_trip
  has_many :itinerary_destinations
  has_many :destinations
end
