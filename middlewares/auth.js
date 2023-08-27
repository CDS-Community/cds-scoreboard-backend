const { verifyToken } = require("../helpers/generateToken");





const checkAuth = async (req, res, next) => {
   try{
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        console.log(tokenData);
        if(tokenData.id){
            next()
        }else{
            res.status(500).json({msg:'no tienes acceso contactate con el administrador'});

    }
   }catch(e){
           console.error(e);
   }


}

module.exports = checkAuth;


