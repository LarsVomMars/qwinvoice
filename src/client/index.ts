import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import type AppRouter from "~/server/trpc/router";
import superjson from "superjson";

const client = createTRPCProxyClient<AppRouter>({
    transformer: superjson,
    links: [
        loggerLink({ enabled: () => process.env.NODE_ENV === "development" }),
        httpBatchLink({ url: "/api/trpc" }),
    ]
});

export default client;