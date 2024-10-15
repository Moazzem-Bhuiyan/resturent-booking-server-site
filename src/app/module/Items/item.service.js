import Item from "./item.model.js";

// insertItem info

const insertItemInfo = async (data) => {
  const result = await Item.create(data);
  return result;
};

// get single Item

const getSignleItem = async (id) => {
  const result = await Item.findById(id);

  return result;
};

// getAllItem 

const getAllitem = async()=>{

    const  result = await Item.find();
    return result
}

// DeleteSingleItem

const deleteSingleItem = async (id) => {
  const result = await Item.deleteOne({ _id: id });
  return result;
};


// updateSignleItem 

const updateSingleItem = async(id,data)=>{

    const result = await Item.findByIdAndUpdate(id,data,{new:true})
    return result;
}

const itemService = {
  insertItemInfo,
  getSignleItem,
  deleteSingleItem,
  updateSingleItem,
  getAllitem
};

export default itemService;
