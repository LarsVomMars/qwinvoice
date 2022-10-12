import { sign, verify } from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

export const generateToken = (userId: string): string =>
    sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "1d" });

export const verifyToken = (token: string): Promise<JwtPayload> =>
    new Promise((resolve, reject) => {
        verify(token, process.env.JWT_SECRET!, (err, decoded) => {
            if (err) reject(err);
            else resolve(decoded as JwtPayload);
        });
    });
