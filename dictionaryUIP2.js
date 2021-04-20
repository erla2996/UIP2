// ------------------------------------------------------------------------
// Code written by Felix Lager
// ------------------------------------------------------------------------
var language = 'en';
var dict = {
    'text' : ['one', 'two', 'systemJump', "tellus", 'population', 'colonyAge', 'avgTemp', 'homeButton', 'itinButton', 'helpButton', 'addButton', 'removeButton', 'clearItin', 'planetView'],
    'pics' : ['langPic'],

    'en' : {
        'homeButton' : "Star system view",
        'title' : "Itinerary Planner",
        'one': "One",
        'two': "Two",
        'systemJump': "System jump location",
        'tellus': "Planet Earth",
        'population': "Population",
        'avgTemp': "Average temperature",
        'itinButton': 'Itinierary',
        'helpButton': 'Help',
        'addButton': 'Add',
        'removeButton': 'Remove',
        'planetView': '',
        'langPic': "images/eng.png"
    },
//test
    'sv' : {
        'homeButton' : "Stjärnsystemsvy",
        'title' : "Resvägsplanerare",
        'one': "Ett",
        'two': "Två",
        'systemJump': "Stjärnsystemshopp",
        'tellus': "Jorden",
        'population': "Populationsmängd",
        'avgTemp': "Medeltemperatur",
        'itinButton': "Reseplan",
        'helpButton': "Hjälp",
        'addButton': 'Lägg till',
        'removeButton': 'Ta bort',
        'planetView': '',
        'langPic': "images/se.png"
    }
}

// returns the string for each key 
function get_string(key) {
    return dict[language][key];
}

//handles change of language
export function change_lang() {
    if (language === 'en') {
        language = 'sv';
    } 
    else {
        language = 'en'
    }

    update_dict_view();
}

// ------------------------------------------------------------------------
// ska nog lägga denna kod i controllern istället
// ------------------------------------------------------------------------
// updates the view with correct strings - depending on selected language
// using # for divname- and . for classname searching
export function update_dict_view() {
    let text = dict['text'];
    for (let idx in text) {
        let key = text[idx];
        $("#" + key).text(get_string(key));
        $("." + key).text(get_string(key));
    }
    let pics = dict['pics'];
    for (let idx in pics) {
        let pic = pics[idx];
        $("#" + pic).attr('src', get_string(pic));
        $("." + pic).attr('src', get_string(pic));
    }
    // Update page title
    $(document).attr("title", get_string("title"));
}
// ===========================================================================
// END OF FILE
// ===========================================================================