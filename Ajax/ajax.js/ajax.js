var ajax = new XMLHttpRequest();
ajax.open('GET','content.html');
ajax.onreadystatechange = function () {
    if (ajax.readyState = 4) {
        document.getElementById('content').innerHTML = ajax.responseText;
    }
}
function getContent() {
    ajax.send ();
    document.getElementById('btn_content').style.display = 'none';
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajax").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }