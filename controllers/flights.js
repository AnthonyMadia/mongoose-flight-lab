import { Flight } from "../models/flights.js"

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      flights: flights
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  if (req.body.departs === '') delete req.body.departs
  const flight = new Flight(req.body)
  
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