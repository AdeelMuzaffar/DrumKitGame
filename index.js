// let keyBoard=document.querySelectorAll(".drum");

document.addEventListener("keydown", function(e) {


    switch (e.key) {
                case "w":
                    let crash_Sound= new Audio("sounds/crash.mp3");
                    crash_Sound.play();
                    break;
                case "a":
                    let kickbass_Sound= new Audio("sounds/kick-bass.mp3");
                     kickbass_Sound.play();
                     break;
                case "s":
                    let snare_Sound= new Audio("sounds/snare.mp3");
                    snare_Sound.play();            
                     break;
                case "d":
                    let tom1_Sound= new Audio("sounds/tom-1.mp3");
                        tom1_Sound.play();
                         break;
                case "j":
                    let tom2_Sound= new Audio("sounds/tom-2.mp3");
                        tom2_Sound.play();
                        break;         
                case "k":
                    let tom3_Sound= new Audio("sounds/tom-3.mp3");
                    tom3_Sound.play();
                        break;
                case "l":
                    let tom4_Sound= new Audio("sounds/tom-4.mp3");
                        tom4_Sound.play();
                        break;
        
                         
                default: console.log(e.key);
                    break;
            }
        

})
// }
// document.querySelector(".a_drum").addEventListener("keydown", a_drumClick);

// function a_drumClick(){

//     let kickbass_Sound= new Audio("sounds/kick-bass.mp3");
//     kickbass_Sound.play();

// }

// document.querySelector(".s_drum").addEventListener("click", s_drumClick);

// function s_drumClick(){

//     let snare_Sound= new Audio("sounds/snare.mp3");
//     snare_Sound.play();

// }

// document.querySelector(".d_drum").addEventListener("click", d_drumClick);

// function d_drumClick(){

//     let tom1_Sound= new Audio("sounds/tom-1.mp3");
//     tom1_Sound.play();

// }

// document.querySelector(".j_drum").addEventListener("click", j_drumClick);

// function j_drumClick(){

//     let tom2_Sound= new Audio("sounds/tom-2.mp3");
//     tom2_Sound.play();

// }

// document.querySelector(".k_drum").addEventListener("click", k_drumClick);

// function k_drumClick(){

//     let tom3_Sound= new Audio("sounds/tom-3.mp3");
//     tom3_Sound.play();

// }

// document.querySelector(".l_drum").addEventListener("click", l_drumClick);

// function l_drumClick(){

//     let tom4_Sound= new Audio("sounds/tom-4.mp3");
//     tom4_Sound.play();

// }



// Logic of lectures;
let numberOfdrums= document.querySelectorAll(".drum").length;

for(let i=0; i< numberOfdrums; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    let buttoninnerHTML=this.innerHTML;

    switch (buttoninnerHTML) {
        case "w":
            let crash_Sound= new Audio("sounds/crash.mp3");
            crash_Sound.play();
            break;
        case "a":
            let kickbass_Sound= new Audio("sounds/kick-bass.mp3");
             kickbass_Sound.play();
             break;
        case "s":
            let snare_Sound= new Audio("sounds/snare.mp3");
            snare_Sound.play();            
             break;
        case "d":
            let tom1_Sound= new Audio("sounds/tom-1.mp3");
                tom1_Sound.play();
                 break;
        case "j":
            let tom2_Sound= new Audio("sounds/tom-2.mp3");
                tom2_Sound.play();
                break;         
        case "k":
            let tom3_Sound= new Audio("sounds/tom-3.mp3");
            tom3_Sound.play();
                break;
        case "l":
            let tom4_Sound= new Audio("sounds/tom-4.mp3");
                tom4_Sound.play();
                break;

                 
        default: console.log(buttoninnerHTML);
            break;
    }

});
}

