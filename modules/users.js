const { sequelize } = require('../models/users');
const User = require('../models/users');
const queriesSQL = require('../utils/querys');


const signUpNewUser = async (email, password) => {
    try {
        const newUser = await User.create({ email: email, password: password } /* , { fields: ['user', 'password'] } */)
        console.log(newUser, ' was saved to the database!');
    } catch (error) {
        console.log(error)
    }
}


const checkSignedUpUser = async (email, password) => {
    try {
        const [results, metadata] = await sequelize.query(selectUsersByEmailAndPassword);
        return results

    } catch (error) {
        console.log(error)
    }
}


const usersQuerys = {
    signUpNewUser,
    checkSignedUpUser

}


module.exports = usersQuerys