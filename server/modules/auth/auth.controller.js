const { registerUser } = require("./auth.service");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: "user registered successfully",
      data: user
    })
  }
  catch (error) {

    res.status(error.statuscode || 500).json({
      success: false,
      message: error.message
    });


  }
};

module.exports = { register };