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
var format_Agri_Kebun_2 = new ol.format.GeoJSON();
var features_Agri_Kebun_2 = format_Agri_Kebun_2.readFeatures(json_Agri_Kebun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agri_Kebun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agri_Kebun_2.addFeatures(features_Agri_Kebun_2);
var lyr_Agri_Kebun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agri_Kebun_2, 
                style: style_Agri_Kebun_2,
                popuplayertitle: "Agri_Kebun",
                interactive: false,
                title: '<img src="styles/legend/Agri_Kebun_2.png" /> Agri_Kebun'
            });
var format_Agri_Ladang_3 = new ol.format.GeoJSON();
var features_Agri_Ladang_3 = format_Agri_Ladang_3.readFeatures(json_Agri_Ladang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agri_Ladang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agri_Ladang_3.addFeatures(features_Agri_Ladang_3);
var lyr_Agri_Ladang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agri_Ladang_3, 
                style: style_Agri_Ladang_3,
                popuplayertitle: "Agri_Ladang",
                interactive: false,
                title: '<img src="styles/legend/Agri_Ladang_3.png" /> Agri_Ladang'
            });
var format_Agri_Sawah_4 = new ol.format.GeoJSON();
var features_Agri_Sawah_4 = format_Agri_Sawah_4.readFeatures(json_Agri_Sawah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agri_Sawah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agri_Sawah_4.addFeatures(features_Agri_Sawah_4);
var lyr_Agri_Sawah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agri_Sawah_4, 
                style: style_Agri_Sawah_4,
                popuplayertitle: "Agri_Sawah",
                interactive: false,
                title: '<img src="styles/legend/Agri_Sawah_4.png" /> Agri_Sawah'
            });
var format_Pemukiman_5 = new ol.format.GeoJSON();
var features_Pemukiman_5 = format_Pemukiman_5.readFeatures(json_Pemukiman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_5.addFeatures(features_Pemukiman_5);
var lyr_Pemukiman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_5, 
                style: style_Pemukiman_5,
                popuplayertitle: "Pemukiman",
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_5.png" /> Pemukiman'
            });
var format_JalanDesa_6 = new ol.format.GeoJSON();
var features_JalanDesa_6 = format_JalanDesa_6.readFeatures(json_JalanDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_6.addFeatures(features_JalanDesa_6);
var lyr_JalanDesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_6, 
                style: style_JalanDesa_6,
                popuplayertitle: "JalanDesa",
                interactive: false,
                title: '<img src="styles/legend/JalanDesa_6.png" /> JalanDesa'
            });
var format_Border_7 = new ol.format.GeoJSON();
var features_Border_7 = format_Border_7.readFeatures(json_Border_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_7.addFeatures(features_Border_7);
var lyr_Border_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Border_7, 
                style: style_Border_7,
                popuplayertitle: "Border",
                interactive: false,
    title: 'Border<br />\
    <img src="styles/legend/Border_7_0.png" /> Dusun Gansri<br />\
    <img src="styles/legend/Border_7_1.png" /> Dusun Tingal<br />\
    <img src="styles/legend/Border_7_2.png" /> Dusun Tulungsari Kulon<br />\
    <img src="styles/legend/Border_7_3.png" /> Dusun Tulungsari Wetan<br />\
    <img src="styles/legend/Border_7_4.png" /> <br />'
        });
var format_Sungai_8 = new ol.format.GeoJSON();
var features_Sungai_8 = format_Sungai_8.readFeatures(json_Sungai_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_8.addFeatures(features_Sungai_8);
var lyr_Sungai_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_8, 
                style: style_Sungai_8,
                popuplayertitle: "Sungai",
                interactive: false,
                title: '<img src="styles/legend/Sungai_8.png" /> Sungai'
            });
var format_Kontur_9 = new ol.format.GeoJSON();
var features_Kontur_9 = format_Kontur_9.readFeatures(json_Kontur_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_9.addFeatures(features_Kontur_9);
var lyr_Kontur_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_9, 
                style: style_Kontur_9,
                popuplayertitle: "Kontur",
                interactive: false,
                title: '<img src="styles/legend/Kontur_9.png" /> Kontur'
            });
var format_Relka_10 = new ol.format.GeoJSON();
var features_Relka_10 = format_Relka_10.readFeatures(json_Relka_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Relka_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Relka_10.addFeatures(features_Relka_10);
var lyr_Relka_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Relka_10, 
                style: style_Relka_10,
                popuplayertitle: "Relka",
                interactive: false,
                title: '<img src="styles/legend/Relka_10.png" /> Relka'
            });
var format_Kabel_Listrik_11 = new ol.format.GeoJSON();
var features_Kabel_Listrik_11 = format_Kabel_Listrik_11.readFeatures(json_Kabel_Listrik_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabel_Listrik_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabel_Listrik_11.addFeatures(features_Kabel_Listrik_11);
var lyr_Kabel_Listrik_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabel_Listrik_11, 
                style: style_Kabel_Listrik_11,
                popuplayertitle: "Kabel_Listrik",
                interactive: false,
                title: '<img src="styles/legend/Kabel_Listrik_11.png" /> Kabel_Listrik'
            });
var format_Pemukiman_Warga_12 = new ol.format.GeoJSON();
var features_Pemukiman_Warga_12 = format_Pemukiman_Warga_12.readFeatures(json_Pemukiman_Warga_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Warga_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Warga_12.addFeatures(features_Pemukiman_Warga_12);cluster_Pemukiman_Warga_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Pemukiman_Warga_12
});
var lyr_Pemukiman_Warga_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Pemukiman_Warga_12, 
                style: style_Pemukiman_Warga_12,
                popuplayertitle: "Pemukiman_Warga",
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_Warga_12.png" /> Pemukiman_Warga'
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
var format_Toponimi_14 = new ol.format.GeoJSON();
var features_Toponimi_14 = format_Toponimi_14.readFeatures(json_Toponimi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponimi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponimi_14.addFeatures(features_Toponimi_14);
var lyr_Toponimi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponimi_14, 
                style: style_Toponimi_14,
                popuplayertitle: "Toponimi",
                interactive: true,
                title: '<img src="styles/legend/Toponimi_14.png" /> Toponimi'
            });
var format_Jembatan_15 = new ol.format.GeoJSON();
var features_Jembatan_15 = format_Jembatan_15.readFeatures(json_Jembatan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jembatan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jembatan_15.addFeatures(features_Jembatan_15);
var lyr_Jembatan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jembatan_15, 
                style: style_Jembatan_15,
                popuplayertitle: "Jembatan",
                interactive: true,
                title: '<img src="styles/legend/Jembatan_15.png" /> Jembatan'
            });
var format_Makam_16 = new ol.format.GeoJSON();
var features_Makam_16 = format_Makam_16.readFeatures(json_Makam_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_16.addFeatures(features_Makam_16);
var lyr_Makam_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_16, 
                style: style_Makam_16,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_16.png" /> Makam'
            });
var format_Bangunan_17 = new ol.format.GeoJSON();
var features_Bangunan_17 = format_Bangunan_17.readFeatures(json_Bangunan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_17.addFeatures(features_Bangunan_17);
var lyr_Bangunan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_17, 
                style: style_Bangunan_17,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_17.png" /> Bangunan'
            });
var format_Pemerintahan_18 = new ol.format.GeoJSON();
var features_Pemerintahan_18 = format_Pemerintahan_18.readFeatures(json_Pemerintahan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_18.addFeatures(features_Pemerintahan_18);
var lyr_Pemerintahan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_18, 
                style: style_Pemerintahan_18,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_18.png" /> Pemerintahan'
            });
var format_Pendidikan_19 = new ol.format.GeoJSON();
var features_Pendidikan_19 = format_Pendidikan_19.readFeatures(json_Pendidikan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_19.addFeatures(features_Pendidikan_19);
var lyr_Pendidikan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_19, 
                style: style_Pendidikan_19,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_19.png" /> Pendidikan'
            });
var format_Rumah_Sakit_20 = new ol.format.GeoJSON();
var features_Rumah_Sakit_20 = format_Rumah_Sakit_20.readFeatures(json_Rumah_Sakit_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_20.addFeatures(features_Rumah_Sakit_20);
var lyr_Rumah_Sakit_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_20, 
                style: style_Rumah_Sakit_20,
                popuplayertitle: "Rumah_Sakit",
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_20.png" /> Rumah_Sakit'
            });
var format_Sarana_Ibadah_21 = new ol.format.GeoJSON();
var features_Sarana_Ibadah_21 = format_Sarana_Ibadah_21.readFeatures(json_Sarana_Ibadah_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Ibadah_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Ibadah_21.addFeatures(features_Sarana_Ibadah_21);
var lyr_Sarana_Ibadah_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Ibadah_21, 
                style: style_Sarana_Ibadah_21,
                popuplayertitle: "Sarana_Ibadah",
                interactive: true,
                title: '<img src="styles/legend/Sarana_Ibadah_21.png" /> Sarana_Ibadah'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Dusun_1.setVisible(true);lyr_Agri_Kebun_2.setVisible(false);lyr_Agri_Ladang_3.setVisible(false);lyr_Agri_Sawah_4.setVisible(false);lyr_Pemukiman_5.setVisible(false);lyr_JalanDesa_6.setVisible(true);lyr_Border_7.setVisible(true);lyr_Sungai_8.setVisible(true);lyr_Kontur_9.setVisible(true);lyr_Relka_10.setVisible(true);lyr_Kabel_Listrik_11.setVisible(true);lyr_Pemukiman_Warga_12.setVisible(false);lyr_JalanKabupaten_13.setVisible(true);lyr_Toponimi_14.setVisible(true);lyr_Jembatan_15.setVisible(true);lyr_Makam_16.setVisible(true);lyr_Bangunan_17.setVisible(true);lyr_Pemerintahan_18.setVisible(true);lyr_Pendidikan_19.setVisible(true);lyr_Rumah_Sakit_20.setVisible(true);lyr_Sarana_Ibadah_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Dusun_1,lyr_Agri_Kebun_2,lyr_Agri_Ladang_3,lyr_Agri_Sawah_4,lyr_Pemukiman_5,lyr_JalanDesa_6,lyr_Border_7,lyr_Sungai_8,lyr_Kontur_9,lyr_Relka_10,lyr_Kabel_Listrik_11,lyr_Pemukiman_Warga_12,lyr_JalanKabupaten_13,lyr_Toponimi_14,lyr_Jembatan_15,lyr_Makam_16,lyr_Bangunan_17,lyr_Pemerintahan_18,lyr_Pendidikan_19,lyr_Rumah_Sakit_20,lyr_Sarana_Ibadah_21];
lyr_Dusun_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Database': 'Database', });
lyr_Agri_Kebun_2.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_Agri_Ladang_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_Agri_Sawah_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_Pemukiman_5.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', });
lyr_JalanDesa_6.set('fieldAliases', {'fid': 'fid', 'Nama Jalan': 'Nama Jalan', });
lyr_Border_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Database': 'Database', });
lyr_Sungai_8.set('fieldAliases', {'fid': 'fid', });
lyr_Kontur_9.set('fieldAliases', {'fid': 'fid', });
lyr_Relka_10.set('fieldAliases', {'fid': 'fid', });
lyr_Kabel_Listrik_11.set('fieldAliases', {'fid': 'fid', });
lyr_Pemukiman_Warga_12.set('fieldAliases', {'fid': 'fid', });
lyr_JalanKabupaten_13.set('fieldAliases', {'fid': 'fid', 'Nama Jalan': 'Nama Jalan', });
lyr_Toponimi_14.set('fieldAliases', {'fid': 'fid', 'Nama Toponimi': 'Nama Toponimi', });
lyr_Jembatan_15.set('fieldAliases', {'fid': 'fid', 'Nama Jembatan': 'Nama Jembatan', });
lyr_Makam_16.set('fieldAliases', {'id': 'id', 'Nama Makam': 'Nama Makam', });
lyr_Bangunan_17.set('fieldAliases', {'fid': 'fid', 'Nama Bangunan': 'Nama Bangunan', });
lyr_Pemerintahan_18.set('fieldAliases', {'fid': 'fid', 'Nama Pemerintahan': 'Nama Pemerintahan', });
lyr_Pendidikan_19.set('fieldAliases', {'fid': 'fid', 'Nama Pendidikan': 'Nama Pendidikan', 'Alamat': 'Alamat', });
lyr_Rumah_Sakit_20.set('fieldAliases', {'fid': 'fid', 'Nama Rumah Sakits': 'Nama Rumah Sakits', });
lyr_Sarana_Ibadah_21.set('fieldAliases', {'fid': 'fid', 'Nama Sarana Ibadah': 'Nama Sarana Ibadah', });
lyr_Dusun_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Database': 'TextEdit', });
lyr_Agri_Kebun_2.set('fieldImages', {'fid': '', 'NAMOBJ': '', });
lyr_Agri_Ladang_3.set('fieldImages', {'fid': '', 'NAMOBJ': '', });
lyr_Agri_Sawah_4.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_Pemukiman_5.set('fieldImages', {'fid': '', 'NAMOBJ': '', });
lyr_JalanDesa_6.set('fieldImages', {'fid': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_Border_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Database': 'TextEdit', });
lyr_Sungai_8.set('fieldImages', {'fid': '', });
lyr_Kontur_9.set('fieldImages', {'fid': '', });
lyr_Relka_10.set('fieldImages', {'fid': '', });
lyr_Kabel_Listrik_11.set('fieldImages', {'fid': '', });
lyr_Pemukiman_Warga_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_JalanKabupaten_13.set('fieldImages', {'fid': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_Toponimi_14.set('fieldImages', {'fid': 'TextEdit', 'Nama Toponimi': 'TextEdit', });
lyr_Jembatan_15.set('fieldImages', {'fid': 'TextEdit', 'Nama Jembatan': 'TextEdit', });
lyr_Makam_16.set('fieldImages', {'id': 'TextEdit', 'Nama Makam': 'TextEdit', });
lyr_Bangunan_17.set('fieldImages', {'fid': 'TextEdit', 'Nama Bangunan': 'TextEdit', });
lyr_Pemerintahan_18.set('fieldImages', {'fid': 'TextEdit', 'Nama Pemerintahan': 'TextEdit', });
lyr_Pendidikan_19.set('fieldImages', {'fid': 'TextEdit', 'Nama Pendidikan': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_Rumah_Sakit_20.set('fieldImages', {'fid': 'TextEdit', 'Nama Rumah Sakits': 'TextEdit', });
lyr_Sarana_Ibadah_21.set('fieldImages', {'fid': 'TextEdit', 'Nama Sarana Ibadah': 'TextEdit', });
lyr_Dusun_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Database': 'inline label - always visible', });
lyr_Agri_Kebun_2.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', });
lyr_Agri_Ladang_3.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', });
lyr_Agri_Sawah_4.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', });
lyr_Pemukiman_5.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'no label', });
lyr_JalanDesa_6.set('fieldLabels', {'fid': 'hidden field', 'Nama Jalan': 'hidden field', });
lyr_Border_7.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Database': 'no label', });
lyr_Sungai_8.set('fieldLabels', {'fid': 'hidden field', });
lyr_Kontur_9.set('fieldLabels', {'fid': 'hidden field', });
lyr_Relka_10.set('fieldLabels', {'fid': 'hidden field', });
lyr_Kabel_Listrik_11.set('fieldLabels', {'fid': 'hidden field', });
lyr_Pemukiman_Warga_12.set('fieldLabels', {'fid': 'hidden field', });
lyr_JalanKabupaten_13.set('fieldLabels', {'fid': 'hidden field', 'Nama Jalan': 'hidden field', });
lyr_Toponimi_14.set('fieldLabels', {'fid': 'hidden field', 'Nama Toponimi': 'inline label - visible with data', });
lyr_Jembatan_15.set('fieldLabels', {'fid': 'hidden field', 'Nama Jembatan': 'header label - visible with data', });
lyr_Makam_16.set('fieldLabels', {'id': 'hidden field', 'Nama Makam': 'inline label - always visible', });
lyr_Bangunan_17.set('fieldLabels', {'fid': 'hidden field', 'Nama Bangunan': 'inline label - always visible', });
lyr_Pemerintahan_18.set('fieldLabels', {'fid': 'hidden field', 'Nama Pemerintahan': 'inline label - always visible', });
lyr_Pendidikan_19.set('fieldLabels', {'fid': 'hidden field', 'Nama Pendidikan': 'inline label - always visible', 'Alamat': 'hidden field', });
lyr_Rumah_Sakit_20.set('fieldLabels', {'fid': 'hidden field', 'Nama Rumah Sakits': 'inline label - always visible', });
lyr_Sarana_Ibadah_21.set('fieldLabels', {'fid': 'hidden field', 'Nama Sarana Ibadah': 'inline label - always visible', });
lyr_Sarana_Ibadah_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});