// showLogo();
init();
// showLogo();
// hideLogo();


function init() {
	// logo();
	mapNavToPage();
	homeBtn();
	slideShow();
	expandPic();
	closeExpandedPic();
	showHeader();
	
}

// function logo() {
// 	$(".logo").css("display", "block");
// 	$(".container").css("display", "none");
// 	$(".ameling").css("display", "none");
// 	setInterval(function(){
// 		$(".logo").fadeOut(4000);
// 		$(".container").fadeIn(4000);
// 	});
// 	return;
// }

// function showLogo(){
// 		$("#logo").css("display", "block");
// 		$(".container").css("display", "none");
// 		$(".ameling").css("display", "none");
// }

// function hideLogo(){
// 	window.clearTimeout(openingPg, 3000);
// } 


function mapNavToPage(){
	var items = document.querySelectorAll(".navbar-brand");
	var content = document.querySelectorAll(".ameling");
	var firstPage = document.getElementsByClassName("firstPage");
	for (i=0; i<items.length;i++){
		items[i].addEventListener("click", function(){
			var clickedItem = this.text;
			var clickedItemLower = clickedItem.toLowerCase()
			var firstPage = document.querySelector(".firstPage")
			for (i=0; i<content.length;i++) {
				if (content[i].id === clickedItemLower){
					content[i].style.display = "block";
					firstPage.style.display = "none";

				} else {
					content[i].style.display = "none";
					// firstPage.style.display = "block";
				}
			}
		})
	}
}

// function showHeader(){
// 	$(".navbar-brand").on("click", function(){
// 		if(this === $(".galleryNav")){
// 			$("header").slideDown(1000);
// 			// $("header").show();
// 		} else {
// 			$("header").slideUp(1000);
// 		}
// 	})
function showHeader(){
 $(".gal").on("click", function(){
 	$("header").slideDown(1000);
 })
}
	

function homeBtn(){
	var navBtns = document.querySelectorAll(".navbar-brand");
	var homeBtn = document.querySelector(".firstNav");
		$(navBtns).on("click", function(){
			if(this !== homeBtn){
				// $("header").slideUp(1000);
				$(".firstPage").css("display", "none");
				// $(".headshot").hide();
			} else {
				// $("header").slideDown(1000);
				$(".firstPage").css("display", "block");

			};
		});
}

// function homeBtn(){
// 	var fullNav = document.querySelectorAll(".navbar-brand");
// 	var homeBtn = document.querySelector(".firstNav");
// 	fullNav.addEventListener("click", function(){
// 		if(this === homeBtn) {
// 			$(".firstPage").css("display", "block");
// 		} else {
// 			$(".firstPage").css("display", "none");
// 		}
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
	var pictures = document.querySelectorAll(".foo");
	for (i = 0; i < pictures.length; i++) {
		pictures[i].addEventListener("click", function(){
			this.classList.add("expanded");
			otherPics = []
			for (j = 0; j < pictures.length; j++) {
				console.log("j: "+j)
				if (j !== i) {
					otherPics.push(pictures[j])
				};
				otherPics.push(pictures[5]) // WHAT THE FUCK?!!!?!?
			};
			$(otherPics).hide();
			$(".expanded").fadeIn(250);
			$(".close").css("display", "block");
		});
	};	
};

function closeExpandedPic(){	
	// When the user clicks on <span> (x), close the modal
	// and show the image gallery again
	$(".close").on("click", function(){
		$(".foo").removeClass("expanded");
  		$(".foo").show();
  		// $(".foo").css("border:hover", "3px solid #911b4a");
  		$(".close").css("display", "none");
  	})
}

$('.fa-caret-down').click(function() {
      $("header").slideUp();
      $("header").show();	
});


// amelingWebsite.listen(3000)

// $("html, body").animate({
//     scrollTop: $(document).height()
// }, 1000);



