import React, { useEffect } from 'react';

import Article from './Article';
import Paragraph from './Paragraph';

function Articles1() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const article = document.querySelector(hash);
      if (article && article instanceof HTMLElement) {
        const container = document.getElementById('article-contianer');
        if (container && container instanceof HTMLElement) {
          container.scrollTo({ top: article.offsetTop, behavior: 'smooth' });
        }
      }
    }
  }, []);

  return (
    <>
      <Article id="b1-01" title="성공으로 가는 위대한 비밀의 규칙">
        <>
          <Paragraph>
            <>
              성공으로 가는 위대한 비밀의 규칙은 없다.<br/>
              성실하고 약속을 잘 지키고<br/>
              허세를 부리지 않고 친철을 베푸는 것과 같은<br/>
              작은 비밀이 있을 뿐이다.
            </>
          </Paragraph>
          <Paragraph>
            <>김승호 스노우폭스 회장</>
          </Paragraph>
        </>
      </Article>
      <Article id="b1-02" title="돈은 인격체다">
        <>
          <Paragraph>
            <>
              자기를 소중히 여기는 사람에게 붙어 있기를 좋아하고, 함부로 대하는 사람에겐 패가망신의 보복을 퍼붓기도 한다.
              작은 돈을 함부로 하는 사람에게선 큰돈이 몰려서 떠나고 자신에게 합당한 대우를 하는 사람 곁에서는 자식을 낳기도 한다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              품 안의 돈을 기품 있는 곳, 사랑하는 사람과 보호해야 할 가치가 있는 곳에 사용하자.
              이를 지켜보고 있는 돈도 더 많은 친구들을 옆에 불러들일 것이다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              불법으로 들어온 돈은 언제든 탈옥할 날만을 기다리거나 주인을 헤치고 빠져나오기 마련이니 위험한 돈과 친해질 생각을 지우자.
            </>
          </Paragraph>
        </>
      </Article>
      <Article id="b1-03" title="복리의 비밀">
        <>
          <Paragraph>
            <>
              1,000만 원 / 연이자율 6% / 5년간 이자 받기<br/>
              단리 - 1,300만 원<br/>
              연 복리 - 38만 2,256원<br/>
              월 복리 - 48만 8,502원
            </>
          </Paragraph>
          <Paragraph>
            <>
              같은 복리 이자를 받더라도 1년에 한 번 이자를 받는 것보다 분기별로 나눠 받는 것이 더 좋다.
              월별로 이자를 받으면 훨씬 더 이익이다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              거꾸로 복리 개념을 채무 이자에 적용해 갚아야 할 상황이라면 무섭고 끔찍한 수치가 산출된다.
            </>
          </Paragraph>
        </>
      </Article>
      <Article id="b1-04" title="일정하게 들어오는 돈의 힘">
        <>
          <Paragraph>
            <>
              일정하게 발생하는 수입의 질은 비정규적인 수입보다 좋다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              농사를 짓는 데 필요한 강수량이 1000mm라고 가정해보자.
              그런데 봄에 한 번 500mm 퍼붓고 가을에 한 번 500mm 퍼붓는다면 그 땅에서는 농사를 지을 수 없다.
              홍수 아니면 가몸이기 때문이다.
              대신에 하루 10mm씩이라도 매일 꾸준히 내리면 상당히 좋은 결실을 맺을 수 있다.
            </>
          </Paragraph>
          <Paragraph>
            <>
             돈도 같다. 현금흐름이 일정하게 유지돼야 경제적으로 삶이 윤택해진다.
            </>
          </Paragraph>
        </>
      </Article>
      <Article id="b1-05" title="돈은 중력의 힘을 가졌다">
        <>
          <Paragraph>
            <>
              돈은 가까이에 있는 돈을 잡아당기는 능력이 있으며 주변 돈에 영향을 준다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              1년에 1,000만 원을 모은 노력을 100이라고 가정하자.
              다음 1,000만 원을 모으기 위해 들이는 노력은 100보다 낮아진다.
              왜냐하면 이미 처음 만들어놓은 1,000만 원이 이자나 투자를 통해 자체 자본을 만들고 있기 때문이다.
            </>
          </Paragraph>
        </>
      </Article>
      <Article id="b1-06" title="리스크가 클 때가 리스크가 가장 작을 때다">
        <>
          <Paragraph>
            <>
              나쁜 상황은 나쁜 상태가 아니다. 오히려 할인된 가격에 자산 구매 기회를 주니, 리스크가 줄어든 시점인 것이다.
              리스크가 무서워 아무도 매입하지 않는 순간이 리스크가 가장 적은 순간이다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              욕심은 리스크를 낳는다. 이 욕심이 대중에게 옮겨 붙으면 낙관이라는 거품이 만들어진다.
              거품은 폭락을 낳는다. 그러나 자포자기하고 두려움에 떠는 시기가 오면 봄이 오고 해가 뜬다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              모든 욕심의 끝은 몰락을 품고 있다. 그리고 모든 절망은 희망을 품고 있음을 기억해야 한다.
            </>
          </Paragraph>
        </>
      </Article>
      <Article id="b1-07" title="남의 돈을 대하는 태도가 내 돈을 대하는 태도다">
        <>
          <Paragraph>
            <>
              세금이나 공금 같은 공공 자산을 함부로 하는 사람은 자신의 돈 역시 함부로 대하고 있음을 알아야 한다.
              세금으로 만든 모든 것에는 내 돈도 일부 들어 있다.
              친구와 번갈아가며 사는 밥값에는 내가 낼 때만이 아니라 상대가 낼 때도 내 돈이 포함되어 있다.
            </>
          </Paragraph>
          <Paragraph>
            <>
              내가 존중받으려면 먼저 존중해야 하듯 내 돈이 존중받으려면 남의 돈도 존중해줘야 한다.
              남의 돈을 함부로 하지 않을 때 내 돈도 함부로 취급받지 않는다.
            </>
          </Paragraph>
        </>
      </Article>
    </>
  );
}

export default Articles1;
