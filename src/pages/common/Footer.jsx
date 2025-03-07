import { useCallback, useEffect, useState } from 'react';
import footerInfo from '../../data/footerInfo.json';
import { common } from '../../func/common';

const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleChangeFamilySite = useCallback(e => {
    // 패밀리 사이트 이동
    const value = e.target.value;
    window.open(common.familySite(value), '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="footer">
      <div className="footer__notice">
        <div className="inner">
          <div className="list">
            <div className="title">공지사항</div>
            <div className="contents">
              <ul className="swiper__list">
                {/* 슬라이드 영역 */}
                <li>
                  <a
                    title="바디프랜드 개인정보 처리방침 변경 안내(2/10 적용)"
                    className="new"
                    href="/customer/notice/11910"
                  >
                    바디프랜드 개인정보 처리방침 변경 안내(2/10 적용)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            className="more"
            href="https://cs.bodyfriend.co.kr/customer/notice"
          >
            더보기
          </a>
        </div>
      </div>
      <div className="footer__top">
        <ul className="footer__top__menu">
          <li>
            <a href="#">회사소개</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">
              <b>개인정보처리방침</b>
            </a>
          </li>
          <li>
            <a href="#">사업자정보확인</a>
          </li>
          <li>
            <a href="#">에스크로서비스 가입확인</a>
          </li>
          <li>
            <a href="#">사이트맵</a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <div className="inner">
          <div className="list">
            <h2>{footerInfo.company.title}</h2>
            <span>공동대표이사: 지성규, 김흥석</span>
            {footerInfo.company.items.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
          <div className="list">
            {footerInfo.business.items.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
          <div className="list">
            <span> Copyright {year} BODYFRIEND Inc. All rights Reserved.</span>
          </div>
          <div className="slectForm">
            <label
              htmlFor="slectForm-family"
              className="slectForm__label"
            ></label>
            <select
              onChange={handleChangeFamilySite}
              id="slectForm-family"
              className="slectForm__select"
            >
              <option value="FAMILY SITE">FAMILY SITE</option>
              <option value="바디프랜드 홈">바디프랜드 홈</option>
              <option value="비지니스 홈">비지니스 홈</option>
              <option value="핏타임">핏타임</option>
              <option value="르마블">르마블</option>
            </select>
          </div>

          <div className="snsGroup">
            <span>바디프랜드 공식 SNS</span>
            <div className="snsGroup__icon">
              {footerInfo.sns.items.map((item, i) => (
                <a key={i} href={item.url}>
                  <img
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    data-ga="attr"
                    ep_click_page="cs_common"
                    ep_click_area="footer"
                    ep_click_label={item.ep_click_label}
                    src={`https://bodyfriend.speedgabia.com/img/${item.img}`}
                    alt={`${item.name}`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="snsGroup">
            <span>맴버십 앱 다운로드</span>
            <div className="snsGroup__icon">
              {footerInfo.app.items.map((item, i) => (
                <a key={i} href={item.url}>
                  <img
                    src={`https://bodyfriend.speedgabia.com/img/${item.img}`}
                    alt={`${item.name}`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
