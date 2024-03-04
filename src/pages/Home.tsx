import FeaturedProductCard from "../components/FeaturedProductCard"
import FormInput from "../components/FormInput"
import ProductsList from "../components/ProductsList"

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>
      {/* Promotion Section */}
      <section className="relative">
        <img src="/assets/promotion-image.png" alt="Promotion" className="w-full" />
        <h2 className="grid gap-3 absolute bottom-[10vw] left-[10vw] text-2xl sm:text-3xl md:text-5xl text-white font-bold">
          Super Flash Sale <span>50% Off</span>
        </h2>
      </section>

      {/* Products Section */}
      <section>
        <ProductsList />
      </section>

      {/* Featured Product Section */}
      <section className="w-full relative flex bg-secondary mt-32 px-10 sm:px-20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-white">
          <div className="grid gap-4">
            <h2 className="text-2xl sm:text-6xl font-semibold">Addidas Men Running Sneakers</h2>
            <p className="">Performance and design. Taken right to the edge.</p>
            <a href="#" className="hover:underline">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/assets/shoe.png" alt="Shoe" className="-translate-y-[4vw] scale-125" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-white bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="grid gap-8 justify-items-center">
            <img src="/assets/shipping.png" alt="Shipping" />
            <h2 className="text-black text-xl font-semibold uppercase">Free Shipping</h2>
          </div>
          <div className="grid gap-8 justify-items-center">
            <img src="/assets/refund.png" alt="Refund" />
            <h2 className="text-black text-xl font-semibold uppercase">100% REFUND</h2>
          </div>
          <div className="grid gap-8 justify-items-center">
            <img src="/assets/support.png" alt="Support" />
            <h2 className="text-black text-xl font-semibold uppercase">SUPPORT 24/7</h2>
          </div>
        </div>

        {/* Featured Products Title */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-black uppercase text-center">FEATURED PRODUCTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 mb-20">
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
        </div>

        {/* Search Form */}
        <div>
          <FormInput buttonLabel="Search" placeHolder="Search query..." />
        </div>
      </section>
    </>
  )
}
