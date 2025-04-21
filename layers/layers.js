var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Fixedgeometries_1 = new ol.format.GeoJSON();
var features_Fixedgeometries_1 = format_Fixedgeometries_1.readFeatures(json_Fixedgeometries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_1.addFeatures(features_Fixedgeometries_1);
var lyr_Fixedgeometries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fixedgeometries_1, 
                style: style_Fixedgeometries_1,
                popuplayertitle: 'Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/Fixedgeometries_1.png" /> Fixed geometries'
            });
var format_Centroids_2 = new ol.format.GeoJSON();
var features_Centroids_2 = format_Centroids_2.readFeatures(json_Centroids_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroids_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroids_2.addFeatures(features_Centroids_2);
cluster_Centroids_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Centroids_2
});
var lyr_Centroids_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Centroids_2, 
                style: style_Centroids_2,
                popuplayertitle: 'Centroids',
                interactive: false,
                title: 'Centroids'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Fixedgeometries_1.setVisible(true);lyr_Centroids_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Fixedgeometries_1,lyr_Centroids_2];
lyr_Fixedgeometries_1.set('fieldAliases', {'fid': 'fid', 'plot_name': 'plot_name', 'client': 'client', 'project_name': 'project_name', 'project_type': 'project_type', 'year_start': 'year_start', 'project_spam': 'project_spam', 'species': 'species', 'total_area_ha': 'total_area_ha', 'mean_volume_m3': 'mean_volume_m3', 'total_stems': 'total_stems', 'Action_1_Year': 'Action_1_Year', 'Action_1_Type': 'Action_1_Type', 'Action_1_Description': 'Action_1_Description', 'Action_2_Year': 'Action_2_Year', 'Action_2_Type': 'Action_2_Type', 'Action_2_Description': 'Action_2_Description', 'Action_3_Year': 'Action_3_Year', 'Action_3_Type': 'Action_3_Type', 'Action_3_Description': 'Action_3_Description', 'Action_4_Year': 'Action_4_Year', 'Action_4_Type': 'Action_4_Type', 'Action_4_Description': 'Action_4_Description', 'Action_5_Year': 'Action_5_Year', 'Action_5_Type': 'Action_5_Type', 'Action_5_Description': 'Action_5_Description', 'Action_6_Year': 'Action_6_Year', 'Action_6_Type': 'Action_6_Type', 'Action_6_Description': 'Action_6_Description', 'year_end': 'year_end', 'tnCO2_total': 'tnCO2_total', 'tnCO2_registered': 'tnCO2_registered', 'tnCO2_Bolsa_Garantia_MITECO': 'tnCO2_Bolsa_Garantia_MITECO', 'tnCO2_Available': 'tnCO2_Available', 'tnCO2_performance': 'tnCO2_performance', 'plot_date': 'plot_date', 'plot_notes': 'plot_notes', 'plot_pictures': 'plot_pictures', });
lyr_Centroids_2.set('fieldAliases', {'fid': 'fid', 'plot_name': 'plot_name', 'client': 'client', 'project_name': 'project_name', 'project_type': 'project_type', 'year_start': 'year_start', 'project_spam': 'project_spam', 'species': 'species', 'total_area_ha': 'total_area_ha', 'mean_volume_m3': 'mean_volume_m3', 'total_stems': 'total_stems', 'Action_1_Year': 'Action_1_Year', 'Action_1_Type': 'Action_1_Type', 'Action_1_Description': 'Action_1_Description', 'Action_2_Year': 'Action_2_Year', 'Action_2_Type': 'Action_2_Type', 'Action_2_Description': 'Action_2_Description', 'Action_3_Year': 'Action_3_Year', 'Action_3_Type': 'Action_3_Type', 'Action_3_Description': 'Action_3_Description', 'Action_4_Year': 'Action_4_Year', 'Action_4_Type': 'Action_4_Type', 'Action_4_Description': 'Action_4_Description', 'Action_5_Year': 'Action_5_Year', 'Action_5_Type': 'Action_5_Type', 'Action_5_Description': 'Action_5_Description', 'Action_6_Year': 'Action_6_Year', 'Action_6_Type': 'Action_6_Type', 'Action_6_Description': 'Action_6_Description', 'year_end': 'year_end', 'tnCO2_total': 'tnCO2_total', 'tnCO2_registered': 'tnCO2_registered', 'tnCO2_Bolsa_Garantia_MITECO': 'tnCO2_Bolsa_Garantia_MITECO', 'tnCO2_Available': 'tnCO2_Available', 'tnCO2_performance': 'tnCO2_performance', 'plot_date': 'plot_date', 'plot_notes': 'plot_notes', 'plot_pictures': 'plot_pictures', });
lyr_Fixedgeometries_1.set('fieldImages', {'fid': '', 'plot_name': '', 'client': '', 'project_name': '', 'project_type': '', 'year_start': '', 'project_spam': '', 'species': '', 'total_area_ha': '', 'mean_volume_m3': '', 'total_stems': '', 'Action_1_Year': '', 'Action_1_Type': '', 'Action_1_Description': '', 'Action_2_Year': '', 'Action_2_Type': '', 'Action_2_Description': '', 'Action_3_Year': '', 'Action_3_Type': '', 'Action_3_Description': '', 'Action_4_Year': '', 'Action_4_Type': '', 'Action_4_Description': '', 'Action_5_Year': '', 'Action_5_Type': '', 'Action_5_Description': '', 'Action_6_Year': '', 'Action_6_Type': '', 'Action_6_Description': '', 'year_end': '', 'tnCO2_total': '', 'tnCO2_registered': '', 'tnCO2_Bolsa_Garantia_MITECO': '', 'tnCO2_Available': '', 'tnCO2_performance': '', 'plot_date': '', 'plot_notes': '', 'plot_pictures': '', });
lyr_Centroids_2.set('fieldImages', {'fid': 'TextEdit', 'plot_name': 'TextEdit', 'client': 'TextEdit', 'project_name': 'TextEdit', 'project_type': 'TextEdit', 'year_start': 'TextEdit', 'project_spam': 'TextEdit', 'species': 'TextEdit', 'total_area_ha': 'TextEdit', 'mean_volume_m3': 'TextEdit', 'total_stems': 'Range', 'Action_1_Year': 'TextEdit', 'Action_1_Type': 'TextEdit', 'Action_1_Description': 'TextEdit', 'Action_2_Year': 'TextEdit', 'Action_2_Type': 'TextEdit', 'Action_2_Description': 'TextEdit', 'Action_3_Year': 'TextEdit', 'Action_3_Type': 'TextEdit', 'Action_3_Description': 'TextEdit', 'Action_4_Year': 'TextEdit', 'Action_4_Type': 'TextEdit', 'Action_4_Description': 'TextEdit', 'Action_5_Year': 'TextEdit', 'Action_5_Type': 'TextEdit', 'Action_5_Description': 'TextEdit', 'Action_6_Year': 'TextEdit', 'Action_6_Type': 'TextEdit', 'Action_6_Description': 'TextEdit', 'year_end': 'TextEdit', 'tnCO2_total': 'TextEdit', 'tnCO2_registered': 'TextEdit', 'tnCO2_Bolsa_Garantia_MITECO': 'TextEdit', 'tnCO2_Available': 'TextEdit', 'tnCO2_performance': 'TextEdit', 'plot_date': 'TextEdit', 'plot_notes': 'TextEdit', 'plot_pictures': 'TextEdit', });
lyr_Fixedgeometries_1.set('fieldLabels', {'fid': 'inline label - always visible', 'plot_name': 'inline label - always visible', 'client': 'inline label - always visible', 'project_name': 'inline label - always visible', 'project_type': 'inline label - always visible', 'year_start': 'inline label - always visible', 'project_spam': 'inline label - always visible', 'species': 'inline label - always visible', 'total_area_ha': 'inline label - always visible', 'mean_volume_m3': 'header label - visible with data', 'total_stems': 'inline label - always visible', 'Action_1_Year': 'inline label - visible with data', 'Action_1_Type': 'inline label - always visible', 'Action_1_Description': 'inline label - always visible', 'Action_2_Year': 'inline label - always visible', 'Action_2_Type': 'inline label - always visible', 'Action_2_Description': 'inline label - always visible', 'Action_3_Year': 'no label', 'Action_3_Type': 'no label', 'Action_3_Description': 'no label', 'Action_4_Year': 'no label', 'Action_4_Type': 'no label', 'Action_4_Description': 'no label', 'Action_5_Year': 'no label', 'Action_5_Type': 'no label', 'Action_5_Description': 'no label', 'Action_6_Year': 'no label', 'Action_6_Type': 'no label', 'Action_6_Description': 'no label', 'year_end': 'inline label - always visible', 'tnCO2_total': 'inline label - always visible', 'tnCO2_registered': 'inline label - always visible', 'tnCO2_Bolsa_Garantia_MITECO': 'inline label - always visible', 'tnCO2_Available': 'inline label - always visible', 'tnCO2_performance': 'inline label - always visible', 'plot_date': 'inline label - always visible', 'plot_notes': 'inline label - always visible', 'plot_pictures': 'inline label - always visible', });
lyr_Centroids_2.set('fieldLabels', {'fid': 'no label', 'plot_name': 'no label', 'client': 'no label', 'project_name': 'no label', 'project_type': 'no label', 'year_start': 'no label', 'project_spam': 'no label', 'species': 'no label', 'total_area_ha': 'no label', 'mean_volume_m3': 'no label', 'total_stems': 'no label', 'Action_1_Year': 'no label', 'Action_1_Type': 'no label', 'Action_1_Description': 'no label', 'Action_2_Year': 'no label', 'Action_2_Type': 'no label', 'Action_2_Description': 'no label', 'Action_3_Year': 'no label', 'Action_3_Type': 'no label', 'Action_3_Description': 'no label', 'Action_4_Year': 'no label', 'Action_4_Type': 'no label', 'Action_4_Description': 'no label', 'Action_5_Year': 'no label', 'Action_5_Type': 'no label', 'Action_5_Description': 'no label', 'Action_6_Year': 'no label', 'Action_6_Type': 'no label', 'Action_6_Description': 'no label', 'year_end': 'no label', 'tnCO2_total': 'no label', 'tnCO2_registered': 'no label', 'tnCO2_Bolsa_Garantia_MITECO': 'no label', 'tnCO2_Available': 'no label', 'tnCO2_performance': 'no label', 'plot_date': 'no label', 'plot_notes': 'no label', 'plot_pictures': 'no label', });
lyr_Centroids_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});