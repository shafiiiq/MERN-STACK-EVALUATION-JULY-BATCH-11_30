const UserServices = require('../services/user-services.js');

const AddUsers = async (req, res) => {
    try {
        // Call the insertUsers service and send the response
        const addUsers = await UserServices.insertUsers(req.body);
        res.status(addUsers.status).json(addUsers);
    } catch (err) {
        // Handle the error and send the appropriate response
        res.status(err.status || 500).json({
            ok: false,
            message: err.message,
        });
    }
};

const getUser=async(req,res)=>{
    try {
        const getusers=await UserServices.fetchUser();
        res.status(getusers.status).json(getusers);
    } catch (error) {
        res.status(err.status || 500).json({
            ok: false,
            message: err.message,
        });
    }
}
const updateUser = async (req, res) => {
    try {
        const updateuser = await UserServices.editUser(req.body,req.params);
        res.status(updateuser.status).json(updateuser);
    } catch (err) {
        // Handle the error and send the appropriate response
        res.status(err.status || 500).json({
            ok: false,
            message: err.message,
        });
    }
};

const deletingUser=async(req,res)=>{
   try {
    const deletinguser=await UserServices.deleteUser(req.params);
    res.status(deletinguser.status).json(deletinguser);
   } catch (err) {
    res.status(err.status || 500).json({
        ok: false,
        message: err.message,
    });
   }
}


module.exports = {
    AddUsers,
    getUser,
    updateUser,
    deletingUser,
};
