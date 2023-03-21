/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer*/

    const prompt=require("prompt-sync")({sigint:true});

    let season = prompt("Enter your favourite month: ")
    season = season.toUpperCase()

    switch(season){
        case 'JANUARY':
            {
            console.log("Season is winter")
            break
        }
        case 'FEBRUARY':
            {
            console.log("Season is winter")
            break
        }
        case 'MARCH':
            {
            console.log("Season is spring")
            break
        }
        case 'APRIL':
            {
            console.log("Season is spring")
            break
        }
        case 'MAY':
            {
            console.log("Season is spring")
            break
        }
        case 'JUNE':
            {
            console.log("Season is summer")
            break
        }
        case 'JULY':
            {
            console.log("Season is summer")
            break
        }
        case 'AUGUST':
            {
            console.log("Season is summer")
            break
        }
        case 'SEPTEMBER':
            {
            console.log("Season is Autumn")
            break
        }
        case 'OCTOBER':
            {
            console.log("Season is Autumn")
            break
        }
        case 'NOVEMBER':
            {
            console.log("Season is Autumn")
            break
        }
        case 'DECEMBER':
            {
            console.log("Season is winter")
            break
        }
        default:
            {
                console.log("Not a month")
            }
    }