# JSX + Vanilla JS

React 대신 `Vanilla JS(TypeScript)`로 커스텀 런타임을 만들어 사용해보자.([저장소](https://github.com/MechanicKim/jsx-runtime))

## 예제 프로젝트

`pnpm`으로 vite 프로젝트를 만든다.

```bash
pnpm create vite
```

프로젝트 이름을 입력하고 `Vanilla`, `TypeScript`를 선택하자.

## [vite.config.ts](https://github.com/MechanicKim/jsx-runtime/blob/main/vite.config.ts)

파일이 없다면 새로 만들고 다음 내용을 추가한다.

```typescript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  esbuild: {
    jsxFactory: "toElement",
    jsxFragment: "Fragment",
    jsxInject: `import { toElement, Fragment } from '@jsx-runtime'`,
  },
  resolve: {
    alias: {
      "@jsx-runtime": resolve(__dirname, "src", "runtime", "jsx-runtime.ts"),
    },
  },
});
```

path 모듈을 가져오지 못하는 경우 `@types/node`를 설치하자.

```bash
pnpm i @types/node
```

## [tsconfig.json](https://github.com/MechanicKim/jsx-runtime/blob/main/tsconfig.json)

다음 속성을 추가한다.

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "toElement",
    "jsxFragmentFactory": "Fragment",
    "paths": {
      "@jsx-runtime": ["./src/runtime/jsx-runtime.ts"]
    },
  }
}
```

- **jsx**: .tsx 파일의 JSX 구문 출력 방식을 제어
- **jsxFactory**: JSX 요소를 컴파일 할 때 호출할 함수를 지정
- **jsxFragmentFactory**: JSX Fragment 팩토리 함수를 지정
- **paths**: alias 지정

## [jsx-runtime.ts](https://github.com/MechanicKim/jsx-runtime/blob/main/src/runtime/jsx-runtime.ts)

JSX 요소 컴파일을 위해 호출할 함수를 다음과 같이 정의했다.

```typescript
import type { Child } from "./types";
import { applyProps } from "./props";
import { appendChildren } from "./children";

export { Fragment } from "./Fragment";

export function toElement(
  tag: string | ((props: any) => JSX.Element),
  props: Record<string, any> | null,
  ...children: Child[]
): JSX.Element {
  const normalizedProps = props || {};

  // 함수형 컴포넌트 처리
  if (typeof tag === "function") {
    return tag({ ...normalizedProps, children });
  }

  const element = document.createElement(tag); // 요소 생성
  applyProps(element, normalizedProps); // 속성 적용
  appendChildren(element, children); // 자식 요소 추가
  return element;
}
```

## [Fragment.ts](https://github.com/MechanicKim/jsx-runtime/blob/main/src/runtime/Fragment.ts)

JSX Fragment 팩토리 함수를 다음과 같이 정의했다.

```typescript
import type { Child } from "./types";
import { appendChildren } from "./children";

export function Fragment({
  children,
}: {
  children: Child[];
}): DocumentFragment {
  const fragment = document.createDocumentFragment();
  appendChildren(fragment, children);

  return fragment;
}
```

