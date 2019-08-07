class TripSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :title, :description, :users
  has_many :users, include_nested_associations: true
end
