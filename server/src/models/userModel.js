import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, trim: true},
        email: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true, select: false },
        role: {
           type: String,
           enum: ["customer", "vendor_admin", "vendor_staff", "admin"],
           default: "customer",
           index: true,
        },

        isEmailVerified: { type: Boolean, default: false },
        avatar: { type: String },
        lastLoginAt: Date,
    },

    { timestamps: true }
)

const UserModel = mongoose.model("User", userSchema);

export default UserModel;