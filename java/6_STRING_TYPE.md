# 문자열 타입

char처럼 문자 하나가 아닌, "Hello World"와 같이 문자의 나열을 의미한다.

### 1. String은 클래스 타입

정수(`int`), 실수(`double`) 등은 '기본 타입'이지만, **String은 '클래스 타입'**이다. 즉, 참조 타입(Reference Type)에 해당한다.

- **선언 방식**: 큰따옴표(`" "`)로 감싼다.
- **예시**: `String name = "자바";`

### 2. 이스케이프 문자 (Escape Sequence)

문자열 내부에 특수 문자를 포함하고 싶을 때 역슬래시(`\`)를 사용한다.

- `"홍길동입니다."` → `"\"홍길동\"입니다."` (따옴표 출력)
- `C:\Temp` → `"C:\\Temp"` (역슬래시 출력)

### 3. 💡 Java 15~21 핵심: 텍스트 블록 (Text Blocks)

자바 21에서는 여러 줄의 문자열을 훨씬 깔끔하게 작성할 수 있는 텍스트 블록을 지원한다.

- **작성법**: 큰따옴표 3개(""")로 감싼다.
- **특징**: 작성한 모양 그대로 문자열 저장

```java
// 기존 방식
String html = "<html>\n" +
              "  <body>\n" +
              "    <p>Hello</p>\n" +
              "  </body>\n" +
              "</html>";

// 자바 21 텍스트 블록 방식
String htmlBlock = """
    <html>
      <body>
        <p>Hello</p>
      </body>
    </html>
    """;
```

### 4. 문자열 비교 (중요!)

`==`는 '메모리 주소'를 비교하기 때문에 쓰지 않는 것이 원칙이다.

- **값 자체를 비교**: `.equals()` 메소드 사용

```java
String str1 = "Java";
String str2 = new String("Java");

System.out.println(str1 == str2);      // false (주소가 다름)
System.out.println(str1.equals(str2)); // true (내용이 같음)
```

### 5. 💡 Java 21 신기능: 문자열 템플릿 (String Templates)

자바 21에서 도입된 String Templates를 사용하면 변수를 문자열 안에 직관적으로 넣을 수 있다. (※ Preview 기능이므로 설정이 필요할 수 있음)

```java
String name = "Gemini";
String greeting = STR."Hello, \{name}!"; // "Hello, Gemini!"
```
