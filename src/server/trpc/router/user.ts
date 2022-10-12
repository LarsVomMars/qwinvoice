import t from "../";
import z from "zod";
import login from "../middleware/login";
import { generateToken } from "../../../util/jwt";

const router = t.router({
    login: t.procedure
        .input(z.object({ email: z.string().email(), password: z.string() }))
        .query(async ({ ctx, input }) => {
            // TODO: Bcrypt password and boilerplate
            const user = await ctx.prisma.user.findFirst({
                where: {
                    email: input.email,
                    password: input.password,
                },
            });
            if (!user) throw new Error("Invalid email or password");
            const token = generateToken(user.id);
            return token;
        }),
    create: login
        .input(
            z.object({
                email: z.string().email(),
                firstName: z.string(),
                lastName: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const user = await ctx.prisma.user.create({
                data: {
                    email: input.email,
                    firstName: input.firstName,
                    lastName: input.lastName,
                    createdById: ctx.user,
                },
            });
            return user;
        }),
});

export default router;
