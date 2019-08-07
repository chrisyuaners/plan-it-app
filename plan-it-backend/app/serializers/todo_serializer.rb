class TodoSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :trip
end
