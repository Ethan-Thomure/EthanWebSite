import {Stage} from "./Stage/Stage.js";

document.getElementById("create-form").addEventListener("submit", (e) => {
    let initAmount = document.getElementById("init-amount").value;
    let initColor = document.getElementById("init-color").value;
    let initSize = document.getElementById("init-size").value;

    addParticle(initAmount, initColor, initSize, initColor);
})

document.getElementById("rule-form").addEventListener("submit", (e) => {
    let thisParticle = document.getElementById("rule-this-particle").value;
    let thatParticle = document.getElementById("rule-that-particle").value;
    let strength = document.getElementById("strength").value;

    stage.addParticleGroupRule(thisParticle, thatParticle, strength);
})

function addParticle(initAmount, initColor, initSize) {
    stage.addParticleGroup(initAmount, initColor, initSize);

    // update the color options
    let updateList = ["rule-this-particle", "rule-that-particle"];
    for (let i = 0; i < updateList.length; i++) {
        const newParticleOption = document.createElement("option");
        newParticleOption.value = initColor;
        newParticleOption.text = initColor;
        document.getElementById(updateList[i]).appendChild(newParticleOption);
    }
}

// Set up the field
let field = document.getElementById("field");

let width = field.parentElement.clientWidth
let height = field.parentElement.clientHeight

setCanvasSize(field);

field = field.getContext('2d');

// set up the stage
const stage = new Stage(field, width, height);

addParticle(100, "yellow", 2);
addParticle(100, "red");
addParticle(100, "green", 7);
// stage.addParticleGroup(100, "blue");


stage.addParticleGroupRule("red", "red", 1);
stage.addParticleGroupRule("red", "green", -1);
// stage.addParticleGroupRule("red", "blue", 1);


stage.addParticleGroupRule("yellow", "red", 5);
stage.addParticleGroupRule("yellow", "yellow", .1);
stage.addParticleGroupRule("yellow", "green", -5);
// stage.addParticleGroupRule("yellow", "blue", 1);


stage.addParticleGroupRule("green", "green", -5);
stage.addParticleGroupRule("green", "red", -1);
// stage.addParticleGroupRule("green", "blue", 1);
// stage.addParticleGroupRule("green", "yellow", -.001);

// stage.addParticleGroupRule("blue", "blue", 5);

window.onresize = function() {
    let temp_field = document.getElementById("field");

    let width = temp_field.parentElement.clientWidth
    let height = temp_field.parentElement.clientHeight

    console.log(width, height);

    stage.setSize(width, height);
    setCanvasSize(temp_field);
}

function setCanvasSize(field) {
    field.width = width;
    field.height = height;

}

function addParticleGroup() {

}

stage.update();