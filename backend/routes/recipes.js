const express = require('express');
const { body} = require('express-validator');
const RecipeController = require('../controllers/Recipecontroller');
const ErrorHandleMessage = require ('../middlewares/ErrorHandleMessage.js')
const router = express.Router();
const upload = require ('../helpers/upload.js')
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

router.post('/:id/upload',[
    upload.single('photo'),
    body('photo').custom((value,{req})=>{
        if(!req.file){
            throw new Error('photo is required')
        }
        if(!req.file.mimetype.startsWith('image')){
            throw new Error('Photo must be image')
        }
        return true;
    })
    ], ErrorHandleMessage, RecipeController.upload);
module.exports = router;