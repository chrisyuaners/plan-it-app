class Trip < ApplicationRecord
  has_many :todos
  has_many :expenses
  has_many :users, through: :user_trips
  has_many :user_trips
end
