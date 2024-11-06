const provinciasJSON = {
  "provincias": [
    {
      "nombre": "Buenos Aires",
      "ciudades": [
        ["La Plata", -34.9212, -57.9545],
        ["Mar del Plata", -38.0055, -57.5589],
        ["Bahía Blanca", -38.7191, -62.2714],
        ["Tandil", -37.3203, -59.1284],
        ["San Isidro", -34.4600, -58.5250],
        ["San Nicolás de los Arroyos", -33.3333, -60.2260],
        ["San Pedro", -33.6700, -59.6880],
        ["Pergamino", -33.8833, -60.5667],
        ["Junín", -34.6092, -60.2260],
        ["Luján", -34.5822, -59.1139]
      ]
    },
    {
      "nombre": "Catamarca",
      "ciudades": [
        ["San Fernando del Valle de Catamarca", -28.4694, -65.7850],
        ["Andalgalá", -27.2000, -66.0000],
        ["Belén", -27.2833, -66.3333],
        ["Tinogasta", -27.6500, -67.0833],
        ["Santa María", -27.2000, -66.3000],
        ["La Puerta", -28.2000, -65.8000],
        ["Fiambalá", -27.6500, -67.4167],
        ["Recreo", -28.2000, -65.7500],
        ["Aconquija", -27.5000, -66.5000],
        ["Saujil", -27.5000, -66.0000]
      ]
    },
    {
      "nombre": "Chaco",
      "ciudades": [
        ["Resistencia", -27.4510, -58.9860],
        ["Barranqueras", -27.4550, -58.9510],
        ["Presidencia Roque Sáenz Peña", -26.7850, -60.4260],
        ["Villa Ángela", -27.0300, -60.7500],
        ["Charata", -27.2000, -60.5000],
        ["Machagai", -27.2000, -60.2000],
        ["Quitilipi", -26.9500, -60.5000],
        ["General José de San Martín", -26.8000, -60.5000],
        ["Las Breñas", -27.2000, -60.8000],
        ["Castelli", -26.8000, -60.0000]
      ]
    },
    {
      "nombre": "Chubut",
      "ciudades": [
        ["Rawson", -43.3000, -65.1000],
        ["Comodoro Rivadavia", -45.8642, -67.5000],
        ["Puerto Madryn", -42.7667, -65.0333],
        ["Trelew", -43.2500, -65.3000],
        ["Esquel", -42.9100, -71.3167],
        ["Gaiman", -43.2000, -65.3667],
        ["Dolavon", -43.2000, -65.4167],
        ["Puerto Pirámides", -42.5000, -64.3333],
        ["Rada Tilly", -45.7667, -67.5000],
        ["Sarmiento", -45.6000, -67.0000]
      ]
    },
    {
      "nombre": "Córdoba",
      "ciudades": [
        ["Córdoba", -31.4201, -64.1888],
        ["Villa Carlos Paz", -31.4000, -64.5000],
        ["Río Cuarto", -33.1342, -64.3490],
        ["Alta Gracia", -31.6500, -64.4000],
        ["Villa María", -32.4100, -62.0700],
        ["Jesús María", -30.9500, -63.7000],
        ["Bell Ville", -32.6000, -62.6000],
        ["Río Tercero", -32.1500, -63.2000],
        ["Cosquín", -31.3000, -64.6500],
        ["La Falda", -31.2000, -64.5000]
      ]
    },
    {
      "nombre": "Corrientes",
      "ciudades": [
        ["Corrientes", -27.4800, -58.8340],
        ["Goya", -29.1333, -59.2500],
        ["Mercedes", -29.2000, -58.0000],
        ["Curuzú Cuatiá", -30.0000, -58.5000],
        ["Esquina", -30.0000, -59.0000],
        ["Bella Vista", -29.2000, -58.6000],
        ["Paso de los Libres", -29.7000, -57.1000],
        ["Monte Caseros", -30.5000, -57.5000],
        ["Santo Tomé", -29.5000, -57.8000],
        ["Ituzaingó", -27.5000, -58.5000]
      ]
    },
    {
      "nombre": "Entre Ríos",
      "ciudades": [
        ["Paraná", -31.7300, -60.5200],
        ["Concordia", -31.3900, -58.0000],
        ["Gualeguaychú", -33.0000, -58.5000],
        ["Colón", -32.3000, -58.0000],
        ["Victoria", -32.3000, -60.0000],
        ["Villaguay", -30.8000, -59.0000],
        ["Gualeguay", -32.5000, -59.0000],
        ["Diamante", -32.2000, -60.0000],
        ["Federación", -30.5000, -58.5000],
        ["La Paz", -30.0000, -59.0000]
      ]
    },
    {
      "nombre": "Formosa",
      "ciudades": [
        ["Formosa", -26.1800, -58.1800],
        ["Clorinda", -25.5000, -57.5000],
        ["Pirané", -25.8000, -58.2000],
        ["Las Lomitas", -25.5000, -60.0000],
        ["El Colorado", -25.5000, -58.5000],
        ["Ingeniero Juárez", -25.0000, -60.0000],
        ["Herradura", -26.0000, -58.5000],
        ["Ibarreta", -25.5000, -59.0000],
        ["Villa Escolar", -26.2000, -58.5000],
        ["Laguna Blanca", -25.8000, -58.8000]
      ]
    },
    {
      "nombre": "Jujuy",
      "ciudades": [
        ["San Salvador de Jujuy", -24.185423, -65.299658],
        ["Palpalá", -24.200000, -65.300000],
        ["San Pedro", -24.500000, -65.500000],
        ["La Quiaca", -22.116667, -65.600000],
        ["Humahuaca", -23.200000, -65.350000],
        ["Perico", -24.400000, -65.750000],
        ["Libertador General San Martín", -23.800000, -64.900000],
        ["El Carmen", -24.300000, -65.500000],
        ["Tilcara", -23.600000, -65.400000],
        ["Abra Pampa", -23.800000, -65.500000]
      ]
    }, {
      "nombre": "La Pampa",
      "ciudades": [
        ["Santa Rosa", -36.6167, -64.2833],
        ["General Pico", -36.6167, -63.7500],
        ["Toay", -36.5667, -64.1667],
        ["Realicó", -35.8000, -63.5000],
        ["Victorica", -36.0000, -65.0000],
        ["General Acha", -36.5000, -64.5000],
        ["Eduardo Castex", -36.5000, -64.2500],
        ["Macachín", -36.5000, -64.1667],
        ["Quemú Quemú", -36.5000, -63.7500],
        ["General Campos", -36.5000, -64.0000]
      ]
    }, {
      "nombre": "La Rioja",
      "ciudades": [
        ["La Rioja", -29.413200, -66.850000],
        ["Chilecito", -29.200000, -67.500000],
        ["Aimogasta", -29.3043717, -66.800000],
        ["Chepes", -30.000000, -65.500000],
        ["Villa Unión", -29.500000, -67.000000],
        ["Anillaco", -29.300000, -67.200000],
        ["Famatina", -29.500000, -67.500000],
        ["Vinchina", -29.300000, -67.600000],
        ["Olta", -30.200000, -65.800000],
        ["Nonogasta", -29.400000, -66.600000]
      ]
    },
    {
      "nombre": "Mendoza",
      "ciudades": [
        ["Mendoza", -32.889458, -68.845837],
        ["San Rafael", -34.590000, -67.570000],
        ["Godoy Cruz", -32.895000, -68.835000],
        ["Luján de Cuyo", -32.970000, -68.800000],
        ["Maipú", -32.883333, -68.800000],
        ["Malargüe", -35.450000, -69.600000],
        ["Tunuyán", -33.500000, -69.050000],
        ["San Martín", -33.500000, -68.500000],
        ["General Alvear", -34.000000, -67.500000],
        ["Rivadavia", -33.000000, -68.500000]
      ]
    },
    {
      "nombre": "Misiones",
      "ciudades": [
        ["Posadas", -27.365000, -55.883000],
        ["Puerto Iguazú", -25.695000, -54.444000],
        ["Eldorado", -26.070000, -54.800000],
        ["Garupá", -27.400000, -55.800000],
        ["Apóstoles", -27.000000, -55.750000],
        ["Montecarlo", -26.500000, -54.500000],
        ["Oberá", -27.200000, -55.100000],
        ["San Vicente", -27.200000, -55.500000],
        ["Jardín América", -27.200000, -55.700000],
        ["Puerto Rico", -27.200000, -55.800000]
      ]
    },
    {
      "nombre": "Neuquén",
      "ciudades": [
        ["Neuquén", -38.951000, -68.059000],
        ["Cutral-Có", -38.940000, -68.500000],
        ["Plottier", -38.800000, -68.200000],
        ["Centenario", -38.900000, -68.200000],
        ["Zapala", -38.999000, -59.999000],
        ["Junín de los Andes", -40.150000, -71.500000],
        ["Villa La Angostura", -40.740000, -71.640000],
        ["San Martín de los Andes", -40.200000, -71.350000],
        ["Chos Malal", -37.000000, -69.000000],
        ["Añelo", -38.800000, -68.500000]
      ]
    },
    {
      "nombre": "Río Negro",
      "ciudades": [
        ["Viedma", -40.810000, -63.000000],
        ["San Carlos de Bariloche", -41.133000, -71.310000],
        ["General Roca", -39.000000, -62.000000],
        ["Cipolletti", -38.950000, -67.000000],
        ["Allen", -39.000000, -67.000000],
        ["Cinco Saltos", -39.000000, -67.000000],
        ["Villa Regina", -39.000000, -67.000000],
        ["Choele Choel", -39.000000, -65.000000],
        ["Ingeniero Huergo", -39.000000, -67.000000],
        ["Sierra Grande", -41.000000, -65.000000]
      ]
    },
    {
      "nombre": "Salta",
      "ciudades": [
        ["Salta", -24.782000, -65.411000],
        ["San Ramón de la Nueva Orán", -23.130000, -64.350000],
        ["Tartagal", -22.500000, -63.800000],
        ["Cafayate", -26.070000, -65.600000],
        ["Metán", -25.000000, -64.800000],
        ["Rosario de la Frontera", -25.500000, -64.500000],
        ["General Güemes", -24.500000, -64.500000],
        ["San José de Metán", -25.000000, -64.800000],
        ["Rosario de Lerma", -24.800000, -65.500000],
        ["Cerrillos", -24.800000, -65.500000]
      ]
    },
    {
      "nombre": "San Juan",
      "ciudades": [
        ["San Juan", -31.537000, -68.536000],
        ["Rawson", -31.540000, -68.530000],
        ["Pocito", -31.500000, -68.500000],
        ["Chimbas", -31.550000, -68.500000],
        ["Santa Lucía", -31.550000, -68.500000],
        ["Caucete", -31.500000, -68.500000],
        ["Albardón", -31.500000, -68.500000],
        ["Rivadavia", -31.550000, -68.500000],
        ["Zonda", -31.500000, -68.500000],
        ["San Martín", -31.500000, -68.500000]
      ]
    },
    {
      "nombre": "San Luis",
      "ciudades": [
        ["San Luis", -33.300000, -66.333333],
        ["Villa Mercedes", -33.650000, -65.500000],
        ["Merlo", -32.350000, -65.000000],
        ["La Punta", -33.300000, -66.300000],
        ["Juana Koslay", -33.300000, -66.350000],
        ["La Toma", -32.800000, -66.300000],
        ["Naschel", -32.500000, -65.800000],
        ["Concarán", -32.500000, -65.500000],
        ["Santa Rosa del Conlara", -32.500000, -65.500000],
        ["Candelaria", -32.500000, -65.500000]
      ]
    },
    {
      "nombre": "Santa Cruz",
      "ciudades": [
        ["Río Gallegos", -51.625000, -69.223000],
        ["Caleta Olivia", -46.433000, -67.500000],
        ["Puerto Deseado", -47.750000, -58.500000],
        ["El Calafate", -50.333000, -72.266000],
        ["Pico Truncado", -46.133000, -67.500000],
        ["Las Heras", -46.000000, -67.000000],
        ["Perito Moreno", -45.000000, -67.000000],
        ["Puerto Santa Cruz", -49.000000, -67.000000],
        ["Gobernador Gregores", -46.000000, -67.000000],
        ["Río Turbio", -51.000000, -69.000000]
      ]
    },
    {
      "nombre": "Santa Fe",
      "ciudades": [
        ["Santa Fe", -31.633333, -60.700000],
        ["Rosario", -32.950000, -60.666667],
        ["Venado Tuerto", -33.650000, -60.000000],
        ["Rafaela", -31.250000, -61.500000],
        ["San Lorenzo", -32.600000, -60.700000],
        ["Granadero Baigorria", -32.900000, -60.600000],
        ["Funes", -32.900000, -60.800000],
        ["Capitán Bermúdez", -32.800000, -60.600000],
        ["Villa Gobernador Gálvez", -32.900000, -60.600000],
        ["Casilda", -33.000000, -60.000000]
      ]
    },
    {
      "nombre": "Santiago del Estero",
      "ciudades": [
        ["Santiago del Estero", -27.785000, -64.264000],
        ["La Banda", -27.785000, -64.250000],
        ["Termas de Río Hondo", -28.999000, -64.800000],
        ["Fernández", -27.500000, -64.500000],
        ["Añatuya", -27.000000, -63.500000],
        ["Frías", -28.000000, -63.000000],
        ["Bandera", -28.000000, -63.500000],
        ["Suncho Corral", -27.500000, -64.000000],
        ["Monte Quemado", -25.500000, -62.500000],
        ["Colonia Dora", -28.000000, -63.000000]
      ]
    },
    {
      "nombre": "Tierra del Fuego",
      "ciudades": [
        ["Ushuaia", -54.8019, -68.3030],
        ["Río Grande", -53.7850, -67.7000],
        ["Tolhuin", -54.4000, -67.5000],
        ["Puerto Almanza", -54.8000, -68.5000],
        ["Puerto Williams", -54.9333, -67.6167],
        ["Porvenir", -53.2000, -70.4000],
        ["Cameron", -54.5000, -68.0000],
        ["San Sebastián", -54.5000, -68.0000],
        ["Estancia Vicuña", -54.5000, -68.0000],
        ["Estancia Harberton", -54.8000, -68.5000]
      ]
    },
    {
      "nombre": "Tucumán",
      "ciudades": [
        ["San Miguel de Tucumán", -26.824000, -65.222000],
        ["Yerba Buena", -26.850000, -65.200000],
        ["Tafí Viejo", -26.800000, -65.200000],
        ["Banda del Río Salí", -26.800000, -65.250000],
        ["Concepción", -26.800000, -65.500000],
        ["Aguilares", -26.600000, -65.500000],
        ["Monteros", -26.600000, -65.300000],
        ["Famaillá", -26.700000, -65.300000],
        ["Río Seco", -26.800000, -65.400000],
        ["Simoca", -27.000000, -65.500000]
      ]
    }
  ]
}