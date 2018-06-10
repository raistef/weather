$(document).ready(function(){
	
	//gettig data from the weather API
	
	var lon, lat;
	var kelvin, celsius, fahrenheit;
	var city, description, country;
	  
	$.getJSON("https://freegeoip.net/json/", function(coord) {
	
    lon =coord.longitude;
	lat=coord.latitude; 
	var api="https://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+lon+"&cnt=7&appid=4882b61b9d6fa08f532b9197d4cb15a0";
	console.log(api);
  
       $.getJSON(api, function(data) { 
         
     var d = new Date();
      var weekday = new Array(7);
      weekday[0] =  "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";
function day_name(nr) {
  return weekday[(d.getDay()+nr)%7];
}
      var name_day = weekday[d.getDay()];
     
     max=[];
     min=[];
     icon=[];
     humidity=[];
     pressure=[];
     wind=[];
     city=data.city.name;
     country=data.city.country;
	
         for (var i=0;i<7;i++) {
			max.push(data.list[i].temp.max-273.15-((data.list[i].temp.max-273.15)%1));
			console.log(max[i]);
         }
         
         for (var i=0;i<7;i++) {
           min.push(data.list[i].temp.min-273.15-((data.list[i].temp.min-273.15)%1));
           console.log(min[i]);
         }
		 for (var i=0;i<7;i++) {
           icon.push(day1_iconLink="https://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png");
           console.log(icon[i]);
         }
	 day1_min_kelvin=data.list[0].temp.min;
     day1_min_celsius=day1_min_kelvin-273.15-((day1_min_kelvin-273.15)%1);
     
     
     day1_humidity=data.list[0].humidity;
     day1_pressure=data.list[0].pressure-(data.list[0].pressure%1);
     day1_wind=data.list[0].speed;
     
     day2_min_kelvin=data.list[1].temp.min;
     day2_min_celsius=day2_min_kelvin-273.15-((day2_min_kelvin-273.15)%1);
     day2_icon=data.list[1].weather[0].icon;
        		
		
	$("#main_temp h1").html(max[0]+"&#176; <span></span>");
	$("#main_temp h1  span").html("\t"+min[0]+"&#176;");
	$("#main_icon").attr("src", icon[0]);
    $("#day1_humidity").html("Humidity: "+day1_humidity+"%");
    $("#day1_pressure").html("Pressure: "+day1_pressure+" hPa");
    $("#day1_wind").html("Wind: "+day1_wind+" meter/s");
    $("#day1 p").html(max[0]+"&#176; <span></span>");
    $("#day1 span").html("\t"+min[0]+"&#176;");
    $("#day1 img").attr("src", icon[0]);
    $("#day1 h4").html(day_name(0));
         
    $("#day2 p").html(max[1]+"&#176; <span></span>");
    $("#day2 span").html("\t"+min[1]+"&#176;");
    $("#day2 img").attr("src", icon[1]);
    $("#day2 h4").html(day_name(1));
         
    $("#day3 p").html(max[2]+"&#176; <span></span>");
    $("#day3 span").html("\t"+min[2]+"&#176;");
    $("#day3 img").attr("src", icon[2]);
    $("#day3 h4").html(day_name(2));  
         
    $("#day4 p").html(max[3]+"&#176; <span></span>");
    $("#day4 span").html("\t"+min[3]+"&#176;");
    $("#day4 img").attr("src", icon[3]);
    $("#day4 h4").html(day_name(3));
         
    $("#day5 p").html(max[4]+"&#176; <span></span>");
    $("#day5 span").html("\t"+min[4]+"&#176;");
    $("#day5 img").attr("src", icon[4]);
    $("#day5 h4").html(day_name(4));
         
    $("#day6 p").html(max[5]+"&#176; <span></span>");
    $("#day6 span").html("\t"+min[5]+"&#176;");
    $("#day6 img").attr("src", icon[5]);
    $("#day6 h4").html(day_name(5));
        
    $("#day7 p").html(max[6]+"&#176; <span></span>");
    $("#day7 span").html("\t"+min[6]+"&#176;");
    $("#day7 img").attr("src", icon[6]);
    $("#day7 h4").html(day_name(6));
         
    $("#main_temp h3").html(city+", <span>"+country+"</span>");
	
	
	//emphasizing on mouse over
	
	function on_day(day) {
		$("#main_temp h1").html(max[day]+"&#176; <span></span>");
		$("#main_temp h1  span").html("\t"+min[day]+"&#176;");
		$("#main_icon").attr("src", icon[day]);
		$("#day1").css("border-color", "white");
	}
	
	function off_day(day) {
		$("#main_temp h1").html(max[0]+"&#176; <span></span>");
		$("#main_temp h1  span").html("\t"+min[0]+"&#176;");
		$("#main_icon").attr("src", icon[0]);
		$(this).css("border-color", "grey");
	}
	
	$( "#day2" ).mouseover(function() {
		on_day(1);
		$(this).css("border-color", "rgba(30,144,255, 0.7)");
		
	});
	
	$( "#day2" ).mouseleave(function() {
		off_day(1);
		$(this).css("border-color", "white");
		$("#day1").css("border-color", "rgba(30,144,255, 0.7)");
	});
	
	$( "#day3" ).mouseover(function() {
		on_day(2);
		$(this).css("border-color", "rgba(30,144,255, 0.7)");
		
	});
	
	$( "#day3" ).mouseleave(function() {
		off_day(2);
		$(this).css("border-color", "white");
		$("#day1").css("border-color", "rgba(30,144,255, 0.7)");
	});
	
	$( "#day4" ).mouseover(function() {
		on_day(3);
		$(this).css("border-color", "rgba(30,144,255, 0.7)");
		
	});
	
	$( "#day4" ).mouseleave(function() {
		off_day(3);
		$(this).css("border-color", "white");
		$("#day1").css("border-color", "rgba(30,144,255, 0.7)");
	});
	    
	$( "#day5" ).mouseover(function() {
		on_day(4);
		$(this).css("border-color", "rgba(30,144,255, 0.7)");
		
	});
	
	$( "#day5" ).mouseleave(function() {
		off_day(4);
		$(this).css("border-color", "white");
		$("#day1").css("border-color", "rgba(30,144,255, 0.7)");
	});
	
	$( "#day6" ).mouseover(function() {
		on_day(5);
		$(this).css("border-color", "rgba(30,144,255, 0.7)");
		
	});
	
	$( "#day6" ).mouseleave(function() {
		off_day(5);
		$(this).css("border-color", "white");
		$("#day1").css("border-color", "rgba(30,144,255, 0.7)");
	});
		/*if (celsius<5) { 
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
		 */
		  
		  
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
