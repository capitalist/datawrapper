(function(){

    // Ruhrnachrichten Theme
    // ---------------------

    // Every theme will inherit the properties of this
    // theme. They can override everything or just a bit
    // of them. Also, every theme can extend any other
    // existing theme.

    Datawrapper.Themes.Ruhrnachrichten = $.extend(true, {}, Datawrapper.Themes.Base, {

        colors: {
            palette: ['#00A3DA', '#A59E89', '#CF233B', '#667E86'],
            positive: '#00A3DA',
            negative: '#CF233B',
            background: '#ffffff'
        },

        lineChart: {
            strokeWidth: {
                highlight: 2,
                normal: 1
            },
            hoverDotRadius: 3,
            maxLabelWidth: 80
        },

        vpadding: 0,
        minWidth: 350

    });

}).call(this);