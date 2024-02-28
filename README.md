# To Do List

항해99 리액트 2차 과제

## 컴포넌트 구조

1. App.js : react-router-dom 라이브러리를 사용해 각 페이지를 라우팅
2. components
   - common : 공통으로 쓰는 컴포넌트 ActionButton, TextInput
   - features : 프로젝트 내 기능 단위로 묶은 컴포넌트 (현재 todo가 있음)
        1) AddTodo
        2) RenderTodos
        3) TodoCard
   - layout : Header 등 레이아웃에 필요한 컴포넌트
3. pages : 페이지 단위의 컴포넌트
   - Home : todo 생성 및 생성된 todo리스트를 보여주는 메인 페이지
   - TodoDetail : todo 하나의 자세한 정보를 보여주는 페이지
4. redux : 리덕스 modules가 포함
5. utils : 프로젝트에서 공통으로 사용되는 함수
