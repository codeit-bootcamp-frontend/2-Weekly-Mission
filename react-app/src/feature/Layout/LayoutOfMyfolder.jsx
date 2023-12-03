import { useGetUser } from "data-access/useGetUser";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

export const LayoutMyFolder = ({ children }) => {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;
  const True = true;
  return (
    <div>
      <NavigationBar profile={profile} onTop={True} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
