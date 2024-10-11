import User from "./user.model.js";

// insertUser info

const insertUserinfo = async (data) => {
  const result = await User.create(data);

  return result;
};


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
  getAllUser
  
  
};

export default userServices;
