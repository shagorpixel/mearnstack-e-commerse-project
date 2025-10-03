import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid User ",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Credantial",
      });
    } else {
      const token = createToken(user._id);
      return res.json({
        success: true,
        token: token,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existsUser = await userModel.findOne({ email });
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please type a valid Email",
      });
    }
    if (existsUser) {
      return res.json({
        success: false,
        message: "User Already Exists",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      token: token,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const adminLogin = (req, res) => {
  console.log(req.body)
    try{
      const {email,password} = req.body
      if(email == process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD == password){
        const token = jwt.sign(email+password,process.env.JWT_SECRET);
        res.json({
          success:true,
          token:token
        })
      }else{
        res.json({
          success:false,
          message:"Invalid Credential"
        })
      }
    }catch(error){
      res.json({
        success:false,
        message:error.message
      })
    }
};
export { loginUser, registerUser, adminLogin };
