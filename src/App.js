import { Layout, Menu, Spin } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { PAGES } from "./constants";
import { fetchAllCurrencies } from "./store/asyncActions";

function App() {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.rates);

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
                {isLoading ? (
                    <Spin style={{ margin: "5rem auto" }} size="large" />
                ) : (
                    <Outlet />
                )}
            </Content>
        </Layout>
    );
}

export default App;
