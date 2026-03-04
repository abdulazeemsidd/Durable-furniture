$(document).ready(function () {
  let bedroomContainer = $('.bedroom');
  let bedroomWardrobeContainer = $('.bedroom-wardrobes');
  let bedroomTablesContainer = $('.bedroom-tables');
  let bedroomChairsContainer = $('.bedroom-chairs');
  let bedroomDressersContainer = $('.bedroom-dressers');
  let bedroomBedsContainer = $('.bedroom-beds');

  let diningRoom = $('.dining-room');
  let diningRoomTables = $('.dining-room-tables');
  let diningRoomCrockery = $('.dining-room-crockery');
  let diningRoomChairs = $('.dining-room-chairs');

  let livingRoom = $('.living-room');
  let livingRoomSofas = $('.living-room-sofas');
  let livingRoomShoeRacks = $('.living-room-shoe-racks');
  let livingRoomOttomans = $('.living-room-ottomans');
  let livingRoomEntertainment = $('.living-room-entertainment');
  let livingRoomConsoles = $('.living-room-consoles');


  let officeRoom = $('.office-room');
  let officeRoomMeeting = $('.office-room-meeting');
  let officeRoomWorkstation = $('.office-room-workstation');
  let officeRoomReception = $('.office-room-reception');
  let officeRoomCredenza = $('.office-room-credenza');
  let officeRoomChairs = $('.office-room-chairs');

  const hamburger = $('#hamburger');
  const navLinks = $('#nav-links');

  hamburger.click(() => {
    navLinks.toggleClass('active');
  });


  let products = [
    //bedroom
    {
      imgSrc: ['../pics/products/bedroom/wardrobe2.webp', '../pics/products/bedroom/wardrobe2-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe3.webp', '../pics/products/bedroom/wardrobe3-alt.webp', '../pics/products/bedroom/wardrobe3-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe4.webp', '../pics/products/bedroom/wardrobe4-alt.webp', '../pics/products/bedroom/wardrobe4-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe5.webp', '../pics/products/bedroom/wardrobe5-alt.webp'],
      name: 'Parker 3 Door Wardrobe(Walnut)',
      fullname: 'Parker 3 Door Wardrobe(Walnut)',
      category: 'wardrobe',
      price: {
        original: 285000,
        discounted: 200000
      },
      description: 'The Parker 3 Door Wardrobe in walnut finish offers generous storage with three doors, combining spacious hanging areas and shelving. Its warm wood tone and sturdy build make it ideal for both classic and contemporary bedrooms.'
    },
    {
      imgSrc: ['../pics/products/bedroom/wardrobe6.webp', '../pics/products/bedroom/wardrobe6-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe6.webp', '../pics/products/bedroom/wardrobe6-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe7.webp', '../pics/products/bedroom/wardrobe7-alt.webp', '../pics/products/bedroom/wardrobe7-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe8.webp', '../pics/products/bedroom/wardrobe8-alt.webp', '../pics/products/bedroom/wardrobe8-alt-2.webp'],
      name: 'Pink Wardrobe',
      fullname: 'Pink Wardrobe',
      category: 'wardrobe',
      price: {
        original: 45000,
        discounted: 25000
      },
      description: 'A pink wardrobe adds a fun and stylish pop of color to any bedroom, blending storage with personality. It provides practical space for clothes and accessories while enhancing the room’s decor with its cheerful,'
    },
    {
      imgSrc: ['../pics/products/bedroom/wardrobe9.webp', '../pics/products/bedroom/wardrobe9-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe10.webp', '../pics/products/bedroom/wardrobe10-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe11.webp', '../pics/products/bedroom/wardrobe11-alt.webp', '../pics/products/bedroom/wardrobe11-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/wardrobe12.webp',],
      name: 'Classic White Wardrobe',
      fullname: 'Classic White Wardrobe',
      category: 'wardrobe',
      price: {
        original: 88000,
        discounted: 49000
      },
      description: 'The Classic White Wardrobe features a timeless, clean white finish that fits easily into any bedroom style. Its simple design offers practical storage while maintaining a bright and elegant look.,'
    },
    {
      imgSrc: ['../pics/products/bedroom/bedroom-table-1.webp', '../pics/products/bedroom/bedroom-table-1-alt.webp', '../pics/products/bedroom/bedroom-table-1-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bedroom-table-2.webp', '../pics/products/bedroom/bedroom-table-2-alt.webp', '../pics/products/bedroom/bedroom-table-2-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/table7.webp', '../pics/products/bedroom/table7-alt.webp', '../pics/products/bedroom/table7-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/table6.webp', '../pics/products/bedroom/table6-alt.webp', '../pics/products/bedroom/table6-alt-2.webp'],
      name: 'Sausalito 8-Drawer Dresser',
      fullname: 'Sausalito 8-Drawer Dresser',
      category: 'table',
      price: {
        original: 35000,
        discounted: 19000
      },
      description: 'The Sausalito 8 Drawer Dresser is a stylish and practical storage solution designed to keep your bedroom neat and organized. Featuring eight spacious drawers, it provides plenty of space for clothing, accessories, and personal items while helping maintain a clean, clutter-free room.'
    },
    {
      imgSrc: ['../pics/products/bedroom/table3.webp', '../pics/products/bedroom/table3-alt.webp', '../pics/products/bedroom/table3-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/table5.webp', '../pics/products/bedroom/table5-alt.webp', '../pics/products/bedroom/table5-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/table4.webp', '../pics/products/bedroom/table4-alt.webp', '../pics/products/bedroom/table4-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/table8.webp', '../pics/products/bedroom/table8-alt.webp', '../pics/products/bedroom/table8-alt-2.webp'],
      name: 'Oscar Side Table',
      fullname: 'Oscar Side Table',
      category: 'table',
      price: {
        original: 8000,
        discounted: 3000
      },
      description: 'The Oscar Side Table is a modern and compact bedside storage piece with a simple elegant design. It offers convenient storage for bedroom essentials while adding a clean, stylish touch to any room.'
    },
    {
      imgSrc: ['../pics/products/bedroom/table9.webp', '../pics/products/bedroom/table9-alt.webp', '../pics/products/bedroom/table9-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/table10.webp', '../pics/products/bedroom/table10-alt.webp'],
      name: 'Marigold Side Table - White',
      fullname: 'Marigold Side Table - White',
      category: 'table',
      price: {
        original: 13000,
        discounted: 10000
      },
      description: 'The Marigold Side Table is a modern, compact bedside storage piece with a soft marigold yellow finish. It adds a bright, cheerful touch to bedrooms while keeping essentials neatly stored and easily accessible.'
    },
    {
      imgSrc: ['../pics/products/bedroom/mirror1.webp', '../pics/products/bedroom/mirror1-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/dresser1.webp', '../pics/products/bedroom/dresser1-alt.webp', '../pics/products/bedroom/dresser1-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/mirror2.webp', '../pics/products/bedroom/mirror2-alt.webp', '../pics/products/bedroom/mirror2-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/dresser3.webp', '../pics/products/bedroom/dresser3-alt.webp', '../pics/products/bedroom/dresser3-alt-2.webp'],
      name: 'Remington Dresser',
      fullname: 'Remington Dresser',
      category: 'dresser',
      price: {
        original: 69000,
        discounted: 33000
      },
      description: 'The Remington Dresser blends modern elegance with practical storage, offering generously sized drawers for everyday essentials. Its sleek finish and sturdy construction make it a timeless addition to any bedroom setting.'
    },
    {
      imgSrc: ['../pics/products/bedroom/dresser8.webp', '../pics/products/bedroom/dresser8-alt.webp', '../pics/products/bedroom/dresser8-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/dresser2.webp', '../pics/products/bedroom/dresser2-alt.webp', '../pics/products/bedroom/dresser2-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/dresser4.webp', '../pics/products/bedroom/dresser4-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/dresser5.webp'],
      name: 'Ozmane Dark Tune Dresser',
      fullname: 'Ozmane Dark Tune Dresser',
      category: 'dresser',
      price: {
        original: 50000,
        discounted: 48000
      },
      description: 'The Ozmane Dark Tune Dresser features a rich, deep finish that adds warmth and sophistication to your bedroom. With spacious drawers and a sleek design, it offers both elegance and practical storage in one refined piece.'
    },
    {
      imgSrc: ['../pics/products/bedroom/dresser6.webp', '../pics/products/bedroom/dresser6-alt.webp', '../pics/products/bedroom/dresser6-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/dresser7.webp', '../pics/products/bedroom/dresser7-alt.webp', '../pics/products/bedroom/dresser7-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/mirror3.webp', '../pics/products/bedroom/mirror3-alt.webp', '../pics/products/bedroom/mirror3-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/mirror4.webp', '../pics/products/bedroom/mirror4-alt.webp', '../pics/products/bedroom/mirror4-alt-2.webp'],
      name: 'RIA Wall Mirror',
      fullname: 'RIA Wall Mirror – Modern Full-Length Arch Mirror with Wooden Frame',
      category: 'dresser',
      price: {
        original: 57000,
        discounted: 34000
      },
      description: 'The RIA Wall Mirror features a graceful full-length arch design that adds elegance and depth to any room. Framed in warm wood, it blends modern style with natural charm, making it a perfect statement piece for bedrooms, hallways, or dressing areas.'
    },
    {
      imgSrc: ['../pics/products/bedroom/bed1.webp', '../pics/products/bedroom/bed1-alt.webp', '../pics/products/bedroom/bed1-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed2.webp', '../pics/products/bedroom/bed2-alt.webp', '../pics/products/bedroom/bed2-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed3.webp', '../pics/products/bedroom/bed3-alt.webp', '../pics/products/bedroom/bed3-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed4.webp', '../pics/products/bedroom/bed4-alt.webp', '../pics/products/bedroom/bed4-alt-2.webp'],
      name: 'Jack King/Queen Sized Bed',
      fullname: 'Jack King/Queen Sized Bed',
      category: 'bed',
      price: {
        original: 60000,
        discounted: 40000
      },
      description: 'The Jack King/Queen Sized Bed is designed with simplicity, comfort, and practicality in mind. Its clean lines and balanced structure make it a perfect fit for both modern and classic interiors.'
    },
    {
      imgSrc: ['../pics/products/bedroom/bed6.webp', '../pics/products/bedroom/bed6-alt.webp', '../pics/products/bedroom/bed6-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed5.webp', '../pics/products/bedroom/bed5-alt.webp', '../pics/products/bedroom/bed5-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed7.webp', '../pics/products/bedroom/bed7-alt.webp', '../pics/products/bedroom/bed7-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed8.webp', '../pics/products/bedroom/bed8-alt.webp'],
      name: 'Ozmane Dark tune Bed (set)',
      fullname: 'Ozmane Dark tune king size Bed with two side table',
      category: 'bed',
      price: {
        original: 150000,
        discounted: 75000
      },
      description: 'The Ozmane Dark Tune King Size Bed with Two Side Tables is a stylish and practical bedroom centerpiece. Designed with a rich dark finish, it brings a warm, modern elegance to any bedroom interior. \n Built with a strong and durable frame, the king-size bed provides spacious comfort and reliable support for restful sleep. The two matching side tables add convenience, giving you space to keep essentials like lamps, books, or personal items within easy reach.'
    },
    {
      imgSrc: ['../pics/products/bedroom/bed11.webp', '../pics/products/bedroom/bed11-alt.webp', '../pics/products/bedroom/bed11-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed12.webp', '../pics/products/bedroom/bed12-alt.webp', '../pics/products/bedroom/bed12-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed9.webp', '../pics/products/bedroom/bed9-alt.webp', '../pics/products/bedroom/bed9-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/bed10.webp', '../pics/products/bedroom/bed10-alt.webp', '../pics/products/bedroom/bed10-alt-2.webp'],
      name: 'Sausalito Cane Bed',
      fullname: 'Sausalito Cane Bed',
      category: 'bed',
      price: {
        original: 95000,
        discounted: 45000
      },
      description: 'The Sausalito Cane Bed brings natural texture and relaxed elegance to your bedroom. With its stylish cane detailing and smooth finish, this bed combines timeless charm with contemporary design — perfect for creating a warm, inviting atmosphere.'
    },
    {
      imgSrc: ['../pics/products/bedroom/sofa1.webp', '../pics/products/bedroom/sofa1-alt.webp', '../pics/products/bedroom/sofa1-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/sofa2.webp', '../pics/products/bedroom/sofa2-alt.webp', '../pics/products/bedroom/sofa2-alt-2.webp'],
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
      imgSrc: ['../pics/products/bedroom/chair1.webp', '../pics/products/bedroom/chair1-alt.webp'],
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
      imgSrc: ['../pics/products/bedroom/chair2.webp', '../pics/products/bedroom/chair2-alt.webp'],
      name: 'Moda Chair',
      fullname: 'Moda Chair',
      category: 'bedroom-chair',
      price: {
        original: 21000,
        discounted: 17000
      },
      description: 'The Moda Chair features a sleek, contemporary design that blends comfort with modern style. Its smooth upholstery and sturdy frame make it a stylish and practical seating choice for any room.'
    },
    {
      imgSrc: ['../pics/products/bedroom/chair3.webp', '../pics/products/bedroom/chair3-alt.webp', '../pics/products/bedroom/chair3-alt-2.webp'],
      name: 'Alexa Sofa Chair',
      fullname: 'Alexa Sofa Chair',
      category: 'bedroom-chair',
      price: {
        original: 48000,
        discounted: 39000
      },
      description: 'The Alexa Sofa Chair features a stylish, modern design with soft cushioning for comfortable everyday seating. Its elegant finish and sturdy frame make it a great addition to living rooms, bedrooms, or lounges.'
    },
    {
      imgSrc: ['../pics/products/bedroom/chair4.webp', '../pics/products/bedroom/chair4-alt.webp', '../pics/products/bedroom/chair4-alt-2.webp'],
      name: 'Bounce Bed Room Chair',
      fullname: 'Bounce Bed Room Chair with Revolving Mechanism',
      category: 'bedroom-chair',
      price: {
        original: 25000,
        discounted: 19000
      },
      description: 'A stylish bounce bedroom chair with a smooth revolving mechanism for effortless 360° movement.Designed for comfort and flexibility, it adds a modern touch while giving you relaxing, cushioned support.'
    },
    {
      imgSrc: ['../pics/products/bedroom/chair5.webp', '../pics/products/bedroom/chair5-alt.webp'],
      name: 'Sover Bedroom Chairs Set',
      fullname: 'Sover Bedroom Chairs Set with Table',
      category: 'bedroom-chair',
      price: {
        original: 61000,
        discounted: 49000
      },
      description: 'A cozy bedroom chair set that includes matching chairs and a stylish table for added convenience. Perfect for relaxing, reading, or enjoying a cup of tea while enhancing your room’s decor.'
    },
    {
      imgSrc: ['../pics/products/bedroom/chair6.webp'],
      name: 'Gap Bed Room Chairs Set',
      fullname: 'Gap Bed Room Chairs Set with Table',
      category: 'bedroom-chair',
      price: {
        original: 49000,
        discounted: 40000
      },
      description: 'A modern bedroom chair set featuring sleek designs and a coordinating table for added style and utility. Ideal for lounging, reading, or casual conversations, it enhances comfort and complements your bedroom decor.'
    },

    //bedroom finished

    // dining room
    {
      imgSrc: ['../pics/products/dining-room/table1.webp', '../pics/products/dining-room/table1-alt.webp', '../pics/products/dining-room/table1-alt-2.webp'],
      name: 'Shane Dining Table',
      fullname: 'Shane Dining Table with 4 ease chairs',
      category: 'dining-table',
      price: {
        original: 81000,
        discounted: 49000
      },
      description: 'Shane Dining Table with 4 Ease Chairs is a modern and functional 4-seater set designed for comfortable everyday dining and small gatherings, combining durability with a sleek, elegant finish. Its compact design, sturdy construction, and comfortable seating make it a perfect addition to any contemporary dining space.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table4.webp', '../pics/products/dining-room/table4-alt.webp', '../pics/products/dining-room/table4-alt-2.webp'],
      name: 'Shane Dining Table',
      fullname: 'Shane 4 Person Dining Table',
      category: 'dining-table',
      price: {
        original: 25000,
        discounted: 19000
      },
      description: 'Shane 4 Person Dining Table is a sleek and modern dining table designed for four people, crafted with durable laminated material and a low-height design for relaxed floor seating. It’s perfect for small spaces and casual gatherings, combining contemporary style with comfort thanks to its included cushions.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table2.webp', '../pics/products/dining-room/table2-alt.webp', '../pics/products/dining-room/table2-alt-2.webp'],
      name: 'Linna Foldable Dining Table',
      fullname: 'Linna Foldable 4 Person Dining Table',
      category: 'dining-table',
      price: {
        original: 53000,
        discounted: 28000
      },
      description: 'Linna Foldable 4 Person Dining Table is a sleek and space-saving foldable dining table set designed for four people, crafted with durable laminated material and low-height design for relaxed floor seating. It’s perfect for small spaces and casual gatherings, combining modern style with comfort thanks to its included cushions.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table3.webp', '../pics/products/dining-room/table3-alt.webp', '../pics/products/dining-room/table3-alt-2.webp'],
      name: 'Muslim 04 Person Dining Table',
      fullname: 'Muslim 04 Person Dining Table with 4 Chairs',
      category: 'dining-table',
      price: {
        original: 38000,
        discounted: 18000
      },
      description: 'Muslim 04 Person Dining Table with 4 Chairs is a modern and functional 4-seater set designed for comfortable everyday dining and small gatherings, combining durability with a sleek, elegant finish. Its compact design, sturdy construction, and comfortable seating make it a perfect addition to any contemporary dining space.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table5.webp', '../pics/products/dining-room/table5-alt.webp'],
      name: 'Gravil Dining Table',
      fullname: 'Gravil 6 Person Dining Table with 6 Ease Chairs',
      category: 'dining-table',
      price: {
        original: 145000,
        discounted: 85000
      },
      description: 'Gravil 6 Person Dining Table with 6 Ease Chairs is a modern and functional 6-seater set designed for comfortable everyday dining and small gatherings, combining durability with a sleek, elegant finish. Its compact design, sturdy construction, and comfortable seating make it a perfect addition to any contemporary dining space.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table6.webp', '../pics/products/dining-room/table6-alt.webp', '../pics/products/dining-room/table6-alt-2.webp'],
      name: 'Savior Dining Table',
      fullname: 'Savior dining with 2 Stool & Bench',
      category: 'dining-table',
      price: {
        original: 73000,
        discounted: 55000
      },
      description: 'Savior dining with 2 Stool & Bench is a modern and functional 6-seater set designed for comfortable everyday dining and small gatherings, combining durability with a sleek, elegant finish. Its compact design, sturdy construction, and comfortable seating make it a perfect addition to any contemporary dining space.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table7.webp', '../pics/products/dining-room/table7-alt.webp', '../pics/products/dining-room/table7-alt-2.webp'],
      name: 'Finn Dining Table',
      fullname: 'Finn dining with 4 Stool',
      category: 'dining-table',
      price: {
        original: 66000,
        discounted: 33000
      },
      description: 'A sleek and contemporary set designed for modern living spaces, the Finn Dining Table with 4 Stools combines clean lines with practical comfort. Crafted with durable materials and a minimalist aesthetic, this dining set is perfect for casual meals, small gatherings, or as a stylish workspace in compact areas.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table8.webp', '../pics/products/dining-room/table8-alt.webp', '../pics/products/dining-room/table8-alt-2.webp'],
      name: 'Harry Dining Table',
      fullname: 'Harry 4 Person Dining Table',
      category: 'dining-table',
      price: {
        original: 66000,
        discounted: 33000
      },
      description: 'A timeless dining solution, the Harry 4‑Person Dining Table blends classic craftsmanship with everyday functionality. Crafted from high-quality materials, it offers a sturdy and elegant surface for meals, gatherings, or work. Its versatile design complements various interior styles, making it a perfect centerpiece for any dining space.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table9.webp', '../pics/products/dining-room/table9-alt.webp', '../pics/products/dining-room/table9-alt-2.webp'],
      name: 'Harry 6 Person Dining Table',
      fullname: 'Harry 6 Person Dining Table with 6 Chairs',
      category: 'dining-table',
      price: {
        original: 135000,
        discounted: 94800
      },
      description: 'An elegant and spacious dining set, the Harry 6‑Person Dining Table with 6 Chairs transforms any dining space into a welcoming gathering place. Crafted from high-quality materials, it offers a sturdy and stylish surface for meals, celebrations, or work. The included chairs provide comfortable seating, while the timeless design complements various interior styles, making it a perfect centerpiece for family dinners or entertaining guests.'
    },
    {
      imgSrc: ['../pics/products/dining-room/table10.webp', '../pics/products/dining-room/table10-alt.webp', '../pics/products/dining-room/table10-alt-2.webp'],
      name: 'Hendrick 4 person dining table',
      fullname: 'Hendrick 4 person dining table',
      category: 'dining-table',
      price: {
        original: 135000,
        discounted: 94800
      },
      description: 'The Hendrick 4‑Person Dining Table is a sophisticated seating solution that combines contemporary design with practical functionality. Featuring a sleek rectangular top with clean lines and a sturdy base structure, this table accommodates four diners in comfort and style, making it ideal for modern apartments, cozy dining nooks, and compact family kitchens.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair1.webp', '../pics/products/dining-room/chair1-alt.webp', '../pics/products/dining-room/chair1-alt-2.webp'],
      name: 'Sora Dining Chair',
      fullname: 'Sora Dining Chair – Modern Molded Seat with Cushion (Pink, Grey, White, Black, Yellow)',
      category: 'dining-chairs',
      price: {
        original: 18000,
        discounted: 9480
      },
      description: 'The Sora Dining Chair features a modern molded seat with a cushion for added comfort and style. Its sleek design and neutral color options make it a versatile addition to any dining room.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair2.webp', '../pics/products/dining-room/chair2-alt.webp', '../pics/products/dining-room/chair2-alt-2.webp'],
      name: 'Torrey Chair Outdoor',
      fullname: 'Torrey Chair Outdoor',
      category: 'dining-chairs',
      price: {
        original: 28000,
        discounted: 16900
      },
      description: 'The Torrey Chair Outdoor is designed for durability and comfort in outdoor settings. Its weather-resistant materials and sleek design make it a perfect addition to any patio or garden.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair3.webp', '../pics/products/dining-room/chair3-alt.webp', '../pics/products/dining-room/chair3-alt-2.webp'],
      name: 'Torrey Chair Outdoor',
      fullname: 'Torrey Chair Outdoor',
      category: 'dining-chairs',
      price: {
        original: 28000,
        discounted: 16900
      },
      description: 'The Torrey Chair Outdoor is designed for durability and comfort in outdoor settings. Its weather-resistant materials and sleek design make it a perfect addition to any patio or garden.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair4.webp', '../pics/products/dining-room/chair4-alt.webp', '../pics/products/dining-room/chair4-alt-2.webp'],
      name: 'Torrey Chair Outdoor',
      fullname: 'Torrey Chair Outdoor',
      category: 'dining-chairs',
      price: {
        original: 28000,
        discounted: 16900
      },
      description: 'The Torrey Chair Outdoor is designed for durability and comfort in outdoor settings. Its weather-resistant materials and sleek design make it a perfect addition to any patio or garden.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair5.webp', '../pics/products/dining-room/chair5-alt.webp'],
      name: 'Torrey Chair Outdoor',
      fullname: 'Torrey Chair Outdoor',
      category: 'dining-chairs',
      price: {
        original: 28000,
        discounted: 16900
      },
      description: 'The Torrey Chair Outdoor is designed for durability and comfort in outdoor settings. Its weather-resistant materials and sleek design make it a perfect addition to any patio or garden.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair6.webp', '../pics/products/dining-room/chair6-alt.webp', '../pics/products/dining-room/chair6-alt-2.webp'],
      name: '1 Pc Cafeteria Chair',
      fullname: '1 Pc Cafeteria Chair',
      category: 'dining-chairs',
      price: {
        original: 14000,
        discounted: 7600
      },
      description: 'The 1 Pc Cafeteria Chair is designed for durability and comfort in cafeteria settings. Its sturdy construction and ergonomic design make it a perfect addition to any dining area.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair7.webp', '../pics/products/dining-room/chair7-alt.webp', '../pics/products/dining-room/chair7-alt-2.webp'],
      name: 'Mid-Century Chair',
      fullname: 'Mid-Century Chair',
      category: 'dining-chairs',
      price: {
        original: 34500,
        discounted: 19500
      },
      description: 'The Mid-Century Chair is designed for comfort and style in any dining room. Its classic design and high-quality materials make it a timeless addition to your home.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair8.webp', '../pics/products/dining-room/chair8-alt.webp', '../pics/products/dining-room/chair8-alt-2.webp'],
      name: 'Cane Charm Armless Chair',
      fullname: 'Cane Charm Armless Chair – Plastic Frame with Woven Cane‑Style Seat & Back (Black)',
      category: 'dining-chairs',
      price: {
        original: 18500,
        discounted: 12500
      },
      description: 'The Cane Charm Armless Chair is a versatile seating piece that celebrates natural aesthetics and lightweight comfort. Featuring handcrafted cane paneling on the backrest and sides, this chair brings warmth and texture to any space while maintaining a clean, airy silhouette perfect for bedrooms, living rooms, and study areas.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair9.webp', '../pics/products/dining-room/chair9-alt.webp', '../pics/products/dining-room/chair9-alt-2.webp'],
      name: 'Cane Charm Armchair',
      fullname: 'Cane Charm Armchair – Plastic Frame with Woven Cane‑Style Seat & Back (Black, White, Green)',
      category: 'dining-chairs',
      price: {
        original: 18500,
        discounted: 12500
      },
      description: 'The Cane Charm Arm Chair is an elegant seating solution that masterfully blends natural materials with refined comfort. Featuring intricately woven cane paneling on the backrest and sides, complemented by sturdy wooden armrests, this chair brings organic warmth and sophisticated style to living rooms, dens, and bedrooms.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair10.webp', '../pics/products/dining-room/chair10-alt.webp', '../pics/products/dining-room/chair10-alt-2.webp'],
      name: 'Lean Chair Outdoor',
      fullname: 'Lean Chair Outdoor',
      category: 'dining-chairs',
      price: {
        original: 33500,
        discounted: 23500
      },
      description: 'The Lean Chair Outdoor is a contemporary seating piece designed for relaxation and sophisticated outdoor living. Featuring a sleek, minimalist profile with clean lines and a reclined backrest, this chair invites you to unwind on patios, balconies, and gardens while maintaining an elegant aesthetic that complements modern outdoor spaces.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair11.webp', '../pics/products/dining-room/chair11-alt.webp', '../pics/products/dining-room/chair11-alt-2.webp'],
      name: 'Royal Chair MC-117',
      fullname: 'Royal Chair MC-117',
      category: 'dining-chairs',
      price: {
        original: 41500,
        discounted: 22000
      },
      description: 'The Royal Chair MC-117 is a sophisticated dining chair that combines timeless elegance with modern comfort. Its refined design and premium materials make it a standout piece in any dining room setting.'
    },
    {
      imgSrc: ['../pics/products/dining-room/chair12.webp', '../pics/products/dining-room/chair12-alt.webp', '../pics/products/dining-room/chair12-alt-2.webp'],
      name: 'Imperial Brown Chair',
      fullname: 'Imperial Brown Chair',
      category: 'dining-chairs',
      price: {
        original: 47500,
        discounted: 35000
      },
      description: 'The Imperial Brown Chair is a luxurious dining chair that combines rich, warm tones with premium craftsmanship. Its sturdy construction and elegant design make it a perfect addition to any sophisticated dining room.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery1.webp', '../pics/products/dining-room/crockery1-alt.webp', '../pics/products/dining-room/crockery1-alt-2.webp'],
      name: 'ROY Side Board',
      fullname: 'ROY Side Board',
      category: 'crockery',
      price: {
        original: 95000,
        discounted: 75000
      },
      description: 'The ROY Side Board is a stylish and functional piece of furniture designed to complement any dining room or living space. Its elegant design and durable construction make it a perfect addition to any home.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery2.webp', '../pics/products/dining-room/crockery2-alt.webp', '../pics/products/dining-room/crockery2-alt-2.webp'],
      name: 'Bold Printed Storage Console (Rung)',
      fullname: 'Bold Printed Storage Console (Rung)',
      category: 'crockery',
      price: {
        original: 210000,
        discounted: 133000
      },
      description: 'The Bold Printed Storage Console (Rung) is a striking accent piece that melds functionality with graphic flair. Its clean-lined frame supports a series of open shelves and enclosed compartments, each sporting a vibrant, geometric print that adds personality to any hallway, living room, or entryway.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery3.webp', '../pics/products/dining-room/crockery3-alt.webp', '../pics/products/dining-room/crockery3-alt-2.webp'],
      name: 'Blair Side Board',
      fullname: 'Blair Side Board',
      category: 'crockery',
      price: {
        original: 40000,
        discounted: 25000
      },
      description: 'The Blair Side Board is a stylish and functional piece of furniture designed to complement any dining room or living space. Its elegant design and durable construction make it a perfect addition to any home.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery4.webp', '../pics/products/dining-room/crockery4-alt.webp', '../pics/products/dining-room/crockery4-alt-2.webp'],
      name: 'Edward Side Board (Edward Series)',
      fullname: 'Edward Side Board (Edward Series)',
      category: 'crockery',
      price: {
        original: 188000,
        discounted: 133000
      },
      description: 'The Edward Side Board from the Edward Series is a refined storage piece that combines traditional craftsmanship with clean, modern lines. It features a spacious top surface, multiple drawers, and cabinet doors—perfect for stashing linens, dishes, or media components—while its rich wood finish and subtle hardware lend a timeless, elegant look.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery5.webp', '../pics/products/dining-room/crockery5-alt.webp', '../pics/products/dining-room/crockery5-alt-2.webp'],
      name: 'Printed Storage Console (Rung)',
      fullname: 'Printed Storage Console (Rung)',
      category: 'crockery',
      price: {
        original: 188000,
        discounted: 133000
      },
      description: 'The Printed Storage Console (Rung) is a striking accent piece that melds functionality with graphic flair. Its clean-lined frame supports a series of open shelves and enclosed compartments, each sporting a vibrant, geometric print that adds personality to any hallway, living room, or entryway.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery6.webp', '../pics/products/dining-room/crockery6-alt.webp', '../pics/products/dining-room/crockery6-alt-2.webp'],
      name: 'Gravil Crockery Unit',
      fullname: 'Gravil Crockery Unit',
      category: 'crockery',
      price: {
        original: 77000,
        discounted: 50000
      },
      description: 'The Gravil Crockery Unit is a stylish and functional piece of furniture designed to complement any dining room or living space. Its elegant design and durable construction make it a perfect addition to any home.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery7.webp', '../pics/products/dining-room/crockery7-alt.webp', '../pics/products/dining-room/crockery7-alt-2.webp'],
      name: 'Serenity Chest of Drawers (Organic)',
      fullname: 'Serenity Chest of Drawers (Organic)',
      category: 'crockery',
      price: {
        original: 115000,
        discounted: 50000
      },
      description: 'The Serenity Chest of Drawers (Organic) is a calming storage solution crafted with natural materials and soft, flowing lines. Its organic-inspired silhouette features multiple drawers with gentle curves and subtle, nature‑toned finishes, offering ample space for clothing, linens, or personal items while maintaining a serene, spa‑like presence in the bedroom.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery8.webp', '../pics/products/dining-room/crockery8-alt.webp', '../pics/products/dining-room/crockery8-alt-2.webp'],
      name: 'Nature\'s Weave Console (Organic)',
      fullname: 'Nature\'s Weave Console (Organic)',
      category: 'crockery',
      price: {
        original: 158000,
        discounted: 118000
      },
      description: 'The Nature’s Weave Console (Organic) brings the beauty of natural textures into your home with a handcrafted, woven-front design. Its slim profile and organic materials—think rattan or seagrass panels set within a warm wooden frame—make it an ideal accent for entryways, living rooms, or hallways.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery9.webp', '../pics/products/dining-room/crockery9-alt.webp', '../pics/products/dining-room/crockery9-alt-2.webp'],
      name: 'Serenity Separator (Organic)',
      fullname: 'Serenity Separator (Organic)',
      category: 'crockery',
      price: {
        original: 132000,
        discounted: 88000
      },
      description: 'A graceful room‑dividing element, the Serenity Separator (Organic) offers gentle privacy while keeping spaces light and airy. Crafted from natural materials like bamboo, woven rattan, or light wood, its panel design features soft curves and an earthy finish that echoes nature’s tranquillity.'
    },
    {
      imgSrc: ['../pics/products/dining-room/crockery10.webp', '../pics/products/dining-room/crockery10-alt.webp', '../pics/products/dining-room/crockery10-alt-2.webp'],
      name: 'Timberland Shelf',
      fullname: 'Timberland Shelf',
      category: 'crockery',
      price: {
        original: 188000,
        discounted: 145000
      },
      description: 'A rustic‑inspired shelving unit, the Timberland Shelf showcases the rich character of solid wood with a rugged, natural finish. Strong and spacious, its open tiers provide ample room for books, décor, or storage baskets, making it a functional centerpiece in living rooms, studies, or entryways.'
    },


    {
      imgSrc: ['../pics/products/office-room/workstation1.webp', '../pics/products/office-room/workstation1-alt.webp', '../pics/products/office-room/workstation1-alt-2.webp'],
      name: 'Nexus Workstation',
      fullname: 'Nexus Workstation',
      category: 'office-workstation',
      price: {
        original: 178000,
        discounted: 145000
      },
      description: 'The Nexus Workstation is a sleek and functional office desk designed to enhance productivity and organization. Featuring a spacious work surface, integrated storage solutions, and a modern design, it provides the perfect environment for focused work and efficient multitasking.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation2.webp', '../pics/products/office-room/workstation2-alt.webp'],
      name: 'Walt (NF-FL-07)',
      fullname: 'Walt (NF-FL-07)',
      category: 'office-workstation',
      price: {
        original: 143000,
        discounted: 129000
      },
      description: 'The Walt NF-FL-07 is a versatile office workstation featuring a sleek design and ample storage, ideal for home offices and professional settings.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation3.webp', '../pics/products/office-room/workstation3-alt.webp'],
      name: 'Chase (NF-A55-10)',
      fullname: 'Chase (NF-A55-10)',
      category: 'office-workstation',
      price: {
        original: 155000,
        discounted: 129000
      },
      description: 'The Chase (NF-A55-10) case delivers robust protection with a sleek, modern design tailored for professionals on the move. Its durable build and refined appearance make it an ideal companion for both daily commutes and business travel.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation4.webp', '../pics/products/office-room/workstation4-alt.webp'],
      name: 'Muller (WS-01)',
      fullname: 'Muller (WS-01)',
      category: 'office-workstation',
      price: {
        original: 125000,
        discounted: 111500
      },
      description: 'The Muller (WS-01) workstation offers a modern, ergonomic design with built-in storage and a sleek finish. Its sturdy construction and thoughtful layout make it perfect for professionals seeking both style and functionality.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation5.webp'],
      name: 'MO NF FL WORKSTATION 9624',
      fullname: 'MO NF FL WORKSTATION 9624',
      category: 'office-workstation',
      price: {
        original: 145000,
        discounted: 122500
      },
      description: 'The MO NF FL WORKSTATION 9624 is a contemporary office desk designed for maximum productivity and organization. Featuring a spacious work surface, integrated storage solutions, and a sleek design, it provides the perfect environment for focused work and efficient multitasking.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation6.webp', '../pics/products/office-room/workstation6-alt.webp'],
      name: 'MO Workstation 4896',
      fullname: 'MO Workstation 4896 with duct with screen (MO-WS-BS-03-ALCOTT)',
      category: 'office-workstation',
      price: {
        original: 95000,
        discounted: 80500
      },
      description: 'The MO Workstation 4896 with duct and screen (MO-WS-BS-03-ALCOTT) is a modern office desk designed for maximum productivity and organization. Featuring a spacious work surface, integrated storage solutions, and a sleek design, it provides the perfect environment for focused work and efficient multitasking.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation7.webp', '../pics/products/office-room/workstation7-alt.webp'],
      name: 'MO Workstation 2448',
      fullname: 'MO Workstation 2448 without drawer with laminate screen (MO-WS-BS-03)',
      category: 'office-workstation',
      price: {
        original: 26000,
        discounted: 19500
      },
      description: 'The MO Workstation 2448 combines a spacious desk surface with a sleek laminate privacy screen, creating a focused yet open work area. Perfect for contemporary offices, it blends functionality with minimalist design to enhance productivity and collaboration.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation8.webp', '../pics/products/office-room/workstation8-alt.webp'],
      name: 'MO Workstation 2496',
      fullname: 'MO Workstation 2496 Without Duct Without Screen (MO-WS-BS-01-AUGUSTA)',
      category: 'office-workstation',
      price: {
        original: 70000,
        discounted: 52500
      },
      description: 'The MO Workstation 2496 is a minimalist office desk designed for clean lines and maximum functionality. Without ducts or screens, it offers a streamlined look that fits seamlessly into any modern office environment.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation9.webp', '../pics/products/office-room/workstation9-alt.webp'],
      name: 'MO Workstation 9624',
      fullname: 'MO Workstation 9624 Without Drawer With Screen & Flip Cover (MO-MULLER-WS-01)',
      category: 'office-workstation',
      price: {
        original: 105000,
        discounted: 95000
      },
      description: 'The MO Workstation 9624 is a contemporary office desk designed for maximum productivity and organization. Featuring a spacious work surface, integrated storage solutions, and a sleek design, it provides the perfect environment for focused work and efficient multitasking.'
    },
    {
      imgSrc: ['../pics/products/office-room/workstation10.webp', '../pics/products/office-room/workstation10-alt.webp'],
      name: 'MO Workstation 2448',
      fullname: 'MO Workstation 2448 With Cabinet (MO-WS-BS-01-Aspen)',
      category: 'office-workstation',
      price: {
        original: 68500,
        discounted: 52500
      },
      description: 'The MO Workstation 2448 with cabinet combines storage efficiency with a compact footprint, ideal for small offices or shared workspaces. Its sturdy cabinet provides secure organization while maintaining a clean, professional appearance.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting1.webp'],
      name: 'Meeting Table 4 Person',
      fullname: 'Office Furniture - Meeting Table 4 Person - LAZO SERIES',
      category: 'office-meeting',
      price: {
        original: 19500,
        discounted: 14625
      },
      description: 'The Meeting Table 4 Person from the LAZO SERIES is a sleek and functional office furniture piece designed for collaborative workspaces. With its modern design and durable construction, it provides an ideal setting for meetings, discussions, and teamwork.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting5.webp'],
      name: 'Round Meeting Table 3 Person',
      fullname: 'Office Furniture - Round Meeting Table 3 Person - PLEIN SERIES',
      category: 'office-meeting',
      price: {
        original: 19500,
        discounted: 14625
      },
      description: 'The Round Meeting Table 3 Person from the PLEIN SERIES is a stylish and functional office furniture piece designed for collaborative workspaces. With its modern design and durable construction, it provides an ideal setting for meetings, discussions, and teamwork.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting8.webp'],
      name: 'Round Meeting Table 3 Person - FINN SERIES',
      fullname: 'Office Furniture - Round Meeting Table 3 Person - FINN SERIES',
      category: 'office-meeting',
      price: {
        original: 19500,
        discounted: 14625
      },
      description: 'The Finn Series 3‑Person Round Meeting Table pairs compact elegance with practical function, offering a smooth, durable tabletop and a sturdy central base that encourages close‑quarter collaboration. Perfect for small meeting rooms or breakout spaces, it supports effortless conversation while available finishes and optional cable access keep devices tidy and professional.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting2.webp', '../pics/products/office-room/meeting2-alt.webp'],
      name: 'Executive Table with Side Rack',
      fullname: 'Office Furniture - Executive Table with Side Rack - PLEIN SERIES',
      category: 'office-meeting',
      price: {
        original: 60000,
        discounted: 52500
      },
      description: 'The Executive Table with Side Rack from the PLEIN SERIES is a premium office furniture piece designed for executive workspaces. With its elegant design and robust construction, it offers both functionality and style for high-level meetings and discussions.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting3.webp', '../pics/products/office-room/meeting3-alt.webp'],
      name: 'Executive Table with Side Rack - FINN SERIES',
      fullname: 'Office Furniture - Executive Table with Side Rack - FINN SERIES',
      category: 'office-meeting',
      price: {
        original: 60000,
        discounted: 52500
      },
      description: 'The Executive Table with Side Rack from the FINN SERIES is a premium office furniture piece designed for executive workspaces. With its elegant design and robust construction, it offers both functionality and style for high-level meetings and discussions.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting4.webp', '../pics/products/office-room/meeting4-alt.webp'],
      name: 'Executive Table with Side Rack - DYNAMIC SERIES',
      fullname: 'Office Furniture - Executive Table with Side Rack - DYNAMIC SERIES',
      category: 'office-meeting',
      price: {
        original: 60000,
        discounted: 52500
      },
      description: 'The DYNAMIC SERIES Executive Table with Side Rack blends bold, modern lines with functional organization—offering a generous work surface and an integrated side rack for files, devices, and quick-access storage. Constructed from premium materials with a durable finish and built‑in cable management, it creates a professional, ergonomic workspace ideal for focused work and executive meetings.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting6.webp'],
      name: 'Meeting Table 6 Person - PLEIN SERIES',
      fullname: 'Office Furniture - Meeting Table 6 Person - PLEIN SERIES',
      category: 'office-meeting',
      price: {
        original: 75000,
        discounted: 62500
      },
      description: 'The PLEIN SERIES Meeting Table 6 Person is a modern and functional office furniture piece designed for collaborative workspaces. With its sleek design and durable construction, it provides an ideal setting for meetings, discussions, and teamwork.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting7.webp'],
      name: 'Office Furniture - Meeting Table 8 Person - LAZO SERIES',
      fullname: 'Office Furniture - Meeting Table 8 Person - LAZO SERIES',
      category: 'office-meeting',
      price: {
        original: 75000,
        discounted: 62500
      },
      description: 'The Lazo Series 8‑Person Meeting Table is a spacious, contemporary conference table designed for collaborative meetings and presentations. It features a clean, minimalist profile, integrated cable management and power access, and a durable finish that withstands heavy use—making it ideal for boardrooms, client sessions, and team huddles.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting9.webp'],
      name: 'Meeting Table 6 Person - FINN SERIES',
      fullname: 'Office Furniture - Meeting Table 6 Person - FINN SERIES',
      category: 'office-meeting',
      price: {
        original: 65000,
        discounted: 42500
      },
      description: 'The FINN SERIES Meeting Table 6 Person is a modern and functional office furniture piece designed for collaborative workspaces. With its sleek design and durable construction, it provides an ideal setting for meetings, discussions, and teamwork.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting10.webp'],
      name: 'Meeting Table 8 Person - DYNAMIC SERIES',
      fullname: 'Office Furniture - Meeting Table 8 Person - DYNAMIC SERIES',
      category: 'office-meeting',
      price: {
        original: 65000,
        discounted: 42500
      },
      description: 'The DYNAMIC SERIES 8‑Person Meeting Table combines commanding presence with practical function, offering a large, seamless tabletop, integrated cable management, and optional power/data modules for uninterrupted meetings. Built with premium materials and a refined finish, it supports collaborative discussions, presentations, and executive decision‑making while maintaining a professional, modern aesthetic.'
    },
    {
      imgSrc: ['../pics/products/office-room/meeting11.webp', '../pics/products/office-room/meeting11-alt.webp'],
      name: 'Executive Table with Side Rack - LAZO SERIES',
      fullname: 'Office Furniture - Executive Table with Side Rack - LAZO SERIES',
      category: 'office-meeting',
      price: {
        original: 85000,
        discounted: 72500
      },
      description: 'The Executive Table with Side Rack from the LAZO SERIES is a premium office furniture piece designed for executive workspaces. With its elegant design and robust construction, it offers both functionality and style for high-level meetings and discussions.'
    },
    {
      imgSrc: ['../pics/products/office-room/chair1.webp', '../pics/products/office-room/chair1-alt.webp', '../pics/products/office-room/chair1-alt-2.webp'],
      name: 'Anatom Teller LBC',
      fullname: 'Anatom Teller LBC',
      category: 'office-chairs',
      price: {
        original: 30500,
        discounted: 25500
      },
      description: 'The Anatom Teller LBC is an ergonomic office chair designed for comfort and support during long work sessions. With its adjustable features, breathable materials, and sleek design, it provides a comfortable seating solution for any office environment.'
    },
    {
      imgSrc: ['../pics/products/office-room/chair2.webp', '../pics/products/office-room/chair2-alt.webp', '../pics/products/office-room/chair2-alt-2.webp'],
      name: 'Master Cres LBC',
      fullname: 'Master Cres LBC',
      category: 'office-chairs',
      price: {
        original: 49500,
        discounted: 39500
      },
      description: 'The Master Cres LBC is a high-end office chair that combines ergonomic design with luxurious comfort. Featuring adjustable settings, premium materials, and a sleek aesthetic, it is ideal for professionals seeking both style and functionality in their workspace.'
    },
    {
      imgSrc: ['../pics/products/office-room/chair3.webp', '../pics/products/office-room/chair3-alt.webp', '../pics/products/office-room/chair3-alt-2.webp'],
      name: 'Master Genesis LBC',
      fullname: 'Master Genesis LBC Double Shell (Wooden Arm)',
      category: 'office-chairs',
      price: {
        original: 53500,
        discounted: 44500
      },
      description: 'The Master Genesis LBC Double Shell with Wooden Arm is a sophisticated office chair that combines ergonomic support with elegant design. Featuring a double-shell construction for enhanced comfort and wooden armrests for a touch of classic style, it is perfect for professionals seeking a blend of functionality and aesthetics in their workspace.'
    },
    {
      imgSrc: ['../pics/products/office-room/chair4.webp', '../pics/products/office-room/chair4-alt.webp', '../pics/products/office-room/chair4-alt-2.webp'],
      name: 'Anatom Low Back Chair',
      fullname: 'Anatom Low Back Chair',
      category: 'office-chairs',
      price: {
        original: 24500,
        discounted: 19500
      },
      description: 'The Anatom Low Back Chair is a comfortable and ergonomic office chair designed for long working hours. With its low back design and supportive features, it provides excellent comfort and posture support for professionals in demanding work environments.'
    },
    {
      imgSrc: ['../pics/products/office-room/chair5.webp'],
      name: 'Revolving Chair Metal AB HB 302',
      fullname: 'Office Furniture - Revolving Chair Metal AB HB 302',
      category: 'office-chairs',
      price: {
        original: 31500,
        discounted: 24500
      },
      description: 'The Revolving Chair Metal AB HB 302 is a modern office chair with a rotating base, designed for comfort and functionality in professional settings. Its sleek design and smooth rotation make it an ideal choice for collaborative workspaces.'
    },
    {
      imgSrc: ['../pics/products/office-room/chair6.webp'],
      name: 'Executive Chair with Head Rest - AB HB088',
      fullname: 'Office Furniture - Executive Chair with Head Rest - AB HB088',
      category: 'office-chairs',
      price: {
        original: 29500,
        discounted: 20000
      },
      description: 'The Executive Chair with Head Rest - AB HB088 is a premium office chair designed for comfort and support. Featuring a headrest and ergonomic design, it provides excellent comfort for long working hours in professional environments.'
    },
    {
      imgSrc: ['../pics/products/office-room/chair7.webp'],
      name: 'Revolving Manager Chair Low Back - AB HB2020',
      fullname: 'Office Furniture - Revolving Manager Chair Low Back - AB HB2020',
      category: 'office-chairs',
      price: {
        original: 27500,
        discounted: 20000
      },
      description: 'The Revolving Manager Chair Low Back - AB HB2020 is a stylish and functional office chair designed for managers and professionals. With its revolving base and low back design, it offers comfort and mobility in the workplace.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza1.webp', '../pics/products/office-room/credenza1-alt.webp', '../pics/products/office-room/credenza1-alt-2.webp'],
      name: 'Callisto Credenza',
      fullname: 'Callisto Credenza',
      category: 'office-credenza',
      price: {
        original: 31500,
        discounted: 23000
      },
      description: 'The Callisto Credenza is a stylish and functional office credenza designed for storage and organization in professional environments. Its elegant design and practical features make it an ideal addition to any office space.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza2.webp'],
      name: 'Arc Credenza 2.0',
      fullname: 'Arc Credenza 2.0',
      category: 'office-credenza',
      price: {
        original: 50000,
        discounted: 35000
      },
      description: 'The Arc Credenza 2.0 is a modern and functional office credenza designed for storage and organization in professional environments. Its sleek design and practical features make it an ideal addition to any office space.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza3.webp', '../pics/products/office-room/credenza3-alt.webp', '../pics/products/office-room/credenza3-alt-2.webp'],
      name: 'Athan Executive Credenza',
      fullname: 'Athan Executive Credenza',
      category: 'office-credenza',
      price: {
        original: 65000,
        discounted: 43000
      },
      description: 'The Athan Executive Credenza is a sophisticated office storage solution designed for executives and professionals. With its elegant design and ample storage space, it provides both functionality and style for organizing office essentials.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza4.webp', '../pics/products/office-room/credenza4-alt.webp', '../pics/products/office-room/credenza4-alt-2.webp'],
      name: 'Aurora Credenza',
      fullname: 'Aurora Credenza',
      category: 'office-credenza',
      price: {
        original: 68000,
        discounted: 45000
      },
      description: 'The Aurora Credenza is a modern and functional office storage solution designed for professionals. With its sleek design and ample storage space, it provides both functionality and style for organizing office essentials.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza5.webp', '../pics/products/office-room/credenza5-alt.webp', '../pics/products/office-room/credenza5-alt-2.webp'],
      name: 'Beall Credenza',
      fullname: 'Beall Credenza',
      category: 'office-credenza',
      price: {
        original: 60000,
        discounted: 45000
      },
      description: 'The Beall Credenza is a stylish and functional office storage solution designed for professionals. With its elegant design and ample storage space, it provides both functionality and style for organizing office essentials.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza6.webp', '../pics/products/office-room/credenza6-alt.webp'],
      name: 'Champion Credenza',
      fullname: 'Champion Credenza',
      category: 'office-credenza',
      price: {
        original: 45000,
        discounted: 35000
      },
      description: 'The Champion Credenza is a robust storage unit combining generous filing and shelf space with a refined, executive finish. Built for durability and organization, it features soft‑close drawers, a lockable cabinet option, and integrated cable access—ideal for executive offices and reception areas.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza7.webp', '../pics/products/office-room/credenza7-alt.webp'],
      name: 'Emmy Credenza',
      fullname: 'Emmy Credenza',
      category: 'office-credenza',
      price: {
        original: 33000,
        discounted: 25000
      },
      description: 'The Emmy Credenza is a stylish and functional office storage solution designed for professionals. With its elegant design and ample storage space, it provides both functionality and style for organizing office essentials.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza8.webp', '../pics/products/office-room/credenza8-alt.webp'],
      name: 'Gramy Credenza',
      fullname: 'Gramy Credenza',
      category: 'office-credenza',
      price: {
        original: 38000,
        discounted: 30000
      },
      description: 'The Gramy Credenza is a modern and functional office storage solution designed for professionals. With its sleek design and ample storage space, it provides both functionality and style for organizing office essentials.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza9.webp', '../pics/products/office-room/credenza9-alt.webp'],
      name: 'Ring Credenza',
      fullname: 'Ring Credenza',
      category: 'office-credenza',
      price: {
        original: 41000,
        discounted: 29000
      },
      description: 'The Ring Credenza features elegant circular‑accent detailing and generous concealed storage, blending visual interest with practical organization. Built from durable materials with soft‑close drawers and optional lockable compartments and cable management, it’s ideal for executive offices, reception areas, and meeting spaces.'
    },
    {
      imgSrc: ['../pics/products/office-room/credenza10.webp', '../pics/products/office-room/credenza10-alt.webp'],
      name: 'Rising Credenza',
      fullname: 'Rising Credenza',
      category: 'office-credenza',
      price: {
        original: 45000,
        discounted: 31000
      },
      description: 'The Rising Credenza combines vertical storage innovation with a sleek profile, featuring lift‑top shelving and soft‑close drawers for easy access and secure organization. Built from durable materials with optional locking and integrated cable management, it’s ideal for modern offices and reception areas where style meets functionality.'
    },
    {
      imgSrc: ['../pics/products/office-room/reception1.webp', '../pics/products/office-room/reception1-alt.webp', '../pics/products/office-room/reception1-alt-2.webp'],
      name: 'AIKE Reception Counter',
      fullname: 'AIKE Reception Counter',
      category: 'office-reception',
      price: {
        original: 115000,
        discounted: 100000
      },
      description: 'The AIKE Reception Counter is a sleek and functional office furniture piece designed for reception areas. With its modern design and durable construction, it provides an ideal setting for welcoming guests and managing front desk operations.'
    },
    {
      imgSrc: ['../pics/products/office-room/reception2.webp', '../pics/products/office-room/reception2-alt.webp', '../pics/products/office-room/reception2-alt-2.webp'],
      name: 'Gramy - Reception Table',
      fullname: 'Gramy - Reception Table',
      category: 'office-reception',
      price: {
        original: 115000,
        discounted: 100000
      },
      description: 'The Gramy Reception Table makes a strong first impression with a welcoming, sculpted front and durable construction built for high‑traffic lobbies. Thoughtfully designed with integrated storage and cable management, it pairs elegant finishes with practical functionality for reception desks, check‑in counters, and guest-facing spaces.'
    },
    {
      imgSrc: ['../pics/products/office-room/manager1.webp', '../pics/products/office-room/manager1-alt.webp', '../pics/products/office-room/manager1-alt-2.webp'],
      name: 'Carl Manager Table',
      fullname: 'Carl Manager Table',
      category: 'office-reception',
      price: {
        original: 50000,
        discounted: 40000
      },
      description: 'The Carl Manager Table is a sophisticated and functional office furniture piece designed for executive desks. With its modern design and durable construction, it provides an ideal setting for managing workspaces with integrated storage and cable management.'
    },
    {
      imgSrc: ['../pics/products/office-room/manager2.webp', '../pics/products/office-room/manager2-alt.webp'],
      name: 'Fawn Manager Table',
      fullname: 'Fawn Manager Table',
      category: 'office-reception',
      price: {
        original: 60000,
        discounted: 45000
      },
      description: 'The Fawn Manager Table combines a warm, natural finish with a compact executive footprint, offering a spacious work surface and integrated storage for everyday management tasks. Thoughtfully detailed with cable management and durable construction, it balances professional style with practical functionality for private offices and workstations.'
    },
    {
      imgSrc: ['../pics/products/office-room/manager3.webp', '../pics/products/office-room/manager3-alt.webp'],
      name: 'iTech Height Adjustable Manager Table',
      fullname: 'iTech Height Adjustable Manager Table',
      category: 'office-reception',
      price: {
        original: 49500,
        discounted: 45000
      },
      description: 'The iTech Height Adjustable Manager Table is a versatile office furniture piece designed for executive workspaces. With its modern design and durable construction, it provides an ideal setting for managing workspaces with integrated storage and cable management, while the height-adjustable feature promotes ergonomic comfort.'
    },
    {
      imgSrc: ['../pics/products/office-room/manager4.webp', '../pics/products/office-room/manager4-alt.webp', '../pics/products/office-room/manager4-alt-2.webp'],
      name: 'Magic Manager Table',
      fullname: 'Magic Manager Table',
      category: 'office-reception',
      price: {
        original: 55000,
        discounted: 42500
      },
      description: 'The Magic Manager Table is a stylish and functional office furniture piece designed for executive desks. With its modern design and durable construction, it provides an ideal setting for managing workspaces with integrated storage and cable management.'
    },
    {
      imgSrc: ['../pics/products/office-room/manager5.webp', '../pics/products/office-room/manager5-alt.webp'],
      name: 'Norway Manager Table',
      fullname: 'Norway Manager Table',
      category: 'office-reception',
      price: {
        original: 40000,
        discounted: 35000
      },
      description: 'The Norway Manager Table combines a sleek, modern design with practical functionality, offering a spacious work surface and integrated storage for everyday management tasks. Thoughtfully detailed with cable management and durable construction, it balances professional style with practical functionality for private offices and workstations.'
    },
    {
      imgSrc: ['../pics/products/office-room/manager6.webp', '../pics/products/office-room/manager6-alt.webp'],
      name: 'Manager Desk with Side Rack - PLEIN SERIES',
      fullname: 'Office Furniture - Manager Desk with Side Rack - PLEIN SERIES',
      category: 'office-reception',
      price: {
        original: 65000,
        discounted: 50000
      },
      description: 'The Manager Desk with Side Rack from the PLEIN SERIES is a premium office furniture piece designed for executive workspaces. With its elegant design and robust construction, it offers both functionality and style for managing workspaces with integrated storage and cable management.'
    },
    {
      imgSrc: ['../pics/products/office-room/reception3.webp'],
      name: 'Office Furniture - Reception Desk - FINN SERIES',
      fullname: 'Office Furniture - Reception Desk - FINN SERIES',
      category: 'office-reception',
      price: {
        original: 44000,
        discounted: 33000
      },
      description: 'The FINN SERIES Reception Desk combines a welcoming, sculpted front with durable construction built for high‑traffic lobbies. Thoughtfully designed with integrated storage and cable management, it pairs elegant finishes with practical functionality for reception desks, check‑in counters, and guest-facing spaces.'
    },
    {
      imgSrc: ['../pics/products/office-room/reception4.webp', '../pics/products/office-room/reception4-alt.webp', '../pics/products/office-room/reception4-alt-2.webp'],
      name: 'Reception Desk - LAZO SERIES',
      fullname: 'Office Furniture - Reception Desk - LAZO SERIES',
      category: 'office-reception',
      price: {
        original: 68000,
        discounted: 51000
      },
      description: 'The LAZO SERIES Reception Desk combines a welcoming, sculpted front with durable construction built for high‑traffic lobbies. Thoughtfully designed with integrated storage and cable management, it pairs elegant finishes with practical functionality for reception desks, check‑in counters, and guest-facing spaces.'
    },
    {
      imgSrc: ['../pics/products/office-room/reception5.webp'],
      name: 'Reception Desk - PLEIN SERIES',
      fullname: 'Office Furniture - Reception Desk - PLEIN SERIES',
      category: 'office-reception',
      price: {
        original: 45000,
        discounted: 33000
      },
      description: 'The PLEIN Series reception desk showcases clean, geometric lines with a generous countertop and concealed storage—a modern focal point for any lobby or front office. Built with durable construction and optional integrated lighting or cable management, it combines stylish minimalism with the functionality reception staff need.'
    },
    {
      imgSrc: ['../pics/products/office-room/reception6.webp'],
      name: 'Reception Desk - DYNAMIC SERIES',
      fullname: 'Office Furniture - Reception Desk - DYNAMIC SERIES',
      category: 'office-reception',
      price: {
        original: 30000,
        discounted: 22000
      },
      description: 'The DYNAMIC SERIES reception desk delivers a bold, contemporary statement with its sweeping front panel and generous work surface, perfectly suited for modern lobbies and front‑of‑house spaces. Designed for functionality, it includes built‑in storage, cable management, and optional lighting, combining durability with a polished aesthetic that greets visitors with professionalism.'
    },

    // azeem update 
    // living room start
    {
      imgSrc: ['../pics/products/living-room/chair1.webp', '../pics/products/living-room/chair1-alt.webp', '../pics/products/living-room/chair1-alt-2.webp'],
      name: 'Rovak Sofa Set',
      fullname: 'Rovak Sofa Set Bundle (3+2 seater) Grey',
      category: 'living-room-sofas',
      price: {
        original: 157000,
        discounted: 88000
      },
      description: 'Sleek Modern Aesthetic Elevate your living space with the Rovak Sofa Set, featuring a sophisticated grey finish that complements any contemporary interior. This 3+2 seater bundle is designed to provide a perfect balance of style and functionality, making it the focal point of your home.'

    },
    {
      imgSrc: ['../pics/products/living-room/chair2.webp', '../pics/products/living-room/chair2-alt.webp', '../pics/products/living-room/chair2-alt-2.webp'],
      name: 'Osborne Sofa',
      fullname: 'Osborne Sofa HLD-24 (2 + 3 Seater) bundle',
      category: 'living-room-sofas',
      price: {
        original: 150000,
        discounted: 89000
      },
      description: 'The Osborne Sofa HLD-24 (2 + 3 Seater) bundle is a contemporary and cost-effective seating solution designed for modern living rooms and formal drawing areas. This specific HLD-24 variant stands out for its sleek faux leather finish, offering a more structured and easy-to-maintain alternative to the fabric versions in the Osborne range. '

    },
    {
      imgSrc: ['../pics/products/living-room/chair3.webp', '../pics/products/living-room/chair3-alt.webp', '../pics/products/living-room/chair3-alt-2.webp'],
      name: 'Harry Sofa',
      fullname: 'Harry Sofa 2+3 Seater Set Bundle',
      category: 'living-room-sofas',
      price: {
        original: 120000,
        discounted: 68000
      },
      description: 'Upgrade your living space with the Harry Sofa Bundle, a perfect blend of contemporary style and cloud-like comfort. This set includes both the spacious 3-seater and the cozy 2-seater, offering a cohesive, high-end look for your home.'

    },
    {
      imgSrc: ['../pics/products/living-room/chair4.webp', '../pics/products/living-room/chair4-alt.webp', '../pics/products/living-room/chair4-alt-2.webp'],
      name: 'Osborne L Shape sofa',
      fullname: 'Osborne L Shape sofa (202-18)',
      category: 'living-room-sofas',
      price: {
        original: 110000,
        discounted: 75000
      },
      description: 'The Osborne L-Shape Sofa (202-18) is a versatile, modern sectional from Habitt, designed for those who want to maximize seating without taking up the entire room. Unlike the HLD-24 bundle which consists of separate units, this is a continuous L-shaped piece'

    },
    {
      imgSrc: ['../pics/products/living-room/chair5.webp', '../pics/products/living-room/chair5-alt.webp', '../pics/products/living-room/chair5-alt-2.webp'],
      name: 'Haven Coffee Table',
      fullname: 'Haven Coffee Table',
      category: 'living-room-sofas',
      price: {
        original: 120000,
        discounted: 99000
      },
      description: 'The Haven Coffee Table from Habitt is a standout piece in their "Bargain" series, known for its unique blend of soft textures and modern structural design. Unlike traditional all-wood coffee tables, the Haven model is designed to add a layer of "plush" elegance to a living space.'

    },
    {
      imgSrc: ['../pics/products/living-room/chair6.webp', '../pics/products/living-room/chair6.webp',],
      name: 'Osborne Sofa',
      fullname: 'Osborne Sofa 2 + 3 seater bundle',
      category: 'living-room-sofas',
      price: {
        original: 110000,
        discounted: 75000
      },
      description: 'The Osborne Sofa 2 + 3 Seater Bundle from Habitt is a complete living room set designed for modern, space-conscious homes. It offers a coordinated look by combining a 2-seater and a 3-seater sofa, typically available in either Suede Fabric or Faux Leather (HLD-24).'

    },
    {
      imgSrc: ['../pics/products/living-room/chair7.webp', '../pics/products/living-room/chair7-alt.webp', '../pics/products/living-room/chair7-alt-2.webp'],
      name: 'Sutherland X Sofa 2 Seater',
      fullname: 'Sutherland X Sofa 2 Seater',
      category: 'living-room-sofas',
      price: {
        original: 150000,
        discounted: 84000
      },
      description: 'The Sutherland X 2-Seater Sofa is a premium, contemporary piece from Habitt’s luxury collection. It is designed to be a "classy yet comfortable" centerpiece, featuring a sophisticated silhouette that works well in both minimalist and formal settings.'

    },
    {
      imgSrc: ['../pics/products/living-room/chair9.webp', '../pics/products/living-room/chair9-alt.webp', '../pics/products/living-room/chair9-alt-2.webp'],
      name: 'Osborne Sofa',
      fullname: 'Osborne Sofa HLD-24 (2 + 3 Seater) bundle',
      category: 'living-room-sofas',
      price: {
        original: 322000,
        discounted: 263000
      },
      description: 'The Osborne series is known for its "less is more" aesthetic. This bundle includes both the 2-seater and 3-seater units, ensuring a coordinated look for your lounge. Unlike the fabric versions of the Osborne range, the HLD-24 features a durable faux leather upholstery that offers a premium look with significantly easier maintenance.'

    },
    {
      imgSrc: ['../pics/products/living-room/chair8.webp', '../pics/products/living-room/chair8-alt.webp', '../pics/products/living-room/chair8-alt-2.webp'],
      name: 'Lazo Executive Sofa Set',
      fullname: 'Lazo Executive Sofa Set – Premium Leatherette Office Sofa in Black (Single Seater, 2-Seater, or 4-Seater Bundle)',
      category: 'living-room-sofas',
      price: {
        original: 150000,
        discounted: 84000
      },
      description: 'The Lazo Executive Sofa Set is a premium office furniture range from Habitt designed specifically for professional environments, such as executive cabins, reception areas, and corporate lounges. Unlike the home-oriented Osborne series, the Lazo focuses on a sleek, high-profile "executive" aesthetic with high-density support.'

    },
    {
      imgSrc: ['../pics/products/living-room/chair10.webp', '../pics/products/living-room/chair10-alt.webp', '../pics/products/living-room/chair10-alt-2.webp'],
      name: 'Billy L Shape Sofa',
      fullname: 'Billy L Shape Sofa',
      category: 'living-room-sofas',
      price: {
        original: 110000,
        discounted: 79000
      },
      description: 'The Billy L-Shape Sofa from Habitt is a popular, space-saving sectional designed for smaller urban lounges and TV rooms. It is widely recognized for its "classical touch" and versatility, often positioned as one of the most budget-friendly L-shaped options in their collection.'

    },
    {
      imgSrc: ['../pics/products/living-room/chair11.webp', '../pics/products/living-room/chair11-alt.webp', '../pics/products/living-room/chair11-alt-2.webp'],
      name: 'Billy 2 Seater Sofa',
      fullname: 'Billy 2 Seater Sofa',
      category: 'living-room-sofas',
      price: {
        original: 140000,
        discounted: 79000
      },
      description: 'Perfect for small apartments, cozy reading nooks, or as a chic accent piece, the Billy 2-Seater Sofa blends mid-century charm with modern functionality. Its streamlined silhouette and tapered legs offer an airy, open feel that overwhelm your space.'

    },

    // array of shoe racks 
    {
      imgSrc: ['../pics/products/living-room/racks1.webp', '../pics/products/living-room/racks1-alt.webp', '../pics/products/living-room/racks1-alt-2.webp'],
      name: 'Ramzo Shoe Rack',
      fullname: 'Ramzo Shoe Rack',
      category: 'shoe-racks',
      price: {
        original: 10000,
        discounted: 5600
      },
      description: 'Built for the busy household that does not want to sacrifice style for durability, the Ramzo Shoe Rack is a powerhouse of organization. With its bold lines and reinforced construction, the Ramzo collection brings an industrial edge to your entryway while keeping your footwear collection perfectly staged and accessible.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks2.webp', '../pics/products/living-room/racks2-alt.webp', '../pics/products/living-room/racks2-alt-2.webp'],
      name: 'Rica Shoe Rack',
      fullname: 'Rica Shoe Rack',
      category: 'shoe-racks',
      price: {
        original: 15000,
        discounted: 8000
      },
      description: 'Clean, contemporary, and incredibly versatile, the Rica Shoe Rack is the ultimate "no-fuss" storage solution. Designed with a slim metal or light-wood profile, the Rica focuses on an airy, open-concept look that keeps your entryway feeling spacious while keeping your footwear perfectly aligned.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks3.webp', '../pics/products/living-room/racks3-alt.webp', '../pics/products/living-room/racks3-alt-2.webp'],
      name: 'Teca Shoe Rack',
      fullname: 'Teca Shoe Rack',
      category: 'shoe-racks',
      price: {
        original: 100000,
        discounted: 50000
      },
      description: 'Add a touch of timeless character to your home with the Teca Shoe Rack. Named for its rich tones and structural elegance, the Teca collection is designed for those who appreciate the beauty of wood grain and the efficiency of smart organization. It’s a furniture-grade solution that turns a messy entryway into a warm, welcoming gallery.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks4.webp', '../pics/products/living-room/racks4-alt.webp', '../pics/products/living-room/racks4-alt-2.webp'],
      name: 'Finn Shoe Rack',
      fullname: 'Finn Shoe Rack',
      category: 'shoe-racks',
      price: {
        original: 55000,
        discounted: 48000
      },
      description: 'Bring a touch of Nordic charm to your entryway with the Finn Shoe Rack. Inspired by clean, functional Scandinavian design, the Finn collection balances warm aesthetics with a sturdy, practical frame. It’s the perfect solution for those who want their home to feel calm and curated the moment they step through the door.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks5.webp', '../pics/products/living-room/racks5-alt.webp', '../pics/products/living-room/racks5-alt-2.webp'],
      name: 'Edge Shoe Rack',
      fullname: 'Edge Shoe Rack – Sleek Tiered Organizer for Heels & Flats',
      category: 'shoe-racks',
      price: {
        original: 9000,
        discounted: 6000
      },
      description: 'Elevate your closet or entryway with the Edge Shoe Rack, a high-performance organizer designed specifically for the modern shoe lover. With its ultra-slim profile and specialized tiered design, the Edge provides a sophisticated home for everything from towering stilettos to minimalist flats.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks6.webp', '../pics/products/living-room/racks6-alt.webp', '../pics/products/living-room/racks6-alt-2.webp'],
      name: 'Roy Shoe Rack',
      fullname: 'Roy Shoe Rack',
      category: 'shoe-racks',
      price: {
        original: 99000,
        discounted: 86000
      },
      description: 'Keep your footwear neatly organized and protected with this Modern PVC Shoe Cabinet 2 Layers. Designed with a sleek black swirl-pattern frame and frosted translucent doors, this compact shoe storage unit blends functionality with contemporary style. The dual-layer design provides ample space for everyday shoes, sandals, sneakers, and flats while keeping them dust-free and easily accessible.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks7.webp', '../pics/products/living-room/racks7-alt.webp', '../pics/products/living-room/racks7-alt-2.webp'],
      name: 'Modern PVC Shoe Cabinet',
      fullname: 'Modern PVC Shoe Cabinet 2 Layers – Dustproof Stackable Shoe Storage Organizer with Translucent Doors',
      category: 'shoe-racks',
      price: {
        original: 8000,
        discounted: 7500
      },
      description: ''
    },
    {
      imgSrc: ['../pics/products/living-room/racks8.webp', '../pics/products/living-room/racks8-alt.webp', '../pics/products/living-room/racks8-alt-2.webp'],
      name: 'Foldable Shoe Rack',
      fullname: 'Foldable Shoe Rack with Wall Hanging – 4 Tier / 5 Tier Space Saving Shoe Organizer',
      category: 'shoe-racks',
      price: {
        original: 10000,
        discounted: 9500
      },
      description: 'Meet the most versatile storage solution for tight spaces. Whether you choose the 4-Tier or 5-Tier model, this Foldable Wall-Hanging Shoe Rack is engineered to clear your floor and streamline your routine. Its unique hybrid design allows it to stand freely or mount securely to walls and doors, making it a "must-have" for dorms, small apartments, and busy mudrooms.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks9.webp'],
      name: 'Modern PVC Shoe Cabinet',
      fullname: 'Modern PVC Shoe Cabinet 2 Layers – Dustproof Stackable Shoe Storage Organizer with Translucent Doors',
      category: 'shoe-racks',
      price: {
        original: 10000,
        discounted: 5000
      },
      description: 'Upgrade your home organization with the Modern PVC 2-Tier Shoe Cabinet. Designed for those who value both aesthetics and hygiene, this cabinet features a minimalist profile with translucent doors, allowing you to identify your favorite pair at a glance while keeping them protected from dust and debris.'
    },
    {
      imgSrc: ['../pics/products/living-room/racks10.webp', '../pics/products/living-room/racks10-alt.webp', '../pics/products/living-room/racks10-alt-2.webp'],
      name: 'Bamboo Shoe Rack',
      fullname: 'Bamboo Shoe Rack 6 Floor – Natural Wooden Storage Organizer',
      category: 'shoe-racks',
      price: {
        original: 10000,
        discounted: 5000
      },
      description: 'Tired of entryway clutter? The Bamboo 6-Tier Shoe Rack offers a sustainable and stylish way to reclaim your space. Crafted from 100% natural bamboo, this vertical organizer maximizes storage without sacrificing floor space, making it an ideal fit for narrow hallways, walk-in closets, or mudrooms.'
    },

    // benches-ottomans starts 

    {
      imgSrc: ['../pics/products/living-room/ottomans1.webp', '../pics/products/living-room/ottomans1-alt.webp', '../pics/products/living-room/ottomans1-alt-2.webp'],
      name: 'Brown Punched Puff',
      fullname: 'Brown Punched Puff',
      category: 'ottomans',
      price: {
        original: 30000,
        discounted: 27000
      },
      description: 'A perfect blend of structured detail and airy comfort. Featuring an intricate perforated "punched" texture across a voluminous, pillowy silhouette, this piece brings a sophisticated touch to a classic earthy palette. Stylish, tactile, and effortlessly versatile'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans2.webp', '../pics/products/living-room/ottomans2-alt.webp', '../pics/products/living-room/ottomans2-alt-2.webp'],
      name: 'Taj Pouf',
      fullname: 'Taj Pouf',
      category: 'ottomans',
      price: {
        original: 45000,
        discounted: 31000
      },
      description: 'Bring a touch of artisanal elegance to your home with the Taj Pouf. Hand-finished in a rich, earthy brown, this piece features intricate "punched" perforations inspired by traditional Moroccan motifs. Its firm, supportive "puff" silhouette makes it a versatile triple-threat: a sophisticated footrest, a chic side table, or extra seating for guests.'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans3.webp', '../pics/products/living-room/ottomans3-alt.webp', '../pics/products/living-room/ottomans3-alt-2.webp'],
      name: 'Shahi Pouf Purple',
      fullname: 'Shahi Pouf Purple',
      category: 'ottomans',
      price: {
        original: 38000,
        discounted: 30000
      },
      description: 'Exude effortless luxury with the Shahi Pouf in a deep, regal purple. Named for the Persian word for "Royal," this pouf is a masterpiece of texture and tone. Its lush, jewel-toned exterior is accented by intricate punched detailing, offering a sophisticated "puff" silhouette that commands attention in any room.'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans4.webp', '../pics/products/living-room/ottomans4-alt.webp', '../pics/products/living-room/ottomans4-alt-2.webp'],
      name: 'Black Punched Puff',
      fullname: 'Black Punched Puff',
      category: 'ottomans',
      price: {
        original: 30000,
        discounted: 25000
      },
      description: 'The ultimate in modern minimalism. This sleek, jet-black pouf features a precision "punched" perforated texture that breaks up the monochromatic tone with subtle architectural depth. Its bold, pillowy silhouette offers a high-contrast look that fits perfectly in industrial, contemporary, or monochromatic interiors.'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans5.webp'],
      name: 'Richard Settee LF-102',
      fullname: 'Richard Settee LF-102',
      category: 'ottomans',
      price: {
        original: 88000,
        discounted: 57000
      },
      description: 'The Richard Settee LF-102 is a masterclass in mid-century modern elegance, blending minimalist lines with a high-end, architectural feel. Designed to be a statement piece that does not overwhelm a room, it’s a favorite for those who appreciate the "less is more" philosophy'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans6.webp', '../pics/products/living-room/ottomans6-alt.webp', '../pics/products/living-room/ottomans6-alt-2.webp'],
      name: 'Nimoy Wooden Arm Setti',
      fullname: 'Nimoy Wooden Arm Setti',
      category: 'ottomans',
      price: {
        original: 29000,
        discounted: 24000
      },
      description: 'The Nimoy Wooden Arm Settee is a sophisticated blend of mid-century aesthetics and practical modern design. It is particularly known for its unique structural elements that allow it to function as both a comfortable seat and a utility surface.'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans7.webp', '../pics/products/living-room/ottomans7-alt.webp', '../pics/products/living-room/ottomans7-alt-2.webp'],
      name: 'Togo Puff',
      fullname: 'Togo Puff',
      category: 'ottomans',
      price: {
        original: 39000,
        discounted: 35000
      },
      description: 'The Togo Puff (often referred to as the Togo Ottoman or Footstool) is the versatile, low-profile companion to the world-famous Togo seating collection. Designed by Michel Ducaroy for Ligne Roset in 1973, it carries the same "tube of toothpaste" inspired aesthetic that redefined modern lounging.'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans8.webp', '../pics/products/living-room/ottomans8-alt.webp', '../pics/products/living-room/ottomans8-alt-2.webp'],
      name: 'Richard Setti LF-70',
      fullname: 'Richard Setti LF-70',
      category: 'ottomans',
      price: {
        original: 80000,
        discounted: 58000
      },
      description: 'The Richard Settee LF-70 (also known as the Richard Setti) is an artful, bench-style seating piece designed primarily for bedrooms and formal entryways. While it shares the "Richard" name with other contemporary sofas, the LF-70 is distinct for its sleek, armless bench silhouette and its connection to nature-inspired palettes'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans9.webp', '../pics/products/living-room/ottomans9-alt.webp', '../pics/products/living-room/ottomans9-alt-2.webp'],
      name: 'Nash Puff',
      fullname: 'Nash Puff',
      category: 'ottomans',
      price: {
        original: 30000,
        discounted: 25000
      },
      description: 'The Nash Puff (or Nash Ottoman) is a contemporary, block-style accent piece designed with a focus on geometric simplicity and "sink-in" comfort. It is the quintessential modern footstool that doubles as an informal seat or a soft coffee table.'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans10.webp', '../pics/products/living-room/ottomans10-alt.webp', '../pics/products/living-room/ottomans10-alt-2.webp'],
      name: 'Russo Puff',
      fullname: 'Russo Puff',
      category: 'ottomans',
      price: {
        original: 40500,
        discounted: 28000
      },
      description: 'The Russo Puff (often listed as the Russo Ottoman) is a vibrant, multi-functional accent piece designed to balance modern luxury with space-saving utility. It is widely recognized for its bold use of color and high-end metallic detailing.'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans11.webp', '../pics/products/living-room/ottomans11-alt.webp', '../pics/products/living-room/ottomans11-alt-2.webp'],
      name: 'Hem Puff',
      fullname: 'Hem Puff',
      category: 'ottomans',
      price: {
        original: 84000,
        discounted: 56000
      },
      description: 'The Hem Puff (most commonly known as the Puffy Ottoman) is a core piece of the Puffy Seating Collection designed by British designer Faye Toogood for the Swedish brand, Hem. It is celebrated for its playful "contradiction" between a rigid industrial frame and an almost impossibly soft, duvet-like cushion'
    },
    {
      imgSrc: ['../pics/products/living-room/ottomans12.webp', '../pics/products/living-room/ottomans12-alt.webp', '../pics/products/living-room/ottomans12-alt-2.webp'],
      name: 'Bauer Day Bed',
      fullname: 'Bauer Day Bed',
      category: 'ottomans',
      price: {
        original: 60000,
        discounted: 48000
      },
      description: 'The Bauer Day Bed is a versatile, space-saving furniture piece designed for modern living. It is specifically engineered to function as both a sofa and a bed, making it a popular choice for studio apartments, guest rooms, or home offices where flexibility is key'
    },

    // array of consoles 
    {
      imgSrc: ['../pics/products/living-room/console1.webp'],
      name: 'Mono Console',
      fullname: 'Mono Console',
      category: 'consoles',
      price: {
        original: 20000,
        discounted: 14000
      },
      description: 'The Mono Console is a minimalist statement piece characterized by its clean, linear geometries and versatile design. It is often part of contemporary furniture collections (like those from Pianca or Habitt) that focus on a "pared-back" aesthetic, making it suitable as an entryway table, a slim desk, or a sofa-back console.'
    },
    {
      imgSrc: ['../pics/products/living-room/console2.webp', '../pics/products/living-room/console2-alt.webp', '../pics/products/living-room/console2-alt-2.webp'],
      name: 'Ramzo Console with Mirror',
      fullname: 'Ramzo Console with Mirror',
      category: 'consoles',
      price: {
        original: 10000,
        discounted: 8000
      },
      description: 'The Ramzo Console with Mirror is a modern, space-saving furniture set designed to add a clean, architectural touch to entryways or hallways. It is particularly popular for its slim profile, allowing it to fit into narrow spaces while providing a functional surface for daily essentials.'
    },
    {
      imgSrc: ['../pics/products/living-room/console3.webp', '../pics/products/living-room/console3-alt.webp', '../pics/products/living-room/console3-alt-2.webp'],
      name: 'Pivot Wooden Shelf Console',
      fullname: 'Pivot Wooden Shelf Console – Modern Multi-Tier Organizer',
      category: 'consoles',
      price: {
        original: 48000,
        discounted: 35000
      },
      description: 'The Pivot Wooden Shelf Console is a versatile, multi-tier organizer designed to maximize vertical space while adding a modern, architectural touch to your interior. It is particularly popular for its rotating or "pivot" capability, allowing you to adjust its shape to fit corners or act as a customized room divider.'
    },
    {
      imgSrc: ['../pics/products/living-room/console4.webp', '../pics/products/living-room/console4-alt.webp', '../pics/products/living-room/console4-alt-2.webp'],
      name: 'Aura Full-Length Wooden Standing Mirror',
      fullname: 'Aura Full-Length Wooden Standing Mirror – Elegant Adjustable Floor Mirror',
      category: 'consoles',
      price: {
        original: 56000,
        discounted: 40000
      },
      description: 'The Aura Full-Length Wooden Standing Mirror is a sophisticated dressing mirror designed to serve as both a functional tool and a piece of modern decor. Its hallmark is the adjustable tilting mechanism, which allows you to customize the reflection angle to suit your height or the room lighting.'
    },
    {
      imgSrc: ['../pics/products/living-room/console5.webp', '../pics/products/living-room/console5-alt.webp', '../pics/products/living-room/console5-alt-2.webp'],
      name: 'Oafleaf Wall Mirror',
      fullname: 'Oafleaf Wall Mirror – Modern Wooden Frame Decorative Mirror',
      category: 'consoles',
      price: {
        original: 43000,
        discounted: 40000
      },
      description: 'The Oafleaf Wall Mirror is a striking decorative piece that combines nature-inspired artistry with a modern, minimalist edge. Its most distinguishing feature is its organic leaf-inspired silhouette, which breaks away from traditional rectangular or round shapes to serve as functional wall art'
    },
    {
      imgSrc: ['../pics/products/living-room/console6.webp', '../pics/products/living-room/console6-alt.webp', '../pics/products/living-room/console6-alt-2.webp'],
      name: 'James Console',
      fullname: 'James Console',
      category: 'consoles',
      price: {
        original: 77000,
        discounted: 50000
      },
      description: 'The James Console refers to several distinct furniture designs ranging from modern modular pieces to traditional solid wood tables. The most common modern version is a sleek, space-saving unit designed for entryways and high-traffic areas.'
    },
    {
      imgSrc: ['../pics/products/living-room/console7.webp', '../pics/products/living-room/console7-alt.webp', '../pics/products/living-room/console7-alt-2.webp'],
      name: 'Kyoto Rotating Wall Mirror',
      fullname: 'Kyoto Rotating Wall Mirror with Wooden Storage Shelves – Multi-Functional Organizer',
      category: 'consoles',
      price: {
        original: 50000,
        discounted: 35000
      },
      description: 'The Kyoto Rotating Wall Mirror is a clever, space-saving furniture solution that merges a full-length dressing mirror with a hidden storage organizer. Designed for high efficiency, it is an ideal addition to compact bedrooms, dressing rooms, or entryways.'
    },
    {
      imgSrc: ['../pics/products/living-room/console8.webp', '../pics/products/living-room/console8-alt.webp', '../pics/products/living-room/console8-alt-2.webp'],
      name: 'Kenton Console',
      fullname: 'Kenton Console',
      category: 'consoles',
      price: {
        original: 80000,
        discounted: 51000
      },
      description: 'The Kenton Console is a sleek, modern furniture piece often used in entryways and hallways. Depending on the brand, it typically follows one of two design directions: a high-end, mixed-material statement piece or a minimalist, industrial-style storage solution.'
    },
    {
      imgSrc: ['../pics/products/living-room/console9.webp', '../pics/products/living-room/console9-alt.webp', '../pics/products/living-room/console9-alt-2.webp'],
      name: 'Pearl Console',
      fullname: 'Pearl Console',
      category: 'consoles',
      price: {
        original: 60000,
        discounted: 55000
      },
      description: 'The Pearl Console is a sophisticated, mixed-material statement piece that balances industrial structural elements with a clean, modern tabletop. It is particularly well-suited for minimalist entryways or as a behind-the-sofa accent.'
    },
    {
      imgSrc: ['../pics/products/living-room/console10.webp', '../pics/products/living-room/console10-alt.webp', '../pics/products/living-room/console10-alt-2.webp'],
      name: 'Veronica Console',
      fullname: 'Veronica Console(Bernard Series 2)',
      category: 'consoles',
      price: {
        original: 70000,
        discounted: 61000
      },
      description: 'The Veronica Console (Bernard Series 2) is a sophisticated, low-profile furniture piece that blends organic materials with a refined, contemporary silhouette. Part of the broader Bernard Series, it is designed to add functional elegance to transition spaces like entryways and hallways.'
    },
    {
      imgSrc: ['../pics/products/living-room/console11.webp', '../pics/products/living-room/console11-alt.webp', '../pics/products/living-room/console11-alt-2.webp'],
      name: 'Franklin Console',
      fullname: 'Franklin Console',
      category: 'consoles',
      price: {
        original: 30000,
        discounted: 25000
      },
      description: 'The Franklin Console is a versatile, high-quality furniture piece designed to add a touch of modern sophistication to your home transition spaces. Depending on the specific retailer (most notably Habitt), it is celebrated for its clean lines and durable construction.'
    },

    // array for entertainment units 
    {
      imgSrc: ['../pics/products/living-room/enjoy1.webp', '../pics/products/living-room/enjoy-alt.webp', '../pics/products/living-room/enjoy-alt-2.webp'],
      name: 'Nora Tea Trolley',
      fullname: 'Nora Tea Trolley',
      category: 'living-room-entertainment',
      price: {
        original: 30000,
        discounted: 25000
      },
      description: 'Whether you’re looking for the best seat in the house for a Sunday nap or a stylish accent piece to tie the room together, our collection of living room chairs is designed for both form and function'
    },

    {
      imgSrc: ['../pics/products/living-room/enjoy2.webp', '../pics/products/living-room/enjoy2-alt.webp', '../pics/products/living-room/enjoy2-alt-2.webp'],
      name: 'Nora Nest of Table Set',
      fullname: 'Nora Nest of Table Set',
      category: 'living-room-entertainment',
      price: {
        original: 55000,
        discounted: 48000
      },
      description: 'The Nora Nest of Tables is the ultimate solution for the modern home where space is a premium but style is non-negotiable. Featuring a sleek, minimalist silhouette, this set offers a tiered aesthetic that adds architectural interest to your living room while providing maximum utility.'
    },
    {
      imgSrc: ['../pics/products/living-room/enjoy3.webp', '../pics/products/living-room/enjoy3-alt.webp', '../pics/products/living-room/enjoy3-alt-2.webp'],
      name: 'Nora 4 Person Dining Table',
      fullname: 'Nora 4 Person Dining Table',
      category: 'living-room-entertainment',
      price: {
        original: 259000,
        discounted: 248000
      },
      description: 'The Nora 4-Person Dining Table is where modern minimalism meets everyday warmth. Designed specifically for smaller dining rooms, breakfast nooks, or stylish apartment living, this table provides a generous surface for four without overwhelming your floor plan.'
    },
    {
      imgSrc: ['../pics/products/living-room/enjoy4.webp', '../pics/products/living-room/enjoy4-alt.webp', '../pics/products/living-room/enjoy4-alt-2.webp'],
      name: 'Haven TV Unit',
      fullname: 'Haven TV Unit',
      category: 'living-room-entertainment',
      price: {
        original: 15000,
        discounted: 120000
      },
      description: 'Transform your living area into a true retreat with the Haven TV Unit. True to its name, this piece is designed to bring a sense of calm and organization to your entertainment space, blending soft aesthetics with high-capacity storage.'
    },
    {
      imgSrc: ['../pics/products/living-room/enjoy5.webp', '../pics/products/living-room/enjoy5-alt.webp', '../pics/products/living-room/enjoy5-alt-2.webp'],
      name: 'Timberland Nest of Table Set',
      fullname: 'Timberland Nest of Table Set',
      category: 'living-room-entertainment',
      price: {
        original: 60000,
        discounted: 52000
      },
      description: 'Bring a touch of the outdoors in with the Timberland Nest of Table Set. Inspired by the raw beauty of natural landscapes, this set celebrates the unique character of wood grain, knots, and textures. It’s the perfect companion for a cozy, rustic interior or a modern home looking for a grounded, earthy accent.'
    },
    {
      imgSrc: ['../pics/products/living-room/enjoy6.webp', '../pics/products/living-room/enjoy6-alt.webp', '../pics/products/living-room/enjoy6-alt-2.webp'],
      name: 'Timberland Shelf',
      fullname: 'Timberland Shelf',
      category: 'living-room-entertainment',
      price: {
        original: 169000,
        discounted: 112000
      },
      description: 'The Timberland Shelf brings a rugged, architectural element to your walls, turning everyday storage into a curated display. Inspired by the sprawling beauty of old-growth forests, this shelving unit balances heavy-duty durability with the refined warmth of natural wood grains.'
    },
    {
      imgSrc: ['../pics/products/living-room/enjoy7.webp', '../pics/products/living-room/enjoy7-alt.webp', '../pics/products/living-room/enjoy7-alt-2.webp'],
      name: 'Timberland TV Unit',
      fullname: 'Timberland TV Unit',
      category: 'living-room-entertainment',
      price: {
        original: 130000,
        discounted: 112000
      },
      description: 'Ground your entertainment space with the Timberland TV Unit, a piece that brings the soulful, steady presence of the forest into your living room. Designed for those who appreciate the raw beauty of natural materials, this unit balances a rugged, "lodge-inspired" aesthetic with the practical needs of a high-tech home.'
    },
    {
      imgSrc: ['../pics/products/living-room/enjoy8.webp', '../pics/products/living-room/enjoy8-alt.webp', '../pics/products/living-room/enjoy8-alt-2.webp'],
      name: 'Longzo tv unit',
      fullname: 'Longzo tv unit',
      category: 'living-room-entertainment',
      price: {
        original: 49000,
        discounted: 30000
      },
      description: 'The Longzo TV Unit is a masterclass in understated retro-chic. Drawing inspiration from classic mid-century silhouettes, this piece brings a sense of rhythmic design to your entertainment space with its signature slatted or textured door fronts and tapered "compass" legs.'
    },
    {
      imgSrc: ['../pics/products/living-room/enjoy9.webp', '../pics/products/living-room/enjoy9-alt.webp', '../pics/products/living-room/enjoy9-alt-2.webp'],
      name: 'Roy tv unit',
      fullname: 'Roy tv unit',
      category: 'living-room-entertainment',
      price: {
        original: 89000,
        discounted: 54000
      },
      description: 'The roy TV Unit is a masterclass in understated retro-chic. Drawing inspiration from classic mid-century silhouettes, this piece brings a sense of rhythmic design to your entertainment space with its signature slatted or textured door fronts and tapered "compass" legs.'
    },










  ];

  products.forEach(function (item) {
    item.id = crypto.randomUUID();
    if (item.category == 'bed') {
      generateHtml(item, bedroomBedsContainer);
      generateHtml(item, bedroomContainer);
    } else if (item.category == 'bedroom-chair') {
      generateHtml(item, bedroomChairsContainer);
      generateHtml(item, bedroomContainer);
    } else if (item.category == 'wardrobe') {
      generateHtml(item, bedroomWardrobeContainer);
      generateHtml(item, bedroomContainer);
    } else if (item.category == 'dresser') {
      generateHtml(item, bedroomDressersContainer);
      generateHtml(item, bedroomContainer);
    } else if (item.category == 'table') {
      generateHtml(item, bedroomTablesContainer);
      generateHtml(item, bedroomContainer);

    } else if (item.category == 'dining-table') {
      generateHtml(item, diningRoomTables);
      generateHtml(item, diningRoom);
    } else if (item.category == 'crockery') {
      generateHtml(item, diningRoomCrockery);
      generateHtml(item, diningRoom);
    } else if (item.category == 'dining-chairs') {
      generateHtml(item, diningRoomChairs);
      generateHtml(item, diningRoom);

    } else if (item.category == 'consoles') {
      generateHtml(item, livingRoomConsoles);
      generateHtml(item, livingRoom);
    } else if (item.category == 'living-room-entertainment') {
      generateHtml(item, livingRoomEntertainment);
      generateHtml(item, livingRoom);
    } else if (item.category == 'ottomans') {
      generateHtml(item, livingRoomOttomans);
      generateHtml(item, livingRoom);
    } else if (item.category == 'shoe-racks') {
      generateHtml(item, livingRoomShoeRacks);
      generateHtml(item, livingRoom);
    } else if (item.category == 'living-room-sofas') {
      generateHtml(item, livingRoomSofas);
      generateHtml(item, livingRoom);

    } else if (item.category == 'office-chairs') {
      generateHtml(item, officeRoomChairs);
      generateHtml(item, officeRoom);
    } else if (item.category == 'office-credenza') {
      generateHtml(item, officeRoomCredenza);
      generateHtml(item, officeRoom);
    } else if (item.category == 'office-meeting') {
      generateHtml(item, officeRoomMeeting);
      generateHtml(item, officeRoom);
    } else if (item.category == 'office-reception') {
      generateHtml(item, officeRoomReception);
      generateHtml(item, officeRoom);
    } else if (item.category == 'office-workstation') {
      generateHtml(item, officeRoomWorkstation);
      generateHtml(item, officeRoom);
    }
  });

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const image = $('.card img');
  image.on('mouseenter', function (event) {
    const cardId = event.target.parentElement.id;
    products.forEach(function (product) {
      if (cardId == product.id && product.imgSrc[1]) {
        event.target.src = product.imgSrc[1];
      }
    });
  });
  image.on('mouseleave', function (event) {
    const cardId = event.target.parentElement.id;
    products.forEach(function (product) {
      if (cardId == product.id) {
        event.target.src = product.imgSrc[0];
      }
    });
  });



  image.on('click', function (event) {
    const cardId = event.target.parentElement.id;
    products.forEach(function (item) {
      if (cardId == item.id) {
        const price = item.price.discounted;
        let quantity = 1;
        $('.product-modal-body').html(`
      <div class="row">
              <div class="col-md-6">
                <img src="${item.imgSrc[0]}" width="100%" class="main-display-image position-relative" alt="image not found">
                <span style="top: 30px; left: 30px;" class="position-absolute bg-danger text-white rounded-pill px-5 py-3 shadow">${Math.round((item.price.original - item.price.discounted) / item.price.original * 100)}% Sale</span>
                <div class="display-images">
                  <img src="${item.imgSrc[0]}" width="100px" alt="image not found" class="display-image">
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <h1 class="mb-3">${item.fullname}</h1>
                  <p  class="mb-0 mt-1 text-secondary">SKU: ${Math.round(Math.random() * 100000)}</p>
                  <p  class="mb-0 text-secondary" style="text-transform: capitalize">product type: ${item.category}</p>
                  <p class="fs-3 mt-3 text-danger fw-bold">Rs. ${price} <del class="text-muted">Rs. ${item.price.original}</del></p>
                  <div class="">
              <p class="fw-bold mb-0">Description:</p>
              <p>${item.description}</p>
              </div>
                  <div>
                    <p class="mb-1">Quantity:</p>
                    <span class="rounded-pill p-2 border border-2">
                      <button class="btn mb-1 fs-5 decrease-quantity">-</button><span class="quantity">${quantity}</span><button class="btn mb-1 increase-quantity">+</button>
                    </span>
                  </div>
                  <p class="sub-total fs-4">Subtotal: <span class="text-success fs-4">Rs. ${quantity * price}</span></p>
                  <a class="btn btn-outline-dark px-5 py-3 w-75 mt-2 rounded-pill order-now" data-bs-dismiss="modal" aria-label="Close" href="#">Buy Now</a>
                  <a class="btn btn-outline-dark px-5 py-3 w-75 mt-2 rounded-pill add_to_cart" href="#">Add To Cart</a>
                </div>
              </div>
            </div>
      `);

        $('.increase-quantity').on('click', function () {
          quantity++;
          $('.quantity').html(quantity);
          $('.sub-total').html(`Subtotal: <span class="text-success fs-4">Rs. ${quantity * price}</span>`);
        })
        $('.decrease-quantity').on('click', function () {
          if (quantity > 1) {
            quantity--;
          }
          $('.quantity').html(quantity);
          $('.sub-total').html(`Subtotal: <span class="text-success fs-4">Rs. ${quantity * price}</span>`);
        })
        if (item.imgSrc[1] && item.imgSrc[2]) {
          $('.display-images').append(`
        <img src="${item.imgSrc[1]}" width="100px" alt="image not found" class="display-image">
        <img src="${item.imgSrc[2]}" width="100px" alt="image not found" class="display-image"> 
        `)
        } else if (item.imgSrc[1]) {
          $('.display-images').append(`
        <img src="${item.imgSrc[1]}" width="100px" alt="image not found" class="display-image"> 
        `)
        }

        $('.display-image').on('mouseenter', function (event) {
          const imageSource = event.target.src;
          $('.main-display-image')[0].src = imageSource;
        });
        $('.display-image').on('mouseleave', function () {
          $('.main-display-image')[0].src = item.imgSrc[0];
        });






        $('.add_to_cart').click(function () {
          cartItemCount++;
          cartItemQuantity = quantity;
          let imgSrc = item.imgSrc[0];
          let title = item.name;
          let price = item.price.discounted;
          let id = item.id;
          let existingItem = cart.find(item => item.name === title);

          if (existingItem) {
            existingItem.quantity++;
          } else {
            cart.push({
              imgSrc,
              name: title,
              price: price * quantity,
              quantity,
              id
            });
          }
          updateCart();


          localStorage.setItem('cart', JSON.stringify(cart));
        });

        $('.order-now').click(function () {
          Swal.fire({
            title: "Success!",
            text: "Your order has been placed successfully!",
            icon: "success"
          });
        });



      }
    });
  });
  const searchButton = $('.search-button');
  const cardTitle = $('.card-title');

  searchButton.click(function () {
    let checker = 0;
    for (let i = 0; i < cardTitle.length; i++) {
      let cardBody = cardTitle[i].parentElement
      let card = cardBody.parentElement;

      if (cardTitle[i].innerText.toUpperCase().indexOf($('#search').val().toUpperCase()) > -1) {
        card.style.display = 'flex';
        checker++;
      } else {
        card.style.display = 'none';
      }

      if (checker > 0) {
        $('#not_find_anything').text("");
      } else {
        $('#not_find_anything').html("Product not Found");
      }
    }

  });

  $('#search').on('input', function () {
    for (let i = 0; i < cardTitle.length; i++) {
      let cardBody = cardTitle[i].parentElement
      let card = cardBody.parentElement;
      if ($('#search').val() == "") {
        card.style.display = 'flex';
      }
    }
  });

  let cartItemCount = 0;
  let cartItemQuantity = 1;
  updateCart();

  $('.add-to-cart').click(function (event) {
    cartItemCount++;
    let cardId = event.target.parentElement.id;
    products.forEach(function (item) {

      if (cardId == item.id) {
        let imgSrc = item.imgSrc[0];
        let title = item.name;
        let price = item.price.discounted;
        let quantity = cartItemQuantity;
        let id = item.id;

        let existingItem = cart.find(cartItem => cartItem.name == title);

        if (existingItem) {
          existingItem.quantity++;
        } else {
          cart.push({
            imgSrc,
            name: title,
            price: price * quantity,
            quantity,
            id
          });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
      }
    });

  });
  function item_count() {
    $("#cart_item_count").text(cart.length);
  }
  $('#order_btn').attr('data-bs-dismiss', 'offcanvas');
  $('#order_btn').attr('aria-label', 'Close');
  $('#order_btn').removeAttr('href');
  $('#order_btn').click(function () {
    Swal.fire({
      title: "Success!",
      text: "Your order has been placed successfully!",
      icon: "success"
    }).then(function () {
      localStorage.removeItem('cart');
      location.reload();
    });
  });

  function updateCart() {
    $('#order').html('');
    cart.forEach(function (item) {

      let cartItem = `
    <div class="row flex-nowrap align-items-center border-bottom py-3 m-0" id="${item.id}">

  <div class="col-3 text-center">
    <img src="${item.imgSrc}" class="img-fluid w-100" alt="image not found">
  </div>

  <div class="col-3 text-center">
    <h6 class="mb-0" style="font-size:13px;">${item.name}</h6>
  </div>

  <div class="col-2 text-center">
    ${item.quantity}
  </div>

  <div class="col-3 text-center">
    <h6 class="mb-0">
      <span class="cart_item_price">Rs. ${item.price}</span>
    </h6>
  </div>

  <div class="col-1">
    <span class="close" style="cursor:pointer; font-size:25px;">&times;</span>
  </div>

</div>
    `;

      $('#order').append(cartItem);
      $("#cart_item_count").text(cartItemCount);
      $(".close").click(function (event) {
        const card = event.target.parentElement.parentElement;
        if (card.id == item.id) {
          const index = cart.indexOf(item);
          if (index > -1) {
            cart.splice(index, 1);
          }

          card.remove();
          localStorage.setItem('cart', JSON.stringify(cart));
          if (cart.length == 0) {
            $('#order').html('<p class="text-center fs-2 text-muted pt-5">Your cart is empty</p>');
          } 
        }

        item_count();
      });
      item_count();

    });
    item_count();
  };


  function generateHtml(item, container) {
    container.append(`
        <div class="card col-md-3 me-3 mb-3" id=${item.id} style="width: 18rem;">
          <img src="${item.imgSrc[0]}" class="card-img-top position-relative" data-bs-toggle="modal" data-bs-target="#product-backdrop" height="200px" alt="...">
          <span style="top: 10px; left: 20px;" class="position-absolute bg-danger text-white rounded-pill px-3 py-2 shadow">${Math.round((item.price.original - item.price.discounted) / item.price.original * 100)}% Sale</span>
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text"><del class="text-secondary">Rs. ${item.price.original}</del> <span class="text-danger ms-2 fw-bold">Rs. ${item.price.discounted}</span></p>
          </div>
          <a href="#" class="btn btn-outline-dark py-2 mb-3 add-to-cart">Add to cart</a>
        </div>
        `
    );

  }


}); 