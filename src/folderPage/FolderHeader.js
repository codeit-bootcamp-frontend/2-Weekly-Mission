import LinkImg from "../img/link.png";
import { Button, Container, Form, Input, InputCenter } from "./HearderCss";

function FolderHeader() {
  return (
    <Container>
      <Form>
        <InputCenter>
          <img src={LinkImg} alt="링크이미지" />
          <Input placeholder="링크를 추가해 보슈"></Input>
        </InputCenter>
        <Button>추가하기</Button>
      </Form>
    </Container>
  );
}

export default FolderHeader;
