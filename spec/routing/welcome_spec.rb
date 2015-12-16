

require 'spec_helper'

describe 'Routes' do

  before :each do
    @base_url = "http://127.0.0.1:3012"
  end
  
  it 'root' do
    expect( :get => '/' ).to route_to( "welcome#home" )
  end

end

