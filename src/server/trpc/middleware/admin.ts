import { TRPCError } from "@trpc/server";
import t from "..";

export const admin = t.middleware(({ next, ctx }) => {
    // TODO: Permission check -> use primsa permission enum -> mysql
    if (!ctx.user) throw new TRPCError({ code: "UNAUTHORIZED" });
    return next({ ctx: { ...ctx, user: ctx.user! } });
});

const middleware = t.procedure.use(admin);
export default middleware;
