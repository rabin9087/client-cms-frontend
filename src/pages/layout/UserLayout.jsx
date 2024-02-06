import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const UserLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-full">
          <div>
            <Header />
          </div>
          <div>
            <main>
              <div>
                <h1>{title}</h1>
                {children}
              </div>
            </main>
          </div>
          <div className="fixed poition-botton block ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
