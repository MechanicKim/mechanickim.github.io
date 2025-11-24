# Data Types

JavaScript의 데이터 타입은 크게 두 가지 범주로 나뉜다.

1. **원시 타입 (Primitive Type):** 값이 변경될 수 없는 **불변(immutable)**의 값을 저장하며, **값 자체**를 메모리에 저장
2. **객체 타입 (Object/Reference Type):** 값이 변경될 수 있는 **가변(mutable)**의 값을 저장하며, 메모리에 **값의 주소(참조)**를 저장

## 1. 원시 타입 (Primitive Types)

### 1.1. `String` (문자열)

- 텍스트 데이터
- 작은따옴표 (`'`) 또는 큰따옴표 (`"`)로 감싸서 표현
- ES6 이후에는 백틱 (```)을 사용한 템플릿 리터럴도 사용

```
let name = '홍길동';
let greeting = `안녕하세요, ${name}님.`; // 템플릿 리터럴

```

### 1.2. `Number` (숫자)

- 정수, 소수(실수) 등 모든 숫자
- 특수한 숫자 값인 `Infinity` (무한대), `Infinity` (음의 무한대), `NaN` (Not a Number, 숫자 아님)도 포함

```
let integer = 123;
let float = 3.14;
let result = 10 / 'A'; // NaN (유효하지 않은 연산 결과)

```

### 1.3. `BigInt` (큰 정수)

- `Number` 타입이 표현할 수 있는 안전한 최대 정수(약 2의 53승) 이상의 매우 큰 정수를 나타낼 때 사용
- 숫자 뒤에 `n`을 붙여서 선언

```
let bigNumber = 9007199254740991n + 1n;

```

### 1.4. `Boolean` (불리언)

- 논리적인 참/거짓
- 오직 `true` 또는 `false` 두 가지 값만 가짐
- 주로 조건문(`if`), 반복문(`for`) 등 흐름 제어에 사용

```
let isStudent = true;
let isPassed = false;

```

### 1.5. `Undefined` (언디파인드)

- 변수가 선언되었지만, **아직 값이 할당되지 않은 상태**
- JavaScript 엔진이 자동으로 값을 할당하는 경우

```
let data; // 변수 선언 후 값을 할당하지 않음
console.log(data); // 출력: undefined

```

### 1.6. `Null` (널)

- 변수에 **"값이 없다"는 것을 의도적으로 명시**할 때 사용
- `Undefined`와 달리 개발자가 명시적으로 할당해야 하는 값

```
let car = null; // car 변수에는 현재 의도적으로 값이 없음을 명시

```

> ⚠️ typeof null의 오류: 역사적인 이유로 typeof null을 실행하면 object가 출력된다. 이는 JavaScript 언어의 공식적인 버그로 간주되지만 하위 호환성을 위해 수정되지 않았다. 실제 null은 원시 타입이다.

### 1.7. `Symbol` (심볼)

- ES6에서 추가되었으며, **고유하고 변경 불가능한 값**을 생성하는 데 사용
- 주로 객체의 속성(property) 키로 사용하여, 다른 키와의 충돌을 방지하는 목적으로 사용

```
const id = Symbol('id');
const id2 = Symbol('id');

console.log(id === id2); // 출력: false (설명이 같더라도 값은 항상 고유함)

```

## 2. 객체 타입 (Object Type)

객체 타입은 원시 타입처럼 단일 값이 아닌 **여러 개의 속성(프로퍼티)을 담을 수 있는 컨테이너** 역할을 한다.

### 2.1. `Object` (객체)

- 키(key)와 값(value)으로 구성된 속성들의 집합
- 일반적인 객체 외에 `Array` (배열), `Function` (함수), `Date`, `RegExp` 등도 포함

```
// 일반적인 객체
let person = {
  name: '김개발',
  age: 30,
  isWorking: true
};

// 배열 (Array): 순서가 있는 값의 목록
let colors = ['red', 'green', 'blue'];

// 함수 (Function): 호출 가능한 코드 블록
function add(a, b) {
  return a + b;
}

```

## 3. 핵심 차이: 값 복사 vs. 참조 복사

원시 타입과 객체 타입의 가장 중요한 차이점은 **변수를 다른 변수에 할당할 때 데이터가 복사되는 방식**이다.

### 3.1. 원시 타입: 값(Value) 복사

원시 값을 복사하면, **원본 값과 완전히 분리된 새로운 값**이 생성된다. 따라서 복사된 변수를 변경해도 원본 변수에는 영향을 주지 않는다.

```
let a = 10;
let b = a; // a의 '값(10)'을 복사

b = 20; // b만 변경
console.log(a); // 출력: 10 (원본 a는 그대로 유지)

```

### 3.2. 객체 타입: 참조(Reference) 복사

객체를 복사하면 **값이 저장된 메모리 주소(참조)**만 복사된다. 두 변수는 **동일한 메모리 공간을 가리킵니다.** 따라서 복사된 변수를 통해 내부 값을 변경하면 원본 변수에도 영향을 미친다.

```
let obj1 = { score: 100 };
let obj2 = obj1; // obj1의 '주소'를 복사 (같은 객체를 가리킴)

obj2.score = 50; // obj2를 통해 객체의 내용 변경
console.log(obj1.score); // 출력: 50 (obj1도 함께 변경됨)
```
