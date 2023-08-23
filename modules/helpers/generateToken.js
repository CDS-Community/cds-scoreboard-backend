const jwt = require("jsonwebtoken");

const tokenSign = async(user) => {
  return jwt.sign(
    {
        id: user.id,
        role: user.role_id
    },

    process.env.JWT_SECRET,

    {expiresIn:"2h",}

  )
}


const verifyToken = (token) => {
   try{
    return jwt.verify(token, process.env.JWT_SECRET)
   }catch(error){
      return null
   }
}

const decodeSing = (token) => {

}

module.exports = {tokenSign,decodeSing,verifyToken}