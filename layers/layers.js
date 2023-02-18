var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BangunanOpenStreetMap_2 = new ol.layer.Tile({
            'title': 'Bangunan Open Street Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IndeksBahayaGempaInarisk_3 = new ol.format.GeoJSON();
var features_IndeksBahayaGempaInarisk_3 = format_IndeksBahayaGempaInarisk_3.readFeatures(json_IndeksBahayaGempaInarisk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksBahayaGempaInarisk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksBahayaGempaInarisk_3.addFeatures(features_IndeksBahayaGempaInarisk_3);
var lyr_IndeksBahayaGempaInarisk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndeksBahayaGempaInarisk_3, 
                style: style_IndeksBahayaGempaInarisk_3,
                interactive: true,
    title: 'Indeks Bahaya Gempa (Inarisk)<br />\
    <img src="styles/legend/IndeksBahayaGempaInarisk_3_0.png" /> Rendah (Indeks<0,25)<br />\
    <img src="styles/legend/IndeksBahayaGempaInarisk_3_1.png" /> Sedang (Indeks 0,25-0,5)<br />\
    <img src="styles/legend/IndeksBahayaGempaInarisk_3_2.png" /> Tinggi (Indeks 0,5-0,7)<br />'
        });
var format_SesarBaribis_4 = new ol.format.GeoJSON();
var features_SesarBaribis_4 = format_SesarBaribis_4.readFeatures(json_SesarBaribis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SesarBaribis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SesarBaribis_4.addFeatures(features_SesarBaribis_4);
var lyr_SesarBaribis_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SesarBaribis_4, 
                style: style_SesarBaribis_4,
                interactive: true,
                title: '<img src="styles/legend/SesarBaribis_4.png" /> Sesar Baribis'
            });
var format_GempaBumiUSGS18002023_5 = new ol.format.GeoJSON();
var features_GempaBumiUSGS18002023_5 = format_GempaBumiUSGS18002023_5.readFeatures(json_GempaBumiUSGS18002023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GempaBumiUSGS18002023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GempaBumiUSGS18002023_5.addFeatures(features_GempaBumiUSGS18002023_5);
var lyr_GempaBumiUSGS18002023_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GempaBumiUSGS18002023_5, 
                style: style_GempaBumiUSGS18002023_5,
                interactive: true,
    title: 'Gempa Bumi (USGS) 1800-2023<br />\
    <img src="styles/legend/GempaBumiUSGS18002023_5_0.png" /> 3,9 - 4,5<br />\
    <img src="styles/legend/GempaBumiUSGS18002023_5_1.png" /> 4,5 - 5<br />\
    <img src="styles/legend/GempaBumiUSGS18002023_5_2.png" /> 5 - 6<br />'
        });

lyr_ESRISatellite_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_BangunanOpenStreetMap_2.setVisible(true);lyr_IndeksBahayaGempaInarisk_3.setVisible(true);lyr_SesarBaribis_4.setVisible(true);lyr_GempaBumiUSGS18002023_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleSatellite_1,lyr_BangunanOpenStreetMap_2,lyr_IndeksBahayaGempaInarisk_3,lyr_SesarBaribis_4,lyr_GempaBumiUSGS18002023_5];
lyr_IndeksBahayaGempaInarisk_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'keterangan': 'keterangan', });
lyr_SesarBaribis_4.set('fieldAliases', {'Id': 'Id', 'Sesar': 'Sesar', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_GempaBumiUSGS18002023_5.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontal': 'horizontal', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSo': 'locationSo', 'magSource': 'magSource', });
lyr_IndeksBahayaGempaInarisk_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_SesarBaribis_4.set('fieldImages', {'Id': 'Range', 'Sesar': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': '', });
lyr_GempaBumiUSGS18002023_5.set('fieldImages', {'time': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'TextEdit', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontal': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'TextEdit', 'status': 'TextEdit', 'locationSo': 'TextEdit', 'magSource': 'TextEdit', });
lyr_IndeksBahayaGempaInarisk_3.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', 'keterangan': 'inline label', });
lyr_SesarBaribis_4.set('fieldLabels', {'Id': 'inline label', 'Sesar': 'inline label', 'Keterangan': 'inline label', 'Sumber': 'inline label', });
lyr_GempaBumiUSGS18002023_5.set('fieldLabels', {'time': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', 'depth': 'inline label', 'mag': 'inline label', 'magType': 'inline label', 'nst': 'inline label', 'gap': 'inline label', 'dmin': 'inline label', 'rms': 'inline label', 'net': 'inline label', 'id': 'inline label', 'updated': 'inline label', 'place': 'inline label', 'type': 'inline label', 'horizontal': 'inline label', 'depthError': 'inline label', 'magError': 'inline label', 'magNst': 'inline label', 'status': 'inline label', 'locationSo': 'inline label', 'magSource': 'inline label', });
lyr_GempaBumiUSGS18002023_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});