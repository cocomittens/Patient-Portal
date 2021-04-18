class DropApiPatients < ActiveRecord::Migration[6.1]
  def change
    drop_table :api_patients
  end
end
