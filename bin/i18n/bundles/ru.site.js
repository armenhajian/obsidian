const R = require('ramda');

/////////////////////////////////////////////////////  MAIN PAGE  ////////////////////////////////////////////////////////////////////////////
const lng = {
    'ALL'			        	: 'Все',
    'FILTER'                    : 'Фильтровать',
    'SITE_TITLE'				: '• АРМЕНИЯ (ЕРЕВАН) • СПЮР',
    'ARIAL_AMU'					: 'Загрузить   армянскую Unicode <a class="underline" href="/downloads/Armenian_Unicode_Keyboard_Driver.zip" title="клавиатуру">клавиатуру</a> и <a class="underline" href="/downloads/ArianAMU.zip" title="шрифт">шрифт</a>',
    'SPYUR_COMPANY_REGISTR' 	: 'СПЮР ИНФОРМАЦИОННАЯ СИСТЕМА',
    'ARMENIA'                   : 'АРМЕНИЯ • ЕРЕВАН',
    'BUSINESS_DIRECTORY'        : 'КЛАССИФИКАТОР ТОВАРОВ/УСЛУГ',
    'YELLOW_PAGES'              : 'КЛАССИФИКАТОР ТИПОВ ДЕЯТЕЛЬНОСТИ',
    'COMPANY_REGISTRATION'      : 'РЕГИСТРАЦИЯ ОРГАНИЗАЦИЙ',
    'ADVERTISEMENTS'            : 'ДОПОЛНИТЕЛЬНЫЕ ВЕБ-СТРАНИЦЫ',
    'ABOUT_SPYUR'				: 'О "Спюре"',
    'HOME_YP_TITLE1'			: 'Информация о',
    'HOME_YP_TITLE2'			: '16000 организаций',
    'HOME_BD_TITLE1'			: '19000 товаров',
    'HOME_BD_TITLE2'			: 'и услуг',
    'COMPANIES'                 : 'Название организации',
    'PRODUCT_SERVICE'			: 'Товар, услугa',
    'WHAT'						: 'Что',
    'WHERE'						: 'Где',
    'IN_WHAT'					: 'Организация/сайт или товар/услуга или бренд',
    'IN_WHERE'					: 'Указать страну, регион, город, улицу, дом',
    'VIRTUAL_KEYBOARD'			: 'Виртуальная клавиатура',
    'ONLY_BY_NAME'				: 'Только по названию',
    'WITH_PHOTO'				: 'С картинкой',
    'COUNTRY_ALL'				: 'Все',
    'SEARCH'                    : 'Поиск',
    'SEARCH_PLACEHOLDER'        : 'Название компании, телефон, деятельность, адрес...',
    'SEARCH_COMPANY'            : 'Поиск организации',
    'SELECT_PRODUCT_SERVICE'    : 'Выбрать необходимый товар/услугу и нажать кнопку "Поиск организации"',
    'ADV_SEARCH'                : 'РАСШИРЕННЫЙ ПОИСК',
    'COMPANIES_TAB'				: 'ОРГАНИЗАЦИИ',
    'TRADEMARKS_TAB'			: 'ТОРГОВЫЕ МАРКИ',
    'CONTACTS_TAB'              : 'КОНТАКТЫ',
    'ACTIVITIES_TAB'			: 'ДЕЯТЕЛЬНОСТЬ',
    'DOCUMENTS_TAB'             : 'ДОКУМЕНТЫ',
    'OTHER_TAB'                 : 'ДРУГИЕ',
    'MOST_SEARCHABLE'			: 'ЧАЩЕ ВСЕГО ИЩУТ',
    'PRODUCTS_AND_SERVICES'		: '6 ​СПРАВОЧНЫХ &nbsp;• &nbsp;30 000 пользователей ежедневно &nbsp;• &nbsp;20 000 организаций',
    'DIRECTORY'                 : 'Справочник',
    'CD_EDITION'                : 'PC-издание',
    'PHONE_SERVICE'             : 'Телефонная справочная',
    'MOBILE_EDITION'            : 'Мобильные приложения',
    'WEBSITES'                  : 'Веб-сайт',
    'KOMPASS_ARMENIA'           : 'Kompass Armenia',
    'KOMPASS_DESCRIPTION'		: 'Worldwide B to B company search engine',
    'COPYRIGHT'                 : '<a href="/ru/copyright" id="copyright" title="Copyright © Spyur LLC 1997-2015">Copyright © "Spyur" LLC 1997-2015</a>',
    'BOTTOM_HOME_LINK'			: '<a id="created_by" target="_blank" title="Spyur" href="http://www.spyur.am">Home: www.spyur.am</a>',
    'AM'                        : 'Армянский',
    'RU'                        : 'Русский',
    'EN'                        : 'Английский',
    'logo_space'                : 'LOGO SPACE',
    'free_member'               : 'Free Member',
    'AKCII_AND_NEWS'			:'АКЦИИ,НОВОСТИ ',
    'VISTAVKI'					:'ВЫСТАВКИ  ',
    'KURSI_VALYUT'				:'КУРСЫ ВАЛЮТ',
    'OUR_SERVICES'				:'НАШИ СПРАВОЧНЫЕ СЛУЖБЫ',
    'ADD_COMPANY'               : 'Добавить компанию',
    'ARM_YELLOW_PAGES'          : 'ЖЕЛТЫЕ СТРАНИЦЫ АРМЕНИИ',
    'ARM_BUSINESS_DIRECTORY'    : 'БИЗНЕС-СПРАВОЧНИК АРМЕНИИ',
    'SEND_REQUEST_BUTTON'       : 'Հարցման ուղարկում',
    'LINKS':'Ссылки',
    'DOWNLOAD_UNICODE_KEYBOARD':'Загрузить армянскую Unicode клавиатуру',
    'DOWNLOAD_UNICODE_LETTERS':'Загрузить армянскую Unicode шрифт',
/////////////////////////////////////////////////////  SEARCH RESULT  ////////////////////////////////////////////////////////////////////////////

    'SEARCH_RESULTS'			: 'РЕЗУЛЬТАТ ПОИСКА',
    'SEARCH_OUT_OF_ORDER'		: '<font color=red>Поиск по полям "Что" и "Где" не работает, так как осуществляется обновление данных сайта. Пока можете пользоваться разделом "РАСШИРЕННЫЙ ПОИСК".</font>',
    'WHAT_SEARCH_TIME_OVER'			: 'Попробуйте уточнить введенный текст в поле "Что"',
    'WHERE_SEARCH_TIME_OVER' 			: 'Попробуйте уточнить введенный текст в поле "Где"',
    'TOTAL_COUNT'				: 'Найдено %s организаций',
    'TOTAL_COUNT_PRODUCT_SERVICE'		  		: '<div id="strong_count" class="strong_count" >Найдено%d товаров/услуг</div><br /><hr class="myclass" style="background: #CCC;" />',
    'TOTAL_COUNT_ACTIVITY_TYPE'		  		: '<div id="strong_count" class="strong_count" >Найдено %d типов деятельности</div><br /><hr class="myclass" style="background: #CCC;" />',
    'BACK_TO_SEARCH_RESULT'		: '<font color=#008800><strong>ВОЗВРАТ К СПИСКУ ОРГАНИЗАЦИЙ</strong></font>',
    'SEARCH_RESULT_WITHOUT_MAP'	: 'БЕЗ КАРТЫ',
    'SEARCH_RESULT_MAP'			: 'С КАРТОЙ',
    'BY_SPYUR'					: 'ПО "СПЮРУ"',
    'BY_ALPHABET'				: 'ПО АЛФАВИТУ',
    'YEAR_ESTABLE'			    : 'Год основания: %year%',
    'TOTAL_COUNT_TRADE_MARK'	: '<strong style="font-size: 13px;">Найден %s товарный знак</strong><hr style="background: #CCC;" />',
    'TOTAL_COUNT_SEARCH_BD_YP'	: '<strong style="font-size: 13px;">Найден %d товар/услуга/деятельность</strong><hr style="background: #CCC;" />',


    'MISSING_WORDS'				: '%s <font color=red> отсутствует в базе данных, просим исправить или изменить</font>',
    'TRY_SEPARATE'				: '<font color=red>Попробуйте в поле "<strong>Что</strong>" изменить или уменьшить количество слов или осуществить поиск отдельными словами</br>%s</font>',
    'TRY_SEPARATE_IN_WHERE'		: '<font color=red>Попробуйте в поле "<strong>Где</strong>" изменить или уменьшить количество слов или осуществить поиск отдельными словами</br>%s</font>',
    'TRY_ONE_WORD_IN_WHAT'		: '<font color=red>Попробуйте в поле "<strong>Что</strong>" искать <strong>одним словом</strong></font>',
    'TRY_ONE_WORD_IN_WHERE'		: '<font color=red>Попробуйте в поле "<strong>Где</strong>" искать <strong>одним словом</strong></font>',
    'TRY_ONE_FILD'				: '<font color=red>Попробуйте искать <strong>только одним полем</strong></font>',
    'TRY_ONLY_IN_WHAT'			: '<font color=red>Попробуйте %s искать <strong>без</strong> поля <strong>"Где"</strong></font>',
    'TRY_IN_WHAT'				: '<font color=red>Попробуйте словом %s искать в поле "<strong>Что</strong>"</font>',
    'TRY_IN_WHERE'				: '<font color=red>Попробуйте словом %s искать в поле "<strong>Где</strong>"</font>',
    'TRY_CORRECT'				: '<font color=red>Попробуйте искать словом %s</font>',
    'TRY_CORRECT_IN_WHAT'		: '<font color=red>Попробуйте искать словом %s в поле "<strong>Что</strong>"</font>',
    'TRY_CORRECT_IN_WHERE'		: '<font color=red>Попробуйте искать словом %s в поле "<strong>Где</strong>"</font>',

    'TRY_ONE_WORD_IN_NAME'		: '<font color=red>Попробуйте в поле "<strong>Название организации</strong>" искать <strong>одним словом</strong></font>',
    'TRY_ONE_WORD_IN_TRADEMARK'	: '<font color=red>Попробуйте в поле "<strong>Торговая марка</strong>" искать <strong>одним словом</strong></font>',
    'TRY_ONE_WORD_IN_PRODUCTS'	: '<font color=red>Попробуйте в поле "<strong>Товар, услуга</strong>" искать <strong>одним словом</strong></font>',
    'TRY_ONE_WORD_IN_FIELD'		: '<font color=red>Попробуйте в поле "<strong>%s</strong>" искать <strong>одним словом</strong></font>',
    'TRY_IN_OTHER_FIELD'		: '<font color=red>Попробуйте другое поле поиска</font>',
    'ON_FILD_SEARCH'			: '<font color=red>Փորձեք որոնել մեկ դաշտով</font>',
    'IN_FIELD'  				: 'դաշտում?',

    'IF_YOUR_ARE_MEAN'			: '<font color=red>Հնարավոր է դուք նկատի ունեիք</font>',
    'YOUAREMEAN_AND_OTHERFIELD'	: 'Փորձեք որոնել մյուս դաշտում Հնարավոր է դուք նկատի ունեիք',

    'FIRM_OLD_NAME'				: 'Организация найдена <font style="color: #900">по старому названию</font>',
    'FIRM_ALT_NAME'				: 'Организация найдена <font style="color: #900">по альтернативному названию</font>',
    'FIRM_META_NAME'			: 'Организация найдена <font style="color: #900">по ключевому слову названия</font>',
    'CLASS_ALT_NAME'			: '<font style="color: #900">%p</font>',
    'OTHER_RESULTS'		    	: '<font color=#008800>ДРУГИЕ РЕЗУЛЬТАТЫ ПОИСКА: частичное совпадение на одной строке</font>',
    'OTHER_RESULTS_DIFFERENT'	: '<font color=#008800>ДРУГИЕ РЕЗУЛЬТАТЫ ПОИСКА: совпадение на разных строках</font>',
    'OTHER_RESULTS_YES_DESCRIPTION'		    	: 'Որոնումն իրականացվել է միայն <>, <>, <> բառերով',
    'OTHER_RESULTS_NO_DESCRIPTION'		    	: 'Ստուգեք <>, <> բառերի ուղղագրությունը',
    'OTHER_RESULTS_TARASXAL'					: '<font color=#008800>Другие результаты поиска: совпадение с орфографической ошибкой</font>',
    'SEE_MORE'                        : 'Увидеть больше',

    'SEE_LESS'						: 'Скрыть',
    'NEXT'                      : 'Следующий',
    'PREVIOS'                   : 'Предыдущий',

/////////////////////////////////////////////////////  ADVANCED SEARCH  ////////////////////////////////////////////////////////////////////////////

    'ADV_SEARCH_TITLE'			: 'Расширенный поиск',
    'ADV_SEARCH_FORM_TITLE'     : 'КРИТЕРИИ ПОИСКА',
    'BACK_ADV_SEARCH_FORM'     	: '<font color=#008800>ИЗМЕНЕНИЕ КРИТЕРИЕВ ПОИСКА</font>',
    'MAIN' 						: 'Основные',
    'FIRM_NAME'					: 'Название организации',
    'TRADEMARK'					: 'Торговая марка',
    'ADV_PRODUCT_SERVICE'		: 'Товар, услугa',
    'MIN_3_CHARS'				: 'Поиск и выбор товаров/услуг, типов деятельности',
    'GO'						: 'Поиск товара/услуги',
    'NO_RESULT'					: '<font color=red>Извините, поиск не дал результатов</font>',
    'DISTRIBUTORS'				: 'Экспорт/Импорт',
    'EXPORTERS'					: 'Экспортеры',
    'IMPORTERS'					: 'Импортеры',
    'ADDRESS'					: 'Адрес',
    'COUNTRY'					: 'Страна',
    'REGION'					: 'Марз/район',
    'DISTRICT'					: 'Квартал',
    'TOWN'						: 'Город/село',
    'STREET'					: 'Улица',
    'RENAME'					: 'переименован',
    'COMMUNITY'					: 'Регион',
    'BUILDING'					: 'Дом',
    'CONTACTS'                  : 'Связь',
    'PHONE'						: 'Телефон',
    'SITE'						: 'Веб-сайт',
    'EXECUTIVE'					: 'Руководитель',
    'NAME'						: 'Имя',
    'SURNAME'					: 'Фамилия',
    'WORKING_DAYS'				: 'Рабочие дни',
    'MON'						: 'Пн',
    'TUE'						: 'Вт',
    'WED'						: 'Ср',
    'THU'						: 'Чт',
    'FRI'						: 'Пт',
    'SAT'						: 'Сб',
    'SUN'						: 'Вс',
    'WORKING_HOURS'				: 'Рабочие часы',
    'START'						: 'От',
    'END'						: 'До',
    'HOUR_24'					: 'Круглосуточно',
    'YEAR_ESTABLISHED'			: 'Год основания',
    'OTHER'						: 'Другие',
    'WORKERS_COUNT'				: 'Количество работников',
    'PROPERTY_FORM'				: 'Форма собственности',
    'SYMBOL_NUMBER_ERROR'		: 'вести не менее 2-х символов',

/////////////////////////////////////////////////////  "BUSINESS DIRECTORY" AND "YELLOW PAGES"  /////////////////////////////////////////////////////

    'BD_ALPHABET' 				: 'Поиск по алфавитному списку организаций',
    'YP_ALPHABET' 				: 'Поиск по алфавитному списку организаций',
    'BD_ACTIVITIES_ALPHABET'	: 'Поиск по алфавитному списку товаров/услуг',
    'YP_ACTIVITIES_ALPHABET'	: 'Поиск по алфавитному списку типов деятельности',
    'BD_ACTIVITIES' 			: 'Классификатор товаров/услуг',
    'YP_ACTIVITIES' 			: 'Классификатор типов деятельности',
    'NUM_BTN' 					: '0-9',
    'TOTAL_CHECKED' 			: 'Выбранные классы -',
    'RESET'						: 'Очистить',
    'YP_FORM_TITLE' 			: 'КРИТЕРИИ ПОИСКА',
    'BD_FORM_TITLE' 			: 'КРИТЕРИИ ПОИСКА',

/////////////////////////////////////////////////////  COMPANY WEBPAGE  ////////////////////////////////////////////////////////////////////////////

    'MAP_LOCATION'				: 'Место на карте',
    'ADD_WEBPAGE'				: 'Дополнительная веб-страница',
    'SEND_BUSINESS_MESSAGE'		: 'Запрос цен',
    'SEND_FREE_MESSAGE'			: 'Свободное сообщение',
    'SEND_EMAIL'			    : 'отправить письмо',
    'FOTOSHARK'					: 'ФОТОРЯД',
    'VIDEOSHARK'				: 'ВИДЕОРЯД',
    'OPEN'                      : 'ОТКРЫТО',
    'CLOSED'                    : 'ЗАКРЫТО',
    'CALL'                      : 'Вызов',
    'PHONE_NUMBERS'             : 'Телефон',
    'SHOW_ALL_ADDRESSES'        : 'Показать все адреса',
    'DIRECTION'                 : 'Маршрут',
    'COMMUNICATION_MEANS'       : 'Электронные средства связи',
    'ALL_ADDRESSES'             : 'Все адреса',
    'ACTIVITY'                  : 'Деятельность',
    'DOCUMENTS'                 : 'Документы',
    'TRADEMARKS'                : 'Торговые марки',
    'INFO_UPDATE_DATE'          : 'Дата обновления информации',
    'KEYWORDS'                  : 'Некоторые ключевые слова',
    'FAX'                       : 'Факс',
    'WORKS'                     : 'работает в',
    'PRODUCTS'                  : 'Товары',
    //'COMMENT_STATUS'		: array(
    //array(
    //'from':50 ,
    //'to':199 ,
    //"text":'При связи с организацией просим указать "Спюр" как источник информации.'),

    //array(
    //'from':40 ,
    //'to':49 ,
    //"text":'При связи с организацией просим указать "Спюр" как источник информации.'),

    //array(
    //'from':30 ,
    //'to':39 ,
    //"text":'При связи с организацией просим указать "Спюр" как источник информации.'),

    //array(
    //'from':20 ,
    //'to':29 ,
    //"text":'При связи с организацией просим указать "Спюр" как источник информации.'),

    //array(
    //'from':1 ,
    //'to':19 ,
    //"text":'При связи с организацией просим указать "Спюр" как источник информации.'),

    //),

/////////////////////////////////////////////////////  SEND MESSAGE  ////////////////////////////////////////////////////////////////////////////

    'RECEIVER'					: 'Адресат:',
    'SUBJECT'					: 'Тема',
    'BUSINESS_MESSAGE_SUBJECT'	: 'Price request',
    'REQUEST_MESSAGE_SUBJECT'	: 'Request for additional information',
    'REQUEST_MESSAGE_NOTE'		: '<font color=red>В списке отсутствуют предприятия, не имеющие электронной почты</font>',
    'MESSAGE'					: 'Текст сообщения',
    'DEAR'						: 'Здравствуйте,',
    'THICK_OFF_PRODUCTS'		: '<font color=#8c8c8c>Отметьте заинтересовавшие Вас товары/услуги</font>',
    'CHECK_ALL'					: 'Выбрать все',
    'BEST_REGARDS'				: 'С уважением,',
    'SENDER_INFO'				: 'Данные отправителя',
    'EMAIL'						: 'Эл. почта',
    'VERIF_CODE'				: 'Код проверки',
    'END_OF_FREE_MESSAGE'		: '<em>Письмо отправлено посредством сайта <a href="http://www.spyur.am">www.spyur.am</a></em>',
    'SEND'						: 'Отправить',

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'ERROR_SENDER_FIRM_NAME_LONG'			:'<font color=red>Название организации очень длинное. Оно не должно превышать 100 символов</font> ',

    'ERROR_SENDER_NAME_LONG'				:'<font color=red>Название очень длинное. Оно не должно превышать 50 символов</font>',

    'ERROR_SENDER_EMAIL_LONG'				:'<font color=red>Адрес эл. почты очень длинный. Он не должен превышать 50 символов</font>',

    'ERROR_SENDER_PHONE_INVALID'			:'<font color=red>В поле телефона есть недопустимые символы</font>',

    'ERROR_VERIFICATION_CODE'	: '<font color=red>Код проверки неверный</font>',
    'NO_ITEMS_CHECKED'			: 'Вы не отметили заинтересовавший Вас товар/услугу',
    'NO_COMPANIES_CHECKED'		: 'Вы не выбрали ни одну организацию',
    'ERROR_SENDER_NAME'			: '<font color=red>Ваше имя не указано</font>',
    'ERROR_SENDER_CONTRY'		: '<font color=red>Страна не указана</font>',
    'ERROR_SENDER_EMAIL'		: '<font color=red>Эл.почта не указана</font>',
    'ERROR_EMAIL_INVALID'		: '<font color=red>Эл.почта неправильна</font>',
    'ERROR_MESSAGE'				: '<font color=red>Сообщение отсутствует!</font>',
    'SENT_SUCCESSFULLY'			: 'Спасибо! Ваше сообщение отправлено. На Ваш почтовый ящик отправленa копия сообщения',
    'REQUEST_MESSAGE'			: 'Прошу выслать более подробную информацию о товаре/услуге/деятельности <br /><strong>"%p"</strong>, <br />представленной Вами на <a href="#company_address#">странице Вашей организации</a> на веб-сайте <a href="http://www.spyur.am">www.spyur.am</a>',
    'SUBJECT_COPY_MESSAGE'		: 'Copy of message sent from www.spyur.am',
    'COPY_MESSAGE_HEADER'		: '<strong>Вами, посредством веб-сайта <a href="http://www.spyur.am">www.spyur.am</a> было отправлено следующее сообщение:</strong>',
////////////////////////////////////////////////////*REQUEST MESSAGES*///////////////////////////////////////////////////////////////
    'SEND_MESSAGE':'ОТПРАВКА СООБЩЕНИЯ',
    'SEND_MESSAGE_DESCRIPTION': 'Выберите из данного списка те предприятия, руководителям которых Вы желаете отправить запрос на получение более подробной информации о товаре/услуге/деятельности:',
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    'MAP'						: 'Карта?',
    'CLOSE'						: 'Закрыть?',
    'MORE'						: 'Больше',
    'BACK'						: 'Назад?',

    /*Notice for noscripte*/
    'NOSCROPT':'Տվյալ ֆորմաները լրացնելու համար խնդրում եմ միաչրեք Ձեր դիտաևկիչի(Browser) "Javascrip"-ը',
    'STATISTICS':'Статистика сайта',
///////////////////////////////////////////////////*START COMPANY REGISTRATION FORM*////////////////////////////////////////////////////////////

    'FIRM_BASIC_DATA'						: 'Основные данные',
    'FIRM_STYLE'							: 'Организационно-правовая форма',
    'FIRM_ACTIVITY'							: 'Общая деятельность',
    'MESSAGE_BODY'                          : 'Текст сообщения',
    'FIRM_CONTACT_DATA'						: 'Контактные данные',
    'REGION_REG_FORM'			     		: 'Почт. индекс, марз/район',
    'FLOOR_ROOM'							: 'Этаж, комната',
    'PHONE_COUNTRY_CODE'					: 'Код страны',
    'PHONE_TOWN_CODE'						: 'Код города',
    'PHONE_NUMBER'							: 'Номер',
    'FIRST'									: '1-й',
    'SECOND'								: '2-й',
    'CONTACT_PERSON'						: 'Контактное лицо',
    'POSITION'								: 'Должность',
    'APPLICATION_SEND_OK' 					: `<div align=center><font color=red>Спасибо за предоставление Ваших данных "Спюру".<br  />
                                                Ваша заявка будет рассмотрена и в течение 3 рабочих дней с Вами свяжется
                                                представитель "Спюра".<br  />
                                                На Ваш адрес эл. почты отправлена копия заполненной Вами заявки.</font></div>`,
    'BACK_LETTER_START'						:`<strong>Посредством сайта www.spyur.am
                                                Вы предоставили следующую заявку для регистрации в базе данных "Спюра".</strong>`,
    'BACK_LETTER_END'						:`<strong>Спасибо за предоставление Ваших данных "Спюру".
                                                Ваша заявка будет рассмотрена и в течение 3 рабочих дней с
                                                Вами свяжется представитель "Спюра".</strong>`	,
    'ADD_COMPANY_STATIC_TEXT':'<h2>РАЗМЕЩЕНИE ОРГАНИЗАЦИИ НА ВЕБ-САЙТЕ WWW.SPYUR.AM</h2>' +
    '<p>Любая организация и государственная структура, действующая в Армении, Нагорном Карабахе и армянской диаспоре, может быть размещена одновременно в 6 справочных "Спюра" (телефонная справочная, веб-сайт Spyur.am, мобильные приложения, компьютерная программа, справочник, "Компасс Армения") 2 статусами:</p>' +
    '<h3>1. Бесплатный абонент</h3>' +
    '<p>Обеспечивает:</p>' +
    '<ul class="list-bullet">' +
    '<li>поиск организации по ограниченным данным</li>' +
    '<li>низкую позицию в списке, полученном в результате поиска, по сравнению с "Привилегированными абонентами"</li>' +
    '<li>представление информации ограниченным объемом</li>' +
    '<li>представление организации в 4 справочных "Спюра" (не представляется в справочнике и "Компасс Армении").</li>' +
    '</ul>' +
    '<h3>2. Привилегированный абонент - услуга "Вверх" (платная)</h3>' +
    '<p>Обеспечивает:</p>' +
    '<ul class="list-bullet">' +
    '<li>поиск организации по всем представленным данным</li>' +
    '<li>высокую позицию в списке, полученном в результате поиска, по сравнению с "Бесплатными абонентами"</li>' +
    '<li>представление организации в полном объеме (до 30 типов данных)</li>' +
    '<li>представление организации в 6 справочных "Спюра"</li>' +
    '</ul>' +
    '<p>А также:</p>' +
    '<ul class="list-bullet">' +
    '<li>внеочередное обслуживание в телефоной справочной "Спюра"</li>' +
    '<li>онлайн-просмотр статистики телефонных запросов</li>' +
    '<li>предоставление годовой статистики запросов (телефон, веб-сайт)</li>' +
    '<li>доставку 1 экземпляра справочника</li>' +
    '<li>информирование о тендерах</li>' +
    '<li>прямую связь с посетителем</li>' +
    '<li>другие привилегии</li>' +
    '</ul>' +
    '<h2>ЗАЯВКА НА РЕГИСТРАЦИЮ В БАЗЕ ДАННЫХ "СПЮРА"</h2>',

////////////////////////////////////////////////////////*ERROR MESSAGES*/////////////////////////////////////////////////////////////////
    'FIRM_NAME_EMPTY'						: '<font color=red>Название организации не указано</font>',
    'FIRM_ACTIVITY_EMPTY'					: '<font color=red>Общая деятельность не указана</font>',
    'COUNTRY_EMPTY'							: '<font color=red>Страна не указана</font>',
    'TOWN_EMPTY'							: '<font color=red>Город/село не указаны</font>',
    'PHONE1_COUNTRY_CODE_EMPTY'				: '<font color=red>Код страны 1-го телефонного номера не указан</font>',
    'PHONE1_TOWN_CODE_EMPTY'				: '<font color=red>Код города 1-го телефонного номера не указан</font>',
    'PHONE1_NUMBER_EMPTY'					: '<font color=red>1-й телефонный номер не указан</font>',
    'NAME_EMPTY'							: '<font color=red>Имя контактного лица не указано</font>',
    'EMAIL_EMPTY'							: '<font color=red>Эл. почта контактного лица не указана</font>',
    'EMAIL_INVALID'							: '<font color=red>Эл. почта контактного лица неправильна</font>',
    //TODO: Remove letters from here after solving alphabet issue
    'letters' : ["А","Б","В","Г","Д","Е","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч", "Ш", "Щ", "Э", "Ю", "Я"]
///////////////////////////////////////////////////*END COMPANY REGISTRATION FORM*////////////////////////////////////////////////////////////

};

//////////////////////////////  ALPHABET  ////////////////////////////////////////
const alphabet = {
    'letters' : ["А","Б","В","Г","Д","Е","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч", "Ш", "Щ", "Э", "Ю", "Я"]
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
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

const weekdays=[
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
];

const week_cal = [
    "Вс",
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс"
];

const adm_const_arr = {
    'ZIP_ATTACH_PICS': 'Բեռնել նկարների ZIP ֆայլը',
    'DEVELOPED': 'Developed by<br /><a href="http://www.smartsystemsllc.com" class="smart">Smart Systems</a>',
    'HOME': 'Главная',
    'ROOT': 'Root',
    'MOVE_TO': 'Переместить в',
    'TITLE': '  Администрация',
    'YES': 'Да',
    'NO': 'Нет',
    'SHOW_ALL': 'Показать все',
    'CHECK': 'Выбрать',
    'DELETE_ALL_CHECKED': 'Стереть все выбранные',
    'WARNING': 'Внимание!',
    'DELETE_WARNING': 'Все выбранные элементы и их суб-элементы будут удалены! Восстановление будет невозможным! Ниже ознакомьтесь с ид удаленных элементов:',
    'SAVE': 'Сохранить',
    'SUBTITLE': 'Подзаголовок',
    'EDIT': 'Редактировать',
    'DELETE': 'Стереть',
    'UPDATE': 'Сохранить',
    'UPLOAD': 'Загрузить',
    'LOAD_EDITOR': 'Загрузить HTML редактор',
    'NOTE': 'Заметка',
    'RESET': 'Сбросить',
    'CANCEL': 'Отменить',
    'NEW': 'Новый',
    'SEND': 'Отправить',
    'SEARCH': 'Поиск',
    //'ADM_MENU'				: 'Меню администратора',
    'ADM_MENU': 'Admin MENU',
    'FILE': 'Файл',
    'META_TAG': 'Энкодинг',
    'PAGES': 'Страницы разультата',
    'ORDER_ASC': 'Построить по нарастающей ',
    'ORDER_DESC': 'Построить по убывающей',

    'CHANGE_YOUR_PASSWORD': 'Измените пароль',
    'USERNAME': 'Логин',
    'RE_PASSWORD': 'Повторить пароль',
    'PASSWORD': 'Пароль',
    'OLDPASS': 'Старый пароль',
    'HINT_POSITION': 'Элементы буду построены по этим номерам',
    'HINT_NAME': 'Заполнить имя.',
    'HINT_FIELD_TYPE_ID': 'Выбрать вид поля из меню.',
    'HINT_IMAGE': 'Выбрать просмотр, затем картинку.',
    'HINT_SHORT_TEXT': 'Копировать короткий текст сюда. Сюда нерекамендовано вводить длинные тексты.',
    'HINT_UTIME': 'Нажмите на кнопку и выберите подходящую дату!',
    'HINT_ST_ACTIVE': 'Позволяет вам сделать элемент Акитвмым.',

    'HINT_NAME_IN_URL': 'Название файла. Пожалуйста, используйте буквы или числа или нижнюю черточку, остальные знаки будут автоматически модифицированы. Не включайте расширения .php, .htm etc.',
    'HINT_TITLES': 'HTML название файла.',
    'HINT_META_DESCRIPTION': 'HTML Мэта Описание.',
    'HINT_META_KEYWORDS': 'HTML Мэта ключевые слова.',

    'PRINT': 'Печать',
    'VIEW': 'Просмотр',
    'SAVE_INFO': 'Сохранить.',
    'PERMISSIONS': 'Разрешения',
    'MENU': 'Меню',
    'CONFIRM': 'Вы уверены?',
    'REQUEST': 'Запрос',

    'SEND_NEWSLETTER': 'Отправить новости',
    'SEND_REQUEST': 'Отправить сообшение',

    'ID': 'ИД',
    'TYPE': 'Тип',
    'FILENAME': 'Название файла',
    'NAME': 'Имя',
    'LASTNAME': 'Фамилия',
    'POSITION': 'Позиция',
    'COUNTRY': 'Страна',
    'CNAME': 'Валюта',
    'NAME2': 'Валюта',
    'UNIT': 'Единица',
    'VALUE': 'Значение',
    'TITLES': 'Название',
    'NAME_IN_URL': 'Название в URL',
    'IN_MENU': 'Добавить в Меню',
    'IN_FOOTER': 'Добавить в футер лево',
    'IN_FOOTER_RIGHT': 'Добавить в футер право',
    'JUMP_LINK': 'Перейти(переадресовать) по ссылке пр. ("http://www.smartsystemsllc.com/")',
    'DESCRIPTION': 'Описание',
    'PAGETEXT': 'Текст страницы',
    'IMAGE': 'Картинка(gif, jpg, png)',
    'CODE': 'код',
    'URL': 'URL (без http://)',
    'CALENDAR': 'Календарь',
    'DATETIME': 'Дата',
    'UTIME': 'Дата',
    'STARTDATE': 'Начало',
    'ENDDATE': 'Конец',
    'VIEWS': 'Просмотры',
    'CLICK': 'Клики',
    'MAXVIEW': 'Макс показов',
    'ST_ORDER': 'Порядок',
    'ST_ONHOME': 'Показывать на главной',

    'ST_ACTIVE': 'Активный',

    'REGION': 'Регион',
    'CITY': 'Город',
    'ADDRESS': 'Адрес',
    'PHONE': 'Тел.',
    'INFO': 'Информация',
    'STATUS': 'Статус',
    'DETAILS': 'Детали',
    'FROM': 'От',
    'TOMAX': 'к',
    'ULIST_VIEW': 'Посмотреть',
    'ULIST_ADD': 'Добавить',
    'ULIST_EDIT': 'Редакторовать',
    'ULIST_DELETE': 'Стереть',
    'LOGIN': 'Войти',
    'EMAIL': 'Эл. почта',
    'TYPE_ID': 'Тип админа',
    'MENU_ID': 'где показывать',
    'CATEGORY_ID': 'Категория',
    'CATEGORIES': 'Категория',
    'USERS_ID': 'Пользователь',
    'ST_NEWSLETTER': 'Подписаться на новости',
    'BNR_GROUPS_ID': 'Группа',
    'TEXTS': 'Текст',
    'TEXT': 'Текст',
    'SHORT_TEXT': 'Короткий текст',
    'META_DESCRIPTION': 'Мэта описание',
    'META_KEYWORDS': 'Мэта ключевые слова',
    'DATE': 'Дата',
    'CLOSE': 'Закрыть',

    'INCORRECT_PASSWORD': 'Неправильный пароль!',
    'LOGOUT': 'Выйти',
    'LOG_IN_TO_SYSTEM': 'Войти в систему',

    'YOU_ARE_LOGGED_AS': 'Вы зарегистрированы: ',
    'SAVED': 'Сохранено!',
    'APPROVE': 'Утвердить',
    'IN_RIGTH': 'На левой стороне',
    'IN_BOTTOM': 'Внизу',
    'BID': 'Бид.',
    'ASK': 'Ask.',
    'TIME_GMT': "Время \n(GMT)",
    'SEARCH_HINT': 'Поиск',
    'LANGUAGES': 'Языки',
    'RESTRICTED': 'это слово не может быть использован как "Название в URL"',
    'REGNO': 'Рег.№',
    'SERVER_NAME': 'Название сервера',
    'LANG': 'Язык'

};

const NEW_MESSAGES = {
    'SITE_INDEX': 'Индекс сайта',
    'SUGGESTIONS': 'Предложения',
    'SPONSOR': 'Спонсор',
    'ARTICLES': 'Статьи',
    'FIRST_NEED_SERVICES': 'Службы первой необходимости',
    'FEEDBACK': 'Обратная связь',
    'LETTERS': 'Буквы',
    'ARMENIA_ARCAX': 'Армения, Нагорный Карабах',
    'ORDER_BY': 'Сортировать по',
    'BEST_HIT': 'Лучшее совпадение',
    'DISTANCE':'Расстояние',
    'SELECTED_VALUES': 'Выбранные значения',
    'CARD_VIDEO':'Видео',
    'CARD_MAP':'Карта',
    'CARD_PHOTO':'Фото',
    'KM': 'км'
};

const ERRORS = {
    'ERROR_404_TITLE': 'That page can’t be found.',
    'ERROR_404_TEXT': 'It looks like nothing was found at this location.',
    'ERROR_500_TITLE': 'Internal Server Error',
    'ERROR_500_TEXT': 'The server encountered an internal error and was unable to complete your request. Please contact (admin@spyur.am - contact word here must be as a link with mailto:admin@spyur.am)the server administrator if this error reappears multiple times, please include the technical details below in your report.',
};

module.exports = R.mergeAll([adm_const_arr, lng, alphabet, NEW_MESSAGES, ERRORS]);
