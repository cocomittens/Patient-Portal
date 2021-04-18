class CreateApiPatients < ActiveRecord::Migration[6.1]
  def change
    create_table :api_patients do |t|

      t.timestamps
    end
  end
end
