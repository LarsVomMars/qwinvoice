import prisma from "../prisma";
import trpc from "@trpc/server";
import trpcNext from "@trpc/server/adapters/next";
import transformer from "superjson";
import { verifyToken } from "~/util/jwt";

export const createContext = async ({ req }: trpcNext.CreateNextContextOptions) => {
    let user: string | undefined = undefined;

    if (req.headers.authorization) {
        const auth = req.headers.authorization.split(" ") as string[];

        if (auth.length === 2 && auth[0].toLowerCase() === "bearer") {
            const token = auth[1];
            const decoded = await verifyToken(token);
            user = decoded.userId;
        }
    }

    return { prisma, user };
};
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

const instance = trpc.initTRPC.context<Context>().create({ transformer });

export default instance;
