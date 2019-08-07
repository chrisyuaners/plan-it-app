class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :item, :cost, :count
  belongs_to :trip
end
