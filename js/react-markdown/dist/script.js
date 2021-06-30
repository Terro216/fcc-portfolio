function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var x = `# React Markdown Previewer

## Это подзаголовок
### И другое:
Элемент кода, \`<div></div>\`.

\`\`\`
// многострочный код:
function anotherExample(firstLine, lastLine) {
  if (firstLine == 'text' && lastLine == 'another text') {
    return multiLineCode;
  }
}
\`\`\`

Текст можно сделать **жирным**... ого!

Или _курсивным_.

Или...  **_жирным и курсивным!_**

А так же ~~зачеркнутым~~.

Можно вставлять [ссылки](https://www.google.com), и 
>Цитаты
 
И даже таблицы:

Заголовок | Заголовок | Заголовок?
------------ | ------------- | -------------
Ваш текст может быть здесь | здесь и | здесь....
И даже тут. | ок. | думаю достаточно

- И конечно списки
  - С кружочками
     - Квадратиками
     - и
        - ещё квадратиками


1. А так же нумерованные списки
1. можно только цифрой 1
2. или нет
# 
![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)

`;
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: x };

    this.sendNew = this.sendNew.bind(this);
  }
  sendNew(val) {
    this.setState({ text: val.target.value });
    this.props.updateText(val.target.value);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "mainEditor" }, /*#__PURE__*/
      React.createElement("div", { id: "topLine" }, /*#__PURE__*/
      React.createElement("h1", null, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-pencil-alt" }), "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 |",
      " ", /*#__PURE__*/
      React.createElement("i", {
        onClick: "full()",
        id: "fullscreenEditor",
        className: "fas fa-expand-alt" }))), /*#__PURE__*/



      React.createElement("textarea", {
        value: this.state.text,
        onChange: this.sendNew,
        type: "text",
        id: "editor" })));



  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var cleanText = this.props.text;
    return /*#__PURE__*/(
      React.createElement("div", { id: "mainPreview" }, /*#__PURE__*/
      React.createElement("div", { id: "topLine" }, /*#__PURE__*/
      React.createElement("h1", null, /*#__PURE__*/
      React.createElement("i", { className: "far fa-window-maximize" }), "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 |", " ", /*#__PURE__*/
      React.createElement("i", { id: "fullscreenPreview", className: "fas fa-expand-alt" }))), /*#__PURE__*/


      React.createElement("div", { id: "preview" }, /*#__PURE__*/
      React.createElement(ReactMarkdown, {
        className: "mark",
        plugins: [remark],
        source: cleanText }))));




  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "updateText",





    event => {
      this.setState({
        text: event });

    });this.state = { text: x };this.updateText = this.updateText.bind(this);}
  render() {
    var oldText = this.state.text;
    return /*#__PURE__*/(
      React.createElement("div", { id: "App" }, /*#__PURE__*/
      React.createElement(Editor, { updateText: this.updateText }), /*#__PURE__*/
      React.createElement(Preview, { text: oldText })));


  }}


// ========================================
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
$("#fullscreenPreview").click(function () {
  $("#mainEditor").toggleClass("hide");
  $("#mainPreview").toggleClass("big");
});
$("#fullscreenEditor").click(function () {
  $("#mainPreview").toggleClass("hide");
  $("#mainEditor").toggleClass("big");
});