# React 개발 환경 설치
### 1. Node.js 설치
- https://nodejs.org/ko/ 에서 LTS 버전 설치
- 설명안읽고 설치 디렉토리만 원하는 위치로하고 다 Next & Install & Finish
### 2. Terminal에서 Create React App 툴체인 설치
- 영상처럼 VS Code에서 Terminal을 실행해서 수행하는 걸 추천
- **단, root부터 프로젝트를 다운로드할 디렉토리까지 대문자와 특문을 넣지 않아야함**
```console
// 원하는 디렉토리에서. ex) /c/web
$ git clone https://github.com/joonb14/weddinginvitation.git
$ cd weddinginvitation
$ npm install
$ npm start
```
### 3. Github Page에 React App 배포
- 소유자 @joonb14 가 수행
```console
$ npm run deploy
```
- Referecne: [[React] 프로젝트 GitHub Pages 배포하기](https://velog.io/@byjihye/react-github-pages)
# Git 관리 전략
- 작업은 아래 Naming 규약에 맞는 branch를 생성해서 
- develop 브랜치에다 merge request!
### Branch Name
- feat/[기능개발관련키워드]
- bugfix/[버그관련키워드]
- refactor/[대상기능이름]
- ex) `refactor/scrollhandler`
### Commit Name
- [feat] : 기능 개발 관련
- [bugfix] : 버그 관련
- [refactor] : refactoring 관련
- ex) `[feat] 스크롤할때 svg 이미지를 그리는 기능 개발`
# Coding Convention
```javascript
// class 이름은 PascalCase
class Test {
  // 멤버함수, 멤버변수 이름은 camelCase
}

// function 이름은 PascalCase, parameter 이름은 prop으로 고정
function App(prop){
  // 변수이름은 camelCase
  variableName = ...;
}
```
