export default function createCardElement({city = "Київ", 
                                           temp = 0, 
                                           icon = "wi-day-sunny", 
                                           background = "#fff",
                                           widthClass = "quarter"} = {}) {

    const li = document.createElement("li");
        li.className = `weather-city__item ${widthClass}`;
        li.style.backgroundColor = background;

    
    li.innerHTML = `
            <div class="weather-data">
                <h4 class="weater-city__name">${city}</h4>
                <span class="weather-city-temp">${temp}°C <i class="wi ${icon}"></i></span>
            </div>
    `

    return {element: li, width: widthClass};
}