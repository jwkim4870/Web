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
bdocument.write( "<hr>" );