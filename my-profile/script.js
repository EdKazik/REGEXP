const backBtn = document.querySelector('.button__back');
backBtn.addEventListener('click', goBack)
console.log(screen);


function goBack() {
    history.back()
    
}
navigator.geolocation.getCurrentPosition(function(position) {
    console.log('широта', position.coords.latitude);
    console.log('довгота', position.coords.longitude);
    
});