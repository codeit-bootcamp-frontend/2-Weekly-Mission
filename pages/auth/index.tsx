import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export async function authPageServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  const accessToken = cookies.accessToken;

  if (accessToken) {
    return {
      redirect: {
        destination: "/folder",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
