const logRequest = (req, res, next) => { // middleware, bisa dibuat lebih dari 1, eksekusi scr berurutan
	console.log('Terjadi request ke PATH: ', req.path);
	next();
}

module.exports = logRequest;