class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :trip_id, :itineraries
  has_one :user_id
  has_one :trip_id
  has_many :itineraries, include_nested_associations: true
end
