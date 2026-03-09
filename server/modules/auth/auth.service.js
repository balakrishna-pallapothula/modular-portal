const bcrypt = require('bcrypt');
const User = require('../../models/user');

const registerUser = async ({ name, email, password }) => {

  if (!name || !email || !password) {
    const error = new Error('All fields are required');
    error.statusCode = 400;
    throw error;
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const error = new Error('Email already registered');
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword
  });

  return {
    id: newUser._id,
    name: newUser.name,
    email: newUser.email
  };
};

module.exports = { registerUser };