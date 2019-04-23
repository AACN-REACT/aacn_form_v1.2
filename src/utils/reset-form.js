

export default function resetForm(state) {
let newstate = {}
for(let i in state){
    console.log("iiiiii",state[i])
       !Array.isArray(state[i])?newstate[i]="":newstate[i]=state[i]
}
return newstate
}