// =========================================================================
//Youssef Mohamed Bakr
//+201121121000
//Youssef.Bakr@drc.gov.eg
//Youssef.Bakr@faps.cu.edu.eg
// =========================================================================
// Define the coordinates using the exact location provided
var lon = 31.428947;
var lat = 30.563594; 

// Create a point geometry object
var point = ee.Geometry.Point([lon, lat]);

// Center the map on the point with a high zoom level (e.g., 15 for close-up)
Map.centerObject(point, 15);

// Add a marker to the map to easily identify the point location
Map.addLayer(point, {color: 'red'}, 'Target Point');

//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/2/L1_AETI_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 50},'FAO/WAPOR/2/L1_AETI_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/3/L1_AETI_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 50},'FAO/WAPOR/3/L1_AETI_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/2/L1_RET_E');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 100},'FAO/WAPOR/2/L1_RET_E');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/3/L1_RET_E');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 100},'FAO/WAPOR/3/L1_RET_E');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/2/L1_E_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 10},'FAO/WAPOR/2/L1_E_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/3/L1_E_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 10},'FAO/WAPOR/3/L1_E_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/2/L1_I_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 50},'FAO/WAPOR/2/L1_I_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/3/L1_I_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 50},'FAO/WAPOR/3/L1_I_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/2/L1_NPP_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 5000},'FAO/WAPOR/2/L1_NPP_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/2/L1_RET_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 100},'FAO/WAPOR/2/L1_RET_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/3/L1_RET_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 100},'FAO/WAPOR/3/L1_RET_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/2/L1_T_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 50},'FAO/WAPOR/2/L1_T_D');
//======================================================
var coll = ee.ImageCollection('FAO/WAPOR/3/L1_T_D');
var image = coll.first();
Map.addLayer(image, {min: 0, max: 50},'FAO/WAPOR/3/L1_T_D');
//======================================================










