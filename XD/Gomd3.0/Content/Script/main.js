$(function (){
    toggleLanguage();
});


// Toggle dropdown language
function toggleLanguage(){
    $(".main-lang-dropdown").on('click', function(){
        $(this).toggleClass('active');
    })
};