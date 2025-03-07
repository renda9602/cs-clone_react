const HeaderWrapNav = () => {
  return (
    <div className="headerWrap__nav">
      <ul className="navi">
        <li>
          <a href="#">문제해결</a>
          <ul
            className="depth depth_1 depth--active"
            aria-labelledby="navTitle01"
          >
            <li id="navTitle01">문제해결 메뉴</li>
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
          <a href="#">서비스신청</a>
          <ul className="depth depth_2" aria-labelledby="navTitle02">
            <li id="navTitle02">서비스 신청</li>
            <li>
              <a href="#">서비스 접수</a>
            </li>
            <li>
              <a href="#">시트 교체 접수</a>
            </li>
            <li>
              <a href="#">이전/설치 접수</a>
            </li>
            <li>
              <a href="#">분해/조립 접수</a>
            </li>
            <li>
              <a href="#">서비스 요금 안내</a>
            </li>
            <li>
              <a href="#">서비스 진행 현황</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">제품관리</a>
          <ul className="depth depth_3" aria-labelledby="navTitle03">
            <li id="navTitle03">제품관리</li>
            <li>
              <a href="#">간편 배송 조회</a>
            </li>
            <li>
              <a href="#">제품 등록</a>
            </li>
            <li>
              <a href="#">제품 사용 정보</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">고객지원</a>
          <ul className="depth depth_4" aria-labelledby="navTitle04">
            <li id="navTitle04">고객지원</li>
            <li>
              <a href="#">고객선테 이용 안내</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
            <li>
              <a href="#">1:1 문의</a>
            </li>
            <li>
              <a href="#">자료실</a>
            </li>
            <li>
              <a href="#">카카오톡 상담 안내</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">고객의 소리</a>
          <ul className="depth depth_5" aria-labelledby="navTitle05">
            <li id="navTitle05">고객의 소리</li>
            <li>
              <a href="#">칭찬합니다</a>
            </li>
            <li>
              <a href="#">불편합니다</a>
            </li>
            <li>
              <a href="#">건의합니다</a>
            </li>
            <li>
              <a href="#">대표이사 신문고</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HeaderWrapNav;
