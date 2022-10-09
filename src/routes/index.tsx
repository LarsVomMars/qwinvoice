import { component$, useClientEffect$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import client from "../client";

export default component$(() => {

    useClientEffect$(async ({ track, cleanup }) => {
        const email = "test@test.de";
        const password = "test";
        const login = await client.user.login.query({ email, password });
        console.log("Login: " + login);
    });

    return (
        <>
            <h1>Title</h1>
        </>
    );
});

export const head: DocumentHead = {
    title: "Home",
};
