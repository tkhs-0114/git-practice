"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();

    if (!session) return <p>Not authenticated</p>;

    return (
        <div>
            <h1>Spotify Dashboard</h1>
            <p>ログインユーザー: {session.user.name}</p>
            <p>アクセストークン: {session.accessToken}</p>
            <button onClick={() => signOut()}>ログアウト</button>
        </div>
    );
}
