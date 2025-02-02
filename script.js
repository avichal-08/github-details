const search=document.querySelector('#username')
let twurl
let tw
let url1
let url
let username
document.querySelector('#input').addEventListener('click',function(e){
   username=search.value 
    if(username) print(username)
})


function print(username){
url='https://api.github.com/users/'+username

const xhr=new XMLHttpRequest()
xhr.open('GET',url)
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText)
        let imgUrl=data.avatar_url
        let rps=data.repos_url
        tw=data.twitter_username
        twurl='https://x.com/'+tw
        imgshow(imgUrl)
        name(data.name)
        repo(rps)
        if(tw)twitt(twurl)
    }
}
xhr.send();
function imgshow(url1){
    document.querySelector('#photo').innerHTML=`<div>PHOTO:</div><div><img src=" ${url1} " width="200" height="200" alt="Placeholder Image"></div/`
}
function name(n){
    document.querySelector('#name').innerHTML=`<h1>NAME:${n}</h1>`
}
function repo(r){
    document.querySelector('#repo').innerHTML=`<a href="${r}">Repositories</a>`
}
function twitt(t){
document.querySelector('#twitter').innerHTML=`<a href="${t}">Twitter</a>`
tw=''
}
}
