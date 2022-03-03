const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const  Next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currerntActive = 1;

Next.addEventListener ("click", () => {
    currerntActive++
if(currerntActive > circles.length) {
    currerntActive = circles.length;
}
    update ();
})


prev.addEventListener ("click", () => {
    currerntActive--
if(currerntActive < 1) {
    currerntActive = 0;
}
     update ();
})


function update () {
    circles.forEach ((circle,index) =>{
        if(index < currerntActive) {
            // console.log(index,currerntActive)
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".active");
      progress.style.width = (actives.length-1) / (circles.length-1) * 100 + "%";

      if(currerntActive === 1) {
          prev.disabled = true;
      } else if (currerntActive === circles.length) {
                next.disabled = true;
      } else {
          prev.disabled =false;
          next.disabled =false;
      }

}