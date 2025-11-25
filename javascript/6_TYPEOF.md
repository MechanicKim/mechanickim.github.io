# 자바스크립트 `typeof` 연산자 쉽게 이해하기

`typeof` 연산자는 자바스크립트에서 **값의 자료형(Data Type)**을 문자열로 반환하는 데 사용된다.

## 1. 기본 사용법

`typeof`는 두 가지 방식으로 사용할 수 있다.

| **형식**        | **예시**     | **설명**                         |
| --------------- | ------------ | -------------------------------- |
| **연산자 방식** | `typeof 10`  | 괄호 없이 사용(가장 흔한 방식)   |
| **함수 방식**   | `typeof(10)` | 괄호로 값을 감싸서 함수처럼 사용 |

두 방식 모두 동일한 결과를 반환하며, 결과는 항상 **소문자 문자열**이다 (예: `"string"`, `"number"`).

## 2. 원시 타입(Primitive Types)에 대한 결과

자바스크립트의 7가지 원시 타입에 대한 `typeof` 결과는 직관적이다.

| **값 (Value)**   | **설명**         | **typeof 결과** |
| ---------------- | ---------------- | --------------- |
| `"Hello"`        | 문자열 (String)  | `"string"`      |
| `123`            | 숫자 (Number)    | `"number"`      |
| `true` / `false` | 불리언 (Boolean) | `"boolean"`     |
| `undefined`      | 정의되지 않은 값 | `"undefined"`   |
| `Symbol('id')`   | Symbol           | `"symbol"`      |
| `10n`            | BigInt           | `"bigint"`      |

## 3. 객체 및 특수 타입에 대한 결과

`typeof`가 항상 자료형의 이름과 정확히 일치하는 문자열을 반환하는 것은 아니다. 특히 객체 타입과 null에서 특이한 동작이 발생한다.

### A. 객체 (`Object`)

배열(`Array`)이나 일반 객체(`Object`) 등 대부분의 참조 타입에 대해 `typeof`는 `"object"`를 반환한다.

| **값 (Value)**    | **설명**                 | **typeof 결과** |
| ----------------- | ------------------------ | --------------- |
| `{ name: 'Kim' }` | 일반 객체 (Plain Object) | `"object"`      |
| `[1, 2, 3]`       | 배열 (Array)             | `"object"`      |

### B. 함수 (`Function`)

함수는 기술적으로 객체이지만, `typeof`는 함수를 특별하게 취급하여 `"function"`을 반환한다.

| **값 (Value)**  | **설명**        | **typeof 결과** |
| --------------- | --------------- | --------------- |
| `function() {}` | 함수 (Function) | `"function"`    |

### C. `null`

`null`은 값이 없음을 나타내는 특별한 원시 타입이지만, `typeof`는 역사적인 이유로 잘못된 결과를 반환한다. 이는 자바스크립트의 초기 설계 오류로 간주된다.

| **값 (Value)** | **설명**           | **typeof 결과**          |
| -------------- | ------------------ | ------------------------ |
| `null`         | 값이 없음을 나타냄 | `"object"` **(⚠️ 오류)** |

**💡 `null`을 확인하는 올바른 방법:**

`typeof` 대신 값 비교(`===`)를 사용한다.

```javascript
const myNull = null;
console.log(typeof myNull); // "object" (잘못된 결과)
console.log(myNull === null); // true (올바른 확인 방법)
```

### D. 배열(`Array`) 확인하는 올바른 방법

`typeof` 연산자는 배열에 대해 일반 객체와 마찬가지로 `"object"`를 반환하므로, 값이 실제로 배열인지 확인하는 데 한계가 있다. 배열인지 정확하게 확인하려면 `Array.isArray()` 메서드를 사용해야 한다.

```javascript
const myArray = [1, 2, 3];
const myObject = { a: 1 };

console.log(typeof myArray); // "object" (배열 확인 불가)
console.log(Array.isArray(myArray)); // true (올바른 배열 확인)

console.log(typeof myObject); // "object"
console.log(Array.isArray(myObject)); // false
```

## 4. 요약

| **값의 종류** | **예시**                 | **typeof 결과** | **비고**                       |
| ------------- | ------------------------ | --------------- | ------------------------------ |
| 문자열        | `"abc"`                  | `"string"`      |                                |
| 숫자          | `123`, `NaN`, `Infinity` | `"number"`      | `NaN`도 `"number"`             |
| 불리언        | `true`                   | `"boolean"`     |                                |
| Undefined     | `undefined`              | `"undefined"`   |                                |
| Symbol        | `Symbol()`               | `"symbol"`      |                                |
| BigInt        | `10n`                    | `"bigint"`      |                                |
| **객체**      | `{ }`, `[ ]`             | `"object"`      | 배열도 `"object"`              |
| **Null**      | `null`                   | `"object"`      | **⚠️ 역사적인 오류**           |
| **함수**      | `function() {}`          | `"function"`    | 객체이지만 특별히 `"function"` |
