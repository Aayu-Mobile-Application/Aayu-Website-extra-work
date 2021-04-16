var map;
function initMap() {
    // The location of Uluru
    const uluru = { lat: 7.8731, lng: 80.7718 };

    // The map, centered at Uluru
     map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7.3,
      center: uluru,
    });




 
  }

  
  function myFunction() {
    fetch('https://mocki.io/v1/6b0cd774-42d4-49c8-897b-28c32112ebb4', {
        mode: "no-cors",
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => response.text())
      .then((response) => {
      var jo=JSON.parse(response);
      jo.map((data)=>{
          var lat= parseInt(data.latitude, 10);
          var long=parseInt(data.longitude, 10);
          const myLatLng = { lat:lat , lng:long };
          addMarker(myLatLng,map,data.plantName);
      })
      
      })
      .catch(error => { console.log('request failed', error); });
  }
  function addMarker(location, map,plantName) {
    var marker = new google.maps.Marker({
        position: location,
        title: plantName,
        map:map
    });
  }