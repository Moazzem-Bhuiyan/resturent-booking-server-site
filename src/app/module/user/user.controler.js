import userServices from "./user.service.js";



// insertUser info
const insertUserinfo = async (req, res, next) => {
  try {
    const result = await userServices.insertUserinfo(req.body);

    res.status(200).json({
      success: true,
      message: "user created succecfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// getSingle Userinfo 
const getSingleUser = async (req, res, next) => {
  try {
    const result = await userServices.getSingleUser(req.params.id);

    res.status(200).json({
      success: true,
      message: "user get succecfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


// get AllUserInfo
const getAllUser = async (req, res, next) => {
  try {
    const result = await userServices.getAllUser();

    res.status(200).json({
      success: true,
      message: " all user get succecfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



// updateUserInfo
const updateSingleUser = async (req, res, next) => {
  try {
    const result = await userServices.updateSingleUser(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "user uppdate succecfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// deleteSugnleUser
const deleteSignleUser = async (req, res, next) => {
  try {
    const result = await userServices.deleteSignleUser(req.params.id);
    res.status(200).json({
      success: true,
      message: "Delte SUccecssFully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



const userControler = {
  insertUserinfo,
  getSingleUser,
  updateSingleUser,
  deleteSignleUser,
  getAllUser
};

export default userControler;
