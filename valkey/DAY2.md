# 기본 명령어

## 1. 주요 자료구조별 기본 명령어

| **자료구조**    | **주요 명령어**                            | **설명**                                      |
| --------------- | ------------------------------------------ | --------------------------------------------- |
| **Strings**     | `SET`, `GET`, `INCR`, `EXPIRE`             | 값 저장, 조회, 숫자 증가, 만료 시간 설정      |
| **Lists**       | `LPUSH`, `RPUSH`, `LPOP`, `RPOP`, `LRANGE` | 양방향 삽입/삭제, 범위 조회                   |
| **Hashes**      | `HSET`, `HGET`, `HGETALL`, `HDEL`          | 필드 단위 저장, 특정 필드 조회, 전체 조회     |
| **Sets**        | `SADD`, `SMEMBERS`, `SISMEMBER`, `SINTER`  | 요소 추가, 전체 조회, 존재 여부 확인, 교집합  |
| **Sorted Sets** | `ZADD`, `ZRANGE`, `ZREVRANK`, `ZSCORE`     | 스코어와 함께 추가, 순위 조회, 역순 순위 확인 |


## 2. 실습 시나리오: 사용자 서비스 관리

### 사용자 프로필 저장 (Hashes)

사용자의 ID를 키로 하여 이름, 이메일, 방문 횟수를 저장

```bash
# 사용자 'user:100'의 정보 저장
VALKEY> HSET user:100 name "Alice" email "alice@example.com" visits 1

# 특정 필드(이름)만 가져오기
VALKEY> HGET user:100 name
"Alice"

# 방문 횟수 1 증가
VALKEY> HINCRBY user:100 visits 1
```

### 최근 본 상품 목록 (Lists)

사용자가 최근에 본 상품 5개만 유지하는 "최근 본 상품" 기능을 구현

```bash
# 상품 ID를 왼쪽(앞)으로 삽입
VALKEY> LPUSH history:100 "item_A"
VALKEY> LPUSH history:100 "item_B"
VALKEY> LPUSH history:100 "item_C"

# 리스트 길이를 3개로 제한 (오래된 데이터 삭제)
VALKEY> LTRIM history:100 0 2

# 최근 목록 조회
VALKEY> LRANGE history:100 0 -1
```

### 실시간 게임 랭킹 (Sorted Sets)

점수에 따라 실시간으로 변하는 리더보드를 관리

```bash
# 유저별 점수 추가
VALKEY> ZADD game:rank 1500 "Player_A"
VALKEY> ZADD game:rank 2300 "Player_B"
VALKEY> ZADD game:rank 1850 "Player_C"

# 높은 점수 순으로 상위 3명 조회
VALKEY> ZREVRANGE game:rank 0 2 WITHSCORES

# Player_A의 현재 순위 확인 (0부터 시작하므로 +1 필요)
VALKEY> ZREVRANK game:rank "Player_A"
```

### 1회용 인증 코드 (Strings + EXPIRE)

3분(180초) 동안만 유효한 인증 번호를 생성

```bash
# 인증 코드 저장 및 180초 후 자동 삭제 설정
VALKEY> SET auth:100 "554231" EX 180

# 남은 유효 시간 확인 (초 단위)
VALKEY> TTL auth:100
```

## 3. 유효한 관리 명령어

- `KEYS *`: 저장된 모든 키를 나열합니다. (운영 환경에서 성능 저하 유발 주의)
- `EXISTS key`: 특정 키가 존재하는지 확인
- `DEL key`: 키를 삭제
- `FLUSHALL`: 현재 데이터베이스의 모든 데이터를 삭제
- `MONITOR`: 실시간으로 Valkey 서버에 들어오는 모든 명령어를 모니터링