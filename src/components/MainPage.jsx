import { ImgUrl } from '../hooks/useUrl';
import './../css/styles/pages/main.scss';

const MainPage = () => {
  return (
    <div className="mainWrap">
      <section>
        <div className="mainWrap__title">
          <h2>
            무엇을 <br /> 도와드릴까요?
          </h2>
        </div>
        <div className="mainWrap__search">
          {/* mainWrap__search--active  */}
          <div className="mainWrap__inner">
            <div className="inputForm__input">
              <input //검색창
                type="text"
                value="검색어를 입력해주세요."
                placeholder="검색어를 입력해주세요."
                ep_click_area="search"
                ep_click_label="검색"
                ep_search_type="일반 검색"
                ga-search-value="{}"
              />
              <span aria-label="닫기" className="input__del-btn"></span>
            </div>
            {/* 리스트 */}
            <div className="inputForm__list">
              <div className="title">
                <h3>최근검색어</h3>
                <button className="btn-del">전체삭제</button>
              </div>
              <ul>
                <li className="list-item">
                  <a href="">TEST 한줄 넘침 처리</a>
                  <button className="btn-del"></button>
                </li>
              </ul>
            </div>
            {/* 인기 검색어 */}
            <div className="keyword">
              <h3>인기 검색어</h3>
              <ul className="keyword__list">
                <li>
                  <button>서비스 서비스 접수</button>
                </li>
                <li>
                  <button>시트 교체</button>
                </li>
                <li>
                  <button>서비스 서비스 접수</button>
                </li>
                <li>
                  <button>시트 교체</button>
                </li>
                <li>
                  <button>시트 교체</button>
                </li>
                <li>
                  <button>배송 기간</button>
                </li>
              </ul>
            </div>

            <div className="scroll">
              <img
                src={`${ImgUrl}/cs/icon/arr_btm_gray.svg`}
                alt="Scroll Down"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mainWrap__title">
          <h3>제품별 문제 해결</h3>
        </div>
        <div className="porductListWrap">
          <ul>
            {/* Link로 연결 */}
            <li>
              <a href="/product_guide?product=bf">
                <img
                  src={`${ImgUrl}/cs/main/main_icon_l.png`}
                  alt="바디프랜드"
                />
                <span>바디프랜드</span>
              </a>
            </li>
            <li>
              <a href="/product_guide?product=l">
                <img
                  src={`${ImgUrl}/cs/main/main_icon_l.png`}
                  alt="라클라우드"
                />
                <span>라클라우드</span>
              </a>
            </li>
            <li>
              <a href="/product_guide?product=w">
                <img src={`${ImgUrl}/cs/main/main_icon_w.png`} alt="W정수기" />
                <span>W정수기</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="" alt="" />
                <span>기타제품</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
