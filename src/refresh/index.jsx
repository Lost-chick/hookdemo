import React, { useEffect } from 'react';
import './index.css';

function Refresh() {
  useEffect(() => {
    (function (window, document, undefined) {
      var upDownRefresh = function (box, text) {
        var _element = document.getElementById(box),
          _refreshText = document.querySelector(text),
          _startPos = 0,
          _transitionHeight = 0;
        _element.addEventListener(
          'touchstart',
          function (e) {
            console.log('初始位置：', e.touches[0].pageY);
            _startPos = e.touches[0].pageY;
            _element.style.position = 'relative';
            _element.style.transition = 'transform 0s';
          },
          false,
        );
        _element.addEventListener(
          'touchmove',
          function (e) {
            // console.log('当前位置：', e.touches[0].pageY);
            _transitionHeight = e.touches[0].pageY - _startPos;
            console.log(_transitionHeight);
            if (_transitionHeight > 0 && _transitionHeight < 60) {
              _refreshText.innerText = '下拉刷新';
              _element.style.transform = 'translateY(' + _transitionHeight + 'px)';
            }
          },
          false,
        );
        _element.addEventListener(
          'touchend',
          function (e) {
            if (_transitionHeight > 55) {
              _refreshText.innerText = '更新中...';
              console.log('触发更新');
            }
            _element.style.transition = 'transform 0.5s ease 1s';
            _element.style.transform = 'translateY(0px)';
          },
          false,
        );
      };
      window.upDownRefresh = upDownRefresh;
    })(window, document);
    new upDownRefresh('refreshContainer', '.refreshText');
  }, []);
  return (
    <div>
      <p class="refreshText"></p>
      <ul id="refreshContainer">
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
      </ul>
    </div>
  );
}

export default Refresh;
