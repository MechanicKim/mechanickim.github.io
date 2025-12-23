# JSX 런타임(Classic vs Automatic)

## Classic Runtime (레거시 방식)

과거 React가 오랫동안 사용해 온 방식. JSX를 만나면 단순히 React.createElement 호출로 변환한다.

- **동작 원리**: `<div>...</div>` → `React.createElement('div', ...)`
- **특징**:
    - JSX를 사용하는 모든 파일 상단에 `import React from 'react'`가 반드시 있어야 함.
        - 참고로 vite의 경우 esbuild.jsxInject 설정을 통해 자동 주입 가능
    - 사용하지 않는 React 변수를 임포트해야 하므로 번들 크기가 미세하게 증가할 수 있음
    - 변환 결과가 특정 라이브러리(React)의 메서드에 강하게 결합

## Automatic Runtime (현대적 방식)

React 17부터 도입. 컴파일러가 런타임을 자동으로 감지하고 임포트한다.

- **동작 원리**: `<div>...</div>` → `_jsx('div', ...)`
- **특징**:
    - **자동 임포트**: 개발자가 직접 런타임을 임포트할 필요가 없음. 컴파일러가 `jsx-runtime`에서 필요한 함수를 알아서 가져옴
    - **성능 최적화**: 정적 요소와 동적 요소를 구분하여 `jsx`와 `jsxs`를 선택적으로 호출하는 등 최적화 가능
    - **유연성**: jsxImportSource 설정만으로 다른 커스텀 런타임으로 쉽게 교체할 수 있음.

## 코드 변환 예시

#### 원본 코드

```typescript
const App = () => <div id="hi">Hello</div>;
```

#### Classic

```javascript
import React from 'react';
const App = () => React.createElement('div', { id: 'hi' }, 'Hello');
```

#### Automatic

```javascript
import { jsx as _jsx } from '@jsx-runtime/runtime/jsx-runtime';
const App = () => _jsx('div', { id: 'hi', children: 'Hello' });
```

## 커스텀 런타임

JSX는 React에 속한 확장 문법이 아니다. 독립적인 인터페이스로 가상 또는 실제 DOM 객체를 만드는 함수를 직접 구현하여 붙여서 사용할 수 있다.

문자열이나 DOM 객체보다 JSX로 컴포넌트를 만드는 방식의 생산성이 높기 때문에, 알아두면 분명 도움이 될 것이다.

여기서 자세한 내용은 다루지 않고 링크로 대체한다.

- [Classic](https://github.com/MechanicKim/jsx-runtime/blob/main/packages/classic-runtime/README.md)
- [Automatic](https://github.com/MechanicKim/jsx-runtime/blob/main/packages/runtime/README.md)