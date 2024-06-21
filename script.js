fetch()
.then(response =>{
    if(!response.ok){
        throw new Error('Network is not Responding')
    }
    return response.json();
})
.then(data => data.forEach(element => {
   console.log(element.title) 
}))
.catch(e => console.log(e));