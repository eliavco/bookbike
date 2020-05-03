const uniqid = require('uniqid');

const catchAsync = require('./../utils/catchAsync');

const AppErrorF = require('./../utils/appError');

exports.getAll = (resource: string) => {
	return catchAsync((async (req: any, res: any, next: any) => {
		try {
			// console.log(req.st);

			const snapshot = await req.db.collection(resource).get();
			const documents: [any?] = [];
			snapshot.forEach((doc: any) => documents.push(doc.data()));
			res.status(200).json({
				status: 'success',
				resource,
				length: documents.length,
				documents
			});
		} catch (err) {
			return next(new AppErrorF(`Could not load data for ${resource} from database`, 404));
		}
	}));
};

exports.create = (resource: string, data: any) => {
	return catchAsync((async (req: any, res: any, next: any) => {
		try {
			const info = await req.db.collection(resource).add(data);
			res.status(200).json({
				status: 'success',
				resource,
				data: info.id
			});
		} catch (err) {
			return next(new AppErrorF(`Could not create data for ${resource} from database`, 404));
		}
	}));
};