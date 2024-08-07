import mongoose, {Schema, Document} from 'mongoose'

export interface Message extends Document{
    content: string;
    createdAt: Date;
}


const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        requrired: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    isVerified: boolean;
    verifyCodeExpiry: Date;    
    isAcceptingMsg: boolean;
    messages: [Message]

}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique:true
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [/.+\@._\..+/,"enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    verifyCode: {
        type: String,
        required: [true,"verify code is required"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verifyCodeExpiry: {
        type: Date,
        required: true
    },
    isAcceptingMsg: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema)) 

export default UserModel;