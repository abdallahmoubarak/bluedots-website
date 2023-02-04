import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Dots</title>
        <meta name="description" content="Blue Dots" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          className="mx-auto"
          src="/logo.svg"
          alt=""
          width={300}
          height={300}
        />
      </main>
    </>
  );
}
