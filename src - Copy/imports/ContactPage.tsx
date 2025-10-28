import svgPaths from "./svg-pguqfs0gr5";
import img from "figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";

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
            <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Home</p>
          </div>
          <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 2">
            <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">About Us</p>
          </div>
          <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 3">
            <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Services</p>
          </div>
          <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 4">
            <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Projects</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Item R">
        <div className="bg-[#1559cb] box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[36px] px-[24px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#353851] box-border content-stretch flex flex-col gap-[40px] h-[349px] items-center justify-center opacity-90 overflow-clip px-[100px] py-[125px] relative shrink-0 w-[1440px]">
      <div className="absolute h-[708px] left-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[1440px]" data-name="Pexels Photo by Christina Morillo">
        <div className="absolute inset-0 mix-blend-overlay overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.51%] left-0 max-w-none top-[1.49%] w-full" src={imgPexelsPhotoByChristinaMorillo} />
        </div>
      </div>
      <Frame18 />
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
        <p className="leading-[20px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function Frame1() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame6 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="relative size-[334.425px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
        <g id="Mask group" opacity="0.2">
          <circle cx="167.212" cy="167.212" fill="var(--fill-0, white)" id="Ellipse 1086" r="167.212" />
          <mask height="335" id="mask0_17_3718" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="335" x="0" y="0">
            <circle cx="167.212" cy="167.212" fill="var(--fill-0, #E1E7ED)" id="Ellipse 1085" r="167.212" />
          </mask>
          <g mask="url(#mask0_17_3718)">
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

function Component() {
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

function Button() {
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

function Button1() {
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

function Button2() {
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

function Button3() {
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
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="List">
      <Component />
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
          <mask height="75" id="mask0_17_3731" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
            <circle cx="37.2495" cy="37.2495" fill="var(--fill-0, #E1E7ED)" id="Ellipse 1085" r="37.2495" />
          </mask>
          <g mask="url(#mask0_17_3731)">
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

function Label() {
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

function Label1() {
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

function Row() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
        <Label />
        <FormField />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
        <Label1 />
        <FormField1 />
      </div>
    </div>
  );
}

function Label2() {
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

function Label3() {
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

function Label4() {
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

function List1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[16px] items-start ml-[42.286px] mt-[48.104px] relative w-[696.308px]" data-name="List">
      <Row />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
        <Label2 />
        <FormField2 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
        <Label3 />
        <FormField3 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
        <Label4 />
        <FormField4 />
      </div>
      <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[12px] h-[44px] items-center justify-center min-h-[36px] px-[24px] py-0 relative rounded-[6px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[rgba(26,26,26,0.12)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[51px] items-start relative shrink-0 w-[1240px]">
      <ContactInfo />
      <Form />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center overflow-clip p-[100px] relative shrink-0 w-[1440px]">
      <Frame2 />
      <Frame11 />
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

function Group1() {
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

function Group2() {
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

function Frame3() {
  return (
    <div className="bg-[#1559cb] h-[68px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[68px] items-center justify-between px-[50px] py-[20px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
            <Group />
          </div>
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
            <Group1 />
          </div>
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
            <Group2 />
          </div>
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Consulting</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
            <Group3 />
          </div>
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
            <Group4 />
          </div>
          <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
            <Group5 />
          </div>
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
        <p className="leading-[20px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span2 />
      <Span3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame9 />
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

function Group12() {
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

function Group13() {
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

function Group14() {
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

function Group15() {
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

function Group16() {
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

function Group17() {
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

function Group18() {
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
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-zinc-100 box-border content-stretch flex flex-col gap-[30px] items-center justify-center overflow-clip p-[100px] relative shrink-0 w-[1440px]">
      <Frame4 />
      <BodyE />
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

function Group8() {
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

function Group10() {
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

function Group11() {
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

function Frame8() {
  return (
    <div className="bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between px-[50px] py-[20px] relative shrink-0 w-[1440px]">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group6 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group7 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group8 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group9 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Digital Solutions</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group10 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Technology Outsourcing</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/asterisk-circle">
        <Group11 />
      </div>
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[28px] whitespace-pre">Consulting</p>
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

function SocialMediaContainer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Social Media Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[333.497px]">
      <div className="h-[97.687px] relative shrink-0 w-[95.5px]" data-name="Backyard Logo (No Background) (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.91%] left-[-20.61%] max-w-none top-[-8.96%] w-[120.61%]" src={img} />
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[65px] items-start leading-[0] relative shrink-0 w-[531.75px]">
      <Featurs />
      <OpenTrip />
      <Resource />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame13 />
      <Frame12 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex font-['General_Sans:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[16px] text-nowrap text-white w-[1181px] whitespace-pre">
      <p className="leading-[30px] relative shrink-0">{`Terms & Conditions  ,  Privacy Policy  , Cookies Policy , Sitemap `}</p>
      <p className="leading-[24px] relative shrink-0 tracking-[-0.24px]">© 2025 Backyard Technologies,All right reserved</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[grid-area:1_/_1] box-border content-end flex flex-wrap gap-[505px] items-end ml-0 mt-0 relative w-[1181px]">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1181 1">
            <line id="Line 16" stroke="var(--stroke-0, #A7A7A7)" x2="1181" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Lisense() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="lisense">
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0">
      <Frame14 />
      <Lisense />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#020e37] box-border content-stretch flex flex-col gap-[30px] items-center justify-center overflow-clip p-[100px] relative shrink-0 w-[1440px]">
      <Frame15 />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Contact Page">
      <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="Navbar">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col h-[80px] items-center justify-center px-[100px] py-0 relative w-full">
            <Navbar />
          </div>
        </div>
      </div>
      <Frame />
      <Frame5 />
      <Frame3 />
      <Frame7 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}