// import "./Hero.css";

// function Hero() {
//   return (
//     <section className="hero-section">
//       <div className="hero-container">
//         <div className="hero-content">
//           <span className="discount-badge">WEEKLY DISCOUNT</span>
//           <h1 className="hero-title">Premium Product Online Shop</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
//             suscipit est autem quia? Voluptatem?
//           </p>
//           <a to="/shop" className="shop-now-btn">
//             Shop Now
//           </a>
//         </div>
//         <div className="hero-image-container">
//           <img
//             src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
//             alt=""
//             className="hero-image"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

// import { Button } from "@/components/ui/button";

// function Hero() {
//   return (
//     <section className="px-8 md:px-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 rounded-md min-h-[60vh] bg-gray-100">
//         <div className="flex flex-col justify-center p-16 gap-4">
//           <span className="inline-block rounded-full px-2 py-1 text-xs bg-yellow-400 w-fit">
//             WEEKLY DISCOUNT
//           </span>
//           <h1 className="text-5xl font-semibold leading-tight">
//             Premium Product Online Shop
//           </h1>
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
//             suscipit est autem quia? Voluptatem?
//           </p>
//           {/* <a
//             href="/shop"
//             className="px-4 py-2 text-white font-medium bg-black rounded-md inline-block w-fit"
//           >
//             Shop Now
//           </a> */}
//           <Button className="w-fit" asChild>
//             <a to="/shop">Shop Now</a>
//           </Button>
//         </div>
//         <div className="relative">
//           <img
//             src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
//             alt="Hero"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import "./Hero.css";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="px-8 py-8">
      <div className="hero-container">
        <div className="hero-content">
          <span className="discount-badge">WEEKLY DISCOUNT</span>
          <h1 className="hero-title">Premium Product Online Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Button className="w-fit" asChild>
            <a to="/shop">Shop Now</a>
          </Button>
        </div>
        <div className="hero-image-container">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
