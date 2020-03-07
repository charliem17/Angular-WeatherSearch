export interface Weather {
    main: {
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity
    },
    weather: [
        {
            main,
            description
        }
    ],
    wind: {
        speed
    },
    sys: {
        country
    },
    dt_txt,
    name
}