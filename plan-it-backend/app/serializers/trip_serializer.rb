class TripSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :title, :description
end
