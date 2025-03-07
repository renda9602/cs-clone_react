import { ImgUrl } from '../hooks/useUrl';
//데이터 연결
import { MainProductMenu } from '../data/menuList';
// css
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
        <div className="mainWrap__porductList">
          <ul>
            {/* Link로 연결  */}
            {
              //MainLinkList 데이터 연결
              MainProductMenu.productProblemSolveList.map(
                ({ tabName, iconName, href }) => {
                  return (
                    <li key={`${tabName}-${iconName}`}>
                      <a href={`${href}`}>
                        <img
                          src={`${ImgUrl}/cs/main/main_icon_${iconName}.png`}
                          alt={`${iconName}`}
                          width={'113'}
                        />
                        <p>{tabName}</p>
                      </a>
                    </li>
                  );
                }
              )
            }
          </ul>
        </div>
      </section>
      <section>
        <div className="mainWrap__serviceLink">
          <ul>
            <li>
              <div className="service-title">
                <b>문제 해결 방법</b>
                <span>제품에 문제가 있다면 확인해 보세요</span>
              </div>
              <ul className="service-list">
                <li>
                  <a href="#">자주 묻는 질문</a>
                </li>
                <li>
                  <a href="#">동영상 가이드</a>
                </li>
                <li>
                  <a href="#">제품 설명서</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="service-title">
                <b>문제 해결 방법</b>
                <span>제품에 문제가 있다면 확인해 보세요</span>
              </div>
              <ul className="service-list">
                <li>
                  <a href="#">자주 묻는 질문</a>
                </li>
                <li>
                  <a href="#">동영상 가이드</a>
                </li>
                <li>
                  <a href="#">제품 설명서</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="service-title">
                <b>문제 해결 방법</b>
                <span>제품에 문제가 있다면 확인해 보세요</span>
              </div>
              <ul className="service-list">
                <li>
                  <a href="#">자주 묻는 질문</a>
                </li>
                <li>
                  <a href="#">동영상 가이드</a>
                </li>
                <li>
                  <a href="#">제품 설명서</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
