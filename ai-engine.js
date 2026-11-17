// COMP MAKER AI - Video analiz bağlantısı

const COMP_MAKER_API = "https://YOUR-SERVER-URL";

async function analyzeMatch(videoFile, playerName) {
    if (!videoFile) {
        throw new Error("Əvvəlcə matç videosunu seç!");
    }

    if (!playerName) {
        throw new Error("Futbolçunun adını yaz!");
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("player_name", playerName);

    const response = await fetch(
        `${COMP_MAKER_API}/api/analyze`,
        {
            method: "POST",
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("Video analiz edilə bilmədi.");
    }

    return await response.json();
}

window.analyzeMatch = analyzeMatch;
