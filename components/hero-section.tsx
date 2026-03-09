"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { ChevronRight } from "lucide-react";
import { Feature } from "@/components/feature-with-image-carousel";
// import { FeaturesLyra } from "@/components/features-lyra";
import SectionWithMockup from "@/components/section-with-mockup";
// import { TabsDemo } from "@/components/ui/aceternity-tabs";
// import FeatureSection from "@/components/feature-section";
import FAQs from "@/components/preguntas-frec";
import Footer from "@/components/footer";
import WobbleCardSection from "@/components/wobble-card-section";
import PinCardsSection from "@/components/pin-cards-section";
import { useReducedMotion } from "@/components/theme-controls";
import { useTheme } from "next-themes";

const circleItems = [
  { image: "/img/carrusel/carrusel1.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel2.png", title: "Reloj" },
  { image: "/img/carrusel/carrusel1.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel2.png", title: "Reloj" },
  { image: "/img/carrusel/carrusel1.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel2.png", title: "Reloj" },
  { image: "/img/carrusel/carrusel1.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel2.png", title: "Reloj" },
  { image: "/img/carrusel/carrusel1.png", title: "Audifonos" },
  { image: "/img/carrusel/carrusel2.png", title: "Reloj" },
];

export default function HeroSection() {
  const reducedMotion = useReducedMotion()
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    if (!videoRef.current) return
    if (reducedMotion) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(() => {})
    }
  }, [reducedMotion])

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="">
            <div className="aspect-2/3 relative z-10 flex flex-col justify-end px-6 lg:aspect-video">
              <div className="mx-auto w-full max-w-8xl pb-6 lg:px-35 lg:pb-92">
                <ScrollAnimation direction="up" delay={0.2}>
                  <div className="max-w-lg">
                    <h1 className="text-balance text-5xl md:text-6xl xl:text-7xl text-foreground">
                      Visualiza en Realidad Aumentada
                    </h1>
                    <p className="mt-6 text-balance text-lg text-muted-foreground">
                      Componentes altamente personalizables.
                    </p>

                    <div className="mt-8 flex items-center gap-2">
                      <Button
                        asChild
                        size="lg"
                        className="h-12 rounded-full pl-5 pr-3 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link href="#link">
                          <span className="text-nowrap">
                            Comenzar a Construir
                          </span>
                          <ChevronRight className="ml-1" />
                        </Link>
                      </Button>
                      <Button
                        key={2}
                        asChild
                        size="lg"
                        variant="ghost"
                        className="h-12 rounded-full px-5 text-base hover:bg-secondary/20"
                      >
                        <Link href="/demo">
                          <span className="text-nowrap">Solicitar demo</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0.5 h-[70vh] overflow-hidden rounded-3xl border border-[#9cc2a9]/20 lg:h-[99vh] lg:rounded-[2rem] dark:border-[#60806b]/20 bg-background">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="
                size-full 
                -scale-x-100 
                object-cover
                brightness-100
                dark:brightness-85
                dark:contrast-110"
                src="https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"
              />
            </div>
          </div>
        </section>
        <section className="bg-background py-2">
          <div className="group relative m-auto max-w-8xl px-10 -mt-30">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-52 md:border-r md:border-[#9cc2a9]/30 md:pr-10 shrink-0">
                <p className="text-start text-sm text-muted-foreground md:text-left">
                  Hora de aprender
                </p>
              </div>

              <div className="relative py-6 md:w-[calc(100%-13rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={56}>
                  {circleItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="h-50 w-50 rounded-full bg-secondary flex items-center justify-center overflow-hidden p-2 shadow-lg border-2 border-secondary/50">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover rounded-full"
                        />
                      </div>

                      <span className="text-sm text-muted-foreground font-medium">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>

                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />

                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Lyra - The Lyra ecosystem - moved after carousel */}
        {/* <ScrollAnimation direction="up">
          <FeaturesLyra />
        </ScrollAnimation> */}

        <ScrollAnimation direction="up" delay={0.1}>
          <Feature />
        </ScrollAnimation>

        {/* Section With Mockup 1 - Intelligence delivered (text left, images right) */}
        <SectionWithMockup
          title={
            <>
              Intelligence,
              <br />
              delivered to you.
            </>
          }
          description={
            <>
              Get a tailored Monday morning brief directly in
              <br />
              your inbox, crafted by your virtual personal
              <br />
              analyst, spotlighting essential watchlist stories
              <br />
              and earnings for the week ahead.
            </>
          }
          imageSrc="/img/sections/section1.png"
          reverseLayout={false}
        />

        <SectionWithMockup
          title={
            <>
              Insights,
              <br />
              at your fingertips.
            </>
          }
          description={
            <>
              Access real-time market data and analytics
              <br />
              designed for informed decision-making.
              <br />
              Your personalized dashboard keeps you
              <br />
              ahead of the curve.
            </>
          }
          imageSrc="/img/sections/section2.png"
          reverseLayout={true}
        />

        {/* Aceternity Tabs Section */}
        <section className="py-20 lg:py-32 bg-background">
          {/* <div className="container mx-auto px-6">
            <TabsDemo />
          </div> */}
        </section>

        {/* Feature Section - Workflow Automation */}
        {/* <ScrollAnimation direction="up">
          <FeatureSection />
        </ScrollAnimation> */}

        {/* Footer */}
              <FAQs />
      <Footer />
      </main>

    </>
  );
}
