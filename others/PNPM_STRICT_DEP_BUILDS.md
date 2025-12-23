# strict-dep-builds 설정을 통한 보안 강화

pnpm을 사용하는 프로젝트에서 승인되지 않은 패키지의 스크립트 실행을 차단하여 **공급망 공격(Supply Chain Attack)**을 방지하기 위한 운영 가이드입니다.

## 1. 개요

악성 패키지는 설치 단계의 `postinstall`, `preinstall` 스크립트를 통해 시스템의 환경 변수를 탈취하거나 악성 코드를 다운로드합니다. `strict-dep-builds`를 활성화하면 **명시적으로 허용된 패키지 외에는 어떤 스크립트도 실행되지 않도록 강제**합니다.

## 2. 보안 설정 적용 (Step-by-Step)

### 단계 1: 프로젝트 설정 활성화

루트 디렉토리의 `.npmrc` 파일에 다음 설정을 추가합니다.

```
# 승인되지 않은 빌드 스크립트 발견 시 설치 프로세스 중단
strict-dep-builds=true
```

### 단계 2: 필수 패키지 승인 (Whitelist)

네이티브 모듈(예: `sharp`, `esbuild`, `canvas`)처럼 빌드 스크립트가 반드시 필요한 패키지들을 확인하고 승인합니다.

**방법 A: 터미널 명령어로 추가**

```bash
pnpm approve-builds <package-name>
```

**방법 B: `package.json`에 직접 추가**

`package.json` 파일의 `pnpm.onlyBuiltDependencies` 필드에 리스트를 관리합니다.

```
{
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild",
      "sharp",
      "@parcel/watcher"
    ]
  }
}
```

### 단계 3: 의존성 재설치 및 검증

설정을 마친 후 기존 캐시를 무시하고 정상적으로 설치되는지 확인합니다.

```bash
pnpm install
```

만약 허용되지 않은 패키지가 빌드를 시도하면 다음과 같은 에러가 발생하며 중단됩니다:

```bash
ERR_PNPM_IGNORED_BUILDS: The following packages wanted to run a build script but were not in "onlyBuiltDependencies"...
```

## 3. 운영 정책 (Best Practices)

1. **신규 패키지 추가 시 원칙**: 새로운 패키지를 추가할 때 빌드 스크립트 실행이 필요하다면, 해당 패키지의 소스코드를 가볍게 검토한 후 `approve-builds`를 실행합니다.
2. **CI/CD 파이프라인**: CI 환경에서는 반드시 이 옵션이 켜져 있어야 합니다. 승인되지 않은 의존성이 포함된 PR은 빌드 단계에서 실패하도록 설정하세요.
3. **정기 점검**: `onlyBuiltDependencies` 목록을 정기적으로 검토하여 더 이상 사용하지 않는 패키지는 제거합니다.

## 4. 트러블슈팅

- **설치가 실패해요**: 에러 메시지에 표시된 패키지 이름을 확인하세요. 신뢰할 수 있는 패키지라면 `pnpm approve-builds`를 통해 목록에 추가하면 해결됩니다.
- **성능 영향**: 이 설정은 보안을 강화할 뿐, 런타임 성능에는 영향을 주지 않습니다. 오히려 불필요한 스크립트 실행을 막아 설치 속도가 빨라질 수 있습니다.

## 5. 참고

- [pnpm 10.0.0 Blocks Lifecycle Scripts by Default](https://socket.dev/blog/pnpm-10-0-0-blocks-lifecycle-scripts-by-default)

