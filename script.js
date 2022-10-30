const data = [
  'nom',
  "prenom",
  'age',
  "poste",
  "experience",
  "choose",
  "confiance",
  "pseudo"
];
function reset() {
  for (let da of data) {
    document.getElementById(da).value = "";
  }
}

function send(data) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://recrutement-api.horizon-corp.repl.co/recrutement", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader("Access-Control-Allow-Origin", '*');
  xhr.send(JSON.stringify(data));
  window.alert("Ton application est envoyer !!!");
}

function sendcandid() {
  let dat = {};
  for (let da of data) {
    dat[da] = document.getElementById(da).value;
    document.getElementById(da).value = "";
  }
  send(dat);
}
