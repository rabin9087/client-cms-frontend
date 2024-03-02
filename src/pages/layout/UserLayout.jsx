import Header from "./Header";
import Footer from "./Footer";

const UserLayout = ({ children, title, products, setProducts }) => {
  return (
    <div className="min-h-screen">
      <Header products={products} setProducts={setProducts} />
      <main className="min-h-[73vh]">
        <h1>{title}</h1>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
