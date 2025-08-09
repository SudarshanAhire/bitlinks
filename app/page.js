import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 text-black">
      <section className="grid grid-cols-2 h-[50vh] ">
        <div className="flex flex-col gap-4 items-end justify-center">
          <p className="text-4xl font-bold">The best URL shortener in the Market</p>
          <p className="px-38 text-center">we wre the most straightforword URL shortener in the world. Most of the url shortener will track you or ask you to give your details for login. We understand your and hence we created this URL shortener.</p>
          <div className="flex gap-3 justify-start">
                <Link href="/shorten"><button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">Try Now</button> </Link>
                <Link href="/github"><button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">GitHub</button> </Link>
          </div>  
        </div>

        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
