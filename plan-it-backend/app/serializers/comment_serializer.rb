class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :author
  has_one :trip
end
