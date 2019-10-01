// jsbasic.js
document.write( "<h3>JavaScript 기본 언어 스펙 연습</h3>");
document.write( "<hr>" );

var box;
box = 100;
document.write( box, "<br>" );
console.log( box );
document.write( "<hr>" );

//문자형
var s = "JavaScript";
var num = '100';
var tag = "<h3>JavaScript String</h3>";

document.write( s, "<br>");
document.write( num, "<br>" );
document.write( tag, "<br>" );
document.write( "<hr>" );

//숫자형
var n = 100;
var t = Number( '500' );

document.write( n, "<br>");
document.write( t, "<br>");
document.write( "<hr>");

//논리형
var b = true;
var b2 = 10 >= 100;
var k = Boolean( "hello" );
var l = Boolean( 0 );
var m = Boolean( null );

document.write( b, "<br>" );
document.write( b2, "<br>" );
document.write( k, "<br>" );
document.write( l, "<br>" );
document.write( m, "<br>" );
document.write( "<hr>" );

// null & undifined
var u;
var h = "hello";
h = null;

document.write( u, "<br>" );
document.write( h, "<br>" );
document.write( "<br>" );

//typeof
document.write( typeof s, "<br>");
document.write( typeof n, "<br>");
document.write( typeof b, "<br>");
document.write( typeof u, "<br>");
document.write( typeof h, "<br>");
document.write( "<hr>"  );

// 문자열 결합 연산
var str = "<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";

document.write( str, "<br>" );
document.write( "<hr>" );

//비교 연산
var k = 10, m = "10";

document.write( k == 10, "<br>" );
document.write( m == 10, "<br>" );  // ==: 값만 같은지 비교
document.write( "<hr>" );

document.write( k === 10, "<br>" );
document.write( m === 10, "<br>" );  // ===: 값과 타입도 같은지 비교
document.write( "<hr>" );

// 입력
var number1 = prompt( "정수1 입력", "0" );
var number2 = prompt( "정수2 입력", "0" );
var sum = Number( number1 ) + parseInt( number2 );

document.write( number1 + " + " + number2 + " = " + sum, "<br>" );
document.write( "<hr>" );

var select = confirm( "회원을 탈퇴하시겠습니까?" );

if ( select ) {
    document.write( "탈퇴 처리되었습니다." );
} else {
    document.write( "탈퇴 취소되었습니다." );
}
