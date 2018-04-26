$(document).ready(function(){
	
	var lon, lat;
	var kelvin, celsius, fahrenheit;
	var city, description, country;
	  
	$.getJSON("https://freegeoip.net/json/", function(coord) {
	
  lon =coord.longitude;
	lat=coord.latitude; 
	var api="https://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+lon+"&cnt=7&appid=4882b61b9d6fa08f532b9197d4cb15a0";
	console.log(api);
  
       $.getJSON(api, function(data) { 
     
     max=[];
     min=[];
     icon=[];
     humidity=[];
     pressure=[];
     wind=[];
         for (var i=0;i<7;i++) {
           max.push(data.list[i].temp.max-273.15-((data.list[i].temp.max-273.15)%1));
           console.log(max[i]);
         }
         
         for (var i=0;i<7;i++) {
           min.push(data.list[i].temp.min-273.15-((data.list[i].temp.min-273.15)%1));
           console.log(min[i]);
         }
	   day1_min_kelvin=data.list[0].temp.min;
     day1_min_celsius=day1_min_kelvin-273.15-((day1_min_kelvin-273.15)%1);
     day1_icon=data.list[0].weather[0].icon;
     day1_iconLink="https://openweathermap.org/img/w/"+day1_icon+".png";
     day1_humidity=data.list[0].humidity;
     day1_pressure=data.list[0].pressure;
     day1_wind=data.list[0].speed;
     
     day2_min_kelvin=data.list[1].temp.min;
     day2_min_celsius=day2_min_kelvin-273.15-((day2_min_kelvin-273.15)%1);
     day2_icon=data.list[1].weather[0].icon;
     day2_iconLink="https://openweathermap.org/img/w/"+day2_icon+".png";
         
     day3_icon=data.list[2].weather[0].icon;
     day3_iconLink="https://openweathermap.org/img/w/"+day3_icon+".png";
	   
     day4_icon=data.list[3].weather[0].icon;
     day4_iconLink="https://openweathermap.org/img/w/"+day4_icon+".png";
     
     day5_icon=data.list[4].weather[0].icon;
     day5_iconLink="https://openweathermap.org/img/w/"+day5_icon+".png";
         
     day6_icon=data.list[5].weather[0].icon;
     day6_iconLink="https://openweathermap.org/img/w/"+day6_icon+".png";
     
     day7_icon=data.list[6].weather[0].icon;
     day7_iconLink="https://openweathermap.org/img/w/"+day7_icon+".png";
		//$("#city").html(city);
		//$("#country").html(country);
		//$("#celsius").html(celsius+"°"+"  C");
		//$("#fahrenheit").html(fahrenheit+"°"+" F");
		//$("#description").html(description.toUpperCase());
		//$(".icon").attr("src",iconLink);
    $("#main_temp h1").html(max[0]+"&#176; <span></span>");
    $("#main_temp span").html("\t"+min[0]+"&#176;");
    $("#day1_humidity").html("Humidity: "+day1_humidity+"%");
    $("#day1_pressure").html("Pressure: "+day1_pressure+" hPa");
    $("#day1_wind").html("Wind: "+day1_wind+" meter/s");
    $("#day1_icon").attr("src", day1_iconLink);
         
    $("#day1 p").html(max[0]+"&#176; <span></span>");
    $("#day1 span").html("\t"+min[0]+"&#176;");
    $("#day1 img").attr("src", day1_iconLink);
         
    $("#day2 p").html(max[1]+"&#176; <span></span>");
    $("#day2 span").html("\t"+min[1]+"&#176;");
    $("#day2 img").attr("src", day2_iconLink);
         
    $("#day3 p").html(max[2]+"&#176; <span></span>");
    $("#day3 span").html("\t"+min[2]+"&#176;");
    $("#day3 img").attr("src", day3_iconLink);
         
    $("#day4 p").html(max[3]+"&#176; <span></span>");
    $("#day4 span").html("\t"+min[3]+"&#176;");
    $("#day4 img").attr("src", day4_iconLink);
         
    $("#day5 p").html(max[4]+"&#176; <span></span>");
    $("#day5 span").html("\t"+min[4]+"&#176;");
    $("#day5 img").attr("src", day5_iconLink);
         
    $("#day6 p").html(max[5]+"&#176; <span></span>");
    $("#day6 span").html("\t"+min[5]+"&#176;");
    $("#day6 img").attr("src", day6_iconLink);
        
    $("#day7 p").html(max[6]+"&#176; <span></span>");
    $("#day7 span").html("\t"+min[6]+"&#176;");
    $("#day7 img").attr("src", day7_iconLink);
    
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
				// $(".button").on("click", function(){
			
				// if ( $(".button").text() == "/ F" ) {
					// $("#celsius").html(fahrenheit+"°"+" F");
					// $(".button").html("/ C"); 
				// }
			
				// else {
				  // $("#celsius").html(celsius+"°"+" C");
				  // $(".button").html("/ F");  
				// }
				// });
				
		});
	});
});