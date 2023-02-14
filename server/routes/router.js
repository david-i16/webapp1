const express = require('express');
const route = express.Router();
route.use(express.static(__dirname+"/uploads/"));

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
route.get('/add-user', services.add_user);
route.get('/update-user', services.update_user);

//API
route.post('/api/users', controller.upload, controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.upload, controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route