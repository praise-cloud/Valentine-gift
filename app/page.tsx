import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Message } from "@/components/Message";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Gallery />
      <Message />
    </main>
  );
}
