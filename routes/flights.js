import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// localhost: 3000/flights
router.get('/', flightsCtrl.index)
// localhost: 3000/flights/new
router.get('/new', flightsCtrl.new)

export {
  router
}
