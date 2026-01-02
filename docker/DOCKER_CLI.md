# Docker CLI

### General

```bash
# help
docker --help

# 도커 정보
docker info
```

### Images

```bash
# 현재 디렉토리의 Dockerfile로 이미지 빌드
docker build -t <image_name> .

# 캐시 없이 완전히 새로 빌드
docker build -t <image_name> . –no-cache

# 이미지를 레지스트리에 업로드하거나 다운로드
docker push/pull <image_name>

# 로컬 이미지 목록
docker images

# 이미지 제거
docker rmi <image_name>

# 사용하지 않는 모든 이미지 제거
docker image prune
```

### Containers

```bash
# 이미지로 컨테이너를 만들고 실행
docker run --name <container_name> -d <image_name>

# 특정 호스트 포트 요청을 특정 컨테이너 포트로 전달
docker run -p <host_port>:<container_port> <image_name>

# 백그라운드에서 컨테이너 실행
docker run -d <image_name>

# 컨테이너 실행 또는 중지
docker start|stop <container_name> (or <container-id>)

# 중지된 컨테이너 제거
docker rm <container_name>

# 실행 중인 컨테이너의 쉘 열기
docker exec -it <container_name> sh

# 실시간 로그
docker logs -f <container_name>

# 실행 중인 컨테이너 상세 설정 확인
docker inspect <container_name> (or <container_id>)

# 현재 실행 중인 컨테이너 목록
docker ps

# 중지, 실행 중인 모든 컨테이너 목록
docker ps -a

# 리소스 사용 통계
docker container stats

# 사용 중인 디스크 용량 확인
docker system df

# 사용하지 않는 이미지, 컨테이너, 네트워크, 볼륨을 모두 삭제(서버 용량이 부족할 때 최후 수단)
docker system prune -a --volumes
```

### Compose

```bash
# 정의된 모든 서비스를 백그라운드에서 실행
docker-compose up -d

# 서비스 중지 및 네트워크/컨테이너 삭제
docker-compose down

# 현재 Compose로 관리되는 서비스 상태 확인
docker-compose ps

# 소스 코드가 변경되었을 때 이미지를 새로 빌드, 실행
docker-compose build --no-cache
```
