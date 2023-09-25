var db = require('./db')
const ndtruyenSchema = new db.mongoose.Schema(
    {  
        idTruyen: {
            type: db.mongoose.Schema.Types.ObjectId,
            ref: "Truyen",
            required: true,
          },
        url:{type:String,required:true},
       
       

    },{
        collection:'NoiDung'
    }
);
let ndtruyensModel = db.mongoose.model('ndtruyensModel',ndtruyenSchema);
module.exports ={ndtruyensModel};