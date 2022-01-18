
const jwt = require('jsonwebtoken')
const {UnAuthencatedError} = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnAuthencatedError('No token provided')
    }
    const token = authHeader.split(' ')[1]
    try {
    const decoded = jwt.verify(token, process.env.JWT_SCECRET)
    const {id, username} = decoded
    req.user = {id, username}
    
    next() 
  } catch (error) {
    throw new UnAuthencatedError('Not authorized to access this route ')
    
  }

}

module.exports = authenticationMiddleware