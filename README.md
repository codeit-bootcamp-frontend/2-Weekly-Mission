## 요구사항

### 기본

- [ ] React 프로젝트에서 진행했던 작업물을 Next.js 프로젝트에 맞게 변경 및 이전해 주세요.
- [x] 팀내 2 ~ 3명이 짝을 지어 페어프로그래밍으로 로그인, 회원가입 페이지에 사용하는 Input 컴포넌트를 만들어 주세요.
  - [x] Input 컴포넌트에 값이 없는 경우 placeholder값이 보입니다.
  - [x] Input 컴포넌트에 focus in 하면 파랑색 테두리가 보입니다.
  - [x] Input 컴포넌트에 눈 모양 아이콘을 누르면 비밀번호 가리기/보기 기능이 토글 됩니다.
  - [x] Input 컴포넌트에 값이 에러케이스일 경우 빨강색 테두리와 에러 메세지가 보입니다.
  - [x] Input 컴포넌트에서 focus out 하면 실행할 함수를 설정할 수 있습니다.
- [ ] Vercel로 Github 레포지토리를 연결해 Next.js 프로젝트를 배포해 주세요.
- [ ] next/link의 Link를 활용해 Linkbrary 아이콘을 클릭하면 ‘/’ 페이지로 이동하게 해주세요.

## 주요 변경사항

- SignInPage, SignUpPage 추가
- Input 컴포넌트 분리

## 스크린샷

![image](/screenshots/signup.png)
![image](/screenshots/signupError1.png)
![image](/screenshots/signupError2.png)
![image](/screenshots/signupError3.png)

## 멘토에게

- 비동기 때문인지 간간히 checkRequired의 반영이 빠릿빠릿하지 않아 조금 불만입니다.
- part1 당시 사용했던 코드를 그대로 가져와 React로 마이그레이션 했습니다. (SignUpPage, SignInPage)
- 해당 페이지에 대해 아직 api 연결은 되지 않았습니다.
