//Write your code here
let baseURL = "http://localhost:3000"

//Fetch images daa
fetch(${baseURL}/images/1)
.then(res=>res.json())
.then(data=>{ 

//insert image
let image = document.querySelector("#card-image")
image.src = data.image

//change title
let title = document.querySelector("#card-title")
title.textContent= "Woofing those bugs away"
})

//Fetch comments data
fetch(${baseURL}/comments)
.then(res=>res.json())
.then(comments=>{   
    comments.forEach(comment=>{
        let listItems = document.createElement("li")
        listItems.innerText= comment.content
        document.querySelector("#comments-list").appendChild(listItems)
        comments.remove
    })
})

//Handle Event for button click
function handleButtonClick(){
    let likeButton = document.querySelector("#like-button")     
    likeButton.addEventListener("click", ()=>{
        let likesCount = document.querySelector("#like-count")
        let initialNumberOfLikes = likesCount.textContent.replace("Likes", "")
        let newlikes = parseInt(initialNumberOfLikes)
        let progressiveLike = ${newlikes += 1} Likes
        likesCount.textContent = progressiveLike   
    })
    
    }
    //Handle Events on form input
    function handleFormEvents(){
     let form = document.querySelector("#comment-form")
     form.addEventListener("submit", (e)=>{
        e.preventDefault()
        let listForNewComments = document.createElement("li")
        let postInput = document.querySelector("input#comment")
        listForNewComments.textContent = postInput.value
        document.querySelector("#comments-list").appendChild(listForNewComments)
        form.reset()
     })
    }

handleButtonClick()
handleFormEvents()