function validarCamposObrigatorios({ data, distanciaKm, tempoMin, tipo }) {
  if (!data || !distanciaKm || !tempoMin || tipo === undefined) {
    return 'CAMPO_OBRIGATORIO';
  }
}

function validarDistancia(distanciaKm) {
  if (distanciaKm <= 0 || distanciaKm > 100) {
    return 'DISTANCIA_INVALIDA';
  }
}

function validarTempo(tempoMin) {
  if (tempoMin <= 0) {
    return 'TEMPO_INVALIDO';
  }
}

function validarTipo(tipo) {
  const tiposValidos = ['corrida', 'caminhada', 'intervalado', 'longao'];
  if (!tiposValidos.includes(tipo)) {
    return 'TIPO_INVALIDO';
  }
}

function validarData(data) {
  const dataTreino = new Date(data);

  if (isNaN(dataTreino)) {
    return 'DATA_INVALIDA';
  }

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  dataTreino.setHours(0, 0, 0, 0);

  if (dataTreino > hoje) {
    return 'DATA_FUTURA';
  }
}

module.exports = {
  validarCamposObrigatorios,
  validarDistancia,
  validarTempo,
  validarTipo,
  validarData
};