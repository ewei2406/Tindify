const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = encodeURIComponent(window.location.origin);

// console.log(redirectUri);

const clientId = "9d9ca5cbcf974ad8ab8ff2d7d7096977";

const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "playlist-modify-private",
    "playlist-modify-public",
    "playlist-read-private"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}`;