class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :item, :cost, :count, :trip_id
  belongs_to :trip
end
