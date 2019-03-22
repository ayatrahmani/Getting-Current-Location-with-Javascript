 getLocation() {
    if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    geoSuccess(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      alert(""+lat +"lang"+lng);
  }
  geoError() {
    alert("Geocoder failed.");
}