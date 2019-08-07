class CreateItineraries < ActiveRecord::Migration[5.2]
  def change
    create_table :itineraries do |t|
      t.references :user_trip, foreign_key: true
      t.string :departure
      t.string :arrival
      t.string :address

      t.timestamps
    end
  end
end
