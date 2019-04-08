const handleMaxes = (req, res, db) => {
	const { id, squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement } = req.body;
	db('users').where('id', '=', id)
		.update({
			squat: squat,
			bench: bench,
			deadlift: deadlift,
			ohp: ohp,
			powerclean: powerclean,
			squat_increment: squatIncrement,
			bench_increment: benchIncrement,
			deadlift_increment: deadliftIncrement,
			ohp_increment: ohpIncrement,
			powerclean_increment: powercleanIncrement
		})
		.returning([
			'squat', 
			'bench', 
			'deadlift', 
			'ohp', 
			'powerclean', 
			'squat_increment', 
			'bench_increment', 
			'deadlift_increment', 
			'ohp_increment', 
			'powerclean_increment'
			])
		.then(maxes => {
			res.json(maxes[0]);
		})
		.catch(err => res.status(400).json('unable to get maxes'))
}

module.exports = {
	handleMaxes: handleMaxes
}