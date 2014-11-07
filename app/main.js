/*jshint strict:false, browser:true */
(function bookmarklet() {
  var jQuery;

  function init() {
    (function($) {
      var RdioLyrics = (function() {
        var $player = $('.player_bottom')
          , url     = 'http://api.vagalume.com.br/search.php'
          , style   = "<style type='text/css'>.rdio-lyrics.open{right:0px;}.rdio-lyrics{position:absolute;z-index:1000;opacity:0.9;right:-482px;top:20%;font-family:'lucida grande',tahoma,verdana,arial,sans-serif;}.rdio-lyrics .button{display:block;height:20px;width:110px;text-align:center;background:#008FD5;padding:7px;float:left;cursor:pointer;color:white;font-weight:bold;font-size:18px;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform-origin:bottom right;-moz-transform-origin:bottom right;-ms-transform-origin:bottom right;-o-transform:bottom-right;margin-left:-124px;}.rdio-lyrics .lyric{white-space:pre;text-align:center;color:#32393d;clear:both;height:300px;width:450px;background:#fff;padding:15px;overflow-y:auto;box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.07);}</style>";

        function toggleRdioLyrics() {
          $('.rdio-lyrics').toggleClass('open');
          if ($('.rdio-lyrics').hasClass('open')) {
            $('.lyric').html('');

            var artist = $player.find('.artist_title').text()
              , song   = $player.find('.song_title').text();

            getLyric(artist, song, function(lyric) {
              $('.lyric').html('<h3>' + artist + ' - ' + song + '</h3>' + lyric.text);
            });
          }
        }

        function getLyric(artist, song, callback) {
          $.getJSON(url + '?art=' + artist + '&mus=' + song, function (data) {
            if (data.type === 'song_notfound') {
              callback({text: 'not found'});
            } else {
              callback(data.mus[0]);
            }
          });
        }

        function addEventListeners() {
          $('.rdio-lyrics > .button').on('click', $.proxy(toggleRdioLyrics, this));
        }

        function init() {
          if ($(".rdio-lyrics").length === 0) {
            $(style).appendTo('head');
            $('<div/>', { class: 'rdio-lyrics' }).appendTo('body');
            $('<a/>', { class: 'button', text: 'Rdio Lyrics' }).appendTo('.rdio-lyrics');
            $('<div/>', { class: 'lyric' }).appendTo('.rdio-lyrics');
            addEventListeners();
          }
        }

        return {
          init: init
        };
      })();

      RdioLyrics.init();
    })(jQuery.noConflict(true));
  }

  function scriptLoadHandler() {
    jQuery = window.jQuery.noConflict(true);
    init();
  }

  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.1.1') {
    var script = document.createElement('script');
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
    if (script.readyState) {
      script.onreadystatechange = function () { // For old versions of IE
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          scriptLoadHandler();
        }
      };
    } else { // Other browsers
      script.onload = scriptLoadHandler;
    }
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
  } else {
    jQuery = window.jQuery;
    init();
  }
}());
