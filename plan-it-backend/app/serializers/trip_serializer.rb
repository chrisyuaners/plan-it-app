class TripSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :title, :description, :users, :todos, :expenses, :comments
  has_many :users, include_nested_associations: true
  has_many :todos, include_nested_associations: true
  has_many :expenses, include_nested_associations: true
  has_many :comments, include_nested_associations: true
end
