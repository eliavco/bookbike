const { Model, schema, field } = require('firestore-schema-validator');

const bikeSchema = schema({
	firstName: field('First Name')
		.string()
		.trim(),
	lastName: field('Last Name')
		.string()
		.trim(),
	email: field('Email Address')
		.string()
		.email(),
});

class BikeModel extends Model {
	// Path to Cloud Firestore collection.
	static get _collectionPath() {
		return 'bikes';
	}

	// Model Schema.
	static get _schema() {
		return bikeSchema;
	}
}

exports.Bike = BikeModel;