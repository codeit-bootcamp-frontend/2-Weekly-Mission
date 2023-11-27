<img src='public/img/codeit.png'>
<br>
<br>
<br>

<div align="center">
  <h1>Codeit Weekly Mission</h1>
  <p><b>Front-end Developer Course</b></p>
  <p>Codeit 스프린트과정을 하며 한 주 한 주 위클리미션을 기록하는  문서입니다.<br> 해당 문서는 <b>각 파일들의 설명과 포인트</b> , <b>해당 문서의 주차별 위치</b> , <b>스스로 생각하는 개선점</b> 등이 쓰여있습니다. </p>
  <br>
</div>

## 1-1. 디렉토리 & 파일설명

- 이미지 , svg 파일은 public 디렉토리에 위치하였습니다. 경로를 길게 작성할필요없이 public폴더에 위치하면 바로 접근 할 수 있는 장점이 있다고 ... 다른사람의 tStory에서 그러더라구요..! (가독성 좋게 만드려고 막 이것저것 찾아봤습니다 ㅎㅎ)

- 모든 컴포넌트는 디렉토리별로 분류하였으며 글로벌하게 쓰이는 App.js index.js GlobalStyles.js 는 src폴더를 열면 바로 나오게 위치하였습니다. (이번 미션은 shared 페이지를 구현하는 미션이라 shared 디렉토리도 따로 만들었으며 해당 디렉토리 내부에서 영역별 새로운 디렉토리를 만들어 작업하였습니다..)

- 각 컴포넌트 디렉토리에는 CSS파일도 같이 위치하여있으며 해당 CSS파일 최하단에는 미디어쿼리 구현부분도 포함되어있습니다. 본래 미디어쿼리 디렉토리를 새로 만들까 고민도 하였으나 가독성을 너무 해치고 쓸데없는것같아 안 만들었습니다.

## 1-2. 기능구현 목록

- 우측 상단에 codeit@codeit.com 은 코드잇서버에서 GET 하여 노출되고 있는것이며 만약 유저 데이터가 없다면 LOGIN 버튼이 노출이 됩니다. 또한 유저데이터가 없을시 Nav-bar 하단의 Section 도 노출이 되지않습니다. 여기서 유저 데이터의 존재유무는 userData?.id 를 사용하여 서버의 유저 객체에 id가 존재하나? 로 구분하였습니다. userData?.id[2]로 존재하지않는 id에 접근시 Section이 사라지며 Button이 노출되는것을 확인 가능합니다.

  > 위의 기능은 수정되었습니다 App.js 컴포넌트에서 userData의 정보를 받아오게 만들었으며 props로 navbar.js에 전달해줍니다 만약 Userdata의 id가 존재하지 않을시에는 똑같이 로그인버튼을 보여주며 Main.js 또한 유저의 정보이기때문에 안 보입니다.

- 서버데이터에 접근시 왠만하면 옵셔널 체이닝을 사용하여 서버데이터가 없으면 오류가아닌 Undefined가 반환되게 만들었습니다.

- Main의 Card는 Hover시 이미지가 커지는 애니메이션을 가지고 있으며 각 Card또한 서버에서 가져온 데이터들입니다. 그리고 미션에는 없었지만 별도로 최신순 정렬이 되게 만들었습니다. 원래 Button을 만들어 최신순 , 이름순 정렬을 하고 싶었으나 다음 미션때 다 갈아엎을까봐
  그냥 서버에서 처음부터 최신순 정렬로 불러오게 만들었습니다.

- 별도로 헤더의 Nav-bar에서 사용자 이메일 부분이랑 그 밑 섹션에 개발자/★즐겨찾기 부분에 a태그로 링크를 넣고싶었지만 미션에서 별 다른 링크를 제공하지않아서 그냥 내비뒀습니다. 코드 보실때 참고하시면 될 것 같습니다.

- 추가 +) 로딩기능 재밌을것 같아서 구현해봤습니다.

## 2. 각 주차별 체크박스

> ✍️ 각 주차별로 체크의 위치가 변경됩니다. 해당 체크가 있는곳이 지금 읽고계시는 read.md의 내용이라고 보시면 되겠습니다.

- [ ] Week 1
- [ ] Week 2
- [ ] Week 3
- [ ] Week 4
- [ ] Week 5
- [x] Week 6
- [ ] Week 7
- [ ] Week 8
- [ ] Week 9
- [ ] Week 10
- [ ] Week 11
- [ ] Week 12

## 3. 스스로 생각하는 개선점 및 질문

### 1. 과연 이번미션에 Props를 사용할 구간이 있었는가?

- 코드를 다 작성하고 문뜩 생각하여보니 Props를 한번도 사용을 안 하였습니다... 멘토님이 보시기엔 재가 작성한 코드에서 이 부분에서 Props 를 사용했으면 더 좋왔을거다 하는 부분이 있으셨나요 ? 아직 React에대한 저의 이해가 부족한것일수 있겠지만 주관적으로는 이번 미션에서 Props를 사용할 구간을 찾지 못하였습니다.
- Props 를 부모컴포넌트가 자식컴포넌트의 속성을 조작할수있다. 라고만 일단 이해를 하고 있는데 솔직히 어디에 써야할지 잘 감이 안 옵니다. 이럴때 이럴때 사용 할 수 있다는 예시가 있을까요 ?

> 수정 ) App.js 에서 props를 사용하였습니다 ! 이번 페이지는 결국 유저의 로그인 데이터를 불러오는것에 따라 정보가 표시되고 안 표시되고를 구현하는게 중요하다 생각하여 App.js 에서 서버에서 유저데이터를 Get하는것을 다루고 존재여부에따라 다른 컴포넌트가 표시될지 안 표시될지를 만들었습니다 !

### 2. AI에 의존하다

- 모든 코드를 GPT에게 맞기지는 않았지만 예를들어 main/Main.js 에서 현재 날짜와 비교하여 몇 일이 지났는지 확인후 그에 맞는 String를 Return 해주는 코드를 작성할때... 부끄럽지만 그냥 GPT한테 떠넘기게 되어버리더라구요 ... 물론 혼자 구현 할 수도 있었겠지만 솔직히 생각으로는 이런 복잡한게 아닌 반복적인 조건문 코드노가다는 GPT한테 주는게 낫지않나 ..? 그런 생각이 들었습니다. 멘토님은 공부중인 상황에서의 GPT의 사용을 어떻게 생각하시나요?
- 위에 더하여 말하면 저는 주로 복잡하지않은 로직에서 반복적인 타이핑을 많이 해야할때 또는 코드를 다 작성해놓고 이 코드가 과연 잘 작동하나 디버깅할때 이정도 사용합니다. 근데 솔직히 이렇게하면 실력이 늘까? 그런생각도 드네요

<hr>
<p style="text-align: right;"><b>2023-11-26</b></p>
