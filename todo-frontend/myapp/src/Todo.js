import { useEffect, useState } from "react"

export default function Todo() {

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("") 
    const [todos,setTodos]=useState([])
    const [error,setError]=useState("")
    const [message,setMessage]=useState("")
    const [editId,setEditId]=useState(-1)
    const [editTitle,setEditTitle]=useState("")
    const [editDescription,setEditDescription]=useState("")
    const apiUrl="http://localhost:8000"

    const handleSubmit=()=>{
        setError("")
        if(title.trim() !== "" && description.trim() !== ""){
            fetch(apiUrl+"/todos",{
                method:"post",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({title,description})
            }).then((res)=>{
                if(res.ok){
                    setTodos([...todos,{title,description}])
                    setMessage("Item added successfully")
                    setTimeout(()=>{
                        setMessage("")
                    },3000)
                }else{
                    setError("Failed to add Item")
                }
            
            }).catch(()=>{
                setError("Failed to add Item")
            })


        }
    }

    useEffect(()=>{
        getItems()
    },[])


    const getItems=()=>{
        fetch(apiUrl+"/todos")
        .then((res)=>{
            return res.json()
            .then((res)=>{
              setTodos(res)  
            })
        })
    }


    const handleEdit=(item)=>{
        setEditId(item._id);
        setEditTitle(item.title); 
        setEditDescription(item.description)
    }

    const handleUpdate=()=>{
        setError("")
        if(editTitle.trim() !== "" && editDescription.trim() !== ""){
            fetch(apiUrl+"/todos/"+editId,{
                method:"put",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({title: editTitle,description: editDescription})
            }).then((res)=>{
                if(res.ok){
                    const updatedTodos=todos.map((item)=>{
                        if(item._id === editId){
                            item.title=editTitle;
                            item.description=editDescription;
                        }
                        return item;
                    })

                    setTodos(updatedTodos)
                    setMessage("Item Updated Successfully")
                    setTimeout(()=>{
                        setMessage("")
                    },3000)

                    setEditId(-1);

                }else{
                    setError("Failed to add Item")
                }
            
            }).catch(()=>{
                setError("Failed to add Item")
            })


        }
    }

    const handleEditCancel=()=>{
        setEditId(-1)
    }

    const handleDelete=(id)=>{
        if(window.confirm("Are you sure you want to delete this item?")){
            fetch(apiUrl+"/todos/"+id,{
                method:"delete",
            }).then(()=>{
               const updatedTodos = todos.filter((item)=>item._id !== id)
               setTodos(updatedTodos)
            })
        }
    }


    return (
    <>
    <div className="container">
    <div className="row p-3 bg-success text-light">
        <h1>TODO APPLICATION</h1>
    </div>
    <div className="row">
    <h3>Add Items</h3>
    {message && <p className="text-success">{message}</p>}
    <div className="form-group d-flex gap-2">
    <input placeholder="title" onChange={(e)=> setTitle(e.target.value)} value={title} className="form-control" type="text" />
    <input placeholder="Description" onChange={(e)=> setDescription(e.target.value)} value={description} className="form-control" type="text" />
    <button className="btn btn-dark" onClick={handleSubmit}>Add</button>
    </div>
    </div>
    {error && <p className="text-danger">{error}</p>}
    <div className="row mt-3">
        <h3>Tasks</h3>
        <ul className="list-group">
            {
                todos.map((item)=>
            <li className="list-group-item bg-info d-flex justify-content-between align-items-center my-2">
            <div className="d-flex flex-column me-2">
                {
                    editId == -1 || editId != item._id ? <>
                        <span className="fw-bold">{item.title}</span>
                        <span>{item.description}</span>
                    </> : <>
                    <div className="form-group d-flex gap-2">
                    <input placeholder="title" onChange={(e)=> setEditTitle(e.target.value)} value={editTitle} className="form-control" type="text" />
                    <input placeholder="Description" onChange={(e)=> setEditDescription(e.target.value)} value={editDescription} className="form-control" type="text" />
                    </div>
                    </>
                }
            </div>
            <div className="d-flex gap-3">
            { editId ==-1  ? <button className="btn btn-warning" onClick={()=>handleEdit(item)}>Edit</button> : <button onClick={handleUpdate}>Update</button>}
            { editId == -1 ? <button className="btn btn-danger" onClick={()=>handleDelete(item._id)}>Delete</button> :
            <button className="btn btn-danger" onClick={handleEditCancel}>Cancel</button>}
            </div>
            </li>
                )
            }
        </ul>
    </div>
    </div>
    </>
    )
}