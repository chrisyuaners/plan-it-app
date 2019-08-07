class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :departure, :arrival, :address
  has_one :user_trip
end
