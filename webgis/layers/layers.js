var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_HasilProduksiCabaiRawitkw_0 = new ol.format.GeoJSON();
var features_HasilProduksiCabaiRawitkw_0 = format_HasilProduksiCabaiRawitkw_0.readFeatures(json_HasilProduksiCabaiRawitkw_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilProduksiCabaiRawitkw_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HasilProduksiCabaiRawitkw_0.addFeatures(features_HasilProduksiCabaiRawitkw_0);var lyr_HasilProduksiCabaiRawitkw_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HasilProduksiCabaiRawitkw_0, 
                style: style_HasilProduksiCabaiRawitkw_0,
    title: 'Hasil Produksi Cabai Rawit (kw)<br />\
    <img src="styles/legend/HasilProduksiCabaiRawitkw_0_0.png" />  0.0000 - 9173.5000 (Sedikit) <br />\
    <img src="styles/legend/HasilProduksiCabaiRawitkw_0_1.png" />  9173.5000 - 18347.0000 (Cukup Banyak)<br />\
    <img src="styles/legend/HasilProduksiCabaiRawitkw_0_2.png" />  18347.0000 - 27520.5000 (Banyak)<br />\
    <img src="styles/legend/HasilProduksiCabaiRawitkw_0_3.png" />  27520.5000 - 36694.0000 (Sangat Banyak)<br />'
        });var format_TitikPenanamanCabaiRawit_1 = new ol.format.GeoJSON();
var features_TitikPenanamanCabaiRawit_1 = format_TitikPenanamanCabaiRawit_1.readFeatures(json_TitikPenanamanCabaiRawit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPenanamanCabaiRawit_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TitikPenanamanCabaiRawit_1.addFeatures(features_TitikPenanamanCabaiRawit_1);var lyr_TitikPenanamanCabaiRawit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikPenanamanCabaiRawit_1, 
                style: style_TitikPenanamanCabaiRawit_1,
                title: '<img src="styles/legend/TitikPenanamanCabaiRawit_1.png" /> Titik Penanaman Cabai Rawit'
            });

lyr_HasilProduksiCabaiRawitkw_0.setVisible(true);lyr_TitikPenanamanCabaiRawit_1.setVisible(true);
var layersList = [baseLayer,lyr_HasilProduksiCabaiRawitkw_0,lyr_TitikPenanamanCabaiRawit_1];
lyr_HasilProduksiCabaiRawitkw_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'TW': 'TW', 'CR(kw)': 'CR(kw)', 'LP(ha)': 'LP(ha)', });
lyr_TitikPenanamanCabaiRawit_1.set('fieldAliases', {});
lyr_HasilProduksiCabaiRawitkw_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'TW': 'TextEdit', 'CR(kw)': 'TextEdit', 'LP(ha)': 'TextEdit', });
lyr_TitikPenanamanCabaiRawit_1.set('fieldImages', {});
lyr_HasilProduksiCabaiRawitkw_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'TW': 'inline label', 'CR(kw)': 'inline label', 'LP(ha)': 'inline label', });
lyr_TitikPenanamanCabaiRawit_1.set('fieldLabels', {});
lyr_TitikPenanamanCabaiRawit_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});