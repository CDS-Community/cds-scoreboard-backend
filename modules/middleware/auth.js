const { verifyToken } = require("../helpers/generateToken");


const checkAuth = async (req, res, next) => {
   try{
        const token = req.headers.authotization.split(' ').pop();
        const tokenData = await verifyToken(token);
        console.log(tokenData);
        if(tokenData.id){
            next()
        }else{
            res.status(500).json({msg:'no tienes acceso contactate con el administrador'});

    }
   }catch(error){
            res.status(500).json({msg:'no tienes acceso contactate con el administrador'});
   }


}

module.exports = checkAuth();


