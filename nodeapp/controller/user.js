const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/admin')



const createUser = async (req, res) => {

    try {
        // const { name, password, email, } = req.body;
      
      
             const newUser=await new User( req.body)
   
            console.log("newUser" + newUser);
            await newUser.save();
            console.log("hello new user");
            res.status(200).send("newUser" + newUser)
            // let admin = await Admin.findById(req.params.adminId)
            // // , { $push: { users: newUser._id } }

            // await admin.users.push(newUser._id)
            // console.log(admin);
            res.status(200).json({ user: newUser })
            console.log('hi '+newUser.name);
     

    }
    catch (err) {
        res.status(400).json({ error: err })
    }
}
const getAllUsers = async (req, res) => {
    try {
       const users = await User.find()
     
        if (users) {
            res.status(200).json({ users: users})
         console.log("users"+users)
        res.status(200).send('user not found')}
        
    } catch (err) {
        res.status(500).json({ error: err })

    }
}


const deleteUserByName = async (req, res) => {
    try {
        let UserDeleted = await User.findOne(req.body)
        console.log(UserDeleted);
        if (UserDeleted) {
            await User.findOneAndDelete(req.body)
            await user.save();
            res.status(500).json({ message: 'delate succ', })
        }
        else
            res.status(200).send('user not found')
    }
    catch (err) {
        res.status(400).json({ err: err })

    }
}
module.exports={createUser,getAllUsers,deleteUserByName}