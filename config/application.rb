require File.expand_path('../boot', __FILE__)

# require 'rails/all'
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module WasyaCo3
  class Application < Rails::Application
    paths['public'] = File.join( Rails.root, "public_rails" )    
  end
end
