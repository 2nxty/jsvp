const param = window.location.search;
const urlpa = new URLSearchParams(param); 
var source;
var filename = "video";


if (urlpa.has('vid')) {
    const an = urlpa.get('vid');
    const ep = urlpa.get('link');
    source = an;
    document.title = "AnEZ - Player";
    document.getElementById("afm").src = an;
}
else{
    //window.location.replace(link);
}

function getDL(){
    //window.location.href = source;
    window.open(source, '_blank').focus();
}


const image_array = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
random_index = Math.floor(Math.random() * image_array.length);
selected_image = image_array[random_index]
document.getElementById("bgi").style.backgroundImage = `url('img/${selected_image}')`;



