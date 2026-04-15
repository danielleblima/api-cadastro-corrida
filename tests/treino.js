const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');


describe('Cadastro de Treino', () => {
    it('Deve cadastrar um novo treino', async () => {
        const response = await request(app)
            .post('/treinos')
            .send({
                data: '2026-04-14',
                distanciaKm: 5,
                tempoMin: 30,
                tipo:'corrida',
            });

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        });


    it('Deve retornar o ritmo arredondado para duas casas decimais', async () => {
        const response = await request(app)
            .post('/treinos')
            .send({
                data: '2026-04-14',
                distanciaKm: 3,
                tempoMin: 10,
                tipo:'corrida',
            });

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('ritmoMinPorKm');
        expect(response.body.ritmoMinPorKm).to.equal(3.33);
    });

    it('Deve retornar erro ao cadastrar treino com dados inválidos', async () => {
        const response = await request(app)
            .post('/treinos')
            .send({
                data: '2026-04-14',
                distanciaKm: -5, 
                tempoMin: 30,
                tipo:'corrida',
            });

        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('erro');
        expect(response.body.erro).to.equal('DISTANCIA_INVALIDA'); 

    });

    it('Não deve cadastrar treino com data futura', async () => {
        const response = await request(app)
            .post('/treinos')
            .send({
                data: '2026-12-31', 
                distanciaKm: 5,
                tempoMin: 30,
                tipo:'corrida',
            }); 
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('erro');
        expect(response.body.erro).to.equal('DATA_FUTURA'); 
    });

    it('Não deve cadastrar treino com tipo inválido', async () => {
        const response = await request(app)
            .post('/treinos')
            .send({
                data: '2026-04-14',
                distanciaKm: 5,
                tempoMin: 30,
                tipo:'natação', 
            });     
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('erro');
        expect(response.body.erro).to.equal('TIPO_INVALIDO'); 
    }); 

    it('Não deve cadastrar treino com tempo inválido', async () => {
        const response = await request(app)
            .post('/treinos')
            .send({
                data: '2026-04-14',
                distanciaKm: 5,
                tempoMin: -30, 
                tipo:'corrida',
            });     
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('erro');
        expect(response.body.erro).to.equal('TEMPO_INVALIDO'); 
    });

    it('Não deve cadastrar treino sem data', async () => {
  const response = await request(app)
    .post('/treinos')
    .send({
      distanciaKm: 5,
      tempoMin: 30,
      tipo: 'corrida'
    });

  expect(response.status).to.equal(400);
  expect(response.body.erro).to.equal('CAMPO_OBRIGATORIO');
});

    it('Não deve cadastrar treino com payload vazio', async () => {
  const response = await request(app)
    .post('/treinos')
    .send({});

  expect(response.status).to.equal(400);
  expect(response.body.erro).to.equal('CAMPO_OBRIGATORIO');
});

it('Não deve cadastrar treino com tipo null', async () => {
  const response = await request(app)
    .post('/treinos')
    .send({
      data: '2026-04-14',
      distanciaKm: 5,
      tempoMin: 30,
      tipo: null
    });

  expect(response.status).to.equal(400);
  expect(response.body.erro).to.equal('TIPO_INVALIDO');
});

it('Não deve cadastrar treino com tipo desconhecido', async () => {
  const response = await request(app)
    .post('/treinos')
    .send({
      data: '2026-04-14',
      distanciaKm: 5,
      tempoMin: 30,
      tipo: 'voar' // inválido 😄
    });

  expect(response.status).to.equal(400);
  expect(response.body.erro).to.equal('TIPO_INVALIDO');
});

it('Não deve cadastrar treino com distância muito alta', async () => {
  const response = await request(app)
    .post('/treinos')
    .send({
      data: '2026-04-14',
      distanciaKm: 1000,
      tempoMin: 60,
      tipo: 'corrida'
    });

  expect(response.status).to.equal(400);
  expect(response.body.erro).to.equal('DISTANCIA_INVALIDA');
});

it('Não deve cadastrar treino com tempo negativo extremo', async () => {
  const response = await request(app)
    .post('/treinos')
    .send({
      data: '2026-04-14',
      distanciaKm: 5,
      tempoMin: -999,
      tipo: 'corrida'
    });

  expect(response.status).to.equal(400);
  expect(response.body.erro).to.equal('TEMPO_INVALIDO');
});

    
});              
