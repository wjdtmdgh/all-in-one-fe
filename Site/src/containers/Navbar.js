import "../styles/App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { getToken } from "../utils/LocalStorageUtils";
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <Link to="/board">Board</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/">About</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/video">Code With Me</Link>
            </Menu.Item>
            {getToken() ? (
              <Menu.Item>
                <Link to="/sign-in">Logout</Link>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Link to="/sign-in">Login</Link>
              </Menu.Item>
            )}
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
