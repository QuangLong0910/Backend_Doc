var db = require('./db')
const truyenSchema = new db.mongoose.Schema(
    {  

        name:{type:String,required:true},
        image:{type:String,required:true},
        noiDung: {type:Array, required: true},
        tacgia:{type:String,require:true}
       

    },{
        collection:'Truyen'
    }
);
let truyensModel = db.mongoose.model('truyensModel',truyenSchema);
module.exports ={truyensModel};
