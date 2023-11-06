<img src='./img/README.md/codeit.png'>
<br>
<br>
<br>

<h1 style="text-align: center;">Codeit Weekly Mission</h1>
<p style="text-align: center;"><b>Front-end Developer Course</b></p>
<p style="text-align: center;">Codeit 스프린트과정을 하며 한 주 한 주 위클리미션을 기록하는  문서입니다.<br> 해당 문서는 <b>각 파일들의 설명과 포인트</b> , <b>해당 문서의 주차별 위치</b> , <b>스스로 생각하는 개선점</b> 등이 쓰여있습니다. </p>
<br>

## 1. 각 파일들의 설명과 포인트

### 🚀 Html Part

<hr>

- 👀 index.html
  > 메인이 되는 랜딩페이지 입니다. 현재시점( **Week3** )으로 이미지들의 크기단위가 rem=>px 고정단위로 변경 하였으며 인라인 스타일을 제외하고 class로 재구현하였습니다.
- 👀 signin.html

  > 로그인 페이지이며 마찬가지로 이미지들의 크기단위를 고정단위(px)로 변경하였습니다. 다만 인라인스타일쪽에서의 고민이 있었는데 밑의 `' 스스로 생각하는 개선점 '` 에서 서술하겠습니다.

- 👀 singup.html
  > 로그인페이지와 변경내용이 동일합니다.

### 🚀 Css Part

<hr>

- 👀 file:main

  > index.html 의 css파일을 모두 `' main '` 디렉토리에 종합하였습니다.

- 👀 file:signinup

  > **' signin.html '** && **' signup.html '** 의 스타일시트를 담당하는 **signinup.css** 또한 디렉토리에 담아두었습니다. css파일이 하나이긴하나 가독성을 생각하여 디렉토리를 생성하여 보다 깔끔한 구조를 만들었습니다.

- 👀 global.css

  > **Reset** / **html,body** / **:root** 와 같은 전역에서 사용하는 `style`들을 담고있습니다. 디렉토리로 구조화를 하지않은 이뉴는 다른 css들과 달리 전역에서 사용될 css파일이라 바로 보이게 배치해두었습니다.

- 👀 file:mediaQuery
  > 각 페이지의 반응형 `mediaQuery.css` 들을 담고있는 파일입니다.

### 🚀 Extra Point

<hr>

- 👀 img , svg 디렉토리 추가설명  
  => 이전과 동일하나 index.html에 들어갈 `img,svg` 파일들 또한 디렉토리를 새로 만들었습니다.

- 👀 FOUT (폰트 깜빡임)문제 해결  
  => 해결을 위해 찾아보던도중 해당 폰트 제작자의 깃 홈페이지에서 힌트를 발견했습니다.
  페이지에 포함된 글자만 다운로드하며 가변적인 weight 속성과 함께 기존 폰트보다 현저히 적은용량으로 사용 할 수 있는 폰트를 다시 적용하였습니다.
  _참고 ) https://github.com/orioncactus/pretendard_

## 2. 각 주차별 체크박스

> ✍️ 각 주차별로 체크의 위치가 변경됩니다. 해당 체크가 있는곳이 지금 읽고계시는 read.md의 내용이라고 보시면 되겠습니다.

- [ ] Week 1
- [ ] Week 2
- [x] Week 3
- [ ] Week 4
- [ ] Week 5
- [ ] Week 6
- [ ] Week 7
- [ ] Week 8
- [ ] Week 9
- [ ] Week 10
- [ ] Week 11
- [ ] Week 12

<<<<<<< HEAD

## 3. 스스로 생각하는 개선점 및 질문

혼잣말 느낌으로 써서 난해할수있습니다...😭

- 멘토님이 주신 코드리뷰 및 반응형을 만들며 미디어쿼리에서 스스로 코드 수정을 해보며 각각의 아이템들에는 inline-style이 아닌 클래스 혹은 아이디를 만들어주는게 유지보수가 하기가 훨~~~씬 편하다고 느꼈습니다... 다만 `signin&&up.html`와 같이 반응형에서도 동일한 간격을 가지고있으며 class가 추가 될 시 별도의 스타일이 추가로 있는게아닌 오직 margin 값 한 줄만 조정한다면 가독성을 생각할때 inline-style이 조금 더 깔끔하지 않을까? 라는 생각을 가지기도 하여 일단 그대로 유지하였습니다. 만약 class 나 id 를 생성시 여러가지의 스타일이 가지고 있는게아닌 오직 한가지의 속성만 가지고있는 class 와 id 도 유지보수쪽에서는 역시 inline-style보다 우선되는부분일까요 ?

2. **3주차 위클리미션 심화부분에서 벽을느끼다..!😭😭😭**

- 이번 week3 위클리미션 심화과정 부분중에 index.html에서 메인의 섹션에 `h2 => p => img` 순서로 배치되는 레이아웃을 `h2 => img => p` 로 바꾸는 미션이 있었습니다... 하필 flex로 전체적인 레이아웃구조를 만들어서 h2,p 를 div로 감싸고 img를 단독으로 분리시켜 두개의 아이템 컨테이너를 배치하는 방법으로 사용하여 h2,p 를 감싸는 컨테이너가 order나 grid를 사용하여도 한가지의 아이템으로 분류되는것입니다... 다방면으로 해결책을 찾아봤으나(반응형에서 레이아웃 grid로 변경해보기 , margin값 마이너스로 주기, 포지션사용) 전체적인 레이아웃자체가 무너지거나 h2,p의 div박스를 하나의 아이템으로 인식 하더라구요 ... html,css,js 까진 무리없이 나가고 싶었으나 이부분에서 좀 흔들렸던것 같습니다 결국 완수를 하지 못하였는데 혹시나 다른 방법이 있을까요 ? 다방면으로 찾아보긴 했으나 결국 grid로 리팩토링 혹은 float으로 리팩토링하는 방법이더라구요 지금의 레이아웃을 유지한체 해당 심화미션을 구현할수있는 방법이 있는지 궁금합니다.

3. **class의 단순화**

- 주관적인 생각일수도있으나 이번 미디어쿼리로 반응형을 구현하며 든 생각은 ... 코드가 너무 더럽다 ! 입니다. 전체적인 보이는 결과물만 보면 괜찮겠으나 미디어쿼리에서 특히 index.html 에서 tablet 사이즈를 구현할때 바꿔야 할 포인트도 너무 많고 그냥 너무 더러워 보였습니다... 이걸 되돌려서 다시 리팩토링 해보자! 하니 막막하고 잘 건드리지도 못하겠더라고요 좀 깨달았던 교훈이 처음부터 " 결과가 보이니 됐다! " 가 아닌 이걸 추후에 내가 보수를 하고 유지를 할 수 있을까... 이건 좋은 코드일까... 를 생각해야겠다고 느꼈습니다.

4. **commit name tag중 chore에 관하여**

- 올바른 커밋규칙을 지켜서 써보려고 노력을해보았는데 정보를 찾다보니 ' 기능개발 , 문서수정 외 수정 : chore ' 를 보고 처음에 chore을 남발해버렸습니다... 근데 추후 다시 찾아보니 gitignore등 패키지 매니저등을 수정할때 쓰는 이름이더라구요 ...!! 그래서 부랴부랴 수정해보려고 찾아보니 git rebase -i Head~~표시할숫자 를 이용하여 바꾸는 법이있어 시도해보니 바꾼 시점으로 다 리베이스 되어버리더라구요 ㅎㅎ ... 그래서 아직 수정을 못하였는데 보시면 처음에 chore와 feat fix만 사용하다가 갑자기 chore의 사용을 멈추고 style와 docs등을 사용한 이력이 있습니다..! 추후 다시 이전커밋이름 수정방법을 찾아 수정하겠지만 참고하시면 좋을것 같습니다 !

<hr>
<p style="text-align: right;"><b>2023-11-04</b></p>
=======
## 3. 스스로 생각하는 개선점

혼잣말 느낌으로 써서 난해할수있습니다...😭
