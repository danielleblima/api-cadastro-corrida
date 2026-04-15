const { criarTreino } = require('../services/treinos.service');

function cadastrarTreino(req, res) {
  const resultado = criarTreino(req.body);

  if (resultado.erro) {
    return res.status(400).json({ erro: resultado.erro });
  }

  return res.status(201).json(resultado);
}

module.exports = {
  cadastrarTreino
};