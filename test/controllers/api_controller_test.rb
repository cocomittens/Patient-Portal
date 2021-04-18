require "test_helper"

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get Sessions" do
    get api_Sessions_url
    assert_response :success
  end
end
