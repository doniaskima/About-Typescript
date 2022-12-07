"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
class Map {
    constructor(htmlId) {
        this.googleMap = new google.maps.Map(document.getElementById(htmlId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    addMarker(mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}
exports.Map = Map;
