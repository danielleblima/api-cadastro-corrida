const express = require('express');
const router = express.Router();
const { cadastrarTreino } = require('../controllers/treinos.controller');

/**
 * @swagger
 * /treinos:
 *   post:
 *     summary: Cadastra um novo treino
 *     tags: [Treinos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - data
 *               - distanciaKm
 *               - tempoMin
 *               - tipo
 *             properties:
 *               data:
 *                 type: string
 *                 example: "2026-04-14"
 *               distanciaKm:
 *                 type: number
 *                 example: 5
 *               tempoMin:
 *                 type: number
 *                 example: 30
 *               tipo:
 *                 type: string
 *                 example: "corrida"
 *               intensidade:
 *                 type: string
 *                 example: "moderada"
 *               observacao:
 *                 type: string
 *                 example: "treino leve"
 *     responses:
 *       201:
 *         description: Treino criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 data:
 *                   type: string
 *                 distanciaKm:
 *                   type: number
 *                 tempoMin:
 *                   type: number
 *                 tipo:
 *                   type: string
 *                 ritmoMinPorKm:
 *                   type: number
 *                   example: 6
 *                 createdAt:
 *                   type: string
 *       400:
 *         description: Erro de validação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 erro:
 *                   type: string
 *                   example: "TEMPO_INVALIDO"
 */

router.post('/treinos', cadastrarTreino);

module.exports = router;