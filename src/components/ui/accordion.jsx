import { useState } from "react"

export const Accordion = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="w-full relative max-w-7xl mx-auto my-1">
      {/* Top small bar */}
      <div className="w-[9.4%] min-w-[100px] max-w-[126px] h-[39px] bg-black rounded-[9px] border-[3px] border-[rgba(255,49,94,0.45)]" style={{ position: 'relative', zIndex: 2 }} />

      {/* Large top bar */}
      <div className="w-full max-w-[1342px] h-[62px] bg-black rounded-[9px] border-[3px] border-[rgba(255,49,94,0.45)] mt-[-26px] relative overflow-visible">
        {/* Overlay black patch to cover under small bar */}
        <div className="absolute left-0 top-0 h-full bg-black rounded-tl-[9px]" style={{ width: '9.4%', minWidth: 100, maxWidth: 126, zIndex: 3 }} />
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-[1342px] bg-black rounded-[10px] px-[15px] py-[19px] mt-[-30px] flex flex-col gap-4">
        {/* Gradient border overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "10px",
            border: "3px solid transparent",
            background:
              "linear-gradient(90deg, #FF315E 0%, #E861FF 50%, #5e1fff 75%,#FF315E 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: 5,
          }}
        />

        {/* Accordion content expands ABOVE */}
        {isExpanded && (
          <div className="w-full flex flex-col gap-2 z-10">
            <div
              className="bg-white rounded-[10px] px-8 py-6 shadow-lg text-black text-2xl md:text-3xl font-neue-roman font-normal"
              style={{ transform: "rotate(-2deg)" }}
            >
              TransfiNITTe is a{" "}
              <span className="font-bold">42-hour</span> weekend event where
              students collaborate on innovative{" "}
              <span className="font-bold">software</span> and{" "}
              <span className="font-bold">hardware</span> projects.
            </div>
          </div>
        )}

        {/* Question row always pinned at bottom */}
        <div className="flex flex-row w-full items-center justify-between z-10 mt-auto">
          <div
            className="text-white font-['Neue_Haas_Grotesk_Display_Pro'] italic font-medium break-words"
            style={{ fontSize: "clamp(20px, 4vw, 35px)" }}
          >
            What is TransfiNITTe?
          </div>
          <button
            onClick={handleToggle}
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#1a1a1a] rounded-full border border-[#E861FF]"
          >
            <span className="text-3xl text-white">
              {isExpanded ? "-" : "+"}
            </span>
          </button>
        </div>
      </div>

      {/* Small black patch */}
      <div className="w-[8.9%] min-w-[95px] max-w-[120px] h-[18px] bg-black mt-[-40px] ml-[3px]" />
    </div>
  )
}

export default Accordion
