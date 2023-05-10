// require('dotenv').config() not working

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;

const express = require('express');

const usersRoutes = require('../routes/users');

const middlewareLogRequest = require('../middleware/logs');
const upload = require('../middleware/multer');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));

// app.method(path, handler);
//app.use("/", (req, res, next) => { bisa digunakan sebagai middleware
//	res.send('Hello World');
//})

app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
	res.json({
		message: 'Upload berhasil'
	})
})

app.use((err, req, res, next) => {
	res.json({
		message: err.message
	})
})
// app.get("/cobaUser", (req, res, next) => {

// 	const data = {
//         name: "adit",
//         email: "adit@gmail.com",
//         address: "ciputat"
//     }

//     res.json({
//         message: 'Coba user sukses',
//         data: data
//     })
// });

// app.post("/", (req, res, next) => {
// 	res.send('Hello Post Method');
// });

app.listen(PORT, () => {
	console.log(`Server berhasil di running di port ${PORT}`);
});
