//Auth.js
import bcrypt from "bcrypt";
import User from "../models/UserModel.js";

// Register function
const register = async (req, res) => {
  const { fullName, email, password, gender, dateOfBirth } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      gender,
      dateOfBirth,
    });

    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login function (no session involved)
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Respond with user data without session
    res.status(200).json({ message: "Login successful", user });
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Logout function
const logout = (req, res) => {
  // No session handling here, just sending a response
  res.status(200).json({ message: "Logout successful" });
};

export { register, login, logout };

