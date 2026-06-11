type Props = {
    title: string;
  };
  
  export default function ProjectTheme({ title }: Props) {
    let glow = "bg-yellow-500/20";
  
    if (title.includes("QR")) {
      glow = "bg-blue-500/20";
    }
  
    if (title.includes("Tibbiy")) {
      glow = "bg-cyan-500/20";
    }
  
    if (title.includes("SCADA")) {
      glow = "bg-green-500/20";
    }
  
    if (title.includes("barmoq")) {
      glow = "bg-red-500/20";
    }
  
    if (title.includes("RFID")) {
      glow = "bg-purple-500/20";
    }
  
    if (title.includes("3D")) {
      glow = "bg-yellow-500/20";
    }
  
    if (
      title.includes("sxema") ||
      title.includes("Sanoat avtomatlashtirish")
    ) {
      glow = "bg-sky-500/20";
    }
  
    return (
      <>
        <div
          className={`
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            rounded-full
            blur-[180px]
            ${glow}
          `}
        />
  
        <div
          className="
            absolute
            inset-0
            opacity-20
            bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />
      </>
    );
  }