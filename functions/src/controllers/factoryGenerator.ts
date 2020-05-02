const catchAsync = require('./../utils/catchAsync');

exports.getAll = (resource: string) => {
	return catchAsync((async (req: any, res: any) => {
		res.status(200).json({
			status: 'success',
			resource
		});
	}));
};