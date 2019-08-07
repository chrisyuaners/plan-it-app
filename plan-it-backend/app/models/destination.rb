class Destination < ApplicationRecord
  has_many :itineraries, through: :itinerary_destinations
  has_many :itinerary_destinations
end
