class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :avatar, :trips, :user_trips, :itineraries, :itinerary_destinations
  has_many :trips, include_nested_associations: true
  has_many :user_trips, include_nested_associations: true
  has_many :itineraries, include_nested_associations: true
  has_many :itinerary_destinations, include_nested_associations: true
end
