# To Do List

항해99 리액트 1차 과제

## 컴포넌트 구조

App.js : 메인 페이지

App.css : 스타일 코드

components
    common (범용으로 사용되는 요소)
        - ActionButton : 버튼
        - TextInput : 인풋
    features (특정 기능을 구성하는 컴포넌트)
        - Todos : todo리스트를 받아, todo 배열을 리턴하는 컴포넌트
        - Todo : 각 todo 카드 한 개에 해당하는 컴포넌트

utils
    - isNonEmptyText : 텍스트가 공백인지를 판별하는 함수
