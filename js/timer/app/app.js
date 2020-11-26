import React, { Component } from "react";
import './style.scss';
var sound = new Audio('./beep.mp3');
var timer; var defaultMin=25; var defaultRelax=5; var switchFocusRelax=0;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      min: 25,
      sec: 0,
      relax: 5,
      change: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.start = this.start.bind(this);
    this.refresh = this.refresh.bind(this);
    this.pause = this.pause.bind(this);
    this.tick = this.tick.bind(this);
  }

  start(){
    document.getElementById('start').innerText='Пауза';
    document.getElementById('setting').classList.add('hide');
    this.setState({change:0});
    if (timer) {
      this.pause();
    } else {
    timer = setInterval(()=>{this.tick();}, 1000);
    }
  }

  tick() {
    sound.pause();
    if (this.state.sec==0){
      this.setState({min:this.state.min-1,sec:59});
    } else {
      this.setState({sec:this.state.sec-1});
    }
    if (this.state.min<0) {
      sound.play();
      if (switchFocusRelax==0) {this.setState({min:defaultRelax,sec:0,relax:defaultMin});switchFocusRelax=1;
      alert('Ура! Можно отдохнуть!');}
      else {this.setState({min:defaultMin,sec:0,relax:defaultRelax});switchFocusRelax=0;
      alert('Пришло время сфокусироваться...');}
    }
  }

  pause() {
    if (timer) {
      clearInterval(timer);
      timer = null;
      //this.setState({change:1});
      document.getElementById('start').innerText='Продолжить';
    } 
  }

  refresh(){
    this.pause();
    document.getElementById('start').innerText='Начать';
    document.getElementById('setting').classList.remove('hide');
    this.setState({min:defaultMin,sec:0,relax:defaultRelax,change:1});
    switchFocusRelax=0;
  }

  handleClick(e){
    //console.log(e.target.id);//доделать animation
    
    if(this.state.change==1) {
      if (e.target.id==='focusButton'){
        let val = this.state.min;
        switch (e.target.innerText) {
          case 'ᐃ':
            if (val<60) {this.setState({min: val+1}); defaultMin = val+1;}
            break;
          case 'ᐁ':
            if (val>1) {this.setState({min: val-1}); defaultMin = val-1;};
            break;
        }
      } 
      else if (e.target.id==='relaxButton'){
        let val = this.state.relax;
        switch (e.target.innerText) {
          case 'ᐃ':
            if (val<60) {this.setState({relax: val+1}); defaultRelax = val+1;};
            break;
          case 'ᐁ':
            if (val>1) {this.setState({relax: val-1}); defaultRelax = val-1;};
            break;
        }
      }
    }
  }
  render() {
    return (
      <div id="App">
      <div id="header"><h1>25+5 Таймер</h1></div>
      <div id="setting">
        <div id="focus">Время фокусирования:
        <br/>
          <button id="focusButton" className="focusButton1" onClick={this.handleClick}>ᐃ</button>
          <div id="focusText">{defaultMin}</div>
          <button id="focusButton" onClick={this.handleClick}>ᐁ</button>
        </div>
        <div id="relax">Время перерыва: 
        <br/>
          <button id="relaxButton" onClick={this.handleClick}>ᐃ</button>
          <div id="relaxText">{defaultRelax}</div>
          <button id="relaxButton" onClick={this.handleClick}>ᐁ</button>
        </div>
      </div>

      <div id="clock">
        <h1 id="display">{this.state.min}:{this.state.sec<10 ? '0'+this.state.sec : this.state.sec}</h1>
        <button id="start" onClick={this.start}>Начать</button>
        <button id="refresh" onClick={this.refresh}>Сбросить</button>
      </div>
      </div>
    );
  }
}

export default App;