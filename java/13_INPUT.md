# 키보드 입력 데이터를 변수에 저장

키보드로부터 입력된 데이터를 읽기 위해서는 표준 입력 스트림(`System.in`)을 직접 다루기보다, 이를 편리하게 도와주는 **`Scanner` 클래스**를 주로 사용한다.

### 1. Scanner 사용 준비

`Scanner`는 자바의 기본 라이브러리인 `java.util` 패키지에 들어있다. 따라서 코드 맨 윗줄에 `import` 문이 필요하다.

```java
import java.util.Scanner; // 1. Scanner 클래스 불러오기

public class Main {
  public static void main(String[] args) {
    // 2. Scanner 객체 생성
    Scanner scanner = new Scanner(System.in);

    // ... 입력 코드 ...
  }
}
```

### 2. 주요 입력 메소드

입력받고자 하는 데이터 타입에 따라 다른 메소드를 사용한다.

| **메소드**         | **설명**                                                |
| ------------------ | ------------------------------------------------------- |
| **`nextLine()`**   | 엔터(`Enter`) 키를 치기 전까지의 **문자열 전체**를 읽음 |
| **`next()`**       | 공백(스페이스) 전까지의 **문자열**을 읽음               |
| **`nextInt()`**    | 입력받은 데이터를 **int** 타입으로 읽음                 |
| **`nextDouble()`** | 입력받은 데이터를 **double** 타입으로 읽음              |


### 3. 실전 예제: 사용자 정보 받기

가장 권장되는 방식은 `nextLine()`으로 한 줄을 통째로 읽은 뒤, 필요에 따라 숫자로 변환하는 방식이다. (`nextInt()`를 직접 쓰면 입력 버퍼에 남은 '엔터' 값 때문에 다음 입력에서 오류가 날 수 있기 때문)

```java
System.out.print("이름 입력: ");
String name = scanner.nextLine(); // 문자열 입력

System.out.print("나이 입력: ");
String strAge = scanner.nextLine();
int age = Integer.parseInt(strAge); // 문자열을 숫자로 변환

System.out.println("결과: " + name + "님은 " + age + "살입니다.");
```

### 4. 입력 종료 시 주의사항

입력 장치를 계속 열어두면 메모리 낭비가 발생할 수 있다. 프로그램이 끝날 때 `scanner.close()`를 호출해주는 것이 좋다.
