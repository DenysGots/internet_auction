"use strict"; 

(function () {
	if (
	document.readyState === "complete" ||
	(document.readyState !== "loading" && !document.documentElement.doScroll)
	) {
		main();
	} else {
	document.addEventListener("DOMContentLoaded", main, false);
}
})(); 

function main() { 
	var initialContent = [], 
		usersList = [], 
		currentUser = "logged-out";
	
	var landingPageButton = document.getElementsByClassName("landing-page_button"), 
		landingPageLeftScroll = document.getElementsByClassName("landing-page_left-scroll_button")[0], 
		landingPageRightScroll = document.getElementsByClassName("landing-page_right-scroll_button")[0], 
		mainWrapper = document.getElementsByClassName("main")[0], 
		header = document.getElementsByClassName("header")[0], 
 		headerSignedOut = document.getElementsByClassName("header_navigation_signed-out")[0],  
		headerSignedIn = document.getElementsByClassName("header_navigation_signed-in")[0], 
		contactsButton = document.getElementsByClassName("contacts-button"), 
		signInButton = document.getElementsByClassName("sign-in-button"), 
		registerButton = document.getElementsByClassName("register-button"), 
		headerSearch = document.getElementsByClassName("header_search")[0], 
		headerSearchButton = document.getElementsByClassName("search-button"), 	
		userProfileButton = document.getElementsByClassName("user-profile-button"), 
		userLogOutButton = document.getElementsByClassName("user-log-out-button"), 
		mainPage = document.getElementsByClassName("main-page")[0], 	
		returnToMainPage = document.getElementsByClassName("return-to-main_button"), 
		filtersList = document.getElementsByClassName("filters-list")[0], 
		filtersListButton = document.getElementsByClassName("filters-list_button")[0], 
		lotsPages = document.getElementsByClassName("lot-page"), 		
		signInPage = document.getElementsByClassName("sign-in")[0], 
		signInForm = document.getElementsByClassName("sign-in_form")[0], 
		signInUser = document.getElementsByClassName("sign-in_form_button"), 
		signInGoToRegisterButton = document.getElementsByClassName("sign-in_form_navigation_register"), 
		signInIssue = document.getElementsByClassName("user-sign-in-issue")[0], 
		signInMessageButton = document.getElementsByClassName("sign-in_message-button"), 
		registerPage = document.getElementsByClassName("register")[0], 
		registerForm = document.getElementsByClassName("register_form")[0], 
		registerNewUser = document.getElementsByClassName("register_form_button"), 
		registerGoToSignInButton = document.getElementsByClassName("register_form_navigation_sign-in"), 
		registerIssue = document.getElementsByClassName("user-register-issue")[0], 
		registerMessageButton = document.getElementsByClassName("register_message-button"), 
		userIssues = document.getElementsByClassName("user-issues")[0], 
		userNewLotIssues = document.getElementsByClassName("user-new-lot-issues")[0], 
		pageBlur = document.getElementsByClassName("page_blur")[0], 
		cancelButton = document.getElementsByClassName("cancel-button"), 
		contactsPage = document.getElementsByClassName("contacts")[0], 
		searchResultsPage = document.getElementsByClassName("search-results")[0], 
		returnToSearchPage = document.getElementsByClassName("return-to-search_button"), 
		userProfileCreateLotButton = document.getElementsByClassName("user-profile_create-lot_button"), 
		userCreateNewLotButton = document.getElementsByClassName("button_create-lot"), 
		footer = document.getElementsByClassName("footer")[0]; 

	function handleEvents() {
		var elem = arguments[0], 
			handlers = []; 
		
		for (var i = 1; i < arguments.length; i += 1) {
			handlers.push(arguments[i]); 
		}; 
				
		Array.prototype.slice.call(elem).forEach(function (obj) {
			obj.addEventListener("click", function (e) {		
				for (var j = 0; j < handlers.length; j += 1) {
					handlers[j](); 
					e.preventDefault();  
				}; 
			}, false);
		}); 
	}; 
	
	function checkLocalStorageAvailability() {
		var test = 'test';
		
		try {
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			return true;
		} catch(e) {
			return false;
		}; 
	}; 	
	
	function swapClasses(elem, class1, class2) {
		elem.classList.add(class1); 
		elem.classList.remove(class2); 
	}; 
	
	function hideAll() {
		var interactiveElements = document.getElementsByClassName("interactive");  
		for (var i = 0; i < interactiveElements.length; i += 1) {						
			swapClasses(interactiveElements[i], "display-hidden", "display-visible"); 
		}; 
	}; 
	
	function hideElements() {
		for (var i = 0; i < arguments.length; i += 1) {
			swapClasses(arguments[i], "display-hidden", "display-visible");
		}; 
	}; 
	
	function showElements(){
		for (var i = 0; i < arguments.length; i += 1) {
			swapClasses(arguments[i], "display-visible", "display-hidden"); 
		}; 
	}; 
			
	function showMainPage() {
		hideAll();
		showElements(mainWrapper, mainPage, header, headerSearch, filtersList); 
		changeHeader(); 
		changeBreadcrumbs(); 
	}; 
	
	function showContactsPage() {
		hideAll();
		showElements(contactsPage, mainWrapper, header); 
		changeHeader(); 
		setHeight(contactsPage); 
	}; 
	
	function showSignInMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, userNewLotIssues, pageBlur); 
		showElements(signInPage, pageBlur, signInForm); 
		signInForm.style.zIndex = "110";  
	}; 
	
	function showRegisterMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, userNewLotIssues, pageBlur);
		showElements(registerPage, pageBlur, registerForm); 
		registerForm.style.zIndex = "110";  
	}; 
	
	function signInMessageMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, userNewLotIssues, pageBlur);
		showElements(pageBlur, signInIssue); 
		signInIssue.style.zIndex = "110";  
	}; 
	
	function registerMessageMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, userNewLotIssues, pageBlur);
		showElements(pageBlur, registerIssue); 
		registerIssue.style.zIndex = "110";  
	}; 
	
	function userIssuesMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, userNewLotIssues, pageBlur);
		showElements(pageBlur, userIssues); 
		userIssues.style.zIndex = "110";  
	}; 
	
	function userNewLotIssuesMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, userNewLotIssues, pageBlur);
		showElements(pageBlur, userNewLotIssues); 
		userNewLotIssues.style.zIndex = "110";  
	}; 
	
	function showSearchResultsPage() {
		hideAll();
		showElements(searchResultsPage, mainWrapper, header); 
		changeHeader(); 
		setHeight(searchResultsPage); 	
		changeBreadcrumbs(); 
	}; 
	
	function filtersListAnimation() {
		if (filtersList.classList.contains("filters-list_closed")) {
			swapClasses(filtersList, "filters-list_open", "filters-list_closed"); 
			swapClasses(filtersListButton, "filters-list_button_close", "filters-list_button_open"); 
			filtersList.style.zIndex = "105"; 
		} else if (filtersList.classList.contains("filters-list_open")) {
			swapClasses(filtersList, "filters-list_closed", "filters-list_open"); 
			swapClasses(filtersListButton, "filters-list_button_open", "filters-list_button_close"); 
		};  
	}; 
	
	function changeHeader() {
		if (currentUser !== "logged-out") {
			hideElements(headerSignedOut); 
			showElements(headerSignedIn); 
		} else {
			hideElements(headerSignedIn); 
			showElements(headerSignedOut); 
		}; 
	}; 
	
	function changeBreadcrumbs() {
		Array.prototype.slice.call(lotsPages).forEach(function (obj) {
			obj.getElementsByClassName("breadcrumbs")[0].innerHTML = ""; 
			obj.getElementsByClassName("breadcrumbs")[0].innerHTML = lotExitSearchTemplate; 
		});
		
		handleEvents(returnToMainPage, showMainPage); 
	}; 
	
	function setHeight(elem) {																 
		var headerNavigation = document.getElementsByClassName("header_navigation")[0],  
			documentHeight, 
			minSectionHeight; 
	
		if (window.screen.availHeight) {
			documentHeight = window.screen.availHeight; 
		} else {
			documentHeight = Math.max(
				document.body.scrollHeight, document.documentElement.scrollHeight,  
				document.body.offsetHeight, document.documentElement.offsetHeight,
				document.body.clientHeight, document.documentElement.clientHeight, 
				window.innerHeight, pageBlur.offsetHeight 											
			);
		}; 
		
		minSectionHeight = documentHeight - headerNavigation.offsetHeight - headerNavigation.style.marginBottom - footer.offsetHeight - footer.style.marginTop; 
		
 		elem.style.minHeight = minSectionHeight + "px"; 
		elem.style.height = "auto";   
	}; 
	
	function slideShow() {
		var slides = document.getElementsByClassName("landing-page_slides"), 
			currentSlide = 0, 
			slideInterval = setInterval(nextSlide, 2000);

		function pauseSlideshow() {
			clearInterval(slideInterval);
		}; 
		
		function playSlideshow() {
			slideInterval = setInterval(nextSlide, 2000);
		}

		function nextSlide() {
			goToSlide(currentSlide + 1);
		}; 

		function previousSlide() {
			goToSlide(currentSlide - 1);
		}; 

		function goToSlide(n) {
			slides[currentSlide].classList.remove("landing-page_slide_showing");
			currentSlide = (n + slides.length) % slides.length;
			slides[currentSlide].classList.add("landing-page_slide_showing");
		}; 

		landingPageLeftScroll.addEventListener("click", function() {
			pauseSlideshow();
			previousSlide();
			playSlideshow(); 
		}, false); 
		
		landingPageRightScroll.addEventListener("click", function() {
			pauseSlideshow();
			nextSlide();
			playSlideshow(); 
		}, false); 
		
		handleEvents(landingPageButton, pauseSlideshow);
	}; 
	
	function manageInitialContent() {
		if (checkLocalStorageAvailability() === true) {
			if (localStorage.getItem("content")) {
				initialContent = JSON.parse(localStorage.getItem("content")); 
			} else {
				initialContent = arrayOfInitialContent; 
				localStorage.setItem("content", JSON.stringify(arrayOfInitialContent)); 
			}; 
		} else {
			initialContent = arrayOfInitialContent; 
		}; 
	};  
		
	function manageUsers() {
		if (checkLocalStorageAvailability() === true) {
			if (!localStorage.getItem("users")) {
				localStorage.setItem("users", JSON.stringify(usersList)); 
			} else {
				usersList = JSON.parse(localStorage.getItem("users")); 
			}; 
		}; 
	}; 
		
	function registerUser () {
		var registerFormLogin = document.getElementsByClassName("register_form_login")[0], 
			registerFormEmail = document.getElementsByClassName("register_form_e-mail")[0], 
			registerFormPassword = document.getElementsByClassName("register_form_password")[0], 
			registerMessage = document.getElementsByClassName("register_message")[0], 
			userIssuesMessage = document.getElementsByClassName("user-issues_message")[0], 
			userName = registerFormLogin.value, 
			userEmail = registerFormEmail.value, 
			userPassword = registerFormPassword.value; 
		
		function clearFormFields() {
			registerFormLogin.value = ""; 
			registerFormEmail.value = ""; 
			registerFormPassword.value = "";  
		}; 
		
		function inputDataIssues() {
			clearFormFields();
			return registerMessageMenu(); 
		}; 
		
		if (userPassword.length === 0 && userEmail.length === 0 && userName.length === 0) {
			registerMessage.innerHTML = "You did not complete the entire form <br> Try again!"; 
			return inputDataIssues();  
		}; 
		
		if (userName.length === 0) {
			registerMessage.innerHTML = "You did not enter your username <br> Try again!"; 
			return inputDataIssues();  
		}; 
		
		if (userEmail.length === 0) {
			registerMessage.innerHTML = "You did not enter your email <br> Try again!"; 
			return inputDataIssues();  
		};
		
		if (userPassword.length === 0) {
			registerMessage.innerHTML = "You did not enter your password <br> Try again!"; 
			return inputDataIssues(); 
		};
		
		var validateName = /^[a-zA-Z0-9.'\-_\s]{1,20}$/; 
 		if (!validateName.test(userName)) {
			registerMessage.innerHTML = "Incorrect username <br> Try again!";   
			return inputDataIssues(); 
		};  
		
 		var validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
 		if (!validateEmail.test(userEmail)) {
			registerMessage.innerHTML = "Incorrect Email <br> Try again!";   
			return inputDataIssues();  
		};  
		
		for (var i = 0; i < usersList.length; i += 1) {
			if (userName === usersList[i].userName) {
				registerMessage.innerHTML = "The username you entered is already in use <br> Please enter an alternative username and try again!"; 
				return inputDataIssues();  
			} else if (userEmail === usersList[i].userEmail) {
				registerMessage.innerHTML = "The email you entered is already in use <br> Please enter an alternative email and try again!"; 
				return inputDataIssues();  
			}; 
		}; 
				
		usersList.push({
			userName: userName, 
			userEmail: userEmail, 
			userPassword: userPassword 
		}); 
		
		if (checkLocalStorageAvailability() === true) {
			localStorage.setItem("users", JSON.stringify(usersList)); 
		}; 
		
		clearFormFields(); 
		userIssuesMessage.innerHTML = "Congratulations! You have successfully registered <br> You can now enter the site with your username and password"; 
		return userIssuesMenu(); 		
	}; 

	function signIn() {
		var signInFormLogin = document.getElementsByClassName("sign-in_form_login")[0], 
			signInFormPassword = document.getElementsByClassName("sign-in_form_password")[0], 
			signInMessage = document.getElementsByClassName("sign-in_message")[0], 
			userIssuesMessage = document.getElementsByClassName("user-issues_message")[0], 
			userNameOrEmail = signInFormLogin.value, 
			userWrittenPassword = signInFormPassword.value; 
		
		function clearFormFields() {
			signInFormLogin.value = ""; 
			signInFormPassword.value = ""; 
		}; 
		
		function inputDataIssues() {
			currentUser = "logged-out";
			clearFormFields();
			return signInMessageMenu(); 
		}; 
		
		if (userNameOrEmail.length === 0) {
			signInMessage.innerHTML = "You did not enter your username or email <br> Try again!"; 
			return inputDataIssues(); 
		}; 
		
		if (userWrittenPassword.length === 0) {
			signInMessage.innerHTML = "You did not enter your password <br> Try again!"; 
			return inputDataIssues(); 
		}; 
		
		function userPresenceInUsersList(user) {
			if (user.userName === userNameOrEmail || user.userEmail === userNameOrEmail) {
				return true; 
			} else {
				return false; 
			}; 
		}; 
		
		var userInUsersList = usersList.filter(userPresenceInUsersList); 
		
 		if (userInUsersList.length === 0) {
			signInMessage.innerHTML = "User with such username or email is not registered <br> Try again!"; 
			return inputDataIssues(); 
		}; 
	
		if (userInUsersList[0].userPassword !== userWrittenPassword) {
			signInMessage.innerHTML = "Incorrect password <br> Try again!"; 
			return inputDataIssues(); 
		} else {
			currentUser = userInUsersList[0].userName;
			userIssuesMessage.innerHTML = "Welcome " + currentUser + "!"; 	
			clearFormFields(); 
			createUserProfile(); 
 			createUserProfilePreviews();  
 			createUserNewLotPage();  
			return userIssuesMenu(); 
		};  
	}; 

	function userLogOut() {
		currentUser = "logged-out"; 
		showMainPage(); 
	}; 

	function addStandartUserAttributes(elem) {
		elem.classList.add("display-hidden");
		elem.classList.add("interactive");
		elem.setAttribute("data-user", currentUser);
	}; 

	function showUserProfile() {
		var currentUserProfilePage, 
			usersProfilesPages = document.getElementsByClassName("user-profile");

		Array.prototype.slice.call(usersProfilesPages).forEach(function (obj) {
			if (obj.getAttribute("data-user") === currentUser) {
				currentUserProfilePage = obj; 
			}; 
		});
		
		hideAll(); 
		showElements(currentUserProfilePage, mainWrapper, header); 
		changeHeader(); 
		setHeight(currentUserProfilePage); 
	}; 
	
	function createUserProfile() {
		var fragment = document.createDocumentFragment(), 
			userProfile = document.createElement("section"); 
		
		userProfile.classList.add("user-profile");
		addStandartUserAttributes(userProfile); 
		userProfile.innerHTML = userProfileTemplate; 
		userProfile.getElementsByClassName("user-name-in-heading")[0].innerHTML = "Welcome " + currentUser + "!";
		fragment.appendChild(userProfile);
 		mainWrapper.insertBefore(fragment, footer); 
		handleEvents(returnToMainPage, showMainPage); 
	}; 

	function showUserNewLotPage() {
		var currentUserNewLotPage, 
			usersNewLotPages = document.getElementsByClassName("user_create-lot"); 

		Array.prototype.slice.call(usersNewLotPages).forEach(function (obj) {
			if (obj.getAttribute("data-user") === currentUser) {
				currentUserNewLotPage = obj; 
			}; 
		});
		
		hideAll(); 
		showElements(currentUserNewLotPage, mainWrapper, header); 
		changeHeader(); 
		setHeight(currentUserNewLotPage); 
	}; 
		
	function createUserNewLotPage() {
		var fragment = document.createDocumentFragment(), 
			userNewLotPage = document.createElement("section"), 
			returnToUserProfileButton = document.getElementsByClassName("return-to-user-profile-button"); 
		
		userNewLotPage.classList.add("user_create-lot");
		addStandartUserAttributes(userNewLotPage); 
		userNewLotPage.innerHTML = userCreateNewLotTemplate; 
		fragment.appendChild(userNewLotPage);
		mainWrapper.insertBefore(fragment, footer); 
		
		handleEvents(returnToMainPage, showMainPage); 
		handleEvents(userProfileCreateLotButton, showUserNewLotPage); 
		handleEvents(returnToUserProfileButton, showUserProfile); 
		handleEvents(userCreateNewLotButton, createNewLot); 
	};  
			
	function createNewLot() {
		var filtersListMenu = document.getElementsByClassName("filters-list_filters")[0],
			lotsPreviewWrapper = document.getElementsByClassName("main-page_lots-preview")[0],
			userNewLotIssuesMessage = document.getElementsByClassName("user-new-lot-issues_message")[0],
			userCreateLotType = document.getElementsByClassName("user_create-lot_type")[0],  
			userCreateLotTitle = document.getElementsByClassName("user_create-lot_title")[0],  
			userCreateLotDescription = document.getElementsByClassName("user_create-lot_description")[0],  
			userCreateLotOrigin = document.getElementsByClassName("user_create-lot_country-of-origin")[0],  
			userCreateLotAge = document.getElementsByClassName("user_create-lot_age")[0],  
			userCreateLotMaterial = document.getElementsByClassName("user_create-lot_material")[0],  
			userCreateLotPrice = document.getElementsByClassName("user_create-lot_starting-price")[0],  
			userCreateLotTime = document.getElementsByClassName("user_create-lot_auction-time")[0],  
			userCreateLotOrigin_data = document.getElementsByClassName("user_create-lot_country-of-origin_data")[0],  
			userCreateLotMaterial_data = document.getElementsByClassName("user_create-lot_material_data")[0],  
			userProfileLots = document.getElementsByClassName("user-profile_lots-list")[0], 
			selectedType = userCreateLotType[userCreateLotType.selectedIndex].getAttribute("data-type"), 
			title = userCreateLotTitle.value.toLowerCase(), 
			description = userCreateLotDescription.value.toLowerCase(), 
			origin = userCreateLotOrigin.value.toLowerCase(), 
			selectedAge = userCreateLotAge[userCreateLotAge.selectedIndex].value, 
			material = userCreateLotMaterial.value.toLowerCase(), 
			startingPrice = userCreateLotPrice.value.toLowerCase(), 
			auctionTime = userCreateLotTime.value.toLowerCase(), 
			data_selectedAge = userCreateLotAge[userCreateLotAge.selectedIndex].getAttribute("data-type"), 
			data_origin = userCreateLotOrigin_data.value.toLowerCase(), 
			data_material = userCreateLotMaterial_data.value.toLowerCase(), 
			newLotCharacteristics = [selectedType, title, description, origin, selectedAge, startingPrice, auctionTime, data_selectedAge, data_origin], 
			userCreateLotImage_1 = document.getElementsByClassName("download-image_1")[0].files[0],  
			userCreateLotImage_2 = document.getElementsByClassName("download-image_2")[0].files[0],  
			userCreateLotImage_3 = document.getElementsByClassName("download-image_3")[0].files[0],  
			image_1, 
			image_2, 
			image_3; 
		
		if (window.URL) {
			window.URL = window.URL || window.webkitURL; 
			
			if (userCreateLotImage_1) {
				image_1 = window.URL.createObjectURL(userCreateLotImage_1); 
				
				image_1.onload = function () {
					window.URL.revokeObjectURL(this);
				}; 
			}; 
			
			if (userCreateLotImage_2) {
				image_2 = window.URL.createObjectURL(userCreateLotImage_2); 
				
				image_2.onload = function () {
					window.URL.revokeObjectURL(this);
				}; 
			}; 
			
			if (userCreateLotImage_3) {
				image_3 = window.URL.createObjectURL(userCreateLotImage_3); 
				
				image_3.onload = function () {
					window.URL.revokeObjectURL(this);
				}; 
			}; 
		}; 
		
		function clearFormFields() {
			userCreateLotTitle.value = ""; 
			userCreateLotDescription.value = ""; 
			userCreateLotOrigin.value = ""; 
			userCreateLotMaterial.value = ""; 
			userCreateLotPrice.value = ""; 
			userCreateLotTime.value = ""; 
			userCreateLotOrigin_data.value = ""; 
			userCreateLotMaterial_data.value = ""; 
		}; 
		
		if (!newLotCharacteristics.every(function (obj) {
			return (obj !== "" && obj !== undefined); 
		})) {
			userNewLotIssuesMessage.innerHTML = "You did not fill out the form <br> Try again!"; 
			return userNewLotIssuesMenu();
		}; 
		
 		initialContent.unshift({
			type: selectedType, 
			title: title, 
			description: description,
			сountry_of_origin: origin, 
			year_of_manufacture: selectedAge, 
			material: material, 
			data_сountry_of_origin: data_origin, 
			data_year_of_manufacture: data_selectedAge, 
			data_material: data_material, 
			starting_price: startingPrice,
			image_1_src: image_1,  
			image_2_src: image_2, 
			image_3_src: image_3,  
			timer: auctionTime * 24, 
			user: currentUser
		}); 

		lotsPreviewWrapper.innerHTML = "";  
		filtersListMenu.innerHTML = "";  
		userProfileLots.innerHTML = "";  
		
		Array.prototype.slice.call(lotsPages).forEach(function (obj) {
			obj.parentNode.removeChild(obj);
		});

		if (checkLocalStorageAvailability() === true) {
			localStorage.setItem("content", JSON.stringify(initialContent));
		}; 
		
		createLotsPreviews(); 
		createLotsPages(); 
 		createUserProfilePreviews();  
		timers(); 
		clearFormFields();  
		showMainPage(); 
	}; 

	function createUserProfilePreviews() {
		var userProfileLots = document.getElementsByClassName("user-profile_lots-list")[0], 
			userProfileHistory = document.getElementsByClassName("user-profile_history-list")[0], 
			fragment = document.createDocumentFragment(), 
			userProfilePreview; 
		
		initialContent.forEach(function (elem) {
			if (elem.user === currentUser) {
				userProfilePreview = document.createElement("div");
				
				userProfilePreview.classList.add("user-lot_preview"); 
				userProfilePreview.setAttribute("data-lot", elem.lot_number); 
				userProfilePreview.setAttribute("user", currentUser); 
				userProfilePreview.innerHTML = userLotPreviewTemplate; 
				userProfilePreview.getElementsByClassName("user_lot_lot-image")[0].src = elem.image_1_src; 
				userProfilePreview.getElementsByClassName("user_lot-information_title")[0].innerHTML = elem.title; 
				
				fragment.appendChild(userProfilePreview);  
			};
		}); 
		
		userProfileLots.innerHTML = ""; 
		userProfileLots.appendChild(fragment);   
		
		fragment = document.createDocumentFragment(); 
		
		initialContent.forEach(function (elem) {
			if (elem.lot_auction_participants === currentUser) {
				userProfilePreview = document.createElement("div"); 
				
				userProfilePreview.classList.add("user-lot_preview"); 
				userProfilePreview.setAttribute("data-lot", elem.lot_number); 
				userProfilePreview.setAttribute("user", currentUser); 
				userProfilePreview.innerHTML = userHistoryPreviewTemplate; 
				userProfilePreview.getElementsByClassName("user_lot_lot-image")[0].src = elem.image_1_src; 
				userProfilePreview.getElementsByClassName("user_lot-information_title")[0].innerHTML = elem.title; 
				
				if (elem.lot_winner === currentUser) {
					userProfilePreview.getElementsByClassName("user_lot-information_status")[0].innerHTML = "You've won"; 
					userProfilePreview.getElementsByClassName("user_lot-information_status_wrapper ")[0].setAttribute("style", "border: 1px solid #5a5a5a; background-image: linear-gradient(to bottom, #ff8c19, #ca620b);"); 
				} else {
					userProfilePreview.getElementsByClassName("user_lot-information_status")[0].innerHTML = "You've lost"; 
					userProfilePreview.getElementsByClassName("user_lot-information_status_wrapper ")[0].setAttribute("style", "border: 1px solid #5a5a5a; background-image: linear-gradient(to bottom, #dcdcdc, #787878);"); 
				}; 
				
				fragment.appendChild(userProfilePreview);  
			}; 
		}); 
		
		userProfileHistory.innerHTML = ""; 
		userProfileHistory.appendChild(fragment); 
		manageUserProfilePreviews();
	}; 
	
	function manageUserProfilePreviews() {
		var currentLot, 
			selectedLotPage, 
			userProfileLotsPreviews = document.getElementsByClassName("user-lot_preview"), 
			returnToUserProfileButton = document.getElementsByClassName("return-to-user-profile-button"); 
						
		Array.prototype.slice.call(userProfileLotsPreviews).forEach(function (obj) {
			obj.addEventListener("click", function (e) {
				if (obj.hasAttribute("data-lot")) {
					currentLot = obj.getAttribute("data-lot"); 
				}; 
				
				Array.prototype.slice.call(lotsPages).forEach(function (obj) {
					if (obj.getAttribute("data-lot") === currentLot) {
						obj.getElementsByClassName("breadcrumbs")[0].innerHTML = ""; 
						obj.getElementsByClassName("breadcrumbs")[0].innerHTML = lotFromProfileTemplate;   
						selectedLotPage = obj; 
					}; 
				});
				
				hideAll(); 
				showElements(selectedLotPage, mainWrapper, header); 
				changeHeader(); 
				setHeight(selectedLotPage); 
				
				handleEvents(returnToMainPage, showMainPage); 
				handleEvents(returnToUserProfileButton, showUserProfile);
				
				e.preventDefault();  
			}, false); 
		});
	}; 
	
	function userParticipateInAuction() {
		var returnToUserProfileButton = document.getElementsByClassName("return-to-user-profile-button"), 
			userIssuesMessage = document.getElementsByClassName("user-issues_message")[0], 
			fragment = document.createDocumentFragment(), 
			lotsPreviews = document.getElementsByClassName("main-page_lot"),  
			auctionPage = document.getElementsByClassName("auction")[0], 
			placeBetButton = document.getElementsByClassName("button_place-a-bet"), 
			userBetField = document.getElementsByClassName("user-bet"), 
			currentLot,
			currentLotStartingPrice,
			currentLotTitle,
			userBet; 
		
		function addStandartLotAttributes(elem) {
			elem.classList.add("auction");
			elem.classList.add("display-hidden");
			elem.classList.add("interactive");
		}; 
		
		Array.prototype.slice.call(userBetField).forEach(function (obj) {
			obj.addEventListener("click", function (e) {
				e.stopPropagation(); 
			}); 
		}); 
		
		Array.prototype.slice.call(placeBetButton).forEach(function (obj) {
			obj.addEventListener("click", function (e) {
				e.stopPropagation(); 
				e.preventDefault(); 
				
				if (currentUser === "logged-out") {
					userIssuesMessage.innerHTML = "To participate in the auction you must sign in"; 
					return userIssuesMenu(); 
				}; 
				
				if (e.target.hasAttribute("data-lot")) {
					currentLot = parseInt(e.target.getAttribute("data-lot")); 
				}; 

				var auctionPage = document.createElement("section"); 
				
				addStandartLotAttributes(auctionPage); 
				
				auctionPage.innerHTML = userAuctionTemplate; 
				
				for (var i = 0; i < initialContent.length; i += 1) {
					if (initialContent[i].lot_number === currentLot) {
						currentLotTitle = initialContent[i].title; 
						currentLotStartingPrice = parseFloat(initialContent[i].starting_price.replace(/[^\d.,]/g, '')); 
					}; 
				}; 
				
				userBet = parseFloat(e.target.parentNode.getElementsByClassName("user-bet")[0].value.replace(/[^\d.,]/g, '')); 
					
				if (userBet === "" || userBet === undefined) {
					userIssuesMessage.innerHTML = "You did not enter your bet"; 
					return userIssuesMenu(); 
				}; 
				
				if (userBet < currentLotStartingPrice) {
					userIssuesMessage.innerHTML = "You can not bet less than the starting price"; 
					return userIssuesMenu(); 
				}; 
				
				auctionPage.getElementsByClassName("current-lot-title")[0].innerHTML = currentLotTitle; 
				auctionPage.getElementsByClassName("current-lot-starting-price")[0].innerHTML = "Starting Price: $" + currentLotStartingPrice; 
				
				var participant_1_bet = Math.round(2 * Math.random(currentLotStartingPrice) + currentLotStartingPrice); 
				var participant_2_bet = Math.round(2 * Math.random(currentLotStartingPrice) + currentLotStartingPrice); 
				
				auctionPage.getElementsByClassName("auction_participant_1_bet")[0].innerHTML = "$" + participant_1_bet; 
				auctionPage.getElementsByClassName("auction_participant_2_bet")[0].innerHTML = "$" + participant_2_bet; 
				auctionPage.getElementsByClassName("auction_participant_3_bet")[0].innerHTML = "$" + userBet; 
				auctionPage.getElementsByClassName("auction_participant_3_name")[0].innerHTML = currentUser; 
				
				var auctionParticipants = [
				{
					participant_name: "Participant 1", 
					participant_bet: participant_1_bet
				}, 
				
				{
					participant_name: "Participant 2", 
					participant_bet: participant_2_bet	
				}, 
				{
					participant_name: currentUser, 
					participant_bet: userBet
				} 
				]; 
				
				auctionParticipants.sort(function (a,b) {
					return b.participant_bet - a.participant_bet; 
				}); 

				auctionPage.getElementsByClassName("auction_participant_winner")[0].innerHTML = auctionParticipants[0].participant_name; 
				auctionPage.getElementsByClassName("auction_participant_winner_bet")[0].innerHTML = "$" + auctionParticipants[0].participant_bet; 
								
				fragment.appendChild(auctionPage);  
				mainWrapper.insertBefore(fragment, footer); 
				
 				for (var i = 0; i < initialContent.length; i += 1) {
					if (parseInt(initialContent[i].lot_number) === currentLot) {
						initialContent[i].lot_status = "lot_closed"; 
						initialContent[i].lot_auction_participants = currentUser; 
						initialContent[i].lot_winner = auctionParticipants[0].participant_name;  
						initialContent[i].timer = 0; 
					}; 
				}; 

				createUserProfilePreviews(); 
				manageUserProfilePreviews(); 

				handleEvents(returnToMainPage, showMainPage);  
				handleEvents(returnToUserProfileButton, showUserProfile); 
				
				Array.prototype.slice.call(lotsPreviews).forEach(function (obj) {
					if (parseInt(obj.getAttribute("data-lot")) === currentLot) {
						obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
						obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
						obj.getElementsByClassName("main-page_lot_enter-price")[0].setAttribute("type", "hidden"); 
						obj.getElementsByClassName("lot-timer")[0].innerHTML = ""; 
					}; 
				});
				
				Array.prototype.slice.call(lotsPages).forEach(function (obj) {
					if (parseInt(obj.getAttribute("data-lot")) === currentLot) {
						obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
						obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
						obj.getElementsByClassName("lot-page_enter-price")[0].setAttribute("type", "hidden"); 
						obj.getElementsByClassName("lot-timer")[0].innerHTML = ""; 
					}; 
				}); 
				
				if (checkLocalStorageAvailability() === true) {
					localStorage.setItem("content", JSON.stringify(initialContent));
				}; 
				
				showAuctionPage();  
			}); 
		}); 
	}; 
	
	function showAuctionPage() {
		var userAuctionPage = document.getElementsByClassName("auction")[0]; 
		
		hideAll(); 
		showElements(userAuctionPage, mainWrapper, header); 
		changeHeader(); 
		setHeight(userAuctionPage); 
	}; 

	function createLotsPages() {
		var fragment = document.createDocumentFragment(), 
			lotPage; 
		
		function addStandartLotAttributes(elem) {
			elem.classList.add("lot-page");
			elem.classList.add("display-hidden");
			elem.classList.add("interactive");
			elem.setAttribute("data-lot", i + 1); 
		}; 
		
		for (var i = 0; i < initialContent.length; i += 1) {
			lotPage = document.createElement("section");
			
			addStandartLotAttributes(lotPage); 
			
			if (initialContent[i].user) {
				lotPage.setAttribute("data-user", initialContent[i].user); 
			}; 
						
			lotPage.innerHTML = lotPageTemplate; 
			
			lotPage.getElementsByClassName("lot-page_title")[0].innerHTML = initialContent[i].title; 
			lotPage.getElementsByClassName("lot-page_description")[0].innerHTML = initialContent[i].description; 
			lotPage.getElementsByClassName("lot-page_сountry-of-origin")[0].innerHTML = initialContent[i].сountry_of_origin; 
			lotPage.getElementsByClassName("lot-page_year-of-manufacture")[0].innerHTML = initialContent[i].year_of_manufacture; 
			lotPage.getElementsByClassName("lot-page_starting-price")[0].innerHTML = initialContent[i].starting_price; 
			lotPage.getElementsByClassName("lot-page_starting-price")[0].classList.add("starting-price"); 
			lotPage.getElementsByClassName("button_place-a-bet")[0].setAttribute("data-lot", i + 1); 
			lotPage.getElementsByClassName("lot-page_timer")[0].setAttribute("data-lot", i + 1); 
			lotPage.getElementsByClassName("lot-page_enter-price")[0].classList.add("user-bet"); 
			
			if (initialContent[i].image_1_src) {
				lotPage.getElementsByClassName("image-1")[0].src = initialContent[i].image_1_src; 
				lotPage.getElementsByClassName("lot-page_main-image")[0].src = initialContent[i].image_1_src; 
			} else {
				lotPage.getElementsByClassName("image-1_wrapper")[0].classList.add("display-hidden"); 
				lotPage.getElementsByClassName("lot-page_main-image")[0].classList.add("display-hidden"); 
				lotPage.getElementsByClassName("lot-page_images-window")[0].setAttribute("style", "position: relative; width: 500px; height: 500px;"); 
				lotPage.getElementsByClassName("lot-page_main-image-window")[0].setAttribute("style", "position: relative; width: 400px; height: 400px; background-color: #e87615;"); 
			}; 
			
			if (initialContent[i].image_2_src) {
				lotPage.getElementsByClassName("image-2")[0].src = initialContent[i].image_2_src; 
			} else {
				lotPage.getElementsByClassName("image-2_wrapper")[0].classList.add("display-hidden");
			}; 
			
			if (initialContent[i].image_3_src) {
				lotPage.getElementsByClassName("image-3")[0].src = initialContent[i].image_3_src; 
			} else {
				lotPage.getElementsByClassName("image-3_wrapper")[0].classList.add("display-hidden");
			}; 
			
			if (initialContent[i].material) {
				lotPage.getElementsByClassName("lot-page_material")[0].innerHTML = initialContent[i].material; 
			} else {
				lotPage.getElementsByClassName("lot-page_material_text")[0].classList.add("display-hidden");
			};
			
			if (initialContent[i].timer !== 0) {
				lotPage.getElementsByClassName("lot-page_timer")[0].innerHTML = initialContent[i].timer; 
			} else {
				lotPage.getElementsByClassName("lot-page_timer")[0].innerHTML = "Торги закончены"; 
				lotPage.getElementsByClassName("lot-page_timer")[0].setAttribute("style", "background-image: linear-gradient(to bottom, #dcdcdc, #787878); font-weight: normal; font-size: 1em; color: #000; line-height: 1.2em;");
				lotPage.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 
				lotPage.getElementsByClassName("lot-page_enter-price")[0].setAttribute("type", "hidden"); 
				lotPage.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
			}; 
			
			fragment.appendChild(lotPage); 
			
			initialContent[i].lot_number = i + 1; 
		};
		
		mainWrapper.insertBefore(fragment, footer); 
		
		handleEvents(returnToMainPage, showMainPage); 
		
		if (checkLocalStorageAvailability() === true) {
			localStorage.setItem("content", JSON.stringify(initialContent));
		}; 
		
		handleLotPageImages(); 
		userParticipateInAuction();  
	}; 
	
	function handleLotPageImages() {
		var currentLot, 
			imageSrc, 
			lotPageImages = document.getElementsByClassName("lot-page_image-preview"); 
		
		Array.prototype.slice.call(lotPageImages).forEach(function (obj) {
			obj.addEventListener("click", function (e) {
				imageSrc = e.target.src; 
				
				currentLot = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("data-lot"); 
				
				Array.prototype.slice.call(lotsPages).forEach(function (obj) {
					if (obj.getAttribute("data-lot") === currentLot) {
						obj.getElementsByClassName("lot-page_main-image")[0].src = imageSrc; 
					}; 
				});
				
				e.preventDefault();  
			}, false); 
		}); 
	}; 
		
	function createLotsPreviews() {
		var fragment = document.createDocumentFragment(), 
			lotsPreviewWrapper = document.getElementsByClassName("main-page_lots-preview")[0], 
			lotPreview; 
		
		function addStandartLotAttributes(elem) {
			elem.classList.add("main-page_lot"); 
			elem.setAttribute("data-lot", i + 1); 
			elem.setAttribute("data-type", initialContent[i].type);
			elem.setAttribute("data-сountry-of-origin", initialContent[i].data_сountry_of_origin);
			elem.setAttribute("data-year-of-manufacture", initialContent[i].data_year_of_manufacture);
			elem.setAttribute("data-сountry-of-origin-value", initialContent[i].сountry_of_origin);
			elem.setAttribute("data-year-of-manufacture-value", initialContent[i].year_of_manufacture);
			elem.setAttribute("data-current-selected", "current-selected");
			
			if (initialContent[i].material && initialContent[i].data_material) {
				elem.setAttribute("data-material", initialContent[i].data_material);
				elem.setAttribute("data-material-value", initialContent[i].material);
			}; 
		}; 
		
		for (var i = 0; i < initialContent.length; i += 1) {
			lotPreview = document.createElement("div");
			
			addStandartLotAttributes(lotPreview); 
			
			if (initialContent[i].user) {
				lotPreview.setAttribute("data-user", initialContent[i].user); 
			}; 
						
			lotPreview.innerHTML = lotPreviewTemplate; 
			
			lotPreview.getElementsByClassName("main-page_lot-information_description")[0].innerHTML = initialContent[i].title; 
			lotPreview.getElementsByClassName("main-page_lot_starting-price")[0].innerHTML = initialContent[i].starting_price; 
			lotPreview.getElementsByClassName("main-page_lot_starting-price")[0].classList.add("starting-price"); 
			lotPreview.getElementsByClassName("button_place-a-bet")[0].setAttribute("data-lot", i + 1); 
			lotPreview.getElementsByClassName("main-page_lot_timer")[0].setAttribute("data-lot", i + 1); 
			lotPreview.getElementsByClassName("main-page_lot_enter-price")[0].classList.add("user-bet"); 
			
			if (initialContent[i].image_1_src) {
				lotPreview.getElementsByClassName("main-page_lot-image")[0].src = initialContent[i].image_1_src; 
			} else {
				lotPreview.getElementsByClassName("main-page_lot_image-window")[0].setAttribute("style", "position: relative; width: 200px; height: 200px; background-color: #e87615;"); 
			}; 
			
			if (initialContent[i].timer !== 0) {
				lotPreview.getElementsByClassName("main-page_lot_timer")[0].innerHTML = initialContent[i].timer; 
			} else {
				lotPreview.getElementsByClassName("main-page_lot_timer")[0].innerHTML = "Auction is Over"; 
				lotPreview.getElementsByClassName("main-page_lot_timer")[0].setAttribute("style", "background-image: linear-gradient(to bottom, #dcdcdc, #787878); font-weight: normal; font-size: 1em; color: #000; line-height: 1.2em;");
				lotPreview.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 
				lotPreview.getElementsByClassName("main-page_lot_enter-price")[0].setAttribute("type", "hidden"); 
				lotPreview.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
			}; 
			
			fragment.appendChild(lotPreview);  
		};
		
		lotsPreviewWrapper.appendChild(fragment);  
		
		lotPreviewOnclick(); 
		createAsideFlitersList();   
		manageLotsPreviews();  
		userParticipateInAuction(); 
	}; 
	
	function lotPreviewOnclick() {
		var currentLot, 
			selectedLotPage, 
			lotsPreviews = document.getElementsByClassName("main-page_lot");
						
		Array.prototype.slice.call(lotsPreviews).forEach(function (obj) {
			obj.addEventListener("click", function (e) {
				e.preventDefault();  
				
				if (obj.hasAttribute("data-lot")) {
					currentLot = obj.getAttribute("data-lot"); 
				}; 
				
				Array.prototype.slice.call(lotsPages).forEach(function (obj) {
					if (obj.getAttribute("data-lot") === currentLot) {
						selectedLotPage = obj; 
					}; 
				});
				
				hideAll(); 
				showElements(selectedLotPage, mainWrapper, header); 
				changeHeader(); 
				setHeight(selectedLotPage); 
			}, false); 
		}); 
	}; 
	
	function createAsideFlitersList() {
		var fragment = document.createDocumentFragment(), 
			filtersListMenu = document.getElementsByClassName("filters-list_filters")[0], 
			lotsPreviews = document.getElementsByClassName("main-page_lot"), 
			filtersListWrapper, 
			listFragment, 
			listFragmentWrapper, 
			lotCharacteristicsFilters = [
				{
					characteristic: "Country of Origin",
					data_type_characteristic: "сountry-of-origin", 
					characteristicFilters: []
				}, 
				{
					characteristic: "Age of Origin", 
					data_type_characteristic: "year-of-manufacture", 
					characteristicFilters: []
				}, 
				{
					characteristic: "Material", 
					data_type_characteristic: "material", 
					characteristicFilters: []
				}
			]; 	
		
		Array.prototype.slice.call(lotsPreviews).forEach(function (obj) {
			if (obj.getAttribute("data-current-selected") === "current-selected") { 
				if (obj.hasAttribute("data-сountry-of-origin") && obj.getAttribute("data-сountry-of-origin") !== "undefined") {
					lotCharacteristicsFilters[0].characteristicFilters.push({
						value: obj.getAttribute("data-сountry-of-origin-value"), 
						data_value: obj.getAttribute("data-сountry-of-origin")	
					}); 					
				}; 
				
				if (obj.hasAttribute("data-year-of-manufacture") && obj.getAttribute("data-year-of-manufacture") !== "undefined") {
					lotCharacteristicsFilters[1].characteristicFilters.push({
						value: obj.getAttribute("data-year-of-manufacture-value"), 
						data_value: obj.getAttribute("data-year-of-manufacture")	
					}); 
				}; 
				
				if (obj.hasAttribute("data-material") && obj.getAttribute("data-material") !== "undefined") {
					lotCharacteristicsFilters[2].characteristicFilters.push({
						value: obj.getAttribute("data-material-value").toLowerCase(), 
						data_value: obj.getAttribute("data-material")	
					}); 
				}; 
			}; 
		});
		
		function trimUnique(arr) {
			var seen = {}; 
			
			arr.sort(compare); 
			
			function compare(a,b) {
				return (a.value > b.value); 
			}; 
			
			return arr.filter(function (x) {
				if (seen[x.data_value]) {
					return; 
				}; 
				seen[x.data_value] = true; 
				return x; 
			}); 
		};   
		
		for (var i = 0; i < lotCharacteristicsFilters.length; i += 1) {
 			lotCharacteristicsFilters[i].characteristicFilters = trimUnique(lotCharacteristicsFilters[i].characteristicFilters);  
			
			filtersListWrapper = document.createElement("form");
			filtersListWrapper.innerHTML = asideFiltersTemplate; 
			filtersListWrapper.getElementsByClassName("filters-list_headings")[0].innerHTML = lotCharacteristicsFilters[i].characteristic; 
			
			switch (lotCharacteristicsFilters[i].characteristic) {		
				case "Country of Origin":
					filtersListWrapper.classList.add("filters-list_country");
					break; 
				case "Age of Origin":
					filtersListWrapper.classList.add("filters-list_age");
					break;
				case "Material":
					filtersListWrapper.classList.add("filters-list_material");
					break;
			}; 
			
			for (var j = 0; j < lotCharacteristicsFilters[i].characteristicFilters.length; j += 1) {
				listFragment = document.createDocumentFragment();
				listFragmentWrapper = document.createElement("div");
				
				listFragmentWrapper.innerHTML = filterTemplate; 
				listFragmentWrapper.getElementsByClassName("checkbox_label")[0].innerHTML = lotCharacteristicsFilters[i].characteristicFilters[j].value; 
				listFragmentWrapper.getElementsByClassName("checkbox_label")[0].setAttribute("for", lotCharacteristicsFilters[i].characteristicFilters[j].data_value); 
				
				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].id = lotCharacteristicsFilters[i].characteristicFilters[j].data_value; 
				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].setAttribute("data-type", lotCharacteristicsFilters[i].data_type_characteristic); 
				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].setAttribute("value", lotCharacteristicsFilters[i].characteristicFilters[j].data_value); 
 				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].checked = true;  
				
				listFragment.appendChild(listFragmentWrapper); 
				filtersListWrapper.getElementsByClassName("filters-list_filters-list")[0].appendChild(listFragment); 			
			}; 

			fragment.appendChild(filtersListWrapper); 
		}; 
		
		filtersListMenu.appendChild(fragment); 
	};  
	
	function manageLotsPreviews() {
		var mainPageMainFilters = document.getElementsByClassName("main-page_lots-groups_button"), 
			filtersListMenu = document.getElementsByClassName("filters-list_filters")[0], 
			lotsPreviews = document.getElementsByClassName("main-page_lot");
		
		function displayLotsPreviews(elem) {
			if (elem.getAttribute("data-current-selected") === "current-selected") {
				showElements(elem); 
			} else {
				hideElements(elem); 
			}; 
		}; 
		
		Array.prototype.slice.call(mainPageMainFilters).forEach(function (mainFilter) {
			mainFilter.addEventListener("click", function (e) {
				Array.prototype.slice.call(mainPageMainFilters).forEach(function (obj) {
					obj.classList.remove("lots-groups_current-selected"); 
				}); 
				
				e.target.classList.add("lots-groups_current-selected"); 
				
				filtersListMenu.innerHTML = ""; 
				
				Array.prototype.slice.call(lotsPreviews).forEach(function (obj) {
					obj.setAttribute("data-current-selected", ""); 
					
					switch (e.target.getAttribute("data-type")) {
						case "all": 
							obj.setAttribute("data-current-selected", "current-selected"); 
							break; 
						case "coins": 
							if (obj.getAttribute("data-type") === "coin") {
								obj.setAttribute("data-current-selected", "current-selected"); 
							}; 
							break; 
						case "books": 
							if (obj.getAttribute("data-type") === "book") {
								obj.setAttribute("data-current-selected", "current-selected");
							}; 
							break; 
						case "antique": 
							if (obj.getAttribute("data-type") === "antique") {
								obj.setAttribute("data-current-selected", "current-selected");
							}; 
							break; 
						case "paintings": 
							if (obj.getAttribute("data-type") === "painting") {
								obj.setAttribute("data-current-selected", "current-selected"); 
							}; 
							break; 
						case "postage-stamps": 
							if (obj.getAttribute("data-type") === "postage-stamp") {
								obj.setAttribute("data-current-selected", "current-selected"); 
							};  
							break; 
					}; 
					
					displayLotsPreviews(obj); 
				}); 	
				
				createAsideFlitersList(); 
				manageAsideFlitersList(); 
				manageLotsPreviewsPages();    
				e.preventDefault();  
			}, false); 
		}); 
				
		function manageAsideFlitersList() {
			var filtersListCheckboxes = document.getElementsByClassName("filters-list_checkbox"), 
				lotsPreviews = document.getElementsByClassName("main-page_lot"); 
			
			Array.prototype.slice.call(filtersListCheckboxes).forEach(function (currentCheckbox) {
				currentCheckbox.addEventListener("change", function (e) {
					
					Array.prototype.slice.call(lotsPreviews).forEach(function (obj) {
						if (obj.getAttribute("data-current-selected") === "current-selected") {
							
							switch(e.target.getAttribute("data-type")) {
								case "сountry-of-origin": 
									if (
										obj.getAttribute("data-сountry-of-origin") === e.target.getAttribute("id") 
										&& 
										!e.target.checked
									) {
										hideElements(obj); 
									} else if (
										obj.getAttribute("data-сountry-of-origin") === e.target.getAttribute("id") 
										&& 
										e.target.checked
									) {
										showElements(obj); 
									}; 
									break; 
								case "year-of-manufacture": 
									if (
										obj.getAttribute("data-year-of-manufacture") === e.target.getAttribute("id")
										&& 
										!e.target.checked
									) {
										hideElements(obj);
									} else if (
										obj.getAttribute("data-year-of-manufacture") === e.target.getAttribute("id") 
										&& 
										e.target.checked
									) {
										showElements(obj); 
									};  
									break; 
								case "material": 
									if (
										obj.getAttribute("data-material") === e.target.getAttribute("id") 
										&& 
										!e.target.checked
									) {
										hideElements(obj); 
									} else if (
										obj.getAttribute("data-material") === e.target.getAttribute("id") 
										&& 
										e.target.checked
									) {
										showElements(obj);
									};  
									break; 
							}; 
						};  
					}); 

 					manageLotsPreviewsPages();    
					e.preventDefault();
				}, false); 
			}); 
		}; 
		
		manageAsideFlitersList(); 
			
		function manageLotsPreviewsPages() {
			var visibleLotsPreviews = [], 
				currentContentPreviewPage = "1", 
				mainPageLotsPreviews = document.getElementsByClassName("main-page_lots")[0], 
				lotsPreviewsPagesBlock = document.getElementsByClassName("content-preview-pages")[0], 
				lotsPreviewsPages = document.getElementsByClassName("content-preview-page"), 
				lotsPreviews = document.getElementsByClassName("main-page_lot"), 
				contentPreviewPages, 
				contentPreviewPage, 
				fragment; 
						
			function collectVisibleLotsPreviews() {
				visibleLotsPreviews = []; 
					
				Array.prototype.slice.call(lotsPreviews).forEach(function (obj) { 
					obj.setAttribute("data-current-preview-page", ""); 
						
					if (obj.getAttribute("data-current-selected") === "current-selected" &&  !obj.classList.contains("display-hidden")) {
						obj.setAttribute("data-current-preview-page", Math.ceil((i + 1) / 6)); 
						visibleLotsPreviews.push(obj); 
					}; 
				});  
				
				for (var i = 0; i < visibleLotsPreviews.length; i += 1) {
					visibleLotsPreviews[i].setAttribute("data-current-preview-page", Math.ceil((i + 1) / 6)); 
				}; 
			}; 
			
			collectVisibleLotsPreviews(); 

 			function showCurrentContentPage() {                                                                   
				visibleLotsPreviews.forEach(function (obj) {	
					if (obj.getAttribute("data-current-preview-page") !== currentContentPreviewPage) {
						obj.classList.add("preview_display-hidden"); 
					} else if (obj.getAttribute("data-current-preview-page") === currentContentPreviewPage) {
						obj.classList.remove("preview_display-hidden"); 
					}; 
				}); 
			}; 
			
 			showCurrentContentPage();                                                                                
						
			contentPreviewPages = Math.ceil(visibleLotsPreviews.length / 6); 
			fragment = document.createDocumentFragment();
			
			for (var i = 1; i <= contentPreviewPages; i += 1) {
				contentPreviewPage = document.createElement("button");
				
				contentPreviewPage.classList.add("content-preview-page"); 
				contentPreviewPage.setAttribute("type", "button"); 
				contentPreviewPage.setAttribute("data-current-preview-page", i); 
				contentPreviewPage.innerHTML = i; 
				
				fragment.appendChild(contentPreviewPage); 
			}; 
			
			lotsPreviewsPagesBlock.innerHTML = "";
			lotsPreviewsPagesBlock.appendChild(fragment); 
			
			if (mainPageLotsPreviews.lastElementChild.classList.contains("content-preview-pages")) {
				mainPageLotsPreviews.removeChild(mainPageLotsPreviews.lastElementChild);
			}; 
			
			mainPageLotsPreviews.appendChild(lotsPreviewsPagesBlock.cloneNode(true)); 
			
			Array.prototype.slice.call(lotsPreviewsPages).forEach(function (currentPage) {
				currentPage.addEventListener("click", function (e) {
					currentContentPreviewPage = e.target.getAttribute("data-current-preview-page");
					
 					showCurrentContentPage();                                                                    
					
					e.preventDefault(); 
				}, false); 
			}); 
		}; 
		
		manageLotsPreviewsPages();   
	}; 

	function showSearchResults() {
		var initialContentInformation = [],
			findedLots = [], 
			fragment = document.createDocumentFragment(), 
			headerSearchText = document.getElementsByClassName("header_search_text-field")[0], 
			searchQuery = headerSearchText.value,
			headerSearchOptions = document.getElementsByClassName("header_search_options")[0],
			searchSelectedOption = headerSearchOptions[headerSearchOptions.selectedIndex].getAttribute("data-type"), 
			userIssuesMessage = document.getElementsByClassName("user-issues_message")[0],
			searchResultsContainer = document.getElementsByClassName("search-results_container")[0],
			subjectOfSearch = document.getElementsByClassName("subject-of-search")[0];
				
 		if (searchQuery === "") {
			userIssuesMessage.innerHTML = "You did not enter a search query <br> Try again!"; 
			clearFormFields(); 
			return userIssuesMenu();
		};  
		
		subjectOfSearch.innerHTML = "You searched for: " + searchQuery; 
		
		searchQuery = searchQuery.trim() + searchQuery.toString().toLocaleLowerCase().replace(/[^\w\u0400-\u04FF]/g, ' ').trim().split(' ');  
		searchQuery = searchQuery.filter(clearArray); 
		
		function clearArray(elem) {
			return /\S/.test(elem);
		}; 
		
		function clearFormFields() {
			headerSearchText.value = ""; 
		}; 
		
		for (var i = 0; i < initialContent.length; i += 1) {
			for (var prop in initialContent[i]) {
				initialContentInformation = initialContent[i][prop].trim() + initialContent[i][prop].toString().toLocaleLowerCase().replace(/[^\w\u0400-\u04FF]+/ig, ' ').trim().split(' '); 
				initialContentInformation = initialContentInformation.filter(clearArray); 
				
				initialContentInformation.forEach(function (x) {
					for (var j = 0; j < searchQuery.length; j += 1) {
						if (searchSelectedOption === "all" && x === searchQuery[j]) {
							findedLots.push(initialContent[i].lot_number); 
						} else if (initialContent[i].type === searchSelectedOption && x === searchQuery[j]) {
							findedLots.push(initialContent[i].lot_number); 
						};  
					}; 
				});
			};
		};
		
		if (findedLots.length === 0) {
			userIssuesMessage.innerHTML = "Nothing was found on your search request <br> Try again!"; 
			clearFormFields(); 
			return userIssuesMenu();
		}; 
		
		function trimUnique(arr) {
			var seen = {}; 
			
			arr.sort(compare); 
			
			function compare(a,b) {
				return (a - b); 
			}; 
			
			return arr.filter(function (x) {
				if (seen[x]) {
					return; 
				}; 
				
				seen[x] = true; 
				
				return x; 
			}); 
		};  
		
		findedLots = trimUnique(findedLots); 
		
 		for (var i = 0; i < findedLots.length; i += 1) {
			for (var j = 0; j < initialContent.length; j += 1) {
				if (initialContent[j].lot_number === findedLots[i]) {
					var lotSearchPreview = document.createElement("div"); 
					
					lotSearchPreview.classList.add("search-result"); 
					lotSearchPreview.setAttribute("data-lot", initialContent[j].lot_number); 
					lotSearchPreview.innerHTML = searchResultTemplate; 
					lotSearchPreview.getElementsByClassName("search-result_lot-image")[0].src = initialContent[j].image_1_src; 
					lotSearchPreview.getElementsByClassName("search-result_lot-information_description")[0].innerHTML = initialContent[j].title; 
					lotSearchPreview.getElementsByClassName("search-result_lot_starting-price")[0].innerHTML = initialContent[j].starting_price; 
					lotSearchPreview.getElementsByClassName("search-result_lot_timer")[0].setAttribute("data-lot", initialContent[j].lot_number); 
					
					fragment.appendChild(lotSearchPreview);  
				}; 
			};
		}; 
		
		searchResultsContainer.innerHTML = ""; 
		searchResultsContainer.appendChild(fragment);   
		
		clearFormFields(); 
		manageSearchPreviews(); 
		showSearchResultsPage(); 
		
		handleEvents(returnToMainPage, showMainPage); 
	}; 
	
	function manageSearchPreviews() {
		var currentLot, 
			selectedLotPage, 
			searchPreviews = document.getElementsByClassName("search-result"); 
						
		Array.prototype.slice.call(searchPreviews).forEach(function (obj) {
			obj.addEventListener("click", function (e) {
				if (obj.hasAttribute("data-lot")) {
					currentLot = obj.getAttribute("data-lot"); 
				}; 
				
				Array.prototype.slice.call(lotsPages).forEach(function (obj) {
					if (obj.getAttribute("data-lot") === currentLot) {
						obj.getElementsByClassName("breadcrumbs")[0].innerHTML = ""; 
						obj.getElementsByClassName("breadcrumbs")[0].innerHTML = lotAfterSearchTemplate;   
						selectedLotPage = obj; 
					}; 
				});
				
				hideAll(); 
				showElements(selectedLotPage, mainWrapper, header); 
				changeHeader(); 
				setHeight(selectedLotPage); 
				
				handleEvents(returnToMainPage, showMainPage); 
				handleEvents(returnToSearchPage, showSearchResultsPage);  
				
				e.preventDefault();  
			}, false); 
		});
	};  

	function timers() {
		var lotTimers = document.getElementsByClassName("lot-timer"), 
			lotsPreviews = document.getElementsByClassName("main-page_lot"), 
			currentDate; 
		
		Date.prototype.addDays = function (days) {
			var auctionDate = new Date(this.valueOf());
			auctionDate.setDate(auctionDate.getDate() + days);
			return auctionDate;
		}; 

		currentDate = new Date();
		
		Array.prototype.slice.call(lotTimers).forEach(function (obj) {
			var currentLot = parseInt(obj.getAttribute("data-lot")), 
				timeLeft; 
			
			for (var i = 0; i < initialContent.length; i += 1) {
				if (parseInt(initialContent[i].lot_number) === currentLot) {
					timeLeft = parseInt(initialContent[i].timer / 24); 
					
					var countDownDate = currentDate.addDays(timeLeft), 
						distance, 
						days, 
						hours, 
						minutes, 
						seconds;
					
					var setLotTimer = setInterval(function () {
						var now = new Date().getTime();

						distance = countDownDate - now;

						days = Math.floor(distance / (1000 * 60 * 60 * 24));
						hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						seconds = Math.floor((distance % (1000 * 60)) / 1000);
						
						days = (days < 9) ? ("0" + days) : days; 
						hours = (hours < 9) ? ("0" + hours) : hours; 
						minutes = (minutes < 9) ? ("0" + minutes) : minutes; 
						seconds = (seconds < 9) ? ("0" + seconds) : seconds; 
						
						obj.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

						if (distance < 0) {
							clearInterval(setLotTimer);
							clearInterval(saveLotTimer);
							obj.innerHTML = "Auction is Over";
							obj.setAttribute("style", "background-image: linear-gradient(to bottom, #dcdcdc, #787878); font-weight: normal; font-size: 1em; color: #000; line-height: 2.5em;");
						
							Array.prototype.slice.call(lotsPreviews).forEach(function (obj) {
								if (parseInt(obj.getAttribute("data-lot")) === currentLot) {
									obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
									obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
									obj.getElementsByClassName("main-page_lot_enter-price")[0].setAttribute("type", "hidden"); 
								}; 
							});
							
							Array.prototype.slice.call(lotsPages).forEach(function (obj) {
								if (parseInt(obj.getAttribute("data-lot")) === currentLot) {
									obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
									obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
									obj.getElementsByClassName("lot-page_enter-price")[0].setAttribute("type", "hidden"); 
								}; 
							});
						}; 
					}, 1000);
					
					var saveLotTimer = setInterval(function () {
						for (var i = 0; i < initialContent.length; i += 1) {
							if (parseInt(initialContent[i].lot_number) === currentLot) {
								initialContent[i].timer = parseInt(days * 24); 
								
								if (checkLocalStorageAvailability() === true) {
									localStorage.setItem("content", JSON.stringify(initialContent));
								}; 
							}; 
						}; 
						
						if (distance < 0) {
							clearInterval(saveLotTimer);
						}; 
					}, 10000); 
				}; 
			}; 
		}); 
	}; 
	
	slideShow(); 
	manageInitialContent(); 
	manageUsers(); 
	createLotsPreviews(); 
	createLotsPages(); 
	timers(); 
	
	handleEvents(landingPageButton, showMainPage);
	handleEvents(returnToMainPage, showMainPage); 
	handleEvents(contactsButton, showContactsPage); 
	handleEvents(signInButton, showSignInMenu); 
	handleEvents(registerButton, showRegisterMenu); 
	handleEvents(cancelButton, showMainPage); 
	handleEvents(signInGoToRegisterButton, showRegisterMenu); 
	handleEvents(registerGoToSignInButton, showSignInMenu); 
	handleEvents(registerMessageButton, showRegisterMenu); 
	handleEvents(signInMessageButton, showSignInMenu); 
	handleEvents(returnToSearchPage, showSearchResultsPage); 
	handleEvents(registerNewUser, registerUser);
	handleEvents(signInUser, signIn);
	handleEvents(userLogOutButton, userLogOut); 
	handleEvents(userProfileButton, showUserProfile); 
	handleEvents(userProfileCreateLotButton, showUserNewLotPage); 
	handleEvents(headerSearchButton, showSearchResults);  
	
 	filtersListButton.addEventListener("click", function () {
		filtersListAnimation();
	}, false); 
}; 