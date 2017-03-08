const R = require('ramda');

/////////////////////////////////////////////////////  MAIN PAGE  ////////////////////////////////////////////////////////////////////////////
const lng = {
    'ALL'			        	: 'All',
    'FILTER'                    : 'Filter',
    'SITE_TITLE'				: '• ARMENIA (YEREVAN) • SPYUR',
    'ARIAL_AMU'					: 'Download Armenian Unicode <a class="underline" href="/downloads/Armenian_Unicode_Keyboard_Driver.zip" title="Keyboard Driver">Keyboard Driver</a> and <a class="underline" href="/downloads/ArianAMU.zip" title="Font">Font</a>',
    'SPYUR_COMPANY_REGISTR'  	: 'SPYUR INFORMATION SYSTEM',
    'ARMENIA'                   : 'ARMENIA • YEREVAN',
    'BUSINESS_DIRECTORY'        : 'CLASSIFIER OF PRODUCTS/SERVICES',
    'YELLOW_PAGES'              : 'CLASSIFIER OF ACTIVITY TYPES',
    'COMPANY_REGISTRATION'      : 'COMPANY REGISTRATION',
    'ADVERTISEMENTS'            : 'ADDITIONAL WEB PAGES',
    'ABOUT_SPYUR'				: 'About "Spyur"',
    'HOME_YP_TITLE1'			: '16000 companies',
    'HOME_YP_TITLE2'			: 'and organizations',
    'HOME_BD_TITLE1'			: '19000 products',
    'HOME_BD_TITLE2'			: 'and services',
    'COMPANIES'                 : 'Company name',
    'PRODUCT_SERVICE'			: 'Product, service',
    'WHAT'						: 'What',
    'WHERE'						: 'Where',
    'IN_WHAT'					: 'Company/site or product/service or brand',
    'IN_WHERE'					: 'Enter country, region, town, street, house',
    'VIRTUAL_KEYBOARD'			: 'Virtual keyboard',
    'ONLY_BY_NAME'				: 'Only by name',
    'WITH_PHOTO'				: 'With image',
    'COUNTRY_ALL'				: 'All',
    'SEARCH'                    : 'Search',
    'SEARCH_PLACEHOLDER'        : 'Company name, activity, address, phone...',
    'SEARCH_COMPANY'            : 'Search company',
    'SELECT_PRODUCT_SERVICE'    : 'Select the required product/service and press the button "Search company"',
    'ADV_SEARCH'                : 'ADVANCED SEARCH',
    'COMPANIES_TAB'				: 'COMPANIES',
    'TRADEMARKS_TAB'			: 'TRADEMARKS',
    'CONTACTS_TAB'              : 'CONTACTS',
    'ACTIVITIES_TAB'			: 'ACTIVITY',
    'DOCUMENTS_TAB'             : 'DOCUMENTS',
    'OTHER_TAB'                 : 'OTHER',
    'MOST_SEARCHABLE'			: 'MOST SEARCHABLE',
    'PRODUCTS_AND_SERVICES'		: '6 INQUIRIES &nbsp;• &nbsp;30 000 users daily &nbsp;• &nbsp;20 000 companies and organizations',
    'DIRECTORY'                 : 'Directory',
    'CD_EDITION'                : 'PC edition',
    'PHONE_SERVICE'             : 'Phone service',
    'MOBILE_EDITION'            : 'Mobile applications',
    'WEBSITES'                  : 'Website',
    'KOMPASS_ARMENIA'           : 'Kompass Armenia',
    'KOMPASS_DESCRIPTION'		: 'Worldwide B to B company search engine',
    'COPYRIGHT'                 : '<a href="/en/copyright" id="copyright" title="Copyright © Spyur LLC 1997-2015">Copyright © "Spyur" LLC 1997-2015</a>',
    'BOTTOM_HOME_LINK'			: '<a id="created_by" target="_blank" title="Spyur" href="http://www.spyur.am">Home: www.spyur.am</a>',
    'AM'                        : 'Armenian',
    'RU'                        : 'Russian',
    'EN'                        : 'English',
    'logo_space'                : 'LOGO SPACE',
    'free_member'               : 'Free Member',
    'ADD_COMPANY'               : 'Add company',
    'ARM_YELLOW_PAGES'          : 'ARMENIAN YELLOW PAGES',
    'ARM_BUSINESS_DIRECTORY'    : 'ARMENIAN BUSINESS DIRECTORY',
    'SEND_REQUEST_BUTTON'       : 'Send request',
    'LINKS':'Links',
    'DOWNLOAD_UNICODE_KEYBOARD':'Download Armenian Unicode keyboard driver',
    'DOWNLOAD_UNICODE_LETTERS':'Download Armenian Unicode fonts',
/////////////////////////////////////////////////////  SEARCH RESULT  ////////////////////////////////////////////////////////////////////////////

    'SEARCH_RESULTS'			: 'SEARCH RESULT',
    'SEARCH_OUT_OF_ORDER'		: '<font color=red>The search in "What", "Where" fields does not work as the website is being updated. Meanwhile, please use "Advanced search" field.</font>',
    'WHAT_SEARCH_TIME_OVER'			: 'Try to verify the text you entered in "What" field',
    'WHERE_SEARCH_TIME_OVER' 			: 'Try to verify the text you entered in "Where" field',
    'TOTAL_COUNT'				: 'Found %s companies',
    'TOTAL_COUNT_PRODUCT_SERVICE'		  		: '<div id="strong_count" class="strong_count" >Found %d product/services</div><br /><hr class="myclass" style="background: #CCC;" />',
    'TOTAL_COUNT_ACTIVITY_TYPE'		  		: '<div id="strong_count" class="strong_count" >Eound %d activity types</div><br /><hr class="myclass" style="background: #CCC;" />',
    'BACK_TO_SEARCH_RESULT'		: '<font color=#008800><strong>BACK TO COMPANY LIST</strong></font>',
    'SEARCH_RESULT_WITHOUT_MAP'	: 'WITHOUT MAP',
    'SEARCH_RESULT_MAP'			: 'WITH MAP',
    'BY_SPYUR'					: 'BY "SPYUR"',
    'BY_ALPHABET'				: 'BY ALPHABET',
    'YEAR_ESTABLE'			    : 'Year established: %year%',
    'TOTAL_COUNT_TRADE_MARK'	: '<strong style="font-size: 13px;">Found %s trademark</strong><hr style="background: #CCC;" />',
    'TOTAL_COUNT_SEARCH_BD_YP'	: '<strong style="font-size: 13px;">Found %d product/service/activity</strong><hr style="background: #CCC;" />',


    'MISSING_WORDS'				: '%s <font color=red> missing in the database, please correct or change</font>',
    'TRY_SEPARATE'				: '<font color=red>Try to change or reduce the words or search in "What" field by separate words. </br> %s </font>',
    'TRY_SEPARATE_IN_WHERE'		: '<font color=red>Try to change or reduce the words or search in "Where" field by separate words.  </br> %s </font>',
    'TRY_ONE_WORD_IN_WHAT'		: '<font color=red>Try to search <strong>for only one word</strong> in "<strong>What</strong>" field</font>',
    'TRY_ONE_WORD_IN_WHERE'		: '<font color=red>Try to search <strong>for only one word</strong> in "<strong>Where</strong>" field</font>',
    'TRY_ONE_FILD'				: '<font color=red>Try to search <strong>in one field</strong></font>',
    'TRY_ONLY_IN_WHAT'			: '<font color=red>Try to search %s <strong>without "Where"</strong> field</font>',
    'TRY_IN_WHAT'				: '<font color=red>Try to search for %s word in "<strong>What</strong>" field</font>',
    'TRY_IN_WHERE'				: '<font color=red>Try to search for %s word in "<strong>Where</strong>" field</font>',
    'TRY_CORRECT'				: '<font color=red>Try to search with %s word</font>',
    'TRY_CORRECT_IN_WHAT'		: '<font color=red>Try to search with %s word in "<strong>What</strong>" field</font>',
    'TRY_CORRECT_IN_WHERE'		: '<font color=red>Try to search with %s word in "<strong>Where</strong>" field</font>',

    'TRY_CORRECT_IN_FIELD'		: '<font color=red>Try to search with %1const s word in "<strong>%2const s</strong>" field </font>',
    'TRY_IN_OTHER_FIELD'		: '<font color=red>Try another search field</font>',
    'TRY_ONE_WORD_IN_NAME'		: '<font color=red>Try to search <strong>for only one word</strong> in "<strong>Company name</strong>" field</font>',
    'TRY_ONE_WORD_IN_TRADEMARK'	: '<font color=red>Try to search <strong>for only one word</strong> in "<strong>Trademark</strong>" field</font>',
    'TRY_ONE_WORD_IN_PRODUCTS'	: '<font color=red>Try to search <strong>for only one word</strong> in "<strong>Products/services</strong>" field</font>',
    'TRY_ONE_WORD_IN_FIELD'		: '<font color=red>Try to search <strong>for only one word</strong> in "<strong>%s</strong>" field</font>',

    'ON_FILD_SEARCH'			: '<font color=red>Փորձեք որոնել մեկ դաշտով</font>',
    'IN_FIELD'  				: 'դաշտում?',

    'IF_YOUR_ARE_MEAN'			: '<font color=red>Հնարավոր է դուք նկատի ունեիք</font>',
    'YOUAREMEAN_AND_OTHERFIELD'	: 'Փորձեք որոնել մյուս դաշտում Հնարավոր է դուք նկատի ունեիք',

    'FIRM_OLD_NAME'			: 'The company has been found <font style="color: #900">by its old name</font>',
    'FIRM_ALT_NAME'			: 'The company has been found <font style="color: #900">by its alternative name</font>',
    'FIRM_META_NAME'		: 'The company has been found <font style="color: #900">by its name keyword</font>',
    'CLASS_ALT_NAME'			: '<font style="color: #900">%p</font>',
    'OTHER_RESULTS'		    	: '<font color=#008800>OTHER RESULTS: partial match on a single line</font>',
    'OTHER_RESULTS_DIFFERENT'	: '<font color=#008800>OTHER SEARCH RESULTS: match on different lines</font>',
    'OTHER_RESULTS_YES_DESCRIPTION'		    	: 'Որոնումն իրականացվել է միայն <>, <>, <> բառերով',
    'OTHER_RESULTS_NO_DESCRIPTION'		    	: 'Ստուգեք <>, <> բառերի ուղղագրությունը',
    'OTHER_RESULTS_TARASXAL'					: '<font color=#008800>OTHER SEARCH RESULTS: match with a spelling mistake</font>',
    'SEE_MORE'                        : 'See more',
    'SEE_LESS'						: 'Less',
    'NEXT'                      : 'Next',
	'PREVIOS'                   : 'Previous',
/////////////////////////////////////////////////////  ADVANCED SEARCH  ////////////////////////////////////////////////////////////////////////////

    'ADV_SEARCH_TITLE'			: 'Advanced search',
    'ADV_SEARCH_FORM_TITLE'     : 'SEARCH CRITERIA',
    'BACK_ADV_SEARCH_FORM'     	: '<font color=#008800>SEARCH CRITERIA CHANGE</font>',
    'MAIN' 						: 'Basic',
    'FIRM_NAME'					: 'Company name',
    'TRADEMARK'					: 'Trademark',
    'ADV_PRODUCT_SERVICE'		: 'Product, service',
    'MIN_3_CHARS'				: 'Search and select products/services, activity types',
    'GO'						: 'Search product/service',
    'NO_RESULT'					: '<font color=red>I am sorry, your search did not match any items</font>',
    'DISTRIBUTORS'				: 'Export/Import',
    'EXPORTERS'					: 'Exporters',
    'IMPORTERS'					: 'Importers',
    'ADDRESS'					: 'Address',
    'COUNTRY'					: 'Country',
    'REGION'					: 'Marz/district',
    'DISTRICT'					: 'Quarter',
    'TOWN'						: 'Town/village',
    'STREET'					: 'Street',
    'RENAME'					: 'It is renamed',
    'COMMUNITY'					: 'Region',
    'BUILDING'					: 'Building/house',
    'CONTACTS'                  : 'Communication',
    'PHONE'						: 'Telephone',
    'SITE'						: 'Website',
    'EXECUTIVE'					: 'Executive',
    'NAME'						: 'Name',
    'SURNAME'					: 'Surname',
    'WORKING_DAYS'				: 'Working days',
    'MON'						: 'Mon',
    'TUE'						: 'Tue',
    'WED'						: 'Wed',
    'THU'						: 'Thu',
    'FRI'						: 'Fri',
    'SAT'						: 'Sat',
    'SUN'						: 'Sun',
    'WORKING_HOURS'				: 'Working hours',
    'START'						: 'From',
    'END'						: 'To',
    'HOUR_24'					: '24 hours',
    'YEAR_ESTABLISHED'			: 'Year established',
    'OTHER'						: 'Other',
    'WORKERS_COUNT'				: 'Number of employees',
    'PROPERTY_FORM'				: 'Form of ownership',
    'SYMBOL_NUMBER_ERROR'		: 'Enter at least 2 simbols',

/////////////////////////////////////////////////////  "BUSINESS DIRECTORY" AND "YELLOW PAGES"  //////////////////////////////////////////////////////

    'BD_ALPHABET'				: 'Search by alphabetical list of companies',
    'YP_ALPHABET'				: 'Search by alphabetical list of companies',
    'BD_ACTIVITIES_ALPHABET'	: 'Search by alphabetical list of products/services',
    'YP_ACTIVITIES_ALPHABET'	: 'Search by alphabetical list of activity types',
    'BD_ACTIVITIES'				: 'Сlassifier of products/services',
    'YP_ACTIVITIES'				: 'Сlassifier of activity types',
    'NUM_BTN' 					: '0-9',
    'TOTAL_CHECKED' 			: 'Selected classes -',
    'RESET'						: 'Clear',
    'YP_FORM_TITLE' 			: 'SEARCH CRITERIA',
    'BD_FORM_TITLE' 			: 'SEARCH CRITERIA',

/////////////////////////////////////////////////////  COMPANY WEBPAGE  ////////////////////////////////////////////////////////////////////////////

    'MAP_LOCATION'				: 'Map Location',
    'ADD_WEBPAGE'				: 'Additional web page',
    'SEND_BUSINESS_MESSAGE'		: 'Price request',
    'SEND_FREE_MESSAGE'			: 'Free message',
    'SEND_EMAIL'			    : 'send mail',
    'FOTOSHARK'					: 'PHOTOS',
    'VIDEOSHARK'				: 'VIDEOS',
    'OPEN'                      : 'OPEN',
    'CLOSED'                    : 'CLOSED',
    'CALL'                      : 'Call',
    'PHONE_NUMBERS'             : 'Phone',
    'SHOW_ALL_ADDRESSES'        : 'Show all addresses',
    'DIRECTION'                 : 'Direction',
    'COMMUNICATION_MEANS'       : 'Electronic means of communication',
    'ALL_ADDRESSES'             : 'All addresses',
    'ACTIVITY'                  : 'Activity',
    'DOCUMENTS'                 : 'Documents',
    'TRADEMARKS'                : 'Trademarks',
    'INFO_UPDATE_DATE'          : 'Date of information update',
    'KEYWORDS'                  : 'Certain key words',
    'FAX'                       : 'Fax',
    'WORKS'                     : 'works in',
    'PRODUCTS'                  : 'Products',
    //'COMMENT_STATUS'		: array(
    //array(
    //'from':50 ,
    //'to':199 ,
    //"text":'When connecting with the company, please mention "Spyur" as a source of information.'),

    //array(
    //'from':40 ,
    //'to':49 ,
    //"text":'When connecting with the company, please mention "Spyur" as a source of information.'),

    //array(
    //'from':30 ,
    //'to':39 ,
    //"text":'When connecting with the company, please mention "Spyur" as a source of information.'),

    //array(
    //'from':20 ,
    //'to':29 ,
    //"text":'When connecting with the company, please mention "Spyur" as a source of information.'),

    //array(
    //'from':1 ,
    //'to':19 ,
    //"text":'When connecting with the company, please mention "Spyur" as a source of information.'),

    //),

/////////////////////////////////////////////////////  SEND MESSAGE  ////////////////////////////////////////////////////////////////////////////

    'RECEIVER'					: 'Receiver:',
    'SUBJECT'					: 'Subject',
    'BUSINESS_MESSAGE_SUBJECT'	: 'Price request',
    'REQUEST_MESSAGE_SUBJECT'	: 'Request for additional information',
    'REQUEST_MESSAGE_NOTE'		: '<font color=red>Companies who have not an email have been missed out of the list</font>',
    'MESSAGE'					: 'Message text',
    'DEAR'						: 'Dear',
    'THICK_OFF_PRODUCTS'		: '<font color=#8c8c8c>Tick off the products/services you are interested in</font>',
    'CHECK_ALL'					: 'Check All',
    'BEST_REGARDS'				: 'Best regards,',
    'SENDER_INFO'				: "Sender's data",
    'EMAIL'						: 'E-mail',
    'VERIF_CODE'				: 'Verification code',
    'END_OF_FREE_MESSAGE'		: '<em>The letter has been sent by means of <a href="http://www.spyur.am">www.spyur.am</a> website</em>',
    'SEND'						: 'Send',
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'ERROR_SENDER_FIRM_NAME_LONG'			:'<font color=red>The company name is too long. It must not exceed 100 symbols</font> ',

    'ERROR_SENDER_NAME_LONG'				:'<font color=red>The name is too long. It must not exceed 50 symbols</font>',

    'ERROR_SENDER_EMAIL_LONG'				:'<font color=red>E-mail address is too long. It must not exceed 50 symbols</font>',

    'ERROR_SENDER_PHONE_INVALID'			:'<font color=red>There are invalid symbols in the telephone field</font>',

    'ERROR_VERIFICATION_CODE'	: '<font color=red>Invalid verification code</font>',
    'NO_ITEMS_CHECKED'			: 'You did not check Your interested product/service',
    'NO_COMPANIES_CHECKED'		: 'You did not select any company',
    'ERROR_SENDER_NAME'			: '<font color=red>You did not put Your name</font>',
    'ERROR_SENDER_CONTRY'		: '<font color=red>You did not put Your country</font>',
    'ERROR_SENDER_EMAIL'		: '<font color=red>Email is not specified</font>',
    'ERROR_EMAIL_INVALID'		: '<font color=red>Email is incorrect</font>',
    'ERROR_MESSAGE'				: '<font color=red>Message box is empty</font>',
    'SENT_SUCCESSFULLY'			: 'Thank you, Your message has been sent. The copy of the message has been sent to your mail box',
    'REQUEST_MESSAGE'			: 'Please send more detailed information on the product/service/activity <br /><strong>"%p"</strong> <br />you have presented on the <a href="#company_address#">page of your company</a> on <a href="http://www.spyur.am">www.spyur.am</a>',
    'SUBJECT_COPY_MESSAGE'		: 'Copy of message sent from www.spyur.am',
    'COPY_MESSAGE_HEADER'		: '<strong>By means of <a href="http://www.spyur.am">www.spyur.am</a> website you have sent the following message:</strong>',
////////////////////////////////////////////////////*REQUEST MESSAGES*///////////////////////////////////////////////////////////////
    'SEND_MESSAGE':'SEND MESSAGE',
    'SEND_MESSAGE_DESCRIPTION': 'From the list provided select those companies the executives of which you want to send a request for getting more detailed information on the product/service/activity you are interested in:',
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    'MAP'						: 'Map?',
    'CLOSE'						: 'Close?',
    'MORE'						: 'More',
    'BACK'						: 'Back?',

    /*Notice for noscripte*/
    'NOSCROPT':'Տվյալ ֆորմաները լրացնելու համար խնդրում եմ միաչրեք Ձեր դիտաևկիչի(Browser) "Javascrip"-ը',
    'STATISTICS':'Website Statistics',

///////////////////////////////////////////////////*START COMPANY REGISTRATION FORM*///////////////////////////////////////////////////

    'FIRM_BASIC_DATA'						: 'Basic information',
    'FIRM_STYLE'							: 'Legal form',
    'FIRM_ACTIVITY'							: 'General activity',
    'MESSAGE_BODY'                          : 'Message text',
    'FIRM_CONTACT_DATA'						: 'Contact information',
    'REGION_REG_FORM'					    : 'Zip code, marz/district',
    'FLOOR_ROOM'							: 'Floor, room',
    'PHONE_COUNTRY_CODE'					: 'Country code',
    'PHONE_TOWN_CODE'						: 'Area code',
    'PHONE_NUMBER'							: 'Phone number',
    'FIRST'									: '1st',
    'SECOND'								: '2nd',
    'CONTACT_PERSON'						: 'Contact person',
    'POSITION'								: 'Position',
    'APPLICATION_SEND_OK' 					: `<div align=center><font color=red>Thank you for providing "Spyur" with your information. <br  />
Your application will be considered and "Spyur’s" representative will contact you within 3
working days. <br  />
The copy of the application you have filled in
has been sent to your email address</font></div>`,
    'BACK_LETTER_START'						: `<strong>You have provided "Spyur" with the following application for
registration with "Spyur" database via www.spyur.am website </strong>`,
    'BACK_LETTER_END'						: `<strong>Thank you for providing "Spyur" with your information. Your application will be
considered and "Spyur’s" representative will contact you within 3 working days</strong>`	,
    'ADD_COMPANY_STATIC_TEXT':'<h2>COMPANY INCLUSION IN WWW.SPYUR.AM</h2>' +
    '<p>Any company and state structure operating in Armenia, Nagorno-Karabakh and in the diaspora can be simultaneously included in "Spyur\'s" 6 directories (call center, Spyur.am website, mobile applications, computer program, printed directory, "Kompass Armenia") in 2 statuses:</p>' +
    '<h3>1.Free subscriber</h3>' +
    '<p>Provides:</p>' +
    '<ul class="list-bullet">' +
    '<li>company search by limited data</li>' +
    '<li>low position in the search result list as opposed to "Privileged subscribers"</li>' +
    '<li>information presentation in a limited volume</li>' +
    '<li>company presentation in "Spyur\'s" 4 directories (not presented in the printed directory and “Kompass Armenia”)</li>' +
    '</ul>' +
        '<h3>2."Privileged subscriber" – "To Higher Position" service (paid)</h3>' +
    '<p>Provides:</p>' +
    '<ul class="list-bullet">' +
    '<li>company search by all provided data</li>' +
    '<li>high position in the search result list as opposed to "Free subscribers"</li>' +
    '<li>information presentation in a full volume (up to 30 data types)</li>' +
    '<li>company presentation in "Spyur\'s" 6 directories</li>' +
    '</ul>' +
        '<p>As well as:</p>' +
    '<ul class="list-bullet">' +
    '<li>priority service in "Spyur\'s" call center</li>' +
    '<li>online view of statistics of call center inquiries</li>' +
        '<li>providing annual statistics of inquiries (call center, website)</li>' +
    '<li>delivery of 1 copy of the printed directory</li>' +
    '<li>tender announcements</li>' +
    '<li>direct connection with the customer</li>' +
    '<li>other privileges</li>' +
    '</ul>' +
    '<h2>FORM OF REGISTRATION WITH "SPYUR\'S" DATABASE</h2>',

////////////////////////////////////////////////////////*ERROR MESSAGES*/////////////////////////////////////////////////////////////////

    'FIRM_NAME_EMPTY'						: '<font color=red>Company name is not specified</font>',
    'FIRM_ACTIVITY_EMPTY'					: '<font color=red>General activity is not specified</font>',
    'COUNTRY_EMPTY'							: '<font color=red>Country is not specified</font>',
    'TOWN_EMPTY'							: '<font color=red>Town/village is not specified</font>',
    'PHONE1_COUNTRY_CODE_EMPTY'				: '<font color=red>Country code of  the 1st phone number is not specified</font>',
    'PHONE1_TOWN_CODE_EMPTY'				: '<font color=red>Area code of the 1st phone number is not specified</font>',
    'PHONE1_NUMBER_EMPTY'					: '<font color=red>The 1st phone number is not specified</font>',
    'NAME_EMPTY'							: '<font color=red>Contact person name is not specified</font>',
    'EMAIL_EMPTY'							: '<font color=red>Contact person email is not specified</font>',
    'EMAIL_INVALID'							: '<font color=red>Contact person email is incorrect</font>',
    //TODO: Remove letters from here after solving alphabet issue
    'letters' : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
///////////////////////////////////////////////////*END COMPANY REGISTRATION FORM*////////////////////////////////////////////////////////////

};

//////////////////////////////  ALPHABET  ////////////////////////////////////////
const alphabet = {
    'letters' : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
};

//////////////////////////////  TIMES  ////////////////////////////////////////
const times = {
    0: '00:00',
    30: '00:30',
    60: '01:00',
    90: '01:30',
    120: '02:00',
    150: '02:30',
    180: '03:00',
    210: '03:30',
    240: '04:00',
    270: '04:30',
    300: '05:00',
    330: '05:30',
    360: '06:00',
    390: '06:30',
    420: '07:00',
    450: '07:30',
    480: '08:00',
    510: '08:30',
    540: '09:00',
    570: '09:30',
    600: '10:00',
    630: '10:30',
    660: '11:00',
    690: '11:30',
    720: '12:00',
    750: '12:30',
    780: '13:00',
    810: '13:30',
    840: '14:00',
    870: '14:30',
    900: '15:00',
    930: '15:30',
    960: '16:00',
    990: '16:30',
    1020: '17:00',
    1050: '17:30',
    1080: '18:00',
    1110: '18:30',
    1140: '19:00',
    1170: '19:30',
    1200: '20:00',
    1230: '20:30',
    1260: '21:00',
    1290: '21:30',
    1320: '22:00',
    1350: '22:30',
    1380: '23:00',
    1410: '23:30'
};

///////////////////////////////////////////////////////// END ////////////////////////////////////////////


























/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const week_cal = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];


const adm_const_arr = {
    'ZIP_ATTACH_PICS'	        : 'Բեռնել նկարների ZIP ֆայլը',
    'DEVELOPED'					: 'Developed by<br /><a href="http://www.smartsystemsllc.com" class="smart">Smart Systems</a>',
    'HOME'						: 'Home',
    'ROOT'						: 'Root',
    'MOVE_TO'					: 'Move To',
    'TITLE'						: ' "VALE" Administration',
    'YES'						: 'Yes',
    'NO'						: 'No',
    'SHOW_ALL'					: 'Show All',
    'CHECK'						: 'Check',
    'DELETE_ALL_CHECKED'		: 'Delete All Checked',
    'WARNING'					: 'Warning!',
    'DELETE_WARNING'			: 'All checked items and their sub items will be deleted! It will not be possible to restore! You can see id-s of deleting items bellow:',
    'SAVE'						: 'Save',
    'EDIT'						: 'Edit',
    'DELETE'					: 'Delete',
    'UPDATE'					: 'Save',
    'UPLOAD'					: 'Upload',
    'LOAD_EDITOR'				: 'Load HTML Editor',
    'NOTE'						: 'Note',
    'RESET'						: 'Reset',
    'CANCEL'					: 'Cancel',
    'NEW'						: 'New',
    'SEND'						: 'Send',
    'SEARCH'					: 'Search',
    //'ADM_MENU'				: 'Administrator menu',
    'ADM_MENU'					: 'Admin MENU',
    'FILE'						: 'File',
    'META_TAG'					: 'Encoding',
    'PAGES'						: 'Result pages',
    'ORDER_ASC'					: 'Order Ascending',
    'ORDER_DESC'				: 'Order Descending',

    'CHANGE_YOUR_PASSWORD'		: 'Change Your Password',
    'USERNAME'					: 'Username',
    'RE_PASSWORD'				: 'Repeat password',
    'PASSWORD'					: 'Password',
    'OLDPASS'					: 'Old Password',
    'HINT_POSITION'				: 'In the website items will by ordered be this integer number',
    'HINT_NAME'					: 'Enter the name here.',
    'HINT_FIELD_TYPE_ID'		: 'Select field type in the drop down list.',
    'HINT_IMAGE'				: 'Click Browse then point to the image file.',
    'HINT_SHORT_TEXT'			: 'Copy short version of the text here. It is not recommended to put long texts here!',
    'HINT_UTIME'				: 'Click this button and choose appropriate date!',
    'HINT_ST_ACTIVE'			: 'Via this checkbox, you can make this item visible or invisible.',

    'HINT_NAME_IN_URL'			: 'Name of the file. Please use alphanumerical characters and underscore only. Other characters will be modified automatically. Don\'t include extensions like .php, .htm etc.',
    'HINT_TITLES'				: 'HTML Title of the file.',
    'HINT_META_DESCRIPTION'		: 'HTML Meta Description.',
    'HINT_META_KEYWORDS'		: 'HTML Meta Keywords.',

    'PRINT'						: 'Print',
    'VIEW'						: 'View',
    'SAVE_INFO'					: 'Save info.',
    'PERMISSIONS'				: 'Permissions',
    'MENU'						: 'Menu',
    'CONFIRM'					: 'Are you sure?',
    'REQUEST'                   : 'Request',

    'SEND_NEWSLETTER' 			: 'Send newsletter',
    'SEND_REQUEST' 				: 'Send request',

    'ID'						: 'ID',
    'TYPE'						: 'Type',
    'FILENAME'					: 'Filename',
    'NAME'						: 'Name',
    'LASTNAME'					: 'Surname',
    'POSITION'					: 'Position',
    'COUNTRY'					: 'Country',
    'CNAME'						: 'Currency',
    'NAME2'						: 'Currency',
    'UNIT'						: 'Unit',
    'VALUE'						: 'Value',
    'TITLES'					: 'Title',
    'NAME_IN_URL'				: 'Name in URL',
    'IN_MENU'					: 'Include in menu',
    'IN_FOOTER'					: 'Include in footer left',
    'IN_FOOTER_RIGHT'			: 'Include in footer right',
    'JUMP_LINK'					: 'Jump (redirect) link e.g. in the case of ("http://www.smartsystemsllc.com/")',
    'DESCRIPTION'				: 'Description',
    'PAGETEXT'					: 'Page text',
    'IMAGE'						: 'Image (gif, jpg, png)',
    'CODE'						: 'code',
    'URL'						: 'URL (without http://)',
    'CALENDAR'					: 'calendar',
    'DATETIME'					: 'datetime',
    'UTIME'						: 'Date',
    'STARTDATE'					: 'Start',
    'ENDDATE'					: 'End',
    'VIEWS'						: 'Views',
    'CLICK'						: 'Clicks',
    'MAXVIEW'					: 'Max view',
    'ST_ORDER'					: 'In order',
    'ST_ONHOME'					: 'Show in home page',

    'ST_ACTIVE'					: 'Active',

    'REGION'					: 'Region',
    'CITY'						: 'City',
    'ADDRESS'					: 'Address',
    'PHONE'						: 'Tel.',
    'INFO'						: 'Info.',
    'STATUS'					: 'Status',
    'DETAILS'					: 'details',
    'FROM'						: 'From',
    'TOMAX'						: 'To',
    'ULIST_VIEW'				: 'View',
    'ULIST_ADD'					: 'Add',
    'ULIST_EDIT'				: 'Edit',
    'ULIST_DELETE'				: 'Delete',
    'LOGIN'						: 'Login',
    'EMAIL'						: 'E-mail',
    'TYPE_ID'					: 'Admin Type',
    'MENU_ID'					: 'Where to display',
    'CATEGORY_ID'				: 'Category',
    'CATEGORIES'				: 'Category',
    'USERS_ID'					: 'User',
    'ST_NEWSLETTER'				: 'Receive Newsletters',
    'BNR_GROUPS_ID'				: 'Group',
    'TEXTS'						: 'Text',
    'TEXT'						: 'Text',
    'SHORT_TEXT'				: 'Short Text',
    'META_DESCRIPTION'			: 'Meta Description',
    'META_KEYWORDS'				: 'Meta Keywords',
    'DATE'						: 'Date',
    'CLOSE'						: 'Close',

    'INCORRECT_PASSWORD'		: 'Incorrect Password!',
    'LOGOUT'					: 'Log Out',
    'LOG_IN_TO_SYSTEM'			: 'Log In To System',

    'YOU_ARE_LOGGED_AS'			: 'You are logged as: ',
    'SAVED'						: 'Saved successfully!',
    'SUBTITLE'					: 'Sub Title',
    'NEWS'						: 'News',
    'APPROVE'					: 'Approve',
    'IN_RIGTH'					: 'In the right',
    'IN_BOTTOM'					: 'In the bottom',
    'BID'						: 'Bid.',
    'ASK'						: 'Ask.',
    'TIME_GMT'					: 'Time(GMT)' ,
    'LANGUAGES'					: 'Languages',
    'RESTRICTED'				: 'this word can not be used as "Name in url" word',
    'REGNO'						: 'RegNo',
    'SERVER_NAME'				: 'Server Name',
    'LANG'						: 'Language'
};

const NEW_MESSAGES = {
    'SITE_INDEX': 'Site Index',
    'SUGGESTIONS': 'Suggestions',
    'SPONSOR': 'Sponsor',
    'ARTICLES': 'Articles',
    'FIRST_NEED_SERVICES': 'First need services',
    'FEEDBACK': 'Feedback',
    'LETTERS': 'Letters',
    'ARMENIA_ARCAX': 'Armenia, Nagorno-Karabakh',
    'ORDER_BY': 'Order by',
    'BEST_HIT': 'Best hit',
    'DISTANCE':'Distance',
    'SELECTED_VALUES': 'Selected values',
    'CARD_VIDEO':'Video',
    'CARD_MAP':'Map',
    'CARD_PHOTO':'Photo',
    'KM': 'km'
};

const ERRORS = {
    'ERROR_404_TITLE': 'That page can’t be found.',
    'ERROR_404_TEXT': 'It looks like nothing was found at this location.',
    'ERROR_500_TITLE': 'Internal Server Error',
    'ERROR_500_TEXT': 'The server encountered an internal error and was unable to complete your request. Please contact (admin@spyur.am - contact word here must be as a link with mailto:admin@spyur.am)the server administrator if this error reappears multiple times, please include the technical details below in your report.',
};

module.exports = R.mergeAll([adm_const_arr, lng, alphabet, NEW_MESSAGES, ERRORS]);