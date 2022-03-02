import { Flight } from "../models/flight.js"

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
      err,
      title: 'Flight Details',
      flight: flight
    })
  })
}

function edit(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/edit', {
      flight,
      err,
      title: "Edit Flight"
    })
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight) {
    res.redirect(`/flights/${flight._id}`)
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


//Dont forget to export!
export {
  index,
  newFlight as new,
  create,
  show,
  edit,
  update,
  createTicket
}