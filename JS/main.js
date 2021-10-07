$(document).ready(function () {
    $('.more').click(function () {
        $('.morelink').slideToggle(500)
        if ($('.more').text()=='See More') {
            $('.more').text('See Less')
        }
        else{
            $('.more').text('See More')
        }
    });
    
    $('.urlmorepost1').click(function () {
        $('.morepost1').slideToggle(1000)
        if ($('.btnmorepost1').text()=='See How ?') {
            $('.btnmorepost1').text('Thank You 🙂')
        }
        else{
            $('.btnmorepost1').text('See How ?')
        }
    });
});
