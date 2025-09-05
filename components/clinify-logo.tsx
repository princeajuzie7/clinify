export function ClinifyLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-[var(--clinify-blue)] flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[var(--clinify-blue)] font-bold text-xl tracking-wide">CLINIFY</span>
        <span className="text-[var(--clinify-dark-gray)] text-xs -mt-1">Own your health</span>
      </div>
    </div>
  )
}
