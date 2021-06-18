const dogPics = "https://dog.ceo/api/breed/dalmatian/images/random/1"
let intervalId = null;
let i = 0;

const dalmation = () => {
        document.open();
        document.write("<h1>Welcome and Bienvenue to the House of De Vil! </h1>");
        document.close();
    } 

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('like-btn'); 
    const list = document.getElementById("comment-form");
    const ul = document.createElement("ul");
    const likes = document.querySelector(".fur");
    let listWriting = document.getElementById("list");
    let h4 = document.getElementById("puppyCard");
    
    let h1 = document.getElementById("counter");
    let add = document.getElementById("plus"); 
    let reset = document.getElementById("reset-btn_0"); 

    listWriting.appendChild(ul)
   
   
    const timer = setInterval(() => {
        h1.innerText++
      }, 1000); 
    
    add.addEventListener("click", function() {
        let count = parseInt(h1.innerHTML)
          h1.innerText = count + 1;
        });

    reset.data = false; 
    reset.addEventListener("click", () => {
        if (reset.data === false) {
            reset.data = !reset.data;
            reset.innerText = "No! The puppies!";
            h1.innerHTML = setInterval(timer); 
        } else {
            reset.innerText = "You Idiots let them escape again!";
            clearInterval(!timer);
            h1.innerHTML = timer;
        }  
        console.log(reset)
        console.log(h1)           
            });
    

        console.log(dogPics)

    function cruelly() {
        fetch(dogPics)
       .then((response) => {
           return response.json()
        })
       .then(data => {
        const dogsObject = data.message;
        const dogsArray = Object.keys(dogsObject);
        getPuppies(dogsArray) 
        })
    };  

    function getPuppies() {
        let img = document.createElement("img")
 
        img.className = "puppyImg"
 
        h4.append(img)
        
        fetch(dogPics)
       .then((response) => {
           return response.json()
        })
       .then(data => {
        img.src = data.message; 
        }) 
    };

   button.addEventListener('click', () => {
    let li = document.createElement("li")
    let reset = document.getElementById("reset-btn")
    button.onclick = function() {            
            i += 1;
            li.innerHTML = 'This has been liked ' + i + ' times';
    }
    reset.addEventListener("click", () => {
        likes.innerText = "Keep going, darling!"
    })
    likes.appendChild(li)
    });
    
    list.addEventListener('submit', function(w) {
        w.preventDefault()
        const input = w.target[0].value
        let li = document.createElement("li")
        
        li.innerText = input
        ul.appendChild(li)

        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = ('x') 
        deleteBtn.addEventListener("click", removeComment)
        
        input.innerText = ' '

        li.appendChild(deleteBtn)
        w.target.reset

        function removeComment(w) {
        w.target.parentElement.remove()
    }
    removeComment()

    }) 
   cruelly();
})
 
dalmation()
