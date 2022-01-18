


const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')


const login = async(req, res) => {
  const {username, password} = req.body
  if(!username || !password) {
    throw new BadRequest('Must provide a username and password', 400)
  }

  const id = new Date().getDate()

  const token = jwt.sign({id, username}, process.env.JWT_SCECRET, {expiresIn: '30d'})

  res.status(200).json({msg:'user created', token})
}


const dashboard = async ( req, res, next ) => {
  // console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100)
  res
    .status(200)
    .json({msg:`Hello ${req.user.username}`, 
      secret:`Here is your authenrized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}