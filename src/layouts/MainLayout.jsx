import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <section className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </section>
    </div>
  );
};
export default MainLayout;
