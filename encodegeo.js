var GeoJSON = require('geojson'),
fs = require('fs'),
_ = require('lodash');

fs.readFile('./all_routes.geojson', function(err, data) {
	var datas = JSON.parse(data).features,
		currentRoute, currentDirection, currentFile, lines, currentLine, writeString, currentProperties;

	_(datas).each(function(route) {
		currentRoute = route.properties.route_number;
		currentDirection = route.properties.direction;
		currentFile = './' + currentRoute + '/' + currentRoute + '_' + currentDirection + '.geojson';
		currentProperties = route.properties;

		lines = route.geometry.geometries;

		currentLine = [];

		_(lines).each(function(line) {
			currentLine.unshift(line.coordinates);
		});
		
		writeString = '{"type": "Feature","properties": ' + JSON.stringify(currentProperties) + ',"geometry": {"type": "MultiLineString","coordinates":' + JSON.stringify(currentLine) +  '}}';

		fs.writeFileSync(currentFile, writeString)
	});

})
