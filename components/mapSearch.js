// import { useEffect } from "react";
// import L from "leaflet";
// import * as ELG from "esri-leaflet-geocoder";
// import { useLeafletContext } from "react-leaflet";

// const MapSearch = (props) => {
//   const context = useLeafletContext();

//   const loadSearch = () => {
//     const map = props.leaflet.map;
//     const searchControl = new ELG.Geosearch().addTo(map);
//     const results = new L.LayerGroup().addTo(map);

//     searchControl.on("results", function (data) {
//       results.clearLayers();
//       for (let i = data.results.length - 1; i >= 0; i--) {
//         results.addLayer(L.marker(data.results[i].latlng));
//       }
//     });
//   };

//   useEffect(() => {
//     loadSearch();
//   }, []);

//   return <></>;
// };

// //export default Search;
// export default MapSearch;
