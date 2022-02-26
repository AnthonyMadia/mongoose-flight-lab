import { Flight } from "../models/flights.js"

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      error: error, 
      flights: flights
    })
  })
}