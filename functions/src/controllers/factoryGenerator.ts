const uniqid = require('uniqid');

const catchAsync = require('./../utils/catchAsync');

const AppErrorF = require('./../utils/appError');

exports.getAll = (resource: string) => {
	return catchAsync((async (req: any, res: any, next: any) => {
		try {
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
		// try {
			const info = await req.dbm.Bike.create({
				firstName: 3,
				lastName: 'Doe',
				email: 'jon.doe@example.com',
				password: 'J0nD03!@#',
				birthDate: '1990-01-10',
			});
			console.log(info);
			res.status(200).json({
				status: 'success',
				resource,
				// data: info.toJson()
			});
		// } catch (err) {
		// 	next(new AppErrorF(`Could not load data for ${resource} from database`, 404));
		// }
	}));
};

// exports.getAll = (resource: string) => {;;
// 	return catchAsync((async (req: any, res: any, next: any) => {
// 		try {
// 			const id = uniqid();
// 			await req.st.upload(__dirname + './../dev-data/bloob.txt', { destination: `users/${id}` });
// 			const data = await req.st.file(`users/${id}`).download();

// 			const snapshot = await req.db.collection(resource).get();
// 			const documents: [any?] = [];
// 			snapshot.forEach((doc: any) => documents.push(doc.data()));
// 			res.status(200).json({
// 				status: 'success',
// 				resource,
// 				length: documents.length,
// 				documents,
// 				info: data[0].toString()
// 			});
// 		} catch (err) {
// 			return next(new AppErrorF(`Could not load data for ${resource} from database`, 404));
// 		}
// 	}));
// };