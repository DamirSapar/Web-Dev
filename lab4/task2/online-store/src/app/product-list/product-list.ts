import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17 Pro',
      description: 'A flagship smartphone with a titanium case and a powerful A19 Pro processor.',
      price: 849027,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 2,
      name: 'iPhone 15',
      description: 'The Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design. The smartphone has received a dynamic island, which displays notifications and other important information.',
      price: 404284,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },

    {
      id: 3,
      name: 'Apple MacBook Pro 16',
      description: 'Powerful, modern laptop powered by an Apple M4 Pro processor',
      price: 1389228,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/p7e/15960093.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pee/pde/30628352.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/paf/pe1/30628348.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/pdf/30628350.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2t3-137242115/?c=750000000'
    },

    {
      id: 4,
      name: 'Apple iMac 24 MWV33',
      description: 'The iMac monoblock has long been an indispensable assistant for many students, supervisors, specialists, and Internet users. The best candy bar in the world has become even better thanks to the M4 chip. Unlike the M3, it is manufactured using the advanced 3 nm N3E process technology, which made it possible to place 28 billion transistors instead of 25 and thereby increase productivity.',
      price: 1350411,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p81/p6b/12984547.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p81/p6b/12984547.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p4b/21717216.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p4b/21717217.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-imac-24-2024-mwv33-sinii-131364796/?c=750000000'
    },

    {
      id: 5,
      name: 'LG OLED65C5RLA',
      description: 'The LG OLED65C5RLA is a stunning 65-inch (165 cm) OLED TV that gives you incredible image quality and an immersive viewing experience.',
      price: 1399999,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/pd9/38531130.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/pd9/38531133.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p86/pd9/38531131.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa2/pd9/38531130.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled65c5rla-165-sm-chernyi-138621357/?c=750000000'
    },

    {
      id: 6,
      name: 'Apple Watch Ultra 3',
      description: 'A convenient smart watch with an Apple S10 processor',
      price: 572329,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p4a/66799603.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p4a/66799603.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p4a/66799604.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/p4a/66799605.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-3-2025-gps-5g-m-l-49-mm-zolotistyi-sinii-146286948/?c=750000000'
    },

    {
      id: 7,
      name: 'Apple Watch SE GPS Gen 3',
      description: 'The Apple Watch SE GPS Gen 3 is a stylish and functional smartwatch for active living, combining advanced technology and a user—friendly interface.',
      price: 149432,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1e/p33/66314384.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p33/66314384.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p56/p33/66314386.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p33/66314387.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-3-2025-s-m-40-mm-bezhevyi-bezhevyi-146093687/?c=750000000'
    },

    {
      id: 8,
      name: 'INMO AIR3 ',
      description: 'INMO AIR3 is a new generation of smart AR glasses. The perfect choice for work, study, entertainment and everyday life, when you need to stay connected and receive information right in front of your eyes, without taking your eyes off the world around you.',
      price: 798000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/p81/97016873.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/p81/97016874.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p81/97016876.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p81/97016878.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smart-ochki-inmo-air3-chernyi-155000564/?c=750000000'
    },

    {
      id: 9,
      name: 'Apple iPad Pro 11',
      description: 'The Apple iPad Pro 2024 Wi-Fi 11 tablet is a high—performance device that combines innovative technology and stylish design, ideal for work and entertainment.',
      price: 514538,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hc6/86106948304926.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000'
    },

    {
      id: 10,
      name: 'Samsung Jet 95 Complete VS20C9544TB/EV ',
      description: 'Samsung Jet 95 Complete VS20C9544TB/EV is a powerful and versatile vertical vacuum cleaner that will become an indispensable assistant in keeping your home clean.',
      price: 633000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h1f/85408620412958.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h19/h1f/85408620412958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/hdd/85408620544030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p74/pd3/79739107.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-jet-95-complete-vs20c9544tb-ev-chernyi-117352206/?c=750000000'
    },

    {
      id: 11,
      name: 'LG F2V5GG2S',
      description: 'Smart care of your belongings, Efficient washing and Stain removal',
      price: 370082,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/he6/63942512640030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h99/63942518308894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h29/h6f/63942523387934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/hd1/63942515916830.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-f2v5gg2s-seryi-100509545/?c=750000000'
    },

    {
      id: 12,
      name: 'LG GC-L257CBEV',
      description: 'The LG GC-L257CBEV refrigerator is a modern solution for your home that combines stylish design and high functionality. This refrigerator will provide reliable storage of food and drinks, keeping them fresh for a long time.',
      price: 799990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hb1/85666903130142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h31/85666903195678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h42/hbd/85666903261214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/hb6/85666903326750.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-gc-l257cbev-chernyi-118159115/?c=750000000'
    }
  ]
  shareOnWhatsApp(product: Product) {
    const message = encodeURIComponent(`Посмотри, что я нашел на Kaspi: ${product.name}\n${product.link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareOnTelegram(product: Product) {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(`Посмотри на этот ${product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
