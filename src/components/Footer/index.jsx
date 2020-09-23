/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.scss';

function Footer() {
  return (
    <footer>
      <div className="topBack">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          返回顶部
        </a>
      </div>
      <div className="logo" />
      <div>
        <span>|</span>
        <a className="link" href="http://sena.moe/">
          访问主页
        </a>
        <span>|</span>
        <a className="link" href="mailto:yusa_himeno@outlook.com">
          联系邮箱
        </a>
        <span>|</span>
      </div>
      <div className="neet">It&apos;s the only NEET thing to do</div>
    </footer>
  );
}

export default Footer;
