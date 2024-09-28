const usersModel = require('../models/users.model.js');
const UserModel = require('../models/users.model.js');

module.exports = {
    insertUsers: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                // Check if the user already exists by email
                const existingUser = await UserModel.findOne({ email: data.email });
                if (existingUser) {
                    return reject({
                        status: 400,  // Better to use 400 for "Bad Request"
                        ok: false,
                        message: "User already exists",
                    });
                }

                // Create a new user with the provided data
                const user = await UserModel.create(data);

                // Resolve with a success response
                resolve({
                    status: 200,
                    ok: true,
                    message: "User added successfully",
                    data: user,
                });

            } catch (err) {
                // Handle errors and reject the promise
                reject({
                    status: 500,
                    ok: false,
                    message: "User not added",
                    error: err.message,
                });
            }
        });
    },

    fetchUser:async()=>{
        return new Promise(async(resolve,response)=>{
            try {
                const users=await UserModel.find()
                resolve({
                    status: 200,
                    ok: true,
                    message: "Users details fetched successfully",
                    data: users,
                });
            } catch (error) {
                reject({
                    status: 500,
                    ok: false,
                    message: "Users Details fetched succesfully",
                    error: err.message,
                });
            }
        })
        
    },
    editUser:async(data,params)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const {id}=params;
                const editeduser=await UserModel.findByIdAndUpdate(id,data)
                resolve({
                    status:200,
                    ok:true,
                    message:"User details Updated",
                    data:editeduser
                })
            } catch (error) {
                reject({
                    status:500,
                    ok:false,
                    message:"User details not Updated",
                    error:error.message
                })
            }
    
        })
    },
    deleteUser:async(params)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const {id}=params;
                await UserModel.findByIdAndDelete(id);
                resolve({
                    status:200,
                    ok:true,
                    message:"User details Deleted Successfully",
                })
            } catch (error) {
                reject({
                    status:500,
                    ok:false,
                    message:"User details not deleted",
                    error:error.message,
                })
            }
        })
        
    }
};
