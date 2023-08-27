const { verifyToken } = require("../helpers/generateToken");
const User = require("../modules/auth/models/user");




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
   }catch(e){
            console.error(e);
   }


}

module.exports = checkRoleAuth;