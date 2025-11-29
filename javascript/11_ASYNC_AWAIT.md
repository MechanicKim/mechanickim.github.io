# async/await

`async`와 `await`는 ES2017(ECMAScript 8)에 도입된 문법으로, **Promise를 기반으로 한 비동기 코드를 마치 동기 코드처럼 읽고 작성할 수 있게 해주는** 자바스크립트의 핵심 기능이다. 이는 콜백 헬(Callback Hell)과 복잡한 `.then()` 체이닝을 더욱 단순화한다.

## 1. `async` 함수 (Asynchronous Function)

`async` 키워드는 함수 앞에 붙어 해당 함수가 **비동기 함수**임을 선언한다.

### 특징

1. **반드시 Promise 반환:** `async` 함수는 항상 **Promise 객체**를 반환한다.
   - 함수 내에서 일반 값(`return '결과'`)을 반환하면, 그 값은 자동으로 **Resolved** 상태의 Promise로 래핑(Wrapping)되어 반환된다.
   - 함수 내에서 Promise를 반환하면, 그 Promise 자체가 반환된다.
2. **`await` 사용 허용:** 오직 `async` 함수 내에서만 `await` 키워드를 사용할 수 있다.

```javascript
// 1. 일반 값을 반환해도 Promise로 래핑되어 반환됨
async function getData() {
  return "Hello Async";
}

// 호출 결과는 Promise 객체
getData().then((result) => console.log(result)); // 출력: Hello Async
```

## 2. `await` 연산자 (Operator)

`await` 키워드는 **Promise 앞에** 붙여 사용하며, 해당 Promise가 **Resolved(성공)** 상태가 될 때까지 비동기 함수의 실행을 **일시 중지**한다.

### 특징

1. **Promise 대기:** `await`는 Promise가 성공적으로 처리될 때까지 기다린 후, Promise의 결과값(`value`)을 반환한다.
2. **함수 일시 중지:** `await`가 걸린 비동기 함수(외부 `async` 함수)만 일시 중지되며, 자바스크립트 프로그램 전체는 멈추지 않는다. Event Loop가 다른 작업을 처리할 수 있도록 양보한다.
3. **사용 제약:** **반드시 `async` 함수 내부에서만** 사용할 수 있다.

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchUser() {
  console.log("1. 데이터 요청 시작...");

  // await는 delay Promise가 끝날 때까지 기다림
  await delay(2000);

  console.log("2. 2초 후 데이터 도착!");
  return { id: 1, name: "Gemini" };
}

// fetchUser 함수는 비동기적으로 실행되지만, 내부 코드는 순차적으로 보입니다.
fetchUser().then((data) => console.log("3. 최종 결과:", data));
```

## 3. 에러 처리 (`try...catch`)

`async/await`의 가장 큰 장점 중 하나는 **동기 코드와 동일한 방식**으로 에러를 처리할 수 있다는 것이다.

- `await`가 걸린 Promise가 **Rejected(실패)** 상태가 되면, 일반적인 동기 코드처럼 에러가 발생하며, 이를 가장 가까운 **`try...catch` 블록**에서 잡아 처리할 수 있다.

```javascript
function failAfterDelay(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("시간 초과 오류")), ms);
  });
}

async function handleFailure() {
  try {
    await failAfterDelay(1000); // 여기서 Promise가 Rejected 상태가 됨
    console.log("이 코드는 실행되지 않습니다.");
  } catch (error) {
    // Rejected된 에러 객체를 여기서 받아서 처리
    console.error("비동기 에러 발생:", error.message);
  }
}

handleFailure(); // 출력: 비동기 에러 발생: 시간 초과 오류
```

## 4. Promise vs async/await 비교

| 구분               | Promise(`.then()`)                           | async/await                                 |
| ------------------ | -------------------------------------------- | ------------------------------------------- |
| **가독성**         | `.then()` 체이닝으로 인해 깊이가 생기기 쉬움 | 동기 코드와 유사하여 가독성이 높음          |
| **에러 처리**      | 각 체인 끝에 `.catch()`를 붙여야 함          | `try...catch` 블록으로 일괄 처리 가능       |
| **함수 일시 중지** | 불가능                                       | `await` 키워드를 통해 가능                  |
| **기반 기술**      | **Promise 객체 자체**                        | **Promise의 Syntactic Sugar** (문법적 설탕) |

## 5. 병렬 처리

`async/await`는 코드를 순차적으로 실행하지만, 여러 비동기 작업을 동시에 실행해야 할 때는 `Promise.all()`을 사용하여 병렬 처리의 이점을 살릴 수 있다.

```javascript
async function fetchAllData() {
  const start = Date.now();

  // 두 Promise를 동시에 시작시키고, Promise.all이 모두 끝날 때까지 await
  const [result1, result2] = await Promise.all([
    delay(1000), // 1초 대기
    delay(2000), // 2초 대기
  ]);

  const end = Date.now();

  // 순차 처리 시 3초가 걸리지만, 병렬 처리로 인해 약 2초가 걸림
  console.log(`총 실행 시간: ${end - start}ms`);
}

fetchAllData();
```
