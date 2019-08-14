class Itinerary < ApplicationRecord
  belongs_to :user_trip
  has_many :itinerary_destinations, dependent: :delete_all
  has_many :destinations, through: :itinerary_destinations
end
