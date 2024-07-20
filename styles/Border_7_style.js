var size = 0;
var placement = 'point';
function categories_Border_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Dusun Gansri':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dusun Tingal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dusun Tulungsari Kulon':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dusun Tulungsari Wetan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,0,13,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Border_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Name");
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
    
var style = categories_Border_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
