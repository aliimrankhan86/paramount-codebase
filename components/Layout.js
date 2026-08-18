import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
