const express = require('express');
const router = express.Router();
const { cadastrarTreino } = require('../controllers/treinos.controller');

router.post('/treinos', cadastrarTreino);

module.exports = router;