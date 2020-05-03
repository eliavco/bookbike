const factory = require('./factoryGenerator');

exports.getAllBikes = factory.getAll('bikes');

exports.getBike = factory.getById('bikes');

exports.createBike = factory.create('bikes');

exports.updateBike = factory.update('bikes');

exports.deleteBike = factory.delete('bikes');

exports.makeQueries = factory.makeQueries({});