# MongoDB

### 도커 이미지 실행 및 테스트

```bash
# 이미지 다운로드, 컨테이너 실행, 접근
docker run --name my-mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  -d mongo
docker exec -it my-mongodb mongosh -u admin -p password

# 테스트
use testdb
db.users.insertOne({ name: "Gemini", role: "AI" })
db.users.find()
```