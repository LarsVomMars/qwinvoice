import { TRPCError } from "@trpc/server";
import t from "..";

export const login = t.middleware(({ next, ctx }) => {
    if (!ctx.user) throw new TRPCError({ code: "UNAUTHORIZED" });
    return next({ ctx: { ...ctx, user: ctx.user! } });
});

const middleware = t.procedure.use(login);
export default middleware;
