class Trip < ApplicationRecord
  has_many :user_trips
  has_many :users, through: :user_trips
  has_many :todos
  has_many :expenses
  has_many :comments
end
