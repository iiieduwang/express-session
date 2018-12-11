import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Nav from './components/Nav';
import { thisTypeAnnotation } from 'babel-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      email: ""
    }

  }
  setupHandler = () => {
    var data = JSON.stringify({
        email: this.state.email
      });
    fetch('/users/setup', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data})
      .then(res => res.json())
      .then(data => console.log(data))
  
  }
  emailHandler = () => {
    fetch('/users/check')
      .then(res => res.text())
      .then(data => this.setState({
        login: data
      }))
  }

  changeHandler = (evt) => {
    this.setState({
      email: evt.target.value
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <hr />
          <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="請輸入Email" />
          <button onClick={this.setupHandler}>設定登入資訊</button>
          <button onClick={this.emailHandler}>取得登入資訊</button>
          <span>{this.state.login !== "" ? "已登入，登入帳號：" + this.state.login : "未登入"}</span>
          <p>
            這是一個react + express 使用session的範例，測試方式如下：
            <ul>
              <li>在express專案中，要先安裝express-session及cors套件</li>
              <li>參考express專案中app.js中的引用及設定，我要做一些註解</li>
              <li>express專案中，routes資料夾中的index.js及users.js，我做了一些session設定及session讀取的程式</li>
            </ul>
            <ul>
              <li>React專案中我分別測試了在按鈕按下去時讀取session及透過route切換component時讀取路由</li>
              <li>App.js 文字輸入方塊中輸入資料，按下設定登入資訊按鈕，會將資料傳給express</li>
              <li>在express的 routes/users.js /setup的function中將資料寫進session</li>
              <li>App.js 按下取得登入資訊按鈕時，可以取得express session中回傳的資料</li>
              <li>App.js 上的Home About Contact 連結切換時也會讀取express session中回傳的資料</li>
            </ul>
          </p>
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact strict path="/about" component={About} />
          <Route exact strict path="/contact" component={Contact} />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
