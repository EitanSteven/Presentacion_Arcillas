export const slidesData = [
  {
    id: 1,
    type: 'cover',
    title: 'Arcillas',
    subtitle: 'Composición, Grupos, Procesos Industriales y Estadísticas',
    authors: 'Integrantes: Aguilar, Guimarey, Gil',
    badge: 'Mineralogía & Procesos Industriales'
  },
  {
    id: 2,
    type: 'units',
    title: 'Composición y Propiedades',
    subtitle: 'Unidades Estructurales Básicas: Tetraedro y Octaedro',
    badgeText: 'Estructura Cristalina',
    items: [
      {
        name: 'Tetraedro',
        desc: 'Un átomo de Silicio central coordinado con cuatro átomos de oxígeno en sus vértices. Es el bloque fundamental constructor de la capa tetraédrica (T).',
        image: './images/Estructuras Atomicas/Tetraedro.png',
        tag: 'Capa Tetraédrica (T)'
      },
      {
        name: 'Octaedro',
        desc: 'Un catión metálico central (Aluminio o Magnesio) coordinado con seis aniones de oxígeno o hidroxilos. Constituye la capa octaédrica (O).',
        image: './images/Estructuras Atomicas/Octaedro.png',
        tag: 'Capa Octaédrica (O)'
      }
    ]
  },
  {
    id: 3,
    type: 'layers',
    title: 'Composición y Propiedades',
    subtitle: 'Tipología y Apilamiento de Láminas Cristalinas',
    badgeText: 'Láminas Minerales',
    items: [
      {
        name: 'Lámina TO (1:1)',
        mineral: 'Ej: Caolinita',
        desc: 'Unión directa de una capa tetraédrica (T) y una capa octaédrica (O). Los fuertes enlaces de hidrógeno interlaminares impiden la entrada de agua y evitan la expansión.',
        image: './images/Estructuras Atomicas/Lamina TO - Caolinita.png',
        tag: 'Estructura 1:1'
      },
      {
        name: 'Lámina TOT (2:1)',
        mineral: 'Ej: Illita / Esmectita',
        desc: 'Una capa octaédrica (O) central dispuesta a modo de sándwich entre dos capas tetraédricas (T). Posee espacio intralaminar capaz de alojar cationes y moléculas polares.',
        image: './images/Estructuras Atomicas/Lamina TOT - Illita.png',
        tag: 'Estructura 2:1'
      }
    ]
  },
  {
    id: 4,
    type: 'groups',
    title: 'Grupos de Arcillas',
    subtitle: 'Comparativa Estructural y Aplicaciones Tecnológicas',
    groups: [
      {
        name: 'Arcillas Micáceas',
        example: 'Ej: Illita',
        structure: 'Estructura 2:1 (TOT)',
        features: [
          'Estructura 2:1 (TOT).',
          'Meteorización de Moscovita (Mica Blanca).',
          'Retienen potasio (K) en su espacio intralaminar, limita la entrada de agua, su expansión y acelera la vitrificación.',
          'Usada para fabricar ladrillos, tejas y baldosas.',
          'Se puede encontrar en los suelos fértiles (Como la Pampa).'
        ],
        accentColor: 'from-amber-500/20 to-orange-600/10',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10'
      },
      {
        name: 'Esmectitas',
        example: 'Ej: Montmorillonita y Bentonitas',
        structure: 'Estructura 2:1 (TOT) Dilatable',
        features: [
          'Estructura 2:1 (TOT), pero sin potasio intralaminar (Meteorización final de Illita).',
          'Espacio intralaminar flexible y dilatable.',
          'Son usadas en diferentes industrias como Fracking (Estabilizar Lodos), tratamiento de agua y farmaceutica.',
          'Abundan en suelos sometidos a ciclos de humedad y sequía.'
        ],
        accentColor: 'from-cyan-500/20 to-blue-600/10',
        badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
      }
    ]
  },
  {
    id: 5,
    type: 'industrial-processes',
    title: 'Procesos Industriales',
    subtitle: 'Fases Primarias de Acondicionamiento de Materia Prima',
    sections: [
      {
        step: '01',
        title: 'Extracción y Acopio',
        points: [
          {
            label: 'Extracción en Cantera',
            text: 'Extraídas en canteras a cielo abierto mediante selección de frentes de explotación.'
          },
          {
            label: 'Lechos de Homogenización',
            text: 'Acopiadas en lechos de homogenización para uniformar composición, humedad y plasticidad.'
          }
        ]
      },
      {
        step: '02',
        title: 'Molienda',
        points: [
          {
            label: 'Mezclado con Aditivos',
            text: 'Se mezcla con aditivos según los requerimientos del producto cerámico final.'
          },
          {
            label: 'Trituración y Refinado',
            text: 'Se tritura con bolas de Alúmina o molinos de martillo para lograr la finura deseada.'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    type: 'tiles',
    title: 'Baldosas Cerámicas',
    subtitle: 'Proceso de Manufactura Industrial',
    steps: [
      {
        number: '1',
        title: 'Atomización',
        desc: 'Flujos de aire a 500°C evaporan el agua y crean Pasta Cerámica granular.',
        highlight: 'Aire a 500°C'
      },
      {
        number: '2',
        title: 'Prensado',
        desc: 'Dosificadores compactan y surten la pasta con la forma y densidad deseada.',
        highlight: 'Dosificación precisa'
      },
      {
        number: '3',
        title: 'Secado',
        desc: 'Se reduce la humedad al menos a menos de 1% (-1%).',
        highlight: 'Humedad < 1%'
      },
      {
        number: '4',
        title: 'Esmaltado',
        desc: 'Se limpia la pieza y cubre de Esmalte que da su apariencia y brillo característico.',
        highlight: 'Acabado característico'
      },
      {
        number: '5',
        title: 'Cocción',
        desc: 'Cocción final en hornos continuos a 1.100°C garantizando la vitrificación.',
        highlight: 'Cocción a 1.100°C'
      }
    ],
    gallery: [
      {
        title: 'Molino de Molienda',
        image: './images/Procesos Industriales/Baldosas/Baldosas - Molino.png',
        caption: 'Molienda y mezcla de barbotina'
      },
      {
        title: 'Dosificadora',
        image: './images/Procesos Industriales/Baldosas/Dosificadora.png',
        caption: 'Dosificación y alimentación de pasta'
      },
      {
        title: 'Hornos - 1.100°C',
        image: './images/Procesos Industriales/Baldosas/Hornos - 1100°C.png',
        caption: 'Ciclo de cocción a alta temperatura'
      }
    ]
  },
  {
    id: 7,
    type: 'bricks-gallery',
    title: 'Procesos de Ladrillos',
    subtitle: 'Maquinaria Principal en Planta de Fabricación',
    images: [
      {
        index: '01',
        title: 'Trituración y Molienda',
        image: './images/Procesos Industriales/Ladrillos/Trituración y Molienda.png',
        epigraph: 'Preparación y molienda inicial de las materias primas arcillosas para homogeneizar la masa.'
      },
      {
        index: '02',
        title: 'Extrusora (Extructora)',
        image: './images/Procesos Industriales/Ladrillos/Extructora.png',
        epigraph: 'Moldeo continuo por extrusión al vacío para obtener el bloque cerámico con geometría definida.'
      },
      {
        index: '03',
        title: 'Hornos Colmena',
        image: './images/Procesos Industriales/Ladrillos/Hornos Colmena.png',
        epigraph: 'Hornos de tiro invertido para el tratamiento térmico y cocción uniforme de los ladrillos.'
      }
    ]
  },
  {
    id: 8,
    type: 'bricks-process',
    title: 'Ladrillos',
    subtitle: 'Fases de Fabricación y Curva Térmica de Cocción',
    phases: [
      {
        number: '1',
        name: 'Extrusión y Cortado',
        detail: 'El material es moldeado y cortado con precisión mecánica.'
      },
      {
        number: '2',
        name: 'Secado Natural',
        detail: 'Hasta 6 días de espera en áreas de secado.'
      },
      {
        number: '3',
        name: 'Secado Artificial',
        detail: 'Se utilizan los hornos en enfriamiento para aprovechar el calor residual.'
      }
    ],
    firingStages: [
      {
        stage: 'Caldeo',
        temp: 'Hasta 110°C',
        desc: 'Va desde el encendido, hasta los primeros 110°C, eliminando la humedad libre.'
      },
      {
        stage: 'Fuego Apurado',
        temp: '110°C a 600°C',
        desc: 'Se va reduciendo poco a poco la adición de carbón controlando la combustión.'
      },
      {
        stage: 'Subida',
        temp: '600°C',
        desc: 'Al llegar a la temperatura de 600°C, se alcanza la combustión completa.'
      },
      {
        stage: 'Nivelación',
        temp: 'Pico y Enfriamiento',
        desc: 'Se sube poco a poco la temperatura del horno 12°C por cada hora de quema y luego se deja enfriar.'
      }
    ]
  },
  {
    id: 9,
    type: 'single-stat',
    title: 'Estadísticas Industria Local',
    subtitle: 'Distribución de Canteras',
    badgeText: 'Sector Minero Regional',
    image: './images/Estadisticas Industria Local/Distribución de Canteras.png',
    accentColor: 'border-indigo-500/40'
  },
  {
    id: 10,
    type: 'single-stat',
    title: 'Estadísticas Industria Local',
    subtitle: 'Canteras Activas vs. Inactivas',
    badgeText: 'Sector Minero Regional',
    image: './images/Estadisticas Industria Local/Canteras Activas vs Inactivas.png',
    accentColor: 'border-emerald-500/40'
  },
  {
    id: 11,
    type: 'single-stat',
    title: 'Estadísticas Industria Local',
    subtitle: 'Cierre de Canteras',
    badgeText: 'Sector Minero Regional',
    image: './images/Estadisticas Industria Local/Cierre de Canteras.png',
    accentColor: 'border-rose-500/40'
  },
  {
    id: 12,
    type: 'references',
    title: 'Fuentes y Bibliografía',
    subtitle: 'Referencias Académicas, Técnicas y Oficiales Consultadas',
    badgeText: 'Bibliografía',
    sources: [
      {
        author: 'Asociación Española de Fabricantes de Ladrillos y Tejas de Arcilla Cocida',
        year: 's. f.',
        title: 'Proceso de fabricación',
        publisher: 'Hispalyt',
        url: 'https://www.hispalyt.es/es/ceramica-para-construir/proceso-de-fabricacion'
      },
      {
        author: 'Universidad Francisco de Paula Santander',
        year: 's. f.',
        title: 'Procesos de fabricación (cap. 2)',
        publisher: 'Editorial UFPS',
        url: 'https://libros.ufps.edu.co/index.php/editorial-ufps/catalog/download/16/11/205?inline=1'
      },
      {
        author: 'Edafología DA-UNS',
        year: '2020, 20 de agosto',
        title: 'Clase de minerales de arcilla',
        format: 'Video',
        publisher: 'YouTube',
        url: 'https://www.youtube.com/watch?v=8145YoAwymE'
      },
      {
        author: 'Patiño Torres, C.',
        year: '2021, 12 de agosto',
        title: 'Las arcillas en los suelos: Génesis, estructura y función. Parte I',
        format: 'Video',
        publisher: 'Hablemos de Agronomía y Agricultura • YouTube',
        url: 'https://www.youtube.com/watch?v=hy94ag4Sdrk'
      },
      {
        author: 'Subsecretaría de Minería',
        year: 's. f.',
        title: 'Catastro Minero Digital',
        publisher: 'Gobierno de la Provincia de Buenos Aires',
        url: 'https://www.gba.gob.ar/produccion/areas_de_trabajo/mineria'
      }
    ]
  }
];
