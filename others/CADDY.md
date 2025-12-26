# Reverse proxy server with [Caddy](https://caddyserver.com/)

Caddy는 설정이 매우 직관적이고 가볍기 때문에 로컬 환경에서 리버스 프록시를 구성하기에 좋다.

## Caddy 설치(Mac)

```bash
brew install caddy
```

다른 OS에서 설치는 [설치 문서](https://caddyserver.com/docs/install) 참고

## CLI로 실행

#### 3000 포트 → 5173 포트
```bash
caddy reverse-proxy --from :3000 --to :5173
```

## Caddyfile을 작성하여 실행

원하는 위치에 `Caddyfile`(확장자 X) 파일을 만들어 다음과 같이 작성한다.

```
:3000

reverse_proxy :5173
```

터미널에서 `Caddyfile`이 있는 디렉토리로 이동한 후 다음 명령을 실행한다.

```bash
caddy run
```

- **백그라운드 실행**: `caddy start`
- **설정 변경 후 적용**: `caddy reload`

#### reverse_proxy 참고
- [문서](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy)
- [예제](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#examples)

## HTTPS

로컬 개발 중에 **HTTPS** 환경이 필요한 경우, 자체적인 로컬 CA(인증 기관)를 생성하여 **SSL 인증서를 자동으로 발급**해준다. Caddyfile이 다음과 같다면

```
localhost {
  reverse_proxy localhost:5173
}

127.0.0.1 {
  reverse_proxy 127.0.0.1:5173
}
```

서버를 실행하고 https://localhost 또는 https://127.0.0.1로 접근한다. 브라우저에서 안전하지 않은 접근으로 보인다면 터미널을 확인하자. 시스템 비밀번호를 요구하면 입력한다.