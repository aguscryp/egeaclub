// zapatillas.js - Definición universal de calzado
const GaleriaZapatillas = {
    nike_tn: (color) => {
        const grupo = new THREE.Group();
        // Cuerpo de la zapatilla
        const base = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.22, 0.6), 
            new THREE.MeshStandardMaterial({color: 0x111111})
        );
        // Suela Neón con Brillo (Emissive)
        const suela = new THREE.Mesh(
            new THREE.BoxGeometry(0.42, 0.08, 0.62), 
            new THREE.MeshStandardMaterial({
                color: color, 
                emissive: color, 
                emissiveIntensity: 2
            })
        );
        suela.position.y = -0.1;
        grupo.add(base, suela);
        return grupo;
    },
    adidas_classic: () => {
        const grupo = new THREE.Group();
        const base = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.6), new THREE.MeshStandardMaterial({color: 0xffffff}));
        const bandas = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.1, 0.2), new THREE.MeshStandardMaterial({color: 0x111111}));
        grupo.add(base, bandas);
        return grupo;
    },
    boots: () => {
        const grupo = new THREE.Group();
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.65), new THREE.MeshStandardMaterial({color: 0x222222}));
        grupo.add(b);
        return grupo;
    }
};
