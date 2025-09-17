import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: newUser._id, email: newUser.email },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        const { password: _, ...userData } = newUser.toObject();

        return res.status(201).json({ token, user: userData });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );


        return res.status(200).json({ token, user });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};
export const getUser = async (req, res) => {

}