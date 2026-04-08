// sombreros.js
const GaleriaSombreros = {
    // 10 SOMBREROS
    cowboy_classic: (c) => this.crearS(c, 4, 1, 5, 2),
    texano_pink: () => this.crearS(0xff007f, 4.5, 1.2, 5.5, 2.5),
    mafia_boss: () => this.crearS(0x111111, 3.5, 2, 4.5, 1),
    vintage_brown: () => this.crearS(0x4b2e1e, 4, 1.5, 5, 1.5),
    top_hat: () => this.crearS(0x000000, 3, 4, 4, 0.5),
    safari: () => this.crearS(0xc2b280, 4, 1, 6, 1),
    sombrero_mex: () => this.crearS(0xffffff, 5, 3, 10, 0.5),
    detective: () => this.crearS(0x222222, 3.8, 1.2, 4.8, 1.2),
    straw_hat: () => this.crearS(0xe3c98d, 4, 1.2, 6, 0.5),
    wizard: () => this.crearS(0x2a0054, 3, 6, 5, 2),

    // 10 GORRAS
    cap_urban: (c) => this.crearG(c, 0x111111),
    cap_neon: () => this.crearG(0x111111, 0xff007f),
    cap_gold: () => this.crearG(0x222222, 0xffd700),
    cap_white: () => this.crearG(0xffffff, 0xeeeeee),
    cap_trucker: () => this.crearG(0x333333, 0xffffff),
    cap_camo: () => this.crearG(0x4b5320, 0x1a2000),
    cap_red_bull: () => this.crearG(0x000080, 0xff0000),
    cap_flat: () => this.crearG(0x111111, 0x111111, true),
    cap_sport: () => this.crearG(0x00d4ff, 0xffffff),
    cap_night: () => this.crearG(0x0a0a0a, 0x00d4ff),

    // Motores de construcción interna
    crearS: (color, w, h, brim, curve) => {
        const g = new THREE.Group();
        const copa = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), new THREE.MeshStandardMaterial({color}));
        const ala = new THREE.Mesh(new THREE.BoxGeometry(brim, 0.2, brim), new THREE.MeshStandardMaterial({color}));
        g.add(copa, ala); return g;
    },
    crearG: (color, viseraC, flat = false) => {
        const g = new THREE.Group();
        const domo = new THREE.Mesh(new THREE.SphereGeometry(2, 8, 8, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshStandardMaterial({color}));
        const visera = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 2.5), new THREE.MeshStandardMaterial({color: viseraC}));
        visera.position.set(0, 0.2, 1.5);
        if(!flat) visera.rotation.x = 0.2;
        g.add(domo, visera); return g;
    }
};
