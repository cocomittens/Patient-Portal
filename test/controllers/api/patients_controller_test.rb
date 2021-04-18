require "test_helper"

class Api::PatientsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_patients_index_url
    assert_response :success
  end
end
