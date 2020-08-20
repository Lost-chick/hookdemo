import React, { useState, useEffect } from 'react';
import './index.css';

function ReachBottom() {
  const [isReach, setIsReach] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let currentHeight = scrollTop + windowHeight + 100;

    if (currentHeight < scrollHeight && isReach) {
      setIsReach(false);
    }

    if (isReach) {
      return;
    }

    if (currentHeight >= scrollHeight) {
      console.log('到底了...');
      onReachBottom()
      setIsReach(true);
    }
  };

  const onReachBottom = () => {
    if(loading) {
      return
    }
    setLoading(true);

    // //
    setTimeout(()=>{
      setLoading(false);

    },3000)
  }
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
          {loading && <p className="loading">加载中。。。</p>}
        </ul>
      </div>
    </div>
  );
}
export default ReachBottom;
