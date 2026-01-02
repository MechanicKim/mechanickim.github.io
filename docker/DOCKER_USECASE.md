# 도커 실습

### 1. 컨테이너 생성, 실행
```bash
docker run --name apa000 -d httpd
docker ps
```

### 2. 통신 가능한 컨테이너 생성
```bash
docker run --name apa001 -d -p 8080:80 httpd
docker ps
```

### 3. 컨테이너 여러 개 실행
```bash
docker run --name apa002 -d -p 8081:80 nginx
docker run --name mysql000 -dit -e MYSQL_ROOT_PASSWORD=myrootpass mysql
docker ps
```
- `-dit`: 백그라운드 모드 실행, 표준 입력을 통해 컨테이너 내부 파일 시스템 조작
    - `-d`: 백그라운드 모드 실행
    - `-i`: 표준 입력 유지
    - `-t`: 터미널 할당

### 4. 컨테이너, 이미지 삭제
```bash
docker ps -a
docker rm apa000 apa001 apa002 mysql000
docker image ls
docker rmi httpd nginx mysql
```
- 이름이 같은 경우 이름에 버전을 붙이거나(`mysql:8`), 아이디로 삭제한다.

### 5. 워드프레스, MySQL 컨테이너 생성과 연동
```bash
# 네트워크 생성
docker network create wordpress000net
# MySQL 컨테이너 생성 및 실행
docker run --name mysql000 -dit --net=wordpress000net -e MYSQL_ROOT_PASSWORD=myrootpass -e MYSQL_DATABASE=wordpress000db -e MYSQL_USER=wordpress000kun -e MYSQL_PASSWORD=wkunpass mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --default-authentication-plugin=mysql_native_password
# 워드프레스 컨테이너 생성 및 실행
docker run --name wordpress000 -dit --net=wordpress000net -p 8085:80 -e WORDPRESS_DB_HOST=mysql000 -e WORDPRESS_DB_NAME=wordpress000db -e WORDPRESS_DB_USER=wordpress000kun -e WORDPRESS_DB_PASSWORD=wkunpass wordpress
# 컨테이너 상태 확인
docker ps
# 웹 브라우저를 통해 워드프레스 접근확인 후 정리
docker stop wordpress000 mysql000
docker rm wordpress000 mysql000
docker rmi wordpress mysql
docker network rm wordpress000net
```

### 6. 컨테이너와 호스트 간에 파일 복사
```bash
docker run --name apa000 -d -p 8089:80 httpd
docker cp ./index.html apa000:/usr/local/apache2/htdocs/
mv ./index.html ./index2.html
docker cp apa000:/usr/local/apache2/htdocs/index.html .
docker stop apa000
docker rm apa000
```

### 7. 바인드 마운트
```bash
mkdir apa_folder
# 도커 컨테이너 실행 후 브라우저에서 확인
docker run --name apa000 -d -p 8090:80 -v ./apa_folder:/usr/local/apache2/htdocs httpd
# 파일 이동 후 브라우저에서 다시 확인
mv ./index.html ./apa_folder/index.html
docker stop apa000
docker rm apa000
```
- **스토리지 영역**: 디렉토리 또는 파일
- **물리적 위치**: 어디든지 가능
- **마운트 절차**: 기존 파일 또는 폴더를 마운트
- **내용 편집**: 일반적인 파일과 같이
- **백업**: 일반적인 파일과 같이

### 8. 볼륨 마운트
```bash
# 볼륨 생성(/var/lib/docker/volumes/apa000vol/_data)
docker volume create apa000vol
docker run --name apa000 -d -p 8090:80 -v apa000vol:/usr/local/apache2/htdocs httpd
# 볼륨 상세 정보 확인
docker volume inspect apa000vol
docker container inspect apa000
docker stop apa000
docker rm apa000
docker rmi httpd
```
- **스토리지 영역**: 볼륨
- **물리적 위치**: 도커 엔진의 관리 영역
- **마운트 절차**: 볼륨을 생성한 후 마운트
- **내용 편집**: 도커 컨테이너를 통해서
- **백업**: 절차가 복잡함

## 9. 볼륨 백업
```bash
# /source에 마운트된 볼륨의 내용을 압축하여 /target에 저장
docker run --rm -v apa000vol:/source -v ./backup:/target busybox tar czvf /target/backup_apa.tar.gz -C /source .
```
- `-rm`: 컨테이너 실행 후 바로 삭제
- `-v apa000vol:/source`: 볼륨 마운트
- `./backup:/target`: 바인드 마운트
- `busybox`: 다양한 리눅스 명령어를 모아놓은 패키지
- `tar czvf /target/backup_apa.tar.gz -C /source .`: /source 위치로 이동하여 현재 위치의 볼륨 내용을 압축, /target에 저장

## 10. 백업 복원
```bash
# /target에 저장된 압축 파일을 풀어 /source에 복원
docker run --rm -v apa000vol:/source -v ./backup:/target busybox tar xzvf /target/backup_apa.tar.gz -C /source
```
- `tar xzvf /target/backup_apa.tar.gz -C /source`: /target에 있는 압축 파일을 풀어 /source에 복원

## 11. commit 커맨드로 컨테이너를 이미지로 변환
```bash
docker run --name apa000 -d -p 8090:80 httpd
# apa000 컨테이너로 새로운 이미지 생성
docker commit apa000 apa000cp
docker image ls
```

## 12. Dockerfile 스크립트로 이미지 만들기
index.html 파일을 미리 준비, 같은 위치에 Dockerfile을 만든다.
```Dockerfile
FROM httpd
COPY index.html /usr/local/apache2/htdocs
```
파일 작성 후 이미지를 빌드한다.
```bash
docker build -t apa000cp2 .
docker image ls
docker rmi apa000cp apa000cp2
```