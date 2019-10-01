// 내장 객체 생성( 사용자 정의 )
var tv = new Object();
tv.color = "white";
tv.price = 30000;
tv.info = function() { //익명함수
    document.write( "tv color : " + this.color, "<br>" );
    document.write( "tv price : " + this.price, "<br>" );
}

var car = {
    color: "black",
    price: 50000,
    info: function() {
        document.write( "car color : " + this.color, "<br>" );
        document.write( "car price : " + this.price, "<br>" );
    }
};

document.write( "<h3>tv object call method</h3>" );
tv.info();
document.write( "<hr>" );
document.write( "<h3>car object call method</h3>" );
car.info();
document.write( "<hr>" );

console.log( tv );
console.log( car );

// 내장 객체 활용( 라이브러리 )
var today = new Date( 2019, 10, 1 ); //new Date();
var nowMonth = today.getMonth();
var nowDate = today.getDate();
var nowDay = today.getDay();

document.write( "<h3>날짜 정보</h3>" );
document.write( "월   : " + nowMonth, "<br>" );
document.write( "일   : " + nowDate, "<br>" );
document.write( "요일 : " + nowDay, "<br>" );
document.write( "<hr>" );