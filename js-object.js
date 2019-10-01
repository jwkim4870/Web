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

//수학 객체
var num = 2.1234;
var maxNum = Math.max( 10, 5, 8, 30 );
var minNum = Math.min( 10, 5, 8, 30 );
var roundNum = Math.round( num );
var floorNum = Math.floor( num );
var rndNum = Math.random();

document.write( "maxNum : " + maxNum, "<br>" );
document.write( "minNum : " + minNum, "<br>" );
document.write( "roundNum : " + roundNum, "<br>" );
document.write( "floorNum : " + floorNum, "<br>" );
document.write( "rndNum : " + rndNum, "<br>" );
document.write( "<hr>" );

document.write( Math.floor( Math.random() * 11 ) );
document.write( "<hr>" );

// 배열 객체
var arr = [ 30, "JavaScript", true ];
console.log( arr );

document.write( "<h3>배열 내용</h3>" );
document.write( "arr[ 0 ] = " + arr[ 0 ], "<br>" );
document.write( "arr[ 1 ] = " + arr[ 1 ], "<br>" );
document.write( "arr[ 2 ] = " + arr[ 2 ], "<br>" );
document.write( "<hr>" );

for ( var i = 0; i < arr.length; ++i ) {
    document.write( "arr[ " + i + " ] = " + arr[ i ], "<br>" );
}
document.write( "<hr>" );

i = 0;
for ( var index in arr ) {
    document.write( "arr[ " + i++ + " ] = " + arr[ index ], "<br>" );
}
document.write( "<hr>" );