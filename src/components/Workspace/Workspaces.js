import React,{useState,useEffect} from 'react'
import WorkspaceForm from './WorkspaceForm'
import Workspace from './Workspace'
const Workspaces = () => {
    const [workspaces, setWorkspaces] = useState(null)
    
    const URL = "http://localhost:5000/api/workspaces/";
    
    
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
          body: JSON.stringify(workspaces)
        }).then(console.log(workspaces));

        getWorkspaces();
    };
    
    const updateWorkspace= async (workspace, id) => {
      
        await fetch(URL + id, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workspace),
        })
        getWorkspaces();

      }
    
    const deleteWorkspace = async id => {
       
        await fetch(URL + id, {
          method: "delete",
        })
        getWorkspaces();

    }
    useEffect(() => getWorkspaces(), []);
    
    const loaded = () => {
        return workspaces.map((workspace, index) => (
            <Workspace key={index} workspaces={workspaces} workspace={workspace} updateWorkspace={updateWorkspace} deleteWorkspace={deleteWorkspace}  />
        ))
    }
    const loading = () => {
        return <h1>loading now..</h1>
    }
    
    return (
        <div>
            <div>Create Workspace</div>
            {/* add hover effects here */}
           <WorkspaceForm createWorkspace={createWorkspace}/>
            {workspaces ? loaded() : loading()}
            
        </div>
    )
}

export default Workspaces