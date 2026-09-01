const bcrypt = require('bcrypt');

const encryptPassword = await bcrypt.hash(password,10);

const user = await User.findOne({email});

if(!user){
   return res.status(401).json({message:"User not found"})
}

const isMatch = await bcrypt.compare(password, user.password);

if(!isMatch){
   return res.status(401).json({message:"passowrd is incorrect"})
}