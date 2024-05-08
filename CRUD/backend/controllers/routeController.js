const Route = require('../models/routeModel');

// Контролер для створення маршруту
exports.createRoute = async (req, res) => {
    try {
        const route = await Route.create(req.body);
        res.status(201).json({ success: true, data: route });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для отримання всіх маршрутів
exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json({ success: true, data: routes });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для оновлення маршруту за ідентифікатором
exports.updateRoute = async (req, res) => {
    try {
        const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: route });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для видалення маршруту за ідентифікатором
exports.deleteRoute = async (req, res) => {
    try {
        await Route.findByIdAndDelete(req.params.id);
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для отримання маршрутів у форматі JSON
exports.getRoutesJSON = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
