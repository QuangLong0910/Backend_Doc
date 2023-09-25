var myModel = require("../model/Binhluan.model");
exports.list = async (req, res, next)=>{
     
        let name = req.query.name;
    try {
       
        let list = await  myModel.BinhLuanModel.find({name:name});
    
      res.json(list);
     } catch (error) {
        return res.status(204).json({msg:error.message});
     }

 }
 
 exports.add = async (req,res,next)=>{
    try {
       
        let objnd =new myModel.BinhLuanModel();

        objnd.tenTaiKhoan = req.body.tenTaiKhoan;
        objnd.Image = req.body.Image;
        objnd.name = req.body.name;
        objnd.noiDung = req.body.noiDung;
       
        await objnd.save();
        res.status(201).json(objnd);
     
    } catch (error) {
        console.log(error);    
    }
  

 }
 exports.edit = async (req,res,next)=>{
    try {
        let id = req.params.id;

        let objnd = myModel.BinhLuanModel.findById(id);
        objnd.tenTaiKhoan = req.body.idNguoiDung;
        objnd.Image = req.body.Image;
        objnd.name = req.body.idTruyen;
        objnd.noiDung = req.body.noiDung;
        
      await  myModel.BinhLuanModel.findByIdAndUpdate(id,objnd);
        res.status(201).json({succsess:true,data:objnd});
     
    } catch (error) {
        console.log(error);    
    }
  

 }
 exports.delete = async (req,res,next)=>{
  
  

    
  
   
   try {
    let id = req.params.id;
    await   myModel.BinhLuanModel.findByIdAndDelete(id);
    
   } catch (error) {
    console.log(error);
   }

 

 
     
     
       
     
  

 }
 