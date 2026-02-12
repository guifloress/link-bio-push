"use client"

import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ShareButton() {
  const { toast } = useToast()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link Copiado!",
        description: "O link foi copiado para sua área de transferência.",
      })
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Link na Bio - Guilherme Florentino',
          text: 'Confira meus links e redes sociais!',
          url: window.location.href,
        })
      } catch (error) {
        // Se o compartilhamento for negado ou falhar, tentamos copiar para o clipboard
        await copyToClipboard()
      }
    } else {
      await copyToClipboard()
    }
  }

  return (
    <button
      onClick={handleShare}
      className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-biored hover:text-white hover:scale-110 border border-white/10"
      title="Compartilhar Perfil"
    >
      <i className="fa-solid fa-share-nodes text-lg"></i>
    </button>
  )
}
