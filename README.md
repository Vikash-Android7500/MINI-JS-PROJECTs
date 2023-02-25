
![Logo](https://raw.githubusercontent.com/Vikash-Android7500/JS-project/ModalApp/assets/fav.png)


# Project Code

Follow me Button

let btn_follow = document.querySelector(".btn0");

btn_follow.addEventListener('click', (btn) => {

    if ( btn.target.innerText === "Follow") {
        btn.target.innerText = "Unfollow";
        btn.target.style.color = 'white';
        btn.target.style.backgroundColor = 'red';     
    } 
    else {
      btn.target.innerText = "Follow";
      btn.target.style.color = 'white';
      btn.target.style.backgroundColor = 'green';
    }
});
