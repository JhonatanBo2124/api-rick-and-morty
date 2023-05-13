const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query
    // for (let i = 0; i < users.length; i++) {
    //    if (users[i].email === email && users[i].password === password) {
    //     console.log('{acces: true}');
    //     return res.status(200).json({access: true})
    //    } else {
    //     return res.status(200).json({access: false})
    //    }
    // }
    const userFound = users.find((user) => user.email === email && user.password === password)
    return userFound ? res.status(200).json({access: true}) : res.status(200).json({access: false})
}
module.exports = {
    login
}