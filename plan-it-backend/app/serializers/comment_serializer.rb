class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :author_id
  has_one :trip
end
