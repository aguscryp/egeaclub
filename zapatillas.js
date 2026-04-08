// zapatillas.js
const GaleriaZapatillas = {
    // ... anteriores ...
    nike_air_max: (c) => this.base(c, 0x00d4ff, "camara_aire"),
    yeezy_boost: (c) => this.base(0x333333, c, "tejido"),
    jordan_retro: () => this.base(0xffffff, 0xff0000, "high_top"),
    cyber_punk_2077: () => this.base(0x111111, 0xffff00, "neon_lines"),
    track_and_field: () => this.base(0x00ff00, 0x000000, "spikes"),
    luxury_gold: () => this.base(0x111111, 0xffd700, "gold_plate"),
    street_vandal: () => this.base(0x555555, 0xffffff, "graffiti"),
    future_runner: () => this.base(0x0a0a0a, 0x00ffff, "led_sole"),
    lava_edition: () => this.base(0x222222, 0xff4500, "glow"),
    frozen_ice: () => this.base(0xffffff, 0xaaddff, "crystal"),
    carbon_fiber: () => this.base(0x111111, 0x444444, "tech"),
    neon_flow_special: () => this.base(0x000000, 0xff007f, "pulse"),
    alien_tech: () => this.base(0x1a1a1a, 0xadff2f, "organic"),
    royal_velvet: () => this.base(0x4b0082, 0xffd700, "premium"),
    desert_storm: () => this.base(0xc2b280, 0x4b2e1e, "rugged"),

    base: (c1, c2, estilo) => {
        const g = new THREE.Group();
        const main = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.25, 0.65), new THREE.MeshStandardMaterial({color: c1}));
        const sole = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.67), new THREE.MeshStandardMaterial({color: c2, emissive: c2, emissiveIntensity: 1}));
        sole.position.y = -0.12;
        g.add(main, sole);
        return g;
    }
};
