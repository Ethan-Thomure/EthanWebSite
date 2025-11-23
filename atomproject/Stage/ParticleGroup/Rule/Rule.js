import {Particle} from "../Particle/Particle.js";

export class Rule{
    MAX_DISTANCE = 200;

    constructor(ThisParticle, TargetParticles, strength) {
        this.ThisParticle = ThisParticle;
        this.TargetParticles = TargetParticles;
        this.strength = strength;
    }

    enforceRule(max_x, max_y) {
        let theseParticles = this.ThisParticle.group;
        let thoseParticles = this.TargetParticles.group;

        for(let i = 0; i < theseParticles.length; i++) {
            let a = theseParticles[i];
            let b, d, F;
            for (let j = 0; j < thoseParticles.length; j++) {
                b = thoseParticles[j];
                d = a.get3D_Distance(b);
                // console.log(d);

                if (d > 0 && d < this.MAX_DISTANCE) {
                    F = this.strength / Math.pow(d, 1.5);
                    a.fx += F * a.get2D_xDistance(b);
                    a.fy += F * a.get2D_yDistance(b);
                }
            }

            a.updateVelocity(max_x, max_y);
            a.updatePosition(max_x, max_y);

            a.resetForce();
        }
    }
}