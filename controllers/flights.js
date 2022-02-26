import { Flight } from "../models/flights.js"

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      error: error,
      flights: flights,
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new')
}

//Dont forget to export!
export {
  index,
  newFlight as new
}