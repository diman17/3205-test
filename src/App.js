import { Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { Link, Outlet } from "react-router-dom";

const PAGES = [
    {
        key: "converter",
        label: <Link to="/">Converter</Link>,
    },
    {
        key: "exchange-rates",
        label: <Link to="/exchange-rates">Exchange Rates</Link>,
    },
];

function App() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu
                    items={PAGES}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys="converter"
                />
            </Header>
            <Content style={{ padding: "5rem" }}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default App;
