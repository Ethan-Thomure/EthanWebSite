import {Particle} from "./Particle/Particle.js";
import {Rule} from "./Rule/Rule.js";



export class ParticleGroup {
    constructor(number, color, width, height, x_boundary, y_boundary) {
        this.group = [];
        this.color = color;

        this.width = width;
        this.height = height;

        for (let i = 0; i < number; i++) {
            this.addParticle(x_boundary, y_boundary);
        }

        this.rules = [];

        //this.rulelist ={}
    };

    addParticle(x_boundary, y_boundary) {
        this.group.push(new Particle(this.random(x_boundary - this.width), this.random(y_boundary - this.height),
            this.color, this.width, this.height));
    }

    addRule(TargetParticles, strength) {
        this.rules.push(new Rule(this, TargetParticles, strength));
        //this.rulelist.add(TargetParticles: strength);
    }

    enforceRules(x_boundary, y_boundary) {
        for (let i = 0; i < this.rules.length; i++) {
            this.rules[i].enforceRule(x_boundary, y_boundary);
        }
    }

    //enforceReciprocalRules
    //enforceSelfRules
    random(max) {
        return Math.random()*max;
    }

}