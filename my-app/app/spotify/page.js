export default function test() {
    return (
        <>
            <h1>Hello World</h1>
            <p>{process.env.SPOTIFY_REDIRECT_URI}</p>
        </>
    )
}