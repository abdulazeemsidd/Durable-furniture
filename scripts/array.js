$(document).ready(function () {

  const bedroom = [
    {
      imgSrc: ['pics/products/bedroom-table-1.webp', 'pics/products/bedroom-table-1-alt.webp', 'pics/products/bedroom-table-1-alt-2.webp'],
      name: 'Kade Side Table',
      price: {
        original: 8500,
        discounted: 6500
      },
      category: 'table',
      description: 'The Kade Side Table is where elegance meets quiet sophistication. Designed with clean lines and a perfectly balanced silhouette, this piece adds effortless charm to any space. Its smooth, finely finished surface highlights the natural beauty of the material, while the sturdy base ensures both stability and durability.'
    },
    {
      imgSrc: ['pics/products/bedroom-table-2.webp', 'pics/products/bedroom-table-2-alt.webp', 'pics/products/bedroom-table-2-alt-2.webp'],
      name: 'Kade Coffee Table',
      category: 'table',
      price: {
        original: 12000,
        discounted: 9000
      },
      description: 'The Kade Coffee Table is a striking centerpiece designed to bring warmth and balance to your living space. With its sleek profile and refined craftsmanship, it effortlessly blends modern simplicity with timeless appeal.'
    },
    {
      imgSrc: ['pics/products/bed1.webp', 'pics/products/bed1-alt.webp', 'pics/products/bed1-alt-2.webp'],
      name: 'Plato King Sized Bed',
      category: 'bed',
      price: {
        original: 45000,
        discounted: 25000
      },
      description: 'The Plato King Sized Bed is the ultimate expression of luxury and comfort. Designed to command attention, its grand silhouette and refined detailing create a stunning focal point in any bedroom.'
    },
    {
      imgSrc: ['pics/products/bed2.webp', 'pics/products/bed2-alt.webp', 'pics/products/bed2-alt-2.webp'],
      name: 'Vibrant King Sized Bed',
      category: 'bed',
      price: {
        original: 66000,
        discounted: 30000
      },
      description: 'The Vibrant King Sized Bed is a bold celebration of color, comfort, and contemporary design. Crafted to energize your bedroom, its striking presence and dynamic detailing instantly transform the space into something unforgettable.'
    },
    {
      imgSrc: ['pics/products/bed3.webp', 'pics/products/bed3-alt.webp', 'pics/products/bed3-alt-2.webp'],
      name: 'Mike King Sized Bed',
      category: 'bed',
      price: {
        original: 70000,
        discounted: 45000
      },
      description: 'The Mike King Sized Bed combines timeless elegance with a clean, understated design. Its simple silhouette and smooth finish create a calm and inviting atmosphere, making it a perfect fit for modern and minimalist bedrooms.'
    },
    {
      imgSrc: ['pics/products/bed4.webp', 'pics/products/bed4-alt.webp', 'pics/products/bed4-alt-2.webp'],
      name: 'Jack King/Queen Sized Bed',
      category: 'bed',
      price: {
        original: 60000,
        discounted: 40000
      },
      description: 'The Jack King/Queen Sized Bed is designed with simplicity, comfort, and practicality in mind. Its clean lines and balanced structure make it a perfect fit for both modern and classic interiors.'
    },
    {
      imgSrc: ['pics/products/bed6.webp', 'pics/products/bed6-alt.webp', 'pics/products/bed6-alt-2.webp'],
      name: 'Marq King Sized Bed With Side Tables',
      category: 'bed',
      price: {
        original: 73000,
        discounted: 49000
      },
      description: 'The Marq King Sized Bed brings a touch of European-inspired elegance to your bedroom. With its graceful design and balanced proportions, it creates a serene and sophisticated atmosphere.'
    },
    {
      imgSrc: ['pics/products/bed5.webp', 'pics/products/bed5-alt.webp', 'pics/products/bed5-alt-2.webp'],
      name: 'Vincent King Sized Bed With Side Tables',
      category: 'bed',
      price: {
        original: 69000,
        discounted: 49000
      },
      description: 'The Vincent King Sized Bed brings a touch of European-inspired elegance to your bedroom. With its graceful design and balanced proportions, it creates a serene and sophisticated atmosphere.'
    },
    {
      imgSrc: ['pics/products/bed7.webp', 'pics/products/bed7-alt.webp', 'pics/products/bed7-alt-2.webp'],
      name: 'Ozmane Dark tune Set (bed with sides, dresser and mirror)',
      category: 'bed',
      price: {
        original: 180000,
        discounted: 90000
      },
      description: 'The Ozmane Dark Tune Set is a complete bedroom furniture collection designed for elegance and functionality. This set includes a bed with side tables, a dresser, and a matching mirror, all finished in a rich dark tone that adds warmth and sophistication to your bedroom.'
    },
    {
      imgSrc: ['pics/products/bed8.webp', 'pics/products/bed8-alt.webp'],
      name: 'Ozmane Dark tune king size Bed with two side table',
      category: 'bed',
      price: {
        original: 150000,
        discounted: 750000
      },
      description: 'The Ozmane Dark Tune King Size Bed with Two Side Tables is a stylish and practical bedroom centerpiece. Designed with a rich dark finish, it brings a warm, modern elegance to any bedroom interior. \n Built with a strong and durable frame, the king-size bed provides spacious comfort and reliable support for restful sleep. The two matching side tables add convenience, giving you space to keep essentials like lamps, books, or personal items within easy reach.'
    },
    {
      imgSrc: ['pics/products/sofa1.webp', 'pics/products/sofa1-alt.webp', 'pics/products/sofa1-alt-2.webp'],
      name: 'Billy 2 Seater Sofa',
      category: 'sofa',
      price: {
        original: 55000,
        discounted: 33000
      },
      description: 'The Branded 2 Seater Sofa is the perfect blend of comfort, quality, and modern style. Designed to elevate any living space, its compact yet inviting form makes it ideal for apartments, lounges, or cozy seating areas.'
    },
    {
      imgSrc: ['pics/products/sofa2.webp', 'pics/products/sofa2-alt.webp', 'pics/products/sofa2-alt-2.webp'],
      name: 'Lazo Executive Sofa Set – Premium Leatherette Office Sofa in Black (Single Seater, 2-Seater, or 4-Seater Bundle)',
      category: 'sofa',
      price: {
        original: 19000,
        discounted: 12000
      },
      description: 'The Lazo Executive Sofa Set – Premium Leatherette Office Sofa is designed to bring professionalism, comfort, and modern luxury to office spaces. Finished in high-quality black leatherette upholstery, this sofa set creates a strong executive presence while maintaining a clean and sophisticated look.'
    },
    {
      imgSrc: ['pics/products/table3.webp', 'pics/products/table3-alt.webp', 'pics/products/table3-alt-2.webp'],
      name: 'Zack Nested Tables Set',
      category: 'table',
      price: {
        original: 11000,
        discounted: 7000
      },
      description: 'The Zack Nested Tables Set is a smart and stylish furniture solution designed for modern homes. This set usually includes multiple tables of different sizes that can be neatly stacked together when not in use, helping save space while keeping your room organized.'
    },
    {
      imgSrc: ['pics/products/table5.webp', 'pics/products/table5-alt.webp', 'pics/products/table5-alt-2.webp'],
      name: 'Cuddler Table Set',
      category: 'table',
      price: {
        original: 28000,
        discounted: 19000
      },
      description: 'The Cuddler Table Set is a charming and functional furniture duo designed to bring warmth and convenience to your living space. Featuring a pair of perfectly matched tables, this set offers versatile surfaces for drinks, décor, books, or snacks — whether you’re relaxing solo or sharing the moment with someone else.'
    },
    {
      imgSrc: ['pics/products/table6.webp', 'pics/products/table6-alt.webp', 'pics/products/table6-alt-2.webp'],
      name: 'Sausalito 8-Drawer Dresser',
      category: 'table',
      price: {
        original: 35000,
        discounted: 19000
      },
      description: 'The Sausalito 8 Drawer Dresser is a stylish and practical storage solution designed to keep your bedroom neat and organized. Featuring eight spacious drawers, it provides plenty of space for clothing, accessories, and personal items while helping maintain a clean, clutter-free room.'
    },
    {
      imgSrc: ['pics/products/table4.webp', 'pics/products/table4-alt.webp', 'pics/products/table4-alt-2.webp'],
      name: 'Kent R Series of Nested Tables Set',
      category: 'table',
      price: {
        original: 7500,
        discounted: 4000
      },
      description: 'The Kent R Series of Nested Tables Set is crafted with a smooth finish and sturdy construction, nested tables are perfect for holding décor items, drinks, books, or small accessories. Their versatile design allows you to spread them out when you need extra surface space or stack them together for a clean, minimal look.'
    },
    {
      imgSrc: ['pics/products/bed9.webp', 'pics/products/bed9-alt.webp', 'pics/products/bed9-alt-2.webp'],
      name: 'Jack Single Bed',
      category: 'bed',
      price: {
        original: 35000,
        discounted: 20000
      },
      description: 'The Jack Single Bed is a simple, practical, and comfortable bedding solution designed for everyday use. Its clean and compact design makes it perfect for small bedrooms, guest rooms, or shared spaces.'
    },
    {
      imgSrc: ['pics/products/bed10.webp', 'pics/products/bed10-alt.webp', 'pics/products/bed10-alt-2.webp'],
      name: 'Sausalito Cane Bed',
      category: 'bed',
      price: {
        original: 95000,
        discounted: 45000
      },
      description: 'The Sausalito Cane Bed brings natural texture and relaxed elegance to your bedroom. With its stylish cane detailing and smooth finish, this bed combines timeless charm with contemporary design — perfect for creating a warm, inviting atmosphere.'
    },
  ];

  let container = $('.container');

  bedroom.forEach(function (item) {
    if (!item.imgSrc[2]) {

      container.append(`
        <div class="card">
        <img src="${item.imgSrc[0]}" width="150" alt="image not found">
        <img src="${item.imgSrc[1]}" width="150" alt="image not found">
        <p>${item.name}</p>
        <p>${item.category}</p>
        <p>${item.price.original}</p>
        <p>${item.price.discounted}</p>
        <p>${item.description}</p>
        </div>  
        `);
        } else {

          container.append(`
            <div class="card">
            <img src="${item.imgSrc[0]}" width="150" alt="image not found">
        <img src="${item.imgSrc[1]}" width="150" alt="image not found">
        <img src="${item.imgSrc[2]}" width="150" alt="image not found">
        <p>${item.name}</p>
        <p>${item.category}</p>
        <p>${item.price.original}</p>
        <p>${item.price.discounted}</p>
        <p>${item.description}</p>
        </div>  
        `);
        }
  })
});