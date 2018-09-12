// Check off Specific Todos by Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});


// Click on X to Deleate Todo
$("ul").on("click","span",function(event)
{
	console.log($("this").parent());
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		//Grabbing new Todo Text From the input
		var todoText = $(this).val();
		$(this).val("");
		//Create a new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});


// Toggling(showing and hiding) Todo list Input.
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});




// Alternative ways but not Optimal.


// Check off Specific Todos by Clicking
// $("li").click(function(){
// 	if($(this).css("color")==="rgb(128, 128, 128)")
// 	{
// 		// Turn this Black
// 		$(this).css({
// 			color:"black",
// 			textDecoration: "none"
// 		});
// 	}
// 	else
// 	{
// 		// Turn this Gray
// 		$(this).css({
// 			color:"gray",
// 			textDecoration: "line-through"
// 		});
// 	}
	
// });

