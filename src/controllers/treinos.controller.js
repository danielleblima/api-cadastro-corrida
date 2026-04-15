const { validarTreino } = require('../validations/treinos.validation');
const { criarTreino } = require('../services/treinos.service');

function cadastrarTreino(req, res) {
  const erro = validarTreino(req.body);

  if (erro) {
    return res.status(400).json(erro);
  }

  const treino = criarTreino(req.body);

  return res.status(201).json(treino);
}

module.exports = { cadastrarTreino };