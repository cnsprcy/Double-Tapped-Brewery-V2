// JavaScript Document

// Get hamburger menu
document.querySelector('.hamburger-icon').addEventListener('click', function() {
// Get menu open/close icons and menu list
var openIcon = document.getElementById("hamburger-open-icon");
var closeIcon = document.getElementById("hamburger-close-icon");
var menuList = document.querySelector(".hamburger-list");

	if (openIcon.style.display === "block") {
		openIcon.style.display = "none";
		closeIcon.style.display = "block";
		menuList.style.display = "block";
	} else {
		openIcon.style.display = "block";
		closeIcon.style.display = "none";
		menuList.style.display = "none";
	}
});