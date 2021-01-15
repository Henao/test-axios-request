const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find(); // Me devuelve un arreglo con las notas de mi db [{ },{ },{ }]
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username: username});
await newUser.save();
console.log(newUser);
res.json({message: ' User create'})
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'User Delete'})
}

module.exports = userCtrl;
