const catchAsync = require('./../utils/catchAsync');

exports.getAll = (resource: string) => {
	return catchAsync((async (req: any, res: any) => {
		try {
			const documents = await req.db.collection(resource).get();
			res.status(200).json({
				status: 'success',
				resource,
				documents
			});
		} catch (err) {
			res.status(404).json({ status: 'failure' });
		}
	}));
};