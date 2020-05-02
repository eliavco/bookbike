const factory = require('./factoryGenerator');

exports.getAllBikes = factory.getAll('bikes');

exports.createBike = factory.create('bikes', {
	name: 'Tokyo',
	country: 'Japan'
});