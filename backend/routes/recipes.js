const express = require('express');
const { body} = require('express-validator');
const RecipeController = require('../controllers/Recipecontroller');
const ErrorHandleMessage = require ('../middlewares/ErrorHandleMessage.js')
const router = express.Router();

// '/api/recipes'

// get all recipes
router.get('',RecipeController.index);

// create or store recipes
router.post('',[
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('ingredients').notEmpty().isArray({min : 3})
    ], ErrorHandleMessage, RecipeController.store);


// get single recipe
router.get('/:id',RecipeController.show);
// delete recipe
router.delete('/:id',RecipeController.destroy);
// patch, update recipe
router.patch('/:id',RecipeController.update);

module.exports = router;