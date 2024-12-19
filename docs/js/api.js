const link = "https://e-z.stream/?error=404"
const link1 = "https://watch.brplayer.site/watch?v="
const link2 = "https://fviplions.com/v/"
const param = window.location.search;
const urlpa = new URLSearchParams(param); 
if (urlpa.has('w')) {
    const usr = urlpa.get('w');
    document.title = "E-Z - " + usr;
    document.getElementById("ifm").src = link1 + usr;
}
else if (urlpa.has('f')) {
    const usr = urlpa.get('f');
    document.title = "E-Z - " + usr;
    document.getElementById("ifm").src = link2 + usr;
}
else{
    //window.location.replace(link);
}

const image_array = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png']
random_index = Math.floor(Math.random() * image_array.length);
selected_image = image_array[random_index]
document.getElementById("bgi").style.backgroundImage = `url('img/${selected_image}')`;



