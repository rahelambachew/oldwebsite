      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 12.603018, lng: 37.452132},
          zoom: 10
        });
      
        var iconBase = 'http://maps.google.com/mapfiles/kml/pushpin/';
        var icons = {
          nonvisited: {
           icon: iconBase + 'ylw-pushpin.png'
          },
          visited: {
            icon: iconBase + 'red-pushpin.png'
          }
        };
     
        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        }
        
        var features = [
          {
            position: new google.maps.LatLng(12.603018, 37.452132),
            type: 'visited'
          }, {
            position: new google.maps.LatLng(47.447820, -122.291863),
            type: 'visited'
          }, {
            position: new google.maps.LatLng(47.606209, -122.332071 ),
            type: 'visited'
          }, {
            position: new google.maps.LatLng(-12.272096, -76.271083 ),
            type: 'nonvisited'
          }, {
            position: new google.maps.LatLng(37.983810, 23.727539 ),
            type: 'nonvisited'
          }, {
            position: new google.maps.LatLng(52.370216,4.895168 ),
            type: 'nonvisited'
          }
        ];

        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }