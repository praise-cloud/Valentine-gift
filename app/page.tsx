import { SmoothScroll } from "@/components/SmoothScroll"
import { Hero } from "@/components/Hero"
import { Gallery } from "@/components/Gallery"
import { Message } from "@/components/Message"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex flex-col min-h-screen bg-black text-white selection:bg-rose-500 selection:text-white">
        <Hero />
        <Gallery />
        <Message />
      </main>
    </SmoothScroll>
  )
}
