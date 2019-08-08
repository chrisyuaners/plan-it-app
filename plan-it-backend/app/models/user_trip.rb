class UserTrip < ApplicationRecord
  has_many :itineraries
  belongs_to :user
  belongs_to :trip
end
