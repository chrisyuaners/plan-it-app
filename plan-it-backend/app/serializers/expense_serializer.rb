class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :item, :cost, :count
  has_one :trip
end
