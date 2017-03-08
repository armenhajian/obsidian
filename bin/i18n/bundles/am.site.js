const R = require('ramda');

/////////////////////////////////////////////////////  MAIN PAGE  ////////////////////////////////////////////////////////////////////////////
const lng = {
	'ALL': 'Բոլորը',
	'FILTER': 'Ֆիլտրել',
	'SITE_TITLE': '• ՀԱՅԱՍՏԱՆ (ԵՐԵՎԱՆ) • ՍՓՅՈՒՌ',
	'ARIAL_AMU': 'Բեռնել հայերեն Unicode <a class="underline" href="/downloads/Armenian_Unicode_Keyboard_Driver.zip" title="ստեղնաշարը">ստեղնաշարը</a> և <a class="underline" href="/downloads/ArianAMU.zip" title="տառատեսակը">տառատեսակը</a>',
	'SPYUR_COMPANY_REGISTR': '«ՍՓՅՈՒՌ» ՏԵՂԵԿԱՏՎԱԿԱՆ ՀԱՄԱԿԱՐԳ',
	'ARMENIA': 'ՀԱՅԱՍՏԱՆ • ԵՐԵՎԱՆ',
	'BUSINESS_DIRECTORY': 'ԱՊՐԱՆՔՆԵՐԻ/ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ԴԱՍԱԿԱՐԳԻՉ',
	'YELLOW_PAGES': 'ԳՈՐԾՈՒՆԵՈՒԹՅԱՆ ՏԵՍԱԿՆԵՐԻ ԴԱՍԱԿԱՐԳԻՉ ',
	'COMPANY_REGISTRATION': 'ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐԻ ԳՐԱՆՑՈՒՄ?',
	'ADVERTISEMENTS': 'ԼՐԱՑՈՒՑԻՉ ՎԵԲ-ԷՋԵՐ',
	'ABOUT_SPYUR': '«Սփյուռի» մասին',
	'HOME_YP_TITLE1': 'Տեղեկատվություն 16000',
	'HOME_YP_TITLE2': 'կազմակերպության մասին',
	'HOME_BD_TITLE1': '19000 ապրանք',
	'HOME_BD_TITLE2': 'և ծառայություն',
	'COMPANIES': 'Կազմակերպության անվանում',
	'PRODUCT_SERVICE': 'Ապրանք, ծառայություն',
	'WHAT': 'Ինչ',
	'WHERE': 'Որտեղ',
	'IN_WHAT': 'Կազմակերպություն/կայք կամ ապրանք/ծառայություն կամ բրենդ',
	'IN_WHERE': 'Նշել երկիրը, մարզը, քաղաքը, փողոցը, շենքը',
	'VIRTUAL_KEYBOARD': 'Վիրտուալ ստեղնաշար',
	'ONLY_BY_NAME': 'Միայն անվանումով',
	'WITH_PHOTO': 'Նկարով',
	'COUNTRY_ALL': 'Բոլորը',
	'SEARCH': 'Որոնել',
    'SEARCH_PLACEHOLDER': 'Ընկերության անվանում, գործունեություն, հասցե, հեռախոս...',
	'SEARCH_COMPANY': 'Որոնել կազմակերպություն',
	'SELECT_PRODUCT_SERVICE': 'Ընտրել անհրաժեշտ ապրանքը/ծառայությունը և սեղմել «Որոնել կազմակերպություն» կոճակը',
	'ADV_SEARCH': 'ԸՆԴԼԱՅՆՎԱԾ ՈՐՈՆՈՒՄ',
	'COMPANIES_TAB': 'ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐ',
	'TRADEMARKS_TAB': 'ԱՊՐԱՆՔԱՆԻՇԵՐ',
	'CONTACTS_TAB': 'ԿՈՆՏԱԿՏՆԵՐ',
	'ACTIVITIES_TAB': 'ԳՈՐԾՈՒՆԵՈՒԹՅՈՒՆ',
	'DOCUMENTS_TAB': 'ՓԱՍՏԱԹՂԹԵՐ',
	'OTHER_TAB': 'ԱՅԼ',
	'MOST_SEARCHABLE': 'ԱՌԱՎԵԼ ՀԱՃԱԽ ՓՆՏՐՈՒՄ ԵՆ',
	'PRODUCTS_AND_SERVICES': '6 ՏԵՂԵԿԱՏՈՒ &nbsp;• &nbsp;30 000 օգտվող օրական &nbsp;• &nbsp;20 000 կազմակերպություն',
	'DIRECTORY': 'Տեղեկագիրք',
	'CD_EDITION': 'PC-հրատարակում',
	'PHONE_SERVICE': 'Հեռախոսային տեղեկատու',
	'MOBILE_EDITION': 'Բջջային հավելվածներ',
	'WEBSITES': 'Վեբ-կայք',
	'KOMPASS_ARMENIA': 'Կոմպաս Հայաստան',
	'KOMPASS_DESCRIPTION': 'Worldwide B to B company search engine',
	'COPYRIGHT': '<a href="/am/copyright" id="copyright" title="Copyright © Spyur LLC 1997-2015">Copyright © "Spyur" LLC 1997-2015</a>',
	'BOTTOM_HOME_LINK': '<a id="created_by" target="_blank" title="Spyur" href="http://www.spyur.am">Home: www.spyur.am</a>',
	'AM': 'Հայերեն',
	'RU': 'Ռուսերեն',
	'EN': 'Անգլերեն',
	'logo_space': 'LOGO SPACE',
	'free_member': 'Free Member',
	'ADD_COMPANY':'Ավելացնել ընկերություն',
	'ARM_YELLOW_PAGES':'ՀԱՅԱՍՏԱՆԻ ԴԵՂԻՆ ԷՋԵՐ',
	'ARM_BUSINESS_DIRECTORY':'ՀԱՅԱՍՏԱՆԻ ԳՈՐԾԱՐԱՐ ՏԵՂԵԿԱՏՈՒ',
	'SEND_REQUEST_BUTTON':'Հարցման ուղարկում',

/////////////////////////////////////////////////////  SEARCH RESULT  ////////////////////////////////////////////////////////////////////////////

	'SEARCH_RESULTS': 'ՈՐՈՆՄԱՆ ԱՐԴՅՈՒՆՔԸ',
	'SEARCH_OUT_OF_ORDER': '<font color=red>Որոնումը «Ինչ», «Որտեղ» դաշտերով չի աշխատում, քանի որ իրականացվում է կայքի տվյալների թարմացում: Մինչ այդ կարող եք օգտվել «ԸՆԴԼԱՅՆՎԱԾ ՈՐՈՆՈՒՄ» բաժնից</font>',
	'WHAT_SEARCH_TIME_OVER': 'Փորձեք ճշգրտել որոնվող տեքստը «Ինչ» դաշտում',
	'WHERE_SEARCH_TIME_OVER': 'Փորձեք ճշգրտել որոնվող տեքստը «Որտեղ» դաշտում',
	'TOTAL_COUNT': 'Գտնվել է %s կազմակերպություն',
	'TOTAL_COUNT_PRODUCT_SERVICE': '<div id="strong_count" class="strong_count" >Գտնվել է %d ապրանք/ծառայություն</div><br /><hr class="myclass" style="background: #CCC;" />',
	'TOTAL_COUNT_ACTIVITY_TYPE': '<div id="strong_count" class="strong_count" >Գտնվել է %d գործունեության տեսակ</div><br /><hr class="myclass" style="background: #CCC;" />',
	'BACK_TO_SEARCH_RESULT': '<font color=#008800><strong>ՎԵՐԱԴԱՐՁ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆԿԻՆ</strong></font>',
	'SEARCH_RESULT_WITHOUT_MAP': 'ԱՌԱՆՑ ՔԱՐՏԵԶԻ',
	'SEARCH_RESULT_MAP': 'ՔԱՐՏԵԶՈՎ',
	'BY_SPYUR': 'ԸՍՏ «ՍՓՅՈՒՌԻ»',
	'BY_ALPHABET': 'ԸՍՏ ԱՅԲՈՒԲԵՆԻ',
	'YEAR_ESTABLE': 'Հիմնադրման տարի՝ %year%',
	'TOTAL_COUNT_TRADE_MARK': '<strong style="font-size: 13px;">Գտնվել է %s ապրանքանիշ</strong><hr style="background: #CCC;" />',
	'TOTAL_COUNT_SEARCH_BD_YP': '<strong style="font-size: 13px;">Գտնվել է %d ապրանք/ծառայություն/գործունեություն</strong><hr style="background: #CCC;" />',


	'MISSING_WORDS': '%s <font color=red> բացակայում է տվյալների բազայից, խնդրում ենք ուղղել կամ փոփոխել </font>',
	'TRY_SEPARATE': '<font color=red>Փորձեք «Ինչ» դաշտում փոխել կամ պակասեցնել բառերը կամ որոնել առանձին բառերով.</br> %s </font>',
	'TRY_SEPARATE_IN_WHERE': '<font color=red>Փորձեք «Որտեղ» դաշտում փոխել կամ պակասեցնել բառերը կամ որոնել առանձին բառերով.</br> %s </font>',
	'TRY_ONE_WORD_IN_WHAT': '<font color=red>Փորձեք «<strong>Ինչ</strong>» դաշտում որոնել <strong>մեկ բառով</strong></font>',
	'TRY_ONE_WORD_IN_WHERE': '<font color=red>Փորձեք «<strong>Որտեղ</strong>» դաշտում որոնել <strong>մեկ բառով</strong></font>',
	'TRY_ONE_FILD': '<font color=red>Փորձեք որոնել <strong>մեկ դաշտով</strong></font>',
	'TRY_ONLY_IN_WHAT': '<font color=red>Փորձեք %s որոնել <strong>առանց «Որտեղ»</strong> դաշտի</font>',
	'TRY_IN_WHAT': '<font color=red>Փորձեք %s բառով որոնել «<strong>Ինչ</strong>» դաշտում</font>',
	'TRY_IN_WHERE': '<font color=red>Փորձեք %s բառով որոնել «<strong>Որտեղ</strong>» դաշտում</font>',
	'TRY_CORRECT': '<font color=red>Փորձեք որոնել %s բառով</font>',
	'TRY_IN_OTHER_FIELD': '<font color=red>Փորձեք որոնել մեկ այլ դաշտում</font>',
	'TRY_CORRECT_IN_WHAT': '<font color=red>Փորձեք որոնել %s բառով «<strong>Ինչ</strong>» դաշտում</font>',
	'TRY_CORRECT_IN_WHERE': '<font color=red>Փորձեք որոնել %s բառով «<strong>Որտեղ</strong>» դաշտում</font>',

	'TRY_ONE_WORD_IN_NAME': '<font color=red>Փորձեք «<strong>Կազմակերպության անվանում</strong>» դաշտում որոնել <strong>մեկ բառով</strong></font>',
	'TRY_ONE_WORD_IN_TRADEMARK': '<font color=red>Փորձեք «<strong>Ապրանքանիշ</strong>» դաշտում որոնել <strong>մեկ բառով</strong></font>',
	'TRY_ONE_WORD_IN_PRODUCTS': '<font color=red>Փորձեք «<strong>Ապրանք, ծառայություն</strong>» դաշտում որոնել <strong>մեկ բառով</strong></font>',
	'TRY_ONE_WORD_IN_FIELD': '<font color=red>Փորձեք «<strong>%s</strong>» դաշտում որոնել <strong>մեկ բառով</strong></font>',


	'ON_FILD_SEARCH': '<font color=red>Փորձեք որոնել մեկ դաշտով</font>',
	'IN_FIELD': 'դաշտում?',

	'IF_YOUR_ARE_MEAN': '<font color=red>Հնարավոր է դուք նկատի ունեիք</font>',
	'YOUAREMEAN_AND_OTHERFIELD': 'Փորձեք որոնել մյուս դաշտում Հնարավոր է դուք նկատի ունեիք',

	'FIRM_OLD_NAME': 'Կազմակերպությունը գտնվել է <font style="color: #900">հին անվանումով</font>',
	'FIRM_ALT_NAME': 'Կազմակերպությունը գտնվել է <font style="color: #900">ալտերնատիվ անվանումով</font>',
	'FIRM_META_NAME': 'Կազմակերպությունը գտնվել է <font style="color: #900">անվանման բանալի բառով</font>',
	'CLASS_ALT_NAME': '<font style="color: #900">%p</font>',
	'OTHER_RESULTS': '<font color=#008800>ՈՐՈՆՄԱՆ ԱՅԼ ԱՐԴՅՈՒՆՔՆԵՐ՝ մասնակի համընկնում մեկ տողում</font>',
	'OTHER_RESULTS_DIFFERENT': '<font color=#008800>ՈՐՈՆՄԱՆ ԱՅԼ ԱՐԴՅՈՒՆՔՆԵՐ՝ համընկնում տարբեր տողերում</font>',
	'OTHER_RESULTS_YES_DESCRIPTION': 'Որոնումն իրականացվել է միայն <>, <>, <> բառերով',
	'OTHER_RESULTS_NO_DESCRIPTION': 'Ստուգեք <>, <> բառերի ուղղագրությունը',
	'OTHER_RESULTS_TARASXAL': '<font color=#008800>ՈՐՈՆՄԱՆ ԱՅԼ ԱՐԴՅՈՒՆՔՆԵՐ՝ համընկնում տառասխալով</font>',
	'SEE_MORE': 'Տեսնել ավելին',
	'NEXT' : 'Հաջորդ',
	'PREVIOS' : 'Նախորդ',
/////////////////////////////////////////////////////  ADVANCED SEARCH  ////////////////////////////////////////////////////////////////////////////

	'ADV_SEARCH_TITLE': 'Ընդլայնված որոնում',
	'ADV_SEARCH_FORM_TITLE': 'ՈՐՈՆՄԱՆ ՀԱՅՏԱՆԻՇԵՐ',
	'BACK_ADV_SEARCH_FORM': '<font color=#008800>ՈՐՈՆՄԱՆ ՀԱՅՏԱՆԻՇԵՐԻ ՓՈՓՈԽՈՒՄ</font>',
	'MAIN': 'Հիմնական',
	'FIRM_NAME': 'Կազմակերպության անվանում',
	'TRADEMARK': 'Ապրանքանիշ',
	'ADV_PRODUCT_SERVICE': 'Ապրանք, ծառայություն',
	'MIN_3_CHARS': 'Որոնում և ընտրում ապրանքների/ծառայությունների, գործունեության տեսակների',
	'GO': 'Որոնել ապրանք/ծառայություն',
	'NO_RESULT': '<font color=red>Ցավոք, Ձեր հարցմանը համապատասխան ոչինչ չի գտնվել</font>',
	'DISTRIBUTORS': 'Արտահանում/Ներմուծում',
	'EXPORTERS': 'Արտահանողներ',
	'IMPORTERS': 'Ներմուծողներ',
	'ADDRESS': 'Հասցե',
	'COUNTRY': 'Երկիր',
	'REGION': 'Մարզ/շրջան',
	'DISTRICT': 'Թաղամաս',
	'TOWN': 'Քաղաք/գյուղ',
	'STREET': 'Փողոց',
	'RENAME': 'անվանափոխվել է',
	'COMMUNITY': 'Տարածաշրջան',
	'BUILDING': 'Շենք/տուն',
	'CONTACTS': 'Կապ',
	'PHONE': 'Հեռախոս',
	'SITE': 'Վեբ-կայք',
	'EXECUTIVE': 'Ղեկավար',
	'NAME': 'Անուն',
	'SURNAME': 'Ազգանուն',
	'WORKING_DAYS': 'Աշխատանքային օրեր',
	'MON': 'Երկ',
	'TUE': 'Երք',
	'WED': 'Չրք',
	'THU': 'Հնգ',
	'FRI': 'Ուրբ',
	'SAT': 'Շբթ',
	'SUN': 'Կիր',
	'WORKING_HOURS': 'Աշխատանքային ժամեր',
	'START': 'Սկսած',
	'END': 'Մինչև',
	'HOUR_24': 'Շուրջօրյա',
	'YEAR_ESTABLISHED': 'Հիմնադրման տարի',
	'OTHER': 'Այլ',
	'WORKERS_COUNT': 'Աշխատողների քանակ',
	'PROPERTY_FORM': 'Սեփականության ձև',
	'SYMBOL_NUMBER_ERROR': 'Անհրաժեշտ է մուտքագրել առնվազն 2 նիշ',

/////////////////////////////////////////////////////  "BUSINESS DIRECTORY" AND "YELLOW PAGES"  ///////////////////////////////////

	'BD_ALPHABET': 'Որոնում ըստ կազմակերպությունների այբբենական ցանկի',
	'YP_ALPHABET': 'Որոնում ըստ կազմակերպությունների այբբենական ցանկի',
	'BD_ACTIVITIES_ALPHABET': 'Որոնում ըստ ապրանքների/ծառայությունների այբբենական ցանկի',
	'YP_ACTIVITIES_ALPHABET': 'Որոնում ըստ գործունեության տեսակների այբբենական ցանկի',
	'BD_ACTIVITIES': 'Ապրանքների/ծառայությունների դասակարգիչ',
	'YP_ACTIVITIES': 'Գործունեության տեսակների դասակարգիչ',
	'NUM_BTN': '0-9',
	'TOTAL_CHECKED': 'Ընտրված դասեր`',
	'RESET': 'Մաքրել',
	'YP_FORM_TITLE': 'ՈՐՈՆՄԱՆ ՀԱՅՏԱՆԻՇԵՐ',
	'BD_FORM_TITLE': 'ՈՐՈՆՄԱՆ ՀԱՅՏԱՆԻՇԵՐ',

/////////////////////////////////////////////////////  COMPANY WEBPAGE  ///////////////////////////////////////////////////////////

	'MAP_LOCATION': 'Դիրքը քարտեզի վրա',
	'ADD_WEBPAGE': 'Լրացուցիչ վեբ-էջ',
	'SEND_BUSINESS_MESSAGE': 'Գների հարցում',
	'SEND_FREE_MESSAGE': 'Ազատ հաղորդագրություն',
	'SEND_EMAIL': 'ուղարկել նամակ',
	'FOTOSHARK': 'ՖՈՏՈՇԱՐՔ',
	'VIDEOSHARK': 'ՏԵՍԱՇԱՐՔ',
	'OPEN' : 'ԲԱՑ Է',
	'CLOSED' : 'ՓԱԿ Է',
	'CALL' : 'Զանգել',
	'PHONE_NUMBERS' : 'Հեռախոսներ',
	'SHOW_ALL_ADDRESSES' : 'Ցույց տալ բոլոր հասցեները',
	'DIRECTION' : 'Երթուղի',
	'COMMUNICATION_MEANS' : 'Կապի էլեկտրոնային միջոցներ',
	'ALL_ADDRESSES' : 'Բոլոր հասցեները',
	'ACTIVITY' : 'Գործունեություն',
	'DOCUMENTS' : 'Փաստաթղթեր',
	'TRADEMARKS' : 'Ապրանքանիշեր',
	'INFO_UPDATE_DATE' : 'Տեղեկությունների թարմացման ամսաթիվ',
	'KEYWORDS' : 'Որոշ բանալի բառեր',
	'FAX' : 'Ֆաքս',
	'WORKS' : 'աշխատում է',
    'PRODUCTS' : 'Ապրանքներ',

	//'COMMENT_STATUS'		: array(
	//array(
	//'from':50 ,
	//'to':199 ,
	//"text":'Կազմակերպության հետ կապվելիս խնդրում ենք նշել «Սփյուռը» որպես տեղեկությունների աղբյուր:'),

	//array(
	//'from':40 ,
	//'to':49 ,
	//"text":'Կազմակերպության հետ կապվելիս խնդրում ենք նշել «Սփյուռը» որպես տեղեկությունների աղբյուր:'),

	//array(
	//'from':30 ,
	//'to':39 ,
	//"text":'Կազմակերպության հետ կապվելիս խնդրում ենք նշել «Սփյուռը» որպես տեղեկությունների աղբյուր:'),

	//array(
	//'from':20 ,
	//'to':29 ,
	//"text":'Կազմակերպության հետ կապվելիս խնդրում ենք նշել «Սփյուռը» որպես տեղեկությունների աղբյուր:'),

	//array(
	//'from':1 ,
	//'to':19 ,
	//"text":'Կազմակերպության հետ կապվելիս խնդրում ենք նշել «Սփյուռը» որպես տեղեկությունների աղբյուր:'),

	//),

/////////////////////////////////////////////////////  SEND MESSAGE  /////////////////////////////////////////////////////////////////

	'RECEIVER': 'Հասցեատեր՝',
	'SUBJECT': 'Թեմա',
	'BUSINESS_MESSAGE_SUBJECT': 'Price request',
	'REQUEST_MESSAGE_SUBJECT': 'Request for additional information',
	'REQUEST_MESSAGE_NOTE': '<font color=red>Էլ. փոստ չունեցող կազմակերպությունները ցանկում չեն ընդգրկվել</font>',
	'MESSAGE': 'Հաղորդագրության բովանդակություն',
	'DEAR': 'Հարգելի',
	'THICK_OFF_PRODUCTS': '<font color=#8c8c8c>Նշեք Ձեզ հետաքրքրող ապրանքները/ծառայությունները</font>',
	'CHECK_ALL': 'Նշել բոլորը',
	'BEST_REGARDS': 'Հարգանքով`',
	'SENDER_INFO': 'Ուղարկողի տվյալներ',
	'EMAIL': 'Էլ. փոստ',
	'VERIF_CODE': 'Ստուգման կոդ',
	'END_OF_FREE_MESSAGE': '<em>Նամակը ուղարկված է <a href="http://www.spyur.am">www.spyur.am</a> վեբ-կայքի միջոցով</em>',
	'SEND': 'Ուղարկել',

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	'ERROR_SENDER_FIRM_NAME_LONG': '<font color=red>Կազմակերպության անվանումը շատ երկար է: Այն չպետք է գերազանցի 100 սիմվոլը</font> ',

	'ERROR_SENDER_NAME_LONG': '<font color=red>Անունը շատ երկար է: Այն պետք է չգերազանցի 50 սիմվոլը</font>',

	'ERROR_SENDER_EMAIL_LONG': '<font color=red>Էլ. փոստի հասցեն շատ երկար է: Այն պետք է չգերազանցի 50 սիմվոլը</font>',

	'ERROR_SENDER_PHONE_INVALID': '<font color=red>Հեռախոս դաշտում կան ոչ թույլատրելի սիմվոլներ</font>',

	'ERROR_VERIFICATION_CODE': '<font color=red>Ստուգման կոդը սխալ է</font>',
	'NO_ITEMS_CHECKED': 'Դուք չեք նշել որևէ ապրանք/ծառայություն',
	'NO_COMPANIES_CHECKED': 'Դուք չեք ընտրել որևէ կազմակերպություն',
	'ERROR_SENDER_NAME': '<font color=red>Ձեր անունը նշված չէ</font>',
	'ERROR_SENDER_CONTRY': '<font color=red>Երկիրը նշված չէ</font>',
	'ERROR_SENDER_EMAIL': '<font color=red>Էլ. փոստը նշված չէ</font>',
	'ERROR_EMAIL_INVALID': '<font color=red>Էլ. փոստը սխալ է</font>',
	'ERROR_MESSAGE': '<font color=red>Հաղաորդագրությունը բացակայում է</font>',
	'SENT_SUCCESSFULLY': 'Շնորհակալությու՛ն, Ձեր հաղորդագրությունն ուղարկված է: Ձեր էլ. փոստի հասցեին ուղարկված է հաղորդագրության պատճենը',
	'REQUEST_MESSAGE': 'Խնդրում եմ <a href="http://www.spyur.am">www.spyur.am</a> վեբ-կայքի <a href="#company_address#">Ձեր կազմակերպության էջում</a> ներկայացված <br /><strong>«%p»</strong> <br />ապրանքի/ծառայության/գործունեության վերաբերյալ ուղարկել ինձ ավելի մանրամասն տեղեկություններ',
	'SUBJECT_COPY_MESSAGE': 'Copy of message sent from www.spyur.am',
	'COPY_MESSAGE_HEADER': '<strong>Դուք <a href="http://www.spyur.am">www.spyur.am</a> վեբ-կայքի միջոցով ուղարկել եք հետևյալ հաղորդագրությունը.</strong>',
////////////////////////////////////////////////////*REQUEST MESSAGES*///////////////////////////////////////////////////////////////
	'SEND_MESSAGE':'ՀԱՂՈՐԴԱԳՐՈՒԹՅԱՆ ՈՒՂԱՐԿՈՒՄ',
	'SEND_MESSAGE_DESCRIPTION': 'Տրված ցուցակից ընտրեք այն կազմակերպությունները, որոնց ղեկավարներին կուզենայիք ուղարկել հարցում հետևյալ ապրանքի/ծառայության/գործունեության վերաբերյալ ավելի մանրամասն տեղեկություններ ստանալու համար.',
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	'MAP': 'Քարտեզ?',
	'CLOSE': 'Փակել?',
	'MORE': 'Ավելին',
	'BACK': 'Վերադառնալ?',

	/*Notice for noscripte*/
	'NOSCROPT': 'Տվյալ ֆորմաները լրացնելու համար խնդրում եմ միաչրեք Ձեր դիտաևկիչի(Browser) "Javascrip"-ը',
    'STATISTICS':'Կայքի վիճակագրությունը​',

///////////////////////////////////////////////////*START COMPANY REGISTRATION FORM*///////////////////////////////////////////////////

	'FIRM_BASIC_DATA': 'Հիմնական տվյալներ',
	'FIRM_NAME':'Կազմակերպության անվանում',
	'FIRM_STYLE': 'Կազմակերպաիրավական ձև',
	'MESSAGE_BODY':'Հաղորդագրության բովանդակություն',
	'FIRM_ACTIVITY': 'Ընդհանուր գործունեություն',
	'FIRM_CONTACT_DATA': 'Կոնտակտային տվյալներ',
	'REGION_REG_FORM': 'Փոստ. ինդեքս, մարզ/շրջան',
	'FLOOR_ROOM': 'Հարկ, սենյակ',
	'PHONE_COUNTRY_CODE': 'Երկրի կոդ',
	'PHONE_TOWN_CODE': 'Քաղաքի կոդ',
	'PHONE_NUMBER': 'Համար',
	'FIRST': '1-ին',
	'SECOND': '2-րդ',
	'CONTACT_PERSON': 'Կոնտակտային անձ',
	'POSITION': 'Պաշտոն',
	'APPLICATION_SEND_OK': `<div align=center><font color=red>Շնորհակալություն Ձեր տվյալները «Սփյուռին» տրամադրելու համար:<br  />
												Ձեր հայտը կուսամնասիրվի և 3 աշխատանքային օրվա ընթացքում Ձեզ հետ կկապվի «Սփյուռի» ներկայացուցիչը:<br  />
												Ձեր էլ. փոստի հասցեին ուղարկվել է Ձեր կողմից լրացված հայտի պատճենը:</font></div>`,
	'BACK_LETTER_START': `<strong>Դուք www.spyur.am կայքի միջոցով «Սփյուռի» տվյալների շտեմարանում գրանցվելու համար «Սփյուռին» ներկայացրել
												եք հետևյալ հայտը</strong>`,
	'BACK_LETTER_END': `<strong>Շնորհակալություն Ձեր տվյալները «Սփյուռին» տրամադրելու համար:
												Ձեր հայտը կուսամնասիրվի և 3 աշխատանքային օրվա ընթացքում Ձեզ հետ կկապվի «Սփյուռի» ներկայացուցիչը:</strong>`,
	'ADD_COMPANY_STATIC_TEXT':'<h2>ԿԱԶՄԱԿԵՐՊՈՒԹՅԱՆ ՆԵՐԱՌՈՒՄ WWW.SPYUR.AM ՎԵԲ-ԿԱՅՔՈՒՄ</h2>' +
	'	<p>Հայաստանում, Լեռնային Ղարաբաղում և սփյուռքում գործող ցանկացած կազմակերպություն և պետական կառույց կարող է ընդգրկվել միաժամանակ «Սփյուռի» 6 տեղեկատուներում (հեռախոսային տեղեկատու, Spyur.am վեբ-կայք, բջջային հավելվածներ, համակարգչային ծրագիր, տեղեկագիրք, «Կոմպաս Հայաստան»):' +
	'Կազմակերպությունը տեղեկատուներում կարող է ներկայացվել 2 կարգավիճակով.</p>' +
	'<h3>1. Անվճար բաժանորդ</h3>' +
'<p>Ապահովում է.</p>' +
	'<ul class="list-bullet">' +
	'	<li>կազմակերպության որոնում սահմանափակ տվյալներով</li>' +
	'<li>որոնման արդյունքի ցանկում ցածր դիրք՝ «Արտոնյալ բաժանորդների» նկատմամբ</li>' +
	'<li>տեղեկությունների ներկայացում սահմանափակ ծավալով</li>' +
	'<li>կազմակերպության ներկայացում «Սփյուռի» 4 տեղեկատուներում (չի ներկայացվում տեղեկագրքում և «Կոմպաս Հայաստանում»</li>' +
	'</ul>' +
	'<h3>2. Արտոնյալ բաժանորդ՝ «Դեպի վեր» ծառայություն (վճարովի)</h3>' +
'<p>Ապահովում է.</p>' +
	'<ul class="list-bullet">' +
	'	<li>կազմակերպության որոնում բոլոր ներկայացված տվյալներով</li>' +
	'<li>որոնման արդյունքի ցանկում բարձր դիրք՝ «Անվճար բաժանորդների» նկատմամբ</li>' +
	'<li>տվյալների ներկայացում ամբողջական ծավալով (մինչև 30 տեսակի տվյալ)</li>' +
	'<li>կազմակերպության ներկայացում «Սփյուռի» 6 տեղեկատուներում</li>' +
	'</ul>' +
'<p>Ինչպես նաև.</p>' +
	'<ul class="list-bullet">' +
	'	<li>արտահերթ սպասարկում «Սփյուռի» հեռախոսային տեղեկատուում</li>' +
	'<li>հեռախոսային հարցումների վիճակագրության օնլայն-դիտում</li>' +
	'<li>հարցումների տարեկան վիճակագրության տրամադրում (հեռախոս, վեբ-կայք)</li>' +
	'<li>տեղեկագրքի 1 օրինակի առաքում</li>' +
	'<li>տենդերների մասին տեղեկացում</li>' +
	'<li>ուղիղ կապ հաճախորդի հետ</li>' +
	'<li>այլ արտոնություններ</li>' +
	'</ul>' +
	'<h2>«ՍՓՅՈՒՌԻ» ՏՎՅԱԼՆԵՐԻ ՇՏԵՄԱՐԱՆՈՒՄ ԳՐԱՆՑՄԱՆ ՀԱՅՏ</h2>',


////////////////////////////////////////////////////////*ERROR MESSAGES*/////////////////////////////////////////////////////////////////

	'FIRM_NAME_EMPTY': '<font color=red>Կազմակերպության անվանումը նշված չէ</font>',
	'FIRM_ACTIVITY_EMPTY': '<font color=red>Ընդհանուր գործունեությունը նշված չէ</font>',
	'COUNTRY_EMPTY': '<font color=red>Երկիրը նշված չէ</font>',
	'TOWN_EMPTY': '<font color=red>Քաղաքը/գյուղը նշված չէ</font>',
	'PHONE1_COUNTRY_CODE_EMPTY': '<font color=red>1-ին հեռախոսի երկրի կոդը նշված չէ</font>',
	'PHONE1_TOWN_CODE_EMPTY': '<font color=red>1-ին հեռախոսի քաղաքի կոդը նշված չէ</font>',
	'PHONE1_NUMBER_EMPTY': '<font color=red>1-ին հեռախոսի համարը նշված չէ</font>',
	'NAME_EMPTY': '<font color=red>Կոնտակտային անձի անունը նշված չէ</font>',
	'EMAIL_EMPTY': '<font color=red>Կոնտակտային անձի էլ. փոստը նշված չէ</font>',
	'EMAIL_INVALID': '<font color=red>Կոնտակտային անձի էլ. փոստը սխալ է</font>',


///////////////////////////////////////////////////*END COMPANY REGISTRATION FORM*////////////////////////////////////////////////////////////

	'LOG_VIEW_IMAGE_CODE': '18',
	'LOG_VIEW_VIDEO_CODE': '19',
	'LOG_VIEW_LIVE_SITE_CODE': '20',
	'LOG_VIEW_SIMPLE_SEARCH_CODE': '6',
	//TODO: Remove letters from here after solving alphabet issue
	'letters' : ["Ա","Բ","Գ","Դ","Ե","Զ","Է","Ը","Թ","Ժ","Ի","Լ","Խ","Ծ","Կ","Հ","Ձ","Ղ","Ճ","Մ","Յ","Ն","Շ","Ո","Չ","Պ","Ջ","Ռ","Ս","Վ","Տ","Ր","Ց","ՈՒ","Փ","Ք","Օ","Ֆ"]
};

//////////////////////////////  ALPHABET  ////////////////////////////////////////
const alphabet = {
	'letters' : ["Ա","Բ","Գ","Դ","Ե","Զ","Է","Ը","Թ","Ժ","Ի","Լ","Խ","Ծ","Կ","Հ","Ձ","Ղ","Ճ","Մ","Յ","Ն","Շ","Ո","Չ","Պ","Ջ","Ռ","Ս","Վ","Տ","Ր","Ց","ՈՒ","Փ","Ք","Օ","Ֆ"]
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
	"Հունվար",
	"Փետրվար",
	"Մարտ",
	"Ապրիլ",
	"Մայիս",
	"Հունիս",
	"Հուլիս",
 	"Օգոստոս",
 	"Սեպտեմբեր",
 	"Հոկտեմբեր",
 	"Նոյեմբեր",
 	"Դեկտեմբեր"
];

const weekdays = [
	"Կիրակի",
	"Երկուշաբթի",
	"Երեքշաբթի",
	"Չորեքշաբթի",
	"Հինգշաբթի",
	"Ուրբաթ",
	"Շաբաթ"
];

const week_cal = [
	"երկ",
 	"երք",
 	"չրք",
 	"հնգ",
 	"ուրբ",
 	"շբթ",
 	"կրկ"
];


const adm_const_arr = {
	'ZIP_ATTACH_PICS': 'Բեռնել նկարների ZIP ֆայլը',
	'DEVELOPED': 'Developed by<br /><a href="http://www.smartsystemsllc.com" class="smart">Smart Systems</a>',
	'HOME': 'Home',
	'ROOT': 'Root',
	'HEADER': 'Head text',
	'MOVE_TO': 'Գնալ',
	'TITLE': ' "VALE" Administration',
	'YES': 'Այո',
	'NO': 'Ոչ',
	'SHOW_ALL': 'Ցույց տալ բոլորը',
	'CHECK': 'Նշել',
	'DELETE_ALL_CHECKED': 'Ջնջել բոլոր նշվածները',
	'WARNING': 'Զգուշացում',
	'DELETE_WARNING': 'Բոլոր նշված Էլեմենտներն ու ենթաէլէմենտները կջնջվեն և չեն կարող վերականգնվել: Դուք կարող եք տեսնել ջնջվող էլեմենտների id-ները այստեղ:',
	'TOTAL_COUNT': '<strong style="font-size: 13px;">Գտնվել է %d արդյունք</strong><hr style="background: #CCC;" />',
	'NEWS': 'Նորություններ',
	'SAVE': 'Պահպանել',
	'EDIT': 'Խմբագրել',
	'DELETE': 'Ջնջել',
	'UPDATE': 'Պահպանել',
	'UPLOAD': 'Upload',
	'LOAD_EDITOR': ' HTML Խմբագիր',
	'NOTE': 'Նշում',
	'RESET': 'Ջնջել',
	'CANCEL': 'Չեղյալ համարելլ',
	'NEW': 'Նոր',
	'SEND': 'Ուղարկել',
	'SEARCH': 'Փնտրել',
	'ADM_MENU': 'Admin MENU',
	//'ADM_MENU'				: 'Ադմինիստրատորի մենյու',
	'SUBTITLE': 'Ենթավերնագիր',
	'RATE_BY': 'Առք',
	'RATE_SALE': 'Վաճառք',
	'FILE': 'Ֆայլ',
	'META_TAG': 'Կոդավորում',
	'PAGES': 'Արդյունքների էջ',
	'ORDER_ASC': 'Դասավորել ըստ աճման',
	'ORDER_DESC': 'Դասավորել ըստ նվազման',

	'CHANGE_YOUR_PASSWORD': 'Փոխել գաղտնաբառը',
	'USERNAME': 'Օգտագործող',
	'RE_PASSWORD': 'Կրկնել գաղտնաբառը',
	'PASSWORD': 'Գաղտնաբառ',
	'OLDPASS': 'Հին գաղտնաբառ',
	'HINT_POSITION': 'Կայքում էլեմենտները կդասավորվեն հետևյալ թվի հերթականությամբ:',
	'HINT_NAME': 'Ներմուծեք անունը:',
	'HINT_FIELD_TYPE_ID': 'Ընտրեք ցուցակից դաշտի տեսակը:',
	'HINT_IMAGE': 'Click Browse then point to the image file.',
	'HINT_SHORT_TEXT': 'Copy short version of the text here. It is not recommended to put long texts here!',
	'HINT_UTIME': 'Սեղմեք այս կոճակը և ընտրեք համապատասղան ամսաթիվ',
	'HINT_ST_ACTIVE': 'Նշելով այս, Դուք տվյալ էլեմենտը դարևձնում եք հասանելի:',

	'HINT_NAME_IN_URL': 'Ֆայլի անվանումը: Խնդրում ենք օգտագործել միայն տառեր, թվեր և տակի գծիկ: Այլ նշանները ավտոմատ մոդիֆիկացվելու են: Մի ընդգրկեք  .php, .htm և այլն:',
	'HINT_TITLES': 'Ֆայլի HTML վերնագիրը.',
	'HINT_META_DESCRIPTION': 'HTML Մետա Նկարագրություն.',
	'HINT_META_KEYWORDS': 'HTML Մետա Բանալի բառեր.',

	'PRINT': 'Տպել',
	'VIEW': 'Դիտել',
	'SAVE_INFO': 'Պահպանել տեղեկատվությունը.',
	'PERMISSIONS': 'Թույլատվություններ',
	'MENU': 'Մենյու',
	'CONFIRM': 'Համոզված եք',
	'REQUEST': 'Հարցում',

	'SEND_NEWSLETTER': 'Ուղարկել նորություններ',
	'SEND_REQUEST': 'Ուղարկել հաղորդագրություն',
	'ID': 'ID',
	'TYPE': 'Տեսակ',
	'FILENAME': 'Ֆայլի անվանում',
	'NAME': 'Անուն',
	'LASTNAME': 'Ազգանուն',
	'POSITION': 'Դիրք',
	'COUNTRY': 'Երկիր',
	'CNAME': 'Տարադրամ',
	'NAME2': 'Տարադրամ',
	'UNIT': 'Միավոր',
	'VALUE': 'Արժեք',
	'TITLES': 'Վերնագիր',
	'NAME_IN_URL': 'Անվանումը URL-ում',
	'IN_MENU': 'Ներառել մենյուի մեջ',
	'IN_FOOTER': 'Ներառել ձախ ներքևում',
	'IN_FOOTER_RIGHT': 'Ներառել աջ ներքևում',
	'JUMP_LINK': 'Վերահասցեավորման (redirect) հղում օր.` ("http://www.smartsystemsllc.com/")',
	'DESCRIPTION': 'Նկարագրություն',
	'PAGETEXT': 'Էջի տեքստ',
	'IMAGE': 'Նկար (gif, jpg, png)',
	'CODE': 'կոդ',
	'URL': 'URL (առանց http://)',
	'CALENDAR': 'օրացույց',
	'DATETIME': 'օր և ժամանակ',
	'UTIME': 'Ամսաթիվ',
	'STARTDATE': 'Սկիզբ',
	'ENDDATE': 'Վերջ',
	'VIEWS': 'Դիտում',
	'CLICK': 'Clicks',
	'MAXVIEW': 'Մաքս. դիտում',
	'ST_ORDER': 'Հերթականությամբ',
	'ST_ONHOME': 'Ցույց տալ գլխավոր էջում',

	'ST_ACTIVE': 'Ակտիվ',

	'REGION': 'Մարզ',
	'CITY': 'Քաղաք',
	'ADDRESS': 'Հասցե',
	'PHONE': 'Հեռ.:',
	'INFO': 'Տեղեկ.',
	'STATUS': 'Կարգավիճակ',
	'DETAILS': 'մանրամասն',
	'FROM': '-ից',
	'TOMAX': 'ին',
	'ULIST_VIEW': 'Դիտում',
	'ULIST_ADD': 'Ավելացնել',
	'ULIST_EDIT': 'Խմբագրել',
	'ULIST_DELETE': 'Ջնջել',
	'LOGIN': 'Մուտք',
	'EMAIL': 'Էլ. փոստ',
	'TYPE_ID': 'Ադմինիստրատորի տեսակ',
	'MENU_ID': 'որտեղ ցուցադրել',
	'CATEGORY_ID': 'Կատեգորիա',
	'CATEGORIES': 'Կատեգորիա',
	'USERS_ID': 'Օգտագործող',
	'ST_NEWSLETTER': 'Ստանալ նորություններ',
	'BNR_GROUPS_ID': 'Խումբ',
	'TEXTS': 'Տեքստ',
	'TEXT': 'Տեքստ',
	'SHORT_TEXT': 'Կարճ տեքստ',
	'META_DESCRIPTION': 'Մետա նկարագրություն',
	'META_KEYWORDS': 'Մետա Բանալի բառեր',
	'DATE': 'Օր',
	'CLOSE': 'Փակել',
	'SEE_LESS': 'Փակել',
	'INCORRECT_PASSWORD': 'Սխալ գաղտնաբառ',
	'LOGOUT': 'Դուրս գալ',
	'LOG_IN_TO_SYSTEM': 'Մուտք գործել համակարգ',

	'YOU_ARE_LOGGED_AS': 'Դուք մուտք եք գործել որպես: ',
	'SAVED': 'Հաջողված է',
	'APPROVE': 'Հաստատել',
	'IN_LEFT': 'Ձախ կողմում',
	'IN_BOTTOM': 'Ներքևում',
	'BID': 'Բիդ',
	'ASK': 'Հարցնել.',
	'TIME_GMT': 'Ժամանակ (GMT)',
	'IMAGE_SIZES': 'Նկարի չափսերը կփոխվեն հետևյալ չափսերի համապատասխան',
	'LANGUAGES': 'Լեզուներ',
	'RESTRICTED': 'այս բառը չի կարող օգտագործվել որպես "Անվանումը URL-ում"',
	'REGNO': 'Ռեգ.№',
	'SERVER_NAME': 'Սերվերի անունը',
	'LANG': 'Լեզու',


	'START_FROM': 'Սկիզբ:',
	'START_TO': 'Վերջ:',

	'SUBNAME': 'Անուն',
	'COMPANY_INFO_EXIST': 'Գովազդատուներ',
	'FIRM_MAIN': 'Գովազդը տեղադրված է',
	'COMPANY_INFO_NO_EXIST': 'Գովազդը չի տեղադրված',
	'SCHEDULE': {
		'SET_SCHEDULE': 'Նշանակել թարմացում',
		'START_AT': 'Թարմացում սկսել',
		'IMPOSRT_COMMAND': 'Թարմացնել նշվածը',
		'NEXT_SCHEDULE': 'Հաջորդ ակտիվ թարմացումը ՝',
		'NEXT_SCHEDULE_NOT_DEFILED': '<strong style="color:#D00">Անորոշ (Չի նշանակվել)</strong>',
		'NOTIFY_LIST': 'Տեղեկացնել սկզբի և ավարտի մասին <sup>( էլ-փոստի հասցերը բաժանալե ","-ով)<sup>',
		'COMMAND': {'FULL': 'Լրիվ', 'DATABASE': 'ՄԻայն տվյալների բազան', 'SEARCH_ENGINE': 'Պարզ որոնման համակարգը'},
		'UPLOAD_FILE': 'Upload',
		'UPLOAD_FILE_DESC': 'Կայքի թարմացման ֆայլ(FirmDataWEB.gz)',
		'ERROR': {

			'DATE_PAST': 'Սխալ ամսաթիվ',
			'COMMAND': 'Սխալ հրմաան',
			'EMAIL_LIST_EMPTY': 'Տեղեկացման ցուցակը դատարկ է',
			'IVALID_EMAIL_IN_LIST': 'Սխալ էլ-փոստի հասցե'


		}
	},
	'BD_3': 'bd_3',
	'YP_3': 'yp_3',

	'VISIT_TIME': 'Էջի բացման կամ այլ գործողության պահը',
	'VISIT_IP': 'Այցելուի IP-ն',
	'VISIT_LOGIN': 'Այցելուի login-ը',
	'VISIT_USER_AGENT': 'Այցելուի հայտանիշը',
	'VISIT_REFERER': 'Այցելուն ո՞ր էջից է այցելել',
	'VISIT_CURRENT_PAGE': 'Այցելուն ո՞ր էջն է այցելել',
	'VISIT_LOG_ACTION': 'Այցելուն ինչ գործողություն է կատարել',
	'VISIT_LNG_CODE': 'Այցելուի բացած էջը ինչ լեզվով է',
	'VISIT_SEARCH_WORDS': 'Այցելուի որոնվող բառեր',
	'VISIT_COMPANIES_REGNO': 'RegNo-ներ',
	'LOG_CODE': 'Մենյու կոդ',
	'VISIT_FOUND_FIELD_ID': 'Աղյուսակների անուններ, գտնված ID-ները'
};

const NEW_MESSAGES = {
	'SITE_INDEX': 'Կայքի ինդեքս',
	'SUGGESTIONS': 'Առաջարկություններ',
	'SPONSOR': 'Հովանավորող',
	'ARTICLES': 'Հոդվածներ',
	'FIRST_NEED_SERVICES': 'Առաջին անհրաժեշտության ծառայություններ',
	'FEEDBACK': 'Հետադարձ կապ',
	'LETTERS': 'Տառեր',
	'ARMENIA_ARCAX': 'Հայաստան, Լեռնային Ղարաբաղ',
	'ORDER_BY': 'Դասակարգել ըստ',
	'BEST_HIT': 'Լավագույն համընկնում',
	'DISTANCE':'Հեռավորություն',
	'SELECTED_VALUES': 'Ընտրված արժեքներ',
	'CARD_VIDEO':'Տեսանյութ',
	'CARD_MAP':'Քարտեզ',
	'CARD_PHOTO':'Ֆոտո',
	'KM': 'կմ',
    'LINKS':'Հղումներ',
    'DOWNLOAD_UNICODE_KEYBOARD':'Բեռնել հայերեն Unicode ստեղնաշարը',
    'DOWNLOAD_UNICODE_LETTERS':'Բեռնել հայերեն Unicode տառատեսակը',
};

const ERRORS = {
	'ERROR_404_TITLE': 'That page can’t be found.',
	'ERROR_404_TEXT': 'It looks like nothing was found at this location.',
	'ERROR_500_TITLE': 'Internal Server Error',
	'ERROR_500_TEXT': 'The server encountered an internal error and was unable to complete your request. Please contact (admin@spyur.am - contact word here must be as a link with mailto:admin@spyur.am)the server administrator if this error reappears multiple times, please include the technical details below in your report.',
};

module.exports = R.mergeAll([adm_const_arr, lng, alphabet, NEW_MESSAGES, ERRORS]);