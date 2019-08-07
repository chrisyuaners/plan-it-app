class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.references :trip, foreign_key: true
      t.string :item
      t.float :cost
      t.integer :count

      t.timestamps
    end
  end
end
