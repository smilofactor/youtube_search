$(document).ready(function() {
'use strict';

var configMap = {
    $IDSearchResults: $('#search_results'),
    APIUrl: 'https://www.googleapis.com/youtube/v3/search'
};


var params = {
    part: 'snippet',
    key: 'AIzaSyBhQb2KeCID0Ljibh-0AAmIUh07oGWoNvE',
    q: 'star wars',
    fields: 'items'
};

$.getJSON(configMap.APIUrl, params, function(data) {
        console.log(data.items);

});

});
