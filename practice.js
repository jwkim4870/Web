function student () {
    var name = document.getElementById("user").value;
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var sub3 = document.getElementById("sub3").value;

    var total = sum(sub1, sub2, sub3);

    str = "<tr>";
    str+= "<td>" + user + "</td>";
    str+= "<td>" + sub1 + "</td>";
    str+= "<td>" + sub2 + "</td>";
    str+= "<td>" + sub3 + "</td>";
    str+= "<td>" + total + "</td>";
    str+= "<td>" +  + "</td>";
    str+= "<td>" +  + "</td>";
    str+= "<td>" +  + "</td>";
    str += "</tr>";

    var score_tbody = document.getElementById(score_tbody);
    score_tbody.innerHTML = score_tbody.innerHTML + str;
    
}

function sum (sub1, sub2, sub3) {
    var sum = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
    return sum;
}
