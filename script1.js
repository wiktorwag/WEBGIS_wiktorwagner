require(["esri/WebMap", "esri/Map", "esri/views/MapView", "esri/geometry/support/webMercatorUtils"], function(WebMap, Map, MapView){
    let topo = document.getElementById("topo");
    let sat = document.getElementById("sat");
    let OSM = document.getElementById("OSM");
    let agol = document.getElementById("agol")

    
    let map1 = new Map({basemap:'topo'}); 
    let map2 = new Map({basemap:'satellite'});
    let map3 = new Map({basemap:'osm'});
    let map4 = new WebMap({
        portalItem: {
            id: "bf154f28930e423a82e97cf3d604c88a"
        }
    });


    let mapContainer = new MapView({
        container: "viewDiv", 
        map: map4, 
    });

    topo.addEventListener("click",function(){
        mapContainer.map = map1;
    });

    sat.addEventListener("click",function(){
        mapContainer.map = map2;
    });

    OSM.addEventListener("click",function(){
        mapContainer.map = map3;
    });

    agol.addEventListener("click", function(){
        mapContainer.map = map4;
    });

    // mapview.on("click", function(evt){
    //     let cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
    // });

})

// require([
//     "esri/Map",
//     "esri/views/MapView",
//     "esri/widgets/BasemapToggle",
//     "esri/widgets/BasemapGallery"
//   ], function(Map, MapView, BasemapToggle, BasemapGallery) {

//     var map = new Map({
//       basemap: "topo-vector"
//     });
    
//     var view = new MapView({
//       container: "viewDiv",
//       map: map,
//       center: [-118.80543,34.02700],
//       zoom: 13   
//     });
//     var basemapGallery = new BasemapGallery({
//         view: view,
//         source: {
//           portal: {
//             url: "http://www.arcgis.com",
//             useVectorBasemaps: true, 
//           },
//         } 
//       });
   

//       view.ui.add(basemapGallery, "top-right"); 
      
//     });

    // require([
    //     "esri/Map",
    //     "esri/views/MapView",
    //     "esri/layers/GraphicsLayer",
    //     "esri/widgets/Sketch"
    //   ], function(Map, MapView, GraphicsLayer, Sketch) {
  
    //     var graphicsLayer = new GraphicsLayer();
        
    //     var map = new Map({
    //       basemap: "topo-vector",
    //       layers: [graphicsLayer]
    //     });
        
    //     var view = new MapView({
    //       container: "viewDiv",
    //       map: map,
    //       center: [-118.80543,34.02700],
    //       zoom: 13
    //     });
        
    //     var sketch = new Sketch({
    //       view: view,
    //       layer: graphicsLayer
    //     });
  
    //     view.ui.add(sketch, "top-right");  
    // });

    // require([
    //     "esri/Map",
    //     "esri/views/MapView",
    //     "esri/layers/FeatureLayer"
    //   ], function(Map, MapView, FeatureLayer) {
        
    //     var map = new Map({
    //       basemap: "topo-vector"
    //     });
  
    //     var view = new MapView({
    //       container: "viewDiv",  
    //       map: map,
    //       center: [-118.80543,34.02700],
    //       zoom: 13            
    //     });
  
          
    //     var trailheadsLayer = new FeatureLayer({
    //       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
    //     });
  
    //     map.add(trailheadsLayer);
        
    //     var trailsLayer = new FeatureLayer({
    //       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
    //     });
  
    //     map.add(trailsLayer, 0);
  
    //     var parksLayer = new FeatureLayer({
    //       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
    //     });
  
    //     map.add(parksLayer, 0);
  
    //   });