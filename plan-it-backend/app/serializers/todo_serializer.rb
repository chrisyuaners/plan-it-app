class TodoSerializer < ActiveModel::Serializer
  attributes :id, :content, :trip_id
  belongs_to :trip
end
