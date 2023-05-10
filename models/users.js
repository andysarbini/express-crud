const connection = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return connection.execute(SQLQuery);
    // connection.execute('SELECT * FROM users', (err, rows) => { tidak perlu callback lagi
    //     if(err) {
    //         res.json({
    //             message: 'connection failed'
    //         })
    //     }

    //     res.json({
    //         message: 'connection success',
    //         data: rows,
    //     })
    // })
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${body.name}', '${body.email}', '${body.address}')`;
    return connection.execute(SQLQuery);
                }

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users
                        SET name = '${body.name}', email = '${body.email}', address = '${body.address}'
                        WHERE id = ${idUser}`;
    return connection.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

    return connection.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}