"use client"

import { signIn } from "next-auth/react";

export default function login() {
    return (
        <>
            <h1>Spotify OAuth Login</h1>
            <input type="button" onClick={() => signIn("spotify", { callbackUrl: "/spotify/player" })} value="Login with Spotify" />
        </>
    )
}