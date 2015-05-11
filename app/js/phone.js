$(document).ready(function () {

	$(".backgrid").tablesorter();

	//This is not generating on navigation, change tabs to reproduce
  	$("#first_filter_search").on("click",function(){
		var sel = $("#first_selected_filter").val();
		var new_html="";
		switch(sel){
			case "calltype" : new_html+="<div id='all' class='filter_option'>All</div><div id='out' class='filter_option'>Outbound</div><div id='in' class='filter_option'>Inbound</div><div id='miss' class='filter_option'>Missed</div>";
			break;
			case "phonenumber" : new_html+="<div id='asc' class='filter_option'>Ascending</div><div id='desc' class='filter_option'>Descending</div>";
			break;
			case "agent" : new_html+="<div id='asc' class='filter_option'>Ascending</div><div id='desc' class='filter_option'>Descending</div>";
			break;
			case "caller" : new_html+="<div id='asc' class='filter_option'>Ascending</div><div id='desc' class='filter_option'>Descending</div>";
			break;
			case "date" : new_html+="<div id='new' class='filter_option'>Newer</div><div id='old' class='filter_option'>Older</div>";
			break;
			
		}
		$("#filter_options").html(new_html);

		//add events for generated divs
		$(".filter_option").on("click",function(){
			$(".filter_option").removeClass("filter_selected")
			$(this).addClass("filter_selected");

			var filter = $(this).attr("id");

			switch(filter){
				case 'out': $(".outbound").parent().parent().css("display","inherit");
							$(".inbound").parent().parent().css("display","none");
							$(".missed").parent().parent().css("display","none");
							console.log("out"+filter);
							break;
				case 'in': $(".outbound").parent().parent().css("display","none");
							$(".inbound").parent().parent().css("display","inherit");
							$(".missed").parent().parent().css("display","none");
							console.log("in"+filter);
							break;
				case 'miss': $(".outbound").parent().parent().css("display","none");
							$(".inbound").parent().parent().css("display","none");
							$(".missed").parent().parent().css("display","inherit");
							console.log("miss"+filter);
							break;
				case 'all': $(".outbound").parent().parent().css("display","inherit");
							$(".inbound").parent().parent().css("display","inherit");
							$(".missed").parent().parent().css("display","inherit");
							console.log("miss"+filter);
							break;
			}


		})  
	});

	$("#first_selected_filter").on("change",function(){
		$("#first_filter_search").trigger("click");
	});
  	
  	$("#first_filter_search").trigger("click");
});
