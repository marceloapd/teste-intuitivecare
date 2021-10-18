const service = require('../services')


module.exports = {
    async searchDb(req,res,next){
        try{
            let result = await service.relatorio.searchDb(req.query)
            res.json({
                result
            })
        } catch(error){
            return next(error)
        }
    }
}