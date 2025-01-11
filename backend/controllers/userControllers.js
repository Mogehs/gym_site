import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const signup = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    if (!email || !name || !password) {
      return res.status(401).json({
        message: "All Fields Are Required",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "A user with this email is already registered",
        success: false,
      });
    }
    let hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      email,
      name,
      password: hashedPassword,
    });
    await user.save();
    return res.status(200).json({
      message: "User registerd succesfully",
      success: true,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({
      message: "An error occured while registering the user",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "No user found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    const frontUser = {
      userid: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({
        message: `Welcome back, ${user.name}`,
        user: frontUser,
        success: true,
      });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "An error occurred while logging in the user",
      success: false,
    });
  }
};

export const userProfile = async (req, res) => {
  let { phone, address, bio, certifications, experience } = req.body;
  const _id = req.id;
  try {
    let user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).json({
        message: "User not Found",
        success: false,
      });
    }

    if (phone) user.profile.phone = phone;
    if (address) user.profile.address = address;
    if (bio) user.profile.bio = bio;
    if (certifications) user.profile.certifications.push(certifications);
    if (experience) user.profile.experience = experience;

    await user.save();

    return res.status(200).json({
      message: "User Updated Successfully",
      success: true,
      user,
    });
  } catch (e) {
    return res.status(500);
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", {
        maxAge: 0,
      })
      .json({
        message: "User logged out successfully",
        success: true,
      });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "An error occured in logout of user",
      success: false,
    });
  }
};
