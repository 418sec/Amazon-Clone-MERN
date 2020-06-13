import express from 'express';

const router = express.Router();

// Load validator
const {
    validSignUp
  } = require("../helpers/authValidation");

// Load all controllers
const { registerController, activationController, signinController } = require( '../controllers/auth.controller');

// Routes 
router.post("/register",validSignUp, registerController);
router.post("/activation", activationController);
router.post("/signin", signinController);

export default router;