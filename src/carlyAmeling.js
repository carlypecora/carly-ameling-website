init();

function init() {
	mapNavToPage();
	homeBtn();
	slideShow();
	expandPic();
	closeExpandedPic();
	showHeader();
}

function mapNavToPage(){
	$(".navbar-brand").on("click", function(){
		var clickedItem = this.text.toLowerCase()
		var pages = document.querySelectorAll(".ameling")
		for(var i = 0; i < pages.length; i++){
			if (clickedItem === pages[i].id) {
				$(pages[i]).css("display", "block")
				$(".firstPage").css("display", "none")
			} else {
				$(pages[i]).css("display", "none")
			};
		};
	})
}

function showHeader(){
 $(".gal").on("click", function(){
 	$("header").slideDown(1000);
 })
}
	

function homeBtn(){
	var homeBtn = document.querySelector(".firstNav");
		$(".navbar-brand").on("click", function(){
			if(this !== homeBtn){
				$(".firstPage").css("display", "none");
			} else {
				$(".firstPage").css("display", "block");
		};
	});
}

// function homeBtn(){
// 	$(".navbar-brand").on("click", function(){
// 		return (this == $(".firstNav") ? $(".firstPage").css)
// 	})
// }

function slideShow(){
	var headshots = document.getElementsByClassName('headshot');
	var i = 0;
	for(var j = 0; j < headshots.length; j++){
		$(headshots[j+1]).hide();
	}
	setInterval(function(){
		$(headshots[i % 4]).fadeOut(2000);
		$(headshots[(i+1) % 4]).fadeIn(2000);
		i++;
	}, 4000);
}

function expandPic(){
	$(".pic").on("click", function(){
		$(this).addClass("expanded");
		$(this).removeClass("foo")
		$(".expanded").fadeIn(250);
		$(".foo").hide()
		$(".close").css("display", "block");
	});
};

function closeExpandedPic(){	
	$(".close").on("click", function(){
		$(".expanded").addClass("foo")
		$(".pic").removeClass("expanded");
  		$(".foo").show();
  		$(".close").css("display", "none");
  	})
}