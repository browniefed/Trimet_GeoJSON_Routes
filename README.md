Trimet GeoJSON
=============
These are all the Trimet Routes as GeoJSON

Each file is separated into the folder and follows the convention route_direction.geojson

####Method

* Took the KML file provided by trimet, using geojson.io converted to GeoJSON
* Wrote up encodegeo.js to grab, loop and spit out GeoJSON into separate files


I have added googlemap polyline file. This encodes all coordinates down to about 970kbs. If you want to decode these polylines down to coordinates visit [http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/) and there exists a polyline decoding function. That way you don't need google maps API. 

Alternatively I've included the decode polyline function from the link above, all credit for the function goes to them.