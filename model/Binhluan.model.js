var db = require('./db');

const BinhLuanSchema = new db.mongoose.Schema(
  {
    tenTaiKhoan: {
      type: String,
      ref: "NguoiDung",
      required: false,
    },
    Image: {
      type: String, ref: "NguoiDung", required: false
    },
    name: {
      type:String,
      ref: "Truyen",
      required: false,
    },
    noiDung: { type: String, required: true, },
   
    
  },
  { collection: "BinhLuan" }
);

let BinhLuanModel = db.mongoose.model('BinhLuanModel', BinhLuanSchema);
 module.exports ={BinhLuanModel};