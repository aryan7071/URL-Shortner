import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-purple-100" >
      <section className="grid grid-cols-2 h-[50vh] " >
        <div className=" flex flex-col gap-4 justify-center items-center ">
          <p className="text-2xl font-bold" >
          The Best  URL shortner in the market
          </p>
          <p>
            We are the most straightforward URL Shortner in the world 
          </p>
        </div>
        <div className=" flex relative " >
          <Image className="mix-blend-darken" alt="An image of a vector" src={"/vector.jpg"} fill />
        </div>
      </section>
    </main>
  );
}
