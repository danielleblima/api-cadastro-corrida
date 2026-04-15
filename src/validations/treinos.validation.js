function validarTreino(data) {
  const {
    data: dataTreino,
    distanciaKm,
    tempoMin,
    tipo
  } = data;

  // =========================
  // CAMPOS OBRIGATÓRIOS
  // =========================
  if (!dataTreino || distanciaKm === undefined || tempoMin === undefined || !tipo === undefined) {
    return { erro: 'CAMPO_OBRIGATORIO' };
  }

  if (tipo === null || typeof tipo !== 'string') {
    return { erro: 'TIPO_INVALIDO' };
}

  // =========================
  // TIPAGEM
  // =========================
  if (typeof distanciaKm !== 'number' || typeof tempoMin !== 'number') {
    return { erro: 'TIPO_INVALIDO' };
  }

  // =========================
  // DATA FUTURA
  // =========================
  const hoje = new Date();
  const dataObj = new Date(dataTreino);

  hoje.setHours(0, 0, 0, 0);
  dataObj.setHours(0, 0, 0, 0);

  if (dataObj > hoje) {
    return { erro: 'DATA_FUTURA' };
  }

  // =========================
  // DISTÂNCIA
  // =========================
  if (distanciaKm <= 0 || distanciaKm > 100) {
    return { erro: 'DISTANCIA_INVALIDA' };
  }

  // =========================
  // TEMPO
  // =========================
  if (tempoMin <= 0 || tempoMin > 1000) {
    return { erro: 'TEMPO_INVALIDO' };
  }

  // =========================
  // TIPO
  // =========================
  const tiposValidos = ['corrida', 'caminhada'];

  if (!tiposValidos.includes(tipo)) {
    return { erro: 'TIPO_INVALIDO' };
  }

  return null; // válido
}

module.exports = { validarTreino };