import svgPaths from "./svg-nty77d3k0k";
import img from "figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgRectangle1 from "figma:asset/127beeb9b5071e3939c158f9bf65908c054cbadc.png";
import imgRectangle4 from "figma:asset/ecdf2ef4526036646ca20c1a56e7d8cb806f4378.png";
import imgRectangle3 from "figma:asset/f347921dcfe3a7a62552cd9726521a8fb8479237.png";
import imgRectangle2 from "figma:asset/b20258fa30547b825decc6e7cca13dc27e17bfba.png";
import img1 from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma1 from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";

function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Navbar">
      <div className="h-[67px] relative shrink-0 w-[79px]" data-name="Backyard Logo (No Background) (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.91%] left-0 max-w-none top-[-8.96%] w-full" src={img} />
        </div>
      </div>
      <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Item L">
        <div className="basis-0 content-stretch flex gap-[32px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Menubar">
          <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 1">
            <p className="font-['General_Sans:Bold',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3478ea] text-[16px] text-center text-nowrap whitespace-pre">Home</p>
          </div>
          <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 2">
            <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">About Us</p>
          </div>
          <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 3">
            <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Services</p>
          </div>
          <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 4">
            <p className="font-['General_Sans:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Projects</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Item R">
        <div className="bg-[#1559cb] box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[36px] px-[24px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[22px] whitespace-pre">Contact Us</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon R">
            <div className="absolute bottom-[25.42%] left-[16.67%] right-[20%] top-1/4" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
                <g id="Icon">
                  <path d={svgPaths.p106ce100} fill="var(--fill-0, white)" />
                  <path clipRule="evenodd" d={svgPaths.p2b15e400} fill="var(--fill-0, white)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Span() {
  return <div className="bg-[#1559cb] rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1559cb] text-[14px] text-nowrap tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Innovative IT Solutions</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 w-[232px]" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',_sans-serif] gap-[25px] h-[199px] items-start leading-[0] not-italic relative shrink-0 text-white">
      <div className="flex flex-col justify-center leading-[normal] relative shrink-0 text-[48px] text-nowrap whitespace-pre">
        <p className="mb-0">
          <span>{`Powering `}</span>
          <span className="font-['General_Sans:Bold',_sans-serif] not-italic text-[#1559cb]">Digital Transformation</span>
        </p>
        <p>for the Modern Enterprise</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[16px] w-[748px]">
        <p className="leading-[normal]">We deliver cutting-edge digital solutions, technology outsourcing, and consulting services that help businesses innovate faster, scale smarter, and stay ahead in a connected world.</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">View All Services</p>
      </div>
      <div className="absolute bottom-px h-px left-0 right-0" data-name="Underline">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="bg-[#1559cb] box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] px-[16px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
          <p className="leading-[28px] whitespace-pre">Explore More</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon R">
          <div className="absolute bottom-[25.42%] left-[16.67%] right-[20%] top-1/4" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
              <g id="Icon">
                <path d={svgPaths.p861db00} fill="var(--fill-0, white)" />
                <path clipRule="evenodd" d={svgPaths.p1513c330} fill="var(--fill-0, white)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] px-[12px] py-0 relative rounded-[6px] shrink-0" data-name="ButtonText">
        <Label />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Container />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#353851] box-border content-stretch flex flex-col gap-[40px] h-[661px] items-start justify-center left-0 opacity-90 overflow-clip px-[100px] py-[125px] top-[80px] w-[1440px]">
      <div className="absolute h-[708px] left-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[1440px]" data-name="Pexels Photo by Christina Morillo">
        <div className="absolute inset-0 mix-blend-overlay overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.51%] left-0 max-w-none top-[1.49%] w-full" src={imgPexelsPhotoByChristinaMorillo} />
        </div>
      </div>
      <Frame70 />
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

function Group3() {
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

function Group4() {
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

function Group5() {
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

function Group6() {
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

function Group7() {
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

function Frame4() {
  return (
    <div className="absolute bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between left-0 px-[50px] py-[20px] top-[741px] w-[1440px]">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group3 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group4 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group5 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group6 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group7 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[272.414px] ml-0 mt-0 relative rounded-bl-[23.35px] rounded-br-[23.35px] rounded-tl-[93.399px] rounded-tr-[23.35px] w-[298.098px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[23.35px] rounded-br-[23.35px] rounded-tl-[93.399px] rounded-tr-[23.35px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-bl-[23.35px] rounded-br-[23.35px] rounded-tl-[93.399px] rounded-tr-[23.35px] size-full" src={imgRectangle1} />
          <div className="absolute bg-[rgba(29,29,29,0.5)] inset-0 rounded-bl-[23.35px] rounded-br-[23.35px] rounded-tl-[93.399px] rounded-tr-[23.35px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[174.345px] ml-0 mt-[287.98px] relative rounded-bl-[93.4px] rounded-br-[23.35px] rounded-tl-[23.35px] rounded-tr-[23.35px] w-[232.719px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[93.4px] rounded-br-[23.35px] rounded-tl-[23.35px] rounded-tr-[23.35px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-bl-[93.4px] rounded-br-[23.35px] rounded-tl-[23.35px] rounded-tr-[23.35px] size-full" src={imgRectangle4} />
          <div className="absolute bg-[rgba(29,29,29,0.5)] inset-0 rounded-bl-[93.4px] rounded-br-[23.35px] rounded-tl-[23.35px] rounded-tr-[23.35px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[174.345px] ml-[244.394px] mt-[287.98px] relative rounded-bl-[23.35px] rounded-br-[93.4px] rounded-tl-[23.35px] rounded-tr-[23.35px] w-[229.606px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[23.35px] rounded-br-[93.4px] rounded-tl-[23.35px] rounded-tr-[23.35px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-bl-[23.35px] rounded-br-[93.4px] rounded-tl-[23.35px] rounded-tr-[23.35px] size-full" src={imgRectangle3} />
          <div className="absolute bg-[rgba(29,29,29,0.5)] inset-0 rounded-bl-[23.35px] rounded-br-[93.4px] rounded-tl-[23.35px] rounded-tr-[23.35px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[272.414px] ml-[310.773px] mt-0 relative rounded-bl-[23.35px] rounded-br-[11.675px] rounded-tl-[23.35px] rounded-tr-[93.399px] w-[164.227px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[23.35px] rounded-br-[11.675px] rounded-tl-[23.35px] rounded-tr-[93.399px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-bl-[23.35px] rounded-br-[11.675px] rounded-tl-[23.35px] rounded-tr-[93.399px] size-full" src={imgRectangle2} />
          <div className="absolute bg-[rgba(29,29,29,0.5)] inset-0 rounded-bl-[23.35px] rounded-br-[11.675px] rounded-tl-[23.35px] rounded-tr-[93.399px]" />
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
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">About Us</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 w-[140px]" data-name="Container">
      <Span2 />
      <Span3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',_sans-serif] gap-[25px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[48px] text-white w-full">
        <p className="leading-[normal]">
          <span className="text-[#1a1a1a]">{`Transforming `}</span>
          <span className="font-['General_Sans:Medium',_sans-serif] not-italic text-[#1a1a1a]">Ideas</span>
          <span className="text-[#1a1a1a]">{` into Scalable `}</span>
          <span className="font-['General_Sans:Bold',_sans-serif] not-italic text-[#1559cb]">Digital Realities</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] w-full">
        <p className="leading-[normal]">We deliver cutting-edge digital solutions, technology outsourcing, and consulting services that help businesses innovate faster, scale smarter, and stay ahead in a connected world.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[0] not-italic relative shrink-0 w-[132px]">
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center relative shrink-0 text-[#1559cb] text-[40px] w-full">
        <p className="leading-[normal]">20+</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] w-full">
        <p className="leading-[normal]">Team Members</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[0] not-italic relative shrink-0 w-[142px]">
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center relative shrink-0 text-[#1559cb] text-[40px] w-full">
        <p className="leading-[normal]">2000+</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] w-full">
        <p className="leading-[normal]">Happy Client</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[0] not-italic relative shrink-0 w-[148px]">
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center min-w-full relative shrink-0 text-[#1559cb] text-[40px] w-[min-content]">
        <p className="leading-[normal]">98%</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Client Satisfaction</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[570px]">
      <Frame8 />
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "74", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.75px_-1%]" style={{ "--stroke-0": "rgba(26, 26, 26, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 2">
                <path d="M0.75 0.75H75.75" id="Line 1" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeOpacity="0.18" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame9 />
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "74", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.75px_-1%]" style={{ "--stroke-0": "rgba(26, 26, 26, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 2">
                <path d="M0.75 0.75H75.75" id="Line 1" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeOpacity="0.18" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Container1 />
      <Frame21 />
      <Frame11 />
    </div>
  );
}

function Span4() {
  return <div className="bg-[#1559cb] rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <Span4 />
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1559cb] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">CEO</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Fasthand:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-[rgba(26,26,26,0.7)] text-nowrap">
        <p className="leading-[32px] whitespace-pre">Christopher Abhuilimen</p>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame14 />
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <Group1 />
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[662.325px] items-center justify-center left-0 overflow-clip p-[100px] top-[809px] w-[1440px]">
      <Frame7 />
    </div>
  );
}

function Span5() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Our Services</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 w-[140px]" data-name="Container">
      <Span5 />
      <Span6 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[0px] w-[804px]">
        <p className="leading-[normal] text-[48px]">
          <span>{`Services We Provide to `}</span>
          <span className="font-['General_Sans:Bold',_sans-serif] not-italic text-[#1559cb]">Elevate Your Business</span>
        </p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Container2 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[804px]">
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1240px]">
      <Frame24 />
      <div className="bg-[#1559cb] box-border content-stretch flex gap-[13.452px] h-[49.325px] items-center justify-center min-h-[49.325px] px-[17.936px] py-0 relative rounded-[6.254px] shrink-0 w-[282.499px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6.254px]" />
        <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17.94px] text-center text-nowrap text-white">
          <p className="leading-[31.389px] whitespace-pre">View All Services</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon R">
          <div className="absolute bottom-[25.42%] left-[16.67%] right-[20%] top-1/4" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <g id="Icon">
                <path d={svgPaths.p3bd376c0} fill="var(--fill-0, white)" />
                <path clipRule="evenodd" d={svgPaths.p2e959500} fill="var(--fill-0, white)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
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

function Container3() {
  return (
    <div className="bg-[#bed4f8] relative rounded-[8px] shrink-0 size-[64px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Learn More</p>
      </div>
      <div className="absolute bottom-px h-px left-0 right-0" data-name="Underline">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_4px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[22px] py-[36px] relative w-full">
          <Container3 />
          <div className="flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] w-full">
            <p className="leading-[28px]">Digital Solutions</p>
          </div>
          <div className="-webkit-box flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-600 w-[min-content]">
            <p className="leading-[24px]">Custom software development, mobile applications, web development, and digital transformation strategies to enhance your business operations.</p>
          </div>
          <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] relative rounded-[6px] shrink-0" data-name="ButtonText">
            <Label1 />
            <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon R">
              <div className="absolute bottom-[25.42%] left-[16.67%] right-[20%] top-1/4" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                  <g id="Icon">
                    <path d={svgPaths.p861db00} fill="var(--fill-0, #0494FC)" />
                    <path clipRule="evenodd" d={svgPaths.p1513c330} fill="var(--fill-0, #0494FC)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
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
      <Frame26 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Learn More</p>
      </div>
      <div className="absolute bottom-px h-px left-0 right-0" data-name="Underline">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[22px] py-[36px] relative w-full">
          <Container5 />
          <div className="flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] w-full">
            <p className="leading-[28px]">Technology Outsourcing</p>
          </div>
          <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[min-content]">
            <p className="leading-[24px] whitespace-pre-wrap">{`Access to skilled IT professionals, dedicated   development teams, and managed IT services to optimize your technology infrastructure.`}</p>
          </div>
          <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] relative rounded-[6px] shrink-0" data-name="ButtonText">
            <Label2 />
            <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon R">
              <div className="absolute bottom-[25.42%] left-[16.67%] right-[20%] top-1/4" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                  <g id="Icon">
                    <path d={svgPaths.p861db00} fill="var(--fill-0, #0494FC)" />
                    <path clipRule="evenodd" d={svgPaths.p1513c330} fill="var(--fill-0, #0494FC)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
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

function Container7() {
  return (
    <div className="bg-[#bed4f8] relative rounded-[8px] shrink-0 size-[64px]" data-name="Container">
      <Frame27 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap">
        <p className="leading-[28px] whitespace-pre">Learn More</p>
      </div>
      <div className="absolute bottom-px h-px left-0 right-0" data-name="Underline">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[22px] py-[36px] relative w-full">
          <Container7 />
          <div className="flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] w-full">
            <p className="leading-[28px]">Consulting</p>
          </div>
          <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[min-content]">
            <p className="leading-[24px]">Strategic technology advisory, digital strategy planning, and implementation guidance to align your IT initiatives with business goals.</p>
          </div>
          <div className="content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[44px] relative rounded-[6px] shrink-0" data-name="ButtonText">
            <Label3 />
            <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon R">
              <div className="absolute bottom-[25.42%] left-[16.67%] right-[20%] top-1/4" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                  <g id="Icon">
                    <path d={svgPaths.p861db00} fill="var(--fill-0, #0494FC)" />
                    <path clipRule="evenodd" d={svgPaths.p1513c330} fill="var(--fill-0, #0494FC)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex flex-col gap-[29px] items-center left-0 overflow-clip p-[100px] top-[1471.33px] w-[1440px]">
      <Frame25 />
      <Frame15 />
    </div>
  );
}

function Span7() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Our Work Process</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span7 />
      <Span8 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white w-full">
        <p className="leading-[normal]">
          <span className="text-[#1a1a1a]">{`Our Proven `}</span>
          <span className="font-['General_Sans:Bold',_sans-serif] not-italic text-[#1559cb]">Work Process</span>
        </p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container9 />
      <Frame29 />
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

function Group8() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p2cd5600} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p37ebeb80} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9286 13.8006V44.8807" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p24f12c80} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p1d1b1e40} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p2cd4bd40} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function Group2() {
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
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] ml-[97.643px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">01</p>
      </div>
      <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
        <Group8 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group2 />
      <div className="flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Consulting</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px]">Strategic technology advisory, digital strategy planning, and implem</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p2410dc00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p3b7843f0} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9286 13.8006V44.8807" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p2d47c340} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p3e8fc1c0} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p2ce8b1c0} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function Group10() {
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
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] ml-[97.143px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">02</p>
      </div>
      <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
        <Group9 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group10 />
      <div className="flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Strategy</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Strategic technology advisory, digital strategy planning,  `}</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p155c9600} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p31d05d00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9285 13.8006V44.8807" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p1329f800} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p1d1b1e40} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p2cd4bd40} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function Group12() {
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
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] ml-[97.143px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">03</p>
      </div>
      <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
        <Group11 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group12 />
      <div className="flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Implementation</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Strategic technology advisory, digital strategy planning,  `}</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p155c9600} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path clipRule="evenodd" d={svgPaths.p31d05d00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d="M26.9285 13.8006V44.8807" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p1329f800} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p1d1b1e40} id="Path_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
          <path d={svgPaths.p2cd4bd40} id="Path_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36607" />
        </g>
        <g id="Path_7"></g>
      </g>
    </svg>
  );
}

function Group14() {
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
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] ml-[97.643px] mt-[51.429px] not-italic relative text-[13.257px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[19.886px] whitespace-pre">04</p>
      </div>
      <div className="[grid-area:1_/_1] ml-[24.857px] mt-[24.857px] relative size-[53.857px]" data-name="Content, Edit/Book, Open">
        <Group13 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-center justify-center leading-[0] min-h-px min-w-px relative shrink-0">
      <Group14 />
      <div className="flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center not-italic relative shrink-0 text-[20px] text-[rgba(26,26,26,0.7)] text-center w-full">
        <p className="leading-[28px]">Final Result</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[16px] text-center text-gray-600 w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Strategic technology advisory, digital strategy planning,  `}</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[10px] items-start ml-0 mt-0 relative w-[1240px]">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
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

function Group59() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame31 />
      <Group59 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[565.571px] items-center justify-center left-0 overflow-clip p-[100px] top-[2237.32px] w-[1440px]">
      <Frame33 />
    </div>
  );
}

function Group15() {
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

function Group16() {
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

function Group17() {
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

function Group18() {
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

function Group19() {
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

function Group20() {
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

function Frame35() {
  return (
    <div className="absolute bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between left-0 px-[50px] py-[20px] top-[2802.9px] w-[1440px]">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group15 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group16 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group17 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group18 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group19 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group20 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
    </div>
  );
}

function Span9() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Our Latest Projects</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span9 />
      <Span10 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[48px] text-center text-white w-full">
        <p className="mb-0 text-[#1a1a1a]">Explore our Showcase of</p>
        <p className="font-['General_Sans:Bold',_sans-serif] text-[#1559cb]">Featured Work</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container10 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame37 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-blue-600 box-border content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[8px] relative rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">All Projects</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Digital Solutions</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[41px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Technology Outsourcing</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Consultations</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[250px] py-0 relative w-full">
          <Button />
          <Button1 />
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return <div className="absolute h-[256px] left-0 top-0 w-[394.672px]" data-name="Image" />;
}

function Frame39() {
  return (
    <div className="absolute left-[98.13px] size-[16px] top-[4px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[114.125px]" data-name="Container">
      <Frame39 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[72px] left-0 top-[184px] w-[394.672px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Component4() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 58">
      <g id="_2965621218592">
        <path d={svgPaths.p1e1cf00} fill="var(--fill-0, #13143A)" id="Vector" />
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3d1c2ff2} fill="var(--fill-0, #F1AE1E)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pab41200} fill="var(--fill-0, #13143A)" fillRule="evenodd" id="Vector_3" />
        </g>
      </g>
    </svg>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <Component4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(30,58,138,0)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 w-[394.672px]" data-name="Container">
      <Container13 />
      <div className="absolute h-[57.605px] left-[calc(50%-0.328px)] overflow-clip top-[calc(50%-0.094px)] translate-x-[-50%] translate-y-[-50%] w-[226px]" data-name="Col_Var3_Blue&Yellow 1">
        <LayerX />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#fcfcfc] h-[256px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image />
      <Container14 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[346.672px]" data-name="Heading">
      <div className="absolute flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center leading-[0] left-0 not-italic text-[17px] text-gray-800 top-[13.5px] translate-y-[-50%] w-[304.625px]">
        <p className="leading-[28px]">CarAlert247</p>
      </div>
    </div>
  );
}

function Span11() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Digital Solution</p>
      </div>
    </div>
  );
}

function Span12() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">TypeScript</p>
      </div>
    </div>
  );
}

function Span13() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">Express</p>
      </div>
    </div>
  );
}

function Span14() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">PostgreSQL</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Span11 />
      <Span12 />
      <Span13 />
      <Span14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end px-[23px] py-[24px] relative w-full">
          <Heading />
          <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[346.453px]">
            <p className="leading-[24px]">{`Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling. `}</p>
          </div>
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-[394.672px]" data-name="Container">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Image1() {
  return <div className="absolute h-[256px] left-0 top-0 w-[394.672px]" data-name="Image" />;
}

function Frame40() {
  return (
    <div className="absolute left-[98.13px] size-[16px] top-[4px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[114.125px]" data-name="Container">
      <Frame40 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[72px] left-0 top-[184px] w-[394.672px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(30,58,138,0)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 w-[394.672px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[23.48%_44.85%_56.61%_45.55%]" data-name="Group">
      <div className="absolute inset-[23.48%_44.85%_61.72%_45.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <path d={svgPaths.p24347a00} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.12%_47.1%_56.61%_47.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 17">
          <path d={svgPaths.p359b2700} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[23.48%_44.85%_56.61%_45.55%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[24.97%_45.8%_57.92%_46.51%]" data-name="Group">
      <div className="absolute inset-[24.97%_45.8%_63.12%_46.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
          <path d={svgPaths.p1d35de40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.23%_47.7%_60.69%_48.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 3">
          <path d={svgPaths.p210a8a80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.61%_47.99%_57.92%_48.7%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 4">
          <path d={svgPaths.p12cda880} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[30.68%_41.76%_67.83%_42.47%]" data-name="Group">
      <div className="absolute inset-[30.68%_55.7%_67.83%_42.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4">
          <path d={svgPaths.p2f1b0d00} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.68%_41.76%_67.83%_56.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4">
          <path d={svgPaths.p283121c0} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[25.91%_42.56%_72.03%_43.26%]" data-name="Group">
      <div className="absolute inset-[25.92%_54.98%_72.03%_43.26%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
          <path d={svgPaths.p206e2380} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.91%_42.56%_72.05%_55.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
          <path d={svgPaths.p2d2a2200} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[34.87%_42.56%_63.07%_43.26%]" data-name="Group">
      <div className="absolute inset-[34.87%_54.98%_63.08%_43.26%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
          <path d={svgPaths.p36483880} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.88%_42.56%_63.07%_55.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
          <path d={svgPaths.p190f700} fill="var(--fill-0, #0065FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[25.91%_41.76%_63.07%_42.47%]" data-name="Group">
      <Group24 />
      <Group25 />
      <Group26 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[25.91%_41.76%_63.07%_42.47%]" data-name="Group">
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[43.39%_39.23%_43.06%_39.94%]" data-name="Group">
      <div className="absolute inset-[53.79%_39.23%_43.06%_39.94%]" data-name="Vector">
        <div className="absolute inset-[-9.77%_-0.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 10">
            <path d={svgPaths.p3c337780} id="Vector" stroke="var(--stroke-0, #0065FF)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.57857" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.52%_39.23%_45.49%_50.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 18">
          <path d={svgPaths.p29bbf40} fill="var(--fill-0, #FFAA00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.52%_49.62%_45.49%_40%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 18">
          <path d={svgPaths.pf656e80} fill="var(--fill-0, #FFAA00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.39%_49.63%_45.46%_42.61%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 29">
          <path d={svgPaths.p6df3b00} fill="var(--fill-0, #FF8C00)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.39%_41.88%_45.46%_50.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 29">
          <path d={svgPaths.p1ed50c80} fill="var(--fill-0, #FF8C00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[23.48%_32.01%_23.38%_32.01%]" data-name="Group">
      <p className="absolute font-['Century_Gothic:Bold',_sans-serif] inset-[72.32%_40.1%_23.38%_41.15%] leading-[normal] not-italic text-[9.349px] text-black text-nowrap whitespace-pre">Master Anything</p>
      <Group22 />
      <Group23 />
      <Group28 />
      <Group29 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[58.06%_32.01%_27.88%_32.01%] leading-[normal] not-italic text-[29.467px] text-black text-nowrap whitespace-pre">QuikLearn</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[25.45%_47.61%_64.78%_48.33%] leading-[normal] not-italic text-[20.624px] text-nowrap text-white whitespace-pre">Q</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[23.48%_32.01%_23.38%_32.01%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[23.48%_32.01%_23.38%_32.01%]" data-name="Group">
      <Group31 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#fcfcfc] h-[256px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image1 />
      <Container21 />
      <Group32 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[346.672px]" data-name="Heading">
      <div className="absolute flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center leading-[0] left-0 not-italic text-[17px] text-gray-800 top-[13.5px] translate-y-[-50%] w-[304.625px]">
        <p className="leading-[28px]">{`QuikLearn `}</p>
      </div>
    </div>
  );
}

function Span15() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Digital Solution</p>
      </div>
    </div>
  );
}

function Span16() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">TypeScript</p>
      </div>
    </div>
  );
}

function Span17() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">Express</p>
      </div>
    </div>
  );
}

function Span18() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">PostgreSQL</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Span15 />
      <Span16 />
      <Span17 />
      <Span18 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end px-[23px] py-[24px] relative w-full">
          <Heading1 />
          <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[346.453px]">
            <p className="leading-[24px]">{`Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling. `}</p>
          </div>
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-[394.672px]" data-name="Container">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Image2() {
  return <div className="absolute h-[256px] left-0 top-0 w-[394.672px]" data-name="Image" />;
}

function Frame41() {
  return (
    <div className="absolute left-[98.13px] size-[16px] top-[4px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[114.125px]" data-name="Container">
      <Frame41 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[72px] left-0 top-[184px] w-[394.672px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(30,58,138,0)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 w-[394.672px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#fcfcfc] h-[256px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image2 />
      <Container28 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[346.672px]" data-name="Heading">
      <div className="absolute flex flex-col font-['General_Sans:Bold',_sans-serif] h-[27px] justify-center leading-[0] left-0 not-italic text-[17px] text-gray-800 top-[13.5px] translate-y-[-50%] w-[304.625px]">
        <p className="leading-[28px]">Anything</p>
      </div>
    </div>
  );
}

function Span19() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Digital Solution</p>
      </div>
    </div>
  );
}

function Span20() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">TypeScript</p>
      </div>
    </div>
  );
}

function Span21() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">Express</p>
      </div>
    </div>
  );
}

function Span22() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">PostgreSQL</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Span19 />
      <Span20 />
      <Span21 />
      <Span22 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end px-[23px] py-[24px] relative w-full">
          <Heading2 />
          <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[346.453px]">
            <p className="leading-[24px]">{`Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling. `}</p>
          </div>
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-[394.672px]" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <Container18 />
      <Container25 />
      <Container32 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame38 />
      <Container11 />
      <Frame20 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] h-[934px] items-center justify-center left-0 overflow-clip p-[100px] top-[2870.9px] w-[1440px]">
      <Frame42 />
    </div>
  );
}

function Group33() {
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

function Group34() {
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

function Group35() {
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

function Group36() {
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

function Group37() {
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

function Group38() {
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

function Frame44() {
  return (
    <div className="absolute bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between left-0 px-[50px] py-[20px] top-[3804.9px] w-[1440px]">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group33 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group34 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group35 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group36 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group37 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group38 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
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
            <path d={svgPaths.p1084e680} id="Vector" stroke="url(#paint0_linear_1_6599)" strokeMiterlimit="10" strokeWidth="1.44462" />
            <path d={svgPaths.p285ec900} id="Vector_2" stroke="url(#paint1_linear_1_6599)" strokeMiterlimit="10" strokeWidth="1.44462" />
            <path d={svgPaths.p27d58800} id="Vector_3" stroke="url(#paint2_linear_1_6599)" strokeMiterlimit="10" strokeWidth="1.44462" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6599" x1="628.483" x2="628.483" y1="10.2393" y2="559.797">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_6599" x1="509.421" x2="509.421" y1="0.247398" y2="754.641">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_6599" x1="414.567" x2="414.567" y1="0.247399" y2="959.476">
              <stop stopColor="#1668E8" />
              <stop offset="1" stopColor="#151F01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Span23() {
  return <div className="bg-[#1559cb] rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1559cb] text-[14px] text-nowrap tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Testimonials</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span23 />
      <Span24 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white w-full">
        <p className="leading-[normal]">
          <span>{`Testimonials: `}</span>
          <span className="font-['General_Sans:Bold',_sans-serif] not-italic text-[#1559cb]">Trusted by our Clients</span>
        </p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container33 />
      <Frame45 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full">
      <Frame47 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents left-[93.07px] top-[268.39px]">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[24.841px] left-0 not-italic text-[#ffe9e9] text-[19.441px] top-0 w-[146.697px]">Esther Jackson</p>
      <div className="absolute h-[7.901px] left-0 top-[30.78px] w-[47.296px]" data-name="Component 29">
        <div className="absolute bottom-0 left-0 right-[38.1px] top-0" data-name="Path 635">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path clipRule="evenodd" d={svgPaths.p9f75170} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 635" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-[9.53px] right-[28.58px] top-0" data-name="Path 636">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path clipRule="evenodd" d={svgPaths.p9f75170} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 635" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-[19.05px] right-[19.05px] top-0" data-name="Path 637">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path clipRule="evenodd" d={svgPaths.p9f75170} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 635" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-[28.58px] right-[9.53px] top-0" data-name="Path 638">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path clipRule="evenodd" d={svgPaths.p1706a000} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 638" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-[38.1px] right-0 top-0" data-name="Path 639">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path clipRule="evenodd" d={svgPaths.p9f75170} fill="var(--fill-0, #FFC250)" fillRule="evenodd" id="Path 635" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="absolute contents left-[25.54px] top-[260.83px]" data-name="name">
      <Group51 />
      <div className="absolute h-[54.002px] left-[25.54px] top-[260.83px] w-[55.357px]">
        <div className="absolute inset-0 rounded-[100px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={img1} />
        </div>
      </div>
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

function Msg() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="msg">
      <div className="bg-[#1e1f20] h-[358.573px] rounded-[21.601px] shrink-0 w-full" />
      <Name />
      <InvertedComma />
      <div className="absolute h-[358.573px] right-[-0.16px] top-[0.1px] w-[481.157px]" data-name="Component 1">
        <div className="absolute inset-[1.04%_6.5%_36.98%_5.25%]" data-name="Vector">
          <div className="absolute inset-[-0.01%_-0.06%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426 223">
              <path d={svgPaths.pcbd880} id="Vector" stroke="url(#paint0_linear_1_6578)" strokeMiterlimit="10" strokeWidth="0.540019" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6578" x1="209.572" x2="209.572" y1="0.017069" y2="205.449">
                  <stop stopColor="#1668E8" />
                  <stop offset="1" stopColor="#151F01" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[25.26%] left-[2%] right-[21.35%] top-0" data-name="Vector">
          <div className="absolute inset-[-0.01%_-0.07%_-0.02%_-0.07%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 269">
              <path d={svgPaths.p1d1bd880} id="Vector" stroke="url(#paint0_linear_1_6624)" strokeMiterlimit="10" strokeWidth="0.540019" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6624" x1="180.696" x2="180.696" y1="0.0339527" y2="282.037">
                  <stop stopColor="#1668E8" />
                  <stop offset="1" stopColor="#151F01" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[1.56%] left-[-0.02%] right-[35.74%] top-0" data-name="Vector">
          <div className="absolute inset-[-0.03%_-0.09%_-0.02%_-0.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 354">
              <path d={svgPaths.p2bcd0e80} id="Vector" stroke="url(#paint0_linear_1_6574)" strokeMiterlimit="10" strokeWidth="0.540019" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6574" x1="154.971" x2="154.971" y1="0.0924813" y2="358.665">
                  <stop stopColor="#1668E8" />
                  <stop offset="1" stopColor="#151F01" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['General_Sans:Regular',_sans-serif] leading-[normal] left-[25.38px] not-italic text-[20px] text-white top-[64.8px] w-[386.114px]">I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!”</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Msg key={i} />
      ))}
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame61 />
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

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame62 />
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-[336px]" data-name="ProgressSegmented">
        <Progress />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute bg-[#020e37] box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-0 overflow-clip p-[100px] top-[3872.9px] w-[1440px]">
      <Component />
      <Frame63 />
    </div>
  );
}

function Group39() {
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

function Group40() {
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

function Group41() {
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

function Group42() {
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

function Group43() {
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

function Group44() {
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

function Frame50() {
  return (
    <div className="absolute bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between left-0 px-[50px] py-[20px] top-[4695.47px] w-[1440px]">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group39 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group40 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group41 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group42 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group43 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group44 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
    </div>
  );
}

function Span25() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span25 />
      <Span26 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[48px] text-center w-full">
        <p className="leading-[normal]">
          <span>{`Reach out to `}</span>
          <span className="font-['General_Sans:Bold',_sans-serif] not-italic text-[#1559cb]">Us!</span>
        </p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container34 />
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame52 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="relative size-[334.425px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
        <g id="Mask group" opacity="0.2">
          <circle cx="167.212" cy="167.212" fill="var(--fill-0, white)" id="Ellipse 1086" r="167.212" />
          <mask height="335" id="mask0_1_6561" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="335" x="0" y="0">
            <circle cx="167.212" cy="167.212" fill="var(--fill-0, #E1E7ED)" id="Ellipse 1085" r="167.212" />
          </mask>
          <g mask="url(#mask0_1_6561)">
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624102" width="11.5319" x="106.67" y="5.76609" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624103" width="11.5319" x="144.149" y="5.76599" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624104" transform="matrix(1 -1.62119e-06 -1.62119e-06 1 181.627 5.76719)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624105" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 219.106 5.76489)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624106" width="11.5319" x="256.584" y="5.76562" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624107" width="11.5319" x="294.065" y="5.76443" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624110" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 327.616 10.6967)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624108" transform="matrix(1 6.79516e-07 6.79516e-07 1 69.1914 5.76482)" width="11.5319" />
            <rect fill="var(--fill-0, #1559CB)" height="314.244" id="Rectangle 34624109" width="11.5319" x="31.7125" y="5.76706" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 w-full" data-name="1">
      <p className="[grid-area:1_/_1] font-['General_Sans:Medium',_sans-serif] leading-[1.7] ml-0 mt-[26px] relative text-[18px] text-white tracking-[0.36px] w-[282px]">contact@backyardtech.co.uk</p>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center ml-0 mt-[12px] relative text-[#bcbdbf] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[206.515px]">
        <p className="leading-[1.7]">SEND DIRECT EMAIL</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 w-full" data-name="2">
      <p className="[grid-area:1_/_1] font-['General_Sans:Medium',_sans-serif] leading-[24px] ml-0 mt-[26px] relative text-[18px] text-white tracking-[0.36px] w-[282px]">+44 324 3553 8577</p>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center ml-0 mt-[12px] relative text-[#bcbdbf] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[87.765px]">
        <p className="leading-[1.7]">CALL US</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 w-full" data-name="3">
      <p className="[grid-area:1_/_1] font-['General_Sans:Medium',_sans-serif] leading-[1.7] ml-0 mt-[26px] relative text-[18px] text-white tracking-[0.36px] w-[282px]">45, London, England, UK</p>
      <div className="[grid-area:1_/_1] flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center ml-0 mt-[12px] relative text-[#bcbdbf] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[94.917px]">
        <p className="leading-[1.7]">ADDRESS</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p3a55dd40} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p83d8000} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[12.5%_8.33%_12.5%_12.25%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1db45100} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[8.34%_8.3%_8.33%_8.35%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p24569e00} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Social Media Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="List">
      <Component3 />
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
          <mask height="75" id="mask0_1_6524" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
            <circle cx="37.2495" cy="37.2495" fill="var(--fill-0, #E1E7ED)" id="Ellipse 1085" r="37.2495" />
          </mask>
          <g mask="url(#mask0_1_6524)">
            <circle cx="37.2495" cy="37.2495" fill="var(--fill-0, white)" id="Ellipse 1086" r="37.2495" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624102" width="2.56893" x="23.7626" y="1.28449" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624103" width="2.56893" x="32.1118" y="1.28447" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624104" transform="matrix(1 -1.62119e-06 -1.62119e-06 1 40.4608 1.28474)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624105" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 48.8098 1.28422)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624106" width="2.56893" x="57.1587" y="1.28441" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624107" width="2.56893" x="65.5081" y="1.28413" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624110" transform="matrix(1 -1.27556e-06 -1.27556e-06 1 72.9822 2.38287)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624108" transform="matrix(1 6.79516e-07 6.79516e-07 1 15.4136 1.28421)" width="2.56893" />
            <rect fill="var(--fill-0, #1559CB)" height="70.0034" id="Rectangle 34624109" width="2.56893" x="7.06452" y="1.28471" />
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

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',_sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">First Name *</p>
    </div>
  );
}

function FormField() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter your first name</p>
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',_sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{`Last Name  *`}</p>
    </div>
  );
}

function FormField1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter your last name</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
        <Label4 />
        <FormField />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
        <Label5 />
        <FormField1 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',_sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Email Address *</p>
    </div>
  );
}

function FormField2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter your email address</p>
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',_sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Phone Number *</p>
    </div>
  );
}

function FormField3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">xxx-xxx-xxxx</p>
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['General_Sans:Medium',_sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#1e1a1c] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Company Name (Optional)</p>
    </div>
  );
}

function FormField4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Form Field">
      <div aria-hidden="true" className="absolute border border-[#e8e9ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[18px] relative w-full">
          <p className="basis-0 font-['General_Sans:Regular',_sans-serif] grow leading-[1.7] min-h-px min-w-px not-italic relative shrink-0 text-[#7e8083] text-[14px]">Enter company name</p>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[16px] items-start ml-[42.286px] mt-[48.104px] relative w-[696.308px]" data-name="List">
      <Row />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
        <Label6 />
        <FormField2 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
        <Label7 />
        <FormField3 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
        <Label8 />
        <FormField4 />
      </div>
      <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[36px] px-[24px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
          <p className="leading-[22px] whitespace-pre">Get Started</p>
        </div>
      </div>
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

function Frame60() {
  return (
    <div className="content-stretch flex gap-[51px] items-start relative shrink-0 w-[1240px]">
      <ContactInfo />
      <Form />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[30px] items-center justify-center left-0 overflow-clip p-[100px] top-[4763.47px] w-[1440px]">
      <Frame53 />
      <Frame60 />
    </div>
  );
}

function Span27() {
  return <div className="bg-white rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span28() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span27 />
      <Span28 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container35 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame55 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[201.321px] mt-0 not-italic place-items-start relative text-nowrap whitespace-pre" data-name="heading">
      <p className="[grid-area:1_/_1] font-['General_Sans:Bold',_sans-serif] leading-[46.936px] ml-[312.5px] mt-0 relative text-[48px] text-black text-center tracking-[-0.96px] translate-x-[-50%]">Frequently asked questions</p>
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[19.557px] ml-[174.17px] mt-[63.886px] relative text-[#707070] text-[16px]">We`re happy to answer your questions</p>
    </div>
  );
}

function ReadIcon() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[935.469px] mt-[16.297px] place-items-start relative" data-name="read icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[65.189px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[25.424px] mt-[25.424px] relative size-[14.342px]" data-name="Vector">
        <div className="absolute inset-[-4.545%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p25cf4b00} id="Vector" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[164.929px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[29.987px] ml-[14.342px] mt-[32.595px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">What is Team Newsify?</p>
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[935.469px] mt-0 place-items-start relative" data-name="read icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[65.189px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[25.424px] mt-[25.424px] relative size-[14.342px]" data-name="Vector">
        <div className="absolute inset-[-4.545%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p25cf4b00} id="Vector" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[279.011px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">How is the team Newsify</p>
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[935.469px] mt-0 place-items-start relative" data-name="read icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[65.189px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[25.424px] mt-[25.424px] relative size-[14.342px]" data-name="Vector">
        <div className="absolute inset-[-4.545%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p25cf4b00} id="Vector" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[376.795px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">What does the technology work?</p>
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[935.469px] mt-0 place-items-start relative" data-name="read icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[65.189px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[25.424px] mt-[25.424px] relative size-[14.342px]" data-name="Vector">
        <div className="absolute inset-[-4.545%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p25cf4b00} id="Vector" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group55() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[474.579px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">How often will i get team Newsify?</p>
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[935.469px] mt-0 place-items-start relative" data-name="read icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[65.189px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[25.424px] mt-[25.424px] relative size-[14.342px]" data-name="Vector">
        <div className="absolute inset-[-4.545%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p25cf4b00} id="Vector" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[769.888px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[29.987px] ml-[14.342px] mt-[16.297px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">It is close to news letter regular?</p>
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[935.469px] mt-0 place-items-start relative" data-name="read icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[65.189px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #F7F7F7)" id="Ellipse 203" r="32.5947" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[25.424px] mt-[25.424px] relative size-[14.342px]" data-name="Vector">
        <div className="absolute inset-[-4.545%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p25cf4b00} id="Vector" stroke="var(--stroke-0, #786F77)" strokeLinecap="round" strokeWidth="1.30379" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[867.672px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[29.987px] ml-[14.342px] mt-[17.601px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">Can i get a live demo of Newsify in action?</p>
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[935.469px] mt-0 place-items-start relative" data-name="read icon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[65.189px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <circle cx="32.5947" cy="32.5947" fill="var(--fill-0, #1668E8)" id="Ellipse 203" r="32.5947" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[25.424px] mt-[25.395px] relative size-[14.371px]" data-name="Vector">
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none rotate-[359.881deg] size-[14.342px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-4.55%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p30c97510} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.30379" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group58() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[572.364px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[29.987px] ml-[14.342px] mt-[17.601px] not-italic relative text-[23.468px] text-black text-nowrap whitespace-pre">How automated is this?</p>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] leading-[23.468px] ml-[14.342px] mt-[69.753px] not-italic relative text-[#786f77] text-[16px] text-nowrap whitespace-pre">
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
      <Heading3 />
      <Group52 />
      <Group53 />
      <Group54 />
      <Group55 />
      <Group56 />
      <Group57 />
      <Group58 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute bg-zinc-100 box-border content-stretch flex flex-col gap-[30px] items-center justify-center left-0 overflow-clip p-[100px] top-[5686.47px] w-[1440px]">
      <Frame56 />
      <BodyE />
    </div>
  );
}

function Group45() {
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

function Group46() {
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

function Group47() {
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

function Group48() {
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

function Group49() {
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

function Group50() {
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

function Frame58() {
  return (
    <div className="absolute bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between left-0 px-[50px] py-[20px] top-[6900.98px] w-[1440px]">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group45 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group46 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group47 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group48 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group49 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group50 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p3a55dd40} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[8.333%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p83d8000} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[12.5%_8.33%_12.5%_12.25%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p1db45100} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex gap-[12px] items-center justify-center relative rounded-[50px] shrink-0 size-[30px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon L">
        <div className="absolute inset-[8.34%_8.3%_8.33%_8.35%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p24569e00} fill="var(--fill-0, white)" fillOpacity="0.48" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SocialMediaContainer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Social Media Container">
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[333.497px]">
      <div className="h-[97.687px] relative shrink-0 w-[95.5px]" data-name="Backyard Logo (No Background) (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.91%] left-[-20.61%] max-w-none top-[-8.96%] w-[120.61%]" src={img} />
        </div>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] leading-[28px] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">
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
      <p className="[grid-area:1_/_1] font-['General_Sans:Bold',_sans-serif] h-[24px] leading-[24px] ml-0 mt-0 relative w-[77px]">Navigate</p>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] h-[284px] leading-[60px] ml-px mt-[40px] relative tracking-[-0.24px] w-[75px]">
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
      <p className="[grid-area:1_/_1] font-['General_Sans:Bold',_sans-serif] h-[24px] leading-[24px] ml-0 mt-0 relative w-[97px]">Support Us</p>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] h-[233px] leading-[60px] ml-px mt-[40px] relative tracking-[-0.24px] w-[123px]">
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
      <div className="[grid-area:1_/_1] font-['General_Sans:Bold',_sans-serif] h-[24px] leading-[24px] ml-0 mt-0 relative w-[87px]">
        <p className="mb-[18px]">Resources</p>
        <p className="text-[16px]">&nbsp;</p>
      </div>
      <div className="[grid-area:1_/_1] font-['General_Sans:Regular',_sans-serif] h-[233px] leading-[60px] ml-px mt-[40px] relative tracking-[-0.24px] w-[111px]">
        <p className="mb-0">Community</p>
        <p className="mb-0">Contact</p>
        <p>Tems of service</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[65px] items-start leading-[0] relative shrink-0 w-[531.75px]">
      <Featurs />
      <OpenTrip />
      <Resource />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame65 />
      <Frame64 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex font-['General_Sans:Regular',_sans-serif] items-center justify-between not-italic relative shrink-0 text-[16px] text-nowrap text-white w-[1181px] whitespace-pre">
      <p className="leading-[30px] relative shrink-0">{`Terms & Conditions  ,  Privacy Policy  , Cookies Policy , Sitemap `}</p>
      <p className="leading-[24px] relative shrink-0 tracking-[-0.24px]">© 2025 Backyard Technologies,All right reserved</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="[grid-area:1_/_1] box-border content-end flex flex-wrap gap-[505px] items-end ml-0 mt-0 relative w-[1181px]">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1181 1">
            <line id="Line 16" stroke="var(--stroke-0, #A7A7A7)" x2="1181" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame69 />
    </div>
  );
}

function Lisense() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="lisense">
      <Frame68 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0">
      <Frame66 />
      <Lisense />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute bg-[#020e37] box-border content-stretch flex flex-col gap-[30px] items-center justify-center left-0 overflow-clip p-[100px] top-[6968.98px] w-[1440px]">
      <Frame67 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents left-0 top-[4763.47px]">
      <Frame54 />
      <Frame57 />
      <Frame58 />
      <Frame59 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white relative size-full" data-name="Home Page">
      <div className="absolute bg-white box-border content-stretch flex flex-col h-[80px] items-center justify-center left-0 px-[100px] py-0 top-0 w-[1440px]" data-name="Navbar">
        <Navbar />
      </div>
      <Frame1 />
      <Frame4 />
      <Frame5 />
      <Frame28 />
      <Frame34 />
      <Frame35 />
      <Frame43 />
      <Frame44 />
      <Frame49 />
      <Frame50 />
      <Group60 />
    </div>
  );
}