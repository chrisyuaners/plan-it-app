class User < ApplicationRecord
  has_many :user_trips
  has_many :trips, through: :user_trips
  has_many :itineraries, through: :user_trips
  has_many :itinerary_destinations, through: :itineraries
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  has_secure_password
end
