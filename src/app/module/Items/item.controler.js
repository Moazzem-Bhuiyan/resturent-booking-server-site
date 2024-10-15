import itemService from "./item.service.js"


const insertItemInfo = async(req,res,next)=>{

    try {
        const result = await itemService.insertItemInfo(req.body);

        res.status(200).json({
            success : true ,
            message : 'item create succecfully',
            data:result,
        });
        
    } catch (error) {

    next(error)
        
    }


}

// getSignle

const getSignleItem =async(req,res,next)=>{

    try {
        const result = await itemService.getSignleItem(req.params.id);

        res.status(200).json({
            success:true,
            message:"single item get succecfully",
            data:result
        })
        
    } catch (error) {
        
        next(error)
    }

};

// getAllItem 

const getAllItem =async(req,res,next)=>{

    try {

        const result = await itemService.getAllitem();

        res.status(200).json({
            success: true,
            message: " all item get succecfully",
            data: result,
          });

        
    } catch (error) {
        
        next (error)
    }
}


// deleteSingleitem 

const deleteSingleItem = async(req,res,next)=>{

    try {

        const result = await itemService.deleteSingleItem(req.params.id)

        res.status(200).json({
            success: true,
            message: "delete Successfully",
            data: result
        })
        
    } catch (error) {

        next(error)
        
    }
}

// updateSignleItem 

const updateSignleItem = async(req,res,next)=>{

    try {

        const result = await itemService.updateSingleItem(req.params.id,req.body);

        res.status(200).json({
            success : true,
            message : "update SuccecFully",
            data : result
        })
        
    } catch (error) {

        next(error)
        
    }
}

const itemContoler ={
    insertItemInfo,
    getSignleItem,
    deleteSingleItem,
    updateSignleItem,
    getAllItem
}

export default itemContoler