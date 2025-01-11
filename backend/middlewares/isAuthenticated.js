import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    if (!token) {
      return res.status(401).json({
        message: "Please LogIn Or SignUp",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decode.id;
    req.name = decode.name;
    req.email = decode.email;

    next();
  } catch (e) {
    console.log("Error in isAuthenticated: " + e);
  }
};

export default isAuthenticated;
