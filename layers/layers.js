var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dusun_1 = new ol.format.GeoJSON();
var features_Dusun_1 = format_Dusun_1.readFeatures(json_Dusun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dusun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dusun_1.addFeatures(features_Dusun_1);
var lyr_Dusun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dusun_1, 
                style: style_Dusun_1,
                popuplayertitle: "Dusun",
                interactive: true,
    title: 'Dusun<br />\
    <img src="styles/legend/Dusun_1_0.png" /> Dusun Gansri<br />\
    <img src="styles/legend/Dusun_1_1.png" /> Dusun Tingal<br />\
    <img src="styles/legend/Dusun_1_2.png" /> Dusun Tulungsari Kulon<br />\
    <img src="styles/legend/Dusun_1_3.png" /> Dusun Tulungsari Wetan<br />\
    <img src="styles/legend/Dusun_1_4.png" /> <br />'
        });
var format_KabelListrik_2 = new ol.format.GeoJSON();
var features_KabelListrik_2 = format_KabelListrik_2.readFeatures(json_KabelListrik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabelListrik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabelListrik_2.addFeatures(features_KabelListrik_2);
var lyr_KabelListrik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabelListrik_2, 
                style: style_KabelListrik_2,
                popuplayertitle: "KabelListrik",
                interactive: false,
                title: '<img src="styles/legend/KabelListrik_2.png" /> KabelListrik'
            });
var format_Relka_3 = new ol.format.GeoJSON();
var features_Relka_3 = format_Relka_3.readFeatures(json_Relka_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Relka_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Relka_3.addFeatures(features_Relka_3);
var lyr_Relka_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Relka_3, 
                style: style_Relka_3,
                popuplayertitle: "Relka",
                interactive: false,
                title: '<img src="styles/legend/Relka_3.png" /> Relka'
            });
var format_Kontur_4 = new ol.format.GeoJSON();
var features_Kontur_4 = format_Kontur_4.readFeatures(json_Kontur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_4.addFeatures(features_Kontur_4);
var lyr_Kontur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_4, 
                style: style_Kontur_4,
                popuplayertitle: "Kontur",
                interactive: false,
                title: '<img src="styles/legend/Kontur_4.png" /> Kontur'
            });
var format_JalanDesa_5 = new ol.format.GeoJSON();
var features_JalanDesa_5 = format_JalanDesa_5.readFeatures(json_JalanDesa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_5.addFeatures(features_JalanDesa_5);
var lyr_JalanDesa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_5, 
                style: style_JalanDesa_5,
                popuplayertitle: "JalanDesa",
                interactive: false,
                title: '<img src="styles/legend/JalanDesa_5.png" /> JalanDesa'
            });
var format_Border_6 = new ol.format.GeoJSON();
var features_Border_6 = format_Border_6.readFeatures(json_Border_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_6.addFeatures(features_Border_6);
var lyr_Border_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Border_6, 
                style: style_Border_6,
                popuplayertitle: "Border",
                interactive: false,
    title: 'Border<br />\
    <img src="styles/legend/Border_6_0.png" /> Dusun Gansri<br />\
    <img src="styles/legend/Border_6_1.png" /> Dusun Tingal<br />\
    <img src="styles/legend/Border_6_2.png" /> Dusun Tulungsari Kulon<br />\
    <img src="styles/legend/Border_6_3.png" /> Dusun Tulungsari Wetan<br />\
    <img src="styles/legend/Border_6_4.png" /> <br />'
        });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                popuplayertitle: "Sungai",
                interactive: false,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });
var format_Kontur_8 = new ol.format.GeoJSON();
var features_Kontur_8 = format_Kontur_8.readFeatures(json_Kontur_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_8.addFeatures(features_Kontur_8);
var lyr_Kontur_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_8, 
                style: style_Kontur_8,
                popuplayertitle: "Kontur",
                interactive: false,
                title: '<img src="styles/legend/Kontur_8.png" /> Kontur'
            });
var format_Relka_9 = new ol.format.GeoJSON();
var features_Relka_9 = format_Relka_9.readFeatures(json_Relka_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Relka_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Relka_9.addFeatures(features_Relka_9);
var lyr_Relka_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Relka_9, 
                style: style_Relka_9,
                popuplayertitle: "Relka",
                interactive: false,
                title: '<img src="styles/legend/Relka_9.png" /> Relka'
            });
var format_Kabel_Listrik_10 = new ol.format.GeoJSON();
var features_Kabel_Listrik_10 = format_Kabel_Listrik_10.readFeatures(json_Kabel_Listrik_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabel_Listrik_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabel_Listrik_10.addFeatures(features_Kabel_Listrik_10);
var lyr_Kabel_Listrik_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabel_Listrik_10, 
                style: style_Kabel_Listrik_10,
                popuplayertitle: "Kabel_Listrik",
                interactive: false,
                title: '<img src="styles/legend/Kabel_Listrik_10.png" /> Kabel_Listrik'
            });
var format_Pemukiman_Warga_11 = new ol.format.GeoJSON();
var features_Pemukiman_Warga_11 = format_Pemukiman_Warga_11.readFeatures(json_Pemukiman_Warga_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Warga_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Warga_11.addFeatures(features_Pemukiman_Warga_11);cluster_Pemukiman_Warga_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Pemukiman_Warga_11
});
var lyr_Pemukiman_Warga_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pemukiman_Warga_11, 
                style: style_Pemukiman_Warga_11,
                popuplayertitle: "Pemukiman_Warga",
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_Warga_11.png" /> Pemukiman_Warga'
            });
var format_Toponimi_12 = new ol.format.GeoJSON();
var features_Toponimi_12 = format_Toponimi_12.readFeatures(json_Toponimi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponimi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponimi_12.addFeatures(features_Toponimi_12);
var lyr_Toponimi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponimi_12, 
                style: style_Toponimi_12,
                popuplayertitle: "Toponimi",
                interactive: true,
                title: '<img src="styles/legend/Toponimi_12.png" /> Toponimi'
            });
var format_JalanKabupaten_13 = new ol.format.GeoJSON();
var features_JalanKabupaten_13 = format_JalanKabupaten_13.readFeatures(json_JalanKabupaten_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKabupaten_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKabupaten_13.addFeatures(features_JalanKabupaten_13);
var lyr_JalanKabupaten_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKabupaten_13, 
                style: style_JalanKabupaten_13,
                popuplayertitle: "JalanKabupaten",
                interactive: false,
                title: '<img src="styles/legend/JalanKabupaten_13.png" /> JalanKabupaten'
            });
var format_Jembatan_14 = new ol.format.GeoJSON();
var features_Jembatan_14 = format_Jembatan_14.readFeatures(json_Jembatan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jembatan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jembatan_14.addFeatures(features_Jembatan_14);
var lyr_Jembatan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jembatan_14, 
                style: style_Jembatan_14,
                popuplayertitle: "Jembatan",
                interactive: true,
                title: '<img src="styles/legend/Jembatan_14.png" /> Jembatan'
            });
var format_Makam_15 = new ol.format.GeoJSON();
var features_Makam_15 = format_Makam_15.readFeatures(json_Makam_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_15.addFeatures(features_Makam_15);
var lyr_Makam_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_15, 
                style: style_Makam_15,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_15.png" /> Makam'
            });
var format_Bangunan_16 = new ol.format.GeoJSON();
var features_Bangunan_16 = format_Bangunan_16.readFeatures(json_Bangunan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_16.addFeatures(features_Bangunan_16);
var lyr_Bangunan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_16, 
                style: style_Bangunan_16,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_16.png" /> Bangunan'
            });
var format_Pemerintahan_17 = new ol.format.GeoJSON();
var features_Pemerintahan_17 = format_Pemerintahan_17.readFeatures(json_Pemerintahan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_17.addFeatures(features_Pemerintahan_17);
var lyr_Pemerintahan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_17, 
                style: style_Pemerintahan_17,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_17.png" /> Pemerintahan'
            });
var format_Pendidikan_18 = new ol.format.GeoJSON();
var features_Pendidikan_18 = format_Pendidikan_18.readFeatures(json_Pendidikan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_18.addFeatures(features_Pendidikan_18);
var lyr_Pendidikan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_18, 
                style: style_Pendidikan_18,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_18.png" /> Pendidikan'
            });
var format_Rumah_Sakit_19 = new ol.format.GeoJSON();
var features_Rumah_Sakit_19 = format_Rumah_Sakit_19.readFeatures(json_Rumah_Sakit_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_19.addFeatures(features_Rumah_Sakit_19);
var lyr_Rumah_Sakit_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_19, 
                style: style_Rumah_Sakit_19,
                popuplayertitle: "Rumah_Sakit",
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_19.png" /> Rumah_Sakit'
            });
var format_Sarana_Ibadah_20 = new ol.format.GeoJSON();
var features_Sarana_Ibadah_20 = format_Sarana_Ibadah_20.readFeatures(json_Sarana_Ibadah_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Ibadah_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Ibadah_20.addFeatures(features_Sarana_Ibadah_20);
var lyr_Sarana_Ibadah_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Ibadah_20, 
                style: style_Sarana_Ibadah_20,
                popuplayertitle: "Sarana_Ibadah",
                interactive: true,
                title: '<img src="styles/legend/Sarana_Ibadah_20.png" /> Sarana_Ibadah'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Dusun_1.setVisible(true);lyr_KabelListrik_2.setVisible(true);lyr_Relka_3.setVisible(true);lyr_Kontur_4.setVisible(true);lyr_JalanDesa_5.setVisible(true);lyr_Border_6.setVisible(true);lyr_Sungai_7.setVisible(true);lyr_Kontur_8.setVisible(true);lyr_Relka_9.setVisible(true);lyr_Kabel_Listrik_10.setVisible(true);lyr_Pemukiman_Warga_11.setVisible(false);lyr_Toponimi_12.setVisible(true);lyr_JalanKabupaten_13.setVisible(true);lyr_Jembatan_14.setVisible(true);lyr_Makam_15.setVisible(true);lyr_Bangunan_16.setVisible(true);lyr_Pemerintahan_17.setVisible(true);lyr_Pendidikan_18.setVisible(true);lyr_Rumah_Sakit_19.setVisible(true);lyr_Sarana_Ibadah_20.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Dusun_1,lyr_KabelListrik_2,lyr_Relka_3,lyr_Kontur_4,lyr_JalanDesa_5,lyr_Border_6,lyr_Sungai_7,lyr_Kontur_8,lyr_Relka_9,lyr_Kabel_Listrik_10,lyr_Pemukiman_Warga_11,lyr_Toponimi_12,lyr_JalanKabupaten_13,lyr_Jembatan_14,lyr_Makam_15,lyr_Bangunan_16,lyr_Pemerintahan_17,lyr_Pendidikan_18,lyr_Rumah_Sakit_19,lyr_Sarana_Ibadah_20];
lyr_Dusun_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Database': 'Database', });
lyr_KabelListrik_2.set('fieldAliases', {'fid': 'fid', 'Nama Kabel Listrik': 'Nama Kabel Listrik', });
lyr_Relka_3.set('fieldAliases', {'fid': 'fid', 'Nama Rel Kereta Api': 'Nama Rel Kereta Api', });
lyr_Kontur_4.set('fieldAliases', {'fid': 'fid', 'Nama Kontur': 'Nama Kontur', });
lyr_JalanDesa_5.set('fieldAliases', {'fid': 'fid', 'Nama Jalan': 'Nama Jalan', });
lyr_Border_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Database': 'Database', });
lyr_Sungai_7.set('fieldAliases', {'fid': 'fid', });
lyr_Kontur_8.set('fieldAliases', {'fid': 'fid', });
lyr_Relka_9.set('fieldAliases', {'fid': 'fid', });
lyr_Kabel_Listrik_10.set('fieldAliases', {'fid': 'fid', });
lyr_Pemukiman_Warga_11.set('fieldAliases', {'fid': 'fid', });
lyr_Toponimi_12.set('fieldAliases', {'fid': 'fid', 'Nama Toponimi': 'Nama Toponimi', });
lyr_JalanKabupaten_13.set('fieldAliases', {'fid': 'fid', 'Nama Jalan': 'Nama Jalan', });
lyr_Jembatan_14.set('fieldAliases', {'fid': 'fid', 'Nama Jembatan': 'Nama Jembatan', });
lyr_Makam_15.set('fieldAliases', {'id': 'id', 'Nama Makam': 'Nama Makam', });
lyr_Bangunan_16.set('fieldAliases', {'fid': 'fid', 'Nama Bangunan': 'Nama Bangunan', });
lyr_Pemerintahan_17.set('fieldAliases', {'fid': 'fid', 'Nama Pemerintahan': 'Nama Pemerintahan', });
lyr_Pendidikan_18.set('fieldAliases', {'fid': 'fid', 'Nama Pendidikan': 'Nama Pendidikan', 'Alamat': 'Alamat', });
lyr_Rumah_Sakit_19.set('fieldAliases', {'fid': 'fid', 'Nama Rumah Sakits': 'Nama Rumah Sakits', });
lyr_Sarana_Ibadah_20.set('fieldAliases', {'fid': 'fid', 'Nama Sarana Ibadah': 'Nama Sarana Ibadah', });
lyr_Dusun_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Database': 'TextEdit', });
lyr_KabelListrik_2.set('fieldImages', {'fid': 'TextEdit', 'Nama Kabel Listrik': 'TextEdit', });
lyr_Relka_3.set('fieldImages', {'fid': 'TextEdit', 'Nama Rel Kereta Api': 'TextEdit', });
lyr_Kontur_4.set('fieldImages', {'fid': '', 'Nama Kontur': '', });
lyr_JalanDesa_5.set('fieldImages', {'fid': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_Border_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Database': 'TextEdit', });
lyr_Sungai_7.set('fieldImages', {'fid': '', });
lyr_Kontur_8.set('fieldImages', {'fid': '', });
lyr_Relka_9.set('fieldImages', {'fid': '', });
lyr_Kabel_Listrik_10.set('fieldImages', {'fid': '', });
lyr_Pemukiman_Warga_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_Toponimi_12.set('fieldImages', {'fid': 'TextEdit', 'Nama Toponimi': 'TextEdit', });
lyr_JalanKabupaten_13.set('fieldImages', {'fid': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_Jembatan_14.set('fieldImages', {'fid': 'TextEdit', 'Nama Jembatan': 'TextEdit', });
lyr_Makam_15.set('fieldImages', {'id': 'TextEdit', 'Nama Makam': 'TextEdit', });
lyr_Bangunan_16.set('fieldImages', {'fid': 'TextEdit', 'Nama Bangunan': 'TextEdit', });
lyr_Pemerintahan_17.set('fieldImages', {'fid': 'TextEdit', 'Nama Pemerintahan': 'TextEdit', });
lyr_Pendidikan_18.set('fieldImages', {'fid': 'TextEdit', 'Nama Pendidikan': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Rumah_Sakit_19.set('fieldImages', {'fid': 'TextEdit', 'Nama Rumah Sakits': 'TextEdit', });
lyr_Sarana_Ibadah_20.set('fieldImages', {'fid': 'TextEdit', 'Nama Sarana Ibadah': 'TextEdit', });
lyr_Dusun_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Database': 'inline label - always visible', });
lyr_KabelListrik_2.set('fieldLabels', {'fid': 'hidden field', 'Nama Kabel Listrik': 'hidden field', });
lyr_Relka_3.set('fieldLabels', {'fid': 'hidden field', 'Nama Rel Kereta Api': 'hidden field', });
lyr_Kontur_4.set('fieldLabels', {'fid': 'hidden field', 'Nama Kontur': 'hidden field', });
lyr_JalanDesa_5.set('fieldLabels', {'fid': 'hidden field', 'Nama Jalan': 'hidden field', });
lyr_Border_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Database': 'no label', });
lyr_Sungai_7.set('fieldLabels', {'fid': 'no label', });
lyr_Kontur_8.set('fieldLabels', {'fid': 'no label', });
lyr_Relka_9.set('fieldLabels', {'fid': 'no label', });
lyr_Kabel_Listrik_10.set('fieldLabels', {'fid': 'no label', });
lyr_Pemukiman_Warga_11.set('fieldLabels', {'fid': 'hidden field', });
lyr_Toponimi_12.set('fieldLabels', {'fid': 'hidden field', 'Nama Toponimi': 'inline label - visible with data', });
lyr_JalanKabupaten_13.set('fieldLabels', {'fid': 'hidden field', 'Nama Jalan': 'hidden field', });
lyr_Jembatan_14.set('fieldLabels', {'fid': 'hidden field', 'Nama Jembatan': 'header label - visible with data', });
lyr_Makam_15.set('fieldLabels', {'id': 'hidden field', 'Nama Makam': 'inline label - always visible', });
lyr_Bangunan_16.set('fieldLabels', {'fid': 'hidden field', 'Nama Bangunan': 'inline label - always visible', });
lyr_Pemerintahan_17.set('fieldLabels', {'fid': 'hidden field', 'Nama Pemerintahan': 'inline label - always visible', });
lyr_Pendidikan_18.set('fieldLabels', {'fid': 'hidden field', 'Nama Pendidikan': 'inline label - always visible', 'Alamat': 'hidden field', });
lyr_Rumah_Sakit_19.set('fieldLabels', {'fid': 'hidden field', 'Nama Rumah Sakits': 'inline label - always visible', });
lyr_Sarana_Ibadah_20.set('fieldLabels', {'fid': 'hidden field', 'Nama Sarana Ibadah': 'inline label - always visible', });
lyr_Sarana_Ibadah_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});