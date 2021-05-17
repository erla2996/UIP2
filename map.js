/*
 * View/Controller code
 */

let currentSystem; // Which system we are browsing. undefined iff we are in the starsystem view.

/**
 * Initializes the map element, and its children.
 */
function mapInit(){
    // Initialize the model
    for(let i = 0; i < PDB.planets.length; i++){
        mapAddPlanet(PDB.planets[i]);
    }
    for(let i = 0; i < RDB.routes.length; i++){
        mapAddRoute(RDB.routes[i]);
    }

    // Initialize the view
    // Create the html-objects for showing all systems
    // Draw only the current system
    mapDraw();
}

/**
 * Draws the map of the currently selected system.
 */
function mapDraw(){
    // Hide all map objects
    // Show the map objects corresponding to the current system
    // https://www.nashvail.me/blog/canvas-image
    // https://www.samanthaming.com/tidbits/48-passing-arrays-as-function-arguments/
    let canvas = document.getElementById("map");
    let ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let earth = new Image();
    let mars = new Image();
    let moon = new Image();
    let blue = new Image();
    let green = new Image();
    earth.src = PDB.planets[0].img;
    mars.src = PDB.planets[1].img;
    moon.src = PDB.planets[2].img; // The restaurant at the end of the U
    blue.src = PDB.planets[3].img; // Frogstar world A
    green.src = PDB.planets[4].img; // Frogstar World B

    if (currentSystem === 'solarSystem') {
        // (src, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        earth.onload = () => {
            ctx.drawImage(earth, ...PDB.planets[0].placement)
        }
        mars.onload = () => {
            ctx.drawImage(mars, ...PDB.planets[1].placement)
        }
    }

    else if (currentSystem === 'frogstarSystem') {
        moon.onload = () => {
            ctx.drawImage(moon, ...PDB.planets[2].placement)
        }
        blue.onload = () => {
            ctx.drawImage(blue, ...PDB.planets[3].placement)
        }
        green.onload = () => {
            ctx.drawImage(green, ...PDB.planets[4].placement)
        }
    }
    // Star system view
    else {}
}

/**
 * Move the current system to the passed system.
 * @param system id of the system to move to
 */
function mapMove(system){
    currentSystem = system;
    // After moving, redraw the screen:
    mapDraw();
}

/*
 * Model code
 */

/*
 * The map is a graphlib Graph object, where each node corresponds to a planet.
 * The node's id is the same as the planet's id.
 *
 * Each edge in the Graph is a route which can be travelled. The edge's label is the id of the route.
 */
let map = new graphlib.Graph({directed: true, compound: true, multigraph: true});

/**
 * Adds a planet to the map.
 * @param planet struct of the planet to add
 */
function mapAddPlanet(planet){
    let id = planet.id;
    map.setNode(id);
    map.setParent(id, planet.starsystem);
}

/**
 * Adds a route to the map.
 * @param route struct of the route to add
 */
function mapAddRoute(route){
    let source = route.start;
    let target = route.destination;
    let label = undefined;
    let name = route.id;
    map.setEdge(source, target, label, name);
    map.setEdge(target, source, label, name);
}

/**
 * Gets the routes of the map.
 * @param planet (optional) if given, only routes from planet will be returned
 * @param target (optional) if given, only routes from planet to target will be returned
 * @returns {[string]} array of the ids of all routes
 */
function mapGetRoutes(planet, target){
    if(planet === undefined){
        return map.edges();
    }
    else{
        return map.outEdges(planet, target);
    }
}

/**
 * Gets the names of all star systems in the map.
 * @returns {[string]} array of the names of all star systems
 */
function mapGetSystems(){
    return map.children();
}

/**
 * Gets the ids of all planets in the map.
 * @param system (optional) if given, only planets of this system will be returned
 * @returns {[string]} an array of the ids of all planets
 */
function mapGetPlanets(system){
    if(system === undefined){
        let allNodes = map.nodes();
        // Only return the planets, so filter out the systems:
        return allNodes.filter(function(currentValue){
            return !(mapGetSystems().includes(currentValue));
        });
    }
    else {
        return map.children(system);
    }
}

/**
 * Finds a route from the start to the destination, using Dijkstra's algorithm.
 * This function optimises for number of jumps.
 * @param start the id of the planet from which to start the route
 * @param destination the id of the planet at which to end the route
 * @returns {[string]} an array of ids of planets visited, in order of visit, starting at the start planet,
 * and ending at the destination planet
 */
function mapRouteShortest(start, destination){
    let dijkstra = graphlib.alg.dijkstra(map, start);
    return findPath(dijkstra, start, destination);
}

/**
 * Returns a route from the start to the destination, using Dijkstra's algorithm.
 * This function optimises for lowest travel price.
 * @param start the id of the planet from which to start the route
 * @param destination the id of the planet at which to end the route
 * @returns {[string]} an array of ids of planets visited, in order of visit, starting at the start planet,
 * and ending at the destination planet
 */
function mapRouteCheapest(start, destination){
    function weight(e) {
        return getRoute(e.name).price;
    }
    let dijkstra = graphlib.alg.dijkstra(map, start, weight);
    return findPath(dijkstra, start, destination);
}

/**
 * Returns a route from the start to the destination, using Dijkstra's algorithm.
 * This function optimises for travel time.
 * @param start the id of the planet from which to start the route
 * @param destination the id of the planet at which to end the route
 * @returns {[string]} an array of ids of planets visited, in order of visit, starting at the start planet,
 * and ending at the destination planet
 */
function mapRouteFastest(start, destination){
    function weight(e) {
        return getRoute(e.name).duration;
    }
    let dijkstra = graphlib.alg.dijkstra(map, start, weight);
    return findPath(dijkstra, start, destination);
}

/**
 * Function enumerating the path from start to destination, using the output from graphlib.alg.dijkstra.
 * @param dijkstra the output from graphlib.alg.dijkstra
 * @param start the id of the planet from which to start the route
 * @param destination the id of the planet at which to end the route
 * @returns {[string]} an array of ids of planets visited, in order of visit, starting at the start planet,
 * and ending at the destination planet
 */
function findPath(dijkstra, start, destination){
    // Find the path
    let path = [];
    let target = destination;
    let systems = mapGetSystems();
    for(let i = 0; i < 1000; i++){ // Set an upper bound on the loop.
        path.unshift(target);
        if(target === start){
            break;
        }
        target = dijkstra[target].predecessor;
    }
    return path;
}

