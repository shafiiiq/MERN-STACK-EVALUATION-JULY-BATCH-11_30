const { promises } = require('fs');
const userModel = require('../models/users.model.js');

module.exports = {

  insertUser: (data) => {

    return new Promise(async (resolve, reject) => {
      try {
        const existingUser = await userModel.findOne({ email: data.email });

        if (existingUser) {
          return reject({
            status: 500,
            ok: false,
            message: 'User already exists',
          });
        }

        const users = await userModel.create(data);

        resolve({
          status: 200,
          ok: true,
          message: 'User added successfully',
          data: users
        });

      } catch (err) {
        reject({
          status: 500,
          ok: false,
          message: 'Missing data or an error occurred',
          error: err.message
        });
      }
    });

  },

  fetchUsers: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const getusers = await userModel.find({});
        resolve({
          status: 200,
          ok: true,
          data: getusers
        });
      } catch (error) {
        reject({
          status: 500,
          ok: false,
          message: error.message || 'Error fetching users'
        });
      }
    });
  },

  userUpdate: (id, updateData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const validUser = await userModel.findById(id);
        if (validUser) {
          const updatedUser = await userModel.findByIdAndUpdate(id, updateData);
          return resolve({
            status: 200,
            ok: true,
            message: 'User updated successfully',
            data: updatedUser
          });
        }
      } catch (error) {
        reject({
          status: 500,
          ok: false,
          message: 'unable to update user'
        });
      }
    });
  },
  userDelete: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const validUser = await userModel.findById(id);
        if (validUser) {
          const deleteUser = await userModel.findByIdAndDelete(id);
          return resolve({
            status: 200,
            ok: true,
            message: 'User deleted successfully',
            data: deleteUser
          });
        }
      } catch (error) {
        reject({
          status: 500,
          ok: false,
          message: 'unable to delete user'
        });
      }
    });
  }

}