const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    
    // capture error menggunakan try-catch
    try {
        const [data] = await UsersModel.getAllUsers();
    
        res.json({
            message: 'GET all data success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;
    // console.log(body);

    if(!body.email || !body.name || !body.address){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }
    
    try {
        await UsersModel.createNewUser(body);
        // res.json({ default status 200 tidak sesuai dg HTTP Request POST
            res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    // console.log(user);
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser, 
    updateUser,
    deleteUser
}