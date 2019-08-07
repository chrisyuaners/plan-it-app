class Itinerary < ApplicationRecord
  belongs_to :user_trip
  has_many :destinations, through: :itinerary_destinations
  has_many :itinerary_destinations
end
