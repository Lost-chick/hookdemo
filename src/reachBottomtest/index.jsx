import React, { useState, useEffect } from 'react';
import './index.css';

class ReachBottom extends React.Component {

  constructor(props) {
    super()
    this.state = {
      isReach: false,
      loading: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let currentHeight = scrollTop + windowHeight + 100;

    if (currentHeight < scrollHeight && this.state.isReach) {
      this.setState({
        isReach: false
      })
    }

    if (this.state.isReach) {
      return;
    }

    if (currentHeight >= scrollHeight) {
      console.log('到底了...');// 正常
      this.onReachBottom()
      this.setState({
        isReach: true
      })
    }
  };

  onReachBottom = () => {
    if(this.state.loading) {
      return
    }
    this.setState({
      loading: true
    })

    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 2000)
  }

  render(){
    return (
      <div className="demo-container">
        <div className="demo-mian">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          {this.state.loading && <p className="loading">加载中。。。</p>}
          </ul>
        </div>
      </div>
    )
  }
}
export default ReachBottom;
