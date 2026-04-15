const {
  validarCamposObrigatorios,
  validarDistancia,
  validarTempo,
  validarTipo,
  validarData
} = require('../validations/treinos.validation');

let treinos = [];
let idAtual = 1;

function criarTreino(dados) {
  const erroCampos = validarCamposObrigatorios(dados);
  if (erroCampos) return { erro: erroCampos };

  const erroDistancia = validarDistancia(dados.distanciaKm);
  if (erroDistancia) return { erro: erroDistancia };

  const erroTempo = validarTempo(dados.tempoMin);
  if (erroTempo) return { erro: erroTempo };

  const erroTipo = validarTipo(dados.tipo);
  if (erroTipo) return { erro: erroTipo };

  const erroData = validarData(dados.data);
  if (erroData) return { erro: erroData };

  const ritmoMinPorKm = Number((dados.tempoMin / dados.distanciaKm).toFixed(2));

  const treino = {
    id: idAtual++,
    ...dados,
    ritmoMinPorKm,
    createdAt: new Date().toISOString()
  };

  treinos.push(treino);

  return treino;
}

module.exports = {
  criarTreino
};