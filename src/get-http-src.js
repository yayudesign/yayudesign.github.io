$img=$('.works-cont>a>img');
var content = [];
for (i = 0; i<$img.length; i++) {
	var src = $img.eq(i).attr('src');
	var index = src.indexOf('?');
	src = 'https:'+src.substring(0,index);
	content.push(src);
}
console.log(content)