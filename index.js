
const http=require('http')
const fs=require('fs').promises

const server=http.createServer((req,res)=>{
    const {method}=req
    if(method==='GET'){
console.log(req.url)
if(req.url==='/'){
fs.readFile('./index.html').then((data)=>{

    res.writeHead(200,{'content-Type':'text/html'})
    res.end(data)
}).catch(()=>{
    res.writeHead(404)
    res.end('Opps Error Occured')

})
}
else if(req.url==='/result'){
    
    let allResult=['Stone','Paper','Scissors']
    const randomNumber=Math.round(Math.random()*2)
    res.writeHead(200,'ok',{'Content-Type':'application/json'})
    res.end(JSON.stringify({result:allResult[randomNumber]}))
}
else{
    res.end('404 not found')
}
}

else{
    res.end('Wrong methods only support get')
}
})
server.listen(8000,()=>{
    console.log('Server is running')
})