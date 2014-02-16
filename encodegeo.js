var gm = require('googlemaps'),
fs = require('fs'),
_ = require('lodash');


fs.readFile('./all_routes.geojson', function(err, data) {
	var datas = JSON.parse(data).features,
		currentRoute, currentDirection, currentFile, lines, currentLine, writeString, currentProperties, currentPolylines, allPolylines = {}, groupPolyLines;

	_(datas).each(function(route) {
		currentRoute = route.properties.route_number;
		currentDirection = route.properties.direction;
		currentFile = './' + currentRoute + '/' + currentRoute + '_' + currentDirection + '.geojson';
		currentProperties = route.properties;

		lines = route.geometry.geometries;

		currentLine = [];
		currentPolylines = [];

		_(lines).each(function(line) {
			currentLine.unshift(line.coordinates);
			groupPolyLines = _.map(_.cloneDeep(line.coordinates), function(coordinate) {
				return coordinate.reverse().join(',');
			});
			currentPolylines.push(gm.createEncodedPolyline(groupPolyLines));
		});

		allPolylines[currentRoute] = allPolylines[currentRoute] || {};

		allPolylines[currentRoute][currentDirection] = currentPolylines;
		writeString = '{"type": "Feature","properties": ' + JSON.stringify(currentProperties) + ',"geometry": {"type": "MultiLineString","coordinates":' + JSON.stringify(currentLine) +  '}}';

		fs.writeFileSync(currentFile, writeString);
		fs.writeFileSync('./googlemap_polylines.json', JSON.stringify(allPolylines));
	});

})
