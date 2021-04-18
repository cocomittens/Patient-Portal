class AddPropertiesPatients < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :name, :string
    add_column :patients, :dob, :string
    add_column :patients, :phone, :string
    add_column :patients, :email, :string
    add_column :patients, :address, :string
  end
end
