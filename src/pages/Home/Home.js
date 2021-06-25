import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskContainer from "../../components/Task/TaskContainer";
import { Layout } from "antd";
import { Route } from "react-router-dom";

const { Sider, Content } = Layout;

const Home = () => {
  return (
    <div className="home">
        <Content >
          <Layout >
            <Sider>
              <Sidebar />
            </Sider>
            <Content style={{ padding: '20px 30px', minHeight: '280px', marginLeft:100 }}>
              <Route path="/home/workspaces/:id" render={(rp) => <TaskContainer {...rp} />}/>
            </Content>
          </Layout>
        </Content>
    </div>
  );
};

export default Home;
