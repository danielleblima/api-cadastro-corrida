let treinos = [];
let idAtual = 1;

function criarTreino(data) {
  const { data: dataTreino, distanciaKm, tempoMin, tipo, intensidade, observacao } = data;

  const ritmoMinPorKm = Number((tempoMin / distanciaKm).toFixed(2));

  const treino = {
    id: idAtual++,
    data: dataTreino,
    distanciaKm,
    tempoMin,
    tipo,
    intensidade,
    observacao,
    ritmoMinPorKm,
    createdAt: new Date().toISOString()
  };

  treinos.push(treino);

  return treino;
}

module.exports = { criarTreino };