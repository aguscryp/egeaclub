// sombreros.js - Motor de Accesorios
const GaleriaSombreros = {
    // 10 SOMBREROS
    cowboy_classic: (c) => GaleriaSombreros.crearS(c, 4, 1, 6, 2),
    texano_pink: () => GaleriaSombreros.crearS(0xff007f, 4.5, 1.2, 7, 2.5),
    mafia_boss: () => GaleriaSombreros.crearS(0x111111, 3.5, 2, 5, 1),
    vintage_brown: () => GaleriaSombreros.crearS(0x4b2e1e, 4, 1.5, 6, 1.5),
    top_hat: () => GaleriaSombreros.crearS(0x000000, 3, 4, 5, 0.5),
    safari: () => GaleriaSombreros.crearS(0xc2b280, 4, 1, 7, 1),
    sombrero_mex: () => GaleriaSombreros.crearS(0xffffff, 5, 3, 11, 0.5),
    detective: () => GaleriaSombreros.crearS(0x222222, 3.8, 1.2, 5.5, 1.2),
    straw_hat: () => GaleriaSombreros.crearS(0xe3c98d, 4, 1.2, 7, 0.5),
    wizard: () => GaleriaSombreros.crearS(0x2a0054, 3, 6, 6, 2),

    // 10 GORRAS
    cap_urban: (c) => GaleriaSombreros.crearG(c, 0x111111),
    cap_neon: () => GaleriaSombreros.crearG(0x111111, 0xff007f),
    cap_gold: () => GaleriaSombreros.crearG(0x222222, 0xffd700),
    cap_white: () => GaleriaSombreros.crearG(0xffffff, 0xcccccc),
    cap_trucker: () => GaleriaSombreros.crearG(0x333333, 0xffffff),
    cap_camo: () => GaleriaSombreros.crearG(0x4b5320, 0x1a2000),
    cap_red_bull: () => GaleriaSombreros.crearG(0x000080, 0xff0000),
    cap_flat: () => GaleriaSombreros.crearG(0x111111, 0x111111, true),
    cap_sport: () => GaleriaSombreros.crearG(0x00d4ff, 0xffffff),
    cap_night: () => GaleriaSombreros.crearG(0x0a0a0a, 0x00d4ff),

    crearS: (color, w, h, brim, curve) => {
        const g = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({color});
        const copa = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), mat);
        const ala = new THREE.Mesh(new THREE.BoxGeometry(brim, 0.2, brim), mat);
        ala.position.y = -h/2;
        g.add(copa, ala); return g;
    },
    crearG: (color, viseraC, flat = false) => {
        const g = new THREE.Group();
        const domo = new THREE.Mesh(new THREE.SphereGeometry(2, 12, 12, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshStandardMaterial({color}));
        const vis = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 2.5), new THREE.MeshStandardMaterial({color: viseraC}));
        vis.position.set(0, 0.1, 1.3);
        if(!flat) vis.rotation.x = 0.2;
        g.add(domo, vis); return g;
    }
};
