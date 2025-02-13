"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
    const { data: session } = useSession();

    if (!session) return <p>Not authenticated</p>;

    async function getCurrentlyPlaying(accessToken) {
        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`, // Bearerトークンを指定
            },
        });

        if (response.ok) {
            console.log(response);
            if (response.status == 200) {
                const data = await response.json();
                console.log(data); // 再生中の曲の情報
            }

        } else {
            console.log("Error fetching currently playing track", response.status);
        }
    }
    getCurrentlyPlaying(session.accessToken);

    return (
        <div>
            <h1>Spotify Dashboard</h1>
            <p>ログインユーザー: {session.user.name}</p>
            <p>アクセストークン: {session.accessToken}</p>
            <button onClick={() => signOut()}>ログアウト</button>
        </div>
    );
}
