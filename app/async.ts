export function ngOnLoad(window, document) {
    window['WebFontConfig'] = {
        custom: {
            families: [ 'Bender', 'Bender-Bold', 'Bender-Light' ],
            urls: ['/assets/fonts/bender/font.css']
        }
    };

    var scripts = document.getElementsByTagName('script')[0],
        targets = [
            { src: 'https://vk.com/js/api/openapi.js?121' },
            { src: 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js' },
            { src: 'https://platform.twitter.com/widgets.js', id: 'twitter-wjs' },
        ];

    for (var i = 0, script; i < targets.length; i++) {
        script = targets[i];

        var domScript = document.createElement('script');
        domScript.type = 'text/javascript';
        domScript.async = true;
        domScript.src = script.src;
        script.id && (domScript.id = script.id);

        scripts.parentNode.insertBefore(domScript, scripts);
    }
}
