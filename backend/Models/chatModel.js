//chatNmae
//isGroupChat
//users
//latestMessage
//GroupAdmin
const mongoose = require('mongoose');

const chatModel=mongoose.schema({

chatName:{type:string,trim:true},
isGroupChat:{ type:Boolean,default:false},
users:[
    {
    type:mongoose.schema.Types.ObjectId,
    ref: "User",
},
],
latestMessage:{
    type:mongoose.schema.Types.ObjectId,
    ref: "Message",
},
groupAdmin:{
    type:mongoose.schema.Types.ObjectId,
    ref: "User",
},
},
{
    timestamps:true,
}
);

const chat = mongoose.model("chat",chatModel);
module.exports=Chat;