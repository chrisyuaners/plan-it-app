class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :departure, :arrival, :address
  belongs_to :user_trip
end
