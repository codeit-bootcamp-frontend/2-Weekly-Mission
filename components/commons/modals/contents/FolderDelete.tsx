import styled from "styled-components";

function FolderDeleteModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <Layout>
      <div>폴더명</div>
    </Layout>
  );
}
const Layout = styled.div`
  padding-top: 0.8rem;
  padding-bottom: 2.4rem;

  & div {
    color: #9fa6b2;

    font-size: 1.4rem;
  }
`;

export default FolderDeleteModal;
