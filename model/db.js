const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/AssNw')
.catch((err)=>{
 console.log("loi ket loi csdl");
 console.log(err);
});
module.exports = {mongoose};