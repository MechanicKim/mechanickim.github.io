import React from 'react';

import Container from '../../../components/SectionContainer';
import SectionDate from '../../../components/SectionDate';
import Article from '../../../components/Article';

function Section() {
  return (
    <Container>
      <SectionDate date="2024. 8. 14" />
      <div>
        <Article
          img="https://www.hsd.co.kr/images/68d1da4105ba4e1db179205143874a4a20240730025857.jpg"
          url="https://www.hsd.co.kr/event/event_view/1056?pageSize=12&pageNo=1&cate=&_csrf=55d0603b-7738-4fca-8955-2fb6124486e1"
          title="진심 가성비 한 끼 '한솥 도시락'"
          desc="딱히 할인을 하지 않아도 가성비인데, 요즘은 월 마다 요일 할인 행사를 한다. 과연 한솥을 이길만한 가성비가 있을까?"
        />
      </div>
    </Container>
  );
}

export default Section;
