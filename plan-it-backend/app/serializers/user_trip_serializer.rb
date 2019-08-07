class UserTripSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user_id
  has_one :trip_id
end
