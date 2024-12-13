const dummyPromise=new Promise(function(resolve,reject){
    reject('failed');
})

dummyPromise.then((response)=>{
console.log('Response ',response)
}).catch((error)=>{
console.log('Error ',error)    
})