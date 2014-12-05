(function($) {
    var serverNotResponding = false;

    setInterval(doTheCheck, 120000); // Every two minutes

    function doTheCheck() {
        $.get('/monitor').then(function(response) {
            if (serverNotResponding) {
                window.location.reload(true);
                serverNotResponding = false;
            }
        }, function(err) {
            serverNotResponding = true;
        });
    }
})(jQuery);
