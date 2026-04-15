const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

setInterval(() => {
  console.log('Servidor ainda rodando...');
}, 5000);
