import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function middleware(req) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    try {
        jwt.verify(token, JWT_SECRET);
        return NextResponse.next();
    } catch (err) {
        return NextResponse.redirect(new URL('/', req.url));
    }
}

export const config = {
    matcher: ['/chat/:path*'],  
};
