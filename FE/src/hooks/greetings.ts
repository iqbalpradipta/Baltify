function greetings(): string {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 0 && currentHour < 12) {
        return "Selamat Pagi";
    } else if (currentHour >= 12 && currentHour < 15) {
        return "Selamat Siang";
    } else if (currentHour >= 15 && currentHour < 18) {
        return "Selamat Sore";
    } else {
        return "Selamat Malam";
    }
}

export default greetings