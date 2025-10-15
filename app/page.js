import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100" >
      <section className="grid grid-cols-2 h-[50vh] " >
        <div className=" flex flex-col gap-4 justify-center items-center ">
          <p className="text-3xl font-bold">
            The Best  URL shortner in the market
          </p>
          <p className="px-56 text-center" >
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 text-white' >
                <Link href="/generate" ><button className='bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold' >Try Now</button></Link>
                <Link href="/github" ><button className='bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold' >Github</button></Link>
            </div>
        </div>
        <div className=" flex relative " >
          <Image className="mix-blend-darken" alt="An image of a vector" src={"/vector.jpg"} fill />
        </div>
      </section>
    </main>
  );
}
