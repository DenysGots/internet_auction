"use strict";

var lotPageTemplate =
	'<div class="breadcrumbs">' +
		'<button type="button" class="breadcrumbs_button return-to-main_button">' +
			'<div>' +
				'Main Page' +
			'</div>' +
		'</button>' +

		'<div class="breadcrumbs_arrow">' +
		'</div>' +

		'<div class="breadcrumbs_current">' +
			'Lot Page' +
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
				'Description:' +
			'</p>' +

			'<p class="lot-page_description">' +
			'</p>' +

			'<p class="miscellaneous-text">' +
				'Country of Origin:' +
			'</p>' +

			'<p class="lot-page_country-of-origin">' +
			'</p>' +

			'<p class="lot-page_year-of-manufacture">' +
			'</p>' +

			'<p class="miscellaneous-text lot-page_material_text">' +
				'Material of an Object:' +
			'</p>' +

			'<p class="lot-page_material">' +
			'</p>' +

			'<p class="miscellaneous-text">' +
				'Starting price:' +
			'</p>' +

			'<p class="lot-page_starting-price">' +
			'</p>' +

			'<p class="miscellaneous-text">' +
				'Time Left:' +
			'</p>' +

			'<div class="lot-page_timer lot-timer">' +
				'00:00:00' +
			'</div>' +

			'<p class="miscellaneous-text text_user-place-a-bet">' +
				'Place Your Bet:' +
			'</p>' +

			'<form class="lot-page_place-a-bet">' +
				'<input type="number" class="lot-page_enter-price" value="6">' +
				'</input>' +

				'<input type="submit" class="button button_place-a-bet" value="Place a Bet">' +
				'</input>' +
			'</form>' +
		'</div>' +
	'</div>';

var lotAfterSearchTemplate =
	'<button type="button" class="breadcrumbs_button return-to-main_button">' +
		'<div>' +
			'Main Page' +
		'</div>' +
	'</button>' +

	'<div class="breadcrumbs_arrow return-to-search_arrow">' +
	'</div>' +

	'<button type="button" class="breadcrumbs_button return-to-search_button">' +
		'<div>' +
			'Searching Results' +
		'</div>' +
	'</button>' +

	'<div class="breadcrumbs_arrow return-to-search_arrow">' +
	'</div>' +

	'<div class="breadcrumbs_current">' +
		'Lot Page' +
	'</div>';

var lotExitSearchTemplate =
	'<button type="button" class="breadcrumbs_button return-to-main_button">' +
		'<div>' +
			'Main Page' +
		'</div>' +
	'</button>' +

	'<div class="breadcrumbs_arrow return-to-search_arrow">' +
	'</div>' +

	'<div class="breadcrumbs_current">' +
		'Lot Page' +
	'</div>';

var lotFromProfileTemplate =
	'<button type="button" class="breadcrumbs_button return-to-main_button">' +
		'<div>' +
			'Main Page' +
		'</div>' +
	'</button>' +

	'<div class="breadcrumbs_arrow return-to-search_arrow">' +
	'</div>' +

	'<button type="button" class="breadcrumbs_button return-to-user-profile-button">' +
		'<div>' +
			'My Profile' +
		'</div>' +
	'</button>' +

	'<div class="breadcrumbs_arrow return-to-search_arrow">' +
	'</div>' +

	'<div class="breadcrumbs_current">' +
		'Lot Page' +
	'</div>';

var lotPreviewTemplate =
	'<div class="main-page_lot_image-window">' +
		'<img src="" alt="" class="main-page_lot-image">' +
	'</div>' +

	'<div class="main-page_lot-information">' +
		'<p class="main-page_lot-information_description">' +
		'</p>' +

		'<p class="miscellaneous-text">' +
			'Starting Price:' +
		'</p>' +

		'<p class="main-page_lot_starting-price">' +
		'</p>' +

		'<p class="miscellaneous-text">' +
			'Time Left:' +
		'</p>' +

		'<div class="main-page_lot_timer lot-timer">' +
			'00:00:00' +
		'</div>' +

		'<p class="miscellaneous-text text_user-place-a-bet">' +
			'Place Your Bet:' +
		'</p>' +

		'<form class="main-page_lot_place-a-bet">' +
			'<input type="number" class="main-page_lot_enter-price" value="6">' +
			'</input>' +

			'<input type="submit" class="button button_place-a-bet" value="Place a Bet">' +
			'</input>' +
		'</form>' +
	'</div>';

var userProfileTemplate =
	'<div class="breadcrumbs">' +
		'<button type="button" class="breadcrumbs_button return-to-main_button">' +
			'<div>' +
				'Main Page' +
			'</div>' +
		'</button>' +

		'<div class="breadcrumbs_arrow">' +
		'</div>' +

		'<div class="breadcrumbs_current">' +
			'My Profile' +
		'</div>' +
	'</div>' +

	'<h1 class="heading_1 user-name-in-heading">' +
	'</h1>' +

	'<div class="user-profile_lots">' +
		'<h2 class="heading_2">' +
			'My Lots' +
		'</h2>' +

		'<div class="user-profile_lots-list">' +
		'</div>' +
	'</div>' +

	'<div class="user-profile_history">' +
		'<h2 class="heading_2">' +
			'History' +
		'</h2>' +

		'<div class="user-profile_history-list">' +
		'</div>' +
	'</div>' +

	'<div class="user-profile_bets">' +
		'<h2 class="heading_2">' +
			'My Bets' +
		'</h2>' +

		'<div class="user-profile_bets-list">' +
		'</div>' +
	'</div>' +

	'<div class="user-profile_create-lot">' +
		'<button type="button" class="button user-profile_create-lot_button">' +
			'Create New Lot!' +
		'</button>' +
	'</div>';

var userCreateNewLotTemplate =
	'<div class="breadcrumbs">' +
		'<button type="button" class="breadcrumbs_button return-to-main_button">' +
			'<div>' +
				'Main Page' +
			'</div>' +
		'</button>' +

		'<div class="breadcrumbs_arrow">' +
		'</div>' +

		'<button type="button" class="breadcrumbs_button return-to-user-profile-button">' +
			'<div>' +
				'My Profile' +
			'</div>' +
		'</button>' +

		'<div class="breadcrumbs_arrow">' +
		'</div>' +

		'<div class="breadcrumbs_current">' +
			'New Lot' +
		'</div>' +
	'</div>' +

	'<h1 class="heading_1">' +
		'Create New Lot' +
	'</h1>' +

	'<div class="user_create-lot_information">' +
		'<form>' +
			'<p class="miscellaneous-text">' +
				'Select the Item Type:' +
			'</p>' +

			'<div class="user_create-lot_type_container">' +
				'<select class="user_create-lot_type" title="Укажите тип предмета">' +
					'<option selected="selected" value="coins" data-type="coin">' +
						'Coins and Medals' +
					'</option>' +

					'<option value="books" data-type="book">' +
						'Old Books' +
					'</option>' +

					'<option value="antique" data-type="antique">' +
						'Antiques' +
					'</option>' +

					'<option value="paintings" data-type="painting">' +
						'Paintings' +
					'</option>' +

					'<option value="postage-stamps" data-type="postage-stamp">' +
						'Postage Stamps' +
					'</option>' +
				'</select>' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Write a Lot Title:' +
			'</p>' +

			'<div class="user_create-lot_description_container">' +
				'<input type="text" class="user_create-lot_title" placeholder="Шилинг">' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Write Object Description:' +
			'</p>' +

			'<div class="user_create-lot_description_container">' +
				'<input type="text" class="user_create-lot_description" placeholder="1 Шилинг XIV centuryа">' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Specify Country of Origin:' +
			'</p>' +

			'<div class="user_create-lot_country-of-origin_container">' +
				'<input type="text" class="user_create-lot_country-of-origin_data" placeholder="England">' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Specify Century of Origin:' +
			'</p>' +

			'<div class="user_create-lot_age_container">' +
				'<select class="user_create-lot_age" title="Specify Century of Origin">' +
					'<option selected="selected" value="XIV century" data-type="14th-century">' +
						'XIV' +
					'</option>' +

					'<option value="XV century" data-type="15th-century">' +
						'XV' +
					'</option>' +

					'<option value="XVI century" data-type="16th-century">' +
						'XVI' +
					'</option>' +

					'<option value="XVII century" data-type="17th-century">' +
						'XVII' +
					'</option>' +

					'<option value="XVIII century" data-type="18th-century">' +
						'XVIII' +
					'</option>' +

					'<option value="XIX century" data-type="19th-century">' +
						'XIX' +
					'</option>' +

					'<option value="XX century" data-type="20th-century">' +
						'XX' +
					'</option>' +

					'<option value="XXI century" data-type="21st-century">' +
						'XXI' +
					'</option>' +
				'</select>' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Specify Object Material (optional):' +
			'</p>' +

			'<div class="user_create-lot_material_container">' +
				'<input type="text" class="user_create-lot_material_data" placeholder="Gold">' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Specify Starting Price:' +
			'</p>' +

			'<div class="user_create-lot_starting-price_container">' +
				'<input type="number" class="user_create-lot_starting-price">' +
				'</input>' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Specify Length of the Auction:' +
			'</p>' +

			'<div class="user_create-lot_auction-time_container">' +
				'<input type="number" class="user_create-lot_auction-time" placeholder="10">' +
				'</input>' +
			'</div>' +

			'<p class="miscellaneous-text">' +
				'Add Pictures of Your Object' +
			'</p>' +

			'<div class="user_create-lot_add-images">' +
				'<input type="file" id="download-image_1" class="download-image download-image_1">' +
				'</input>' +

				'<div class="download-image_wrapper">' +
					'<p>' +
					'<label for="download-image_1" class="download-image_label">Main Picture</label>' +
					'</p>' +
				'</div>' +

				'<input type="file" id="download-image_2" class="download-image download-image_2">' +
				'</input>' +

				'<div class="download-image_wrapper">' +
					'<p>' +
					'<label for="download-image_2" class="download-image_label">Secondary Picture</label>' +
					'</p>' +
				'</div>' +

				'<input type="file" id="download-image_3" class="download-image download-image_3">' +
				'</input>' +

				'<div class="download-image_wrapper">' +
					'<p>' +
					'<label for="download-image_3" class="download-image_label">Secondary Picture</label>' +
					'</p>' +
				'</div>' +
			'</div>' +

			'<div>' +
				'<button type="button" class="button button_create-lot">' +
					'Create New Lot!' +
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
				'Main Page' +
			'</div>' +
		'</button>' +

		'<div class="breadcrumbs_arrow">' +
		'</div>' +

		'<button type="button" class="breadcrumbs_button return-to-user-profile-button">' +
			'<div>' +
				'My Profile' +
			'</div>' +
		'</button>' +

		'<div class="breadcrumbs_arrow">' +
		'</div>' +

		'<div class="breadcrumbs_current">' +
			'Auction' +
		'</div>' +
	'</div>' +

	'<h1 class="heading_1">' +
		'Auction' +
	'</h1>' +

	'<h2 class="heading_2 current-lot-title">' +
	'</h2>' +

	'<h2 class="heading_2 current-lot-starting-price">' +
	'</h2>' +

	'<h2 class="heading_2">' +
			'Offers of participants:' +
	'</h2>' +

	'<div class="auction_participants">' +
		'<div class="auction_participant">' +
			'<p class="auction_participant_name auction_participant_1_name">' +
				'Participant 1' +
			'</p>' +

			'<div class="auction_participant_bet">' +
				'<p class="auction_participant_bet_container auction_participant_1_bet">' +
				'</p>' +
			'</div>' +
		'</div>' +

		'<div class="auction_participant">' +
			'<p class="auction_participant_name auction_participant_2_name">' +
				'Participant 2' +
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
		'Winner' +
	'</h2>' +

	'<div class="auction_participant">' +
		'<p class="auction_participant_name auction_participant_winner">' +
			'You' +
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
			'Starting price:' +
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
