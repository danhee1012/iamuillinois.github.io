/*
script.js
IAM Main Website Ver 2
Tech Team Director: Christopher Choi
UI/UX Designer: Sarah Minkyoung Cho
Web Dvgtggtgteveloper: Lijin Guo
*/
$(document).ready(function () {
	//nav bar appears when clicked on nav_trigger button
	$(document).on("click", ".nav_trigger", function () {
		$(".nav").addClass("is-visible");
		console.log('hey');
	});

	// nav bar disappears when redirected to other routes
	$(document).on("click", ".nav_button", function () {
		$(".nav").removeClass("is-visible");
	});

	$(document).on("click", ":not(.nav_trigger)", function(e) {
	});

	$("document :not(#calculator, #calculator *)").on("click", function(e){ 
		$(".nav").removeClass("is-visible");
	});
	
	// currently selected about on "about route"
	var about_curr_name = "aboutiam";

	// change the content on the right of "about route" when clicked on team name on the left
	$(document).on("click", "#about_button a", function () {
		$("#about_" + about_curr_name).css("visibility", "hidden");
		$("#about_" + about_curr_name).css("display", "none");
		var name = $(this).attr('id').split("_")[2];
		about_curr_name = name;
		$("#about_" + name).css("visibility", "visible");
		$("#about_" + name).css("display", "block");
	});

	// currently selected team on "team route"	
	var team_curr_name = "ae"

	// change the content on the right of "team route" when clicked on team name on the left
	$("#team_button a").click(function () {
		$("#team_" + team_curr_name).hide();
		var name = $(this).attr('id').split("_")[2];
		team_curr_name = name;
		$("#team_" + name).show();
	});

	// currently selected career on "career route"
	var career_curr_name = "ae"
	
	// change the content on the right of "career route" when clicked on team name on the left
	$(document).on("click", "#career_button a", function () {
		$("#career_" + career_curr_name).css("display", "none");
		var name = $(this).attr('id').split("_")[2];
		career_curr_name = name;
		$("#career_" + name).css("display", "block");
	});

	var ae_curr_position = "ae_ae";
	// show the description of selected position and hide others
	$(".position_list > li").click( function () {
		var name = $(this).attr('id');
		if (ae_curr_position !== name) {
			console.log(name);
			$child1 = $('#' + ae_curr_position).children(".position_content");
			$('#' + ae_curr_position +" .position_arrow").css("transform"," rotate(-90deg)");
			ae_curr_position = name;
			$child2 = $('#' + ae_curr_position).children(".position_content")
			$('#' + ae_curr_position +" .position_arrow").css("transform"," rotate(90deg)");
			$child1.hide();
			$child2.show();
		}
	});
});