let floor = document.querySelector("#floor")
let vertical_rod = document.querySelector("#vertical-rod")
let horizontal_rod = document.querySelector("#horizontal-rod")
let rope = document.querySelector("#rope")
let person_head = document.querySelector(".person-head")
let person_body = document.getElementById("person-body")
let person_left_hand = document.querySelector(".person-left-hand")
let person_right_hand = document.getElementById("person-right-hand")
let person_left_leg = document.querySelector(".person-left-leg")
let person_right_leg = document.getElementById("person-right-leg")

let person_parts = [floor, vertical_rod, horizontal_rod, rope, person_head, person_body, person_left_hand, person_right_hand, person_left_leg, person_right_leg]
let current_index = 0

person_parts.forEach((part)=> {
    part.style.display="none"
})
 let correct_word = "hang"
 let correct_chars = []

 document.addEventListener("keyup", (ply) =>{
    if((/[a-zA-Z]/).test(ply.key)){
        console.log(ply.key, "pressed")
        let isInWord = correct_word.toLowerCase().includes(ply.key.toLowerCase())

        if(isInWord){
            correct_chars.push(ply.key)
            console.log(correct_chars)
            alert("you won")

        } else{
            if(current_index<person_parts.length){
            person_parts[current_index].style.display = "block"
            current_index++
            
        } else{
            alert("you lost")

        }
      } 
    }
 })

