// load random picture from ./assets/pics folder

let pic = Math.floor(Math.random() * 10) + 1;
console.log(pic)
picture_html = document.getElementById("picture");
picture_html.src = `assets/pics/eikichi-${pic}.webp`;
console.log(picture_html.src)