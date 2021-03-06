
let PDB = {
    "planets" :
        [{
            "id": "0",
            "name": "earth",
            "starsystem": "solarSystem",
            "size": "48km", //radii size.
            "population": "7 874 965 825",
            "climate": "earthBalanced",
            "infrastructure": "earthLike", //Finns internet? // earth-like / mars-like / moon-like / ..
            "breathable": "yes",
            "usp": "startOfCivilisation",
            "meantemp": "1°C",
            "animalspecies": "8 700 000",
            "government": "selfcontrolled", // apple/amazon/etc
            "gravity": "1",
            "culturalusp": "skansen",
            "hoursperday": "24",
            "currency": "spaceDollar",
            "language": "english",
            "domesticanimals": "yes",
            "percentualwatersurface": "70%",
            "standardmealcost": "3",
            "img": "images/planet_earth.png",
            "placement": [0, 0, 126, 126, 189, 189]
        }, {
            "id": "1",
            "name": "mars",
            "starsystem": "solarSystem",
            "size": "",
            "population": "2 500",
            "climate": "frozenDesert",
            "infrastructure": "marsLike",
            "breathable": "no",
            "usp": "",
            "meantemp": "-63°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "25",
            "currency": "spaceDollar",
            "language": "marsianAndEnglish",
            "domesticanimals": "no",
            "percentualwatersurface": "30%",
            "standardmealcost": "",
            "img": "images/planet_mars.png",
            "placement": [0, 0, 98, 98, 196, 196]
        }, {
            "id": "2",
            "name": "theRestaurantAtTheEndOfTheUniverse",
            "starsystem": "frogstarSystem",
            "size": "",
            "population": "8",
            "climate": "indoors",
            "infrastructure": "futuristic",
            "breathable": "yes",
            "usp": "",
            "meantemp": "18°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            //"img": "images/theRestaurantAtTheEndOfTheUniverse.png"
            "img": "images/planet_moon.png",
            "placement": [0, 0, 49, 49, 49, 49]
        }, {
            "id": "3",
            "name": "frogstarWorldA",
            "starsystem": "frogstarSystem",
            "size": "",
            "population": "9500",
            "climate": "soft",
            "infrastructure": "earthLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "14°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            //"img": "images/frogstarWorldA.png"
            "img": "images/planet_blue.png",
            "placement": [0, 0, 251, 251, 251, 251]
        }, {
            "id": "4",
            "name": "frogstarWorldB",
            "starsystem": "frogstarSystem",
            "size": "",
            "population": "1337",
            "climate": "ruinsAndDirtyShoes",
            "infrastructure": "marsLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "12°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            //"img": "images/frogstarWorldB.png"
            "img": "images/planet_green.png",
            "placement": [0, 0, 398, 176, 298, 132]
        }, {
            "id": "5",
            "name": "frogstarWorldC",
            "starsystem": "frogstarSystem",
            "size": "",
            "population": "1",
            "climate": "beautifulForFishing",
            "infrastructure": "earthLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "13°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            //"img": "images/frogstarWorldC.png"
            "img": "images/planet_earth.png",
            "placement": [0, 0, 126, 126, 189, 189]
        }, {
            "id": "6",
            "name": "naboo",
            "starsystem": "warstarSystem",
            "size": "",
            "population": "3 150 000",
            "climate": "earthSummerBalanced",
            "infrastructure": "earthLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "14°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_mars.png",
            "placement": [0, 0, 98, 98, 196, 196]
        }, {
            "id": "7",
            "name": "coruscant",
            "starsystem": "warstarSystem",
            "size": "",
            "population": "950 000",
            "climate": "duskyAndChilly",
            "infrastructure": "futuristic",
            "breathable": "yes",
            "usp": "",
            "meantemp": "5°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_moon.png",
            "placement": [0, 0, 49, 49, 49, 49]
        }, {
            "id": "8",
            "name": "kamino",
            "starsystem": "warstarSystem",
            "size": "",
            "population": "25 000",
            "climate": "rainyAndStormy",
            "infrastructure": "earthLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "5°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "100%",
            "standardmealcost": "",
            "img": "images/planet_blue.png",
            "placement": [0, 0, 251, 251, 251, 251]
        }, {
            "id": "9",
            "name": "mustafar",
            "starsystem": "warstarSystem",
            "size": "",
            "population": "100 000",
            "climate": "volcanicLavaStreams",
            "infrastructure": "marsLike",
            "breathable": "no",
            "usp": "",
            "meantemp": "35°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_green.png",
            "placement": [0, 0, 398, 176, 298, 132]
        }, {
            "id": "10",
            "name": "tatooine",
            "starsystem": "warstarSystem",
            "size": "",
            "population": "1 850 000",
            "climate": "hotDaysFrozenNightsDesert",
            "infrastructure": "thirdWorld",
            "breathable": "yes",
            "usp": "",
            "meantemp": "5°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_earth.png",
            "placement": [0, 0, 126, 126, 189, 189]
        }, {
            "id": "11",
            "name": "shire",
            "starsystem": "ringlordSystem",
            "size": "",
            "population": "1 500",
            "climate": "earthSummerBalanced",
            "infrastructure": "earthLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "18°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_mars.png",
            "placement": [0, 0, 98, 98, 196, 196]
        }, {
            "id": "12",
            "name": "gondor",
            "starsystem": "ringlordSystem",
            "size": "",
            "population": "15 500",
            "climate": "dry",
            "infrastructure": "earthLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "12°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_moon.png",
            "placement": [0, 0, 49, 49, 49, 49]
        }, {
            "id": "13",
            "name": "rohan",
            "starsystem": "ringlordSystem",
            "size": "",
            "population": "30 000",
            "climate": "flourishing",
            "infrastructure": "earthLike",
            "breathable": "yes",
            "usp": "",
            "meantemp": "15°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_blue.png",
            "placement": [0, 0, 251, 251, 251, 251]
        }, {
            "id": "14",
            "name": "mordor",
            "starsystem": "ringlordSystem",
            "size": "",
            "population": "50 000",
            "climate": "dryAndHot",
            "infrastructure": "thirdWorld",
            "breathable": "yes",
            "usp": "",
            "meantemp": "25°C",
            "animalspecies": "",
            "government": "",
            "gravity": "",
            "culturalusp": "",
            "hoursperday": "",
            "currency": "",
            "language": "",
            "domesticanimals": "",
            "percentualwatersurface": "",
            "standardmealcost": "",
            "img": "images/planet_green.png",
            "placement": [0, 0, 398, 176, 298, 132]
        }]
};
