# 문자열을 기본 타입으로 변환

사용자로부터 입력받은 값이나 파일에서 읽어온 데이터는 대부분 **문자열(String)**이다. 이를 계산에 활용하려면 `int`나 `double` 같은 기본 타입으로 바꿔줘야 한다.

### 1. 문자열 → 기본 타입

각 기본 타입의 **래퍼(Wrapper) 클래스**에서 제공하는 `parseXXX()` 메소드를 사용한다.

| **변환 타입**        | **사용 메소드**             |
| -------------------- | --------------------------- |
| **String → byte**    | `Byte.parseByte(str)`       |
| **String → short**   | `Short.parseShort(str)`     |
| **String → int**     | `Integer.parseInt(str)`     |
| **String → long**    | `Long.parseLong(str)`       |
| **String → float**   | `Float.parseFloat(str)`     |
| **String → double**  | `Double.parseDouble(str)`   |
| **String → boolean** | `Boolean.parseBoolean(str)` |

```java
String str = "100";
int value = Integer.parseInt(str);

String str2 = "3.14";
double value2 = Double.parseDouble(str2);
```

### 2. 기본 타입 → 문자열

- **`String.valueOf()`**: 가장 정석적인 방법

```java
String str = String.valueOf(100);
```

- **문자열 결합(`+`)**: 빈 문자열과 더하면 자동으로 문자열이 됨

```
String str = 100 + "";
```

### 3. NumberFormatException

문자열을 숫자로 바꿀 때, 문자열에 숫자가 아닌 문자(알파벳, 특수문자 등)가 포함되어 있으면 `NumberFormatException` 에러가 발생하며 프로그램이 멈출 수 있다.

```java
String str = "100a";
int value = Integer.parseInt(str); // 에러 발생!
```
