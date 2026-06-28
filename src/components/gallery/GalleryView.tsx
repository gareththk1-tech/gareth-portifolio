"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";
import { RevealWaveImage } from "@/components/ui/reveal-wave-image";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) =>
        image.wave ? (
          <div
            key={image.src}
            style={{
              borderRadius: "var(--radius-m)",
              overflow: "hidden",
              aspectRatio: image.orientation === "horizontal" ? "16 / 9" : "3 / 4",
              width: "100%",
            }}
          >
            <RevealWaveImage
              src={image.src}
              waveSpeed={0.15}
              waveFrequency={0.6}
              waveAmplitude={0.4}
              revealRadius={0.45}
              revealSoftness={0.9}
              pixelSize={2}
              mouseRadius={0.35}
            />
          </div>
        ) : (
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={image.src}
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        )
      )}
    </MasonryGrid>
  );
}
