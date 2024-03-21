var wms_layers = [];

var format_odisha_0 = new ol.format.GeoJSON();
var features_odisha_0 = format_odisha_0.readFeatures(json_odisha_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_odisha_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_odisha_0.addFeatures(features_odisha_0);
var lyr_odisha_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_odisha_0, 
                style: style_odisha_0,
                popuplayertitle: "odisha",
                interactive: true,
                title: '<img src="styles/legend/odisha_0.png" /> odisha'
            });

lyr_odisha_0.setVisible(true);
var layersList = [lyr_odisha_0];
lyr_odisha_0.set('fieldAliases', {'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'Population': 'Population', });
lyr_odisha_0.set('fieldImages', {'NAME_0': '', 'NAME_1': '', 'TYPE_1': '', 'Population': '', });
lyr_odisha_0.set('fieldLabels', {'NAME_0': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'Population': 'no label', });
lyr_odisha_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});