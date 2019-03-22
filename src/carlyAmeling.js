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
				}
			}
		})
	}
}

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
				$(".firstPage").css("display", "none");
			} else {
				$(".firstPage").css("display", "block");
		};
	});
}

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
				otherPics.push(pictures[6]) // WHAT THE FUCK?!!!?!?
			};
			$(otherPics).hide();
			$(".expanded").fadeIn(250);
			$(".close").css("display", "block");
		});
	};	
};

function closeExpandedPic(){	
	$(".close").on("click", function(){
		$(".foo").removeClass("expanded");
  		$(".foo").show();
  		$(".close").css("display", "none");
  	})
}

$('.fa-caret-down').click(function() {
      $("header").slideUp();
      $("header").show();	
});