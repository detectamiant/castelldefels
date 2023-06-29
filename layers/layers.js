var wms_layers = [];

var lyr_STOrtofotocolor2020_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_0, 0]);
var format_castelldefels230_1 = new ol.format.GeoJSON();
var features_castelldefels230_1 = format_castelldefels230_1.readFeatures(json_castelldefels230_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_castelldefels230_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_castelldefels230_1.addFeatures(features_castelldefels230_1);
var lyr_castelldefels230_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_castelldefels230_1, 
                style: style_castelldefels230_1,
                interactive: true,
                title: '<img src="styles/legend/castelldefels230_1.png" /> castelldefels 230'
            });

lyr_STOrtofotocolor2020_0.setVisible(true);lyr_castelldefels230_1.setVisible(true);
var layersList = [lyr_STOrtofotocolor2020_0,lyr_castelldefels230_1];
lyr_castelldefels230_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_castelldefels230_1.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'area': 'TextEdit', });
lyr_castelldefels230_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_castelldefels230_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});