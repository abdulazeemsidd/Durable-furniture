$(document).ready(function () {

  let bedroomContainer = $('.bedroom');
  let wardrobeContainer = $('.bedroom-wardrobes');
  let tablesContainer = $('.bedroom-tables');
  let chairsContainer = $('.bedroom-chairs');
  let dressersContainer = $('.bedroom-dressers');
  let bedsContainer = $('.bedroom-beds');


  let bedroom = [];
  let wardrobeArray = [
    [
      {
        imgSrc: ['pics/products/bedroom/wardrobe2.webp', 'pics/products/bedroom/wardrobe2-alt.webp'],
        name: 'Savior 2 Door Wardrobe',
        fullname: 'Savior 2 Door Wardrobe - Special Offer',
        category: 'wardrobe',
        price: {
          original: 115000,
          discounted: 75000
        },
        description: 'The Savior 2 Door Wardrobe is a simple and stylish 2-door bedroom wardrobe that combines practical storage with a clean design. It’s designed to store clothing, accessories, and other essentials neatly behind two full-height doors'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe3.webp', 'pics/products/bedroom/wardrobe3-alt.webp', 'pics/products/bedroom/wardrobe3-alt-2.webp'],
        name: 'Novak 2 Door Wardrobe ',
        fullname: 'Novak 2 Door Wardrobe S4049/1003',
        category: 'wardrobe',
        price: {
          original: 155000,
          discounted: 115000
        },
        description: 'The Novak 2 Door Wardrobe is a functional and slightly more feature-rich wardrobe that offers organized space for clothes and daily items.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe4.webp', 'pics/products/bedroom/wardrobe4-alt.webp', 'pics/products/bedroom/wardrobe4-alt-2.webp'],
        name: 'Colvin Wardrobe',
        fullname: 'Colvin Wardrobe',
        category: 'wardrobe',
        price: {
          original: 185000,
          discounted: 140000
        },
        description: 'The Colvin Wardrobe is a sleek storage unit with clean lines and ample hanging space, perfect for organized bedrooms. Its minimalist design suits modern interiors while keeping clothes and essentials tidy.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe5.webp', 'pics/products/bedroom/wardrobe5-alt.webp'],
        name: 'Parker 3 Door Wardrobe(Walnut)',
        fullname: 'Parker 3 Door Wardrobe(Walnut)',
        category: 'wardrobe',
        price: {
          original: 285000,
          discounted: 200000
        },
        description: 'The Parker 3 Door Wardrobe in walnut finish offers generous storage with three doors, combining spacious hanging areas and shelving. Its warm wood tone and sturdy build make it ideal for both classic and contemporary bedrooms.'
      },
    ],
    [
      {
        imgSrc: ['pics/products/bedroom/wardrobe6.webp', 'pics/products/bedroom/wardrobe6-alt.webp'],
        name: 'Parker Small Sliding Wardrobe',
        fullname: 'Parker Small Sliding Wardrobe',
        category: 'wardrobe',
        price: {
          original: 165000,
          discounted: 125000
        },
        description: 'The Parker Small Sliding Wardrobe features smooth sliding doors for space-saving convenience in compact rooms. It delivers practical storage with a stylish profile, perfect for modern small bedrooms or apartments.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe6.webp', 'pics/products/bedroom/wardrobe6-alt.webp'],
        name: 'Parker Small Sliding Wardrobe',
        fullname: 'Parker Small Sliding Wardrobe',
        category: 'wardrobe',
        price: {
          original: 165000,
          discounted: 125000
        },
        description: 'The Parker Small Sliding Wardrobe features smooth sliding doors for space-saving convenience in compact rooms. It delivers practical storage with a stylish profile, perfect for modern small bedrooms or apartments.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe7.webp', 'pics/products/bedroom/wardrobe7-alt.webp', 'pics/products/bedroom/wardrobe7-alt-2.webp'],
        name: 'Emerson 4 Door Wardrobe',
        fullname: 'Emerson 4 Door Wardrobe HFO-13 (Austin)',
        category: 'wardrobe',
        price: {
          original: 365000,
          discounted: 265000
        },
        description: 'The Emerson 4-Door Wardrobe offers generous storage with four doors, combining hanging space and shelving for organized clothes and accessories. Its clean, versatile design fits well in larger bedrooms while keeping everything easily accessible and neatly stored.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe8.webp', 'pics/products/bedroom/wardrobe8-alt.webp', 'pics/products/bedroom/wardrobe8-alt-2.webp'],
        name: 'Pink Wardrobe',
        fullname: 'Pink Wardrobe',
        category: 'wardrobe',
        price: {
          original: 45000,
          discounted: 25000
        },
        description: 'A pink wardrobe adds a fun and stylish pop of color to any bedroom, blending storage with personality. It provides practical space for clothes and accessories while enhancing the room’s decor with its cheerful,'
      }
    ],
    [
      {
        imgSrc: ['pics/products/bedroom/wardrobe9.webp', 'pics/products/bedroom/wardrobe9-alt.webp'],
        name: 'Ozmane Dark Wardrobe',
        fullname: 'Ozmane Dark Wardrobe',
        category: 'wardrobe',
        price: {
          original: 78000,
          discounted: 50000
        },
        description: 'The Ozmane Dark Wardrobe features a rich, deep finish that brings a bold, elegant look to bedroom storage. It offers roomy compartments and hanging space while making a stylish statement in modern or contemporary interiors.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe10.webp', 'pics/products/bedroom/wardrobe10-alt.webp'],
        name: 'Nautical wardrobe',
        fullname: 'Nautical wardrobe',
        category: 'wardrobe',
        price: {
          original: 45000,
          discounted: 25000
        },
        description: 'The Nautical Wardrobe captures classic seaside charm with ocean-inspired colors and subtle maritime details. Designed for both style and storage, it brings a fresh, breezy coastal feel to any bedroom while keeping essentials neatly organized.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe11.webp', 'pics/products/bedroom/wardrobe11-alt.webp', 'pics/products/bedroom/wardrobe11-alt-2.webp'],
        name: 'Casey Wardrobe',
        fullname: 'Casey Wardrobe',
        category: 'wardrobe',
        price: {
          original: 35000,
          discounted: 30000
        },
        description: 'The Casey Wardrobe is a modern minimalist storage solution with a clean yellow finish, offering simple yet stylish bedroom organization. Its sleek and neutral design makes it easy to blend with contemporary interiors.'
      },
      {
        imgSrc: ['pics/products/bedroom/wardrobe12.webp',],
        name: 'Classic White Wardrobe',
        fullname: 'Classic White Wardrobe',
        category: 'wardrobe',
        price: {
          original: 88000,
          discounted: 49000
        },
        description: 'The Classic White Wardrobe features a timeless, clean white finish that fits easily into any bedroom style. Its simple design offers practical storage while maintaining a bright and elegant look.,'
      }
    ]];
  let tablesArray = [
    [{
      imgSrc: ['pics/products/bedroom/bedroom-table-1.webp', 'pics/products/bedroom/bedroom-table-1-alt.webp', 'pics/products/bedroom/bedroom-table-1-alt-2.webp'],
      name: 'Kade Side Table',
      fullname: 'Kade Side Table',
      price: {
        original: 8500,
        discounted: 6500
      },
      category: 'table',
      description: 'The Kade Side Table is where elegance meets quiet sophistication. Designed with clean lines and a perfectly balanced silhouette, this piece adds effortless charm to any space. Its smooth, finely finished surface highlights the natural beauty of the material, while the sturdy base ensures both stability and durability.'
    },
    {
      imgSrc: ['pics/products/bedroom/bedroom-table-2.webp', 'pics/products/bedroom/bedroom-table-2-alt.webp', 'pics/products/bedroom/bedroom-table-2-alt-2.webp'],
      name: 'Kade Coffee Table',
      fullname: 'Kade Coffee Table',
      category: 'table',
      price: {
        original: 12000,
        discounted: 9000
      },
      description: 'The Kade Coffee Table is a striking centerpiece designed to bring warmth and balance to your living space. With its sleek profile and refined craftsmanship, it effortlessly blends modern simplicity with timeless appeal.'
    },
    {
      imgSrc: ['pics/products/bedroom/table7.webp', 'pics/products/bedroom/table7-alt.webp', 'pics/products/bedroom/table7-alt-2.webp'],
      name: 'Componibili Storage unit',
      fullname: 'Componibili Storage unit',
      category: 'table',
      price: {
        original: 5500,
        discounted: 4000
      },
      description: 'The Componibili Storage Unit is an iconic modular storage solution known for its sleek, rounded design and practical functionality. Originally introduced in 1967, it has become a timeless piece in modern interiors.'
    },
    {
      imgSrc: ['pics/products/bedroom/table6.webp', 'pics/products/bedroom/table6-alt.webp', 'pics/products/bedroom/table6-alt-2.webp'],
      name: 'Sausalito 8-Drawer Dresser',
      fullname: 'Sausalito 8-Drawer Dresser',
      category: 'table',
      price: {
        original: 35000,
        discounted: 19000
      },
      description: 'The Sausalito 8 Drawer Dresser is a stylish and practical storage solution designed to keep your bedroom neat and organized. Featuring eight spacious drawers, it provides plenty of space for clothing, accessories, and personal items while helping maintain a clean, clutter-free room.'
    }], [{
      imgSrc: ['pics/products/bedroom/table3.webp', 'pics/products/bedroom/table3-alt.webp', 'pics/products/bedroom/table3-alt-2.webp'],
      name: 'Zack Nested Tables Set',
      fullname: 'Zack Nested Tables Set',
      category: 'table',
      price: {
        original: 11000,
        discounted: 7000
      },
      description: 'The Zack Nested Tables Set is a smart and stylish furniture solution designed for modern homes. This set usually includes multiple tables of different sizes that can be neatly stacked together when not in use, helping save space while keeping your room organized.'
    },
    {
      imgSrc: ['pics/products/bedroom/table5.webp', 'pics/products/bedroom/table5-alt.webp', 'pics/products/bedroom/table5-alt-2.webp'],
      name: 'Cuddler Table Set',
      fullname: 'Cuddler Table Set',
      category: 'table',
      price: {
        original: 28000,
        discounted: 19000
      },
      description: 'The Cuddler Table Set is a charming and functional furniture duo designed to bring warmth and convenience to your living space. Featuring a pair of perfectly matched tables, this set offers versatile surfaces for drinks, décor, books, or snacks — whether you’re relaxing solo or sharing the moment with someone else.'
    },
    {
      imgSrc: ['pics/products/bedroom/table4.webp', 'pics/products/bedroom/table4-alt.webp', 'pics/products/bedroom/table4-alt-2.webp'],
      name: 'Kent R Series of Nested Tables Set',
      fullname: 'Kent R Series of Nested Tables Set',
      category: 'table',
      price: {
        original: 7500,
        discounted: 4000
      },
      description: 'The Kent R Series of Nested Tables Set is crafted with a smooth finish and sturdy construction, nested tables are perfect for holding décor items, drinks, books, or small accessories. Their versatile design allows you to spread them out when you need extra surface space or stack them together for a clean, minimal look.'
    },
    {
      imgSrc: ['pics/products/bedroom/table8.webp', 'pics/products/bedroom/table8-alt.webp', 'pics/products/bedroom/table8-alt-2.webp'],
      name: 'Oscar Side Table',
      fullname: 'Oscar Side Table',
      category: 'table',
      price: {
        original: 8000,
        discounted: 3000
      },
      description: 'The Oscar Side Table is a modern and compact bedside storage piece with a simple elegant design. It offers convenient storage for bedroom essentials while adding a clean, stylish touch to any room.'
    }],
    [{
      imgSrc: ['pics/products/bedroom/table9.webp', 'pics/products/bedroom/table9-alt.webp', 'pics/products/bedroom/table9-alt-2.webp'],
      name: 'Kingsley Side Table',
      fullname: 'Kingsley Side Table',
      category: 'table',
      price: {
        original: 15000,
        discounted: 11000
      },
      description: 'The Kingsley Side Table is a modern and elegant bedside storage piece with a strong, premium finish. It provides convenient storage for small bedroom essentials while keeping a classy and balanced bedroom look.'
    },
    {
      imgSrc: ['pics/products/bedroom/table10.webp', 'pics/products/bedroom/table10-alt.webp'],
      name: 'Marigold Side Table - White',
      fullname: 'Marigold Side Table - White',
      category: 'table',
      price: {
        original: 13000,
        discounted: 10000
      },
      description: 'The Marigold Side Table is a modern, compact bedside storage piece with a soft marigold yellow finish. It adds a bright, cheerful touch to bedrooms while keeping essentials neatly stored and easily accessible.'
    },],
  ];
  let dressersArray = [[
    {
      imgSrc: ['pics/products/bedroom/mirror1.webp', 'pics/products/bedroom/mirror1-alt.webp'],
      name: 'Simple Mirror',
      fullname: 'Simple Mirror',
      category: 'dresser',
      price: {
        original: 18000,
        discounted: 10000
      },
      description: 'A sleek and simple mirror designed to blend effortlessly into any space. Its clean lines and minimal frame make it a timeless addition to bedrooms, hallways, or dressing areas.'
    },
    {
      imgSrc: ['pics/products/bedroom/dresser1.webp', 'pics/products/bedroom/dresser1-alt.webp', 'pics/products/bedroom/dresser1-alt-2.webp'],
      name: 'Savior Dresser',
      fullname: 'Savior Dresser',
      category: 'dresser',
      price: {
        original: 25000,
        discounted: 18000
      },
      description: 'The Savior Dresser combines clean design with everyday functionality, offering spacious drawers to keep your essentials neatly organized. Its refined finish and sturdy build make it a stylish and practical addition to any bedroom space.'
    },
    {
      imgSrc: ['pics/products/bedroom/mirror2.webp', 'pics/products/bedroom/mirror2-alt.webp', 'pics/products/bedroom/mirror2-alt-2.webp'],
      name: 'Ramcy Mirror',
      fullname: 'Ramcy Mirror',
      category: 'dresser',
      price: {
        original: 33000,
        discounted: 21000
      },
      description: 'The Ramcy Mirror features a sleek silhouette with a smooth, polished finish that enhances any room’s natural light. Its minimalist design makes it a versatile accent piece for both modern and classic interiors.'
    },
    {
      imgSrc: ['pics/products/bedroom/dresser3.webp', 'pics/products/bedroom/dresser3-alt.webp', 'pics/products/bedroom/dresser3-alt-2.webp'],
      name: 'Remington Dresser',
      fullname: 'Remington Dresser',
      category: 'dresser',
      price: {
        original: 69000,
        discounted: 33000
      },
      description: 'The Remington Dresser blends modern elegance with practical storage, offering generously sized drawers for everyday essentials. Its sleek finish and sturdy construction make it a timeless addition to any bedroom setting.'
    },
  ], [
    {
      imgSrc: ['pics/products/bedroom/dresser8.webp', 'pics/products/bedroom/dresser8-alt.webp', 'pics/products/bedroom/dresser8-alt-2.webp'],
      name: 'Harry Dresser',
      fullname: 'Harry Dresser',
      category: 'dresser',
      price: {
        original: 58000,
        discounted: 48000
      },
      description: 'The Harry Dresser features a clean, modern design with spacious drawers for convenient and organized storage. Its smooth finish and simple structure make it a practical and stylish addition to any bedroom.'
    },
    {
      imgSrc: ['pics/products/bedroom/dresser2.webp', 'pics/products/bedroom/dresser2-alt.webp', 'pics/products/bedroom/dresser2-alt-2.webp'],
      name: 'Shane Dresser',
      fullname: 'Shane Dresser',
      category: 'dresser',
      price: {
        original: 39000,
        discounted: 28000
      },
      description: 'The Shane Dresser offers a perfect balance of simplicity and functionality, featuring spacious drawers for effortless organization. Its clean design and smooth finish make it a versatile piece for any modern bedroom.'
    },
    {
      imgSrc: ['pics/products/bedroom/dresser4.webp', 'pics/products/bedroom/dresser4-alt.webp'],
      name: 'Novak X Dresser',
      fullname: 'Novak X Dresser Small',
      category: 'dresser',
      price: {
        original: 45000,
        discounted: 30000
      },
      description: 'The Novak X Dresser showcases a bold, contemporary design with clean lines and a refined finish. Built for both style and storage, it offers spacious drawers to keep your bedroom organized and effortlessly modern.'
    },
    {
      imgSrc: ['pics/products/bedroom/dresser5.webp'],
      name: 'Ozmane Dark Tune Dresser',
      fullname: 'Ozmane Dark Tune Dresser',
      category: 'dresser',
      price: {
        original: 50000,
        discounted: 48000
      },
      description: 'The Ozmane Dark Tune Dresser features a rich, deep finish that adds warmth and sophistication to your bedroom. With spacious drawers and a sleek design, it offers both elegance and practical storage in one refined piece.'
    },
  ],
  [
    {
      imgSrc: ['pics/products/bedroom/dresser6.webp', 'pics/products/bedroom/dresser6-alt.webp', 'pics/products/bedroom/dresser6-alt-2.webp'],
      name: 'Eden Dresser with mirror',
      fullname: 'Eden Dresser with mirror',
      category: 'dresser',
      price: {
        original: 44000,
        discounted: 31000
      },
      description: 'The Eden Dresser with Mirror combines elegant storage with a beautifully framed mirror for a complete bedroom centerpiece. Its spacious drawers and refined finish offer both functionality and timeless charm.'
    },
    {
      imgSrc: ['pics/products/bedroom/dresser7.webp', 'pics/products/bedroom/dresser7-alt.webp', 'pics/products/bedroom/dresser7-alt-2.webp'],
      name: 'Oxford Dresser',
      fullname: 'Oxford Dresser',
      category: 'dresser',
      price: {
        original: 30000,
        discounted: 26000
      },
      description: 'The Oxford Dresser blends classic charm with modern practicality, featuring spacious drawers for effortless organization. Its refined design and smooth finish make it a timeless addition to any bedroom interior.'
    },
    {
      imgSrc: ['pics/products/bedroom/mirror3.webp', 'pics/products/bedroom/mirror3-alt.webp', 'pics/products/bedroom/mirror3-alt-2.webp'],
      name: 'Oafleaf Mirror',
      fullname: 'Oafleaf Mirror',
      category: 'dresser',
      price: {
        original: 53000,
        discounted: 33000
      },
      description: 'The Oafleaf Mirror features a sleek, nature-inspired design with a smooth finish that adds subtle elegance to any space. Its versatile style makes it a perfect decorative accent for modern or minimalist interiors.'
    },
    {
      imgSrc: ['pics/products/bedroom/mirror4.webp', 'pics/products/bedroom/mirror4-alt.webp', 'pics/products/bedroom/mirror4-alt-2.webp'],
      name: 'RIA Wall Mirror',
      fullname: 'RIA Wall Mirror – Modern Full-Length Arch Mirror with Wooden Frame',
      category: 'dresser',
      price: {
        original: 57000,
        discounted: 34000
      },
      description: 'The RIA Wall Mirror features a graceful full-length arch design that adds elegance and depth to any room. Framed in warm wood, it blends modern style with natural charm, making it a perfect statement piece for bedrooms, hallways, or dressing areas.'
    },
  ]];
  let bedsArray = [
    [{
      imgSrc: ['pics/products/bedroom/bed1.webp', 'pics/products/bedroom/bed1-alt.webp', 'pics/products/bedroom/bed1-alt-2.webp'],
      name: 'Plato King Sized Bed',
      fullname: 'Plato King Sized Bed',
      category: 'bed',
      price: {
        original: 45000,
        discounted: 25000
      },
      description: 'The Plato King Sized Bed is the ultimate expression of luxury and comfort. Designed to command attention, its grand silhouette and refined detailing create a stunning focal point in any bedroom.'
    },
    {
      imgSrc: ['pics/products/bedroom/bed2.webp', 'pics/products/bedroom/bed2-alt.webp', 'pics/products/bedroom/bed2-alt-2.webp'],
      name: 'Vibrant King Sized Bed',
      fullname: 'Vibrant King Sized Bed',
      category: 'bed',
      price: {
        original: 66000,
        discounted: 30000
      },
      description: 'The Vibrant King Sized Bed is a bold celebration of color, comfort, and contemporary design. Crafted to energize your bedroom, its striking presence and dynamic detailing instantly transform the space into something unforgettable.'
    },
    {
      imgSrc: ['pics/products/bedroom/bed3.webp', 'pics/products/bedroom/bed3-alt.webp', 'pics/products/bedroom/bed3-alt-2.webp'],
      name: 'Mike King Sized Bed',
      fullname: 'Mike King Sized Bed',
      category: 'bed',
      price: {
        original: 70000,
        discounted: 45000
      },
      description: 'The Mike King Sized Bed combines timeless elegance with a clean, understated design. Its simple silhouette and smooth finish create a calm and inviting atmosphere, making it a perfect fit for modern and minimalist bedrooms.'
    },
    {
      imgSrc: ['pics/products/bedroom/bed4.webp', 'pics/products/bedroom/bed4-alt.webp', 'pics/products/bedroom/bed4-alt-2.webp'],
      name: 'Jack King/Queen Sized Bed',
      fullname: 'Jack King/Queen Sized Bed',
      category: 'bed',
      price: {
        original: 60000,
        discounted: 40000
      },
      description: 'The Jack King/Queen Sized Bed is designed with simplicity, comfort, and practicality in mind. Its clean lines and balanced structure make it a perfect fit for both modern and classic interiors.'
    }], [


      {
        imgSrc: ['pics/products/bedroom/bed6.webp', 'pics/products/bedroom/bed6-alt.webp', 'pics/products/bedroom/bed6-alt-2.webp'],
        name: 'Marq King Sized Bed With Side Tables',
        fullname: 'Marq King Sized Bed With Side Tables',
        category: 'bed',
        price: {
          original: 73000,
          discounted: 49000
        },
        description: 'The Marq King Sized Bed brings a touch of European-inspired elegance to your bedroom. With its graceful design and balanced proportions, it creates a serene and sophisticated atmosphere.'
      },
      {
        imgSrc: ['pics/products/bedroom/bed5.webp', 'pics/products/bedroom/bed5-alt.webp', 'pics/products/bedroom/bed5-alt-2.webp'],
        name: 'Vincent King Sized Bed With Side Tables',
        fullname: 'Vincent King Sized Bed With Side Tables',
        category: 'bed',
        price: {
          original: 69000,
          discounted: 49000
        },
        description: 'The Vincent King Sized Bed brings a touch of European-inspired elegance to your bedroom. With its graceful design and balanced proportions, it creates a serene and sophisticated atmosphere.'
      },
      {
        imgSrc: ['pics/products/bedroom/bed7.webp', 'pics/products/bedroom/bed7-alt.webp', 'pics/products/bedroom/bed7-alt-2.webp'],
        name: 'Ozmane Dark tune Set',
        fullname: 'Ozmane Dark tune Set (bed with sides, dresser and mirror)',
        category: 'bed',
        price: {
          original: 180000,
          discounted: 90000
        },
        description: 'The Ozmane Dark Tune Set is a complete bedroom furniture collection designed for elegance and functionality. This set includes a bed with side tables, a dresser, and a matching mirror, all finished in a rich dark tone that adds warmth and sophistication to your bedroom.'
      },
      {
        imgSrc: ['pics/products/bedroom/bed8.webp', 'pics/products/bedroom/bed8-alt.webp'],
        name: 'Ozmane Dark tune Bed (set)',
        fullname: 'Ozmane Dark tune king size Bed with two side table',
        category: 'bed',
        price: {
          original: 150000,
          discounted: 75000
        },
        description: 'The Ozmane Dark Tune King Size Bed with Two Side Tables is a stylish and practical bedroom centerpiece. Designed with a rich dark finish, it brings a warm, modern elegance to any bedroom interior. \n Built with a strong and durable frame, the king-size bed provides spacious comfort and reliable support for restful sleep. The two matching side tables add convenience, giving you space to keep essentials like lamps, books, or personal items within easy reach.'
      },
    ], [
      {
        imgSrc: ['pics/products/bedroom/bed11.webp', 'pics/products/bedroom/bed11-alt.webp', 'pics/products/bedroom/bed11-alt-2.webp'],
        name: 'Ethereal Queen-Sized Bed',
        fullname: 'Ethereal Queen-Sized Bed With Side Table',
        category: 'bed',
        price: {
          original: 350000,
          discounted: 180000
        },
        description: 'The Ethereal Queen Bed features a dreamy, soft aesthetic with elegant finishes and light, airy design elements. Perfect for modern bedrooms, it creates a calm and graceful sleeping space.'
      },
      {
        imgSrc: ['pics/products/bedroom/bed12.webp', 'pics/products/bedroom/bed12-alt.webp', 'pics/products/bedroom/bed12-alt-2.webp'],
        name: 'James Bed Set',
        fullname: 'James Bed Set (Full Bundle)',
        category: 'bed',
        price: {
          original: 350000,
          discounted: 150000
        },
        description: 'The James Bed Set is a modern bedroom furniture set featuring a sturdy bed frame along with matching side tables. It offers a clean, balanced design with practical storage and a contemporary look, making it suitable for simple and stylish bedrooms.'
      },
      {
        imgSrc: ['pics/products/bedroom/bed9.webp', 'pics/products/bedroom/bed9-alt.webp', 'pics/products/bedroom/bed9-alt-2.webp'],
        name: 'Jack Single Bed',
        fullname: 'Jack Single Bed',
        category: 'bed',
        price: {
          original: 35000,
          discounted: 20000
        },
        description: 'The Jack Single Bed is a simple, practical, and comfortable bedding solution designed for everyday use. Its clean and compact design makes it perfect for small bedrooms, guest rooms, or shared spaces.'
      },
      {
        imgSrc: ['pics/products/bedroom/bed10.webp', 'pics/products/bedroom/bed10-alt.webp', 'pics/products/bedroom/bed10-alt-2.webp'],
        name: 'Sausalito Cane Bed',
        fullname: 'Sausalito Cane Bed',
        category: 'bed',
        price: {
          original: 95000,
          discounted: 45000
        },
        description: 'The Sausalito Cane Bed brings natural texture and relaxed elegance to your bedroom. With its stylish cane detailing and smooth finish, this bed combines timeless charm with contemporary design — perfect for creating a warm, inviting atmosphere.'
      },
    ]];
  let chairsArray = [[
    {
      imgSrc: ['pics/products/bedroom/sofa1.webp', 'pics/products/bedroom/sofa1-alt.webp', 'pics/products/bedroom/sofa1-alt-2.webp'],
      name: 'Billy 2 Seater Sofa',
      fullname: 'Billy 2 Seater Sofa',
      category: 'bedroom-chair',
      price: {
        original: 55000,
        discounted: 33000
      },
      description: 'The Branded 2 Seater Sofa is the perfect blend of comfort, quality, and modern style. Designed to elevate any living space, its compact yet inviting form makes it ideal for apartments, lounges, or cozy seating areas.'
    },
    {
      imgSrc: ['pics/products/bedroom/sofa2.webp', 'pics/products/bedroom/sofa2-alt.webp', 'pics/products/bedroom/sofa2-alt-2.webp'],
      name: 'Lazo Executive Sofa Set',
      fullname: 'Lazo Executive Sofa Set – Premium Leatherette Office Sofa in Black (Single Seater, 2-Seater, or 4-Seater Bundle)',
      category: 'bedroom-chair',
      price: {
        original: 19000,
        discounted: 12000
      },
      description: 'The Lazo Executive Sofa Set – Premium Leatherette Office Sofa is designed to bring professionalism, comfort, and modern luxury to office spaces. Finished in high-quality black leatherette upholstery, this sofa set creates a strong executive presence while maintaining a clean and sophisticated look.'
    },
    {
      imgSrc: ['pics/products/bedroom/chair1.webp', 'pics/products/bedroom/chair1-alt.webp'],
      name: 'Omni Sofa Chair',
      fullname: 'Omni Sofa Chair',
      category: 'bedroom-chair',
      price: {
        original: 45000,
        discounted: 41000
      },
      description: 'The Omni Sofa Chair offers a comfortable, compact seating solution with a modern and versatile design. Its soft cushioning and sturdy frame make it perfect for relaxing in bedrooms, lounges, or study spaces.'
    },
    {
      imgSrc: ['pics/products/bedroom/chair2.webp', 'pics/products/bedroom/chair2-alt.webp'],
      name: 'Moda Chair',
      fullname: 'Moda Chair',
      category: 'bedroom-chair',
      price: {
        original: 21000,
        discounted: 17000
      },
      description: 'The Moda Chair features a sleek, contemporary design that blends comfort with modern style. Its smooth upholstery and sturdy frame make it a stylish and practical seating choice for any room.'
    }],
  [{
    imgSrc: ['pics/products/bedroom/chair3.webp', 'pics/products/bedroom/chair3-alt.webp', 'pics/products/bedroom/chair3-alt-2.webp'],
    name: 'Alexa Sofa Chair',
    fullname: 'Alexa Sofa Chair',
    category: 'bedroom-chair',
    price: {
      original: 48000,
      discounted: 39000
    },
    description: 'The Alexa Sofa Chair features a stylish, modern design with soft cushioning for comfortable everyday seating. Its elegant finish and sturdy frame make it a great addition to living rooms, bedrooms, or lounges.'
  }],
  ];
  tablesArray.forEach(function (item) {
    createId(item)
    bedroom.push(item);
    generateHtml(item, tablesContainer);
  })
  dressersArray.forEach(function (item) {
    createId(item)
    bedroom.push(item);
    generateHtml(item, dressersContainer);
  })
  bedsArray.forEach(function (item) {
    createId(item)
    bedroom.push(item);
    generateHtml(item, bedsContainer);
  })
  wardrobeArray.forEach(function (item) {
    createId(item)
    bedroom.push(item);
    generateHtml(item, wardrobeContainer);
  })
  chairsArray.forEach(function (item) {
    createId(item);
    bedroom.push(item);
    generateHtml(item, chairsContainer);
  })
  bedroom.forEach(function (item) {
    generateHtml(item, bedroomContainer);
  });
  function createId(item) {
    item.forEach(function (product) {
      product.id = crypto.randomUUID();

    });
  }

  const image = $('.card img');
  let row = $('.row');

  image.on('mouseenter', function (event) {
    const img = event.target;
    bedroom.forEach(function (array) {
      array.forEach(function (product) {
        if (img.id == product.id && product.imgSrc[1]) {
          img.src = product.imgSrc[1]
        }
      });
    })

  })
  image.on('mouseleave', function (event) {
    const img = event.target;
    bedroom.forEach(function (array) {
      array.forEach(function (product) {
        if (img.id == product.id) {
          img.src = product.imgSrc[0]
        }
      });
    })
  })
  const searchButton = $('.search-button');
  const cardTitle = $('.card-title');
  searchButton.click(function () {
    let checker = 0;
    for (let i = 0; i < cardTitle.length; i++) {
      let cardBody = cardTitle[i].parentElement
      let card = cardBody.parentElement;

      if (cardTitle[i].innerText.toUpperCase().indexOf($('#search').val().toUpperCase()) > -1 && $("#search").val()) {
        card.style.display = 'flex';
        checker++;
      } else {
        card.style.display = 'none';
      }
      // for (let i = 0; i < row.length; i++) {
      //   const seperateRow = row[i];
      //   const firstCard = seperateRow.children[0];
      //   const secondCard = seperateRow.children[1];
      //   const thirdCard = seperateRow.children[2];
      //   const fourthCard = seperateRow.children[3];

      //   if (firstCard.style.display == 'none') {
      //     seperateRow.style.display = 'none';
      //   }
      // }

      if (checker > 0) {
        $('#not_find_anything').text("");
      } else {
        $('#not_find_anything').text("Product not Found");
      }
    }

  });

  function generateHtml(item, container) {
    if (!item[1]) {
      container.append(`
      <div class="row mt-4">
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[0].imgSrc[0]}" class="card-img-top row-first-card" id=${item[0].id} height="200px" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[0].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[0].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[0].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>
        </div>`
      )
    } else if (!item[2]) {
      container.append(`
      <div class="row mt-4">
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[0].imgSrc[0]}" class="card-img-top row-first-card" id=${item[0].id} height="200px" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[0].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[0].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[0].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[1].imgSrc[0]}" height="200px" class="card-img-top row-second-card" id=${item[1].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[1].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[1].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[1].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div> `
      )
    } else if (!item[3]) {
      container.append(`
      <div class="row mt-4">
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[0].imgSrc[0]}" class="card-img-top row-first-card" height="200px" id=${item[0].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[0].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[0].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[0].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[1].imgSrc[0]}" height="200px" class="card-img-top row-second-card" id=${item[1].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[1].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[1].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[1].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[2].imgSrc[0]}" height="200px" class="card-img-top row-third-card" id=${item[2].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[2].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[2].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[2].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div> 
      </div>
        `);
    } else {
      container.append(`
      <div class="row mt-4">
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[0].imgSrc[0]}" class="card-img-top row-first-card" height="200px" id=${item[0].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[0].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[0].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[0].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[1].imgSrc[0]}" height="200px" class="card-img-top row-second-card" id=${item[1].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[1].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[1].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[1].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>  
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[2].imgSrc[0]}" height="200px" class="card-img-top row-third-card" id=${item[2].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[2].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[2].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[2].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>
        <div class="card me-3" style="width: 15rem;">
          <img src="${item[3].imgSrc[0]}" height="200px" class="card-img-top row-fourth-card" id=${item[3].id} alt="...">
          <div class="card-body">
            <h5 class="card-title">${item[3].name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item[3].price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item[3].price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3">Add to cart</a>
        </div>
        `);
    }
  }
}); 