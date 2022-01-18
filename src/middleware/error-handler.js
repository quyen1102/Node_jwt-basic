const CustomAPIError = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError) { // test to see err appears in Error obj
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).send('Something went wrong, try again later')
}

module.exports = errorHandlerMiddleware