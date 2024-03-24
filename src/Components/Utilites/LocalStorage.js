// get the value
const getStorageData = () => {
    const getStorageData = localStorage.getItem('applied-jobs');
    if(getStorageData){
        return JSON.parse(getStorageData)
    }
    return []
    // getStorageData ? JSON.parse(getStorageData) : []
}



//save value
const setStorageData = (id) => {
     const storageData = getStorageData();
    const setJobs = storageData.find(jobs => jobs.id === id)
    if(!setJobs){
        storageData.push(id)
        localStorage.setItem('applied-jobs', JSON.stringify(storageData))
       
    }
}

export  {getStorageData, setStorageData}

//export