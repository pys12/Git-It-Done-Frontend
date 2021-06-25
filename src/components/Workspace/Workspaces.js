import React, { useState, useEffect } from "react";
import WorkspaceForm from "./WorkspaceForm";
import Workspace from "./Workspace";
import './Workspace.css'

const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState("");

  const [showCreate, setShowCreate] = useState(false);

  const onToggle = () => {
    setShowCreate(!showCreate);
  };

  const URL = "https://git-it-done-backend.herokuapp.com/api/workspaces/";

  const getWorkspaces = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setWorkspaces(data);
  };

  const createWorkspace = async (workspaces) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workspaces),
    });
    getWorkspaces();
  };

  const updateWorkspace = async (workspace, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workspace),
    });
    getWorkspaces();
  };

  const deleteWorkspace = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getWorkspaces();
  };
  useEffect(() => getWorkspaces(), []);

  // const loaded = () => {
  //   const userId = JSON.parse(localStorage.getItem('user')).googleId
  //   return workspaces.map((workspace, index) => {
  //     return workspace.userId.map((workspaceId, index) => {
  //       console.log(` workid ${workspaceId}`)
  //       console.log(` userid ${userId}`)
  //       if (workspaceId === userId)
  //         return <Workspace key={index} workspace={workspace} updateWorkspace={updateWorkspace} deleteWorkspace={deleteWorkspace} />
  //     })
  //     })
  // }

  const loaded = () => {
    const userId = JSON.parse(localStorage.getItem("user")).googleId;
    const spaces = [];
    workspaces.forEach((workspace, index) => {
      if (workspace.userId.includes(userId)) {
        spaces.push(
          <Workspace
            key={index}
            index={index}
            workspace={workspace}
            updateWorkspace={updateWorkspace}
            deleteWorkspace={deleteWorkspace}
          />
        );
      }
    });
    return spaces;
  };

  const loading = () => {
    return <h1>loading now..</h1>;
  };

  return (
    <>
      <div className='create-btn' onClick={onToggle}>
        Create Workspaces
      </div>
      {showCreate && (
        <WorkspaceForm
          createWorkspace={createWorkspace}
          showCreate={showCreate}
          setShowCreate={setShowCreate}
        />
      )}
      {workspaces ? loaded() : loading()}
    </>
  );
};

export default Workspaces;
