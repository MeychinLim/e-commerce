import Image from "next/image";
import SectionTitle from "./components/website/SectionTitle";
import { products } from "@/static/products";
import ProductSmallCard from "./components/Product/ProductSmallCard";
import { UserCircle2 } from "lucide-react";
import ProductLargeCard from "./components/Product/ProductLargeCard";

const styles = `
  .home-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/home-bg-bamboo-plants.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.50;
    z-index: 0;
  }
`;

export default function Home() {
  return (
    <div
      className="font-[family-name:var(--font-geist-sans)] min-h-screen relative home-bg"
      // style={{
      //   backgroundImage: "url('/images/home_background.png')",
      // }}
    >
      <style>{styles}</style>
      <div className="mt-40 mb-20 mx-20 relative z-10">
        <main className="flex flex-col w-full">
          <div className="grid grid-cols-3 justify-between gap-10">
            <div className="col-span-2">
              <h1 className="text-8xl text-wrap font-bold mb-2">
                Cacti Plantso
              </h1>
              <p className="text-lg text-muted-foreground">
                Best plants and cacti for your home and office. Browse our
                collection and find the perfect greenery to brighten up your
                space.
              </p>
              <button
                type="button"
                className="mt-4 px-6 py-2 rounded-tr-2xl rounded-bl-2xl border text-white transition"
              >
                Explore
              </button>

              <div>
                <div className="w-80 bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl shadow-xl p-6 my-10">
                  <div className="flex items-center gap-2 mb-4">
                    <UserCircle2 width={30} height={30} />
                    <span className="text-lg font-semibold">Mayuko Chan</span>
                  </div>
                  <p className="text-sm">
                    Good service, affordable price, friendly, healthy plants.
                    Thank you. {`<3`}{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl shadow-xl p-10 h-96 flex flex-col justify-end">
              <div className="flex items-center h-64">
                <Image
                  src="/images/home-plant-3.png"
                  alt="Cactus"
                  width={550}
                  height={100}
                  className="absolute -top-38 right-1/2 translate-x-1/2"
                />
              </div>
              <h1 className="text-3xl font-bold">Rubber Plant</h1>
              <p>
                Clear dirty air, help produce O2. Best for living life style.
              </p>
              <div>
                <button
                  type="button"
                  className="mt-6 px-6 py-2 rounded-tr-2xl rounded-bl-2xl border text-white transition"
                >
                  Get Yours Now
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <SectionTitle title="Our Trendy Plants" />
            <div>
              <ProductLargeCard product={products[0]} />
            </div>

            <SectionTitle title="Our Top Selling" />
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductSmallCard product={product} />
                </div>
              ))}
            </div>

            <SectionTitle title="Customer Review" />
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductSmallCard product={product} />
                </div>
              ))}
            </div>

            <SectionTitle title="Our Best O2" />
            <div>
              <ProductLargeCard product={products[4]} />
            </div>
          </div>
        </main>
        {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer> */}
      </div>
    </div>
  );
}
