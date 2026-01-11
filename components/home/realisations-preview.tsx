"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, Play } from "lucide-react"
import { urlFor } from "@/sanity/client"
import type { RealisationsPreviewData, RecentVideoData } from "@/types/sanity"

interface RealisationsPreviewProps {
  data: RealisationsPreviewData
  videoData?: RecentVideoData
}

export function RealisationsPreview({ data, videoData }: RealisationsPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  // URL de la vidéo depuis Sanity
  const videoUrl = videoData?.video?.asset?._ref
    ? `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${videoData.video.asset._ref.replace('file-', '').replace('-mp4', '.mp4').replace('-mov', '.mov').replace('-webm', '.webm')}`
    : null

  return (
    <section className="py-20 max-lg:landscape:py-12 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16 max-lg:landscape:mb-8">
          <p className="text-sm max-lg:landscape:text-xs font-bold text-primary uppercase tracking-widest mb-4 max-lg:landscape:mb-2">{data.sectionLabel}</p>
          <h2 className="text-3xl max-lg:landscape:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-lg:landscape:mb-3 leading-tight">
            {data.title}
          </h2>
          <p className="text-base max-lg:landscape:text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Vidéo récente */}
        {videoUrl && videoData && (
          <div className="max-w-xs mx-auto mb-10 max-lg:landscape:mb-6">
            <div className="relative aspect-[3/4] rounded-xl max-lg:landscape:rounded-lg overflow-hidden shadow-lg bg-white">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls={isPlaying}
                onPause={handlePause}
                playsInline
                preload="metadata"
                style={{
                  aspectRatio: '3/4'
                }}
              >
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity hover:bg-black/50">
                  <button
                    onClick={handlePlayClick}
                    className="group relative"
                    aria-label="Lire la vidéo"
                  >
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative bg-white rounded-full p-4 md:p-5 shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 md:h-10 md:w-10 text-primary fill-primary" />
                    </div>
                  </button>
                </div>
              )}
            </div>
            {videoData.description && (
              <p className="text-center text-sm md:text-base text-muted-foreground mt-4 max-lg:landscape:mt-2">
                {videoData.description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-8 max-lg:landscape:gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12 max-lg:landscape:mb-6">
          {data.realisations.map((realisation) => (
            <div
              key={realisation._key}
              className="group bg-white rounded-2xl max-lg:landscape:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] max-lg:landscape:aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={realisation.image ? urlFor(realisation.image).width(800).height(600).url() : "/placeholder.svg"}
                  alt={realisation.image?.alt || realisation.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized={!!realisation.image}
                />
                <span className="absolute top-4 max-lg:landscape:top-2 left-4 max-lg:landscape:left-2 text-xs max-lg:landscape:text-[10px] font-bold bg-primary text-white px-4 max-lg:landscape:px-3 py-2 max-lg:landscape:py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {realisation.category}
                </span>
              </div>
              <div className="p-6 max-lg:landscape:p-4">
                <div className="flex items-center gap-2 text-sm max-lg:landscape:text-xs text-muted-foreground mb-3 max-lg:landscape:mb-2">
                  <MapPin className="h-4 w-4 max-lg:landscape:h-3 max-lg:landscape:w-3 text-primary" />
                  {realisation.location}
                </div>
                <h3 className="text-xl max-lg:landscape:text-base font-bold text-foreground">{realisation.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Link href="/realisations">
              {data.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
