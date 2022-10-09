import prisma from "../prisma";
import trpc from "@trpc/server";
import superjson from "superjson";

// TODO: User login context
export const createContext = async () => ({ prisma });
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

const instance = trpc.initTRPC
    .context<Context>()
    .create({ transformer: superjson });

export default instance;