
require 'spec_helper'

RSpec.describe WelcomeController, :type => :controller do

  render_views

  before :each do
  end

  it '#home' do
    get :home
    response.should be_success
    response.should render_template( :home )
    response.should render_template( 'welcome/_services' )
    response.should render_template( 'welcome/_contact' )
  end

end

