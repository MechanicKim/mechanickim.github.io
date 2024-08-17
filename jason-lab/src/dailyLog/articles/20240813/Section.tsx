import React from 'react';

import Container from '../../../components/SectionContainer';
import SectionDate from '../../../components/SectionDate';
import Article from '../../../components/Article';

function Section() {
  return (
    <Container>
      <SectionDate date="2024. 8. 13" />
      <div>
        <Article
          img="https://climate.copernicus.eu/sites/default/files/inline-images/climpulse_map_era5_download_daily_2t_anomaly_20240723.png"
          url="https://climate.copernicus.eu/new-record-daily-global-average-temperature-reached-july-2024"
          title="New record daily global average temperature reached in July 2024"
          desc="2024년 7월 22일은 지구 기록상 가장 뜨거운 날이었다고 한다. 중요한 것은 7월 말에 올라온 글이라는 것. 이후 기록이 깨지지 않았지만, 8월 중에 기록이 깨지지 않을까."
        />
        <Article
          img="https://renew.terarosa.com:9000/store/thumb/store_t_83c3e233-d1d0-4cc2-803b-f3d1a886a472.png"
          url="https://terarosa.com/store/6/detail"
          title="TERAROSA 포스코센터점"
          desc="오전 업무를 보기 위해 들른 곳. 공간이 넓고 자리도 많아 여유롭게 시간을 보내기 좋다. 포스코센터 건물 안에 수족관, 미술관도 있어서 주변을 둘러보기도 좋다."
        />
        <Article
          img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[169001]_20210419130701935.jpg"
          url="https://www.starbucks.co.kr/menu/drink_view.do?product_cd=169001"
          title="스타벅스 망고 바나나 블렌디드"
          desc="유당불내증 때문에 오트로 변경했는데, 오트 맛은 하나도 느껴지지 않더라. 덕분에 맛있게 잘 먹었다."
        />
        <Article
          img="https://wodwell.com/wp-content/uploads/share_images/129/square-Screen-Shot-2020-03-02-at-10.07.44-AM.png"
          url="https://wodwell.com/wod/cindy/"
          title="크로스핏 WOD Cindy"
          desc="대표 맨몸 운동으로 이루어진 WOD. 풀업 5개, 푸쉬업 10개, 스쿼트 15개가 한 라운드다. 일주일에 3번 정도 집에서 10 라운드를 한다.(아직 어깨에 무리가 있어 풀업은 3개를 하고 있다)"
        />
      </div>
    </Container>
  );
}

export default Section;
