import { Meal } from "../models/meals.js"

function newMeal (req, res) {
  res.render('meals/new', {
    title: "Add Meal"
  }) 
}

function create(req, res) {
  Meal.create(req.body, function (err, meal) {
    res.redirect('/meals')
  })
}

export {
  newMeal as new,
  create
}