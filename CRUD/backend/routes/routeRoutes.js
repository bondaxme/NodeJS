const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');

// Маршрути для CRUD операцій над маршрутами
router.post('/routes', routeController.createRoute); // Створення маршруту
router.get('/routes', routeController.getRoutes); // Отримання всіх маршрутів
router.put('/routes/:id', routeController.updateRoute); // Оновлення маршруту
router.delete('/routes/:id', routeController.deleteRoute); // Видалення маршруту
router.get('/routes-json', routeController.getRoutesJSON); // Отримання всіх маршрутів у форматі JSON

module.exports = router;
