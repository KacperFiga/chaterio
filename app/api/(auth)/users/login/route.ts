
import connectMongo from "@/app/lib/db";
import User from "@/models/User";
import Cookies from 'js-cookie';
import { comparePassword, generateToken } from "@/app/lib/auth";


export const POST = async (req: { json: () => PromiseLike<{ email: any; password: any; }> | { email: any; password: any; }; },res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { token?: any; message?: string; }): void; new(): any; }; }; }) =>  {
try{
    await connectMongo();
    const {email, password} = await req.json();
    const user = await User.findOne({email});
    if(!user){
        return new Response(JSON.stringify({ message: "Invalid credentials" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const isValidPassword = await comparePassword(password, user.password);

    if(!isValidPassword){
        return new Response(JSON.stringify({ message: "Invalid credentials" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const token =  generateToken(user);

    Cookies.set("token", token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
        httpOnly: true
    });

    return new Response(JSON.stringify({token}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

}catch(err){
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
    });

}

}