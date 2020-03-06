export interface Weather {
    list: Array<{
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity
        },
        weather: {
            main,
            description
        },
        wind: {
            speed
        }
    }>,
    city: Array<any>
}