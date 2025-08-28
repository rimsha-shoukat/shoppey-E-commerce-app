import React , { useState , useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

import img1 from "../assets/w1.jpeg";
import img2 from "../assets/w2.jpeg";
import img3 from "../assets/w3.jpeg";
import img4 from "../assets/w4.jpeg";
import img5 from "../assets/w5.jpeg";
import img6 from "../assets/w6.jpeg";
import img7 from "../assets/w7.jpeg";
import img8 from "../assets/w8.jpeg";
import img9 from "../assets/w9.jpeg";
import img10 from "../assets/w10.jpeg";
import img11 from "../assets/w11.jpeg";
import img12 from "../assets/w12.jpeg";
import img13 from "../assets/w13.jpeg";
import img14 from "../assets/w14.jpeg";
import img15 from "../assets/w15.jpeg";
import img16 from "../assets/w16.jpeg";
import img17 from "../assets/w17.jpeg";
import img18 from "../assets/w18.jpeg";
import img19 from "../assets/w19.jpeg";
import img20 from "../assets/w20.jpeg";
import img21 from "../assets/w21.jpeg";
import img22 from "../assets/w22.jpeg";
import img23 from "../assets/w23.jpeg";
import img24 from "../assets/w24.jpeg";
import img25 from "../assets/w25.jpeg";
import img26 from "../assets/w26.jpeg";
import img27 from "../assets/w27.jpeg";
import img28 from "../assets/w28.jpeg";
import img29 from "../assets/w29.jpeg";
import img30 from "../assets/w30.jpeg";
import img31 from "../assets/w31.jpeg";
import img32 from "../assets/w32.jpeg";
import img33 from "../assets/w33.jpeg";
import img34 from "../assets/w34.jpeg";
import img35 from "../assets/w35.jpeg";
import img36 from "../assets/w36.jpeg";
import img37 from "../assets/w37.jpeg";
import img38 from "../assets/w38.jpeg";
import img39 from "../assets/w39.jpeg";
import img40 from "../assets/w40.jpeg";
import img41 from "../assets/w41.jpeg";
import img42 from "../assets/w42.jpeg";
import img43 from "../assets/w43.jpeg";
import img44 from "../assets/w44.jpeg";
import img45 from "../assets/w45.jpeg";
import img46 from "../assets/w46.jpeg";
import img47 from "../assets/w47.jpeg";
import img48 from "../assets/w48.jpeg";
import img49 from "../assets/w49.jpeg";
import img50 from "../assets/w50.jpeg";
import img51 from "../assets/m1.jpeg";
import img52 from "../assets/m2.jpeg";
import img53 from "../assets/m3.jpeg";
import img54 from "../assets/m4.jpeg";
import img55 from "../assets/m5.jpeg";
import img56 from "../assets/m6.jpeg";
import img57 from "../assets/m7.jpeg";
import img58 from "../assets/m8.jpeg";
import img59 from "../assets/m9.jpeg";
import img60 from "../assets/m10.jpeg";
import img61 from "../assets/m11.jpeg";
import img62 from "../assets/m12.jpeg";
import img63 from "../assets/m13.jpeg";
import img64 from "../assets/m14.jpeg";
import img65 from "../assets/m15.jpeg";
import img66 from "../assets/m16.jpeg";
import img67 from "../assets/m17.jpeg";
import img68 from "../assets/m18.jpeg";
import img69 from "../assets/m19.jpeg";
import img70 from "../assets/m20.jpeg";
import img71 from "../assets/m21.jpeg";
import img72 from "../assets/m22.jpeg";
import img73 from "../assets/m23.jpeg";
import img74 from "../assets/m24.jpeg";
import img75 from "../assets/m25.jpeg";
import img76 from "../assets/m26.jpeg";
import img77 from "../assets/m27.jpeg";
import img78 from "../assets/m28.jpeg";
import img79 from "../assets/m29.jpeg";
import img80 from "../assets/m30.jpeg";
import img81 from "../assets/m31.jpeg";
import img82 from "../assets/m32.jpeg";
import img83 from "../assets/m33.jpeg";
import img84 from "../assets/m34.jpeg";
import img85 from "../assets/m35.jpeg";
import img86 from "../assets/m36.jpeg";
import img87 from "../assets/m37.jpeg";
import img88 from "../assets/m38.jpeg";
import img89 from "../assets/m39.jpeg";
import img90 from "../assets/m40.jpeg";
import img91 from "../assets/m41.jpeg";
import img92 from "../assets/m42.jpeg";
import img93 from "../assets/m43.jpeg";
import img94 from "../assets/m44.jpeg";
import img95 from "../assets/m45.jpeg";
import img96 from "../assets/m46.jpeg";
import img97 from "../assets/m47.jpeg";
import img98 from "../assets/m48.jpeg";
import img99 from "../assets/m49.jpeg";
import img100 from "../assets/m50.jpeg";
import img101 from "../assets/k1.jpeg";
import img102 from "../assets/k2.jpeg";
import img103 from "../assets/k3.jpeg";
import img104 from "../assets/k4.jpeg";
import img105 from "../assets/k5.jpeg";
import img106 from "../assets/k6.jpeg";
import img107 from "../assets/k7.jpeg";
import img108 from "../assets/k8.jpeg";
import img109 from "../assets/k9.jpeg";
import img110 from "../assets/k10.jpeg";
import img111 from "../assets/k11.jpeg";
import img112 from "../assets/k12.jpeg";
import img113 from "../assets/k13.jpeg";
import img114 from "../assets/k14.jpeg";
import img115 from "../assets/k15.jpeg";
import img116 from "../assets/k16.jpeg";
import img117 from "../assets/k17.jpeg";
import img118 from "../assets/k18.jpeg";
import img119 from "../assets/k19.jpeg";
import img120 from "../assets/k20.jpeg";
import img121 from "../assets/k21.jpeg";
import img122 from "../assets/k22.jpeg";
import img123 from "../assets/k23.jpeg";
import img124 from "../assets/k24.jpeg";
import img125 from "../assets/k25.jpeg";
import img126 from "../assets/k26.jpeg";
import img127 from "../assets/k27.jpeg";
import img128 from "../assets/k28.jpeg";
import img129 from "../assets/k29.jpeg";
import img130 from "../assets/k30.jpeg";
import img131 from "../assets/k31.jpeg";
import img132 from "../assets/k32.jpeg";
import img133 from "../assets/k33.jpeg";
import img134 from "../assets/k34.jpeg";
import img135 from "../assets/k35.jpeg";
import img136 from "../assets/k36.jpeg";
import img137 from "../assets/k37.jpeg";
import img138 from "../assets/k38.jpeg";
import img139 from "../assets/k39.jpeg";
import img140 from "../assets/k40.jpeg";
import img141 from "../assets/k41.jpeg";
import img142 from "../assets/k42.jpeg";
import img143 from "../assets/k43.jpeg";
import img144 from "../assets/k44.jpeg";
import img145 from "../assets/k45.jpeg";
import img146 from "../assets/k46.jpeg";
import img147 from "../assets/k47.jpeg";
import img148 from "../assets/k48.jpeg";
import img149 from "../assets/k49.jpeg";
import img150 from "../assets/k50.jpeg";

export const Products = [
  {
    id: 1,
    name: "Reversible Silk-Linen Blazer Dress",
    price: 189.99,
    size: "S",
    src: img1,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: true,
    collection: 2025,
    detail: "Versatile 2-in-1 design that transforms from structured blazer to flowy dress with button adjustments. One side features premium linen in heather gray, the other mulberry silk in midnight navy. Hidden interior pockets and adjustable waist tie. Machine washable with wrinkle-resistant finish."
  },
  {
    id: 2,
    name: "Holographic Midi Skirt with Slit",
    price: 129.50,
    size: "M",
    src: img2,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Statement skirt with color-shifting metallic foil that creates mesmerizing prism effects in sunlight. High-waisted design with hidden stretch panel and asymmetrical slit. Lined with smoothing slip layer. Pair with bodysuit or cropped blazer for evening wear."
  },
  {
    id: 3,
    name: "Bio-Deodorizing Yoga Set",
    price: 98.99,
    size: "L",
    src: img3,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Activewear infused with natural zinc particles that neutralize odors during workouts. High-waisted leggings with tummy control panel and cropped performance top with built-in shelf bra. Four-way stretch fabric wicks moisture and provides UPF 50+ protection."
  },
  {
    id: 4,
    name: "Convertible Cashmere Wrap",
    price: 159.99,
    size: "One Size",
    src: img4,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Luxury 100% Mongolian cashmere shawl with hidden snaps that transform it into 8 different styles (vest, poncho, infinity scarf). Feather-light yet warm, with hand-rolled edges. Packable into included silk pouch for travel."
  },
  {
    id: 5,
    name: "Architectural Buckle Ankle Boots",
    price: 219.99,
    size: "US8",
    src: img5,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: false,
    collection: 2024,
    detail: "Designer boots featuring sculptural geometric heel and oversized polished brass buckle. Italian leather upper with cushioned insole. Waterproof membrane and grippy rubber sole for all-season wear. 3-inch block heel provides stability."
  },
  {
    id: 6,
    name: "Temperature-Regulating Silk Camisole",
    price: 79.99,
    size: "XS",
    src: img6,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Breathable 22 momme silk top with smart fabric technology that responds to body heat. Adjustable spaghetti straps and French seams for irritation-free wear. Rounded hem lays smoothly under blazers without bunching."
  },
  {
    id: 7,
    name: "Origami Fold Leather Tote",
    price: 349.99,
    size: "One Size",
    src: img7,
    category: "women",
    discount: 60,
    new: false,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Investment handbag crafted from vegetable-tanned leather that folds into compact shapes for storage. Expandable main compartment with detachable pouch. Gold-tone hardware and RFID-blocking pocket. Lifetime leather care kit included."
  },
  {
    id: 8,
    name: "Glow-in-the-Dark Evening Gown",
    price: 279.99,
    size: "6",
    src: img8,
    category: "women",
    discount: 30,
    new: true,
    trend: false,
    deal: true,
    collection: 2024,
    detail: "Red carpet-worthy dress with celestial patterns that illuminate under UV lighting. Flowy crêpe fabric with illusion neckline and open back. Removable belt accentuates waist. Includes detachable train that converts to cocktail length."
  },
  {
    id: 9,
    name: "Self-Cleaning Wide-Leg Pants",
    price: 139.99,
    size: "27",
    src: img9,
    category: "women",
    discount: 60,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Workwear essentials treated with photocatalytic coating that breaks down stains when exposed to light. High-rise trousers with tummy-smoothing panel and kick-flare hem. Crease-resistant fabric maintains sharp lines all day."
  },
  {
    id: 10,
    name: "Customizable Birthstone Necklace",
    price: 149.99,
    size: "Adjustable",
    src: img10,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Personalized pendant with interchangeable gemstones representing birth months. 14K gold-filled chain with hidden extension. Engraving options available on reverse side. Presented in velvet gift box with cleaning cloth."
  },
  {
    id: 11,
    name: "Recycled Sari Silk Kimono",
    price: 89.99,
    size: "M/L",
    src: img11,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: true,
    collection: 2024,
    detail: "Ethically crafted wrap made from reconstructed vintage saris with hand-embroidered details. Lightweight yet warm enough for layering. Color-blocked design with fringed trim. Each piece has unique pattern variations."
  },
  {
    id: 12,
    name: "Anti-Theft Crossbody Bag",
    price: 129.99,
    size: "One Size",
    src: img12,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Security-focused purse with slash-resistant straps, RFID-blocking compartments, and lockable zippers. Expandable main section fits tablet plus daily essentials. Waterproof lining and hidden back pocket against pickpockets."
  },
  {
    id: 13,
    name: "Convertible Ballet Flats",
    price: 119.50,
    size: "US7.5",
    src: img13,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Innovative shoes transforming between pointed-toe flats and scrunched ballet style via hidden elastic. Memory foam footbed with arch support. Vegan leather available in 8 colors. Folds flat for travel storage."
  },
  {
    id: 14,
    name: "Biodegradable Seamless Underwear",
    price: 24.99,
    size: "M",
    src: img14,
    category: "women",
    discount: 30,
    new: false,
    trend: false,
    deal: true,
    collection: 2024,
    detail: "Comfort-first basics made from plant-based fibers that decompose within 5 years. Tagless design with chafe-proof flat seams. Ultra-soft microfiber with breathable cotton gusset. Available in skin-tone spectrum."
  },
  {
    id: 15,
    name: "Ceramic-Infused Blouse",
    price: 109.99,
    size: "S",
    src: img15,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Temperature-regulating button-down with ceramic nanoparticles that provide natural UV protection. Hidden snap placket prevents gaping. French cuffs and rounded peplum hem. Machine washable silk alternative."
  },
  {
    id: 16,
    name: "Artisan Glass Bead Bracelet",
    price: 68.99,
    size: "Adjustable",
    src: img16,
    category: "women",
    discount: 30,
    new: true,
    trend: false,
    deal: true,
    collection: 2025,
    detail: "Handcrafted accessory featuring Murano glass beads on gold-filled wire. Each piece shows unique color variations from traditional Italian techniques. Secure lobster clasp with 2-inch extension chain."
  },
  {
    id: 17,
    name: "Aromatherapy Linen Spray",
    price: 38.99,
    size: "4oz",
    src: img17,
    category: "women",
    discount: 60,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Luxury fabric mist with essential oil blends for relaxation or energy. Alcohol-free formula safe for fine fabrics. Beautiful apothecary-style bottle with reusable glass sprayer. Gift set includes sleep and focus blends."
  },
  {
    id: 18,
    name: "Smart Posture Correcting Camisole",
    price: 79.99,
    size: "L",
    src: img18,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Supportive tank with medical-grade straps that gently realign shoulders. Breathable moisture-wicking fabric with removable pads. Machine washable design connects via app to track posture improvements."
  },
  {
    id: 19,
    name: "Convertible Travel Jumpsuit",
    price: 159.99,
    size: "8",
    src: img19,
    category: "women",
    discount: 60,
    new: false,
    trend: false,
    deal: true,
    collection: 2025,
    detail: "3-in-1 design transforming between full jumpsuit, cropped pants set, and sleeveless dress via hidden zippers. Wrinkle-proof fabric with 6 hidden pockets. Built-in belt and rolled cuff options create different silhouettes."
  },
  {
    id: 20,
    name: "Ethical Diamond Studs",
    price: 249.99,
    size: "One Size",
    src: img20,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Conflict-free lab-grown diamonds set in recycled platinum. Available in 0.5-2 carat sizes. Screw-back setting prevents loss. Presented in sustainable bamboo gift box with lifetime warranty and cleaning kit."
  },
  {
    id: 21,
    name: "Heated Gloves",
    price: 89.99,
    size: "S/M",
    src: img21,
    category: "women",
    discount: 60,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "USB-rechargeable thermal gloves with three heat settings lasting up to 8 hours. Touchscreen-compatible fingertips and adjustable wrist strap. Water-resistant outer shell with fleece lining. Great for Raynaud's sufferers."
  },
  {
    id: 22,
    name: "Organic Linen Culotte Set",
    price: 179.99,
    size: "M",
    src: img22,
    category: "women",
    discount: 30,
    new: true,
    trend: false,
    deal: false,
    collection: 2025,
    detail: "Relaxed-fit pantsuit in undyed European linen with self-tie waist detailing. Matching crop top with shelf bra. Gets softer with each wash. Packable for travel with natural wrinkle elegance."
  },
  {
    id: 23,
    name: "Collapsible Travel Hat",
    price: 59.99,
    size: "One Size",
    src: img23,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Packable sunhat with flexible memory wire brim that springs back to shape. UPF 50+ protection with hidden sweatband. Stuffs into included drawstring pouch smaller than a clutch. Available in straw and wool blends."
  },
  {
    id: 24,
    name: "Biodegradable Mascara",
    price: 29.99,
    size: "0.3oz",
    src: img24,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Clean beauty formula made from plant waxes and activated charcoal. Gluten-free and ophthalmologist-tested. Tube decomposes within 2 years. Provides buildable volume without clumping or flaking."
  },
  {
    id: 25,
    name: "Adjustable Shapewear Bodysuit",
    price: 89.99,
    size: "L",
    src: img25,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: true,
    collection: 2025,
    detail: "Medical-grade compression garment with customizable control zones via removable panels. Breathable microfiber with crotch snaps for easy bathroom access. Provides smoothing without uncomfortable squeezing."
  },
  {
    id: 26,
    name: "Artisan Block-Printed Scarf",
    price: 78.50,
    size: "Long",
    src: img26,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Handcrafted accessory featuring traditional Indian printing techniques. 100% organic cotton with vegetable dye patterns. Each piece shows slight artisan variations. Fair trade certified with artist signature."
  },
  {
    id: 27,
    name: "Smart Yoga Bra",
    price: 69.99,
    size: "34C",
    src: img27,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Embedded sensors track posture alignment during workouts via Bluetooth connection. Encapsulation design provides medium-high impact support. Moisture-wicking fabric with adjustable straps and hook-and-eye closure."
  },
  {
    id: 28,
    name: "Convertible Leather Backpack",
    price: 229.99,
    size: "20L",
    src: img28,
    category: "women",
    discount: 30,
    new: false,
    trend: false,
    deal: true,
    collection: 2025,
    detail: "Premium full-grain leather bag transforming between backpack, tote, and crossbody styles. Padded laptop compartment fits 15 device. Anti-theft zipper design with hidden pockets. Ages beautifully with patina development."
  },
  {
    id: 29,
    name: "Heated Massage Shawl",
    price: 139.99,
    size: "One Size",
    src: img29,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Luxurious wrap with 6 embedded massage nodes targeting neck and shoulders. Three heat settings powered by USB rechargeable battery. Cashmere blend fabric with hidden pocket for heat controller."
  },
  {
    id: 30,
    name: "Sustainable Sunglasses",
    price: 129.99,
    size: "One Size",
    src: img30,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Eco-friendly frames made from recycled ocean plastics with blue light filtering lenses. UV400 protection with polarized options. Includes biodegradable case and microfiber pouch made from plant fibers."
  },
  {
    id: 31,
    name: "Silk Sleep Mask with Ear Plugs",
    price: 49.99,
    size: "One Size",
    src: img31,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: false,
    collection: 2025,
    detail: "25 momme mulberry silk eye mask with contoured design that prevents pressure on lashes. Includes 3 pairs of hypoallergenic silicone ear plugs in ventilated case. Adjustable strap won't tangle hair."
  },
  {
    id: 32,
    name: "Crystal-Infused Facial Roller",
    price: 42.99,
    size: "One Size",
    src: img32,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Dual-ended jade and rose quartz roller for skincare routine. Larger stone for décolletage and smaller for eye area. Included guide demonstrates lymphatic drainage techniques. Comes with sterilizing spray."
  },
  {
    id: 33,
    name: "Customizable Birth Flower Jewelry Set",
    price: 98.99,
    size: "Adjustable",
    src: img33,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Personalized necklace and earrings featuring enameled birth month flowers. Gold-plated brass with scratch-resistant coating. Gift box includes care card and polishing cloth. Engraving available on pendant reverse."
  },
  {
    id: 34,
    name: "Self-Warming Leggings",
    price: 89.99,
    size: "M",
    src: img34,
    category: "women",
    discount: 30,
    new: false,
    trend: false,
    deal: true,
    collection: 2025,
    detail: "High-waisted athletic leggings with graphene heating elements along core muscle groups. Machine washable with USB rechargeable battery lasting 6+ hours. Four-way stretch fabric with squat-proof opacity."
  },
  {
    id: 35,
    name: "Handwoven Market Basket",
    price: 129.99,
    size: "Large",
    src: img35,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Artisanal bag crafted from naturally-dyed water hyacinth and leather handles. Structured base with reinforced corners. Lined with wipe-clean fabric. Each piece shows unique weaving patterns from Ecuadorian makers."
  },
  {
    id: 36,
    name: "Glow Therapy Face Mask",
    price: 59.99,
    size: "One Size",
    src: img36,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "LED light therapy mask with 7 color settings targeting different skin concerns. Silicone construction fits all face shapes. App-controlled timer and intensity. Includes hyaluronic acid gel pads for enhanced absorption."
  },
  {
    id: 37,
    name: "Ethical Silk Robe",
    price: 149.99,
    size: "S/M",
    src: img37,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: false,
    collection: 2025,
    detail: "Peace silk kimono robe dyed with botanical pigments. Open front design with self-tie belt. Machine washable on delicate cycle. Packable into matching drawstring bag for travel."
  },
  {
    id: 38,
    name: "Convertible Pearl Jewelry Set",
    price: 179.99,
    size: "Adjustable",
    src: img38,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "18K gold-plated set transforming between 5 styles: necklace, bracelet, anklet, hairpin, and ring. Freshwater pearls with diamond accents. Presented in heirloom-quality lacquer box with polishing cloth."
  },
  {
    id: 39,
    name: "Aromatherapy Work Heels",
    price: 159.99,
    size: "US8.5",
    src: img39,
    category: "women",
    discount: 60,
    new: false,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Comfort pumps with lavender-scented memory foam footbed and arch support. Stylish design with a 3-inch heel and slip-resistant outsole. Ideal for long workdays, these heels combine elegance with wellness features. Available in classic black and navy blue."
  },
  {
    id: 40,
    name: "Smart Fitness Tracker Leggings",
    price: 99.99,
    size: "L",
    src: img40,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "High-performance leggings with embedded sensors that track heart rate, calories burned, and activity levels. Moisture-wicking fabric with four-way stretch for maximum comfort. Features hidden pocket for phone or keys."
  },
  {
    id: 41,
    name: "Sustainable Denim Jacket",
    price: 129.99,
    size: "M",
    src: img41,
    category: "women",
    discount: 60,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Classic jacket made from organic cotton with recycled materials. Features a relaxed fit, button closure, and two front pockets. Eco-friendly dyeing process ensures minimal environmental impact."
  },
  {
    id: 42,
    name: "Luxury Faux Fur Coat",
    price: 249.99,
    size: "S",
    src: img42,
    category: "women",
    discount: 30,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Chic and cozy coat made from high-quality faux fur. Features a double-breasted design with oversized lapels and side pockets. Perfect for layering over evening wear or casual outfits."
  },
  {
    id: 43,
    name: "Smart Travel Pillow",
    price: 49.99,
    size: "One Size",
    src: img43,
    category: "women",
    discount: 60,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Ergonomic travel pillow with built-in Bluetooth speakers and white noise generator. Adjustable straps for secure fit on any seat. Soft, breathable fabric with removable cover for easy cleaning."
  },
  {
    id: 44,
    name: "Biodegradable Yoga Mat",
    price: 79.99,
    size: "One Size",
    src: img44,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Eco-friendly yoga mat made from natural rubber and jute fibers. Non-toxic and free from harmful chemicals. Textured surface provides excellent grip during practice. Lightweight and portable for on-the-go use."
  },
  {
    id: 45,
    name: "Artisan Handwoven Clutch",
    price: 89.99,
    size: "One Size",
    src: img45,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Unique clutch made from handwoven materials with vibrant colors and patterns. Features a magnetic closure and detachable wrist strap. Perfect for adding a pop of color to any outfit."
  },
  {
    id: 46,
    name: "Temperature-Controlled Blanket",
    price: 199.99,
    size: "One Size",
    src: img46,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Smart blanket with adjustable temperature settings for personalized comfort. Soft, breathable fabric with machine-washable cover. Ideal for cozy nights in or outdoor adventures."
  },
  {
    id: 47,
    name: "Convertible Maxi Dress",
    price: 129.99,
    size: "M",
    src: img47,
    category: "women",
    discount: 60,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Versatile dress that can be styled in multiple ways for different occasions. Made from lightweight, breathable fabric with a flattering silhouette. Perfect for summer outings or beach vacations."
  },
  {
    id: 48,
    name: "Smart Water Bottle",
    price: 39.99,
    size: "24oz",
    src: img48,
    category: "women",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Hydration tracker with built-in LED reminders to drink water. Made from BPA-free materials with a sleek design. Includes a detachable infuser for adding fruits or herbs."
  },
  {
    id: 49,
    name: "Luxury Silk Scarf",
    price: 89.99,
    size: "One Size",
    src: img49,
    category: "women",
    discount: 60,
    new: true,
    trend: false,
    deal: true,
    collection: 2025,
    detail: "Elegant scarf made from 100% silk with hand-rolled edges. Features a unique print inspired by nature. Perfect for adding a touch of sophistication to any outfit."
  },
  {
    id: 50,
    name: "Smart Fitness Tracker Watch",
    price: 199.99,
    size: "One Size",
    src: img50,
    category: "women",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Stylish smartwatch with fitness tracking features, heart rate monitor, and sleep analysis. Customizable watch faces and interchangeable bands. Water-resistant design for everyday wear."
  },
  {
    id: 51,
    name: "Graphene-Infused Performance Blazer",
    price: 289.99,
    size: "42R",
    src: img51,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Revolutionary sportcoat featuring graphene lining that regulates body temperature while maintaining structure. Wrinkle-resistant fabric with micro-ventilation zones allows all-day comfort. Hidden stretch panels in shoulders and elbows provide unrestricted movement. Includes concealed tech pocket with magnetic closure."
  },
  {
    id: 52,
    name: "Auto-Tightening Smart Dress Shoes",
    price: 219.99,
    size: "US10.5",
    src: img52,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Self-adjusting Oxfords with pressure sensors that maintain perfect fit throughout the day. Premium Italian leather upper with breathable cork footbed. Power generated through kinetic energy with replaceable battery module. Water-resistant treated seams with anti-slip rubber traction pods."
  },
  {
    id: 53,
    name: "Phase-Change Cooling Polo",
    price: 79.99,
    size: "L",
    src: img53,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Performance shirt incorporating NASA-developed smart fabric that actively regulates skin temperature. Moisture-wicking technology pulls sweat away while odor-resistant silver-ion treatment prevents bacterial growth. Reinforced collar maintains sharp appearance after multiple washes."
  },
  {
    id: 54,
    name: "Carbon Fiber Travel Belt",
    price: 94.50,
    size: "38",
    src: img54,
    category: "men",
    discount: 40,
    new: false,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Ultralight yet incredibly strong belt crafted from aerospace-grade composite materials. Buckle integrates 5-in-1 tool with bottle opener, hex wrench, screwdriver, and ruler. Weight tested to support 300+ lbs while weighing just 3.2oz. Lifetime guarantee against breakage."
  },
  {
    id: 55,
    name: "Holographic Minimalist Wallet",
    price: 69.99,
    size: "One Size",
    src: img55,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "RFID-blocking front pocket wallet with dynamic holographic surface that shifts colors. Premium full-grain leather exterior conceals titanium money clip and organizer for 8 cards. Quick-thumb access slot with patented pull-tab retrieval system."
  },
  {
    id: 56,
    name: "Magnetic Convertible Cargo Pants",
    price: 124.99,
    size: "34x32",
    src: img56,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Versatile travel pants with magnetic seam closures that convert between full-length and 7/8 styles. Features 8 strategically placed pockets including one with built-in USB port. Breathable nylon-spandex blend with DWR water repellent finish. Hidden zippered security pocket."
  },
  {
    id: 57,
    name: "Self-Cleaning Dress Shirt",
    price: 149.99,
    size: "16.5/35",
    src: img57,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Premium cotton shirt treated with photocatalytic nanotechnology that breaks down stains when exposed to light. Non-iron fabric maintains crisp appearance with reinforced collar stays. Hidden button placket and gusseted underarms for comfort."
  },
  {
    id: 58,
    name: "Titanium Dive Watch",
    price: 349.99,
    size: "One Size",
    src: img58,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Professional-grade timepiece with grade 5 titanium case resistant to 500m depth. Swiss movement with 42-hour power reserve and luminescent markers. Unidirectional rotating bezel with ceramic insert. Includes quick-adjust bracelet with dive suit extension."
  },
  {
    id: 59,
    name: "Heated Flannel Shacket",
    price: 179.99,
    size: "XL",
    src: img59,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Heavyweight wool-flannel hybrid jacket with carbon fiber heating elements in collar and chest area. Three temperature settings powered by USB-C rechargeable battery lasting 10+ hours. Reinforced shoulder panels and corduroy-lined collar."
  },
  {
    id: 60,
    name: "Odor-Destroying Performance Socks",
    price: 24.99,
    size: "10-13",
    src: img60,
    category: "men",
    discount: 40,
    new: false,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Anti-microbial socks featuring copper-infused yarn that eliminates 99.9% of odor-causing bacteria. Targeted ventilation zones and arch support for all-day comfort. Seamless toe construction prevents blisters during athletic activities."
  },
  {
    id: 61,
    name: "Modular Travel System Backpack",
    price: 229.99,
    size: "28L",
    src: img61,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Convertible backpack featuring detachable daypack, RFID-blocking compartments, and integrated USB charging port. Waterproof main compartment expands 35% with compression straps. Sternum strap doubles as quick-access tool holder. TSA-approved laptop sleeve."
  },
  {
    id: 62,
    name: "Laser-Measured Dress Belt",
    price: 89.99,
    size: "40",
    src: img62,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Precision-engineered belt with laser-cut sizing holes for perfect fit. Full-grain leather with scratch-resistant coating and titanium buckle with hidden SIM card slot. Guaranteed not to stretch or deform with wear."
  },
  {
    id: 63,
    name: "Solar-Charged Expedition Jacket",
    price: 279.99,
    size: "L",
    src: img63,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Weatherproof shell with flexible solar panels that generate up to 10W for charging devices. Arctic-grade insulation with pit zips for temperature control. Includes integrated weather radio, emergency whistle, and avalanche beacon pocket."
  },
  {
    id: 64,
    name: "Anti-Fatigue Dress Shoes",
    price: 189.99,
    size: "US11",
    src: img64,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Professional footwear with patented suspension insole that reduces foot fatigue by 40%. Italian calfskin upper with breathable lining and shock-absorbing rubber outsole. Recraftable construction extends lifespan 3x normal dress shoes."
  },
  {
    id: 65,
    name: "Quick-Dry Merino Suit",
    price: 499.99,
    size: "40L",
    src: img65,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Ultra-fine merino wool blend that resists wrinkling and dries 8x faster than traditional suiting. Natural temperature regulation with odor-resistant properties. Features reinforced stretch zones and convertible cuffs that adjust between button and French styles."
  },
  {
    id: 66,
    name: "Titanium Eyewear System",
    price: 179.99,
    size: "One Size",
    src: img66,
    category: "men",
    discount: 40,
    new: false,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Modular glasses featuring interchangeable magnetic lenses (clear, sun, blue light) with titanium alloy frame. Spring hinge design withstands extreme flexing. Includes hard case, microfiber pouch, and screwless repair kit."
  },
  {
    id: 67,
    name: "No-Iron Travel Dress Shirt",
    price: 119.99,
    size: "17/36",
    src: img67,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Wrinkle-resistant shirt made from patented fabric blend that smooths itself within 30 minutes of hanging. Hidden underarm vents, stain-resistant finish, and odor-control treatment. Collar stays permanently embedded in specially reinforced points."
  },
  {
    id: 68,
    name: "Biometric Compression Shirt",
    price: 89.99,
    size: "M",
    src: img68,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Performance base layer with built-in heart rate monitor and motion sensors that sync via Bluetooth. Targeted muscle support zones with graduated compression. Moisture-wicking silver-infused fabric prevents bacterial growth."
  },
  {
    id: 69,
    name: "Portable Espresso System",
    price: 159.99,
    size: "One Size",
    src: img69,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Hand-powered espresso maker producing 8-10 bar pressure for authentic crema. Includes insulated cup, bean grinder, and cleaning tools. Works with ground coffee or ESE pods. Aircraft-grade aluminum construction with food-grade silicone seals."
  },
  {
    id: 70,
    name: "Aerodynamic Commuter Backpack",
    price: 169.99,
    size: "20L",
    src: img70,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Cycling-specific pack with patented airflow channel system that prevents back sweat. Features integrated rain cover, helmet holder, and 360° reflectivity. Suspension harness distributes weight evenly while maintaining ventilation."
  },
  {
    id: 71,
    name: "Self-Heating Shave Kit",
    price: 79.99,
    size: "One Size",
    src: img71,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Electric razor system with warming plate that preheats to optimal shaving temperature. Includes self-cleaning station with UV sanitizing function. Travel case contains charging dock and brush with synthetic badger bristles."
  },
  {
    id: 72,
    name: "Recycled Ocean Plastic Sunglasses",
    price: 129.99,
    size: "One Size",
    src: img72,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Premium polarized lenses mounted in frames made from reclaimed fishing nets and ocean waste. Floatable design with non-slip nose pads. Includes 100% recycled carrying case and microfibre cleaning cloth."
  },
  {
    id: 73,
    name: "Temperature-Regulating Sleep Mask",
    price: 49.99,
    size: "One Size",
    src: img73,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2024,
    detail: "Smart sleep accessory with phase-change material that cools or warms to optimal sleeping temperature. Contoured 3D design blocks 100% of light while allowing eyelid movement. Includes wireless sleep tracking."
  },
  {
    id: 74,
    name: "Tactical Dress Belt",
    price: 109.99,
    size: "38",
    src: img74,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Military-grade nylon webbing belt disguised as formal leather. Rated for 400lb tensile strength with concealed quick-release buckle. Inner pocket holds emergency cash or documents. Passes metal detectors."
  },
  {
    id: 75,
    name: "Smart Fitness Duffel",
    price: 199.99,
    size: "40L",
    src: img75,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Gym bag with built-in Bluetooth speaker, UV sanitizing compartment, and shoe ventilation system. Separate wet/dry zones with waterproof lining. Includes integrated phone charger and RFID-protected pocket."
  },
  {
    id: 76,
    name: "Self-Tying Dress Shoes",
    price: 249.99,
    size: "US10.5",
    src: img76,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Advanced wingtips with automated lacing system triggered by foot insertion. Genuine leather with shock-absorbing heel cup and anti-microbial lining. Mobile app controls tightness settings and battery monitoring."
  },
  {
    id: 77,
    name: "Portable Barbell Set",
    price: 179.99,
    size: "One Size",
    src: img77,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2025,
    detail: "Collapsible workout system providing up to 50lb resistance via elastic nano-tubes. Includes door anchor, ankle straps, and multiple grip handles. Folds into compact case smaller than most laptop bags."
  },
  {
    id: 78,
    name: "Aerogel-Insulated Jacket",
    price: 299.99,
    size: "XL",
    src: img78,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Ultralight outerwear with NASA-inspired aerogel insulation providing warmth at 1/3 normal weight. Water-repellent shell with articulated elbows for mobility. Packs into its own chest pocket for convenient storage."
  },
  {
    id: 79,
    name: "Biometric Smart Ring",
    price: 149.99,
    size: "Adjustable",
    src: img79,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Titanium wellness tracker worn as jewelry that monitors heart rate, body temperature, and blood oxygen. Syncs via Bluetooth with 7-day battery life. Available in multiple finishes with scratch-resistant coating."
  },
  {
    id: 80,
    name: "Magnetic Closure Work Boots",
    price: 159.99,
    size: "US12",
    src: img80,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Industrial-grade boots with innovative magnetic speed-lacing system. Composite toe meets ASTM safety standards while remaining ultra-lightweight. Oil-resistant outsole with heat-dissipating insole technology."
  },
  {
    id: 81,
    name: "Convertible Travel Suit",
    price: 349.99,
    size: "44R",
    src: img81,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "3-in-1 system transforming between formal suit, casual blazer, and travel vest. Wrinkle-proof fabric with 12 hidden pockets including RFID-blocking compartment. Stretch panels allow full range of motion."
  },
  {
    id: 82,
    name: "Self-Cleaning Water Bottle",
    price: 59.99,
    size: "24oz",
    src: img82,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Insulated stainless steel bottle with UV-C light purification system activated by button press. Eliminates 99.9% of bacteria every 4 hours. Includes fruit infuser and built-in carabiner. Dishwasher safe upper section."
  },
  {
    id: 83,
    name: "Heated Massage Shirt",
    price: 119.99,
    size: "L",
    src: img83,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Compression base layer with strategically placed massage nodes and adjustable heat zones. Connects via app to customize intensity. Moisture-wicking fabric with silver ion odor protection. USB-rechargeable with 8-hour runtime."
  },
  {
    id: 84,
    name: "Modular Briefcase System",
    price: 289.99,
    size: "One Size",
    src: img84,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Professional organizer with customizable compartments via magnetic dividers. Features built-in power bank, wireless charging pad, and detachable document folio. Ballistic nylon exterior with water-resistant lining."
  },
  {
    id: 85,
    name: "Anti-Gravity Suspension Jeans",
    price: 139.99,
    size: "36x34",
    src: img85,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2024,
    detail: "Premium denim with patented suspension waistband that floats above hips for all-day comfort. Strategic stretch panels enhance mobility. Dark indigo finish with reinforced stress points and hidden utility loops."
  },
  {
    id: 86,
    name: "Smart Golf Belt",
    price: 129.99,
    size: "40",
    src: img86,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Performance accessory with embedded swing analyzer providing real-time feedback via vibration alerts. Includes GPS-enabled course mapping and shot tracking. Genuine leather with magnetic tee holder and divot repair tool."
  },
  {
    id: 87,
    name: "Aerodynamic Swim Goggles",
    price: 79.99,
    size: "One Size",
    src: img87,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Hydrodynamic lenses reduce drag by 22% compared to standard goggles. Photochromic technology automatically adjusts to light conditions. Ultra-soft silicone seals with adjustable nose bridge. Includes protective hard case."
  },
  {
    id: 88,
    name: "Odor-Eliminating Dress Socks",
    price: 29.99,
    size: "10-13",
    src: img88,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Premium merino wool blend with activated charcoal fibers that neutralize odors for 7+ wears. Seamless toe construction and targeted compression zones. Moisture-wicking technology keeps feet dry all day."
  },
  {
    id: 89,
    name: "Foldable Electric Bike Helmet",
    price: 149.99,
    size: "One Size",
    src: img89,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2025,
    detail: "Safety-certified helmet collapsing to 60% its size for easy storage. Integrated rear LED light and turn signals controlled via handlebar remote. MIPS protection system with adjustable ventilation."
  },
  {
    id: 90,
    name: "No-Iron Travel Blazer",
    price: 189.99,
    size: "42L",
    src: img90,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Wrinkle-resistant jacket made from breakthrough fabric that smooths itself within 30 minutes. Features hidden passport pocket, convertible collar, and antimicrobial lining. Stretch panels allow comfortable movement."
  },
  {
    id: 91,
    name: "Self-Cooling Undershirt",
    price: 49.99,
    size: "M",
    src: img91,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Moisture-activated cooling technology provides up to 2°F temperature reduction. Ultra-thin fabric with flatlock seams prevents chafing. UPF 50+ sun protection and odor-resistant treatment."
  },
  {
    id: 92,
    name: "Portable Espresso Maker",
    price: 129.99,
    size: "One Size",
    src: img92,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Hand-operated machine producing 9-bar pressure cafe-quality espresso. Works with ground coffee or pods. Aircraft-grade aluminum construction with dual-wall insulation. Includes measuring scoop and cleaning brush."
  },
  {
    id: 93,
    name: "Smart Dress Shirt Stayers",
    price: 39.99,
    size: "One Size",
    src: img93,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Innovative shirt garters using gentle silicone grips to keep dress shirts tucked perfectly. Adjustable elastic bands hide discreetly under pants. Machine washable design won't damage fabric."
  },
  {
    id: 94,
    name: "Tactical Cargo Joggers",
    price: 89.99,
    size: "36x32",
    src: img94,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Convertible pants with zip-off legs and 8 reinforced pockets. Quick-dry fabric with DWR coating repels water and stains. Reflective details and discreet knife pocket. Articulated knees for full range of motion."
  },
  {
    id: 95,
    name: "Heated Insoles",
    price: 99.99,
    size: "US9-11",
    src: img95,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "USB-rechargeable warming insoles providing up to 8 hours of heat across 3 temperature settings. Ultra-thin design fits any shoes without bulk. Moisture-wicking top layer with shock-absorbing base."
  },
  {
    id: 96,
    name: "Anti-Theft Travel Jeans",
    price: 119.99,
    size: "34x32",
    src: img96,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Security-focused denim with RFID-blocking pocket, hidden zipper compartments, and slash-resistant fabric panels. Stretch technology provides comfort during long flights. Subtle design appears like regular premium jeans."
  },
  {
    id: 97,
    name: "Gravity-Infused Water Bottle",
    price: 49.99,
    size: "32oz",
    src: img97,
    category: "men",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2024,
    detail: "Innovative self-sealing bottle that only opens when tilted to drink, preventing spills. Vacuum insulation keeps liquids cold 48+ hours. Built-in fruit infuser and carrying loop."
  },
  {
    id: 98,
    name: "Odor-Free Gym Bag",
    price: 79.99,
    size: "30L",
    src: img98,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Ventilated compartment system with built-in ozone generator eliminating 99.9% of odors. Separate shoe locker with drainage holes. Water-resistant exterior with anti-microbial lining. Includes wet/dry compartments."
  },
  {
    id: 99,
    name: "Solar-Charged Camping Tie",
    price: 64.99,
    size: "One Size",
    src: img99,
    category: "men",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2023,
    detail: "Professional-looking tie with flexible solar panels charging USB devices. Ultra-lightweight power bank in knot charges phones 2x per day. Stain-resistant microfiber with hidden pocket for small essentials."
  },
  {
    id: 100,
    name: "Smart Resistance Bands",
    price: 89.99,
    size: "Set of 5",
    src: img100,
    category: "men",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Bluetooth-enabled bands measuring reps, force, and range of motion during workouts. Includes app with personalized training programs. Medical-grade latex with up to 150lbs resistance per band."
  },
  {
    id: 101,
    name: "Dinosaur Glow-in-the-Dark Pajama Set",
    price: 34.99,
    size: "4T",
    src: img101,
    category: "kids",
    discount: 30,
    new: true,
    trend: false,
    deal: true,
    collection: 2024,
    detail: "Super soft organic cotton PJs with glow-in-the-dark dinosaur prints that illuminate at bedtime. Features reinforced seams and expandable cuffs for growing room. Machine washable with fade-resistant colors."
  },
  {
    id: 102,
    name: "Interactive Light-Up Sneakers",
    price: 45.50,
    size: "12C",
    src: img102,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Multi-color LED shoes that light up with motion and can display 6 different patterns. Water-resistant upper with memory foam insoles and extra grippy soles for playground safety. Includes adjustable velcro straps."
  },
  {
    id: 103,
    name: "Space Explorer Backpack",
    price: 39.99,
    size: "One Size",
    src: img103,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Planet-printed backpack with glow-in-the-dark stars and attachable plush astronauts. Features ergonomic straps, insulated lunch box pocket, and hidden name tag compartment. Made from tear-resistant polyester."
  },
  {
    id: 104,
    name: "Animal Hooded Towel",
    price: 28.99,
    size: "5T",
    src: img104,
    category: "kids",
    discount: 40,
    new: false,
    trend: false,
    deal: true,
    collection: 2024,
    detail: "Super absorbent 100% cotton towel with adorable animal ears and face design. Extra-long size provides full coverage with soft terry cloth material. Fast-drying and machine washable for daily use."
  },
  {
    id: 105,
    name: "Building Block Watch",
    price: 32.50,
    size: "Adjustable",
    src: img105,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Educational watch with interchangeable number blocks to help children learn telling time. Features silent sweep movement and scratch-resistant face. Water-resistant silicone band with fun cartoon characters."
  },
  {
    id: 106,
    name: "Magical Unicorn Raincoat",
    price: 49.99,
    size: "5T",
    src: img106,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2023,
    detail: "Waterproof coat with rainbow mane hood and iridescent horn attachment. Sealed seams and extra-long sleeves provide full rain protection. Packable into integrated rainbow pouch with carabiner clip."
  },
  {
    id: 107,
    name: "Robot Coding Toy Set",
    price: 59.99,
    size: "One Size",
    src: img107,
    category: "kids",
    discount: 30,
    new: true,
    trend: false,
    deal: false,
    collection: 2024,
    detail: "Beginner STEM kit with programmable robot that teaches sequencing through physical coding blocks. Includes 40 interactive missions and growing difficulty levels. Parts are dishwasher-safe for easy cleaning."
  },
  {
    id: 108,
    name: "Glow-in-the-Dark Constellation Sheets",
    price: 42.99,
    size: "Twin",
    src: img108,
    category: "kids",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Bed sheet set with accurate constellation patterns that glow softly at night. Hypoallergenic microfiber material stays cool and resists pilling. Includes matching pillowcase with shooting star design."
  },
  {
    id: 109,
    name: "3D Dinosaur Slippers",
    price: 27.99,
    size: "13C",
    src: img109,
    category: "kids",
    discount: 30,
    new: false,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Roars when walked in! Plush slippers with realistic dinosaur faces and non-skip grips on soles. Removable insoles for washing. Features soft faux fur lining and embroidered details."
  },
  {
    id: 110,
    name: "Personalized Growth Chart Ruler",
    price: 35.50,
    size: "One Size",
    src: img110,
    category: "kids",
    discount: 40,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Handcrafted wooden height ruler with customizable name plate and milestone markers. Non-toxic paint with smooth rounded edges. Includes mounting kit and archival stickers to document growth memories."
  },
  {
    id: 111,
    name: "Underwater Camera Set",
    price: 54.99,
    size: "One Size",
    src: img111,
    category: "kids",
    discount: 30,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Kid-friendly digital camera waterproof to 15 feet with fish-shaped floatation strap. Features 8MP resolution, 50+ ocean-themed filters, and easy USB charging. Includes carrying case with silica gel packs."
  },
  {
    id: 112,
    name: "Bubble Machine Backpack",
    price: 39.99,
    size: "One Size",
    src: img112,
    category: "kids",
    discount: 40,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Functional school backpack with built-in automatic bubble blower. Holds 8oz of bubble solution and operates on AA batteries. Insulated pocket keeps lunch cool while separate compartment protects books."
  },
  {
    id: 113,
    name: "Interactive Alphabet Rug",
    price: 47.99,
    size: "40x60in",
    src: img113,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Educational playmat with touch-sensitive letters that light up and make phonetic sounds. Non-slip backing and spill-proof surface make cleanup easy. Features volume control and automatic shutoff."
  },
  {
    id: 114,
    name: "Solar System Planetarium Set",
    price: 52.50,
    size: "One Size",
    src: img114,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "3D model kit with accurate planet replicas that glow in the dark and rotate around LED sun. Includes telescoping stand, fact cards, and AR app that shows constellation relationships."
  },
  {
    id: 115,
    name: "No-Spill Paint Cups",
    price: 24.99,
    size: "Set of 6",
    src: img115,
    category: "kids",
    discount: 30,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Innovative spill-proof paint containers with unique valve system that prevents dripping. Includes primary colors with mixing wells and brush holder. Dishwasher-safe bases with measurement markings."
  },
  {
    id: 116,
    name: "T-Rex Inflatable Costume",
    price: 59.99,
    size: "Ages 4-6",
    src: img116,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Full-body dinosaur costume with battery-operated fan that keeps inflated without overheating. Features realistic roaring sound effect and movable arms. Includes carrying bag and repair patches."
  },
  {
    id: 117,
    name: "Personalized Storybook Set",
    price: 42.99,
    size: "One Size",
    src: img117,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Customized story collection featuring child's name embedded in 12 different bedtime stories. Hardbound books with thick pages resist tearing. Includes matching bookplate for gift-giving."
  },
  {
    id: 118,
    name: "Butterfly Wings Costume",
    price: 37.50,
    size: "3T",
    src: img118,
    category: "kids",
    discount: 40,
    new: false,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Magical winged outfit with iridescent fabric that changes color in sunlight. Soft elastic armbands and breathable mesh keep comfortable during play. Packable into small pouch for easy storage."
  },
  {
    id: 119,
    name: "Glow-in-the-Dark Play Tent",
    price: 64.99,
    size: "49x49x43in",
    src: img119,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Starry night-themed playhouse that glows after lights out. Easy pop-up design with reinforced fiberglass frame. Includes matching glow-in-the-dark pillow and carrying case with shoulder strap."
  },
  {
    id: 120,
    name: "Personalized Step Stool",
    price: 39.99,
    size: "10in H",
    src: img120,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Customizable wooden stepping stool with non-slip treads and engraved name plate. Rounded edges and lead-free paint. Supports up to 150lbs and folds flat for storage between uses."
  },
  {
    id: 121,
    name: "Dinosaur Egg Sand Kit",
    price: 31.99,
    size: "One Size",
    src: img121,
    category: "kids",
    discount: 30,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Archaeology-inspired play set with 12 dinosaur figures buried in kinetic sand. Includes excavation tools, magnifying glass, and scientific identification cards. Mess-contained in reusable plastic egg."
  },
  {
    id: 122,
    name: "Personalized Growth Journal",
    price: 28.50,
    size: "One Size",
    src: img122,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Cherish childhood memories with this fill-in-the-blank journal featuring custom name on cover. Includes prompts for documenting milestones, pocket for mementos, and sticker sheets for decorations."
  },
  {
    id: 123,
    name: "Waterproof Digital Watch",
    price: 34.99,
    size: "Adjustable",
    src: img123,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Kid-tough watch with colorful changeable snap bands and 50m water resistance. Features alarm, stopwatch, and nightlight button. Silicone casing protects against drops and bumps."
  },
  {
    id: 124,
    name: "Magic Sketch Board",
    price: 44.99,
    size: "12x9in",
    src: img124,
    category: "kids",
    discount: 40,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Reusable drawing pad that erases like magic with slider bar. Includes 4 color zones that mix when overlapped and stencil shapes for tracing. Lightweight design perfect for car trips or restaurants."
  },
  {
    id: 125,
    name: "Balance Bike for Toddlers",
    price: 89.99,
    size: "12in Wheels",
    src: img125,
    category: "kids",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Pedal-free training bike with adjustable seat height and air-filled rubber tires. Durable steel frame weighs just 8lbs for easy maneuvering. Includes removable footrest and safety bell."
  },
  {
    id: 126,
    name: "Personalized Name Puzzle",
    price: 36.99,
    size: "11x14in",
    src: img126,
    category: "kids",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Custom wooden puzzle featuring child's name with colorful animal illustrations. Chunky pieces sized for small hands with smooth rounded edges. Non-toxic paint and protective gloss coating."
  },
  {
    id: 127,
    name: "Light-Up Dance Mat",
    price: 57.99,
    size: "35x35in",
    src: img127,
    category: "kids",
    discount: 30,
    new: false,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Interactive game mat with 9 light-up panels that create follow-the-light patterns. Three game modes including memory challenges and dance routines. Rolls up for storage with included fastening strap."
  },
  {
    id: 128,
    name: "3D Animal Face Mask Set",
    price: 19.99,
    size: "One Size",
    src: img128,
    category: "kids",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Breathable fabric masks featuring lifelike animal designs with 3D sculpted noses. Adjustable ear loops and nose wire for comfortable fit. Includes storage pouch and five different jungle animal designs."
  },
  {
    id: 129,
    name: "Personalized Growth Chart",
    price: 32.50,
    size: "6ft",
    src: img129,
    category: "kids",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Canvas growth chart with customizable name and birth details. Washable fabric with reinforced hanging grommets. Includes fabric marker for documenting measurements and milestone stickers."
  },
  {
    id: 130,
    name: "Glow-in-the-Dark Constellations Set",
    price: 41.99,
    size: "One Size",
    src: img130,
    category: "kids",
    discount: 40,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Educational night sky kit with 12 glow-in-the-dark star maps and rotating star finder. Includes 3D planets that project constellation patterns onto walls and ceiling. Storage box doubles as display stand."
  },
  {
    id: 131,
    name: "No-Tie Shoelaces",
    price: 14.99,
    size: "Set of 3 Pairs",
    src: img131,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Elastic bungee laces that convert any shoes into slip-ons while maintaining secure fit. Adjustable tension system and durable metal aglets. Rainbow color options available with reflective threading."
  },
  {
    id: 132,
    name: "Dino Dig Sandbox",
    price: 79.99,
    size: "36x24in",
    src: img132,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Outdoor sand play station shaped like a dinosaur with built-in seat and shade canopy. Includes 10 buried dinosaur bones and excavation tools. Mold-resistant plastic resists fading and has drainage holes."
  },
  {
    id: 133,
    name: "Personalized Story Pillow",
    price: 45.99,
    size: "16x16in",
    src: img133,
    category: "kids",
    discount: 30,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Custom printed pillowcase featuring child's name in an illustrated bedtime story scene. Ultra-soft polyester exterior with hypoallergenic filling. Machine washable with color-locking technology."
  },
  {
    id: 134,
    name: "Interactive World Map",
    price: 59.50,
    size: "36x24in",
    src: img134,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Smart poster with touch-activated country facts and animal sounds. Includes 100+ educational sound bites and quiz mode. Requires 3 AA batteries (not included). Dry-erase surface for notes and drawing."
  },
  {
    id: 135,
    name: "Rainbow Balance Stepping Stones",
    price: 52.99,
    size: "Set of 6",
    src: img135,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Colorful textured discs for developing balance and coordination. Interlocking design creates obstacle courses indoors or outdoors. Non-slip rubber bottoms prevent sliding. Supports up to 150lbs per stone."
  },
  {
    id: 136,
    name: "Personalized Hair Accessory Organizer",
    price: 37.99,
    size: "12x6in",
    src: img136,
    category: "kids",
    discount: 40,
    new: false,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Custom name wall organizer with 24 clear pockets for hair bows, clips and ties. Features colorful fabric backing and durable plastic sleeves. Includes adhesive hooks and removable dry-erase labels."
  },
  {
    id: 137,
    name: "Glow-in-the-Dark Jump Rope",
    price: 18.99,
    size: "7ft",
    src: img137,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Illuminated skipping rope with LED beads that charge in sunlight. Adjustable length mechanism grows with child. Ergonomic foam handles with wrist straps. Provides 8+ hours of glow after full charge."
  },
  {
    id: 138,
    name: "Personalized First Bike Helmet",
    price: 49.99,
    size: "50-54cm",
    src: img138,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "CPSC-certified protective helmet with custom name decal. Features 11 ventilation ports, magnetic buckle, and removable insect netting. Includes helmet bag and extra padding set for perfect fit adjustment."
  },
  {
    id: 139,
    name: "3D Solar System Mobile",
    price: 42.50,
    size: "36in Span",
    src: img139,
    category: "kids",
    discount: 30,
    new: true,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Glow-in-the-dark planetarium mobile with accurate relative sizes and orbital paths. Suspends from ceiling hook with invisible thread for floating effect. Includes educational booklet with fun space facts."
  },
  {
    id: 140,
    name: "Personalized Step Stool with Chalkboard",
    price: 44.99,
    size: "Two-Step",
    src: img140,
    category: "kids",
    discount: 40,
    new: false,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Dual-height wooden stool with child's name engraved on top step. Features writable chalkboard surface on riser and non-slip treads. Supports up to 200lbs. Includes 4 colored chalks and eraser."
  },
  {
    id: 141,
    name: "Glow-in-the-Dark Bath Toys",
    price: 22.99,
    size: "Set of 5",
    src: img141,
    category: "kids",
    discount: 30,
    new: true,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Aquatic creature bath set that illuminates underwater. Includes octopus, sea turtle, fish and dolphin with squeezable water sprayers. Made from 100% silicone with no holes to prevent mold growth."
  },
  {
    id: 142,
    name: "Personalized Growth Marker",
    price: 36.99,
    size: "24in",
    src: img142,
    category: "kids",
    discount: 40,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Customizable height chart ruler with movable animal marker to track growth. Wooden construction with engraved measurements and optional paint finish. Includes mounting kit and archival stickers."
  },
  {
    id: 143,
    name: "Magic Water Drawing Mat",
    price: 39.99,
    size: "23x17in",
    src: img143,
    category: "kids",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Reusable fabric mat that reveals colors when wet and disappears when dry. Includes 6 water markers and stampers. Rolls up compactly with snap closure and includes carry handle for travel."
  },
  {
    id: 144,
    name: "Personalized Library Book Bag",
    price: 28.99,
    size: "One Size",
    src: img144,
    category: "kids",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Customized reusable book tote with child's name printed alongside literary-themed artwork. Durable canvas construction with reinforced handles. Features interior pocket for library cards and reading log."
  },
  {
    id: 145,
    name: "Glow-in-the-Dark Space Stickers",
    price: 15.99,
    size: "200 Count",
    src: img145,
    category: "kids",
    discount: 30,
    new: false,
    trend: false,
    deal: false,
    collection: 2023,
    detail: "Peel-and-stick glow stars, planets and rockets for creating bedroom constellations. Removable adhesive leaves no residue. Includes layout guide for creating accurate zodiac patterns on walls and ceilings."
  },
  {
    id: 146,
    name: "Personalized Wooden Name Puzzle",
    price: 29.99,
    size: "12x8in",
    src: img146,
    category: "kids",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2024,
    detail: "Custom-cut wooden name puzzle with rainbow colors under each letter piece. Smooth rounded edges safe for toddlers. Non-toxic paint and protective coating. Includes sturdy storage tray."
  },
  {
    id: 147,
    name: "Splash-Resistant Music Player",
    price: 49.99,
    size: "One Size",
    src: img147,
    category: "kids",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2025,
    detail: "Kid-safe MP3 player with 8GB memory and waterproof casing. Features simple 3-button operation and volume limiter. Includes 30 preloaded songs, headphones, and charging dock with safety certification."
  },
  {
    id: 148,
    name: "Personalized First Christmas Ornament",
    price: 32.50,
    size: "4in",
    src: img148,
    category: "kids",
    discount: 40,
    new: true,
    trend: false,
    deal: true,
    collection: 2023,
    detail: "Hand-blown glass keepsake ornament with custom name, birthdate, and footprint impression option. Shatter-resistant clear coating and decorative ribbon for hanging. Includes gift box and authenticity card."
  },
  {
    id: 149,
    name: "Glow-in-the-Dark Wall Decals",
    price: 24.99,
    size: "50 Count",
    src: img149,
    category: "kids",
    discount: 30,
    new: false,
    trend: true,
    deal: false,
    collection: 2024,
    detail: "Removable glow decals featuring jungle animals that illuminate for 8+ hours after light exposure. Repositionable adhesive works on walls, furniture and windows. Includes application tool and layout guide."
  },
  {
    id: 150,
    name: "Personalized Growth Chart Poster",
    price: 27.99,
    size: "24x36in",
    src: img150,
    category: "kids",
    discount: 40,
    new: true,
    trend: true,
    deal: true,
    collection: 2025,
    detail: "Customizable height chart with child's name and favorite colors displayed alongside whimsical illustrations. Thick laminated paper resists tears and spills. Includes non-marking mounting putty and archival marker."
  }
];




function AllProducts() {
  const { param } = useParams();
  const [ filterProducts , setFilterProducts ] = useState(Products);
  const [searchTerm, setSearchTerm] = useState("");

 
  useEffect( () => {
    let Items = [...Products];
    
    const searchProducts = Products.filter((product) =>
     product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if(param){
      if(['men' , 'women' , 'kids'].includes(param)){
        Items = Items.filter(item => item.category === param);
      } else if(['new', 'trend', 'deal'].includes(param)){
        if(param === "new"){
          Items = Items.filter(item => item.new === true);
        } else if(param === "trend"){
          Items = Items.filter(item => item.trend === true);
        } else if(param === "deal"){
          Items = Items.filter(item => item.deal === true);
        }
      }
    }
    if(searchTerm.length > 0){
       if(searchProducts.length )
        setFilterProducts(searchProducts);
    }else{
        setFilterProducts(Items);
    }

  }, [param, searchTerm]);

  return (
    <>
      <div className="w-[100%] h-auto font-serif">

        <section className="flex flex-row items-center py-2 px-6 justify-between w-[100%] h-auto">
            <Link to="/">
              <button className="font-extrabold font-serif text-xl cursor-pointer hover:text-gray-500">shoppey</button>
            </Link>
            <div className="flex flex-row items-center justify-center gap-6 text-xl">
              <Link to="/Save">
                <FaRegHeart className="cursor-pointer hover:text-gray-500" />
              </Link>
              <Link to="/Cart">
                <FaCartShopping className="cursor-pointer hover:text-gray-500" />
              </Link>
                <FaRegUser className="cursor-pointer hover:text-gray-500" />
            </div>
        </section>

        <section className="flex flex-col items-center justify-center w-[100%] p-6 h-auto bg-linear-to-l from-[#dd957a] to-[#eee2ca] gap-2">
              <h1 className="font-bold text-2xl">Explore All Products</h1>
                <div className=" flex flex-row items-center justify-center w-[100%] gap-2">
                    <input type="text" value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" className="w-[50%] max-[550px]:w-[90%] h-[2.5rem] px-4 rounded-full  border-none bg-white/50 text-black placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b48068]" />
                    <BiSearch className="font-bold cursor-pointer text-2xl hover:text-[#b48068]"/>
                </div>
        </section>

        <section className="columns-5 mt-[1rem] w-[100%] h-auto p-4 max-[900px]:columns-4 max-[660px]:columns-3 max-[500px]:columns-2">
        { filterProducts.map((item) => (
            <Link key={item.id} to={`/ProductDetail/${item.id}`}>
              <img key={item.id}  className="w-full rounded-[1rem] mb-6 h-auto shadow-[0.1px_0.1px_0.1rem_#dd957a]" src={item.src} />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default AllProducts;