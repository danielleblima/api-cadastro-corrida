const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Cadastro de Treinos',
      version: '1.0.0',
      description: 'API para cadastro de treinos de corrida'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ],
    tags: [
      {
        name: 'Treinos',
        description: 'Operações relacionadas a treinos'
      }
    ]
  },
  apis: [path.join(__dirname, '../routes/*.js')]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;