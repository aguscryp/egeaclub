// mapalisto.js - Configuración Maestra del Mundo
const MundoConfig = {
    // FÍSICA Y ENTORNO
    ambiente: {
        gravedad: -9.81,
        niebla: { 
            color: 0xaaccff, 
            densidad: 0.0006 
        },
        iluminacion: {
            sol: { color: 0xffffff, intensidad: 1.2, pos: [500, 1000, 500] },
            ambiente: { color: 0x404040, intensidad: 0.8 }
        }
    },

    // ELEMENTOS DINÁMICOS (4D)
    clima: {
        nubes: {
            cantidad: 60,
            velocidad: 0.08,
            alturaBase: 600,
            color: 0xffffff
        },
        particulas: {
            cantidad: 3000,
            area: 4000,
            size: 0.8,
            color: 0xffffff
        }
    },

    // TERRENO FIJO
    terreno: {
        size: 60000,
        colorPasto: 0x2d4c1e,
        gridColor: 0x334433
    }
};
