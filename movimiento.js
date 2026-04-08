// movimiento.js
const MotorAnimacion = {
    ciclo: 0,
    velocidadActual: 0,
    
    actualizar: function(personaje, keys, delta, config) {
        const isMoving = keys['KeyW'] || keys['KeyS'] || keys['KeyA'] || keys['KeyD'];
        const isSprinting = keys['ShiftLeft'];
        
        // Suavizado de aceleración
        const targetSpeed = isMoving ? (isSprinting ? 0.4 : 0.2) : 0;
        this.velocidadActual = THREE.MathUtils.lerp(this.velocidadActual, targetSpeed, 0.1);

        if (this.velocidadActual > 0.01) {
            this.ciclo += isSprinting ? 0.25 : 0.15;
            
            // Referencias (índices según tu estructura de vaquero)
            const pI = personaje.children[2];
            const pD = personaje.children[3];
            const bI = personaje.children[4];
            const bD = personaje.children[5];
            const torso = personaje.children[0];

            // Movimiento fluido de extremidades
            pI.rotation.x = Math.sin(this.ciclo) * 0.7;
            pD.rotation.x = -Math.sin(this.ciclo) * 0.7;
            bI.rotation.x = -Math.sin(this.ciclo) * 0.7;
            bD.rotation.x = Math.sin(this.ciclo) * 0.7;

            // Balanceo de hombros y rebote (4D)
            torso.rotation.z = Math.sin(this.ciclo * 0.5) * 0.05;
            torso.position.y = 8 + Math.abs(Math.cos(this.ciclo)) * 0.8;
        } else {
            // Suavizado al estado IDLE (respiración)
            personaje.children.forEach(child => {
                if(child.rotation.x) child.rotation.x *= 0.9;
            });
            personaje.children[0].position.y = THREE.MathUtils.lerp(personaje.children[0].position.y, 8, 0.1);
            personaje.children[0].scale.setScalar(1 + Math.sin(Date.now() * 0.002) * 0.02);
        }
    }
};
