import baseUrl from "../../Api/basUrl"
    
const insertDataWithImg = async(Url , params) => {
    
    const config = {
        headers:{"Content-type":"multipart/form-data"}
    }

    const res = await baseUrl.post(Url, params , config)
    return res
}



//getdata
const getData = async(Url , params) => {
    const res = await baseUrl.get(Url,params)
    return res.data
}


//insert data
const insertData = async(Url , params) => {
    const config = {
        headers : {Authorization : `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.post(Url ,params , config)
    return res
}


//insert data
const put = async(Url , params) => {
    const res = await baseUrl.put(Url ,params)
    return res
}

const getDataToken = async(url , params)=> {
    const config = {
        headers:{Authorization : `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.get(url , config)
    return res.data

}




//delete
const DeletDataToken = async(url , params)=> {
    const config = {
        headers :{Authorization : `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.delete(url , config)
    return res.data
}


const DeleteData = async(Url , params) => {

    const res = await baseUrl.delete(Url,params)
    console.log(res)


    return res.data
    
}




const insertUpdateData = async(url , params)=>{
    const config = {
        headers :{Authorization : `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url ,params , config)
    return res

}




export {insertDataWithImg ,insertData , getData , put , getDataToken , DeletDataToken , insertUpdateData , DeleteData  }  