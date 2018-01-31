$(document).ready(function(){
	var lon, lat;
	var kelvin, celsius, fahrenheit;
	var city, description, country;
	  
	$.getJSON("https://freegeoip.net/json/", function(coord) {
	
    lon = coord.longitude;
	lat=coord.latitude; 
    var api="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=4882b61b9d6fa08f532b9197d4cb15a0";
  
       $.getJSON(api, function(data) { 
       city = data.name;
	   country = data.sys.country;
	   kelvin= data.main.temp;
	   celsius=kelvin-273.15;
	   fahrenheit=kelvin*9/5-459.67-((kelvin*9/5-459.67)%1); 
	   description=data.weather[0].description;
	   icon=data.weather[0].icon;
	   iconLink="https://openweathermap.org/img/w/"+icon+".png";
	   humidity=data.main.humidity;
	   wind=data.wind.speed;
	   pressure=data.main.pressure;
	   
		$("#city").html(city);
		$("#country").html(country);
		$("#celsius").html(celsius+"°"+"  C");
		$("#fahrenheit").html(fahrenheit+"°"+" F");
		$("#description").html(description.toUpperCase());
		$(".icon").attr("src",iconLink);
    
		if (celsius<5) { 
			  $('body').css('background-image','url("img/winter.jpg")');
		}
	  
		else if (celsius<13) { 
			  $('body').css('background-image','url("img/autumn.jpg")');
		}
		  
		else if (celsius<22) { 
			  $('body').css('background-image','url("img/spring.jpg")');
		  }
		  
		else if (celsius<100) { 
			  $('body').css('background-image','url("img/summer.jpg")');
		  }
		  
		  
			/////////////////////////////////--toggle celsius--///////////////////////////////////////// 
				$(".button").on("click", function(){
			
				if ( $(".button").text() == "/ F" ) {
					$("#celsius").html(fahrenheit+"°"+" F");
					$(".button").html("/ C"); 
				}
			
				else {
				  $("#celsius").html(celsius+"°"+" C");
				  $(".button").html("/ F");  
				}
				});
				var clicked=0;
				$("#more").on("click", function(){
					clicked++;
					if (clicked%2!==0) {
						$("#more").html("Close details...");
						$("#humidity").html("Humidity: "+humidity+"%");
						$("#wind").html("Wind speed: "+humidity+" m/s");
						$("#pressure").html("Pressure: "+pressure+" hPa");
					}
					else {
						$("#humidity").html("");
						$("#wind").html("");
						$("#pressure").html("");
						$("#more").html("More data...");
					}
					
				});
		});
	});
});