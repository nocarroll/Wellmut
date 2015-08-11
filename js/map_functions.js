function getImageForMap(aNumber){
		var theImage;
		
		if (aNumber == 1){
			theImage = 'map_verysad.png';
		}
		else if (aNumber == 2){
			theImage = 'map_sad.png';
		}
		else if (aNumber == 3){
			theImage = 'map_neutral.png';
		}
		else if (aNumber == 4){
			theImage = 'map_happy.png';
		}
		else if (aNumber == 5){
			theImage = 'map_veryhappy.png';
		}
		
		var imgFile = 'images/' + theImage;
	
	return imgFile;
	}
	
	function getTitleForMap(aNumber){
		var theTitle;
		
		if (aNumber == 1){
			theTitle = 'You were unhappy here...';
		}
		else if (aNumber == 2){
			theTitle = 'You were quite unhappy here...';
		}
		else if (aNumber == 3){
			theTitle = 'This place makes you feel ok.';
		}
		else if (aNumber == 4){
			theTitle = 'You like this place!';
		}
		else if (aNumber == 5){
			theTitle = 'You really like this place!!!';
		}
	
	return theTitle;
	}
	
	
	
	function initialize() {
	  var mapOptions = {
		zoom: 10,
		center: new google.maps.LatLng(53.385847,-6.064684),
		disableDefaultUI: true
	  }
	  var map = new google.maps.Map(document.getElementById('map-canvas'),
									mapOptions);
									
		map.set('styles', [
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [
			{ visibility: 'off' }
			]
		},
		
		{
			featureType: 'road',
			elementType: 'labels',
			stylers: [
			{ visibility: 'off' }
			]
		},
		
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels',
			stylers: [
			{ visibility: 'off' }
			]
		},
		{
			featureType: 'administrative.locality',
			elementType: 'labels',
			stylers: [
			{ visibility: 'off' }
			]
		},


		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [
			{ visibility: 'off' }
			]
		},
		
		{
			featureType: 'transit',
			elementType: 'labels',
			stylers: [
			{ visibility: 'off' }
			]
		},
		
		 {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
		},
		{
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
		},
		
		{
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -100
            }
        ]
    }

		]);

	var image = getImageForMap(3);
	var myLatLng = new google.maps.LatLng(53.385847,-6.064684);
	
	var mapArray = dbGetMapDataWithMood(1, 1, 19);
	for (var i = 0; i < mapArray.length; i++) {
		var myLatLng = new google.maps.LatLng(mapArray[i][0], mapArray[i][1]);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: getImageForMap(mapArray[i][2]),
			title: getTitleForMap(mapArray[i][2])
		});
	}
	}
	
//google.maps.event.addDomListener(window, 'load', initialize);