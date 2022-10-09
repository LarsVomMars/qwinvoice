import t from "../";
import user from "./user";

export const router = t.router({ user });

type AppRouter = typeof router;
export default AppRouter;