import { FC } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PublicLayout: FC = (props) => {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
};

export default PublicLayout;
