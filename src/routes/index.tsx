import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import client from "../client";

export default component$(() => {
    return (
        <>
            <h1>Title</h1>
            <button
                onClick$={async () => {
                    const email = "test@test.de";
                    const firstName = "Test";
                    const lastName = "Test";
                    const user = await client.user.create.mutate({
                        email,
                        firstName,
                        lastName,
                    });
                    console.log(user);
                }}
            >
                Create
            </button>
        </>
    );
});

export const head: DocumentHead = {
    title: "Home",
};
