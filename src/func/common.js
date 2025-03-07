export const common = {
  familySite: (value) => {
    let url = '';

    switch (value) {
        case '바디프랜드 홈':
        url = 'https://www.bodyfriend.co.kr/';
        break;
      case '비지니스 홈':
        url = 'https://www.bodyfriend.co.kr/business/';
        break;
      case '핏타임':
        url = 'https://www.bodyfriend.co.kr/fitime/';
        break;
      case '르마블':
        url = 'https://www.bodyfriend.co.kr/lemarble/';
        break;
      default:
        break;
    }
    return url;
  },
};

