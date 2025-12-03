# Class

**클래스(Class)**는 객체 지향 프로그래밍(OOP) 패턴을 구현하기 위한 청사진(Blueprint)이다. ES6(2015)에서 도입되었으며, 기존의 프로토타입 기반 상속을 더욱 명확하고 간결하게 표현할 수 있는 **문법적 설탕(Syntactic Sugar)** 역할을 한다.

## 1. 클래스 개요 (Syntactic Sugar)

클래스는 새로운 객체 모델이 아닌, 내부적으로는 기존의 **프로토타입(Prototype)** 메커니즘을 그대로 사용한다. 다만, 전통적인 OOP 언어와 유사한 형태로 코드를 작성할 수 있게 하여 개발자의 가독성과 편의성을 높였다.

## 2. 기본 문법 및 인스턴스 생성

### A. 클래스 선언

`class` 키워드를 사용하여 선언하며, 클래스 이름은 보통 대문자로 시작하는 **파스칼 케이스(Pascal Case)**를 사용한다.

```javascript
// 클래스 선언 (Class Declaration)
class Person {
  // 클래스 본문
}
```

### B. 생성자 (`constructor`)

클래스의 인스턴스(Instance)를 생성하고 초기화할 때 호출되는 특별한 메서드다.

- 클래스당 오직 하나만 존재할 수 있다.
- `new` 연산자로 인스턴스를 생성할 때 자동으로 호출된다.

```javascript
class Person {
  constructor(name, age) {
    // 인스턴스의 속성 초기화
    this.name = name;
    this.age = age;
  }
}
```

### C. 인스턴스 생성

`new` 연산자를 사용하여 클래스를 호출하면 해당 클래스의 인스턴스 객체가 생성된다.

```javascript
const person1 = new Person("홍길동", 30);
console.log(person1.name); // 출력: 홍길동
```

## 3. 클래스 메서드 (Methods)

클래스 내부에 정의된 함수로, 인스턴스에 의해 호출될 수 있다.

### A. 인스턴스 메서드 (Instance Methods)

클래스의 인스턴스에 속하며, 인스턴스를 통해 호출된다. `this`를 통해 해당 인스턴스의 속성에 접근할 수 있다.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  // 인스턴스 메서드
  sayHello() {
    return `안녕하세요, 저는 ${this.name}입니다.`;
  }
}

const p = new Person("김철수");
console.log(p.sayHello()); // 출력: 안녕하세요, 저는 김철수입니다.
```

### B. 정적 메서드 (Static Methods)

`static` 키워드를 사용하여 정의하며, **클래스 자체에 속하는 메서드**로 인스턴스 없이 클래스 이름으로 직접 호출한다. 유틸리티 함수나 특정 클래스에 종속된 헬퍼 함수를 만들 때 유용하다.

```javascript
class Calculator {
  // 정적 메서드
  static add(a, b) {
    return a + b;
  }
}

// 인스턴스 없이 클래스 이름으로 직접 호출
console.log(Calculator.add(5, 3)); // 출력: 8

// 인스턴스로는 호출할 수 없음
// const calc = new Calculator();
// calc.add(1, 2); // TypeError: calc.add is not a function
```

## 4. 상속 (Inheritance)

`extends` 키워드를 사용하여 상속을 구현한다. 이는 부모 클래스(Superclass)의 속성과 메서드를 자식 클래스(Subclass)가 물려받게 한다.

### A. `extends` 키워드

```javascript
// 부모 클래스 (Superclass)
class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    return `${this.name}가 움직입니다.`;
  }
}

// 자식 클래스 (Subclass)
class Dog extends Animal {
  bark() {
    return "멍멍!";
  }
}

const myDog = new Dog("바둑이");
console.log(myDog.move()); // 출력: 바둑이가 움직입니다. (상속받은 메서드)
console.log(myDog.bark()); // 출력: 멍멍! (자신만의 메서드)
```

### B. `super` 키워드

자식 클래스의 `constructor` 내부에서 `super()`를 호출하면, **부모 클래스의 `constructor`를 실행**하여 부모의 속성을 초기화한다. 자식 클래스가 `constructor`를 명시적으로 가질 경우, `this`를 사용하기 전에 **반드시** `super()`를 먼저 호출해야 한다.

```javascript
class Mammal extends Animal {
  constructor(name, type) {
    // 1. super()를 먼저 호출하여 부모(Animal)의 constructor 실행
    super(name);
    this.type = type; // 2. 이후 자식 클래스의 속성 초기화
  }

  move() {
    // 부모 클래스의 메서드를 호출
    return super.move() + " (포유류 방식)";
  }
}
```

## 5. 클래스 필드와 캡슐화

### A. 클래스 필드 (Class Fields)

ES2022에서 정식 표준이 되었으며, `constructor` 밖에서 인스턴스 속성을 정의할 수 있게 해줍니다.

```javascript
class Counter {
  // 클래스 필드: constructor에서 초기화할 필요 없음
  count = 0;

  increment() {
    this.count++;
  }
}
```

### B. 프라이빗 필드 (Private Fields)

필드 이름 앞에 **`#`** 기호를 붙여 선언하며, 클래스 내부에서만 접근 가능하고 외부에서는 접근할 수 없게 하여 **캡슐화**를 지원합니다.

```javascript
class Account {
  #balance; // 프라이빗 필드 선언

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // 내부에서만 접근 가능
  deposit(amount) {
    this.#balance += amount;
  }
}

const acc = new Account(1000);
// console.log(acc.#balance); // SyntaxError: 외부에서 접근 불가
```
