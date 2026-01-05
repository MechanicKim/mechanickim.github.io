# Kubernetes(with Colima)

Colima는 내부적으로 k3s를 사용한다. kubectl이 없다면 설치하도록 하자.

```bash
brew install kubectl
```

## 쿠버네티스 활성화

도커 전용으로 colima를 사용 중이라면 종료하고 쿠버네티스를 사용하도록 다시 실행한다.

```bash
colima stop
colima start --kubernetes
```

도커 전용으로 사용할 때보다 메모리, CPU 리소스를 많이 소모한다. 기존 사양이 낮다면 올려서 실행하자.

``` bash
colima start --cpu 4 --memory 8 --kubernetes
```

