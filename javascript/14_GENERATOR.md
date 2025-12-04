# Generator

**제너레이터(Generator)**는 실행을 일시 중지했다가 다시 시작할 수 있는 특별한 유형의 함수다. 비동기 프로그래밍, 이터레이터 구현, 그리고 무한 데이터 스트림 처리에 매우 유용하다.

## 1. 제너레이터의 기본 구조

제너레이터 함수는 일반 함수와 달리 `function` 키워드 뒤에 **별표(`*`)**를 붙여 선언하며, 내부에서 **`yield`** 키워드를 사용하여 실행을 제어한다.

### A. `function*` (제너레이터 함수)

- `function*` 키워드로 정의
- 이 함수를 호출해도 코드가 즉시 실행되지 않고, **제너레이터 객체(Generator Object)**라는 특별한 객체를 반환

### B. `yield` (실행 일시 정지)

- 제너레이터 함수 내에서만 사용
- `yield`를 만나면 함수의 실행을 **일시 정지**하고, 뒤에 오는 값을 **외부로 반환**
- 외부에서 `next()`가 호출되면, `yield` 지점부터 **실행을 재개**

```javascript
function* simpleGenerator() {
  console.log("1. 코드 실행 시작");
  yield 1; // 첫 번째 일시 정지 및 값 반환

  console.log("2. 실행 재개");
  yield 2; // 두 번째 일시 정지 및 값 반환

  console.log("3. 마지막 실행");
  return 3; // return은 done: true일 때 value가 됩니다.
}
```

## 2. 제너레이터 객체와 `next()` 메서드

제너레이터 함수를 호출하면 반환되는 **제너레이터 객체**는 **이터레이터 프로토콜**을 완벽하게 구현하고 있다.

### A. `next()` 호출

제너레이터 객체의 `next()` 메서드를 호출할 때마다, 제너레이터 함수는 다음 `yield` 또는 `return` 문을 만날 때까지 실행된다.

### B. 반환 객체

`next()`는 이터레이터와 동일하게 항상 `{ value: any, done: boolean }` 형태의 객체를 반환한다.

| 필드        | 값 (yield)             | 값 (return)              |
| ----------- | ---------------------- | ------------------------ |
| **`value`** | `yield` 뒤에 명시된 값 | `return` 뒤에 명시된 값  |
| **`done`**  | `false` (아직 실행 중) | `true` (제너레이터 종료) |

```javascript
const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
// console 출력: 1. 코드 실행 시작

console.log(gen.next()); // { value: 2, done: false }
// console 출력: 2. 실행 재개

console.log(gen.next()); // { value: 3, done: true }
// console 출력: 3. 마지막 실행

console.log(gen.next()); // { value: undefined, done: true } (종료 후)
```

## 3. 제너레이터의 활용

### A. 이터러블 객체 생성

제너레이터 함수 자체가 `[Symbol.iterator]` 역할을 대신할 수 있어 커스텀 이터러블을 매우 쉽게 만들 수 있다.

```javascript
const myIterable = {
  from: 1,
  to: 3,
  // [Symbol.iterator] 메서드에 제너레이터 함수를 사용
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  },
};

for (const num of myIterable) {
  console.log(num); // 1, 2, 3
}
```

### B. `yield*` (위임)

`yield*`는 현재 제너레이터의 실행을 다른 제너레이터나 이터러블 객체에 **위임**하여 순회하도록 한다.

```javascript
function* gen1() {
  yield "A";
  yield "B";
}

function* gen2() {
  yield 0;
  yield* gen1(); // gen1에 순회를 위임
  yield 3;
}

// gen2의 next()는 0, A, B, 3 순서로 값을 반환
[...gen2()]; // [0, 'A', 'B', 3]
```

### C. `next(value)`를 통한 양방향 통신

`next()` 메서드에 인자를 전달하면, 그 인자는 제너레이터 내부에서 현재 `yield` 표현식의 **결과값**이 된다. 이를 통해 외부에서 제너레이터 내부로 값을 전달하며 제어할 수 있다.

```javascript
function* inputGenerator() {
  const input1 = yield "첫 번째 값을 입력하세요:";
  console.log(`내부에서 받은 값 1: ${input1}`);

  const input2 = yield "두 번째 값을 입력하세요:";
  console.log(`내부에서 받은 값 2: ${input2}`);
}

const ioGen = inputGenerator();

// 첫 번째 yield까지 실행, value 반환
console.log(ioGen.next().value);

// 다음 next() 호출 시 'Hello'를 내부의 'input1' 변수로 전달
console.log(ioGen.next("Hello").value);

// 다음 next() 호출 시 'World'를 내부의 'input2' 변수로 전달
ioGen.next("World");
```

## 4. 에러 처리 및 종료

제너레이터 객체는 `next()` 외에도 두 가지 메서드를 제공하여 제너레이터를 외부에서 제어할 수 있습니다.

| 메서드                        | 역할               | 설명                                                                                      |
| ----------------------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| **`generator.throw(err)`**    | **내부 에러 발생** | 제너레이터 내부에 에러를 던져서, `try...catch` 블록으로 잡거나 제너레이터를 종료시킵니다. |
| **`generator.return(value)`** | **강제 종료**      | `done: true` 상태로 즉시 전환하고 `value`를 반환하여 제너레이터를 종료합니다.             |
