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

function create(req, res) {
  const flight = new Flight(req.body)
  console.log(flight)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

//Dont forget to export!
export {
  index,
  newFlight as new,
  create
}