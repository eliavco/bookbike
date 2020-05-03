const { Model, schema, field, ValidationError } = require('firestore-schema-validator');

const uniqueFields: [string?] = [];

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

	get fullName() {
		return `${this._data.firstName} ${this._data.lastName}`;
	}

	toJSON() {
		return {
			id: this._id, // ID of Document stored in Cloud Firestore
			createdAt: this._createdAt, // ISO String format date of Document's creation.
			updatedAt: this._updatedAt, // ISO String format date of Document's last update.
			fullName: this.fullName,
			email: this.email,
		};
	}
}

const checkExists = async (fieldType: string, value: any): Promise<boolean> => {
	const result = await BikeModel.getBy(fieldType, value);
	if (result) return true;
	return false;
};

uniqueFields.forEach(uniqueField => {
	BikeModel.prehook(uniqueField, async (data: any, bike: BikeModel) => {
		const result = await checkExists(uniqueField!, data[uniqueField!]);
		if (result) throw new ValidationError(`A doucment with that ${uniqueField}: ${data[uniqueField!]} already exists`);
	})
});

exports.Bike = BikeModel;