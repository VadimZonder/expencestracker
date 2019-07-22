class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.datetime :date_time
      t.string :name
      t.string :description
      t.decimal :value
      t.string :email

      t.timestamps null: false
    end
  end
end
