class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :start_date
      t.string :end_date
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
