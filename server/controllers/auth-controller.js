const home = async (req, res) => {
  try {
    res.status(200).send("Hello from the auth router!");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);

    res.status(200).json({ msg: req.body });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "An error occurred while processing your request." });
  }
};

module.exports = {
  home,
  register,
};
