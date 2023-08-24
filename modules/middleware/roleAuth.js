const User = require("../auth/models/user");
const { verifyToken } = require("../helpers/generateToken");


const checkRoleAuth = (roles) => async (req, res, next) => {
   try{
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        const userData = await User.findByPk(tokenData.id);
        
        if([].concat(roles).includes(userData.role_id)){
            next()
        }else{
            res.status(500).json({msg:'no tienes acceso contactate con el administrador'});

    }
   }catch(error){
            res.status(500).json({msg:'no tienes acceso contactate con el administrador'});
   }


}

module.exports = checkRoleAuth;