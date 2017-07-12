(function(){
	if (
	document.readyState === "complete" ||
	(document.readyState !== "loading" && !document.documentElement.doScroll)
	) {
		main();
	} else {
	document.addEventListener("DOMContentLoaded", main, false);
}
})(); 


function main(){ 

	var landingPage = document.getElementsByClassName("landing-page")[0]; 
	var landingPageButton = document.getElementsByClassName("landing-page_button"); 
	var landingPageLeftScroll = document.getElementsByClassName("landing-page_left-scroll_button")[0]; 
	var landingPageRightScroll = document.getElementsByClassName("landing-page_right-scroll_button")[0]; 

	var mainWrapper = document.getElementsByClassName("main")[0]; 
	
	var header = document.getElementsByClassName("header")[0]; 
	var headerSignedOut = document.getElementsByClassName("header_navigation_signed-out")[0]; 
	var headerSignedIn = document.getElementsByClassName("header_navigation_signed-in")[0]; 
	var headerSearch = document.getElementsByClassName("header_search")[0]; 
	var contactsButton = document.getElementsByClassName("contacts-button"); 
	var signInButton = document.getElementsByClassName("sign-in-button"); 
	var registerButton = document.getElementsByClassName("register-button"); 
	
	var userProfileButton = document.getElementsByClassName("user-profile-button"); 
	var userLogOutButton = document.getElementsByClassName("user-log-out-button"); 
	
	var mainPage = document.getElementsByClassName("main-page")[0]; 
	var mainPageMainFilters = document.getElementsByClassName("main-page_lots-groups_button"); 
	var filtersList = document.getElementsByClassName("filters-list")[0]; 
	var filtersListMenu = document.getElementsByClassName("filters-list_filters")[0]; 
	var filtersListCheckboxes = document.getElementsByClassName("filters-list_checkbox"); 
	var filtersListButton = document.getElementsByClassName("filters-list_button")[0]; 
	var lotsPreviewWrapper = document.getElementsByClassName("main-page_lots-preview")[0]; 
	var lotsPreviews = document.getElementsByClassName("main-page_lot"); 
	var lotsPreviewsPages = document.getElementsByClassName("content-preview-page"); 
	var returnToMainPage = document.getElementsByClassName("return-to-main_button"); 
			
	var signInPage = document.getElementsByClassName("sign-in")[0]; 
	var signInForm = document.getElementsByClassName("sign-in_form")[0]; 
	var signInFormLogin = document.getElementsByClassName("sign-in_form_login")[0]; 
	var signInFormPassword = document.getElementsByClassName("sign-in_form_password")[0]; 
	var signInUser = document.getElementsByClassName("sign-in_form_button"); 
	var signInGoToRegisterButton = document.getElementsByClassName("sign-in_form_navigation_register"); 
	var signInIssue = document.getElementsByClassName("user-sign-in-issue")[0]; 
	var signInMessage = document.getElementsByClassName("sign-in_message")[0]; 
	var signInMessageButton = document.getElementsByClassName("sign-in_message-button"); 
		
	var registerPage = document.getElementsByClassName("register")[0]; 
	var registerForm = document.getElementsByClassName("register_form")[0]; 
	var registerFormLogin = document.getElementsByClassName("register_form_login")[0]; 
	var registerFormEmail = document.getElementsByClassName("register_form_e-mail")[0]; 
	var registerFormPassword = document.getElementsByClassName("register_form_password")[0]; 
	var registerNewUser = document.getElementsByClassName("register_form_button"); 
	var registerGoToSignInButton = document.getElementsByClassName("register_form_navigation_sign-in"); 
	var registerIssue = document.getElementsByClassName("user-register-issue")[0]; 
	var registerMessage = document.getElementsByClassName("register_message")[0]; 
	var registerMessageButton = document.getElementsByClassName("register_message-button"); 
	
	var userIssues = document.getElementsByClassName("user-issues")[0]; 
	var userIssuesMessage = document.getElementsByClassName("user-issues_message")[0]; 
	var pageBlur = document.getElementsByClassName("page_blur")[0]; 
	var cancelButton = document.getElementsByClassName("cancel-button"); 
	
	var contactsPage = document.getElementsByClassName("contacts")[0]; 
		
	var searchResultsPage = document.getElementsByClassName("search-results")[0]; 
	
	var lotsPages = document.getElementsByClassName("lot-page"); 
	
	var usersProfilesPages = document.getElementsByClassName("user-profile"); 
	var userProfileCreateLotButton = document.getElementsByClassName("user-profile_create-lot_button"); 
	
	var usersNewLotPages = document.getElementsByClassName("user_create-lot"); 
	var returnToUserProfileButton = document.getElementsByClassName("return-to-user-profile-button"); 
	
	var auctionPage = document.getElementsByClassName("auction")[0]; 
	
	var footer = document.getElementsByClassName("footer")[0]; 

	
	var lotPageTemplate = 
		'<div class="breadcrumbs">' +
			'<button type="button" class="breadcrumbs_button return-to-main_button">' +
				'<div>' +
					'Главная' +
				'</div>' + 
			'</button>' + 
			
			'<div class="breadcrumbs_arrow">' +
			'</div>' +
			
			'<div class="breadcrumbs_current">' +
				'Страница лота' +
			'</div>' + 
		'</div>' + 
		
		'<h1 class="heading_1 lot-page_title">' +
		'</h1>' + 
		
		'<div class="lot-page_information">' +
			'<div class="lot-page_images-window">' + 
				'<div class="lot-page_main-image-window">' +
					'<img src="" alt="" class="lot-page_main-image">' + 
				'</div>' +
				
				'<div class="lot-page_image-preview-window">' +
					'<div class="lot-page_image-preview image-1_wrapper">' +
						'<img src="" alt="" class="lot-page_image-preview_image image-1">' +
					'</div>' +
					
					'<div class="lot-page_image-preview image-2_wrapper">' +
						'<img src="" alt="" class="lot-page_image-preview_image image-2">' +
					'</div>' +
					
					'<div class="lot-page_image-preview image-3_wrapper">' +
						'<img src="" alt="" class="lot-page_image-preview_image image-3">' +
					'</div>' +
				'</div>' +
			'</div>' +
					
			'<div class="lot-page_lot-information">' +  
				'<p class="miscellaneous-text">' +
					'Описание:' + 
				'</p>' + 
				
				'<p class="lot-page_description">' +
				'</p>' + 
				
				'<p class="miscellaneous-text">' +
					'Страна происхождения:' + 
				'</p>' + 
				
				'<p class="lot-page_сountry-of-origin">' +
				'</p>' + 
				
				'<p class="lot-page_year-of-manufacture">' +
				'</p>' + 
				
				'<p class="miscellaneous-text lot-page_material_text">' +
					'Материал:' + 
				'</p>' + 
				
				'<p class="lot-page_material">' +
				'</p>' + 
						
				'<p class="miscellaneous-text">' +
					'Стартовая цена:' + 
				'</p>' +
						
				'<p class="lot-page_starting-price">' + 
				'</p>' + 
						
				'<p class="miscellaneous-text">' +
					'Осталось времени:' + 
				'</p>' + 
						
				'<div class="lot-page_timer">' + 
					'00:00:00' +
				'</div>' + 
						
				'<p class="miscellaneous-text">' +
					'Ваша ставка:' + 
				'</p>' + 
						
				'<form class="lot-page_place-a-bet">' +					
					'<input type="number" class="lot-page_enter-price" value="6">' +
					'</input>' + 
						
					'<input type="submit" class="button button_place-a-bet" value="Сделать ставку">' + 
					'</input>' + 		
				'</form>' + 	
			'</div>' + 
		'</div>'; 
	
	var lotPreviewTemplate = 	
		'<div class="main-page_lot_image-window">' +    
			'<img src="" alt="" class="main-page_lot-image">' +    
		'</div>' +   
		
		'<div class="main-page_lot-information">' +     
			'<p class="main-page_lot-information_description">' +    
			'</p>' +    
			
			'<p class="miscellaneous-text">' +   
				'Стартовая цена:' +    
			'</p>' +    
			
			'<p class="main-page_lot_starting-price">' +      
			'</p>' +    
			
			'<p class="miscellaneous-text">' +   
				'Осталось времени:' +    
			'</p>' +    
			
			'<div class="main-page_lot_timer">' +    
				'00:00:00' +   
			'</div>' +    
			
			'<p class="miscellaneous-text">' +   
				'Ваша ставка:' +    
			'</p>' +    
			
			'<form class="main-page_lot_place-a-bet">' +   		
				'<input type="number" class="main-page_lot_enter-price" value="6">' +   
				'</input>' +    
			
				'<input type="submit" class="button button_place-a-bet" value="Сделать ставку">' +    
				'</input>' +    	
			'</form>' +      
		'</div>'; 

	var userProfileTemplate =  
		'<div class="breadcrumbs">' +   
			'<button type="button" class="breadcrumbs_button return-to-main_button">' +   
				'<div>' +   
					'Главная' +   
				'</div>' +   
			'</button>' +   
			
			'<div class="breadcrumbs_arrow">' +  
			'</div>' + 
			
			'<div class="breadcrumbs_current">' + 
				'Мой профиль' + 
			'</div>' +  
		'</div>' +  
				
		'<h1 class="heading_1 user-name-in-heading">' +  
		'</h1>' +  
		
		'<div class="user-profile_lots">' + 
			'<h2 class="heading_2">' +  
				'Мои лоты' +  
			'</h2>' +  
			
			'<div class="user-profile_lots-list">' + 
			'</div>' + 
		'</div>' + 
		
		'<div class="user-profile_history">' + 
			'<h2 class="heading_2">' +  
				'История' +  
			'</h2>' +  
			
			'<div class="user-profile_history-list">' + 
			'</div>' + 
		'</div>' + 
		
		'<div class="user-profile_bets">' + 
			'<h2 class="heading_2">' +  
				'Мои ставки' +   
			'</h2>' +  
			
			'<div class="user-profile_bets-list">' + 
			'</div>' + 
		'</div>' + 
		
		'<div class="user-profile_create-lot">' + 
			'<button type="button" class="button user-profile_create-lot_button">' +  
				'Создайте свой лот!' +  
			'</button>' +  
		'</div>'; 
				
 	var userCreateNewLotTemplate =  
		'<div class="breadcrumbs">' +  
			'<button type="button" class="breadcrumbs_button return-to-main_button">' +  
				'<div>' +  
					'Главная' +  
				'</div>' +  
			'</button>' +   
			
			'<div class="breadcrumbs_arrow">' +  
			'</div>' +  
			
			'<button type="button" class="breadcrumbs_button return-to-user-profile-button">' +   
				'<div>' +  
					'Мой профиль' +  
				'</div>' +   
			'</button>' +   
			
			'<div class="breadcrumbs_arrow">' +  
			'</div>' +  
			
			'<div class="breadcrumbs_current">' +  
				'Новый лот' +  
			'</div>' +   
		'</div>' +   
				
		'<h1 class="heading_1">' +   
			'Создайте новый лот' +  
		'</h1>' +   
		
		'<div class="user_create-lot_information">' +  
			'<form>' +  
				'<p class="miscellaneous-text">' +  
					'Укажите тип предмета:' +   
				'</p>' +   
				
				'<div class="user_create-lot_type_container">' +  
					'<select class="user_create-lot_type" title="Укажите тип предмета">' +   
						'<option selected="selected" value="coins">' +  
							'Монеты и медали' +  
						'</option>' +   
						
						'<option value="books">' +  
							'Старинные книги' +  
						'</option>' +   
						
						'<option value="antique">' +  
							'Антиквариат' +  
						'</option>' +   
						
						'<option value="paintings">' +  
							'Картины' +  
						'</option>' +   
						
						'<option value="postage-stamps">' +  
							'Почтовые марки' +  
						'</option>' +   
					'</select>' +   
				'</div>' +   			
				
				'<p class="miscellaneous-text">' +  
					'Описание предмета:' +   
				'</p>' +   
				
				'<div class="user_create-lot_description_container">' +  
					'<input type="text" class="user_create-lot_description" placeholder="1 Шилинг XIV века">' +   
				'</div>' +   
				
				'<p class="miscellaneous-text">' +  
					'Страна происхождения:' +   
				'</p>' +   
				
				'<div class="user_create-lot_country-of-origin_container">' +  
					'<input type="text" class="user_create-lot_country-of-origin" placeholder="Англия">' +   
				'</div>' +   
				
				'<p class="miscellaneous-text">' +  
					'Век происхождения:' +   
				'</p>' +   
				
				'<div class="user_create-lot_age_container">' +  
					'<select class="user_create-lot_age" title="Укажите век происхождения">' +   
						'<option selected="selected" value="XIV">' +  
							'XIV' +  
						'</option>' +   
						
						'<option value="XV">' +  
							'XV' +  
						'</option>' +   
						
						'<option value="XVI">' +  
							'XVI' +  
						'</option>' +  
						
						'<option value="XVII">' +  
							'XVII' +  
						'</option>' +  
						
						'<option value="XVIII">' +  
							'XVIII' +  
						'</option>' +   
						
						'<option value="XIX">' +  
							'XIX' +  
						'</option>' +   
						
						'<option value="XX">' +  
							'XX' +   
						'</option>' +  
						
						'<option value="XXI">' +  
							'XXI' +   
						'</option>' +  
					'</select>' +   
				'</div>' +   
				
				'<p class="miscellaneous-text">' +  
					'Материал:' +   
				'</p>' +   
				
				'<div class="user_create-lot_material_container">' +  
					'<input type="text" class="user_create-lot_material" placeholder="Золото">' +   
				'</div>' +   
						
				'<p class="miscellaneous-text">' +  
					'Стартовая цена:' +   
				'</p>' +   
					
				'<div class="user_create-lot_starting-price_container">' +  
					'<input type="number" class="user_create-lot_starting-price">' +  
					'</input>' +   
				'</div>' +  
						
				'<p class="miscellaneous-text">' +  
					'Дней до конца аукциона:' +   
				'</p>' +  
						
				'<div class="user_create-lot_auction-time_container">' +  
					'<input type="number" class="user_create-lot_auction-time" placeholder="10">' +  
					'</input>' +  
				'</div>' +  
				
				'<p class="miscellaneous-text">' +  
					'Добавьте изображения' +   
				'</p>' +   
				
				'<div class="user_create-lot_add-images">' +  
					'<input type="file" id="download-image_1" class="download-image">' +  
					'</input>' +   
					
					'<div class="download-image_wrapper">' +  
						'<p>' +  
						'<label for="download-image_1" class="download-image_label">Основное изображение</label>' +   
						'</p>' +  
					'</div>' +  
					
					'<input type="file" id="download-image_2" class="download-image">' +  
					'</input>' +   
					
					'<div class="download-image_wrapper">' +  
						'<p>' +  
						'<label for="download-image_2" class="download-image_label">Дополнительное изображение</label>' +   
						'</p>' +  
					'</div>' +   
				'</div>' +  
				
				'<div>' +  
					'<input type="submit" class="button button_create-lot" value="Создать лот!">' +   
					'</input>' +   
				'</div>' +  
			'</form>' +  
		'</div>'; 
		
	var userAuctionTemplate =
		'<section class="auction display-hidden interactive">' +   
		'<div class="breadcrumbs">' +  
			'<button type="button" class="breadcrumbs_button return-to-main_button">' +  
				'<div>' +  
					'Главная' +  
				'</div>' +   
			'</button>' +   
			
			'<div class="breadcrumbs_arrow">' +  
			'</div>' +  
			
			'<button type="button" class="breadcrumbs_button">' +  
				'<div>' +  
					'Мой профиль' +  
				'</div>' +   
			'</button>' +   
			
			'<div class="breadcrumbs_arrow">' +  
			'</div>' +  
			
			'<div class="breadcrumbs_current">' +  
				'Аукцион' +  
			'</div>' +   
		'</div>' +   
				
		'<h1 class="heading_1">' +   
			'Аукцион' +  
		'</h1>' +   
		
		'<h2 class="heading_2">' +   
			'1 Шилинг 1945 г.' +   
		'</h2>' +  
		
		'<div class="auction_participants">' +  
			'<div class="auction_participant">' +  
				'<p class="auction_participant_name auction_participant_1_name">' +  
					'Учасник 1' +  
				'</p>' +  
				
				'<div class="auction_participant_bet">' +  
					'<p class="auction_participant_bet_container auction_participant_1_bet">' +  
					'10.00 USD' +  
					'</p>' +  
				'</div>' +  
			'</div>' +  
			
			'<div class="auction_participant">' +  
				'<p class="auction_participant_name auction_participant_2_name">' +  
					'Учасник 2' +  
				'</p>' +  
				
				'<div class="auction_participant_bet">' +  
					'<p class="auction_participant_bet_container auction_participant_2_bet">' +  
					'20.00 USD' +  
					'</p>' +  
				'</div>' +   
			'</div>' +  
			
			'<div class="auction_participant">' +  
				'<p class="auction_participant_name auction_participant_3_name">' +  
					'Вы' +  
				'</p>' +  
				
				'<div class="auction_participant_bet">' +  
					'<p class="auction_participant_bet_container auction_participant_3_bet">' +  
					'30.00 USD' +  
					'</p>' +  
				'</div>' +   
			'</div>' +  
		'</div>' +  
		
		'<h2 class="heading_2">' +  
			'Победитель' +  
		'</h2>' +   
		
		'<div class="auction_participant">' +   
			'<p class="auction_participant_name auction_participant_3_name">' +  
				'Вы' +  
			'</p>' +  
				
			'<div class="auction_participant_bet">' +  
				'<p class="auction_participant_bet_container">' +  
					'30.00 USD' +  
				'</p>' +   
			'</div>' +   
		'</div>' +  
		'</section>'; 

	var searchResultsPageTemplate = 
		'<section class="search-results display-hidden interactive">' +  
		'<div class="breadcrumbs">' +  
			'<button type="button" class="breadcrumbs_button">' +  
				'<div>' +  
					'Главная' +  
				'</div>' +   
			'</button>' +   
			
			'<div class="breadcrumbs_arrow">' +  
			'</div>' +  
			
			'<div class="breadcrumbs_current">' +  
				'Результаты поиска' +  
			'</div>' +   
		'</div>' +  
				
		'<h1 class="heading_1">' +   
			'Результаты поиска' +  
		'</h1>' +   
		
		'<h2 class="heading_2 subject-of-search">' +  
			'Вы искали:' +   
		'</h2>' +   
		
		'<div class="search-results_display">' +   
			'<p class="search-results_container">' +  
			'</p>' +   
		'</div>' +   
		'</section>'; 
		
 	var asideFiltersTemplate = 
		'<div class="filters-list_headings">' + 
		'</div>' + 
			
		'<div class="filters-list_filters-list">' + 
		'</div>'; 
	
	var filterTemplate = 
		'<input type="checkbox" class="filters-list_checkbox">' + 
		'<label class="checkbox_label"></label>'; 

		
	var slides = document.getElementsByClassName("landing-page_slides");
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide, 2000);

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

	
	function setHeight(elem) {
		var documentHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,  
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight, 
			window.innerHeight, pageBlur.offsetHeight 										
		);
		
		var minSectionHeight = documentHeight - headerSignedOut.offsetHeight - footer.offsetHeight; 
		
 		elem.style.minHeight = minSectionHeight + "px"; 
		
		elem.style.height = "auto";   
	}; 


	function swapClasses(elem, class1, class2) {
		elem.classList.add(class1); 
		elem.classList.remove(class2); 
	}; 
	
	function hideAll(){
		var interactiveElements = document.getElementsByClassName("interactive");  // добавить Array.prototype.slice.call.forEach для уборки [0] из начала ? или только для кнопок ? 
		for (var i = 0; i < interactiveElements.length; i += 1) {						
			swapClasses(interactiveElements[i], "display-hidden", "display-visible"); 
		}; 
	}; 
	
	function hideElements(){
		for (var i = 0; i < arguments.length; i += 1) {
			swapClasses(arguments[i], "display-hidden", "display-visible");
		}; 
	}; 
	
	function showElements(){
		for (var i = 0; i < arguments.length; i += 1) {
			swapClasses(arguments[i], "display-visible", "display-hidden"); 
		}; 
	}; 
	
	function handleEvents() {
		var elem = arguments[0]; 
		var handlers = []; 
		
		for (var i = 1; i < arguments.length; i += 1) {
			handlers.push(arguments[i]); 
		}; 
				
		Array.prototype.slice.call(elem).forEach(function(obj){
			obj.addEventListener("click", function(e) {		
				for (var j = 0; j < handlers.length; j += 1) {
					handlers[j](); 
					e.preventDefault();  
				}; 
			}, false);
		}); 
	}; 
		
		
	function showMainPage() {
		hideAll();
		showElements(mainWrapper, mainPage, header, headerSearch, filtersList); 
		changeHeader(); 
	}; 
	
	function showContactsPage() {
		hideAll();
		showElements(contactsPage, mainWrapper, header); 
		changeHeader(); 
		setHeight(contactsPage); 
	}; 
	
	function showSignInMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, pageBlur); 
		showElements(signInPage, pageBlur, signInForm); 
		signInForm.style.zIndex = "110";  
	}; 
	
	function showRegisterMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, pageBlur);
		showElements(registerPage, pageBlur, registerForm); 
		registerForm.style.zIndex = "110";  
	}; 
	
	function signInMessageMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, pageBlur);
		showElements(pageBlur, signInIssue); 
		signInIssue.style.zIndex = "110";  
	}; 
	
	function registerMessageMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, pageBlur);
		showElements(pageBlur, registerIssue); 
		registerIssue.style.zIndex = "110";  
	}; 
	
	function userIssuesMenu() {
		hideElements(filtersList, signInPage, signInForm, registerPage, registerForm, registerIssue, signInIssue, userIssues, pageBlur);
		showElements(pageBlur, userIssues); 
		userIssues.style.zIndex = "110";  
	}; 
	
	function filtersListAnimation() {
		if (filtersList.classList.contains("filters-list_closed")) {
			swapClasses(filtersList, "filters-list_open", "filters-list_closed"); 
			swapClasses(filtersListButton, "filters-list_button_close", "filters-list_button_open"); 
			filtersList.style.zIndex = "105"; 
		} else if(filtersList.classList.contains("filters-list_open")) {
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
	
	
	
	handleEvents(landingPageButton, showMainPage, pauseSlideshow); 
	
	handleEvents(returnToMainPage, showMainPage); 
		
	handleEvents(contactsButton, showContactsPage); 
	
	handleEvents(signInButton, showSignInMenu); 

	handleEvents(registerButton, showRegisterMenu); 
	
	handleEvents(cancelButton, showMainPage); 
	
	handleEvents(signInGoToRegisterButton, showRegisterMenu); 
	
	handleEvents(registerGoToSignInButton, showSignInMenu); 
	
	handleEvents(registerMessageButton, showRegisterMenu); 
	
	handleEvents(signInMessageButton, showSignInMenu); 
	
	filtersListButton.addEventListener("click", function(){
		filtersListAnimation();
	}, false);  
	
	

	handleEvents(registerNewUser, registerUser);
	
	function registerUser() {
		
		var usersList = [];
		
		if (!localStorage.getItem("users")) {
			localStorage.setItem("users", JSON.stringify(usersList)); 
		} else {
			usersList = JSON.parse(localStorage.getItem("users")); 
		}; 
		
		var userName = registerFormLogin.value; 
		var userEmail = registerFormEmail.value; 
		var userPassword = registerFormPassword.value; 
		
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
			registerMessage.innerHTML = "Вы не заполнили форму <br> Попробуйте еще раз!"; 
			return inputDataIssues();  
		}; 
		
		if (userName.length === 0) {
			registerMessage.innerHTML = "Вы не ввели логин <br> Попробуйте еще раз!"; 
			return inputDataIssues();  
		}; 
		
		if (userEmail.length === 0) {
			registerMessage.innerHTML = "Вы не указали ваш e-mail <br> Попробуйте еще раз!"; 
			return inputDataIssues();  
		};
		
		if (userPassword.length === 0) {
			registerMessage.innerHTML = "Вы не ввели пароль <br> Попробуйте еще раз!"; 
			return inputDataIssues(); 
		};
		
		var validateName = /^[a-zA-Z0-9.'\-_\s]{1,20}$/; 
 		if (!validateName.test(userName)) {
			registerMessage.innerHTML = "Некорректный логин <br> Попробуйте еще раз!";   
			return inputDataIssues(); 
		};  
		
 		var validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
 		if (!validateEmail.test(userEmail)) {
			registerMessage.innerHTML = "E-mail задан некорректно <br> Попробуйте еще раз!";   
			return inputDataIssues();  
		};  
		
		for (var i = 0; i < usersList.length; i += 1) {
			if (userName === usersList[i].userName) {
				registerMessage.innerHTML = "Пользователь с таким логином уже зарегистрирован <br> Придумайте новый логин и попробуйте еще раз!"; 
				return inputDataIssues();  
			} else if (userEmail === usersList[i].userEmail){
				registerMessage.innerHTML = "Данный e-mail уже используется <br> Попробуйте еще раз!"; 
				return inputDataIssues();  
			}; 
		}; 
				
		usersList.push({
			userName: userName, 
			userEmail: userEmail, 
			userPassword: userPassword 
		}); 
		
		localStorage.setItem("users", JSON.stringify(usersList)); 
		
		clearFormFields(); 
		
		userIssuesMessage.innerHTML = "Поздравляем, Вы успешно зарегистрированны! <br> Можете зайти на сайт под своим логином и паролем"; 
		
		return userIssuesMenu(); 		
	}; 

	
	handleEvents(signInUser, signIn);
	
	var currentUser = "logged-out"; 
	
	function signIn() {
		
		var usersList = [];
		
		if (!localStorage.getItem("users")) {
			localStorage.setItem("users", JSON.stringify(usersList)); 
		} else {
			usersList = JSON.parse(localStorage.getItem("users")); 
		}; 
		
		var userNameOrEmail = signInFormLogin.value; 
		var userWrittenPassword = signInFormPassword.value; 
		
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
			signInMessage.innerHTML = "Вы не ввели логини или e-mail <br> Попробуйте еще раз!"; 
			return inputDataIssues(); 
		}; 
		
		if (userWrittenPassword.length === 0) {
			signInMessage.innerHTML = "Вы не ввели пароль <br> Попробуйте еще раз!"; 
			return inputDataIssues(); 
		}; 
		
		var userInUsersList = usersList.filter(userPresenceInUsersList); 
		
		function userPresenceInUsersList(user) {
			if (user.userName === userNameOrEmail || user.userEmail === userNameOrEmail) {
				return true; 
			} else {
				return false; 
			}; 
		}; 
		
 		if (userInUsersList.length === 0) {
			signInMessage.innerHTML = "Пользователь с таким логином или e-mail не зарегистрирован <br> Попробуйте еще раз!"; 
			return inputDataIssues(); 
		}; 
	
		if (userInUsersList[0].userPassword !== userWrittenPassword) {
			signInMessage.innerHTML = "Неверный пароль <br> Попробуйте еще раз!"; 
			return inputDataIssues(); 
		} else {
			currentUser = userInUsersList[0].userName;
			userIssuesMessage.innerHTML = "Добро пожаловать " + currentUser + "!"; 	
			clearFormFields(); 
			createUserProfile(); 
 			createUserNewLotPage();  
			return userIssuesMenu(); 
		};  
	}; 

	
	handleEvents(userLogOutButton, userLogOut); 	
	
	function userLogOut() {
		currentUser = "logged-out"; 
		showMainPage(); 
	}; 

	
	
	function addStandartUserAttributes(elem) {
		elem.classList.add("display-hidden");
		elem.classList.add("interactive");
		elem.setAttribute("data-user", currentUser);
	}; 

	
	handleEvents(userProfileButton, showUserProfile); 
	
	function showUserProfile() {
		var currentUserProfilePage; 

		Array.prototype.slice.call(usersProfilesPages).forEach(function(obj){
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
		var fragment = document.createDocumentFragment(); 
		var userProfile = document.createElement("section"); 
		
		userProfile.classList.add("user-profile");
		
		addStandartUserAttributes(userProfile); 
		
		userProfile.innerHTML = userProfileTemplate; 
		
		userProfile.getElementsByClassName("user-name-in-heading")[0].innerHTML = "Добро пожаловать " + currentUser + "!";
		
		fragment.appendChild(userProfile);

 		mainWrapper.insertBefore(fragment, footer); 
		
		handleEvents(returnToMainPage, showMainPage); 
	}; 

	
 	handleEvents(userProfileCreateLotButton, showUserNewLotPage); 
	
	function showUserNewLotPage() {
		var currentUserNewLotPage; 

		Array.prototype.slice.call(usersNewLotPages).forEach(function(obj){
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
		var fragment = document.createDocumentFragment(); 
		var userNewLotPage = document.createElement("section"); 
		
		userNewLotPage.classList.add("user_create-lot");
		
		addStandartUserAttributes(userNewLotPage); 
		
		userNewLotPage.innerHTML = userCreateNewLotTemplate; 
		
		fragment.appendChild(userNewLotPage);
		
		mainWrapper.insertBefore(fragment, footer); 
		
		handleEvents(returnToMainPage, showMainPage); 
		handleEvents(userProfileCreateLotButton, showUserNewLotPage); 
		handleEvents(returnToUserProfileButton, showUserProfile); 
	};  

	
	addInitialContent(); 
	createLotsPages(); 
	createLotsPreviews(); 
	
	function createLotsPages() {
		var initialContent = [];
		var fragment = document.createDocumentFragment(); 
		
		if (!localStorage.getItem("content")) {
			localStorage.setItem("content", JSON.stringify(initialContent)); 
		} else {
			initialContent = JSON.parse(localStorage.getItem("content")); 
		}; 
		
		function addStandartLotAttributes(elem) {
			elem.classList.add("lot-page");
			elem.classList.add("display-hidden");
			elem.classList.add("interactive");
			elem.setAttribute("data-lot", i + 1); 
		}; 
		
		for (var i = 0; i < initialContent.length; i += 1) {
			var lotPage = document.createElement("section"); 
			
			addStandartLotAttributes(lotPage); 
						
			lotPage.innerHTML = lotPageTemplate; 
			
			lotPage.getElementsByClassName("lot-page_title")[0].innerHTML = initialContent[i].title; 
			lotPage.getElementsByClassName("lot-page_description")[0].innerHTML = initialContent[i].description; 
			lotPage.getElementsByClassName("lot-page_main-image")[0].src = initialContent[i].image_1_src; 
			lotPage.getElementsByClassName("image-1")[0].src = initialContent[i].image_1_src; 
			lotPage.getElementsByClassName("lot-page_сountry-of-origin")[0].innerHTML = initialContent[i].сountry_of_origin; 
			lotPage.getElementsByClassName("lot-page_year-of-manufacture")[0].innerHTML = initialContent[i].year_of_manufacture; 
			lotPage.getElementsByClassName("lot-page_starting-price")[0].innerHTML = initialContent[i].starting_price; 
			lotPage.getElementsByClassName("lot-page_timer")[0].innerHTML = initialContent[i].timer; 
			
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
			
/* 			function timer() {
				
			};  */
			
			fragment.appendChild(lotPage); 
		};
		
		mainWrapper.insertBefore(fragment, footer); 
		
		handleEvents(returnToMainPage, showMainPage); 
	}; 
	
	function createLotsPreviews() {
		var initialContent = [];
		var fragment = document.createDocumentFragment(); 
		
		if (!localStorage.getItem("content")) {
			localStorage.setItem("content", JSON.stringify(initialContent)); 
		} else {
			initialContent = JSON.parse(localStorage.getItem("content")); 
		}; 
		
		function addStandartLotAttributes(elem) {
			lotPreview.classList.add("main-page_lot"); 
			elem.setAttribute("data-lot", i + 1); 
			elem.setAttribute("data-type", initialContent[i].type);
			elem.setAttribute("data-current-preview-page", Math.ceil((i + 1) / 6));
			elem.setAttribute("data-сountry-of-origin", initialContent[i].data_сountry_of_origin);
			elem.setAttribute("data-year-of-manufacture", initialContent[i].data_year_of_manufacture);
			elem.setAttribute("data-material", initialContent[i].data_material);
			elem.setAttribute("data-сountry-of-origin-value", initialContent[i].сountry_of_origin);
			elem.setAttribute("data-year-of-manufacture-value", initialContent[i].year_of_manufacture);
			elem.setAttribute("data-material-value", initialContent[i].material);
		}; 
		
		for (var i = 0; i < initialContent.length; i += 1) {
			var lotPreview = document.createElement("div"); 
			
			addStandartLotAttributes(lotPreview); 
						
			lotPreview.innerHTML = lotPreviewTemplate; 
			
			lotPreview.getElementsByClassName("main-page_lot-information_description")[0].innerHTML = initialContent[i].title; 
			lotPreview.getElementsByClassName("main-page_lot-image")[0].src = initialContent[i].image_1_src; 
			lotPreview.getElementsByClassName("main-page_lot_starting-price")[0].innerHTML = initialContent[i].starting_price; 
			lotPreview.getElementsByClassName("main-page_lot_timer")[0].innerHTML = initialContent[i].timer; 
			
/* 			function timer() {
				
			};  */
			
			fragment.appendChild(lotPreview);  
		};
		
		lotsPreviewWrapper.appendChild(fragment); 
		
		lotPreviewOnclick(); 
		
 		manageLotsPreviews();  
		
  		createAsideFlitersList();   
	}; 
	
	function lotPreviewOnclick() {
		var currentLot;
		var selectedLotPage; 
						
		Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
			obj.addEventListener("click", function(e) {
				if (obj.hasAttribute("data-lot")) {
					currentLot = obj.getAttribute("data-lot"); 
				}; 
				
				Array.prototype.slice.call(lotsPages).forEach(function(obj){
					if (obj.getAttribute("data-lot") === currentLot) {
						selectedLotPage = obj; 
					}; 
				});
				
				hideAll(); 
				showElements(selectedLotPage, mainWrapper, header); 
				changeHeader(); 
				setHeight(selectedLotPage); 

				e.preventDefault();  
			}, false); 
		}); 
	}; 
	
	function createAsideFlitersList() {
		var fragment = document.createDocumentFragment();		
		var lotCharacteristicsFilters = [
			{
				characteristic: "Страна происхождения",
				data_type_characteristic: "сountry-of-origin", 
				characteristicFilters: []
			}, 
			{
				characteristic: "Возраст", 
				data_type_characteristic: "year-of-manufacture", 
				characteristicFilters: []
			}, 
			{
				characteristic: "Материал", 
				data_type_characteristic: "material", 
				characteristicFilters: []
			}
		]; 	
		
		Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
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
					value: obj.getAttribute("data-material-value"), 
					data_value: obj.getAttribute("data-material")	
				}); 
			}; 
		});
		
 		function trimUnique(arr) {
			var seen = {}; 
			
			arr.sort(compare); 
			
			function compare(a,b) {
				return (a.value > b.value); 
			}; 
			
			return arr.filter(function(x) {
				if (seen[x.data_value]) {
					return; 
				}; 
				seen[x.data_value] = true; 
				return x; 
			}); 
		};  
		
		for (var i = 0; i < lotCharacteristicsFilters.length; i += 1) {
 			lotCharacteristicsFilters[i].characteristicFilters = trimUnique(lotCharacteristicsFilters[i].characteristicFilters);  
			
			var filtersListWrapper = document.createElement("form"); 	
			
			filtersListWrapper.innerHTML = asideFiltersTemplate; 
			filtersListWrapper.getElementsByClassName("filters-list_headings")[0].innerHTML = lotCharacteristicsFilters[i].characteristic; 
			
			switch (lotCharacteristicsFilters[i].characteristic) {		
				case "Страна происхождения":
					filtersListWrapper.classList.add("filters-list_country");
					break; 
				case "Возраст":
					filtersListWrapper.classList.add("filters-list_age");
					break;
				case "Материал":
					filtersListWrapper.classList.add("filters-list_material");
					break;
			}; 
			
			for (var j = 0; j < lotCharacteristicsFilters[i].characteristicFilters.length; j += 1) {
				var listFragment = document.createDocumentFragment();
				var listFragmentWrapper = document.createElement("div"); 	
				
				listFragmentWrapper.innerHTML = filterTemplate; 
				listFragmentWrapper.getElementsByClassName("checkbox_label")[0].innerHTML = lotCharacteristicsFilters[i].characteristicFilters[j].value; 
				listFragmentWrapper.getElementsByClassName("checkbox_label")[0].setAttribute("for", lotCharacteristicsFilters[i].characteristicFilters[j].data_value); 
				
				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].id = lotCharacteristicsFilters[i].characteristicFilters[j].data_value; 
				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].setAttribute("data-type", lotCharacteristicsFilters[i].data_type_characteristic); 
				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].setAttribute("value", lotCharacteristicsFilters[i].characteristicFilters[j].data_value); 
				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].setAttribute("checked", "checked"); 
				
				listFragment.appendChild(listFragmentWrapper); 
				filtersListWrapper.getElementsByClassName("filters-list_filters-list")[0].appendChild(listFragment); 			
			}; 

			fragment.appendChild(filtersListWrapper); 
		}; 
		
		filtersListMenu.appendChild(fragment); 
	};  
		
	function manageLotsPreviews() {

		Array.prototype.slice.call(mainPageMainFilters).forEach(function(mainFilter){
			mainFilter.addEventListener("click", function(e) {
				Array.prototype.slice.call(mainPageMainFilters).forEach(function(obj){
					obj.classList.remove("lots-groups_current-selected"); 
				}); 
				
				e.target.classList.add("lots-groups_current-selected"); 
				
				Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
					hideElements(obj); 
					
					switch (e.target.getAttribute("data-type")) {
						case "all": 
							showElements(obj); 
							break; 
						case "coins": 
							if (obj.getAttribute("data-type") === "coin") {
								showElements(obj); 
							}; 
							break; 
						case "books": 
							if (obj.getAttribute("data-type") === "book") {
								showElements(obj); 
							}; 
							break; 
						case "antique": 
							if (obj.getAttribute("data-type") === "antique") {
								showElements(obj); 
							}; 
							break; 
						case "paintings": 
							if (obj.getAttribute("data-type") === "painting") {
								showElements(obj); 
							}; 
							break; 
						case "postage-stamps": 
							if (obj.getAttribute("data-type") === "postage-stamp") {
								showElements(obj); 
							};  
							break; 
					}; 
				}); 				
				
				e.preventDefault();  
			}, false); 
		});

 		Array.prototype.slice.call(filtersListCheckboxes).forEach(function(currentCheckbox){
			currentCheckbox.addEventListener("change", function(e) {
				
				var currentCheckboxValue = e.target.getAttribute("id");

				Array.prototype.slice.call(mainPageMainFilters).forEach(function(obj){
					if (!obj.classList.contains("display-hidden")) {
						
						switch(e.target.getAttribute("data-type")) {
							case "сountry-of-origin": 
								if (
									obj.getAttribute("data-сountry-of-origin") === e.target.getAttribute("id") 
									&& 
									e.target.getAttribute("checked") === "checked"
								) {
									hideElements(obj);					
								} else if (
									obj.getAttribute("data-сountry-of-origin") === e.target.getAttribute("id") 
									&& 
									e.target.getAttribute("checked") !== "checked"
								) {
									showElements(obj);
								}; 
								break; 
							case "year-of-manufacture": 
								if (
									obj.getAttribute("data-year-of-manufacture") === e.target.getAttribute("id")
									&& 
									e.target.getAttribute("checked") === "checked"
								) {
									hideElements(obj);					
								} else if (
									obj.getAttribute("data-year-of-manufacture") === e.target.getAttribute("id") 
									&& 
									e.target.getAttribute("checked") !== "checked"
								) {
									showElements(obj);
								};  
								break; 
							case "material": 
								if (
									obj.getAttribute("data-material") === e.target.getAttribute("id") 
									&& 
									e.target.getAttribute("checked") === "checked"
								) {
									hideElements(obj);					
								} else if (
									obj.getAttribute("data-material") === e.target.getAttribute("id") 
									&& 
									e.target.getAttribute("checked") !== "checked"
								) {
									showElements(obj);
								};  
								break; 
						}; 
					};  
				}); 
			}); 
		});  

		var contentPreviewPages = Math.ceil(lotsPreviews.length / 6); 
		
		var fragment = document.createDocumentFragment(); 
		var contentPreviewPagesWrapper = document.createElement("div"); 
		
		contentPreviewPagesWrapper.classList.add("content-preview-pages");
		
		for (var i = 1; i <= contentPreviewPages; i += 1) {
			var contentPreviewPage = document.createElement("p");
			
			contentPreviewPage.classList.add("content-preview-page");
 			contentPreviewPage.setAttribute("data-current-preview-page", Math.ceil(i / contentPreviewPages));  
			
			contentPreviewPage.innerHTML = i; 
			
			contentPreviewPagesWrapper.appendChild(contentPreviewPage); 
		}; 
		
		fragment.appendChild(contentPreviewPagesWrapper); 
		
		lotsPreviewWrapper.appendChild(fragment); 
	}; 

function addInitialContent() {
	
	var arrayOfInitialContent = [
		{ 
			type: "coin", 
			title: "Георг VI. 1 шиллинг 1945 года.", 
			description: "Георг VI. 1 шиллинг 1945 года.",
			сountry_of_origin: "Англия", 
			year_of_manufacture: "XX век", 
			material: "Серебро", 
			data_сountry_of_origin: "England", 
			data_year_of_manufacture: "20th-century", 
			data_material: "silver", 
			starting_price: "$6.00",
			image_1_src: "../images/Content/Coins/coin-1-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-1-2.jpg", 
			timer: "00:00:00"
		/* 	timer: 200 */ //in hours 
		},
		{ 
			type: "coin", 
			title: "ФРГ. 10 марок 1972 года.", 
			description: "ФРГ. 10 марок 1972 года.", 
			сountry_of_origin: "Германия", 			
			year_of_manufacture: "XX век", 			
			material: "Серебро", 
			data_сountry_of_origin: "Germany", 
			data_year_of_manufacture: "20th-century", 
			data_material: "silver", 
			starting_price: "$7.50",
			image_1_src: "../images/Content/Coins/coin-2-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-2-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Стрейтс Сеттлментс. Георг V. 10 центов 1927 года.", 
			description: "Стрейтс Сеттлментс. Георг V. 10 центов 1927 года.", 
			сountry_of_origin: "Малайзия", 			
			year_of_manufacture: "XX век", 			
			material: "Серебро", 
			data_сountry_of_origin: "Malaysia", 
			data_year_of_manufacture: "20th-century", 
			data_material: "silver", 
			starting_price: "$7.00",
			image_1_src: "../images/Content/Coins/coin-3-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-3-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Виктория. 1/2 фартинга 1843 года.", 
			description: "Виктория. 1/2 фартинга 1843 года.", 
			сountry_of_origin: "Англия", 			
			year_of_manufacture: "XIX век", 			
			material: "Медь", 
			data_сountry_of_origin: "England", 
			data_year_of_manufacture: "19th-century", 
			data_material: "copper", 
			starting_price: "$34.00",
			image_1_src: "../images/Content/Coins/coin-4-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-4-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Виктория. 1 фартинг 1896 года.", 
			description: "Виктория. 1 фартинг 1896 года.", 
			сountry_of_origin: "Англия", 			
			year_of_manufacture: "XIX век", 			
			material: "Бронза", 
			data_сountry_of_origin: "England", 
			data_year_of_manufacture: "19th-century", 
			data_material: "bronze", 
			starting_price: "$34.00",
			image_1_src: "../images/Content/Coins/coin-5-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-5-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "25 долларов 2000 года. Proof.", 
			description: "25 долларов 2000 года. Proof.", 
			сountry_of_origin: "Либерия", 			
			year_of_manufacture: "XXI век", 			
			material: "Золото", 
			data_сountry_of_origin: "Liberia", 
			data_year_of_manufacture: "21st-century", 
			data_material: "gold", 
			starting_price: "$51.50",
			image_1_src: "../images/Content/Coins/coin-6-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-6-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "25 долларов 2001 года. Proof.", 
			description: "25 долларов 2001 года. Proof.", 
			сountry_of_origin: "Либерия", 			
			year_of_manufacture: "XXI век", 			
			material: "Золото", 
			data_сountry_of_origin: "Liberia", 
			data_year_of_manufacture: "21st-century", 
			data_material: "gold", 
			starting_price: "$52.00",
			image_1_src: "../images/Content/Coins/coin-7-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-7-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Франц Иосиф I. 1 крейцер 1881 года.", 
			description: "Франц Иосиф I. 1 крейцер 1881 года.", 
			сountry_of_origin: "Австрия", 
			year_of_manufacture: "XIX век", 
			material: "Медь", 
			data_сountry_of_origin: "Austria", 
			data_year_of_manufacture: "19th-century", 
			data_material: "copper", 
			starting_price: "$10.00",
			image_1_src: "../images/Content/Coins/coin-8-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-8-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Медаль: 100-летие со дня рождения Императора Александра I.", 
			description: "Медаль в память 100-летия со дня рождения Императора Александра I 1877 год.", 
			сountry_of_origin: "Россия", 
			year_of_manufacture: "XIX век", 
			material: "Бронза", 
			data_сountry_of_origin: "Russia", 
			data_year_of_manufacture: "19th-century", 
			data_material: "bronze", 
			starting_price: "$500.00",
			image_1_src: "../images/Content/Coins/coin-9-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-9-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Франц Иосиф I. 1 дукат 1915 года.", 
			description: "Франц Иосиф I. 1 дукат 1915 года.", 
			сountry_of_origin: "Австрия", 
			year_of_manufacture: "XX век", 
			material: "Золото", 
			data_сountry_of_origin: "Austria", 
			data_year_of_manufacture: "20th-century", 
			data_material: "gold", 
			starting_price: "$115.00",
			image_1_src: "../images/Content/Coins/coin-10-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-10-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Полкопейки 1928 года.", 
			description: "Полкопейки 1928 года.", 
			сountry_of_origin: "СССР", 
			year_of_manufacture: "XX век", 
			material: "Медь", 
			data_сountry_of_origin: "USSR", 
			data_year_of_manufacture: "20th-century", 
			data_material: "copper", 
			starting_price: "$20.00",
			image_1_src: "../images/Content/Coins/coin-11-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-11-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Норфолк. Георг III. 1/2 пенни 1792 года.", 
			description: "Норфолк. Георг III. 1/2 пенни 1792 года.", 
			сountry_of_origin: "Англия", 
			year_of_manufacture: "XVIII век", 
			material: "Медь", 
			data_сountry_of_origin: "England", 
			data_year_of_manufacture: "18th-century", 
			data_material: "copper", 
			starting_price: "$22.00",
			image_1_src: "../images/Content/Coins/coin-12-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-12-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Виктория. 1 пенни 1841 года.", 
			description: "Виктория. 1 пенни 1841 года.", 
			сountry_of_origin: "Англия", 
			year_of_manufacture: "XIX век", 
			material: "Бронза", 
			data_сountry_of_origin: "England", 
			data_year_of_manufacture: "19th-century", 
			data_material: "bronze", 
			starting_price: "$25.00",
			image_1_src: "../images/Content/Coins/coin-13-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-13-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "coin", 
			title: "Сомерсет. Георг III. 1 фартинг 1795 года", 
			description: "Сомерсет. Георг III. 1 фартинг 1795 года.", 
			сountry_of_origin: "Англия", 
			year_of_manufacture: "XVIII век", 
			material: "Медь", 
			data_сountry_of_origin: "England", 
			data_year_of_manufacture: "18th-century", 
			data_material: "copper", 
			starting_price: "$18.00",
			image_1_src: "../images/Content/Coins/coin-14-1.jpg", 
			image_2_src: "../images/Content/Coins/coin-14-2.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "book", 
			title: "Antique large Bible brass corner clasps", 
			description: "This is a very large (13\" tall X 10 3/4\" wide and 3 5/8\" thick) family Holy Bible with leather covers and brass corner clasps. Very beautiful Bible. No printing date (c1880). Hinges are strong, covers firmly attached and open and close easily.    Many full page illustrations, some in color and 2 maps. Water stained on about 4 pages (9th pic.). Covers have some rub marks and fading but still very elegant. Excellent condition, strong hinges (opens and closes easily).", 
			сountry_of_origin: "США", 
			year_of_manufacture: "XIX век", 
			data_сountry_of_origin: "USA", 
			data_year_of_manufacture: "19th-century", 
			starting_price: "$375.00",
			image_1_src: "../images/Content/Books/book-1-1.jpg", 
			image_2_src: "../images/Content/Books/book-1-2.jpg", 
			image_3_src: "../images/Content/Books/book-1-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "book", 
			title: "Western Medical Guide Book", 
			description: "Western Medical Guide Book Japanese Antique Woodblock Print Medicine 1874. 8 books set. Author: Druitt Robert.", 
			сountry_of_origin: "Япония", 
			year_of_manufacture: "XIX век", 
			data_сountry_of_origin: "Japan", 
			data_year_of_manufacture: "19th-century", 
			starting_price: "$1.25",
			image_1_src: "../images/Content/Books/book-2-1.jpg", 
			image_2_src: "../images/Content/Books/book-2-2.jpg", 
			image_3_src: "../images/Content/Books/book-2-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "book", 
			title: "Homeopathic HERBAL Anatomy DRUG Pharmacy Medical APOTHECARY", 
			description: "Homeopathic HERBAL Anatomy DRUG Pharmacy Medical APOTHECARY. Year Printed: 1875. Publisher: WILSTACH, BALDWIN & CO.Author: John C. Gunn", 
			сountry_of_origin: "США", 
			year_of_manufacture: "XIX век", 
			data_сountry_of_origin: "USA", 
			data_year_of_manufacture: "19th-century", 
			starting_price: "$250.00",
			image_1_src: "../images/Content/Books/book-3-1.jpg", 
			image_2_src: "../images/Content/Books/book-3-2.jpg", 
			image_3_src: "../images/Content/Books/book-3-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "book", 
			title: "Incunable Book of Hours on VELLUM", 
			description: "c.1503 MEDIEVAL Incunable Book of Hours on VELLUM - ORIGINAL BINDING incunabula. Fragment - Only 25 leaves remain (though in original binding). Stained internally, many rubrications and illuminations have been rubbed off or otherwise damaged, entire quires have been removed from the binding (probably in the nineteenth-century), though not affecting stability of the text-block. Contemporary early 16th-century binding has been recently repaired around the hinges with new leather. A beautiful, though incomplete, example of a very early Hardouin book of hours on vellum. For consideration today is a medieval Book of Hours (Usage of Rome), printed c.1503 in Paris by Hardouin in Latin and partially in Middle French entirely ON VELLUM.", 
			сountry_of_origin: "Франция", 
			year_of_manufacture: "XV век", 
			data_сountry_of_origin: "France", 
			data_year_of_manufacture: "15th-century", 
			starting_price: "$800.00",
			image_1_src: "../images/Content/Books/book-4-1.jpg", 
			image_2_src: "../images/Content/Books/book-4-2.jpg", 
			image_3_src: "../images/Content/Books/book-4-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "book", 
			title: "Homer Odyssey", 
			description: "Homer Odyssey 1488 Book XVII 1st Printed Edition in Greek Incunable Iliad", 
			сountry_of_origin: "Англия", 
			year_of_manufacture: "XIV век", 
			data_сountry_of_origin: "England", 
			data_year_of_manufacture: "14th-century", 
			starting_price: "$8000.00",
			image_1_src: "../images/Content/Books/book-5-1.jpg", 
			image_2_src: "../images/Content/Books/book-5-2.jpg", 
			image_3_src: "../images/Content/Books/book-5-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "antique", 
			title: "Vintage Chinese Lacquer Vase & Wood Stand", 
			description: "Vintage Chinese Lacquer Vase & Wood Stand", 
			сountry_of_origin: "Китай", 
			year_of_manufacture: "XX век", 
			material: "Лакированное дерево", 
			data_сountry_of_origin: "China", 
			data_year_of_manufacture: "20th-century", 
			data_material: "lacquer", 
			starting_price: "$27.00",
			image_1_src: "../images/Content/Antique/antique-2-1.jpg", 
			image_2_src: "../images/Content/Antique/antique-2-2.jpg", 
			image_3_src: "../images/Content/Antique/antique-2-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "antique", 
			title: "CHINESE ANTIQUE PORCELAIN POT VASE", 
			description: "CHINESE ANTIQUE PORCELAIN FINE CRACK BLUE&WHITE DRAGON DESIGN POT VASE F048", 
			сountry_of_origin: "Китай", 
			year_of_manufacture: "XVII век", 
			material: "Фарфор", 
			data_сountry_of_origin: "China", 
			data_year_of_manufacture: "17th-century", 
			data_material: "porcelain", 
			starting_price: "$400.00",
			image_1_src: "../images/Content/Antique/antique-3-1.jpg", 
			image_2_src: "../images/Content/Antique/antique-3-2.jpg", 
			image_3_src: "../images/Content/Antique/antique-3-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "antique", 
			title: "CHINESE ANTIQUE PORCELAIN VASE", 
			description: "CHINESE ANTIQUE MING CHENGHUA FAMILLE FIVE COLORED PORCELAIN VASE W/MARKED M119", 
			сountry_of_origin: "Китай", 
			year_of_manufacture: "XVI век", 
			material: "Фарфор", 
			data_сountry_of_origin: "China", 
			data_year_of_manufacture: "16th-century", 
			data_material: "porcelain", 
			starting_price: "$550.00",
			image_1_src: "../images/Content/Antique/antique-4-1.jpg", 
			image_2_src: "../images/Content/Antique/antique-4-2.jpg", 
			image_3_src: "../images/Content/Antique/antique-4-3.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "antique", 
			title: "Antique pair of Chinese Porcelain Vases", 
			description: "Wonderfull Antique pair of Chinese Porcelain Vases, 18th century Fine painting", 
			сountry_of_origin: "Китай", 
			year_of_manufacture: "XVIII век", 
			material: "Фарфор", 
			data_сountry_of_origin: "China", 
			data_year_of_manufacture: "18th-century", 
			data_material: "porcelain", 
			starting_price: "$370.00",
			image_1_src: "../images/Content/Antique/antique-5-1.jpg", 
			image_2_src: "../images/Content/Antique/antique-5-2.jpg", 
			image_3_src: "../images/Content/Antique/antique-5-3.jpg",
			timer: "00:00:00"
		},
		{ 
			type: "painting", 
			title: "View of the Terreiro do Paco", 
			description: "LOUIS DODD - 1943-2006, View of the Terreiro do Paco (Palace Square in Lisbon), oil on wood, signed, Dim. - 41 x 64 cm", 
			сountry_of_origin: "Испания", 
			year_of_manufacture: "XX век", 
			data_сountry_of_origin: "Spain", 
			data_year_of_manufacture: "20th-century", 
			starting_price: "$2000.00",
			image_1_src: "../images/Content/Paintings/painting-1-1.jpg", 
			timer: "00:00:00"
		},	
		{ 
			type: "painting", 
			title: "The Defensive Occupation of Madeira", 
			description: "LOUIS DODD - 1943-2006, \"The Defensive Occupation of Madeira\", oil on wood, signed, Dim. - 52 x 92 cm", 
			сountry_of_origin: "Испания", 
			year_of_manufacture: "XX век", 
			data_сountry_of_origin: "Spain", 
			data_year_of_manufacture: "20th-century", 
			starting_price: "$3000.00",
			image_1_src: "../images/Content/Paintings/painting-2-1.jpg", 
			timer: "00:00:00"
		},	
		{ 
			type: "painting", 
			title: "Paisagem tropical (Tropical Landscape)", 
			description: "\"Paisagem tropical\" (\"Tropical Landscape\"), watercolour on card stock, European school, 19th/20th C., minor defects, unsigned, Dim. - 19 x 37 cm", 
			сountry_of_origin: "Европа", 
			year_of_manufacture: "XIX век", 
			data_сountry_of_origin: "Europe", 
			data_year_of_manufacture: "19th-century", 
			starting_price: "$150.00",
			image_1_src: "../images/Content/Paintings/painting-3-1.jpg", 
			timer: "00:00:00"
		},	
		{ 
			type: "painting", 
			title: "A Pier view - Paris", 
			description: "A Pier view - Paris, oil on cardboard, signed GILBERT GALLAND (probably Gilbert Galland - 1870-1956), Dim. - 16 x 24 cm", 
			сountry_of_origin: "Франция", 
			year_of_manufacture: "XX век", 
			data_сountry_of_origin: "France", 
			data_year_of_manufacture: "20th-century", 
			starting_price: "$200.00",
			image_1_src: "../images/Content/Paintings/painting-4-1.jpg", 
			timer: "00:00:00"
		},	
		{ 
			type: "painting", 
			title: "A Landscape - Figures near the stream", 
			description: "A Landscape - Figures near the stream, oil on canvas, French school, 19th C., signed A. CHEVALIER, Dim. - 65,5 x 58 cm", 
			сountry_of_origin: "Франция", 
			year_of_manufacture: "XIX век", 
			data_сountry_of_origin: "France", 
			data_year_of_manufacture: "19th-century", 
			starting_price: "$400.00",
			image_1_src: "../images/Content/Paintings/painting-5-1.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "postage-stamp", 
			title: "ЛИХТЕНШТЕЙН 1994 ИЗОБРЕТЕНИЯ НАУКА", 
			description: "ЛИХТЕНШТЕЙН 1994 ИЗОБРЕТЕНИЯ НАУКА", 
			сountry_of_origin: "Лихтенштейн", 
			year_of_manufacture: "XX век", 
			data_сountry_of_origin: "Liechtenstein", 
			data_year_of_manufacture: "20th-century", 
			starting_price: "$1.00",
			image_1_src: "../images/Content/Postage-stamps/postage-stamp-1-1.jpg", 
			timer: "00:00:00"
		},
		{ 
			type: "postage-stamp", 
			title: "АВСТРАЛИЯ 1931 АВИАЦИЯ * МАТЕРИКИ ЗЕМНОЙ ШАР КАРТА", 
			description: "АВСТРАЛИЯ 1931 АВИАЦИЯ * МАТЕРИКИ ЗЕМНОЙ ШАР КАРТА", 
			сountry_of_origin: "Австралия", 
			year_of_manufacture: "XX век", 
			data_сountry_of_origin: "Australia", 
			data_year_of_manufacture: "20th-century", 
			starting_price: "$10.00",
			image_1_src: "../images/Content/Postage-stamps/postage-stamp-2-1.jpg", 
			timer: "00:00:00"
		},	
		{ 
			type: "postage-stamp", 
			title: "САН-МАРИНО 1892 1L КАТАЛОГ 500 ЕВРО", 
			description: "САН-МАРИНО 1892 1L КАТАЛОГ 500 ЕВРО", 
			сountry_of_origin: "Сан-Марино", 
			year_of_manufacture: "XIX век", 
			data_сountry_of_origin: "", 
			data_year_of_manufacture: "", 
			starting_price: "$70.00",
			image_1_src: "../images/Content/Postage-stamps/postage-stamp-3-1.jpg", 
			timer: "00:00:00"
		},	
		{ 
			type: "postage-stamp", 
			title: "АВСТРАЛИЯ ШТАТЫ 1899 ШТАТ КВИНСЛЕНД", 
			description: "АВСТРАЛИЯ ШТАТЫ 1899 ШТАТ КВИНСЛЕНД", 
			сountry_of_origin: "Австралия", 
			year_of_manufacture: "XIX век", 
			data_сountry_of_origin: "San-Marino", 
			data_year_of_manufacture: "19th-century", 
			starting_price: "$1.50",
			image_1_src: "../images/Content/Postage-stamps/postage-stamp-4-1.jpg", 
			timer: "00:00:00"
		},	
		{ 
			type: "postage-stamp", 
			title: "СССР. 1981 г. Композитор Прокофьев", 
			description: "СССР. 1981 г. Композитор Прокофьев", 
			сountry_of_origin: "СССР", 
			year_of_manufacture: "XX век", 
			data_сountry_of_origin: "USSR", 
			data_year_of_manufacture: "20th-century", 
			starting_price: "$1.00",
			image_1_src: "../images/Content/Postage-stamps/postage-stamp-5-1.jpg", 
			timer: "00:00:00"
		}	
	]; 
	
	localStorage.setItem("content", JSON.stringify(arrayOfInitialContent)); 
}; 