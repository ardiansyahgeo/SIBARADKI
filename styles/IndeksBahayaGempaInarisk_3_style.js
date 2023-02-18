var size = 0;
var placement = 'point';
function categories_IndeksBahayaGempaInarisk_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Rawan Rendah (Indeks<0,25)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(108,204,64,0.73)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Sedang (Indeks 0,25-0,5)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,252,69,0.73)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawan Tinggi (Indeks 0,5-0,7)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,30,30,0.73)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_IndeksBahayaGempaInarisk_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("keterangan");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_IndeksBahayaGempaInarisk_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
