import svgPaths from "./svg-44l9zv3fq6";
import imgBackyardLogoNoBackground11 from "figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgRectangle70 from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma1 from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";

function Item() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 1">
      <p className="font-['General_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3478ea] text-[16px] text-center text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 2">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">About Us</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 3">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Services</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 4">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Projects</p>
    </div>
  );
}

function Menubar() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Menubar">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function ItemL() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Item L">
      <Menubar />
    </div>
  );
}

function IconR() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon R">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon R">
          <g id="Icon">
            <path d={svgPaths.p3c79c680} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p11bbef00} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[36px] px-[24px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[22px] whitespace-pre">Contact Us</p>
      </div>
      <IconR />
    </div>
  );
}

function ItemR() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Item R">
      <Button />
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Navbar">
      <div className="h-[67px] relative shrink-0 w-[79px]" data-name="Backyard Logo (No Background) (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.91%] left-0 max-w-none top-[-8.96%] w-full" src={imgBackyardLogoNoBackground11} />
        </div>
      </div>
      <ItemL />
      <ItemR />
    </div>
  );
}

function Navbar1() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="Navbar">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[80px] items-center justify-center px-[100px] py-0 relative w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Our Services</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full">
      <Frame45 />
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[748px]">
        <p className="leading-[normal]">Home / Services</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#353851] h-[349px] opacity-90 relative shrink-0 w-[1440px]">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] h-[349px] items-start justify-center px-[100px] py-[271px] relative w-[1440px]">
          <div className="absolute h-[708px] left-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[1440px]" data-name="Pexels Photo by Christina Morillo">
            <div className="absolute inset-0 mix-blend-overlay overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[138.51%] left-0 max-w-none top-[1.49%] w-full" src={imgPexelsPhotoByChristinaMorillo} />
            </div>
          </div>
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Span() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Our Services</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 w-[140px]" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[0px] text-center w-[804px]">
        <p className="leading-[normal] text-[48px]">
          <span>{`Services We Provide to `}</span>
          <span className="font-['General_Sans:Bold',sans-serif] not-italic text-[#1559cb]">Elevate Your Business</span>
        </p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-center justify-center relative shrink-0 w-[804px]">
      <Frame11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[1240px]">
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p263d100} id="Vector" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p21315c00} id="Vector_2" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#bed4f8] relative rounded-[8px] shrink-0 size-[64px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Learn More</p>
      </div>
      <div className="absolute bottom-px h-px left-0 right-0" data-name="Underline">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function IconR1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon R">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon R">
          <g id="Icon">
            <path d={svgPaths.p96c0480} fill="var(--fill-0, #0494FC)" />
            <path clipRule="evenodd" d={svgPaths.p3d904100} fill="var(--fill-0, #0494FC)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] relative rounded-[6px] shrink-0" data-name="ButtonText">
      <Label />
      <IconR1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[22px] py-[36px] relative w-full">
          <Container1 />
          <div className="flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] w-full">
            <p className="leading-[28px]">Digital Solutions</p>
          </div>
          <div className="-webkit-box flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-600 w-[min-content]">
            <p className="leading-[24px]">Custom software development, mobile applications, web development, and digital transformation strategies to enhance your business operations.</p>
          </div>
          <ButtonText />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdc20e80} id="Vector_2" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#bed4f8] relative rounded-[8px] shrink-0 size-[64px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Learn More</p>
      </div>
      <div className="absolute bottom-px h-px left-0 right-0" data-name="Underline">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function IconR2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon R">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon R">
          <g id="Icon">
            <path d={svgPaths.p96c0480} fill="var(--fill-0, #0494FC)" />
            <path clipRule="evenodd" d={svgPaths.p3d904100} fill="var(--fill-0, #0494FC)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] relative rounded-[6px] shrink-0" data-name="ButtonText">
      <Label1 />
      <IconR2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[22px] py-[36px] relative w-full">
          <Container3 />
          <div className="flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] w-full">
            <p className="leading-[28px]">Technology Outsourcing</p>
          </div>
          <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[min-content]">
            <p className="leading-[24px] whitespace-pre-wrap">{`Access to skilled IT professionals, dedicated   development teams, and managed IT services to optimize your technology infrastructure.`}</p>
          </div>
          <ButtonText1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdc20e80} id="Vector_2" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, #1559CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#bed4f8] relative rounded-[8px] shrink-0 size-[64px]" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Learn More</p>
      </div>
      <div className="absolute bottom-px h-px left-0 right-0" data-name="Underline">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function IconR3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon R">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon R">
          <g id="Icon">
            <path d={svgPaths.p96c0480} fill="var(--fill-0, #0494FC)" />
            <path clipRule="evenodd" d={svgPaths.p3d904100} fill="var(--fill-0, #0494FC)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonText2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] relative rounded-[6px] shrink-0" data-name="ButtonText">
      <Label2 />
      <IconR3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[22px] py-[36px] relative w-full">
          <Container5 />
          <div className="flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] w-full">
            <p className="leading-[28px]">Consulting</p>
          </div>
          <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[min-content]">
            <p className="leading-[24px]">Strategic technology advisory, digital strategy planning, and implementation guidance to align your IT initiatives with business goals.</p>
          </div>
          <ButtonText2 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[29px] items-center p-[100px] relative w-full">
          <Frame6 />
          {[...Array(2).keys()].map((_, i) => (
            <Frame12 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.021%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Group">
          <g id="Rectangle"></g>
          <circle cx="12.005" cy="12.005" id="Oval" r="9.00375" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.50354 12.005H15.5065" id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p66bcde0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12979680} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialAsteriskCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
      <Group />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#1559cb] h-[68px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[68px] items-center justify-between px-[50px] py-[20px] relative w-full">
          <InterfaceEssentialAsteriskCircle />
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
          </div>
          <InterfaceEssentialAsteriskCircle />
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
          </div>
          <InterfaceEssentialAsteriskCircle />
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Consulting</p>
          </div>
          <InterfaceEssentialAsteriskCircle />
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
          </div>
          <InterfaceEssentialAsteriskCircle />
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
          </div>
          <InterfaceEssentialAsteriskCircle />
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Consulting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Span2() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Our Work Process</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span2 />
      <Span3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white w-full">
        <p className="leading-[normal]">
          <span className="text-[#1a1a1a]">{`Our Proven `}</span>
          <span className="font-['General_Sans:Bold',sans-serif] not-italic text-[#1559cb]">Work Process</span>
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container7 />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame18 />
    </div>
  );
}

function Group2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p210c0d00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p30af7880} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9286 13.8009V44.881" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3097080} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3bf9cc80} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p21c5f000} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function ContentEditBookOpen() {
  return (
    <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[103.571px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
          <circle cx="51.7857" cy="51.7857" fill="var(--fill-0, #1559CB)" id="Ellipse 1" r="51.7857" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[79.543px] mt-[33.143px] relative size-[36.457px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <circle cx="18.2286" cy="18.2286" fill="var(--fill-0, #1A1A1A)" id="Ellipse 2" r="17.3901" stroke="var(--stroke-0, white)" strokeWidth="1.67703" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] ml-[97.643px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">01</p>
      </div>
      <ContentEditBookOpen />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group1 />
      <div className="flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Consulting</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px]">Strategic technology advisory, digital strategy planning, and implem</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p210c0d00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p30af7880} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9286 13.8009V44.881" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3097080} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3bf9cc80} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p21c5f000} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function ContentEditBookOpen1() {
  return (
    <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[103.571px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
          <circle cx="51.7857" cy="51.7857" fill="var(--fill-0, #1559CB)" id="Ellipse 1" r="51.7857" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[79.543px] mt-[33.143px] relative size-[36.457px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <circle cx="18.2286" cy="18.2286" fill="var(--fill-0, #1A1A1A)" id="Ellipse 2" r="17.3901" stroke="var(--stroke-0, white)" strokeWidth="1.67703" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] ml-[97.143px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">02</p>
      </div>
      <ContentEditBookOpen1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group4 />
      <div className="flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Strategy</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Strategic technology advisory, digital strategy planning,  `}</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p210c0d00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p30af7880} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9286 13.8009V44.881" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3097080} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3bf9cc80} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p21c5f000} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function ContentEditBookOpen2() {
  return (
    <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[103.571px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
          <circle cx="51.7857" cy="51.7857" fill="var(--fill-0, #1559CB)" id="Ellipse 1" r="51.7857" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[79.543px] mt-[33.143px] relative size-[36.457px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <circle cx="18.2286" cy="18.2286" fill="var(--fill-0, #1A1A1A)" id="Ellipse 2" r="17.3901" stroke="var(--stroke-0, white)" strokeWidth="1.67703" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] ml-[97.143px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">03</p>
      </div>
      <ContentEditBookOpen2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group6 />
      <div className="flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Implementation</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Strategic technology advisory, digital strategy planning,  `}</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p210c0d00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p30af7880} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9286 13.8009V44.881" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3097080} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3bf9cc80} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p21c5f000} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function ContentEditBookOpen3() {
  return (
    <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[103.571px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
          <circle cx="51.7857" cy="51.7857" fill="var(--fill-0, #1559CB)" id="Ellipse 1" r="51.7857" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[79.543px] mt-[33.143px] relative size-[36.457px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <circle cx="18.2286" cy="18.2286" fill="var(--fill-0, #1A1A1A)" id="Ellipse 2" r="17.3901" stroke="var(--stroke-0, white)" strokeWidth="1.67703" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] ml-[97.643px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">04</p>
      </div>
      <ContentEditBookOpen3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group8 />
      <div className="flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Final Result</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Strategic technology advisory, digital strategy planning,  `}</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start ml-0 mt-0 relative w-[1240px]">
      <Frame20 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <div className="absolute h-0 left-[238px] top-[51.67px] w-[130px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]" style={{ "--stroke-0": "rgba(26, 26, 26, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 4">
            <line id="Line 3" stroke="var(--stroke-0, #1A1A1A)" strokeOpacity="0.36" strokeWidth="4" x2="130" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[555px] top-[51.67px] w-[130px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]" style={{ "--stroke-0": "rgba(26, 26, 26, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 4">
            <line id="Line 3" stroke="var(--stroke-0, #1A1A1A)" strokeOpacity="0.36" strokeWidth="4" x2="130" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[872px] top-[51.67px] w-[130px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]" style={{ "--stroke-0": "rgba(26, 26, 26, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 4">
            <line id="Line 3" stroke="var(--stroke-0, #1A1A1A)" strokeOpacity="0.36" strokeWidth="4" x2="130" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame19 />
      <Group18 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[565.571px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[565.571px] items-center justify-center p-[100px] relative w-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[959.228px] right-[-0.16px] top-[0.1px] w-[1287.16px]" data-name="Component 1">
      <div className="absolute bottom-0 left-[-0.08%] right-0 top-[-0.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1289 960">
          <g id="Component 1" opacity="0.17">
            <path d={svgPaths.p1084e680} id="Vector" stroke="url(#paint0_linear_1_6776)" strokeMiterlimit="10" strokeWidth="1.44462" />
            <path d={svgPaths.p285ec900} id="Vector_2" stroke="url(#paint1_linear_1_6776)" strokeMiterlimit="10" strokeWidth="1.44462" />
            <path d={svgPaths.p27d58800} id="Vector_3" stroke="url(#paint2_linear_1_6776)" strokeMiterlimit="10" strokeWidth="1.44462" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6776" x1="628.483" x2="628.483" y1="10.2393" y2="559.797">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_6776" x1="509.421" x2="509.421" y1="0.247398" y2="754.641">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_6776" x1="414.567" x2="414.567" y1="0.247399" y2="959.476">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Span4() {
  return <div className="bg-[#1559cb] rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1559cb] text-[14px] text-nowrap tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Testimonials</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span4 />
      <Span5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white w-full">
        <p className="leading-[normal]">
          <span>{`Testimonials: `}</span>
          <span className="font-['General_Sans:Bold',sans-serif] not-italic text-[#1559cb]">Trusted by our Clients</span>
        </p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container8 />
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[7.901px] left-0 top-[30.78px] w-[47.296px]" data-name="Component 29">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 8">
        <g id="Component 29">
          <path clipRule="evenodd" d={svgPaths.p36d03f00} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 635" />
          <path clipRule="evenodd" d={svgPaths.p24b0b100} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 636" />
          <path clipRule="evenodd" d={svgPaths.p3c6ae280} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 637" />
          <path clipRule="evenodd" d={svgPaths.p29c51900} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 638" />
          <path clipRule="evenodd" d={svgPaths.paee0970} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 639" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[93.07px] top-[268.39px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.841px] left-0 not-italic text-[#ffe9e9] text-[19.441px] top-0 w-[146.697px]">Esther Jackson</p>
      <Component5 />
    </div>
  );
}

function Rectangle() {
  return (
    <div className="absolute h-[54.002px] left-[25.54px] top-[260.83px] w-[55.357px]">
      <div className="absolute inset-0 rounded-[54.002px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[54.002px] size-full" src={imgRectangle70} />
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="absolute contents left-[25.54px] top-[260.83px]" data-name="name">
      <Group10 />
      <Rectangle />
    </div>
  );
}

function InvertedComma() {
  return (
    <div className="absolute contents left-[377.47px] top-[191.61px]" data-name="inverted comma">
      <div className="absolute flex h-[115.119px] items-center justify-center left-[377.47px] top-[191.61px] w-[77.362px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[115.119px] relative w-[77.362px]" data-name="inverted comma 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-10 pointer-events-none size-full" src={imgInvertedComma1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[115.119px] items-center justify-center left-[463.94px] top-[191.61px] w-[77.362px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[115.119px] relative w-[77.362px]" data-name="inverted comma 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-10 pointer-events-none size-full" src={imgInvertedComma1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[358.573px] right-[-0.16px] top-[0.1px] w-[481.157px]" data-name="Component 1">
      <div className="absolute bottom-0 left-[-0.08%] right-0 top-[-0.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482 359">
          <g id="Component 1">
            <path d={svgPaths.pda05000} id="Vector" stroke="url(#paint0_linear_1_6759)" strokeMiterlimit="10" strokeWidth="0.540019" />
            <path d={svgPaths.p2a46b000} id="Vector_2" stroke="url(#paint1_linear_1_6759)" strokeMiterlimit="10" strokeWidth="0.540019" />
            <path d={svgPaths.p2bcd0e80} id="Vector_3" stroke="url(#paint2_linear_1_6759)" strokeMiterlimit="10" strokeWidth="0.540019" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6759" x1="234.936" x2="234.936" y1="3.82762" y2="209.26">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_6759" x1="190.429" x2="190.429" y1="0.0924808" y2="282.095">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_6759" x1="154.971" x2="154.971" y1="0.0924813" y2="358.665">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Msg() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="msg">
      <div className="bg-[#1e1f20] h-[358.573px] rounded-[21.601px] shrink-0 w-full" />
      <Name />
      <InvertedComma />
      <Component3 />
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[25.38px] not-italic text-[20px] text-white top-[64.8px] w-[386.114px]">I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!”</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Msg key={i} />
      ))}
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame26 />
      <Frame36 />
    </div>
  );
}

function Progress() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[4px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Progress">
      <div className="basis-0 bg-[#1559cb] grow h-full min-h-px min-w-px rounded-[2px] shrink-0" data-name="Progress" />
      <div className="basis-0 bg-zinc-100 grow h-full min-h-px min-w-px rounded-[2px] shrink-0" data-name="Progress" />
      <div className="basis-0 bg-zinc-100 grow h-full min-h-px min-w-px rounded-[2px] shrink-0" data-name="Progress" />
      <div className="basis-0 bg-zinc-100 grow h-full min-h-px min-w-px rounded-[2px] shrink-0" data-name="Progress" />
    </div>
  );
}

function ProgressSegmented() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-[336px]" data-name="ProgressSegmented">
      <Progress />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame37 />
      <ProgressSegmented />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#020e37] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[100px] relative w-full">
          <Component />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Span6() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span6 />
      <Span7 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[48px] text-center w-full">
        <p className="leading-[normal]">
          <span>{`Reach out to `}</span>
          <span className="font-['General_Sans:Bold',sans-serif] not-italic text-[#1559cb]">Us!</span>
        </p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container9 />
      <Frame27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame28 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="relative size-[334.425px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
        <g id="Mask group" opacity="0.2">
          <circle cx="167.212" cy="167.212" fill="var(--fill-0, white)" id="Ellipse 1086" r="167.212" />
          <mask height="335" id="mask0_1_6738" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="335" x="0" y="0">
            <circle cx="167.212" cy="167.212" fill="var(--fill-0, #E1E7ED)" id="Ellipse 1085" r="167.212" />
          </mask>
          <g mask="url(#mask0_1_6738)">
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624102" width="11.5319" x="106.67" y="5.76609" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624103" width="11.5319" x="144.149" y="5.76599" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624104" transform="matrix(1 -1.62119e-06 -1.62119e-06 1 181.628 5.76749)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624105" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 219.107 5.7648)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624106" width="11.5319" x="256.584" y="5.76562" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624107" width="11.5319" x="294.065" y="5.76443" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624110" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 327.615 10.6969)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624108" transform="matrix(1 6.79516e-07 6.79516e-07 1 69.1914 5.76482)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624109" width="11.5319" x="31.7125" y="5.76706" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 w-full" data-name="1">
      <p className="[grid-area:1_/_1] font-['General_Sans:Medium',sans-serif] leading-[1.7] ml-0 mt-[26px] relative text-[18px] text-white tracking-[0.36px] w-[282px]">contact@backyardtech.co.uk</p>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center ml-0 mt-[12px] relative text-[#bcbdbf] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[206.515px]">
        <p className="leading-[1.7]">SEND DIRECT EMAIL</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 w-full" data-name="2">
      <p className="[grid-area:1_/_1] font-['General_Sans:Medium',sans-serif] leading-[24px] ml-0 mt-[26px] relative text-[18px] text-white tracking-[0.36px] w-[282px]">+44 324 3553 8577</p>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center ml-0 mt-[12px] relative text-[#bcbdbf] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[87.765px]">
        <p className="leading-[1.7]">CALL US</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 w-full" data-name="3">
      <p className="[grid-area:1_/_1] font-['General_Sans:Medium',sans-serif] leading-[1.7] ml-0 mt-[26px] relative text-[18px] text-white tracking-[0.36px] w-[282px]">45, London, England, UK</p>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center ml-0 mt-[12px] relative text-[#bcbdbf] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[94.917px]">
        <p className="leading-[1.7]">ADDRESS</p>
      </div>
    </div>
  );
}

function IconL() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p37820b40} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL />
    </div>
  );
}

function IconL1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p156e1d00} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL1 />
    </div>
  );
}

function IconL2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p1fe20f80} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL2 />
    </div>
  );
}

function IconL3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p11da0600} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL3 />
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Social Media Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="List">
      <Component4 />
      <Component1 />
      <Component2 />
      <SocialMediaContainer />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="relative size-[74.499px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
        <g id="Mask group" opacity="0.2">
          <mask height="75" id="mask0_1_6716" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
            <circle cx="37.2495" cy="37.2495" fill="var(--fill-0, #E1E7ED)" id="Ellipse 1085" r="37.2495" />
          </mask>
          <g mask="url(#mask0_1_6716)">
            <circle cx="37.2495" cy="37.2495" fill="var(--fill-0, white)" id="Ellipse 1086" r="37.2495" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624102" width="2.56893" x="23.7626" y="1.28449" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624103" width="2.56893" x="32.1118" y="1.28447" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624104" transform="matrix(1 -1.62119e-06 -1.62119e-06 1 40.4608 1.28474)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624105" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 48.8098 1.28422)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624106" width="2.56893" x="57.1585" y="1.28436" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624107" width="2.56893" x="65.5081" y="1.28413" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624110" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 72.9819 2.38288)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624108" transform="matrix(1 6.79516e-07 6.79516e-07 1 15.4136 1.28421)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624109" width="2.56893" x="7.06422" y="1.28479" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="bg-[#020e37] box-border content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip px-[64px] py-[62px] relative rounded-[8px] self-stretch shrink-0 w-[410px]" data-name="contact info">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7987436652183533)+(var(--transform-inner-height)*0.6016714572906494)))] items-center justify-center left-[-130px] top-[221.53px] w-[calc(1px*((var(--transform-inner-height)*0.7987436652183533)+(var(--transform-inner-width)*0.6016714572906494)))]" style={{ "--transform-inner-width": "334.421875", "--transform-inner-height": "334.421875" } as React.CSSProperties}>
        <div className="flex-none rotate-[53.01deg]">
          <MaskGroup />
        </div>
      </div>
      <List />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7987436652183533)+(var(--transform-inner-height)*0.6016714572906494)))] items-center justify-center left-[234px] top-[233.53px] w-[calc(1px*((var(--transform-inner-height)*0.7987436652183533)+(var(--transform-inner-width)*0.6016714572906494)))]" style={{ "--transform-inner-width": "74.484375", "--transform-inner-height": "74.484375" } as React.CSSProperties}>
        <div className="flex-none rotate-[53.01deg]">
          <MaskGroup1 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">First Name *</p>
    </div>
  );
}

function FormField() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter your first name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
      <Label3 />
      <FormField />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{`Last Name  *`}</p>
    </div>
  );
}

function FormField1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter your last name</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
      <Label4 />
      <FormField1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0 w-full" data-name="Row">
      <Input />
      <Input1 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Email Address *</p>
    </div>
  );
}

function FormField2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter your email address</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label5 />
      <FormField2 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Phone Number *</p>
    </div>
  );
}

function FormField3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">xxx-xxx-xxxx</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label6 />
      <FormField3 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Company Name (Optional)</p>
    </div>
  );
}

function FormField4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter company name</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <Label7 />
      <FormField4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[36px] px-[24px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[22px] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[16px] items-start ml-[42.286px] mt-[48.104px] relative w-[696.308px]" data-name="List">
      <Row />
      <Input2 />
      <Input3 />
      <Input4 />
      <Button5 />
    </div>
  );
}

function Form() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0" data-name="Form">
      <div className="[grid-area:1_/_1] bg-white h-[572px] ml-0 mt-0 relative rounded-[8px] w-[779px]" data-name="BG">
        <div aria-hidden="true" className="absolute border-[#e8e9ea] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_30px_0px_rgba(11,32,78,0.06)]" />
      </div>
      <List1 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[51px] items-start relative shrink-0 w-[1240px]">
      <ContactInfo />
      <Form />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center overflow-clip p-[100px] relative shrink-0 w-[1440px]">
      <Frame29 />
      <Frame35 />
    </div>
  );
}

function Span8() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span8 />
      <Span9 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container10 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame30 />
    </div>
  );
}

function Heading() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[201.321px] mt-0 not-italic place-items-start relative text-nowrap whitespace-pre" data-name="heading">
      <p className="[grid-area:1_/_1] font-['General_Sans:Bold',sans-serif] leading-[46.936px] ml-[312.5px] mt-0 relative text-[48px] text-black text-center tracking-[-0.96px] translate-x-[-50%]">Frequently asked questions</p>
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[19.557px] ml-[174.17px] mt-[63.886px] relative text-[#707070] text-[16px]">We`re happy to answer your questions</p>
    </div>
  );
}

function ReadIcon() {
  return (
    <div className="[grid-area:1_/_1] ml-[935.469px] mt-[16.297px] relative size-[65.189px]" data-name="read icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="read icon">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
          <g id="Vector">
            <path d={svgPaths.p9019f60} id="Vector_2" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[164.929px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[29.987px] ml-[14.342px] mt-[32.595px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">What is Team Newsify?</p>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-0 relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[97.132px] relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <ReadIcon />
    </div>
  );
}

function ReadIcon1() {
  return (
    <div className="[grid-area:1_/_1] ml-[935.469px] mt-0 relative size-[65.189px]" data-name="read icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="read icon">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
          <g id="Vector">
            <path d={svgPaths.p8097880} id="Vector_2" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[279.011px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">How is the team Newsify</p>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[80.835px] relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <ReadIcon1 />
    </div>
  );
}

function ReadIcon2() {
  return (
    <div className="[grid-area:1_/_1] ml-[935.469px] mt-0 relative size-[65.189px]" data-name="read icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="read icon">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
          <g id="Vector">
            <path d={svgPaths.p8097880} id="Vector_2" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[376.795px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">What does the technology work?</p>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[80.835px] relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <ReadIcon2 />
    </div>
  );
}

function ReadIcon3() {
  return (
    <div className="[grid-area:1_/_1] ml-[935.469px] mt-0 relative size-[65.189px]" data-name="read icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="read icon">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
          <g id="Vector">
            <path d={svgPaths.p9019f60} id="Vector_2" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[474.579px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">How often will i get team Newsify?</p>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[80.835px] relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <ReadIcon3 />
    </div>
  );
}

function ReadIcon4() {
  return (
    <div className="[grid-area:1_/_1] ml-[935.469px] mt-0 relative size-[65.189px]" data-name="read icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="read icon">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
          <g id="Vector">
            <path d={svgPaths.p701b960} id="Vector_2" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[769.888px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">It is close to news letter regular?</p>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[80.835px] relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <ReadIcon4 />
    </div>
  );
}

function ReadIcon5() {
  return (
    <div className="[grid-area:1_/_1] ml-[935.469px] mt-0 relative size-[65.189px]" data-name="read icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="read icon">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
          <g id="Vector">
            <path d={svgPaths.p701b960} id="Vector_2" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[867.672px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[29.987px] ml-[14.342px] mt-[17.601px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">Can i get a live demo of Newsify in action?</p>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[80.835px] relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <ReadIcon5 />
    </div>
  );
}

function ReadIcon6() {
  return (
    <div className="[grid-area:1_/_1] ml-[935.469px] mt-0 relative size-[65.189px]" data-name="read icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="read icon">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #1668E8)" id="Ellipse 203" r="32.5947" />
          <g id="Vector">
            <path d={svgPaths.p1ccec480} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.30379" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[572.364px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[29.987px] ml-[14.342px] mt-[17.601px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">How automated is this?</p>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] leading-[23.468px] ml-[14.342px] mt-[69.753px] not-italic relative text-[#786f77] text-[16px] text-nowrap whitespace-pre">
        <p className="mb-0">It is alomost completely automated as a system . You can schedule plan and create</p>
        <p className="mb-0">calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create</p>
        <p>a smooth business plan for your and your teamateswith one click!</p>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[180.575px] relative w-[1015px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.3px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 2">
            <line id="Line 26" stroke="var(--stroke-0, #DEDEDE)" strokeWidth="1.30379" x2="1015" y1="0.651895" y2="0.651895" />
          </svg>
        </div>
      </div>
      <ReadIcon6 />
    </div>
  );
}

function BodyE() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="body e">
      <Heading />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[grid-area:1_/_1] bg-zinc-100 box-border content-stretch flex flex-col gap-[30px] items-center justify-center ml-0 mt-0 overflow-clip p-[100px] relative w-[1440px]">
      <Frame31 />
      <BodyE />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[-0.021%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Group">
          <g id="Rectangle"></g>
          <circle cx="12.005" cy="12.005" id="Oval" r="9.00375" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.50354 12.005H15.5065" id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p66bcde0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12979680} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialAsteriskCircle1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
      <Group9 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between ml-0 mt-[1214.51px] px-[50px] py-[20px] relative w-[1440px]">
      <InterfaceEssentialAsteriskCircle1 />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <InterfaceEssentialAsteriskCircle1 />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <InterfaceEssentialAsteriskCircle1 />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
      <InterfaceEssentialAsteriskCircle1 />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <InterfaceEssentialAsteriskCircle1 />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <InterfaceEssentialAsteriskCircle1 />
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
    </div>
  );
}

function IconL4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p37820b40} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL4 />
    </div>
  );
}

function IconL5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p156e1d00} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL5 />
    </div>
  );
}

function IconL6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p1fe20f80} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL6 />
    </div>
  );
}

function IconL7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon L">
          <path d={svgPaths.p11da0600} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <IconL7 />
    </div>
  );
}

function SocialMediaContainer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Social Media Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[333.497px]">
      <div className="h-[97.687px] relative shrink-0 w-[95.5px]" data-name="Backyard Logo (No Background) (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.91%] left-[-20.61%] max-w-none top-[-8.96%] w-[120.61%]" src={imgBackyardLogoNoBackground11} />
        </div>
      </div>
      <div className="font-['General_Sans:Regular',sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">
        <p className="mb-0">Efforlessly manage and organize chats,</p>
        <p className="mb-0">tasks, and files in one centeral location</p>
        <p>with Qoterra chat management solutions</p>
      </div>
      <SocialMediaContainer1 />
    </div>
  );
}

function Featurs() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid not-italic place-items-start relative shrink-0 text-[16px] text-white" data-name="featurs">
      <p className="[grid-area:1_/_1] font-['General_Sans:Bold',sans-serif] h-[24px] leading-[24px] ml-0 mt-0 relative w-[77px]">Navigate</p>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] h-[284px] leading-[60px] ml-px mt-[40px] relative tracking-[-0.24px] w-[75px]">
        <p className="mb-0">Home</p>
        <p className="mb-0">About</p>
        <p className="mb-0">Product</p>
        <p className="mb-0">Feature</p>
        <p>Pricing</p>
      </div>
    </div>
  );
}

function OpenTrip() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid not-italic place-items-start relative shrink-0 text-[16px] text-white" data-name="open trip">
      <p className="[grid-area:1_/_1] font-['General_Sans:Bold',sans-serif] h-[24px] leading-[24px] ml-0 mt-0 relative w-[97px]">Support Us</p>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] h-[233px] leading-[60px] ml-px mt-[40px] relative tracking-[-0.24px] w-[123px]">
        <p className="mb-0">FAQ`s</p>
        <p className="mb-0">Contact Us</p>
        <p className="mb-0">Support Center</p>
        <p>Security</p>
      </div>
    </div>
  );
}

function Resource() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid not-italic place-items-start relative shrink-0 text-[16px] text-white" data-name="resource">
      <div className="[grid-area:1_/_1] font-['General_Sans:Bold',sans-serif] h-[24px] leading-[24px] ml-0 mt-0 relative w-[87px]">
        <p className="mb-[18px]">Resources</p>
        <p className="text-[16px]">&nbsp;</p>
      </div>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',sans-serif] h-[233px] leading-[60px] ml-px mt-[40px] relative tracking-[-0.24px] w-[111px]">
        <p className="mb-0">Community</p>
        <p className="mb-0">Contact</p>
        <p>Tems of service</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[65px] items-start leading-[0] relative shrink-0 w-[531.75px]">
      <Featurs />
      <OpenTrip />
      <Resource />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame40 />
      <Frame39 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex font-['General_Sans:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[16px] text-nowrap text-white w-[1181px] whitespace-pre">
      <p className="leading-[30px] relative shrink-0">{`Terms & Conditions  ,  Privacy Policy  , Cookies Policy , Sitemap `}</p>
      <p className="leading-[24px] relative shrink-0 tracking-[-0.24px]">© 2025 Backyard Technologies,All right reserved</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="[grid-area:1_/_1] box-border content-end flex flex-wrap gap-[505px] items-end ml-0 mt-0 relative w-[1181px]">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1181 1">
            <line id="Line 16" stroke="var(--stroke-0, #A7A7A7)" x2="1181" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame44 />
    </div>
  );
}

function Lisense() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="lisense">
      <Frame43 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0">
      <Frame41 />
      <Lisense />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[grid-area:1_/_1] bg-[#020e37] box-border content-stretch flex flex-col gap-[30px] items-center justify-center ml-0 mt-[1282.51px] overflow-clip p-[100px] relative w-[1440px]">
      <Frame42 />
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Services Page">
      <Navbar1 />
      <Frame1 />
      <Frame16 />
      <Frame10 />
      <Frame7 />
      <Frame10 />
      <Frame9 />
      <Frame10 />
      <Frame8 />
      <Group19 />
    </div>
  );
}