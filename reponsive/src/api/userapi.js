const baseurl="https://dummyjson.com/users";

export  async function searchusers(query){
    const url= query==""?baseurl:`${baseurl}/search?q=${query}`;
    const  fetchdata= async()=>{
        const res=await fetch(url);
        if(!res.ok){
            throw new Error("Failed to fetch users");
        }
            const data=await res.json();
            return data.users ?? [];
      
    };
    return fetchdata();
}

export  async function deleteuser(id){
        const res=await fetch(`${baseurl}/${id}`,{
            method:"DELETE"
        });
        if(!res.ok){
            throw new Error("Failed to delete user");
        }
        const data=await res.json();
        return data;
    
}

export  async function updateuser(id,payload){
    const res =await fetch(`${baseurl}/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    if(!res.ok){
        throw new Error("Failed to update user");

    }
    const data = await res.json();
    return data;
}

export  async function createuser(payload){
    const res =await fetch(`${baseurl}`,{
        method:"POST",
        headers:{"content-type"
            :"application/json"}
            ,
        body:JSON.stringify(payload)
    })
    if(!res.ok){
        throw new Error("Failed to create user");
    }
    const data = await res.json();
    return data;

}