# To Do List

항해99 리액트 1차 과제

## 컴포넌트 구조

App.js : 메인 페이지

App.css : 스타일 코드

components
1. common (범용으로 사용되는 요소)
   - ActionButton : 버튼
   - TextInput : 인풋
2. features (특정 기능을 구성하는 컴포넌트)
   - Todos : todo리스트를 받아, todo 배열을 리턴하는 컴포넌트
   - Todo : 각 todo 카드 한 개에 해당하는 컴포넌트

utils
- isNonEmptyText : 텍스트가 공백인지를 판별하는 함수

## 피드백

1. completeTodo나 deleteTodo에서 e.currentTarget.id를 사용할 수도 있고, todo의 id를 매개변수로 바로 넣어줄 수도 있을 것 같아요.

2. 네이밍과 관련해서 리엑트 네이밍 컨벤션을 찾아보고 적용해보면 좋을 것 같아요. https://react-ko.dev/learn/responding-to-events#adding-event-handlers 등을 참고해보세요. 지금도 함수가 하는일이 잘 드러나지만 컨벤션을 맞춰주면 어떤 함수인지 더 명확할 것 같아요.

3. todo와 관련된 모든 로직을 App 컴포넌트 안에서 처리하고 있는데, 커스텀 훅을 만들어 로직과 ui를 분리해주는 방법도 생각해볼 수 있을 것 같아요. 또 useCallback이나 useMemo을 사용해서 함수나 변수가 매번 새로 생성되지 않도록 할 수 있을 것 같아요.

4. App 컴포넌트가 조금 길어서 가독성이 조금 떨어지는 것 같아요. 조금 더 컴포넌트를 분리해보고 비교해보는 것도 좋을 것 같네요!
