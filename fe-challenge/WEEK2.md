# 2주차 프론트엔드 챌린지: 드래그 앤 드롭 파일 업로더

챌린지에 대한 자세한 내용은 [가이드](https://github.com/MechanicKim/fe-challenge/blob/main/apps/week2/README.md)를 참고하세요.

## 라이브러리, 주요 기술

- 라이브러리: 없음(Vanilla)
- 기술: Drag and Drop API, FileReader API
  - Express API 서버에 요청을 통한 업로드 구현

## 기술적 고민

재사용 가능한 모듈로 만들었다고 하지만 여전히 풀어야 할 것들이 있다. 그 중 하나가 바로 `의존`이다. 모듈이 그리는 DOM이 특정 아이디, 클래스에 의존하는 것이다. 이렇게 되면 외부에서 같은 아이디, 클래스를 사용하는 경우 문제가 생길 수 있다.

## 아직 남은 도전 과제

- 아이디, 클래스 사용을 줄여 의존을 최소화