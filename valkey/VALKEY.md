# Valkey

### 도커 이미지 실행 및 테스트

```bash
# 이미지 다운로드, 컨테이너 실행, 접근
docker run --name my-valkey -p 6379:6379 -d valkey/valkey-bundle:latest
docker exec -it my-valkey valkey-cli

# 테스트
127.0.0.1:6379> ping
PONG
127.0.0.1:6379> set user:1 "Gemini"
OK
127.0.0.1:6379> get user:1
"Gemini"
```

### 목차

- [자료구조와 활용 사례](./DAY1.md)
- [기본 명령어](./DAY2.md)
- [복합 구조 명령어](./DAY3.md)
- [TTL 핵심 명령어와 활용법](./DAY4.md)