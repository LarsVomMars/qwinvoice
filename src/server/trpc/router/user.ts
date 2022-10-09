import t from "../";
import z from "zod";

const router = t.router({
    login: t.procedure
        .input(z.object({ email: z.string().email(), password: z.string() }))
        .query(({ ctx, input }) => false),
});

export default router;