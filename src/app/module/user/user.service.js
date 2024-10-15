import User from "./user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// insertUser info

const insertUserinfo = async (data) => {

  const hashData = {...data}

  const hashPassword = await bcrypt.hash(hashData.password,12)

   hashData.password = hashPassword


  const result = await User.create(hashData);

  return result;
};

// loginuser

const logedinuser = async(data)=>{

  const isUserExist = await User.findOne({email:data.email})
 if(!isUserExist){
  throw new Error ("usernot Exist")
 }

 const ispasswordMatched  = await bcrypt.compare(data?.password,isUserExist.password)
if(!ispasswordMatched){
  throw new Error (" your password is wrong")
}
const userObj = {

  userId : isUserExist._id,
  email : isUserExist.email,
  role : isUserExist.role

}

const token = jwt.sign(userObj,"resturentMoazzem05",{expiresIn:"2d"})

return {
  data : isUserExist,
  token:token
}


}

// getSingle Userinfo 

const getSingleUser = async(id)=>{

  const result = await User.findById(id)
  return result;
}

// get AllUserInfo

const getAllUser =async()=>{
  const result = await User.find();
  return result



}

// updateUserInfo

const updateSingleUser = async(id,data)=>{

 const result = await User.findByIdAndUpdate(id,data,{new:true})

  return result
}

// deleteSugnleUser
const deleteSignleUser = async(id)=>{

  const result = await User.deleteOne({_id : id})
return result

}



const userServices = {
  insertUserinfo,
  getSingleUser,
  updateSingleUser,
  deleteSignleUser,
  getAllUser,
  logedinuser
  
  
};

export default userServices;
