import "../styles/App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const BasicPage = () => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/service">Service</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/video">Code With Me</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/price">Price</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sign-in">Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default BasicPage;
