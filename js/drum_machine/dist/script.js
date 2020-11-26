var st = "";var power = 1;
var alphabet = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
$(document).ready(function () {
  document.getElementById("volumeBar").value = 0.6;
});
document.addEventListener("keydown", function (event) {
  var id = event.code[event.code.length - 1];
  play(id, st);
});
function start(audio, id) {
  var type = st;
  audio.pause();
  audio.currentTime = 0;
  $('#' + id).toggleClass('clicked');
  setTimeout(function () {$('#' + id).toggleClass('clicked');}, 150);
  audio.play();
  switch (id) {
    case "Q":
      $('#thisPlayed').val(type + ' 1');
      break;
    case "W":
      $('#thisPlayed').val(type + ' 2');
      break;
    case "E":
      $('#thisPlayed').val(type + ' 3');
      break;
    case "A":
      type == 'piano' ? $('#thisPlayed').val(type + ' 4') : $('#thisPlayed').val('shake');
      break;
    case "S":
      $('#thisPlayed').val('clap');
      break;
    case "D":
      $('#thisPlayed').val('deep kick');
      break;
    case "Z":
      $('#thisPlayed').val('kick high hat');
      break;
    case "X":
      $('#thisPlayed').val('closed high hat');
      break;
    case "C":
      $('#thisPlayed').val('open high hat');
      break;
    default:
      $('#thisPlayed').val('не та кнопка');
      break;}

}
function getVolume() {
  var vol = document.getElementById("volumeBar").value;
  $('#thisPlayed').val('Громкость: ' + Math.round(vol * 100) + '%');
  return vol;
}
function play(id) {
  var type = st;
  var volume = getVolume();$('#thisPlayed').val('');
  var audio = document.getElementById(type + id);
  $(audio).prop("volume", volume);
  if (power != 0) {
    if (id == 'Q' || id == 'W' || id == 'E' || id == 'A') {
      start(audio, id);
    } else if (id == 'S' || id == 'D' || id == 'Z' || id == 'X' || id == 'C') {
      audio = document.getElementById(id + 'Audio');
      $(audio).prop("volume", volume);
      start(audio, id);
    } else {console.log('Не та кнопка');}
  }
}
function demoPlay() {

  var playTime = 350;
  if (power == 1) {
    if (st == 'piano') {
      var play1 = setInterval(() => {play('E');play('C');}, playTime);
      setTimeout(() => {clearInterval(play1);
        var play2 = setInterval(() => {play('W');play('X');}, playTime);
        setTimeout(() => {clearInterval(play2);
          var play3 = setInterval(() => {play('Q');play('S');}, playTime);
          setTimeout(() => {clearInterval(play3);
            var play4 = setInterval(() => {play('A');play('X');}, playTime);setTimeout(() => {
              clearInterval(play4);
              var play5 = setInterval(() => {play('A');play('Z');}, playTime);setTimeout(() => {
                clearInterval(play5);
                var play6 = setInterval(() => {play('A');play('X');}, playTime);setTimeout(() => {
                  clearInterval(play6);
                  var play7 = setInterval(() => {play('A');play('Z');}, playTime);setTimeout(() => {
                    clearInterval(play7);
                    $('#thisPlayed').val('Конец демо'); //last
                  }, playTime);
                }, playTime);
              }, playTime);
            }, playTime);},
          playTime * 4);}, playTime * 4);}, playTime * 4);
    } else if (st == 'guitar') {//guitarDemo
      var play1 = setInterval(() => {play('E');play('C');}, playTime);
      setTimeout(() => {clearInterval(play1);
        var play2 = setInterval(() => {play('D');}, playTime);
        setTimeout(() => {clearInterval(play2);
          var play3 = setInterval(() => {play('S');}, playTime);setTimeout(() => {clearInterval(play3);
            var play4 = setInterval(() => {play('X');}, playTime);
            setTimeout(() => {clearInterval(play4);var play5 = setInterval(() => {play('W');play('A');}, playTime);
              setTimeout(() => {clearInterval(play5);
                $('#thisPlayed').val('Конец демо');},
              playTime);}, playTime);
          }, playTime);
        }, playTime);}, playTime);} else
    {console.log('no demo. wrong st');}
  } else {console.log('no demo. off');}
}
function randomPlay() {
  var playTime = Math.floor(Math.random() * 300 + 400); //400;
  var playCount = Math.floor(Math.random() * 5 + 2) * playTime;
  console.log(playTime, playCount);
  if (power == 1) {
    var play1 = setInterval(() => {
      var array = new Uint32Array(1);
      var randomNum = window.crypto.getRandomValues(array).toString();
      play(alphabet[randomNum[0]]);play(alphabet[randomNum[1]]);}, playTime);
    setTimeout(() => {
      clearInterval(play1);
      $('#thisPlayed').val('Конец рандома');}, playCount);
  }
}
function onOrOff() {
  if (power == 1) {
    power = 0;
    $('#thisPlayed').val('Off');
    $('#onPoint').animate({
      background: '#FF0000',
      marginLeft: '60%' },
    200, function () {$(this).toggleClass('off');});
  } else
  {
    power = 1;
    $('#thisPlayed').val('On');
    $('#onPoint').animate({
      background: '#00C618',
      marginLeft: '0px' },
    200, function () {$(this).toggleClass('off');});
  }console.log('power changed');
}
function DrumPad(prop) {
  var state = prop.state;
  return (
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "row" },
    React.createElement("button", {
      className: "drum-pad",
      id: "Q",
      onClick: e => play(e.target.id, state) }, "Q",


    React.createElement("audio", { id: "guitarQ", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/guitar-1chordjazz.wav" }),

    React.createElement("audio", { preload: "auto", id: "pianoQ", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/piano-1A_major.wav" })),



    React.createElement("button", {
      className: "drum-pad",
      id: "W",
      onClick: e => play(e.target.id, state) }, "W",


    React.createElement("audio", { id: "guitarW", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/guitar-2C_major.wav" }),

    React.createElement("audio", { preload: "auto", id: "pianoW", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/piano-2F%23_minor.wav" })),



    React.createElement("button", {
      className: "drum-pad",
      id: "E",
      onClick: e => play(e.target.id, state) }, "E",


    React.createElement("audio", { id: "guitarE", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/guitar-3F_major.wav" }),

    React.createElement("audio", { preload: "auto", id: "pianoE", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/piano-3B_minor.wav" }))),




    React.createElement("div", { className: "row" },
    React.createElement("button", {
      className: "drum-pad",
      id: "A",
      onClick: e => play(e.target.id, state) }, "A",


    React.createElement("audio", { id: "guitarA", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/shake.wav" }),
    React.createElement("audio", { preload: "auto", id: "pianoA", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/piano-4E_minor.wav" })),

    React.createElement("button", {
      className: "drum-pad",
      id: "S",
      onClick: e => play(e.target.id, state) }, "S",


    React.createElement("audio", { id: "SAudio", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/clap.wav" })),

    React.createElement("button", {
      className: "drum-pad",
      id: "D",
      onClick: e => play(e.target.id, state) }, "D",


    React.createElement("audio", { preload: "auto", id: "DAudio", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/deep-kick.wav" }))),


    React.createElement("div", { className: "row" },
    React.createElement("button", {
      className: "drum-pad",
      id: "Z",
      onClick: e => play(e.target.id, state) }, "Z",


    React.createElement("audio", { preload: "auto", id: "ZAudio", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/kick-hi-hat.wav" })),

    React.createElement("button", {
      className: "drum-pad",
      id: "X",
      onClick: e => play(e.target.id, state) }, "X",


    React.createElement("audio", { preload: "auto", id: "XAudio", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/open-hi-hat.wav" })),

    React.createElement("button", {
      className: "drum-pad",
      id: "C",
      onClick: e => play(e.target.id, state) }, "C",


    React.createElement("audio", { preload: "auto", id: "CAudio", src: "https://raw.githubusercontent.com/Terro216/freecodecamp-portfolio/main/js/drum_machine/sound/closed-hi-hat.wav" })))));




}
class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.changeStateSend = this.changeStateSend.bind(this);
  }
  changeStateSend() {
    if (this.props.state == "guitar") {
      this.props.onStateChange("piano");
      $('#switchPoint').animate({
        marginLeft: '0%' },
      200);
    } else {
      this.props.onStateChange("guitar");
      $('#switchPoint').animate({
        marginLeft: '60%' },
      200);
    }
  }
  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "row" },
      React.createElement("span", { className: "toggleName" }, "\u0412\u043A\u043B/\u0412\u044B\u043A\u043B:"),
      React.createElement("div", { className: "onOffBack" }, React.createElement("a", { id: "onOff", onClick: onOrOff }, React.createElement("div", { id: "onPoint", className: "on" })))),

      React.createElement("div", { className: "row" },
      React.createElement("label", { id: "volumeBarLabel", for: "volumeBar" }, "\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C:",
      React.createElement("input", { className: "slider", id: "volumeBar", type: "range", min: "0", max: "1", onChange: getVolume, step: "0.01" }))),

      React.createElement("div", { className: "row" },
      React.createElement("textarea", { id: "thisPlayed", readonly: "readonly" })),

      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "icon" }, React.createElement("img", { src: "https://img.icons8.com/color/48/000000/classic-music.png" }), React.createElement("a", { href: "https://icons8.com/icon/11862/\u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F-\u043C\u0443\u0437\u044B\u043A\u0430" })),
      React.createElement("div", { className: "switchTypeBack" }, React.createElement("a", { id: "switchType", onClick: this.changeStateSend }, React.createElement("div", { id: "switchPoint", className: "piano" }))),
      React.createElement("div", { className: "icon" }, React.createElement("img", { src: "https://img.icons8.com/emoji/48/000000/guitar-emoji.png" }))),

      React.createElement("div", { className: "row" },
      React.createElement("button", { onClick: demoPlay }, "DEMO"),
      React.createElement("button", { onClick: randomPlay }, "RANDOM"))));



  }}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playType: "piano" };

    this.changeState = this.changeState.bind(this);
  }
  changeState(e) {
    this.setState({ playType: e });
  }
  render() {
    var state = this.state.playType;
    console.log("changed to " + state);
    $('#thisPlayed').val(state + ' kit');
    st = state;
    return (
      React.createElement("header", { className: "App-header" },
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "drumpad" },
      React.createElement(DrumPad, { state: state })),

      React.createElement("div", { id: "controls" },
      React.createElement(Controls, { state: state, onStateChange: this.changeState })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));