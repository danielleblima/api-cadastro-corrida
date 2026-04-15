# 🏃 API de Cadastro de Treinos de Corrida

## 📌 Introdução

Esta é uma API REST desenvolvida em Node.js para cadastro de treinos de corrida, com foco em qualidade de código, testes automatizados e validação de regras de negócio.

O projeto foi construído utilizando TDD (Test Driven Development), garantindo cobertura de cenários positivos e negativos.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Mocha
* Chai
* Supertest
* Mochawesome (relatórios de testes)

---

## 📂 Estrutura do projeto

```
src/
 ├── app.js
 ├── routes/
 │    └── treinos.routes.js
 ├── controllers/
 │    └── treinos.controller.js
 ├── services/
 │    └── treinos.service.js
 └── validations/
      └── treinos.validation.js

tests/
 └── treino.js
```

---

## 🎯 Objetivo do projeto

Simular uma API de cadastro de treinos com foco em:

* Aplicação de TDD
* Validação de regras de negócio
* Padronização de respostas de erro
* Organização em camadas (controller, service, validation)

---

## ▶️ Como executar o projeto

### 1. Instalar dependências

```
npm install
```

---

### 2. Executar a API

```
node src/app.js
```

---

## 🧪 Como executar os testes

```
npx mocha tests
```

---

## 📌 Endpoint principal

### POST /treinos

Cria um novo treino

### 📥 Exemplo de request

```json
{
  "data": "2026-04-14",
  "distanciaKm": 5,
  "tempoMin": 30,
  "tipo": "corrida",
  "intensidade": "moderada",
  "observacao": "treino leve"
}
```

---

### 📤 Exemplo de response (201)

```json
{
  "id": 1,
  "data": "2026-04-14",
  "distanciaKm": 5,
  "tempoMin": 30,
  "tipo": "corrida",
  "intensidade": "moderada",
  "observacao": "treino leve",
  "ritmoMinPorKm": 6,
  "createdAt": "2026-04-14T10:00:00.000Z"
}
```

---

## ❌ Padrão de erros

A API retorna erros padronizados:

```json
{
  "erro": "CODIGO_DO_ERRO"
}
```

---

## ⚠️ Regras de negócio

* Distância deve ser maior que 0 e menor ou igual a 100 km
* Tempo deve ser maior que 0
* Tipo deve ser um dos valores válidos:

  * corrida
  * caminhada
  * intervalado
  * longao
* Data não pode ser futura
* Campos obrigatórios:

  * data
  * distanciaKm
  * tempoMin
  * tipo

---

## 🧪 Cenários testados

* Cadastro válido de treino
* Cálculo correto de ritmo
* Payload inválido
* Campo obrigatório ausente
* Data futura
* Tipo inválido / null
* Distância fora do limite
* Tempo inválido

---

## 🧠 Aprendizados

* Aplicação prática de TDD
* Separação de responsabilidades (clean architecture)
* Criação de validações reutilizáveis
* Escrita de testes robustos para API REST

---

## 📈 Melhorias futuras

* Implementar GET /treinos
* Implementar DELETE /treinos/:id
* Adicionar banco de dados
* Implementar validação com biblioteca (Joi ou Zod)
* Adicionar autenticação

---

## 👩‍💻 Autora

Danielle Lima
