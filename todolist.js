// Check off specific todos by clicking
// $(document).ready(function(){
// 	$("li").click(function(){
// 		$(this).css({
// 		color: "gray",
// 		text-decoration: "line-through"
// 	});
// });

// $(document).ready(function(){
// 	$("li").click(function(){
// 		//if li is gray
// 		if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css("color", "black");
// 		}
// 		//else
// 			//turn it gray
// 		else{
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"	
// 		});
// 	}
// 	});
// });
$(document).ready(function(){
$("li").click(function(){
	$(this).toggleClass("completed");
});
});

//click on x to delete todo
$(document).ready(function(){
$("span").click(function(event){
	$(this).parent().remove();
	event.stopPropagation();

});
});
