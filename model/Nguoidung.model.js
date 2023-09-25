var db = require('./db');

const NguoiDungSchema = new db.mongoose.Schema(
  {
    tenTaiKhoan: { type: String, required: true, },
    matKhau: { type: String, required:true, },
    Image: {
      type: String, required: true
    },
   
    sdt: { type: Number, required: false, },
    gioiThieu: { type: String, required: false, },
    queQuan: { type: String, required: false, },
    sinhNhat: { type: Date, required: true, },
    // anhDaiDien: { type: String, required: true, },
   
  },
  { collection: "NguoiDung" }
);

let NguoiDungmodel= db.mongoose.model('NguoiDungmodel', NguoiDungSchema);
module.exports = {NguoiDungmodel};
