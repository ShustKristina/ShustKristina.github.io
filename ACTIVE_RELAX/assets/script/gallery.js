$(function() {
    $(window).load(function() {
        $('#gallery-container').snapGallery();
    });
})
$(function() {
    $(window).load(function() {
        $('#gallery-container').snapGallery({
            minWidth: 100,
            maxCols: 4,
            margin: 10
        });
    });
})
