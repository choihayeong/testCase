import { random } from "./random";

const rndOne = random(10);
const rndTwo = random(20);

console.log(`${rndOne}, ${rndTwo}`);

/* Cursor Effect */
var cursor = {
    bizMove : function (e) {
        $('.imgbox').css("top", e.clientY - 50);
        $('.imgbox').css("left", e.pageX - 50);
    },
    hover: function () {
        $(this).addClass('active');
    },
    blur : function() {
        $(this).removeClass('active');
    },
    bind : function() {
        $('.inbox--content').bind('mousemove', cursor.bizMove);
        $('.inbox--content').bind('mouseenter', cursor.hover);
        $('.inbox--content').bind('mouseleave', cursor.blur);
    }
}
cursor.bind();


