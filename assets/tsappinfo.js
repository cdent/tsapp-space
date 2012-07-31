// technique found at
// http://www.splashnology.com/article/making-tabs-with/309/
$(function() {
    $('dl.tabs dt').click(function() {
        $(this).siblings().removeClass('selected').end()
        .next('dd').andSelf().addClass('selected');

        var currentDL = $(this);

        var tiddler = $(this).text();
        $.ajax({
            url: '/bags/tsapp_public/tiddlers/' + tiddler + '.json?render=1',
            success: function(data) {
                var tiddlerInfo = $('<div>').append(data.render);
                currentDL.next('dd').empty().append(tiddlerInfo);
            }
        });
    });
    $('dl dt:first-child').click();
});
