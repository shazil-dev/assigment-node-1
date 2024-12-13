const dummyPromise=new Promise(function(resolve,reject){
    reject('failed');
})

dummyPromise.then((response)=>{
console.log('Response ',response)
}).catch((error)=>{
console.log('Error ',error)    
})
const fs=require('fs/promises')
async function writeFile(){
   await fs.writeFile('myfile.txt','hello guys')
}
writeFile()