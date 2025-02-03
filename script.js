const search=document.querySelector('#username')
let furl
let twurl
let tw
let url1
let url
let username
document.querySelector('#input').addEventListener('click',function(e){
    document.querySelector('#twitter').innerHTML=``
    document.querySelector('#Lfollowers').innerHTML=``
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
    const xhr2=new XMLHttpRequest()
    xhr2.open('GET',r)
    xhr2.onreadystatechange=function(){
        if(xhr2.readyState===4){
         const data2=JSON.parse(this.responseText)
         let n=data2.length;
         nrepo(n)
         lrepo(data2)
        }
    }
    xhr2.send();
    function nrepo(n){
        document.querySelector('#repo').innerHTML=`<p1>No of public repositories :${n}</br></p1>`
}
function lrepo(Rarr){
    document.querySelector('#repo').innerHTML+=`<p2>Name of repositories:</p2></br>`
        Rarr.forEach( function( item){
            let nam=item.name
            let followers_url=`https://github.com/`+item.full_name
            document.querySelector('#repo').innerHTML+=`<p3><a href="${followers_url}">${nam}</a></br></p3>`
        })
}
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
         if(n)lflr(data1)
        }
    }
    xhr1.send();
    function nflr(number){
        document.querySelector('#Nfollowers').innerHTML=`<p1>No of followers :${number}</p1>`
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
