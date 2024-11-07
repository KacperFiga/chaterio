
import connectMongo from "@/app/lib/db";
import User from "@/models/User";
import { hashPassword } from "@/app/lib/auth";

export const POST = async (req, res) => {
    try {
        const { username, email, password } = await req.json();

        await connectMongo();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ message: "User with this email already exists" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        return new Response(JSON.stringify({ message: "User created" }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error("Error in user creation:", err);
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
