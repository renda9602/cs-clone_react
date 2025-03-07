import React from 'react';
import './../../../src/css/styles/common/common.scss';
import HeaderWrapNav from './../../components/HeaderWrapNav';
import { ImgUrl } from './../../hooks/useUrl';

const Header = () => {
  return (
    <div id="header" className="headerWrap">
      <div className="headerWrap__inner">
        <h1 className="headerWrap__logo">
          <img src={`${ImgUrl}/cs/common/logo_bf_cs_w.svg`} alt="1" />
        </h1>
        <HeaderWrapNav />
        <div className="headerWrap__util">
          <div className="utillGroup">
            <a className="btn_default" href="/">
              회원가입
            </a>
            <a className="btn_basic" href="">
              로그인
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
