

require 'spec_helper'

describe 'Routes' do

  before :each do
    @base_url = "http://127.0.0.1:3012"
  end
  
  it 'root' do
    response = HTTParty.get "#{@base_url}/"
    response.code.should eql 200
  end

end

