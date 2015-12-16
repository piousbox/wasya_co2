
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'httparty'
require 'rspec/autorun'
require 'rspec/rails'

ENV["RAILS_ENV"] ||= 'test'

RSpec.configure do |config|
  config.order = "random"
  
end

def puts! args, label=""
  puts "+++ +++ #{label}"
  puts args.inspect
end

