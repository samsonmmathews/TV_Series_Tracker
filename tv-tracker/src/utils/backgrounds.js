export function getRandomBackground() {
    const totalImages = 30;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;

    const padded = String(randomIndex).padStart(2, "0");
    return `/backgrounds/bg${padded}.jpg`;
}