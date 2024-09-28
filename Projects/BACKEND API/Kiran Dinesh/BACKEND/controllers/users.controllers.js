const userServices = require('../services/user-service.js')

const addUsers = async (req, res) => {
  userServices.insertUser(req.body)
    .then((addedUser) => {
      if (addedUser) {
        res.status(addedUser.status).json(addedUser)
      }
    })
    .catch((err) => {
      res.status(err.status || 500).json({ error: err.message })
    })
}

const getUsers = async (req, res) => {
  userServices.fetchUsers()
    .then((fetchedUsers) => {
      if (fetchedUsers) {
        res.status(fetchedUsers.status).json(fetchedUsers)
      }
    })
    .catch((err) => {
      res.status(err.status || 500).json({ message: 'Cannot get all users', error: err.message })
    })
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  userServices.userUpdate(id, updateData)
    .then((updatedUser) => {
      if (updatedUser) {
        res.status(updatedUser.status).json(updatedUser)
      }
    })
    .catch((err) => {
      res.status(err.status).json({ error: err.message })
    })
}


const deleteUser = async (req, res) => {
  const { id } = req.params;

  userServices.userDelete(id)
    .then((response) => {
      if (response) {
        res.status(response.status).json(response)
      }
    })
    .catch((err) => {
      res.status(err.status).json({ error: err.message })
    })
}




module.exports = {
  addUsers,
  getUsers,
  updateUser,
  deleteUser
};
