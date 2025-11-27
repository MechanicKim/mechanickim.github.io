# 11주차 프론트엔드 챌린지: 아코디언 (Accordion) 컴포넌트

챌린지에 대한 자세한 내용은 [가이드](https://github.com/MechanicKim/fe-challenge/blob/main/apps/week11/README.md)를 참고하세요.

### 25.11.27 - 좀 더 단순한 애니메이션 작업 방식

펼치기, 접기 애니메이션을 CSS `@keyframes`로 정의하고 fold, unfold 클래스를 만들었다. 처음에는 토글 값(true, false)에 따라 클래스를 교체했는데, 더 단순한 방법은 없을까 고민했고 CSS 결합자를 써보기로 했다.

헤더가 `aria-expanded` 속성을 가지고 있었기 때문에 true, false 값에 따라 인접 형제인 콘텐츠 영역에 애니메이션을 적용하기로 했다.

```css
  .item > [aria-expanded="false"] + p {
    transition: max-height 0.15s ease-in-out;
    max-height: 0;
    overflow: hidden;
  }
  .item > [aria-expanded="true"] + p {
    transition: max-height 0.2s ease-in-out;
    max-height: 200px;
    overflow: auto;
  }
```

이제 콘텐츠 영역에 추가로 클래스를 넣고 바꿔줄 필요가 없어졌다. 👍 (물론 클래스 대신 인라인 스타일을 넣는 방법도 있는데, CSS에 온전히 맡기는 것이 더 낫다는 생각이다.)