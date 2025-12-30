# 콘솔로 변수값 출력

표준 출력 장치(콘솔)로 데이터를 보낼 때는 `System.out` 객체를 사용한다. 상황에 따라 세 가지 메소드 중 하나를 골라 쓴다.

### 1. `println(내용)` : 줄 바꿈 포함

가장 많이 사용. 내용을 출력한 후 **자동으로 줄을 바꿔준다.**

```java
System.out.println("Hello");
System.out.println("Java");
// 결과:
// Hello
// Java
```

### 2. `print(내용)` : 줄 바꿈 없음

내용을 출력하고 **커서를 그 자리에 그대로 둔다.** 다음 출력 내용이 바로 옆에 붙어서 나온다.

```java
System.out.print("Hi ");
System.out.print("Friend");
// 결과: Hi Friend
```

### 3. `printf("형식문자열", 값1, 값2, ...)` : 형식 지정 출력

데이터를 특정 포맷(소수점 자리수, 전체 자릿수 등)에 맞춰 출력하고 싶을 때 사용. `f`는 **format**의 약자다.

| **형식** | **의미**        | **예시**                           |
| -------- | --------------- | ---------------------------------- |
| **`%d`** | 정수 (decimal)  | `System.out.printf("%d", 10);`     |
| **`%f`** | 실수 (float)    | `System.out.printf("%f", 3.14);`   |
| **`%s`** | 문자열 (string) | `System.out.printf("%s", "자바");` |
| **`%n`** | 줄 바꿈         | `System.out.printf("%d%n", 10);`   |

```java
int price = 12300;
double tax = 1.1;

// "가격: 12,300원" 처럼 자릿수 맞추기
System.out.printf("가격: %6d원%n", price);

// 소수점 둘째 자리까지 출력하기
System.out.printf("세율 적용: %.2f%n", price * tax);
```

### 💡 Java 21 팁: 문자열 템플릿(Preview)과의 조합

앞서 언급한 자바 21의 **String Templates**를 사용하면 `printf`보다 훨씬 직관적으로 출력문을 작성할 수 있다.
