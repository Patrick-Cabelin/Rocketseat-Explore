import { Mapping } from './mapping.js'

const Map = new Mapping()

// Map.way('/', '/pages/home.html')
// Map.way( '/explore','/pages/explore.html')
// Map.way('/universe','/pages/universe.html')

// Map.manager()
// window.onpopstate = Map.way()
window.route = Map.route()
