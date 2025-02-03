const colorArray = [
    "red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black",
    "white", "gray", "violet", "indigo", "cyan", "magenta", "lime", "teal", "turquoise",
    "gold", "silver", "bronze", "navy", "maroon", "beige", "peach", "charcoal", "ivory",
    "lavender", "rose", "crimson", "amber", "emerald"
];
let computedArray=[]

const targetColorElement = document.querySelector('div[data-testid="colorBox"]');
targetColorElement.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)];


const Loop=(array=[],callback=()=>{})=>{
    for (let index=0; index < array.length; index++) {
    callback()
}}

Loop(colorArray, ()=>{
    const color = colorArray[Math.floor(Math.random()*colorArray.length)];
    if(computedArray.length<=30&&!computedArray.includes(color)){
        computedArray.push(color)
    }
})