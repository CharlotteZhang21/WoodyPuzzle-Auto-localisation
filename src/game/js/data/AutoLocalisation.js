function AutoLocalisation() {
    this.getBrowserLanguage();
}

AutoLocalisation.constructor = AutoLocalisation;

AutoLocalisation.prototype.getBrowserLanguage = function () {
	
    if (navigator.userLanguage) {
        this.lang = navigator.userLanguage;
        this.lang = this.lang.split("-")[0];
    } else if (navigator.language) {
        this.lang = navigator.language;
        this.lang = this.lang.split("-")[0];
    } else {
        this.lang = "en";
    }

    console.log(this.lang);

    // return lang;

}

// AutoLocalisation.prototype.placeTextInButton = function(translation, button, scaleSizeX, scaleSizeY) {

//     var text = translation.text;
//     var font = translation.font;
//     var lang = translation.lang;

//     var style = {
//         fontFamily: font,
//         fontSize: 500,
//         fill: 0xFFFFFF,
//         align: 'center',
//         lineHeight: '65',
//     };
    
//     var text = new PIXI.Text(text,style);

//     var buttonWidth = button.width * scaleSizeX;
//     var buttonHeight = button.height * scaleSizeY;

//     var textWidth = text.getBounds().width;
//     var textHeight = text.getBounds().height;

//     while (textHeight > buttonHeight || textWidth > buttonWidth) {
//         style.fontSize--;
//         text.setStyle(style);
//         textWidth = text.getBounds().width;
//         textHeight = text.getBounds().height;
//     }

//     console.log(textWidth);
//     console.log(buttonWidth);
//     return text;
// }

AutoLocalisation.prototype.getLocalisedCta = function () {
	var lang = this.lang;
    var text = "Download";
    var font = 'GameFont_bold';
    switch (lang) {
        case "en":
            text = "Download";
            break;
        case "zh":
            text = "下載";
            break;
        case "de":
            text = "Herunterladen";
            break;
        case "fr":
            text = "Télécharger";
            break;
        case "it":
            text = "Scarica";
            break;
        case "es":
            text = "Descargar";
            break;
        case "nl":
            text = "Downloaden";
            break;


        if (lang == "ja" || lang == "zh" || lang == "ko" || lang == "ar" || lang == "he" || lang == "ms" ||
        lang == "th" || lang == "el" || lang == "kk" || lang == "vi" || lang == "km" || lang == "az" || 
        lang == "ka" || lang == "ne" || lang == "bn") {

            font = "GameSpecialFont";
        }
    }
    return {text : text, font: font, lang: lang};
};

AutoLocalisation.prototype.getLocalisedContinue = function () {
    // var language = this.lang;
    var text = "Continue";
    var font = 'GameFont_bold';
    var lang = this.lang;
    switch(lang){
        case "en":
            text = "Continue";
            break;
        case "zh":
            text = "再來一次";
            break;
        case "de":
            text = "Herunterladen";
            break;
        case "fr":
            text = "Télécharger";
            break;
        case "it":
            text = "Scarica";
            break;
        case "es":
            text = "Descargar";
            break;
        case "nl":
            text = "Downloaden";
            break;


        if (lang == "ja" || lang == "zh" || lang == "ko" || lang == "ar" || lang == "he" || lang == "ms" ||
        lang == "th" || lang == "el" || lang == "kk" || lang == "vi" || lang == "km" || lang == "az" || 
        lang == "ka" || lang == "ne" || lang == "bn") {

            font = "GameSpecialFont";
        }
    }
    return {text : text, font: font, lang: lang};
};