const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modal_2 = document.querySelector(".modal-2");
const overlay_2 = document.querySelector(".overlay-2");


//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};


// Modal Follow me
const followME = () =>{
  console.log("open Modal follow me");
  modal_2.classList.add("active-2");
  overlay_2.classList.add("overlayactive-2");

};


// closeModal_2
const closeModal_2 = () => {
  modal_2.classList.remove("active-2");
  overlay_2.classList.remove("overlayactive-2");
};


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