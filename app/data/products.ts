export const categories = [
  { id: 'todas', name: 'Todas' },
  { id: 'principiante', name: 'Principiante / Estudio' },
  { id: 'media', name: 'Gama Media / Medio Concierto' },
  { id: 'profesional', name: 'Profesional / Concierto' },
  { id: 'acustica', name: 'Acústicas' },
  { id: 'electroacustica', name: 'Electroacústicas' },
  { id: 'guitarras', name: 'Guitarras' },
  { id: 'mandolinas', name: 'Mandolinas' },
  { id: 'cuatroVenezolano', name: 'Cuatro Venezolano' },
  { id: 'tresCubano', name: 'Tres Cubano' },
  { id: 'ukeleleTenor', name: 'Ukelele Tenor' },
  { id: 'nylon', name: 'Cuerda Nylon' },
  { id: 'metal', name: 'Cuerda Metálica' },
  { id: 'tradicional', name: 'Estilo Tradicional' },
  { id: 'cutaway', name: 'Estilo Cutaway' },
  { id: 'especial', name: 'Estilo Especial' },
];

export const guitarSubcategories = ['nylon', 'metal', 'cutaway', 'tradicional', 'especial'];

export interface Product {
  id: number;
  sku: string;
  name: string;
  displayName: string;
  categories: string[];
  price: number;
  image: string;
  images?: string[];
  description: string | null;
  features: string[];
}

export const products: Product[] = [
  {
    id: 200,
    sku: 'NN001',
    name: 'Guitarra-clasica',
    displayName: 'Guitarra Clásica',
    categories: ['guitarras', 'acustica', 'media'],
    price: 1299.99,
    image: '/images/guitarra-1.jpg',
    description: 'Guitarra clásica de alta gama con maderas seleccionadas',
    features: ['Tapa de cedro', 'Diapasón de ébano', 'Acabado natural']
  },
  {
    id: 201,
    sku: 'NN000',
    name: 'Guitarra-acustica-profesional',
    displayName: 'Guitarra Acústica Profesional',
    categories: ['acustica', 'guitarras', 'profesional'],
    price: 1499.99,
    image: '/images/guitarra-2.jpg',
    description: 'Guitarra acústica profesional con un sonido excepcional',
    features: ['Tapa de abeto', 'Cuerpo de palosanto', 'Pastilla incorporada']
  },
  {
    id: 202,
    sku: 'NN001',
    name: 'Guitarra-electroacustica-premium',
    displayName: 'Guitarra Electroacústica Premium',
    categories: ['electroacustica', 'guitarras', 'profesional'],
    price: 1799.99,
    image: '/images/guitarra-3.jpg',
    description: 'Guitarra electroacústica con sistema de amplificación profesional',
    features: ['Sistema Fishman', 'Ecualizador de 3 bandas', 'Afinador incorporado']
  },
  {
    id: 1,
    sku: 'GA001',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/Cutaway1.png',
    images: [
      "/images/Cutaway1.png",
      "/images/Cutaway2.png",
      "/images/Cutaway3.png",
      "/images/Cutaway4.png"
    ],
    description: null,
    features: []
  },
  {
    id: 2,
    sku: 'GA002',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA002(1).png',
    images: [
      "/images/GA002(1).png",
      "/images/GA002(2).png",
      "/images/GA002(3).png",
      "/images/GA002(4).png"
    ],
    description: null,
    features: []
  },
  {
    id: 3,
    sku: 'GA003',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA003(1).png',
    images: [
      "/images/GA003(1).png",
      "/images/GA003(2).png",
      "/images/GA003(3).png",
      "/images/GA003(4).png"
    ],
    description: null,
    features: []
  },
  {
    id: 70,
    sku: 'GA005',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA005(1).png',
    images: [
      "/images/GA005(1).png",
      "/images/GA005(2).png",
      "/images/GA005(3).png",
      "/images/GA005(4).png"
    ],
    description: null,
    features: []
  },
  {
    id: 71,
    sku: 'GA006',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA006(1).png',
    images: [
      "/images/GA006(1).png",
      "/images/GA006(2).png",
      "/images/GA006(3).png",
      "/images/GA006(4).png"
    ],
    description: null,
    features: []
  },
  {
    id: 72,
    sku: 'GA007',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA007(1).png',
    images: [
      "/images/GA007(1).png",
      "/images/GA007(2).png",
      "/images/GA007(3).png",
      "/images/GA007(4).png"
    ],
    description: null,
    features: []
  },
  {
    id: 73,
    sku: 'GA008',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA008(1).png',
    images: [
      "/images/GA008(1).png",
      "/images/GA008(2).png",
      "/images/GA008(3).png",
      "/images/GA008(4).png"
    ],
    description: null,
    features: []
  },
  {
    id: 74,
    sku: 'GA009',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA009(1).png',
    images: [
      "/images/GA009(1).png",
      "/images/GA009(2).png",
    ],
    description: null,
    features: []
  },
  {
    id: 75,
    sku: 'GA010',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA010(1).png',
    images: [
      "/images/GA010(1).png",
      "/images/GA010(2).png",
      "/images/GA010(3).png",
    ],
    description: null,
    features: []
  },
  {
    id: 76,
    sku: 'GA011',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA011(1).png',
    images: [
      "/images/GA011(1).png",
      "/images/GA011(2).png",
      "/images/GA011(3).png",
    ],
    description: null,
    features: []
  },
  {
    id: 77,
    sku: 'GA012',
    name: 'Guitarra-acústica-principiante',
    displayName: 'Guitarra Acústica Gama Principiante',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 139990,
    image: '/images/GA012(1).png',
    images: [
      "/images/GA012(1).png",
      "/images/GA012(2).png",
    ],
    description: null,
    features: []
  },
  {
    id: 4,
    sku: 'GA004',
    name: 'Guitarra-acústica-principiante-roseta',
    displayName: 'Guitarra Acústica Gama Principiante con Roseta de Flores',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 149990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 5,
    sku: 'GEP001',
    name: 'Guitarra-electroacústica-principiante',
    displayName: 'Guitarra Electroacústica Gama Principiante',
    categories: ['guitarras', 'electroacustica', 'principiante', 'tradicional', 'nylon'],
    price: 209990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 6,
    sku: 'GEP002',
    name: 'Guitarra-electroacústica-principiante',
    displayName: 'Guitarra Electroacústica Gama Principiante',
    categories: ['guitarras', 'electroacustica', 'principiante', 'tradicional', 'nylon'],
    price: 229990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 7,
    sku: 'GC001',
    name: 'Guitarra-cutaway-media',
    displayName: 'Guitarra Cutaway Gama Media',
    categories: ['guitarras', 'acustica', 'media', 'cutaway', 'nylon'],
    price: 289990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 8,
    sku: 'GC002',
    name: 'Guitarra-cutaway-media',
    displayName: 'Guitarra Cutaway Gama Media',
    categories: ['guitarras', 'acustica', 'media', 'cutaway', 'nylon'],
    price: 289990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 9,
    sku: 'GC003',
    name: 'Guitarra-cutaway-media',
    displayName: 'Guitarra Cutaway Gama Media',
    categories: ['guitarras', 'acustica', 'media', 'cutaway', 'nylon'],
    price: 289990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 10,
    sku: 'GCE001',
    name: 'Guitarra-cutaway-media-electroacústica',
    displayName: 'Guitarra Cutaway Gama Media Electroacústica',
    categories: ['guitarras', 'electroacustica', 'media', 'cutaway', 'nylon'],
    price: 349990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 11,
    sku: 'GCE002',
    name: 'Guitarra-cutaway-media-electroacústica',
    displayName: 'Guitarra Cutaway Gama Media Electroacústica',
    categories: ['guitarras', 'electroacustica', 'media', 'cutaway', 'nylon'],
    price: 369990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 12,
    sku: 'GC004',
    name: 'Guitarra-cutaway-media-cuerdas-metálicas',
    displayName: 'Guitarra Cutaway Gama Media Cuerdas Metálicas',
    categories: ['guitarras', 'acustica', 'media', 'cutaway', 'metalica'],
    price: 329990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 13,
    sku: 'GC005',
    name: 'Guitarra-cutaway-media-cuerdas-metálicas',
    displayName: 'Guitarra Cutaway Gama Media Cuerdas Metálicas',
    categories: ['guitarras', 'acustica', 'media', 'cutaway', 'metalica'],
    price: 329990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 14,
    sku: 'GC006',
    name: 'Guitarra-cutaway-media-cuerdas-metálicas',
    displayName: 'Guitarra Cutaway Gama Media Cuerdas Metálicas',
    categories: ['guitarras', 'acustica', 'media', 'cutaway', 'metalica'],
    price: 329990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 15,
    sku: 'GCE003',
    name: 'Guitarra-cutaway-media-cuerdas-metálicas-electroacústica',
    displayName: 'Guitarra Cutaway Gama Media Cuerdas Metálicas Electracústca',
    categories: ['guitarras', 'electroacustica', 'media', 'cutaway', 'metalica'],
    price: 389990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 16,
    sku: 'GCE004',
    name: 'Guitarra-cutaway-media-cuerdas-metálicas-electroacústica',
    displayName: 'Guitarra Cutaway Gama Media Cuerdas Metálicas Electracústca',
    categories: ['guitarras', 'electroacustica', 'media', 'cutaway', 'metalica'],
    price: 399990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 17,
    sku: 'GAM001',
    name: 'Guitarra-acústica-media',
    displayName: 'Guitarra Acústica Gama Media',
    categories: ['guitarras', 'acustica', 'media', 'tradicional', 'nylon'],
    price: 269990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 18,
    sku: 'GAM002',
    name: 'Guitarra-acústica-media',
    displayName: 'Guitarra Acústica Gama Media',
    categories: ['guitarras', 'acustica', 'media', 'tradicional', 'nylon'],
    price: 269990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 19,
    sku: 'GAM003',
    name: 'Guitarra-acústica-media',
    displayName: 'Guitarra Acústica Gama Media',
    categories: ['guitarras', 'acustica', 'media', 'tradicional', 'nylon'],
    price: 269990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 20,
    sku: 'GEM001',
    name: 'Guitarra-electroacústica-media',
    displayName: 'Guitarra Electroacústica Gama Media',
    categories: ['guitarras', 'electroacustica', 'media', 'tradicional', 'nylon'],
    price: 329990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 21,
    sku: 'GEM002',
    name: 'Guitarra-electroacústica-media',
    displayName: 'Guitarra Electroacústica Gama Media',
    categories: ['guitarras', 'electroacustica', 'media', 'tradicional', 'nylon'],
    price: 349990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 22,
    sku: 'GAP001',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/AcusticaPro1.png',
    images: [
      '/images/AcusticaPro1.png',
      '/images/AcusticaPro2.png',
      '/images/AcusticaPro3.png',
      '/images/AcusticaPro4.png'
    ],
    description: null,
    features: []
  },
  {
    id: 23,
    sku: 'GAP002',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/GAP002(1).png',
    images: [
      '/images/GAP002(1).png',
      '/images/GAP002(2).png',
      '/images/GAP002(3).png',
      '/images/GAP002(4).png',
    ],
    description: null,
    features: []
  },
  {
    id: 24,
    sku: 'GAP003',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/GAP003(1).png',
    images: [
      '/images/GAP003(1).png',
      '/images/GAP003(2).png',
      '/images/GAP003(3).png',
      '/images/GAP003(4).png',
    ],
    description: null,
    features: []
  },
  {
    id: 64,
    sku: 'GAP004',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/GAP004(1).png',
    images: [
      '/images/GAP004(1).png',
      '/images/GAP004(2).png',
      '/images/GAP004(3).png',
      '/images/GAP004(4).png',
    ],
    description: null,
    features: []
  },
  {
    id: 65,
    sku: 'GAP005',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/GAP005(1).png',
    images: [
      '/images/GAP005(1).png',
      '/images/GAP005(2).png',
      '/images/GAP005(3).png',
      '/images/GAP005(4).png',
    ],
    description: null,
    features: []
  },
  {
    id: 67,
    sku: 'GAP006',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/GAP006(1).png',
    images: [
      '/images/GAP006(1).png',
      '/images/GAP006(2).png',
      '/images/GAP006(3).png',
      '/images/GAP006(4).png',
    ],
    description: null,
    features: []
  },
  {
    id: 68,
    sku: 'GAP007',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/GAP007(1).png',
    images: [
      '/images/GAP007(1).png',
      '/images/GAP007(2).png',
      '/images/GAP007(3).png',
      '/images/GAP007(4).png',
      '/images/GAP007(5).png',
    ],
    description: null,
    features: []
  },
  {
    id: 69,
    sku: 'GAP008',
    name: 'Guitarra-acústica-profesional',
    displayName: 'Guitarra Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'tradicional', 'nylon'],
    price: 489990,
    image: '/images/GAP008(1).png',
    images: [
      '/images/GAP008(1).png',
      '/images/GAP008(2).png',
      '/images/GAP008(3).png',
    ],
    description: null,
    features: []
  },
  {
    id: 25,
    sku: 'GEP001',
    name: 'Guitarra-electroacústica-profesional',
    displayName: 'Guitarra Electroacústica Gama Profesional',
    categories: ['guitarras', 'electroacustica', 'profesional', 'tradicional', 'nylon'],
    price: 569990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 26,
    sku: 'GEP002',
    name: 'Guitarra-electroacústica-profesional',
    displayName: 'Guitarra Electroacústica Gama Profesional',
    categories: ['guitarras', 'electroacustica', 'profesional', 'tradicional', 'nylon'],
    price: 599990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 27,
    sku: 'GCAP001',
    name: 'Guitarra-cutaway-acústica-profesional',
    displayName: 'Guitarra Cutaway Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'cutaway', 'nylon'],
    price: 499990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 28,
    sku: 'GCAP002',
    name: 'Guitarra-cutaway-acústica-profesional',
    displayName: 'Guitarra Cutaway Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'cutaway', 'nylon'],
    price: 499990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 29,
    sku: 'GCAP003',
    name: 'Guitarra-cutaway-acústica-profesional',
    displayName: 'Guitarra Cutaway Acústica Gama Profesional',
    categories: ['guitarras', 'acustica', 'profesional', 'cutaway', 'nylon'],
    price: 499990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 30,
    sku: 'GCEP001',
    name: 'Guitarra-cutaway-electroacústica-profesional',
    displayName: 'Guitarra Cutaway Electroacústica Gama Profesional',
    categories: ['guitarras', 'electroacustica', 'profesional', 'cutaway', 'nylon'],
    price: 579990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 31,
    sku: 'GCEP002',
    name: 'Guitarra-cutaway-electroacústica-profesional',
    displayName: 'Guitarra Cutaway Electroacústica Gama Profesional',
    categories: ['guitarras', 'electroacustica', 'profesional', 'cutaway', 'nylon'],
    price: 599990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 32,
    sku: 'GD001',
    name: 'Guitarra-didactica',
    displayName: 'Guitarra Didactica para Niños',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 109990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 33,
    sku: 'GD002',
    name: 'Guitarra-didactica',
    displayName: 'Guitarra Didactica para Niños',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 109990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 34,
    sku: 'GD003',
    name: 'Guitarra-didactica',
    displayName: 'Guitarra Didactica para Niños',
    categories: ['guitarras', 'acustica', 'principiante', 'tradicional', 'nylon'],
    price: 109990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 35,
    sku: 'CVMA001',
    name: 'Cuatro-venezolano-gama-media-acústico',
    displayName: 'Cuatro Venezolano Gama Media Acústico',
    categories: ['cuatroVenezolano', 'acustica', 'media', 'nylon'],
    price: 189990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 36,
    sku: 'CVPA001',
    name: 'Cuatro-venezolano-gama-profesional-acústico',
    displayName: 'Cuatro Venezolano Gama Profesional Acústico',
    categories: ['cuatroVenezolano', 'acustica', 'profesional', 'nylon'],
    price: 279990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 37,
    sku: 'CVPE001',
    name: 'Cuatro-venezolano-gama-profesional-electroacústico',
    displayName: 'Cuatro Venezolano Gama Profesional Electroacústico',
    categories: ['cuatroVenezolano', 'electroacustica', 'profesional', 'nylon'],
    price: 329990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 38,
    sku: 'CVMA001',
    name: 'Cuatro-venezolano-gama-profesional-electroacústico',
    displayName: 'Cuatro Venezolano Gama Profesional Electroacústico',
    categories: ['cuatroVenezolano', 'electroacustica', 'profesional', 'nylon'],
    price: 329990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 39,
    sku: 'UM001',
    name: 'Ukelele-tenor-gama-media',
    displayName: 'Ukelele Tenor Gama Media',
    categories: ['ukeleleTenor', 'acustica', 'media', 'nylon'],
    price: 139990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 66,
    sku: 'UP001',
    name: 'Ukelele-tenor-gama-profesional',
    displayName: 'Ukelele Tenor Gama Profesional',
    categories: ['ukeleleTenor', 'acustica', 'profesional', 'nylon'],
    price: 209990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 40,
    sku: 'TCMA001',
    name: 'Tres-cubano-gama-media-acústico',
    displayName: 'Tres Cubano Gama Media Acústico',
    categories: ['tresCubano', 'acustica', 'media', 'nylon'],
    price: 279990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 41,
    sku: 'TCPA001',
    name: 'Tres-cubano-gama-profesional-acústico',
    displayName: 'Tres Cubano Gama Profesional Acústico',
    categories: ['tresCubano', 'acustica', 'profesional', 'nylon'],
    price: 389990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 42,
    sku: 'TCME001',
    name: 'Tres-cubano-gama-media-electroacústico',
    displayName: 'Tres Cubano Gama Media Electrocústico',
    categories: ['tresCubano', 'electroacustica', 'media', 'nylon'],
    price: 359990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 43,
    sku: 'TCME002',
    name: 'Tres-cubano-gama-media-electroacústico',
    displayName: 'Tres Cubano Gama Media Electrocústico',
    categories: ['tresCubano', 'electroacustica', 'media', 'nylon'],
    price: 389990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 44,
    sku: 'TCPE001',
    name: 'Tres-cubano-gama-profesional-electroacústico',
    displayName: 'Tres Cubano Gama Profesional Electrocústico',
    categories: ['tresCubano', 'electroacustica', 'profesional', 'nylon'],
    price: 499990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 45,
    sku: 'MA001',
    name: 'Manolina-gama-media-acústica',
    displayName: 'Mandolina Gama Media Acústica',
    categories: ['mandolina', 'acustica', 'media', 'nylon'],
    price: 239990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 46,
    sku: 'MA002',
    name: 'Manolina-gama-media-acústica',
    displayName: 'Mandolina Gama Media Acústica',
    categories: ['mandolina', 'acustica', 'media', 'nylon'],
    price: 259990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 47,
    sku: 'ME001',
    name: 'Manolina-gama-media-electroacústica',
    displayName: 'Mandolina Gama Media Electroacústica',
    categories: ['mandolina', 'electroacustica', 'media', 'nylon'],
    price: 299990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 48,
    sku: 'MPA001',
    name: 'Manolina-gama-profesional-acústica',
    displayName: 'Mandolina Gama Profesional Acústica',
    categories: ['mandolina', 'acustica', 'profesional', 'nylon'],
    price: 349990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 49,
    sku: 'MPA002',
    name: 'Manolina-gama-profesional-acústica',
    displayName: 'Mandolina Gama Profesional Acústica',
    categories: ['mandolina', 'acustica', 'profesional', 'nylon'],
    price: 349990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 50,
    sku: 'MPA003',
    name: 'Manolina-gama-profesional-acústica',
    displayName: 'Mandolina Gama Profesional Acústica',
    categories: ['mandolina', 'acustica', 'profesional', 'nylon'],
    price: 349990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 51,
    sku: 'MPA004',
    name: 'Manolina-gama-profesional-acústica',
    displayName: 'Mandolina Gama Profesional Acústica',
    categories: ['mandolina', 'acustica', 'profesional', 'nylon'],
    price: 349990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 52,
    sku: 'MPE001',
    name: 'Manolina-gama-profesional-electroacústica',
    displayName: 'Mandolina Gama Profesional Electrocústica',
    categories: ['mandolina', 'electroacustica', 'profesional', 'nylon'],
    price: 399990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 53,
    sku: 'MPE002',
    name: 'Manolina-gama-profesional-electroacústica',
    displayName: 'Mandolina Gama Profesional Electrocústica',
    categories: ['mandolina', 'electroacustica', 'profesional', 'nylon'],
    price: 399990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 54,
    sku: 'ESP001',
    name: 'Guitarra-profesional-electroacústica',
    displayName: 'Gama Profesional Electroacústica',
    categories: ['guitarra', 'electroacustica', 'profesional', 'nylon', 'especial'],
    price: 799990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 55,
    sku: 'ESP002',
    name: 'Guitarra-profesional-electroacústica',
    displayName: 'Gama Profesional Electroacústica',
    categories: ['guitarra', 'electroacustica', 'profesional', 'nylon', 'especial'],
    price: 669990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 56,
    sku: 'ESP003',
    name: 'Guitarra-cuerdas-metálicas-electroacustica',
    displayName: 'Guitarra Tradicional Cuerdas Metálicas Electroacústica',
    categories: ['guitarra', 'electroacustica', 'profesional', 'metalicas', 'especial'],
    price: 389990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 57,
    sku: 'ESP004',
    name: 'Guitarra-viajera-estilo-martin',
    displayName: 'Guitarra Viajera Estilo Martin',
    categories: ['guitarra', 'electroacustica', 'profesional', 'nylon', 'especial'],
    price: 599990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 58,
    sku: 'ESP005',
    name: 'Guitarra-cutaway-glitter',
    displayName: 'Guitarra Cutaway Con Glitter',
    categories: ['guitarra', 'acustica', 'media', 'nylon', 'especial'],
    price: 599990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 59,
    sku: 'ESP006',
    name: 'Guitarra-didáctica-arcoíris',
    displayName: 'Guitarra Didactica Para Niños Diseño Arcoíris',
    categories: ['guitarra', 'acustica', 'principiante', 'nylon', 'especial'],
    price: 159990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 60,
    sku: 'ESP007',
    name: 'Tiple-colombinao-electroacústico',
    displayName: 'Tiple Colombiano Electroacústico',
    categories: ['electroacustica', 'media', 'nylon', 'especial'],
    price: 389990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 61,
    sku: 'ESP008',
    name: 'Guitarra-Folk-Country',
    displayName: 'Guitarra Folk Country',
    categories: ['acustica', 'profesional', 'metalica', 'especial'],
    price: 489990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 62,
    sku: 'ESP009',
    name: 'Guitarra-3/4',
    displayName: 'Guitarra 3/4',
    categories: ['electroacustica', 'media', 'metalica', 'especial'],
    price: 399990,
    image: 'null',
    description: null,
    features: []
  },
  {
    id: 63,
    sku: 'ESP010',
    name: 'Guitarra-Cutaway-Jacarandá',
    displayName: 'Guitarra Cutaway En Maderas de Jacarandá',
    categories: ['acustica', 'media', 'nylon', 'especial'],
    price: 289990,
    image: 'null',
    description: null,
    features: []
  },
];
