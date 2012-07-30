// technique found at
// http://www.splashnology.com/article/making-tabs-with/309/
$(function() {
    $('dl.tabs dt').click(function() {
        $(this).siblings().removeClass('selected').end()
        .next('dd').andSelf().addClass('selected');
    });
});
