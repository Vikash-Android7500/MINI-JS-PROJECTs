
// Follow btn
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
