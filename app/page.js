import Image from "next/image";

export default function Home() {
  return (
     <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Page! Checkout this picture!
      </h1>

      <img
        src="/lillies.png"
        alt="Lillies"
        width={300}
        height={300}
        className="mx-auto rounded-lg"
      />
    </main>
  );
}
