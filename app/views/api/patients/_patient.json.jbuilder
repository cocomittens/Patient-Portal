json.set! patient.id do 
    json.extract! patient, :id, :name, :email, :dob, :phone, :address
end