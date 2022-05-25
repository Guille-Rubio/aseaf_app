const { validateEmail, validatePassword } = require('../utils/regex');
const usersQuerys = require('../modules/usersQuerys')
const tokens = require('../utils/createToken');




const signup = async (req, res) => {
    //securizar query (eliminar caracteres raros)

    const { name, surname, email, password, consentGDPR, userType, ageRange, children, childrenAge, zipCode, openQuestion, apiResponse } = req.body;

    console.log(name, email, password)
    res.status(200).json({ msg: "ok" })


}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await usersQuerys.checkSignedUpUser(email, password)
        user.password ? res.status(400).json({ msg: "invalid user or password" }) : "";
        if (password === user[0].password) {
            const token = await tokens.createToken(email)
            console.log(token)
            res.status(200).cookie("access_token", token, { httpOnly: true }).json({ msg: "user loged as " + email })

        } else {
            res.status(400).send("Invalid user or password");
        }

    } catch (error) {
        console.log("ERROR", error)
        res.status(400).send("Bad Request")
    }

}

const logout = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ msg: error })

    }

}


const users = {
    signup,
    login,
    logout

}


module.exports = users;