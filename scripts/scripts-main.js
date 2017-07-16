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
	var contactsButton = document.getElementsByClassName("contacts-button"); 
	var signInButton = document.getElementsByClassName("sign-in-button"); 
	var registerButton = document.getElementsByClassName("register-button"); 
	var headerSearch = document.getElementsByClassName("header_search")[0]; 
	var headerSearchButton = document.getElementsByClassName("search-button"); 	
	var headerSearchText = document.getElementsByClassName("header_search_text-field")[0]; 
	var headerSearchOptions = document.getElementsByClassName("header_search_options")[0]; 

	var userProfileButton = document.getElementsByClassName("user-profile-button"); 
	var userLogOutButton = document.getElementsByClassName("user-log-out-button"); 
	
	var mainPage = document.getElementsByClassName("main-page")[0]; 	
	var mainPageMainFilters = document.getElementsByClassName("main-page_lots-groups_button"); 
	var returnToMainPage = document.getElementsByClassName("return-to-main_button"); 
	
	var filtersList = document.getElementsByClassName("filters-list")[0]; 
	var filtersListMenu = document.getElementsByClassName("filters-list_filters")[0]; 
	var filtersListCheckboxes = document.getElementsByClassName("filters-list_checkbox"); 
	var filtersListButton = document.getElementsByClassName("filters-list_button")[0]; 
	
	var lotsPreviewWrapper = document.getElementsByClassName("main-page_lots-preview")[0]; 
	var lotsPreviews = document.getElementsByClassName("main-page_lot");  
	var lotsPreviewsPagesBlock = document.getElementsByClassName("content-preview-pages")[0]; 
	var lotsPreviewsPages = document.getElementsByClassName("content-preview-page"); 
	
	var lotsPages = document.getElementsByClassName("lot-page"); 
	var lotPageMainImage = document.getElementsByClassName("lot-page_main-image"); 
	var lotPageImages = document.getElementsByClassName("lot-page_image-preview"); 
				
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
	var userNewLotIssues = document.getElementsByClassName("user-new-lot-issues")[0]; 
	var userNewLotIssuesMessage = document.getElementsByClassName("user-new-lot-issues_message")[0]; 
	var pageBlur = document.getElementsByClassName("page_blur")[0]; 
	var cancelButton = document.getElementsByClassName("cancel-button"); 
	
	var contactsPage = document.getElementsByClassName("contacts")[0]; 
		
	var searchResultsPage = document.getElementsByClassName("search-results")[0]; 
	var searchResultsContainer = document.getElementsByClassName("search-results_container")[0]; 
	var subjectOfSearch = document.getElementsByClassName("subject-of-search")[0]; 
	var searchPreviews = document.getElementsByClassName("search-result"); 
	var returnToSearchPage = document.getElementsByClassName("return-to-search_button"); 
		
	var usersProfilesPages = document.getElementsByClassName("user-profile"); 
	var userProfileCreateLotButton = document.getElementsByClassName("user-profile_create-lot_button"); 
	var userCreateNewLotButton = document.getElementsByClassName("button_create-lot"); 
	var userProfileLots = document.getElementsByClassName("user-profile_lots-list")[0]; 
	var userProfileLotsPreviews = document.getElementsByClassName("user-lot_preview"); 
	
	var usersNewLotPages = document.getElementsByClassName("user_create-lot"); 
	var returnToUserProfileButton = document.getElementsByClassName("return-to-user-profile-button"); 
 	var userCreateLotType = document.getElementsByClassName("user_create-lot_type")[0];  
	var userCreateLotTitle = document.getElementsByClassName("user_create-lot_title")[0];  
	var userCreateLotDescription = document.getElementsByClassName("user_create-lot_description")[0];  
	var userCreateLotOrigin = document.getElementsByClassName("user_create-lot_country-of-origin")[0];  
	var userCreateLotAge = document.getElementsByClassName("user_create-lot_age")[0];  
	var userCreateLotMaterial = document.getElementsByClassName("user_create-lot_material")[0];  
	var userCreateLotPrice = document.getElementsByClassName("user_create-lot_starting-price")[0];  
	var userCreateLotTime = document.getElementsByClassName("user_create-lot_auction-time")[0];  
	var userCreateLotOrigin_data = document.getElementsByClassName("user_create-lot_country-of-origin_data")[0];  
	var userCreateLotMaterial_data = document.getElementsByClassName("user_create-lot_material_data")[0];   
	
	var userAuctionPage = document.getElementsByClassName("auction")[0]; 
	var placeBetButton = document.getElementsByClassName("button_place-a-bet"); 
	
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
						
				'<div class="lot-page_timer lot-timer">' + 
					'00:00:00' +
				'</div>' + 
						
				'<p class="miscellaneous-text text_user-place-a-bet">' +
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
		
	var lotAfterSearchTemplate = 
		'<button type="button" class="breadcrumbs_button return-to-main_button">' +
			'<div>' +
				'Главная' +
			'</div>' + 
		'</button>' + 
		
		'<div class="breadcrumbs_arrow return-to-search_arrow">' +   
		'</div>' +
			
		'<button type="button" class="breadcrumbs_button return-to-search_button">' +   
			'<div>' +   
				'Результаты поиска' +  
			'</div>' +    
		'</button>' +   
					
		'<div class="breadcrumbs_arrow return-to-search_arrow">' +   
		'</div>' + 
		
		'<div class="breadcrumbs_current">' +
			'Страница лота' +
		'</div>';  	
		
	var lotExitSearchTemplate = 
		'<button type="button" class="breadcrumbs_button return-to-main_button">' +
			'<div>' +
				'Главная' +
			'</div>' + 
		'</button>' + 
					
		'<div class="breadcrumbs_arrow return-to-search_arrow">' +   
		'</div>' + 
		
		'<div class="breadcrumbs_current">' +
			'Страница лота' +
		'</div>';  	
		
	var lotFromProfileTemplate = 
		'<button type="button" class="breadcrumbs_button return-to-main_button">' +
			'<div>' +
				'Главная' +
			'</div>' + 
		'</button>' + 
		
		'<div class="breadcrumbs_arrow return-to-search_arrow">' +   
		'</div>' +
			
		'<button type="button" class="breadcrumbs_button return-to-user-profile-button">' +   
			'<div>' +  
				'Мой профиль' +  
			'</div>' +   
		'</button>' +  
					
		'<div class="breadcrumbs_arrow return-to-search_arrow">' +   
		'</div>' + 
		
		'<div class="breadcrumbs_current">' +
			'Страница лота' +
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
			
			'<div class="main-page_lot_timer lot-timer">' +    
				'00:00:00' +   
			'</div>' +    
			
			'<p class="miscellaneous-text text_user-place-a-bet">' +   
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
						'<option selected="selected" value="coins" data-type="coin">' +  
							'Монеты и медали' +  
						'</option>' +   
						
						'<option value="books" data-type="book">' +  
							'Старинные книги' +  
						'</option>' +   
						
						'<option value="antique" data-type="antique">' +  
							'Антиквариат' +  
						'</option>' +   
						
						'<option value="paintings" data-type="painting">' +  
							'Картины' +  
						'</option>' +   
						
						'<option value="postage-stamps" data-type="postage-stamp">' +  
							'Почтовые марки' +  
						'</option>' +   
					'</select>' +   
				'</div>' +   	

				'<p class="miscellaneous-text">' +  
					'Заголовок:' +   
				'</p>' +   
				
				'<div class="user_create-lot_description_container">' +  
					'<input type="text" class="user_create-lot_title" placeholder="Шилинг">' +   
				'</div>' +   
				
				'<p class="miscellaneous-text">' +  
					'Описание предмета:' +   
				'</p>' +   
				
				'<div class="user_create-lot_description_container">' +  
					'<input type="text" class="user_create-lot_description" placeholder="1 Шилинг XIV века">' +   
				'</div>' +   
				
				'<p class="miscellaneous-text">' +  
					'Страна происхождения (на русском и английском языке):' + 
				'</p>' +   
				
				'<div class="user_create-lot_country-of-origin_container">' +  
					'<input type="text" class="user_create-lot_country-of-origin" placeholder="Англия">' +   
				'</div>' +   
				
				'<div class="user_create-lot_country-of-origin_container">' +  
					'<input type="text" class="user_create-lot_country-of-origin_data" placeholder="England">' +   
				'</div>' +   
				
				'<p class="miscellaneous-text">' +  
					'Век происхождения:' +   
				'</p>' +   
				
				'<div class="user_create-lot_age_container">' +  
					'<select class="user_create-lot_age" title="Укажите век происхождения">' +   
						'<option selected="selected" value="XIV век" data-type="14th-century">' +  
							'XIV' +  
						'</option>' +   
						
						'<option value="XV век" data-type="15th-century">' +  
							'XV' +  
						'</option>' +   
						
						'<option value="XVI век" data-type="16th-century">' +  
							'XVI' +  
						'</option>' +  
						
						'<option value="XVII век" data-type="17th-century">' +  
							'XVII' +  
						'</option>' +  
						
						'<option value="XVIII век" data-type="18th-century">' +  
							'XVIII' +  
						'</option>' +   
						
						'<option value="XIX век" data-type="19th-century">' +  
							'XIX' +  
						'</option>' +   
						
						'<option value="XX век" data-type="20th-century">' +  
							'XX' +   
						'</option>' +  
						
						'<option value="XXI век" data-type="21st-century">' +  
							'XXI' +   
						'</option>' +  
					'</select>' +   
				'</div>' +   
				
				'<p class="miscellaneous-text">' +  
					'Материал (опционально) (на русском и английском языке):' +   
				'</p>' +   
				
				'<div class="user_create-lot_material_container">' +  
					'<input type="text" class="user_create-lot_material" placeholder="Золото">' +   
				'</div>' +   
				
				'<div class="user_create-lot_material_container">' +  
					'<input type="text" class="user_create-lot_material_data" placeholder="Gold">' +   
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
					'<input type="file" id="download-image_1" class="download-image download-image_1">' +  
					'</input>' +   
					
					'<div class="download-image_wrapper">' +  
						'<p>' +  
						'<label for="download-image_1" class="download-image_label">Основное изображение</label>' +   
						'</p>' +  
					'</div>' +  
					
					'<input type="file" id="download-image_2" class="download-image download-image_2">' +  
					'</input>' +   
					
					'<div class="download-image_wrapper">' +  
						'<p>' +  
						'<label for="download-image_2" class="download-image_label">Дополнительное изображение</label>' +   
						'</p>' +  
					'</div>' +   
					
					'<input type="file" id="download-image_3" class="download-image download-image_3">' +  
					'</input>' + 
					
					'<div class="download-image_wrapper">' +  
						'<p>' +  
						'<label for="download-image_3" class="download-image_label">Дополнительное изображение</label>' +   
						'</p>' +  
					'</div>' +   
				'</div>' +  
				
				'<div>' +   
					'<button type="button" class="button button_create-lot">' +  
						'Создать лот!' +  
					'</button>' +  
				'</div>' +  
			'</form>' +  
		'</div>'; 
		
	var userLotPreviewTemplate = 
		'<div class="user_lot_image-window">' + 
			'<img src="" alt="" class="user_lot_lot-image">' + 
		'</div>' + 
		
		'<div class="user_lot-information">' + 
			'<p class="user_lot-information_title">' + 
			'</p>' + 
		'</div>'; 
		
	var userHistoryPreviewTemplate = 
		'<div class="user_lot_image-window">' + 
			'<img src="" alt="" class="user_lot_lot-image">' + 
		'</div>' + 
		
		'<div>' +  
			'<div class="user_lot-information">' + 
				'<p class="user_lot-information_title">' + 
				'</p>' + 
			'</div>' + 
			
			'<div class="user_lot-information_status_wrapper">' + 
				'<p class="user_lot-information_status">' + 
				'</p>' + 
			'</div>' + 
		'</div>'; 
		
	var userAuctionTemplate =
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
				'Аукцион' +  
			'</div>' +   
		'</div>' +   
				
		'<h1 class="heading_1">' +   
			'Аукцион' +  
		'</h1>' +   
		
		'<h2 class="heading_2 current-lot-title">' +   
		'</h2>' +  
		
		'<h2 class="heading_2 current-lot-starting-price">' +     
		'</h2>' +  
		
		'<h2 class="heading_2">' +   
				'Предложения участников:' +   
		'</h2>' +  
		
		'<div class="auction_participants">' +  
			'<div class="auction_participant">' +  
				'<p class="auction_participant_name auction_participant_1_name">' +  
					'Учасник 1' +  
				'</p>' +  
				
				'<div class="auction_participant_bet">' +  
					'<p class="auction_participant_bet_container auction_participant_1_bet">' +  
					'</p>' +  
				'</div>' +  
			'</div>' +  
			
			'<div class="auction_participant">' +  
				'<p class="auction_participant_name auction_participant_2_name">' +  
					'Учасник 2' +  
				'</p>' +  
				
				'<div class="auction_participant_bet">' +  
					'<p class="auction_participant_bet_container auction_participant_2_bet">' +  
					'</p>' +  
				'</div>' +   
			'</div>' +  
			
			'<div class="auction_participant">' +  
				'<p class="auction_participant_name auction_participant_3_name">' +  +  
				'</p>' +  
				
				'<div class="auction_participant_bet">' +  
					'<p class="auction_participant_bet_container auction_participant_3_bet">' +  
					'</p>' +  
				'</div>' +   
			'</div>' +  
		'</div>' +  
		
		'<h2 class="heading_2">' +  
			'Победитель' +  
		'</h2>' +   
		
		'<div class="auction_participant">' +   
			'<p class="auction_participant_name auction_participant_winner">' +  
				'Вы' +  
			'</p>' +  
				
			'<div class="auction_participant_bet">' +  
				'<p class="auction_participant_bet_container auction_participant_winner_bet">' +  
					'30.00 USD' +  
				'</p>' +   
			'</div>' +   
		'</div>';

	var searchResultTemplate = 
		'<div class="search-result_lot_image-window">' +    
			'<img src="" alt="" class="search-result_lot-image">' +    
		'</div>' +   
		
		'<div class="search-result_lot-information">' +     
			'<p class="search-result_lot-information_description">' +    
			'</p>' +    
			
			'<p class="miscellaneous-text">' +   
				'Стартовая цена:' +    
			'</p>' +    
			
			'<p class="search-result_lot_starting-price">' +      
			'</p>' +         
		'</div>' +         
		
		'<div class="search-result_lot_timer_wrapper">' +         
			'<div class="search-result_lot_timer lot-timer">' +    
				'00:00:00' +   
			'</div>' +   
		'</div>';  
		
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
		var interactiveElements = document.getElementsByClassName("interactive");  
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
	
	function changeBreadcrumbs(){
		Array.prototype.slice.call(lotsPages).forEach(function(obj){
			obj.getElementsByClassName("breadcrumbs")[0].innerHTML = ""; 
			obj.getElementsByClassName("breadcrumbs")[0].innerHTML = lotExitSearchTemplate; 
		});
		
		handleEvents(returnToMainPage, showMainPage); 
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
	
	handleEvents(returnToSearchPage, showSearchResultsPage); 
	
	filtersListButton.addEventListener("click", function(){
		filtersListAnimation();
	}, false);  
	
	
	
	handleEvents(registerNewUser, registerUser);
	
	function registerUser() {
		
/* 		localStorage.removeItem("users");  	  */										
		
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
 			createUserProfilePreviews();  
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
		handleEvents(userCreateNewLotButton, createNewLot); 
	};  
	

	function createNewLot() {
 		var initialContent = []; 
		
		var userCreateLotType = document.getElementsByClassName("user_create-lot_type")[0];  
		var userCreateLotTitle = document.getElementsByClassName("user_create-lot_title")[0];  
		var userCreateLotDescription = document.getElementsByClassName("user_create-lot_description")[0];  
		var userCreateLotOrigin = document.getElementsByClassName("user_create-lot_country-of-origin")[0];  
		var userCreateLotAge = document.getElementsByClassName("user_create-lot_age")[0];  
		var userCreateLotMaterial = document.getElementsByClassName("user_create-lot_material")[0];  
		var userCreateLotPrice = document.getElementsByClassName("user_create-lot_starting-price")[0];  
		var userCreateLotTime = document.getElementsByClassName("user_create-lot_auction-time")[0];  
		var userCreateLotOrigin_data = document.getElementsByClassName("user_create-lot_country-of-origin_data")[0];  
		var userCreateLotMaterial_data = document.getElementsByClassName("user_create-lot_material_data")[0];  
		
		var userProfileLots = document.getElementsByClassName("user-profile_lots-list")[0]; 
			
 		var selectedType = userCreateLotType[userCreateLotType.selectedIndex].getAttribute("data-type"); 
		var title = userCreateLotTitle.value.toLowerCase(); 
		var description = userCreateLotDescription.value.toLowerCase(); 
		var origin = userCreateLotOrigin.value.toLowerCase(); 
		var selectedAge = userCreateLotAge[userCreateLotAge.selectedIndex].value; 
		var material = userCreateLotMaterial.value.toLowerCase(); 
		var startingPrice = userCreateLotPrice.value.toLowerCase(); 
		var auctionTime = userCreateLotTime.value.toLowerCase(); 
		var data_selectedAge = userCreateLotAge[userCreateLotAge.selectedIndex].getAttribute("data-type"); 
		var data_origin = userCreateLotOrigin_data.value.toLowerCase(); 
		var data_material = userCreateLotMaterial_data.value.toLowerCase(); 
		
		var newLotCharacteristics = [selectedType, title, description, origin, selectedAge, startingPrice, auctionTime, data_selectedAge, data_origin]; 
		
  		var userCreateLotImage_1 = document.getElementsByClassName("download-image_1")[0].files[0];  
		var userCreateLotImage_2 = document.getElementsByClassName("download-image_2")[0].files[0];  
		var userCreateLotImage_3 = document.getElementsByClassName("download-image_3")[0].files[0];  
		
		var image_1, image_2, image_3; 
		
		window.URL = window.URL || window.webkitURL; 
		
		if (userCreateLotImage_1) {
			image_1 = window.URL.createObjectURL(userCreateLotImage_1); 
			
			image_1.onload = function() {
				window.URL.revokeObjectURL(this);
			}; 
		}; 
		
		if (userCreateLotImage_2) {
			image_2 = window.URL.createObjectURL(userCreateLotImage_2); 
			
			image_2.onload = function() {
				window.URL.revokeObjectURL(this);
			}; 
		}; 
		
		if (userCreateLotImage_3) {
			image_3 = window.URL.createObjectURL(userCreateLotImage_3); 
			
			image_3.onload = function() {
				window.URL.revokeObjectURL(this);
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
		
		if (!newLotCharacteristics.every(function(obj) {
			return (obj !== "" && obj !== undefined); 
		})) {
			userNewLotIssuesMessage.innerHTML = "Вы не заполнили форму <br> Попробуйте еще раз!"; 
			return userNewLotIssuesMenu();
		}; 
 						
		initialContent = JSON.parse(localStorage.getItem("content")); 
		
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
		
		Array.prototype.slice.call(lotsPages).forEach(function(obj){
			obj.parentNode.removeChild(obj);
		});
		
		localStorage.setItem("content", JSON.stringify(initialContent)); 
		
		createLotsPreviews(); 
		createLotsPages(); 
 		createUserProfilePreviews();  
		timers(); 
		
		clearFormFields();  
		
		showMainPage(); 
	}; 

	
	function createUserProfilePreviews() {
		var initialContent = [];
		var userProfileLots = document.getElementsByClassName("user-profile_lots-list")[0]; 
		var userProfileHistory = document.getElementsByClassName("user-profile_history-list")[0]; 
		var fragment = document.createDocumentFragment(); 
		
		initialContent = JSON.parse(localStorage.getItem("content")); 
		
		initialContent.forEach(function(elem){
			if (elem.user === currentUser) {
				var userProfilePreview = document.createElement("div"); 
				
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
		
		initialContent.forEach(function(elem){
			if (elem.lot_auction_participants === currentUser) {
				var userProfilePreview = document.createElement("div"); 
				
				userProfilePreview.classList.add("user-lot_preview"); 
				userProfilePreview.setAttribute("data-lot", elem.lot_number); 
				userProfilePreview.setAttribute("user", currentUser); 
				userProfilePreview.innerHTML = userHistoryPreviewTemplate; 
				userProfilePreview.getElementsByClassName("user_lot_lot-image")[0].src = elem.image_1_src; 
				userProfilePreview.getElementsByClassName("user_lot-information_title")[0].innerHTML = elem.title; 
				
				if (elem.lot_winner === currentUser) {
					userProfilePreview.getElementsByClassName("user_lot-information_status")[0].innerHTML = "Выиграл"; 
					userProfilePreview.getElementsByClassName("user_lot-information_status_wrapper ")[0].setAttribute("style", "border: 1px solid rgb(90, 90, 90); background-image: linear-gradient(to bottom, rgb(255, 140, 25), rgb(202, 98, 11));"); 
				} else {
					userProfilePreview.getElementsByClassName("user_lot-information_status")[0].innerHTML = "Проиграл"; 
					userProfilePreview.getElementsByClassName("user_lot-information_status_wrapper ")[0].setAttribute("style", "border: 1px solid rgb(90, 90, 90); background-image: linear-gradient(to bottom, rgb(220, 220, 220), rgb(120, 120, 120));"); 
				}; 
				
				fragment.appendChild(userProfilePreview);  
			}; 
		}); 
		
		userProfileHistory.innerHTML = ""; 
		userProfileHistory.appendChild(fragment); 

		manageUserProfilePreviews();
	}; 
	
	function manageUserProfilePreviews() {
		var currentLot;
		var selectedLotPage; 
		var userProfileLotsPreviews = document.getElementsByClassName("user-lot_preview"); 
						
		Array.prototype.slice.call(userProfileLotsPreviews).forEach(function(obj){
			obj.addEventListener("click", function(e) {
				if (obj.hasAttribute("data-lot")) {
					currentLot = obj.getAttribute("data-lot"); 
				}; 
				
				Array.prototype.slice.call(lotsPages).forEach(function(obj){
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
		var initialContent = [];
		var fragment = document.createDocumentFragment(); 
		var auctionPage = document.getElementsByClassName("auction")[0]; 
		var placeBetButton = document.getElementsByClassName("button_place-a-bet"); 
		var userBetField = document.getElementsByClassName("user-bet"); 
		var currentLot;
		var currentLotStartingPrice;
		var currentLotTitle;
		var userBet; 
		
		initialContent = JSON.parse(localStorage.getItem("content")); 
		
		function addStandartLotAttributes(elem) {
			elem.classList.add("auction");
			elem.classList.add("display-hidden");
			elem.classList.add("interactive");
		}; 
		
		Array.prototype.slice.call(userBetField).forEach(function(obj){
			obj.addEventListener("click", function(e) {
				e.stopPropagation(); 
			}); 
		}); 
		
		Array.prototype.slice.call(placeBetButton).forEach(function(obj){
			obj.addEventListener("click", function(e) {
				e.stopPropagation(); 
				e.preventDefault(); 
				
				if (currentUser === "logged-out") {
					userIssuesMessage.innerHTML = "Для участия в аукционе Вы должны зайти на сайт под своим логином и паролем"; 
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
					userIssuesMessage.innerHTML = "Вы не ввели свою ставку"; 
					return userIssuesMenu(); 
				}; 
				
				if (userBet < currentLotStartingPrice) {
					userIssuesMessage.innerHTML = "Нельзя сделать ставку меньше стартовой стоимости"; 
					return userIssuesMenu(); 
				}; 
				
				auctionPage.getElementsByClassName("current-lot-title")[0].innerHTML = currentLotTitle; 
				auctionPage.getElementsByClassName("current-lot-starting-price")[0].innerHTML = "Стартовая цена: $" + currentLotStartingPrice; 
				
				var participant_1_bet = Math.round(Math.random(currentLotStartingPrice) + currentLotStartingPrice); 
				var participant_2_bet = Math.round(Math.random(currentLotStartingPrice) + currentLotStartingPrice); 
				
				auctionPage.getElementsByClassName("auction_participant_1_bet")[0].innerHTML = "$" + participant_1_bet; 
				auctionPage.getElementsByClassName("auction_participant_2_bet")[0].innerHTML = "$" + participant_2_bet; 
				auctionPage.getElementsByClassName("auction_participant_3_bet")[0].innerHTML = "$" + userBet; 
				auctionPage.getElementsByClassName("auction_participant_3_name")[0].innerHTML = currentUser; 
				
				var auctionParticipants = [
				{
					participant_name: "Участник 1", 
					participant_bet: participant_1_bet
				}, 
				
				{
					participant_name: "Участник 2", 
					participant_bet: participant_2_bet	
				}, 
				{
					participant_name: currentUser, 
					participant_bet: userBet
				} 
				]; 
				
				auctionParticipants.sort(function(a,b){
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
				
				Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
					if(parseInt(obj.getAttribute("data-lot")) === currentLot) {
						obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
						obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
						obj.getElementsByClassName("main-page_lot_enter-price")[0].setAttribute("type", "hidden"); 
						obj.getElementsByClassName("lot-timer")[0].innerHTML = ""; 
					}; 
				});
				
				Array.prototype.slice.call(lotsPages).forEach(function(obj){
					if(parseInt(obj.getAttribute("data-lot")) === currentLot) {
						obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
						obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
						obj.getElementsByClassName("lot-page_enter-price")[0].setAttribute("type", "hidden"); 
						obj.getElementsByClassName("lot-timer")[0].innerHTML = ""; 
					}; 
				}); 
				
				localStorage.setItem("content", JSON.stringify(initialContent));
				
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

	
	
	addInitialContent(); 
	createLotsPreviews(); 
	createLotsPages(); 
	
	function createLotsPages() {
		var initialContent = [];
		var fragment = document.createDocumentFragment(); 
		
		initialContent = JSON.parse(localStorage.getItem("content")); 
		
		function addStandartLotAttributes(elem) {
			elem.classList.add("lot-page");
			elem.classList.add("display-hidden");
			elem.classList.add("interactive");
			elem.setAttribute("data-lot", i + 1); 
		}; 
		
		for (var i = 0; i < initialContent.length; i += 1) {
			var lotPage = document.createElement("section"); 
			
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
				lotPage.getElementsByClassName("lot-page_main-image-window")[0].setAttribute("style", "position: relative; width: 400px; height: 400px; background-color: rgb(232, 118, 21);"); 
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
				lotPage.getElementsByClassName("lot-page_timer")[0].setAttribute("style", "background-image: linear-gradient(to bottom, rgb(220, 220, 220), rgb(120, 120, 120)); font-weight: normal; font-size: 1em; color: rgb(0, 0, 0); line-height: 1.2em;");
				lotPage.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 
				lotPage.getElementsByClassName("lot-page_enter-price")[0].setAttribute("type", "hidden"); 
				lotPage.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
			}; 
			
			fragment.appendChild(lotPage); 
			
			initialContent[i].lot_number = i + 1; 
		};
		
		mainWrapper.insertBefore(fragment, footer); 
		
		handleEvents(returnToMainPage, showMainPage); 
		
		localStorage.setItem("content", JSON.stringify(initialContent)); 
		
		handleLotPageImages(); 
		
 		userParticipateInAuction();  
	}; 
	
		
	function handleLotPageImages() {
		var currentLot; 
		var imageSrc; 
		
		Array.prototype.slice.call(lotPageImages).forEach(function(obj){
			obj.addEventListener("click", function(e) {
				
				imageSrc = e.target.src; 
				
				currentLot = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("data-lot"); 
				
				Array.prototype.slice.call(lotsPages).forEach(function(obj){
					if (obj.getAttribute("data-lot") === currentLot) {
						obj.getElementsByClassName("lot-page_main-image")[0].src = imageSrc; 
					}; 
				});
				
				e.preventDefault();  
			}, false); 
		}); 
	}; 
		
	
	function createLotsPreviews() {
		var initialContent = [];
		var fragment = document.createDocumentFragment(); 
		
		initialContent = JSON.parse(localStorage.getItem("content")); 
		
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
			var lotPreview = document.createElement("div"); 
			
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
				lotPreview.getElementsByClassName("main-page_lot_image-window")[0].setAttribute("style", "position: relative; width: 200px; height: 200px; background-color: rgb(232, 118, 21);"); 
			}; 
			
			if (initialContent[i].timer !== 0) {
				lotPreview.getElementsByClassName("main-page_lot_timer")[0].innerHTML = initialContent[i].timer; 
			} else {
				lotPreview.getElementsByClassName("main-page_lot_timer")[0].innerHTML = "Торги закончены"; 
				lotPreview.getElementsByClassName("main-page_lot_timer")[0].setAttribute("style", "background-image: linear-gradient(to bottom, rgb(220, 220, 220), rgb(120, 120, 120)); font-weight: normal; font-size: 1em; color: rgb(0, 0, 0); line-height: 1.2em;");
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
		var currentLot;
		var selectedLotPage; 
						
		Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
			obj.addEventListener("click", function(e) {
				e.preventDefault();  
				
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
 				listFragmentWrapper.getElementsByClassName("filters-list_checkbox")[0].checked = true;  
				
				listFragment.appendChild(listFragmentWrapper); 
				filtersListWrapper.getElementsByClassName("filters-list_filters-list")[0].appendChild(listFragment); 			
			}; 

			fragment.appendChild(filtersListWrapper); 
		}; 
		
		filtersListMenu.appendChild(fragment); 
	};  
	
	
	function manageLotsPreviews() {
		
		function displayLotsPreviews(elem) {
			if (elem.getAttribute("data-current-selected") === "current-selected") {
				showElements(elem); 
			} else {
				hideElements(elem); 
			}; 
		}; 
		
		Array.prototype.slice.call(mainPageMainFilters).forEach(function(mainFilter){
			mainFilter.addEventListener("click", function(e) {
				Array.prototype.slice.call(mainPageMainFilters).forEach(function(obj){
					obj.classList.remove("lots-groups_current-selected"); 
				}); 
				
				e.target.classList.add("lots-groups_current-selected"); 
				
				filtersListMenu.innerHTML = ""; 
				
				Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
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
		
		
		manageAsideFlitersList(); 
		
		function manageAsideFlitersList() {
			Array.prototype.slice.call(filtersListCheckboxes).forEach(function(currentCheckbox){
				currentCheckbox.addEventListener("change", function(e) {
					
					Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
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
		
 		manageLotsPreviewsPages();   
	
		function manageLotsPreviewsPages() {
			var visibleLotsPreviews = []; 
			var currentContentPreviewPage = "1"; 
						
			function collectVisibleLotsPreviews() {
				visibleLotsPreviews = []; 
					
				Array.prototype.slice.call(lotsPreviews).forEach(function(obj){ 
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
				visibleLotsPreviews.forEach(function(obj){	
					if (obj.getAttribute("data-current-preview-page") !== currentContentPreviewPage) {
						obj.classList.add("preview_display-hidden"); 
					} else if (obj.getAttribute("data-current-preview-page") === currentContentPreviewPage) {
						obj.classList.remove("preview_display-hidden"); 
					}; 
				}); 
			}; 
			
 			showCurrentContentPage();                                                                                
						
			var contentPreviewPages = Math.ceil(visibleLotsPreviews.length / 6); 
			var fragment = document.createDocumentFragment(); 
			
			for (var i = 1; i <= contentPreviewPages; i += 1) {
				var contentPreviewPage = document.createElement("button");
				
				contentPreviewPage.classList.add("content-preview-page"); 
				contentPreviewPage.setAttribute("type", "button"); 
				contentPreviewPage.setAttribute("data-current-preview-page", i); 
				contentPreviewPage.innerHTML = i; 
				
				fragment.appendChild(contentPreviewPage); 
			}; 
			
 			lotsPreviewsPagesBlock.innerHTML = ""; 		
			lotsPreviewsPagesBlock.appendChild(fragment);  
						
			Array.prototype.slice.call(lotsPreviewsPages).forEach(function(currentPage){
				currentPage.addEventListener("click", function(e) {
					currentContentPreviewPage = e.target.getAttribute("data-current-preview-page");
					
 					showCurrentContentPage();                                                                    
					
					e.preventDefault(); 
				}, false); 
			}); 
		}; 
	}; 

	
	
 	handleEvents(headerSearchButton, showSearchResults);  
	
 	function showSearchResults() {
		var initialContent = [];
		var initialContentInformation = [];
		var fragment = document.createDocumentFragment(); 
		
		var searchQuery = headerSearchText.value; 
		var searchSelectedOption = headerSearchOptions[headerSearchOptions.selectedIndex].getAttribute("data-type"); 
		
		var findedLots = []; 
		
 		if (searchQuery === "") {
			userIssuesMessage.innerHTML = "Вы не ввели поисковый запрос <br> Попробуйте еще раз!"; 
			clearFormFields(); 
			return userIssuesMenu();
		};  
		
		subjectOfSearch.innerHTML = "Вы искали: " + searchQuery; 
					
		searchQuery = searchQuery.toString().toLocaleLowerCase().replace(/[^\w\u0400-\u04FF]/g, ' ').trim().split(' ');  
		
		searchQuery = searchQuery.filter(clearArray); 
		
		function clearArray(elem){
			return /\S/.test(elem);
		}; 
		
		function clearFormFields() {
			headerSearchText.value = ""; 
		}; 
		
 		initialContent = JSON.parse(localStorage.getItem("content")); 
		
		for (var i = 0; i < initialContent.length; i += 1) {
			for (var prop in initialContent[i]) {
				initialContentInformation = initialContent[i][prop].toString().toLocaleLowerCase().replace(/[^\w\u0400-\u04FF]+/ig, ' ').trim().split(' '); 
				initialContentInformation = initialContentInformation.filter(clearArray); 
				
				initialContentInformation.forEach(function(x) {
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
			userIssuesMessage.innerHTML = "По Вашему запросу ничего не найдено <br> Попробуйте еще раз!"; 
			clearFormFields(); 
			return userIssuesMenu();
		}; 
		
		function trimUnique(arr) {
			var seen = {}; 
			
			arr.sort(compare); 
			
			function compare(a,b) {
				return (a - b); 
			}; 
			
			return arr.filter(function(x) {
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
		
		handleEvents(returnToMainPage, showMainPage); 
 				
 		manageSearchPreviews(); 
		
 		showSearchResultsPage(); 
	}; 
	
	function manageSearchPreviews() {
		var currentLot;
		var selectedLotPage; 
						
		Array.prototype.slice.call(searchPreviews).forEach(function(obj){
			obj.addEventListener("click", function(e) {
				if (obj.hasAttribute("data-lot")) {
					currentLot = obj.getAttribute("data-lot"); 
				}; 
				
				Array.prototype.slice.call(lotsPages).forEach(function(obj){
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
		var timers = document.getElementsByClassName("lot-timer"); 
		
		var currentContent = JSON.parse(localStorage.getItem("content")); 
		
		Date.prototype.addDays = function(days) {
			var dat = new Date(this.valueOf());
			dat.setDate(dat.getDate() + days);
			return dat;
		}; 

		var dat = new Date();
		
		Array.prototype.slice.call(timers).forEach(function(obj){
			var currentLot = parseInt(obj.getAttribute("data-lot"));
			var timeLeft; 
			
			for (var i = 0; i < currentContent.length; i += 1) {
				if (parseInt(currentContent[i].lot_number) === currentLot) {
					timeLeft = parseInt(currentContent[i].timer / 24); 
					
					var countDownDate = dat.addDays(timeLeft);
					
					if (clearInterval(x)) {
						clearInterval(x); 
					}; 
					
					if (clearInterval(y)) {
						clearInterval(y); 
					}; 
					
					var distance, days, hours, minutes, seconds; 
					
					var x = setInterval(function() {

						var now = new Date().getTime();

						distance = countDownDate - now;

						days = Math.floor(distance / (1000 * 60 * 60 * 24));
						hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						seconds = Math.floor((distance % (1000 * 60)) / 1000);

						obj.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

						if (distance < 0) {
							clearInterval(x);
							clearInterval(y);
							obj.innerHTML = "Торги закончены";
							obj.setAttribute("style", "background-image: linear-gradient(to bottom, rgb(220, 220, 220), rgb(120, 120, 120)); font-weight: normal; font-size: 1em; color: rgb(0, 0, 0); line-height: 2.5em;");
						
							Array.prototype.slice.call(lotsPreviews).forEach(function(obj){
								if(parseInt(obj.getAttribute("data-lot")) === currentLot) {
									obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
									obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
									obj.getElementsByClassName("main-page_lot_enter-price")[0].setAttribute("type", "hidden"); 
								}; 
							});
							
							Array.prototype.slice.call(lotsPages).forEach(function(obj){
								if(parseInt(obj.getAttribute("data-lot")) === currentLot) {
									obj.getElementsByClassName("button_place-a-bet")[0].setAttribute("type", "hidden"); 					
									obj.getElementsByClassName("text_user-place-a-bet")[0].innerHTML = ""; 
									obj.getElementsByClassName("lot-page_enter-price")[0].setAttribute("type", "hidden"); 
								}; 
							});
						}; 
					}, 1000);
					
					var y = setInterval(function() {
						for (var i = 0; i < currentContent.length; i += 1) {
							if (parseInt(currentContent[i].lot_number) === currentLot) {
								currentContent[i].timer = parseInt(days * 24); 
								localStorage.setItem("content", JSON.stringify(currentContent));
							}; 
						}; 
						
						if (distance < 0) {
							clearInterval(y);
						}; 
					}, 10000); 
				}; 
			}; 
		}); 
	}; 
	
	timers(); 
			


	function addInitialContent(){
		
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
				timer: 24
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
				timer: 100
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
				timer: 200
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
				timer: 300
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
				timer: 150
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
				timer: 220
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
				timer: 110
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
				timer: 50
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
				timer: 80
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
				timer: 90
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
				timer: 34
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
				timer: 12
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
				timer: 260
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
				timer: 56
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
				timer: 125
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
				timer: 321
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
				timer: 544
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
				timer: 70
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
				timer: 90
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
				timer: 150
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
				timer: 112
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
				timer: 234
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
				timer: 21
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
				timer: 16
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
				timer: 75
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
				timer: 61
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
				timer: 38
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
				timer: 74
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
				timer: 101
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
				timer: 32
			},	
			{ 
				type: "postage-stamp", 
				title: "САН-МАРИНО 1892 1L КАТАЛОГ 500 ЕВРО", 
				description: "САН-МАРИНО 1892 1L КАТАЛОГ 500 ЕВРО", 
				сountry_of_origin: "Сан-Марино", 
				year_of_manufacture: "XIX век", 
				data_сountry_of_origin: "San-Marino", 
				data_year_of_manufacture: "19th-century", 
				starting_price: "$70.00",
				image_1_src: "../images/Content/Postage-stamps/postage-stamp-3-1.jpg", 
				timer: 9
			},	
			{ 
				type: "postage-stamp", 
				title: "АВСТРАЛИЯ ШТАТЫ 1899 ШТАТ КВИНСЛЕНД", 
				description: "АВСТРАЛИЯ ШТАТЫ 1899 ШТАТ КВИНСЛЕНД", 
				сountry_of_origin: "Австралия", 
				year_of_manufacture: "XIX век", 
				data_сountry_of_origin: "Australia", 
				data_year_of_manufacture: "19th-century", 
				starting_price: "$1.50",
				image_1_src: "../images/Content/Postage-stamps/postage-stamp-4-1.jpg", 
				timer: 10
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
				timer: 58
			}	
		]; 
		
/*  		localStorage.removeItem("content"); */   	 													
		
		if (!localStorage.getItem("content")) {
			localStorage.setItem("content", JSON.stringify(arrayOfInitialContent)); 
		}; 
	}; 

}; 