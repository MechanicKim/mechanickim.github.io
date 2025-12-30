# 자동 타입 변환

자동 타입 변환은 **허용 범위가 작은 타입이 허용 범위가 큰 타입으로 저장될 때** 발생한다. 자바 컴파일러가 안전하다고 판단하여 자동으로 변환해주는 기능이다.

### 1. 크기 비교 (허용 범위 순서)

타입의 메모리 크기(byte)도 중요하지만, 핵심은 **"표현할 수 있는 값의 범위"**다.

> byte < short < int < long < float < double

- **정수보다 실수가 항상 큼**: 비트 수가 같아도 실수는 지수 방식으로 표현하기 때문에 훨씬 큰 수를 담을 수 있다.
- **byte → char (불가!)**: `byte`는 음수를 포함하지만, `char`는 유니코드(0~65,535)만 다루므로 자동 변환이 되지 않는다.
- **데이터 손실**: 자동 타입 변환은 데이터 손실이 없는 방향으로만 일어나기 때문에 안전하다.

### 2. 주요 사례

#### 큰 그릇에 작은 그릇 담기

작은 타입의 변수를 큰 타입의 변수에 대입하면 자동으로 변환된다. 데이터 손실이 전혀 없다.

```java
byte byteValue = 10;
int intValue = byteValue;   // 자동 변환 (byte -> int)
System.out.println(intValue); // 10
```

#### 정수에서 실수를 대입할 때

정수는 실수 타입으로 대입되면 자동으로 `.0`이 붙으며 변환된다.

```java
long longValue = 5000L;
float floatValue = longValue;   // 자동 변환 (long -> float)
double doubleValue = longValue; // 자동 변환 (long -> double)
```

#### 3. char 타입을 int에 대입할 때

해당 문자의 **유니코드** 값이 `int` 변수에 저장된다.

```java
char charValue = 'A';
int intValue = charValue;   // 자동 변환 ('A'의 유니코드 65 저장)
```
