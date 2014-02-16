Trimet GeoJSON
=============
These are all the Trimet Routes as GeoJSON
These are likely not 100% accurate.

I did absolutely no searching to see if anyone else had them, or if there was an easier way to get them besides the method I took.

#### Method

* I grabbed the routeconfigs from Trimet and got every stop in both directions.
* Then using Google Maps direction API and setting stop steps to 30 I grabbed the polylines.
* I decoded those polylines thanks to this particular site [http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/) which rendered me a set of coordinates.
* Then did some data munging to swap lat/lng and lop of the first and last coordinates
* Created the GeoJSON MultiLineString

I did no validation of the routes.
I wanted to do this on a Saturday for fun. 

The end

Anything not listed below is maybe right, I don't know

####Totally Wrong Routes

* 1
* 10

####Parially Wrong Routes
* 16