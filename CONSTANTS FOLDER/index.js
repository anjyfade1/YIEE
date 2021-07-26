// $(function () {
//     $(document).scroll(function () {
//         let $nav = $(".group");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.4 + "px"
    console.log('Offset: ' + offset);
    console.log('Offset * 0.7' + offset * 0.7);
});


const parallaxAchievement = document.getElementById("parallaxAchievement");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallaxAchievement.style.backgroundPositionY = offset * 0.5 + "px"
    console.log('Offset: ' + offset);
    console.log('Offset * 0.7' + offset * 0.7);
});



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


