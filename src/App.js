import { Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { PAGES } from "./constants";
import { fetchAllCurrencies } from "./store/asyncActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCurrencies());
    }, [dispatch]);

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
            <Content style={{ display: "flex", padding: "5rem" }}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default App;
