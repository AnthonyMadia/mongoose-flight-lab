import { Flight } from "../models/flights.js"

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      error,
      flights: flights,
      title: 'All Flights'
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight"
  }) 
}

function create(req, res) {
  if (req.body.departs === '') delete req.body.departs
  const flight = new Flight(req.body)
  
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

function show (req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', {
      title: 'Flight Details',
      flight: flight
    })
  })
}

//Dont forget to export!
export {
  index,
  newFlight as new,
  create,
  show
}