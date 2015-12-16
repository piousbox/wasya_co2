
require 'spec_helper'

RSpec.describe ApplicationHelper, :type => :helper do

  before :each do
  end
  
  it 'contact_path' do
    result = helper.contact_path
    result.include?( "piousbox" ).should eql false
  end

end
