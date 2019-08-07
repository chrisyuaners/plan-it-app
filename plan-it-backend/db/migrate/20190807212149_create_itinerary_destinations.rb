class CreateItineraryDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :itinerary_destinations do |t|
      t.references :itinerary, foreign_key: true
      t.references :destination, foreign_key: true
      t.boolean :from

      t.timestamps
    end
  end
end
