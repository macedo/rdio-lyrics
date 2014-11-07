rdio-lyrics
===========

Bookmarklet that searchs song lyrics at http://api.vagalume.com.br

Usage
-----

Copy this snippet on your browser and save at your bookmark bar.
```
javascript:!function(){function t(){!function(t){var o=function(){function o(){if(t(".rdio-lyrics").toggleClass("open"),t(".rdio-lyrics").hasClass("open")){t(".lyric").html("");var o=n.find(".artist_title").text(),r=n.find(".song_title").text();i(o,r,function(i){t(".lyric").html("<h3>"+o+" - "+r+"</h3>"+i.text)})}}function i(o,i,r){t.getJSON(a+"?art="+o+"&mus="+i,function(t){r("song_notfound"===t.type?"not found":t.mus[0])})}function r(){t(".rdio-lyrics > .button").on("click",t.proxy(o,this))}function e(){0===t(".rdio-lyrics").length&&(t(s).appendTo("head"),t("<div/>",{"class":"rdio-lyrics"}).appendTo("body"),t("<a/>",{"class":"button",text:"Rdio Lyrics"}).appendTo(".rdio-lyrics"),t("<div/>",{"class":"lyric"}).appendTo(".rdio-lyrics"),r())}var n=t(".player_bottom"),a="http://api.vagalume.com.br/search.php",s="<style type='text/css'>.rdio-lyrics.open{right:0px;}.rdio-lyrics{position:absolute;z-index:1000;opacity:0.9;right:-482px;top:20%;font-family:'lucida grande',tahoma,verdana,arial,sans-serif;}.rdio-lyrics .button{display:block;height:20px;width:110px;text-align:center;background:#008FD5;padding:7px;float:left;cursor:pointer;color:white;font-weight:bold;font-size:18px;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform-origin:bottom right;-moz-transform-origin:bottom right;-ms-transform-origin:bottom right;-o-transform:bottom-right;margin-left:-124px;}.rdio-lyrics .lyric{white-space:pre;text-align:center;color:#32393d;clear:both;height:300px;width:450px;background:#fff;padding:15px;overflow-y:auto;box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.07);}</style>";return{init:e}}();o.init()}(i.noConflict(!0))}function o(){i=window.jQuery.noConflict(!0),t()}var i;if(void 0===window.jQuery||"2.1.1"!==window.jQuery.fn.jquery){var r=document.createElement("script");r.src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js",r.readyState?r.onreadystatechange=function(){("complete"===this.readyState||"loaded"===this.readyState)&&o()}:r.onload=o,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(r)}else i=window.jQuery,t()}();

```

License
-------


[“THE BEER-WARE LICENSE”](http://en.wikipedia.org/wiki/Beerware):
As long as you retain this notice you can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a beer.

![BeerWare Logo](http://upload.wikimedia.org/wikipedia/commons/d/d5/BeerWare_Logo.svg)
