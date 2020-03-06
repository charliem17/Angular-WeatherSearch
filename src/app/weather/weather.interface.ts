export interface Weather {
    list: Array<{
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
        dt_txt
    }>,
    city: {
        name,
        country
    }
}