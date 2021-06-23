import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskContainer from "../../components/Task/TaskContainer";
import "./Home.css";
import { Layout } from "antd";
import { Route } from "react-router-dom";

const Home = () => {
  const { Sider } = Layout;
  return (
    <div className="home">
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Route
          path="/home/workspaces/:id"
          render={(rp) => <TaskContainer {...rp} />}
        />
      </Layout>
    </div>
  );
};

export default Home;
