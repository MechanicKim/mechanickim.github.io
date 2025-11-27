# Promise

`Promise`는 자바스크립트에서 **비동기 작업의 최종 완료 또는 실패를 나타내는 객체**다. 콜백 헬(Callback Hell) 문제를 해결하고 비동기 코드를 동기 코드처럼 읽기 쉽게 만들어 준다.

### 1. Promise의 개념 및 상태

Promise는 비동기 작업의 진행 상황을 나타내기 위해 다음과 같은 세 가지 상태(State) 중 하나를 가진다.

| 상태          | 의미             | 설명                                                               |
| ------------- | ---------------- | ------------------------------------------------------------------ |
| **Pending**   | 대기 (초기 상태) | 비동기 작업이 진행 중이며, 아직 완료 또는 실패되지 않은 상태.      |
| **Fulfilled** | 성공             | 비동기 작업이 성공적으로 완료되었고, 결과를 반환할 준비가 된 상태. |
| **Rejected**  | 실패             | 비동기 작업이 실패했고, 실패한 이유(에러)를 반환할 준비가 된 상태. |

> 📌 상태 변화 특징 (Settled): Promise는 Pending 상태에서 시작하여 한 번 Fulfilled나 Rejected 상태가 되면, 다시는 다른 상태로 변하지 않는다. (이를 Settled 상태라고 한다.)

## 2. Promise 생성 및 기본 문법

`Promise` 객체는 `new Promise()` 생성자를 통해 생성하며, 인자로 **실행 함수(Executor Function)**를 받는다.

실행 함수는 두 개의 인자(콜백 함수)를 받는다.

1. **`resolve(value)`**: 작업을 성공적으로 완료했을 때 호출하여 Promise를 **Fulfilled** 상태로 만든다.
2. **`reject(reason)`**: 작업 중 오류가 발생했을 때 호출하여 Promise를 **Rejected** 상태로 만든다.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 1. 비동기 작업 수행 (예: setTimeout, API 호출 등)
  const success = true;

  if (success) {
    // 성공 시 resolve 호출
    resolve("작업 성공: 데이터가 도착했습니다.");
  } else {
    // 실패 시 reject 호출
    reject(new Error("작업 실패: 네트워크 오류 발생."));
  }
});
```

## 3. Promise 체이닝 및 결과 처리

Promise의 결과를 처리하고, 여러 비동기 작업을 순차적으로 연결(Chaining)하는 데 사용되는 주요 메서드들이다.

### A. `.then()` (성공)

- **역할:** Promise가 **Fulfilled** 상태가 되었을 때 실행되는 콜백 함수를 등록.
- **반환:** 항상 새로운 Promise를 반환. 이를 이용해 다음 `then()`을 연결할 수 있음.

### B. `.catch()` (실패)

- **역할:** Promise가 **Rejected** 상태가 되었을 때(또는 체인 중간에 에러가 발생했을 때) 실행되는 콜백 함수를 등록. 일반적으로 체인의 **가장 마지막**에 위치하여 전체 에러를 처리.

### C. `.finally()` (최종)

- **역할:** Promise가 성공(Fulfilled)했든, 실패(Rejected)했든 **상태와 관계없이** 작업 완료 후 무조건 실행되는 콜백 함수를 등록.(인자를 받지 않음.)

```javascript
myPromise
  .then((result) => {
    console.log("1단계 성공:", result);
    // 다음 then으로 결과를 전달하거나 새로운 비동기 작업을 반환
    return result + " -> 다음 단계 데이터";
  })
  .then((nextResult) => {
    console.log("2단계 성공:", nextResult);
  })
  .catch((error) => {
    // 체인 중간의 모든 reject/에러를 여기서 처리
    console.error("최종 에러 발생:", error.message);
  })
  .finally(() => {
    // 성공, 실패 여부와 관계없이 항상 실행
    console.log("Promise 체인 종료.");
  });
```

## 4. Promise 정적 메서드 (Static Methods)

여러 개의 Promise를 동시에 처리하거나 특정 목적에 맞게 Promise를 생성할 때 유용한 메서드들이다.

| 메서드                             | 역할                        | 설명                                                                                                                    |
| ---------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **`Promise.all(iterable)`**        | **모두 성공**하면 성공      | 모든 Promise가 성공할 때까지 기다린 후, 결과들을 **배열**로 묶어 반환. 하나라도 실패하면 즉시 전체를 실패(Reject) 처리. |
| **`Promise.race(iterable)`**       | **가장 빨리 완료**되면 종료 | 가장 먼저 완료(성공 또는 실패)된 Promise의 결과를 반환하고 즉시 종료.                                                   |
| **`Promise.allSettled(iterable)`** | **모두 완료**되면 성공      | 모든 Promise가 성공하든 실패하든 관계없이, 모두 완료된 후 **결과 객체 배열**을 반환. (ES2020)                           |
| **`Promise.any(iterable)`**        | **가장 빨리 성공**하면 성공 | 가장 먼저 **성공**한 Promise의 결과를 반환. 모두 실패하면 `AggregateError`로 실패 처리. (ES2021)                        |
| **`Promise.resolve(value)`**       | 즉시 성공하는 Promise 생성  | 특정 값을 즉시 Fulfilled 상태로 만드는 Promise를 생성.                                                                  |
| **`Promise.reject(reason)`**       | 즉시 실패하는 Promise 생성  | 특정 이유를 담아 즉시 Rejected 상태로 만드는 Promise를 생성.                                                            |

```javascript
const p1 = Promise.resolve(3);
const p2 = new Promise((res) => setTimeout(res, 100, 42));

// Promise.all 예시
Promise.all([p1, p2]).then((results) => {
  console.log(results); // [3, 42]
});
```
