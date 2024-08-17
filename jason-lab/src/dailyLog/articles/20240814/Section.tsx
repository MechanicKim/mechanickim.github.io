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
          img="https://i.namu.wiki/i/eE5gjelK8f6jSzXXD0eLi_Iewnq62cflEAi58_xpwW2dQQGXRqcIDi5OOyP_W0jFddtl0gH86n3gFgo3VMKYw7D6DIyJxFlzKD59jfcDRSo1IVMfVgPiinAy-1mzq-eqTX8Xqeph2C8ntp5Bk9N0zQ.webp"
          url="https://namu.wiki/w/%EC%95%84%ED%82%A4%EC%95%BC%EB%A7%88%20%EC%8A%8C"
          title="돈이 많으면 어떻게 살고 싶냐 묻는다면"
          desc="'용과 같이' 시리즈의 대부업체 사장 '아키야마 슌'처럼 살고 싶다. 무담보, 무보증, 무이자로 돈을 빌려 준다.(물론 아무에게나 빌려주지는 않음) 이유는? 그 돈이 사람의 인생을 어떻게 바꾸는지 가까이서 보고 싶다는 것."
        />
      </div>
    </Container>
  );
}

export default Section;
