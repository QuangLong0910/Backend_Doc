var myModel = require("../model/Nguoidung.model");
exports.list = async (req, res, next)=>{


    try {
       
        let list = await  myModel.NguoiDungmodel.find();
    
      res.json(list);
     } catch (error) {
        return res.status(204).json({msg:error.message});
     }

 }
 exports.add = async (req,res,next)=>{
    try {
        let objnd = new myModel.NguoiDungmodel();
        objnd.tenTaiKhoan = req.body.tenTaiKhoan;
        objnd.matKhau = req.body.matKhau;
        objnd.Image = req.body.Image;
      
        objnd.sdt = req.body.sdt;
        objnd.queQuan = req.body.queQuan;
        objnd.sinhNhat= req.body.sinhNhat;
        // objnd.anhDaiDien = req.body.anhDaiDien;
        await objnd.save();
        res.status(201).json(objnd);
     
    } catch (error) {
        console.log(error);    
    }
  

 }
 exports.edit = async (req,res,next)=>{

    let id = req.params.id;
    let objnd = await myModel.NguoiDungmodel.findById(id);
 
    try {
        objnd.tenTaiKhoan = req.body.tenTaiKhoan;
        objnd.matKhau = req.body.matKhau;
        objnd.Image = req.body.Image;
      
        objnd.sdt = req.body.sdt;
        objnd.queQuan = req.body.queQuan;
        objnd.sinhNhat= req.body.sinhNhat;
     
        await   myModel.NguoiDungmodel.findByIdAndUpdate(id,objnd);
        res.status(201).json({succsess:true,data:objnd});
     
    } catch (error) {
        console.log(error);    
    }
  

 }
 exports.delete = async (req,res,next)=>{

    let id = req.params.id;;
   
 
  
        
     
        await   myModel.NguoiDungmodel.findByIdAndDelete(id);
       
     
   res.json({status:1});

 }

 exports.login = async (req, res, next)=>{
    
        var inputEmail = req.query.tenTaiKhoan;
        console.log(inputEmail);
        var body = req.query;
    
        try {
          let nguoiDung = await myModel.NguoiDungmodel.findOne({ tenTaiKhoan: inputEmail });
          console.log(req.body);
    
          
           
            if (nguoiDung.matKhau == body.matKhau) {
              return res.status(200).json(nguoiDung);
            } else {
              return res.status(201);
            }
         
    
        } catch (error) {
          console.log(error.message);
          return res.status(500);
        
      }
}
exports.logout = async (req, res, next)=>{



    res.json( {status: 1, msg: 'Trang đăng xuất'});
  }





