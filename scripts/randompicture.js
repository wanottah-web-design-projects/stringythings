
var rand = Math.floor(Math.random() * 133 ) + 1;

var picture = rand + ".jpg"

document.write("<img src =" + "../the_gallery/string_art_collection/" + picture + " ");
document.write("width=" + 250 + " height=" + 250 + ">");
document.write("</img>");