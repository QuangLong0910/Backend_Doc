var myModel = require("../model/Truyen.model");
var myModel2 = require("../model/Binhluan.model");
var myModel3 = require("../model/Noidung.model");
exports.list = async (req, res, next)=>{


    try {
       
        let list = await  myModel.truyensModel.find();
    
      res.json(list);
     } catch (error) {
        return res.status(204).json({succsess:true});
     }

 }
 exports.add = async (req,res,next)=>{

    try {
        
        let objt = new myModel.truyensModel();
        
        objt.name = req.body.name;
        objt.image = req.body.image;
        objt.noiDung =req.body.noiDung;
        objt.tacgia = req.body.tacgia;
        await objt.save();
        res.status(201).json({objt});
     
    } catch (error) {
        console.log(error);    
    }
  

 }
 exports.edit = async (req,res,next)=>{
    let id = req.params.id;
        
    let objt = await  myModel.truyensModel.findById(id);
    try {
       
        objt.name = req.body.name;
        objt.image = req.body.image;
        objt.noiDung = this.addnd();
        objt.tacgia = req.body.tacgia;
       await myModel.truyensModel.findByIdAndUpdate(id,objt);
        res.status(201).json({succsess:true,data:objt});
     
    } catch (error) {
        console.log(error);    
    }
  

 }
 exports.delete = async (req,res,next)=>{

    let id = req.params.id;
    
   try {
    await  myModel.truyensModel.findByIdAndDelete(id);
  
   
    await myModel2.BinhLuanModel.deleteMany({idTruyen:id});
    console.log("Đã xóa thành công")

   
    res.status(200);
    
   } catch (error) {
    console.log(error);    
   }
       
  

 }
 exports.chitiet = async (req,res,next) =>{
    let id= req.params.id;
    let objt = await myModel.truyensModel.findById(id);
   
    // let objbl = await myModel2.BinhLuanModel.find({idTruyen:id});
    res.json(objt);
   
 
 }
 exports.addnd = async (req,res,next) =>{
 
    let nd = new myModel3.ndtruyensModel();
   nd.idTruyen = req.body.idTruyen;
    nd.url = req.body.url;
    await nd.save();
    res.json(nd);
 }
 exports.getnd = async(req,res,next)=>{
    let id = req.params.id;
    let nd = await myModel3.ndtruyensModel.find({idTruyen:id});
    res.json(nd);

 }
 
