let isMenuOpen = false;

const menuButton = document.querySelector('.icon');
const menu = document.querySelector('.left-section');

menuButton.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    
    if(isMenuOpen){
        menuButton.classList.add('open');
        menu.classList.add('menu-open');
        // document.getElementsByClassName("hamburger").style.color = "#000";
        document.getElementById("ham").classList.toggle("change");
    }else{
        menuButton.classList.remove('open');
        menu.classList.remove('menu-open');
    }
});



$(document).ready(function(){
    var submitIcon = $('.searchbar-icon');
    var inputBox = $('.searchbar-input');
    var searchbar = $('.searchbar');
    var isOpen = false;
    submitIcon.click(function(){
    if(isOpen == false){
    searchbar.addClass('searchbar-open');
    inputBox.focus();
    isOpen = true;
    } else {
    searchbar.removeClass('searchbar-open');
    inputBox.focusout();
    isOpen = false;
    }
    });
    submitIcon.mouseup(function(){
    return false;
    });
    searchbar.mouseup(function(){
    return false;
    });
    $(document).mouseup(function(){
    if(isOpen == true){
    $('.searchbar-icon').css('display','block');
    submitIcon.click();
    };
    });
    });
    function buttonUp(){
    var inputVal = $('.searchbar-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
    $('.searchbar-icon').css('display','none');
    } else {
    $('.searchbar-input').val('');
    $('.searchbar-icon').css('display','block');
    };
    };