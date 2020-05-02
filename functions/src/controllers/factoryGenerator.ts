const catchAsync = require('./../utils/catchAsync');

exports.getAll = (resource: string) => {
	return catchAsync((async (req: any, res: any) => {
		const snapshot = await req.db.collection(resource).get();
		const documents: [any?] = [];
		snapshot.forEach((doc: any) => documents.push(doc.data()));
		res.status(200).json({
			status: 'success',
			resource,
			documents
		});
	}));
};