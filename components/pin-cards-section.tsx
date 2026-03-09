"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { Beaker, Atom, FlaskConical } from "lucide-react";

export default function PinCardsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-5">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Laboratorios Especializados
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Explora tres categorias de laboratorio con instrumentos y equipos
              detallados en modelos 3D.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {/* Pin 1 - Plantas Quimicas */}
          <div className="h-[28rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer
              title="Plantas Quimicas"
              href="#laboratorios"
            >
              <div className="flex flex-col p-4 tracking-tight w-[18rem] h-[18rem] bg-gradient-to-b from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-primary animate-pulse" />
                  <div className="text-xs text-muted-foreground">Laboratorio Industrial</div>
                </div>

                <div className="flex-1 mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <Beaker className="h-8 w-8 text-primary" />
                    <div className="text-xl font-bold text-foreground">
                      Plantas Quimicas
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Equipos y componentes a escala industrial. Reactores,
                    destiladores, torres de enfriamiento y mas.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">12+</div>
                      <div className="text-xs text-muted-foreground">Equipos</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-secondary">3D</div>
                      <div className="text-xs text-muted-foreground">Modelos</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-xs text-muted-foreground">
                      Modelos interactivos
                    </div>
                    <div className="text-primary text-sm font-medium">
                      {"Explorar ->"}
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Pin 2 - Analisis Instrumental */}
          <div className="h-[28rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer
              title="Analisis Instrumental"
              href="#laboratorios"
            >
              <div className="flex flex-col p-4 tracking-tight w-[18rem] h-[18rem] bg-gradient-to-b from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-secondary animate-pulse" />
                  <div className="text-xs text-muted-foreground">Instrumentacion Avanzada</div>
                </div>

                <div className="flex-1 mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <Atom className="h-8 w-8 text-secondary" />
                    <div className="text-xl font-bold text-foreground">
                      Analisis Instrumental
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Instrumentos analiticos avanzados: espectrofotometros,
                    cromatografos y equipos de medicion.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-secondary">8+</div>
                      <div className="text-xs text-muted-foreground">Instrumentos</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">RA</div>
                      <div className="text-xs text-muted-foreground">Compatible</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-xs text-muted-foreground">
                      Alta precision
                    </div>
                    <div className="text-secondary text-sm font-medium">
                      {"Explorar ->"}
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Pin 3 - Quimica General */}
          <div className="h-[28rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer
              title="Quimica General"
              href="#laboratorios"
            >
              <div className="flex flex-col p-4 tracking-tight w-[18rem] h-[18rem] bg-gradient-to-b from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-primary animate-pulse" />
                  <div className="text-xs text-muted-foreground">Laboratorio Basico</div>
                </div>

                <div className="flex-1 mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <FlaskConical className="h-8 w-8 text-primary" />
                    <div className="text-xl font-bold text-foreground">
                      Quimica General
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Equipo basico para experimentos fundamentales: matraces,
                    mecheros, balanzas y material esencial.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-xs text-muted-foreground">Materiales</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-secondary">360</div>
                      <div className="text-xs text-muted-foreground">Vista 3D</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-xs text-muted-foreground">
                      Para principiantes
                    </div>
                    <div className="text-primary text-sm font-medium">
                      {"Explorar ->"}
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
