# [Colima](https://github.com/abiosoft/colima)

macOS(및 Linux)에서 Docker Desktop의 무겁고 유료화된 환경을 대체할 수 있는 가장 강력한 오픈소스 대안

- **무료 및 오픈소스**: 기업 사용자도 라이선스 걱정 없이 무료로 사용 가능
- **가벼움**: GUI 없이 CLI로만 동작하여 CPU와 메모리 점유율이 낮음
- **아키텍처 지원**: Intel 및 Apple Silicon(M1/M2/M3)을 모두 지원하며, Rosetta 2를 통한 x86_64 에뮬레이션도 가능

## 설치 (macOS 기준)

Homebrew를 사용하여 간단히 설치할 수 있음

```bash
# 1. Colima 및 Docker CLI 설치
brew install colima docker

# (선택) Docker Compose가 필요한 경우
brew install docker-compose
```

- Docker 명령어를 사용하기 위한 Docker CLI도 함께 설치해야 함
- 기존에 Docker Desktop이 설치되어 있다면, 충돌 방지를 위해 Docker Desktop을 완전히 종료하거나 삭제하는 것을 권장

## 기본 사용법

#### VM 시작 및 중지

가장 기본이 되는 명령어

```bash
# 기본 설정으로 시작 (2 CPU, 2GB RAM, 60GB Disk)
colima start

# 리소스 지정하여 시작 (추천: 개발 환경에 맞춰 조절)
colima start --cpu 4 --memory 8 --disk 100

# 중지 및 상태 확인
colima stop
colima status
```

#### 아키텍처 지정 (M1/M2/M3 사용자 팁)

```bash
# Apple Silicon Mac에서 x86_64 기반 이미지를 실행해야 할 때
colima start --arch x86_64 --memory 4
```

## 주요 설정 및 최적화

#### 설정 파일 수정 (`--edit`)

시작할 때마다 옵션을 입력하기 번거롭다면 설정 파일을 직접 수정할 수 있다.

```bash
colima start --edit
```

이 명령어를 입력하면 YAML 설정 파일이 열리며, 여기서 CPU, 메모리, 마운트 경로, VirtioFS(파일 시스템 성능 향상) 등을 영구적으로 설정할 수 있다.

#### 파일 시스템 성능 최적화

macOS와 컨테이너 간의 파일 공유 속도가 느리다면 `virtiofs`를 사용해 보자. (macOS 12.3 이상 권장)

```bash
colima start --vm-type=vz --mount-type=virtiofs
```

## 자주 쓰는 명령어 요약

| **명령어**                | **설명**                                        |
| ------------------------- | ----------------------------------------------- |
| `colima list`             | 현재 실행 중인 인스턴스 목록 확인               |
| `colima delete`           | 생성된 VM 인스턴스 삭제 (데이터 초기화)         |
| `colima kubernetes start` | k3s를 이용한 쿠버네티스 환경 활성화             |
| `docker context ls`       | Docker 컨텍스트가 colima로 지정되어 있는지 확인 |


## 문제 해결

#### 1. Docker 명령어가 작동하지 않을 때

Colima가 실행 중임에도 `docker ps` 등이 안 된다면 컨텍스트를 확인하자.

```bash
docker context use colima
```

#### 2. 고정된 Docker Socket 경로가 필요할 때

일부 도구(예: Testcontainers, IntelliJ 등)는 /var/run/docker.sock을 참조한다. Colima의 소켓을 해당 경로로 심볼릭 링크를 걸어주면 해결된다.

```bash
sudo ln -sf $HOME/.colima/default/docker.sock /var/run/docker.sock
```