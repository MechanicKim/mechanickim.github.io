# Iterator & Iterable

자바스크립트에서 **반복(Iteration)**을 처리하는 표준 방식은 **이터러블(Iterable)**과 **이터레이터(Iterator)** 프로토콜을 따르는 것이다. 이 메커니즘은 배열뿐만 아니라 문자열, Map, Set, NodeList 등 다양한 데이터 구조를 효율적으로 순회할 수 있게 한다.

## 1. 이터러블 (Iterable) 이란?

- **`for...of` 루프**를 사용하여 순회할 수 있는 데이터 구조를 의미한다.

### 조건

객체 내부에 **`[Symbol.iterator]`**라는 이름의 특별한 메서드를 가지고 있어야 한다. 이 메서드를 호출하면 **이터레이터 객체**를 반환한다.

### 내장 이터러블 예시

자바스크립트에서 기본적으로 이터러블인 타입들:

- **Array** (`[]`)
- **String** (`""`)
- **Map** (`new Map()`)
- **Set** (`new Set()`)
- **TypedArray**
- **arguments** 객체
- **NodeList** (DOM 컬렉션)

## 2. 이터레이터 (Iterator) 이란?

- 이터러블의 항목들을 순차적으로 접근하기 위한 객체다.

### 조건

반드시 **`next()`**라는 이름의 메서드를 가지고 있어야 한다.

### A. `next()` 메서드의 반환값

`next()` 메서드를 호출할 때마다, 이터레이터는 현재 순회 상태에 대한 정보를 담은 **결과 객체(Iterator Result Object)**를 반환합니다.

| 필드        | 타입      | 설명                                                                                            |
| ----------- | --------- | ----------------------------------------------------------------------------------------------- |
| **`value`** | `any`     | 현재 순회 중인 요소의 값입니다. `done`이 `true`일 때는 생략되거나 `undefined`가 될 수 있습니다. |
| **`done`**  | `boolean` | 순회가 끝났는지 여부를 나타냅니다. `false`이면 순회 중, **`true`이면 순회 완료**를 의미합니다.  |

### B. 동작 방식

```javascript
// 예시: 배열의 이터레이터 얻기
const arr = ["a", "b", "c"];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true } <-- 순회 끝
```

## 3. 이터레이터 프로토콜 (Iterator Protocol)

### A. `for...of` 루프

`for...of` 루프는 이터러블 프로토콜을 활용하여 컬렉션의 항목들을 순회하는 가장 쉽고 현대적인 방법이다.

1. 루프가 시작되면, 대상 객체에서 `[Symbol.iterator]()` 메서드를 호출하여 이터레이터를 얻음.
2. 반복할 때마다 이터레이터의 `next()` 메서드를 호출.
3. `done: false`인 경우 `value`를 변수에 할당하고 루프 본문을 실행.
4. `done: true`가 되면 루프를 종료.

```javascript
const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
  console.log(color);
}
// 출력: Red, Green, Blue
```

> ⚠️ for...in과의 차이: for...in은 객체의 속성 이름(키)을 순회하는 반면, for...of는 이터러블의 값(Value)을 순회한다.

### B. 전개 구문 (`...`)

전개 구문(Spread Operator)도 이터러블 프로토콜을 사용한다. 배열이나 다른 이터러블을 분해하여 새 배열이나 함수 인수로 사용할 때 활용한다.

```javascript
const set = new Set([1, 2, 3]);
const arrayFromSet = [...set]; // [1, 2, 3]

console.log(arrayFromSet);
```

## 4. 커스텀 이터러블 만들기

사용자 정의 객체도 `[Symbol.iterator]` 메서드를 구현하여 이터러블로 만들 수 있다.

```javascript
const range = {
  from: 1,
  to: 5,

  // [Symbol.iterator] 메서드는 이터레이터 객체를 반환합니다.
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;

    // next() 메서드를 가진 객체(이터레이터)를 반환
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// for...of 루프가 커스텀 객체를 순회합니다.
for (const num of range) {
  console.log(num);
}
// 출력: 1, 2, 3, 4, 5
```

### 5. 이터레이터와 제너레이터 (Generator)

**제너레이터 함수**는 커스텀 이터레이터를 쉽고 간결하게 만들 수 있도록 도와주는 ES6의 또 다른 강력한 기능이다.

- 제너레이터 함수(`function*`)를 호출하면 자동으로 **제너레이터 객체(이터레이터)**를 반환
- 함수 내부에서 `yield` 키워드를 사용하여 `next()` 호출 시 반환될 `value`를 지정할 수 있다.

```javascript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
```
