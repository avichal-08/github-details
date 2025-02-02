const search=document.querySelector('#username')
let furl
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
        furl=data.followers_url
        flrs(furl)
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
function flrs(f){
    const xhr1=new XMLHttpRequest()
    xhr1.open('GET',f)
    xhr1.onreadystatechange=function(){
        if(xhr1.readyState===4){
         const data1=JSON.parse(this.responseText)
         let n=data1.length;
         nflr(n)
         lflr(data1)
        }
    }
    xhr1.send();
    function nflr(number){
        document.querySelector('#Nfollowers').innerHTML=`<h1>No of followers :${number}</h1>`
    }
    function lflr(d){
        document.querySelector('#Lfollowers').innerHTML=`<h1>Username of follower:</h1>`
        d.forEach( function( item){
            let id=item.login
            let followers_url=`https://github.com/`+id
            document.querySelector('#Lfollowers').innerHTML+=`<p><a href="${followers_url}">${id}</a></p>`
        })
    }
}
}
