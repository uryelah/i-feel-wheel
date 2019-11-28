require 'test_helper'

class FeelingPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get feeling_pages_home_url
    assert_response :success
  end

end
