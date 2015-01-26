"use strict";

function getImagesFromDom() {
    return _.chain($("img").toArray())
    .map(function (element) {
        return element.src;
    })
    .value();
}

function endsWith(str, suffix) {
    return str.substr(str.length - suffix.length, str.length) === suffix;
}

var interval = Bacon.fromPoll(3000, function () {
    return "tick";
}).flatMapFirst(function () {
    return Bacon.fromPromise($.get("/photosjson"));
}).onValue(function (json) {
    var existingImages = getImagesFromDom();

    _.chain(json)
    .reverse()
    .each(function (newPic) {
        var exists = existingImages.some(function (url) {
            return endsWith(url, newPic.url);
        });

        if (!exists) {
            $("body").prepend($("<img>").addClass("selfie-image").attr("src", newPic.url));
        }
    });

    // remove when too much.
    _.chain($("img").toArray())
    .drop(1000)
    .each(function (el) {
        el.parentNode.removeChild(el);
    });
});
