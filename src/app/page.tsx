import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ShareButton } from '@/components/ShareButton'

export default function BioLink() {
  const images = PlaceHolderImages.reduce((acc, curr) => {
    acc[curr.id] = curr.imageUrl
    return acc
  }, {} as Record<string, string>)

  const currentYear = new Date().getFullYear()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="container max-w-[480px] w-full h-full overflow-y-auto scrollbar-none relative animate-fade-in flex flex-col items-center">
        
        <ShareButton />

        {/* Profile Area */}
        <div className="mt-[70px] mb-8 text-center flex flex-col items-center">
          <div className="relative group">
            <div className="profile-img-container w-[150px] h-[150px] rounded-full bg-white border-4 border-biored/10 p-3 mb-4 shadow-[0_0_25px_rgba(175,12,12,0.2),0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:rotate-6 group-hover:shadow-[0_0_35px_rgba(175,12,12,0.4),0_8px_25px_rgba(0,0,0,0.4)] overflow-hidden flex items-center justify-center">
              <img 
                src={images.logo} 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
            Guilherme Florentino 
            <i className="fa-solid fa-circle-check text-sky-500 text-sm"></i>
          </h1>
          <p className="text-neutral-400 font-light mt-1">Web Designer</p>
        </div>

        {/* Link Cards */}
        <div className="flex flex-col gap-4 w-full">
          <a 
            href="https://hephesto.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-card-shine relative flex items-center justify-between p-[18px_20px] rounded-xl bg-white/5 border border-white/10 text-white font-medium backdrop-blur-md transition-all duration-300 hover:bg-biored/15 hover:-translate-y-1 hover:border-biored hover:shadow-xl overflow-hidden group"
          >
            <div className="w-[30px] flex justify-center items-center">
              <img src={images.laptop} alt="Laptop" className="w-6 h-6 object-contain custom-icon-filter" />
            </div>
            <span className="flex-grow text-center pr-8">Visite meu Site</span>
          </a>

          <a 
            href="https://www.behance.net/Floree" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-card-shine relative flex items-center justify-between p-[18px_20px] rounded-xl bg-white/5 border border-white/10 text-white font-medium backdrop-blur-md transition-all duration-300 hover:bg-biored/15 hover:-translate-y-1 hover:border-biored hover:shadow-xl overflow-hidden group"
          >
            <div className="w-[30px] flex justify-center items-center">
              <img src={images.behance} alt="Behance" className="w-6 h-6 object-contain custom-icon-filter" />
            </div>
            <span className="flex-grow text-center pr-8">Meu Portfólio</span>
          </a>
        </div>

        {/* Contact Email Section */}
        <div className="flex items-center justify-center gap-[10px] mt-6 mb-2 opacity-70 tracking-wide text-white">
          <img src={images.email} alt="Email" className="w-5 h-5 custom-icon-filter" />
          <span>florentino@hephesto.com</span>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center gap-5 mt-5">
          <a 
            href="https://www.instagram.com/_oflorentino/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center group"
          >
            <img 
              src={images.instagram} 
              alt="Instagram" 
              className="w-6 h-6 object-contain social-icon-filter group-hover:scale-110 group-hover:invert"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/guilherme-florentino-web/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center group"
          >
            <img 
              src={images.linkedin} 
              alt="LinkedIn" 
              className="w-6 h-6 object-contain social-icon-filter group-hover:scale-110 group-hover:invert"
            />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-10 mb-5 text-xs text-white/40">
          <p>&copy; {currentYear} Guilherme Florentino. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  )
}