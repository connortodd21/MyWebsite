var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector("#close");

function toggleModal() {
    modal.classList
}

function hideModal() {
    modal('hide');
}

function windowOnClick(event) {
    try{
        if (event.target === modal) {
            toggleModal();
        }
    }catch(err){
        console.log(event)
    }
}

// trigger.addEventListener("click", toggleModal());
// closeButton.addEventListener("click", toggleModal());
