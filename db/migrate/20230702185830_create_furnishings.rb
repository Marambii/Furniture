class CreateFurnishings < ActiveRecord::Migration[7.0]
  def change
    create_table :furnishings do |t|
      t.string :image
      t.float :price
      t.string :description
      t.string :category
      t.integer :rating
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
