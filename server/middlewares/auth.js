import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';


export const protect = async (req, res, next) => {
    let token = req.headers.authorization

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) 
        const userId = decoded.id;

        const user = await User.findById(userId)

        if(!user){
           return res.json({
            success: false,
            message: "Not authorized, user not found"
           }) 
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token failed"
        })
    }
}