/*is broken... for now*/
var random_images_array = ["a.bmp",
"b.bmp"
];

path = '../src/assets/404';
var num = Math.floor( Math.random() * random_images_array.length );
var img = random_images_array[ num ];
var imgStr = '<img src="' + path + img + '">';

document.write(imgStr); document.close();
