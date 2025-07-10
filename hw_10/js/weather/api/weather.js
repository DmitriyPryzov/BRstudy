export default async function getDataFromWeatherAPI(latitude, longitude) {
    const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`);

    return data.json();
}