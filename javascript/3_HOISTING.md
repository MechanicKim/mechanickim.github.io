# Hoisting

호이스팅(Hoisting)은 JavaScript 엔진이 코드를 해석하는 방식 중 하나로, **"변수 및 함수의 선언이 코드 실행 전에 해당 스코프의 최상단으로 끌어 올려지는(hoisted) 것처럼 보이는 현상"**을 의미한다.

실제로 코드가 물리적으로 이동하는 것은 아니며, JavaScript 엔진이 코드를 실행하기 전에 **'준비 단계(Creation Phase)'**를 거치면서 선언 정보를 미리 메모리에 기록해 두기 때문에 발생하는 현상이다.

## 호이스팅이 작동하는 두 단계

JavaScript 코드가 실행될 때, 엔진은 다음 두 단계를 거친다.

### 1단계: 생성 단계 (Creation Phase)

- JavaScript 엔진이 코드를 한 줄씩 실행하기 전에, 해당 스코프(전역 또는 함수 스코프) 내의 모든 **변수와 함수의 선언**을 찾아서 메모리에 기록
- 이때 **함수 선언**은 함수 전체를 메모리에 저장
- **`var` 변수 선언**은 변수 이름만 등록되고, 값은 `undefined`로 초기화
- **`let` 및 `const` 변수 선언**은 변수 이름만 등록되고, 초기화 하지 않음

### 2단계: 실행 단계 (Execution Phase)

- 코드를 위에서 아래로 순차적으로 실행
- 변수에 실제 값을 할당하거나, 함수를 호출

## 키워드별 호이스팅 차이점

호이스팅은 모든 선언에서 일어나지만, 각 키워드가 메모리에 초기화되는 방식이 다르기 때문에 동작이 다르게 나타난다.

### `var` 변수 호이스팅: '선언'과 '초기화'가 동시에

`var`로 선언된 변수는 호이스팅 시 **선언과 동시에 `undefined`로 초기화**된다. 따라서 선언문 이전에 변수에 접근해도 에러가 나지 않고 `undefined`를 출력한다.

```
// 실제 코드:
console.log(a); // (1) 출력: undefined
var a = 10;
console.log(a); // (2) 출력: 10

// JavaScript 엔진이 해석하는 방식:
var a; // 선언이 최상단으로 이동하며 undefined로 초기화
console.log(a); // (1) 출력: undefined
a = 10;
console.log(a); // (2) 출력: 10
```

### 함수 선언 호이스팅: 전체가 이동

**함수 선언문** (`function myFunc() { ... }`)은 변수와 달리 함수 본체 전체가 호이스팅된다. 따라서 함수를 정의한 코드보다 먼저 호출해도 문제없이 작동한다.

```
// 실제 코드:
sayHello(); // 출력: Hello! (정상 작동)

function sayHello() {
  console.log("Hello!");
}
```

## `let` 및 `const`의 호이스팅과 TDZ (Temporal Dead Zone)

`let`과 `const`도 호이스팅되지만, `var`와 달리 **초기화되지 않은 상태**로 메모리에 등록됩니다.

### 일시적 사각지대 (Temporal Dead Zone, TDZ)

- **정의:** 스코프 시작 지점부터 `let` 또는 `const` 변수의 **실제 선언문이 실행되기 직전까지**의 영역
- TDZ에 있는 동안 변수에 접근(사용)하려고 하면 JavaScript는 `ReferenceError`를 발생
- 이는 개발자가 `var`처럼 선언 전에 변수를 실수로 사용하는 것을 방지

**실제 코드**

```
console.log(b); // (1) 에러 발생: ReferenceError (TDZ 안에 있음)
let b = 20; // 실제 선언문이 실행되는 순간 TDZ를 벗어남
console.log(b); // (2) 출력: 20
```
**JavaScript 엔진이 해석하는 방식**

```
// b가 선언되었지만 초기화되지 않은 상태 (TDZ 시작)
// console.log(b); // ReferenceError 발생

let b = 20; // 이 라인에서 b가 초기화되고 TDZ 종료
// console.log(b);
```

## 요약

| 키워드 | 호이스팅 여부 | 초기화 시점 | 선언 전 접근 결과 |
| --- | --- | --- | --- |
| **`var`** | O | 스코프 시작 시 (`undefined`로 초기화) | `undefined` 출력 |
| **`let`, `const`** | O | **실제 선언문 실행 시** (TDZ 적용) | `ReferenceError` 발생 |
| **함수 선언** | O | 스코프 시작 시 (함수 본체 전체 초기화) | 함수 정상 실행 |