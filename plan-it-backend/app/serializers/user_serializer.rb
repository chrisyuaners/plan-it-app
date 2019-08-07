class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :trips, :user_trips
  has_many: :trips, include_nested_associations: true
  has_many: :user_trips, include_nested_associations: true
end
