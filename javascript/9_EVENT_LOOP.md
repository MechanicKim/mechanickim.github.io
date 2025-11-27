# Event Loop

자바스크립트는 기본적으로 **싱글 스레드(Single-threaded)** 언어이지만, **이벤트 루프(Event Loop)**라는 메커니즘을 통해 비동기 작업을 처리하고 논블로킹(Non-blocking) 방식으로 동작할 수 있다.

이벤트 루프는 자바스크립트가 **동작하는 환경(Runtime Environment)**의 일부이며, 코드가 실행되는 방식과 순서를 결정하는 핵심적인 부분이다.

## 1. 이벤트 루프의 핵심 구성 요소

자바스크립트 코드는 브라우저(또는 Node.js) 환경에서 실행되며, 이 환경은 다음과 같은 주요 구성 요소로 이루어져 있다.

### Call Stack (호출 스택)

- **역할:** 동기적으로 실행되는 코드(함수)를 저장하고 실행 순서를 기록하는 스택(Stack) 구조다. 함수가 호출될 때 스택에 쌓이고, 실행이 완료되면 스택에서 제거된다.
- **특징:** 싱글 스레드이기 때문에 오직 하나의 호출 스택만 존재하며, 스택에 함수가 남아있는 동안에는 다른 작업은 처리할 수 없다 (Blocking 발생).

### Heap (힙)

- **역할:** 객체나 변수 등의 동적 메모리 할당이 이루어지는 공간이다.

### Web APIs (웹 API)

- **역할:** 브라우저 환경에서 제공하는 비동기 처리 기능의 집합이다. 자바스크립트 엔진 외부에 존재한다.
- **예시:** `setTimeout()`, `setInterval()`, `fetch()`, DOM 이벤트 리스너(클릭, 스크롤 등) 등이 있다.

### Task Queue (작업 큐, Macrotask Queue)

- **역할:** Web API에서 처리 완료된 비동기 작업의 **콜백 함수**가 대기하는 곳이다. FIFO(선입선출) 구조로 작동한다.
- **예시:** `setTimeout`, `setInterval`, DOM 이벤트 핸들러의 콜백.

### Microtask Queue (마이크로 작업 큐)

- **역할:** Task Queue보다 높은 우선순위를 가지는 비동기 콜백이 대기하는 곳이다.
- **예시:** `Promise.then()`, `Promise.catch()`, `async/await`의 결과, `queueMicrotask()`.

### Event Loop (이벤트 루프)

- **역할:** Call Stack과 Task Queue를 끊임없이 감시하며, Call Stack이 비어 있을 때(호출 대기 중인 동기 함수가 없을 때) Task Queue나 Microtask Queue의 콜백 함수를 Call Stack으로 밀어 넣어 실행을 재개하는 메커니즘이다.

## 2. 이벤트 루프의 동작 과정

1. **동기 코드 실행:** 모든 자바스크립트 코드는 Call Stack에서 실행
2. **비동기 함수 호출:** `setTimeout(callback, 0)`과 같은 비동기 함수가 호출되면, 이 함수 자체는 Call Stack에서 실행되지만, 콜백 함수(`callback`)와 타이머 설정은 **Web API**로 위임
3. **Web API 처리:** Web API는 타이머를 카운트하거나 네트워크 응답을 기다리는 등 비동기 작업을 백그라운드에서 처리
4. **콜백 대기열 이동:** Web API에서 비동기 작업이 완료되면, 해당 콜백 함수는 **Task Queue** 또는 **Microtask Queue**로 이동하여 Call Stack에 진입할 차례를 기다림
5. **루프 실행 조건:** **Event Loop**는 Call Stack이 비었는지(Empty) 지속적으로 확인
6. **콜백 실행:** Call Stack이 완전히 비어있는 상태가 되면, Event Loop는 **Microtask Queue**에 대기 중인 작업부터 모두 Call Stack으로 옮겨 실행. Microtask Queue가 비면, **Task Queue**에서 가장 오래된 작업을 하나만 Call Stack으로 옮겨 실행
7. **반복:** 이 과정은 프로그램이 종료되거나 무한 루프에 빠질 때까지 계속 반복

## 3. Task (Macrotask)와 Microtask의 우선순위

이벤트 루프에서 가장 중요한 규칙 중 하나는 작업의 **우선순위**다.

| 유형          | 명칭 | 우선순위 | 예시                                             |
| ------------- | ---- | -------- | ------------------------------------------------ |
| **Macrotask** | Task | 낮음     | `setTimeout()`, `setInterval()`, I/O, UI 렌더링  |
| **Microtask** |      | 높음     | `Promise.then/catch/finally`, `queueMicrotask()` |

## 4. 실행 순서 원칙

1. **Call Stack 비우기:** 현재 실행 중인 모든 동기 코드를 Call Stack에서 완료
2. **Microtask Queue 처리:** Call Stack이 비면, **Microtask Queue에 있는 모든 작업**을 전부 꺼내와 실행하고 큐를 완전히 비움
3. **UI 렌더링 (선택적):** 필요한 경우 브라우저가 UI를 렌더링
4. **Macrotask Queue 처리:** **Macrotask Queue에서 하나의 작업**만 꺼내와 실행
5. **반복:** 다시 Call Stack이 비면, Microtask Queue 처리(2번)부터 반복
