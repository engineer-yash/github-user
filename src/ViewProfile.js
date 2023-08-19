import React,{useState} from "react";


function ShowProfile() {

    const [userName, setUserName] = useState("");
    const [data, setData] = useState({});

    const InputHandlerEvent = (e)=>{
        setUserName(e.target.value);// for getting the value from the input field
    }
    const OnSubmitHandler = (e)=>{
        e.preventDefault(); //for not to refresh the page
        fetch(`https://api.github.com/users/${userName}`).then((res)=>{
            return res.json();
        }).then((values)=>{
            // console.log(values);    
            setData(values);
        })
    }
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center">
    <form className="form-inline" onSubmit={OnSubmitHandler}>
    <div className="form-group mx-sm-3 mb-2">
      <h1 className="sr-only">Enter Github User Name</h1>
      <input type="text" className="form-control" value={userName} onChange={InputHandlerEvent} placeholder="User Name" />
    </div>
    <center><button type="submit" className="btn btn-primary mb-2">Fetch Data</button></center>
  </form>
    </div>

    <div className="container d-flex justify-content-center align-items-center">
        <div className="card" style={{width: "18rem"}}>
            <img src={data.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.bio}</p>
                <a href={data.html_url} target="/" className="btn btn-primary">Go to Profile</a>
            </div>
        </div>&nbsp;&nbsp;
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <center><h5 className="btn btn-primary">Followers: {data.followers}</h5>&nbsp;&nbsp;
                <h5 className="btn btn-success">Following: {data.following}</h5>
                <h5 className="btn btn-secondary">Total Repo: {data.public_repos}</h5></center>
            </div>
        </div>
    </div>

    </>
  );
}

export default ShowProfile; 