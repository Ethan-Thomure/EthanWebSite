import {ParticleGroup} from "./ParticleGroup/ParticleGroup.js";

export class Stage {

    constructor(field, width, height) {
        this.field = field
        // this.particles = [];
        this.particleGroups = {};
        this.width = width;
        this.height = height;

        // this.setSize(width, height);
    }

    addParticleGroup(initAmount, color, s=5) {
        this.particleGroups[color] = new ParticleGroup(initAmount, color, s, s, this.width, this.height);
    }

    addParticleGroupRule(thisColor, targetColor, strength) {
        this.particleGroups[thisColor].addRule(this.particleGroups[targetColor], strength, this.width, this.height);
    }

    // *************** Original ***************
    // update = () => {
    //     let currentParticleGroups = Object.values(this.particleGroups);
    //     // console.log(this.width, this.height);
    //
    //     this.field.clearRect(0, 0, this.width, this.height);
    //     this.draw(0, 0, "black", this.width, this.height);
    //
    //     for (let i = 0; i < currentParticleGroups.length; i++) {
    //         //enforce rules
    //         currentParticleGroups[i].enforceRules(this.width, this.height);
    //
    //         //draw the particles
    //         for (let j=0; j < currentParticleGroups[i].group.length; j++) {
    //             let particle = currentParticleGroups[i].group[j];
    //             this.draw(particle.x, particle.y, particle.color, particle.width, particle.height);
    //         }
    //     }
    //     requestAnimationFrame(this.update);
    // }

    // ***************** "better algorithm" ***********
    //make rules separate from particle group for this to work
    //maybe go by list, reciprocal, exception being self

    update = () => {
        let currentParticleGroups = Object.values(this.particleGroups);
        // console.log(this.width, this.height);

        this.field.clearRect(0, 0, this.width, this.height);
        this.draw(0, 0, "black", this.width, this.height);

        for (let i = 0; i < currentParticleGroups.length; i++) {
            //enforce rules
            currentParticleGroups[i].enforceRules(this.width, this.height);

            //draw the particles
            for (let j=0; j < currentParticleGroups[i].group.length; j++) {
                let particle = currentParticleGroups[i].group[j];
                this.draw(particle.x, particle.y, particle.color, particle.width, particle.height);
            }
        }
        requestAnimationFrame(this.update);
    }

    draw = (x, y, c, w, h) => {
        this.field.fillStyle = c;
        this.field.fillRect(x, y, w, h);
    }

    setSize(width, height) {
        this.draw(0, 0, "gray", this.width, this.height);
        this.width = width;
        this.height = height;
    }
}