import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import type AppRouter from "~/server/trpc/router";
import transformer from "superjson";

const client = createTRPCProxyClient<AppRouter>({
    transformer,
    links: [
        loggerLink({ enabled: () => process.env.NODE_ENV === "development" }),
        httpBatchLink({ url: "/api/trpc" }),
    ]
});

export default client;