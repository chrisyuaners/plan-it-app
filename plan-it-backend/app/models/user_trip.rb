class UserTrip < ApplicationRecord
  has_many :itineraries, dependent: :delete_all
  belongs_to :user
  belongs_to :trip
end
