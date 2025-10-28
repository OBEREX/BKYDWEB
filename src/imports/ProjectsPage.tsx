import svgPaths from "./svg-cmrem25y68";
import imgBackyardLogoNoBackground11 from "figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png";
import imgPexelsPhotoByChristinaMorillo from "figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png";
import imgRectangle70 from "figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png";
import imgInvertedComma1 from "figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png";

function Item() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center min-h-[44px] px-[10px] py-0 relative rounded-[12px] shrink-0" data-name="Item 1">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(26,26,26,0.7)] text-center text-nowrap whitespace-pre">Home</p>
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
      <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3478ea] text-[16px] text-center text-nowrap whitespace-pre">Projects</p>
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
            <path d={svgPaths.p37ac730} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p9ef3100} fill="var(--fill-0, white)" fillRule="evenodd" />
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

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Our Projects</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#353851] box-border content-stretch flex flex-col gap-[40px] h-[349px] items-center justify-center opacity-90 overflow-clip px-[100px] py-[125px] relative shrink-0 w-[1440px]">
      <div className="absolute h-[708px] left-0 top-[calc(50%+0.5px)] translate-y-[-50%] w-[1440px]" data-name="Pexels Photo by Christina Morillo">
        <div className="absolute inset-0 mix-blend-overlay overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.51%] left-0 max-w-none top-[1.49%] w-full" src={imgPexelsPhotoByChristinaMorillo} />
        </div>
      </div>
      <Frame27 />
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
        <p className="leading-[20px] whitespace-pre">Our Latest Projects</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[48px] text-center text-white w-full">
        <p className="mb-0 text-[#1a1a1a]">Explore our Showcase of</p>
        <p className="font-['General_Sans:Bold',sans-serif] text-[#1559cb]">Featured Work</p>
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
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame11 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-blue-600 box-border content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[8px] relative rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">All Projects</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Digital Solutions</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[41px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Technology Outsourcing</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Consultations</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[250px] py-0 relative w-full">
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return <div className="absolute h-[256px] left-0 top-0 w-[394.672px]" data-name="Image" />;
}

function Frame() {
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

function Container2() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[114.125px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[72px] left-0 top-[184px] w-[394.672px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Component3() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 58">
      <g id="_2965621218592">
        <path d={svgPaths.p161f3300} fill="var(--fill-0, #13143A)" id="Vector" />
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3d8b2c00} fill="var(--fill-0, #F1AE1E)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pab41200} fill="var(--fill-0, #13143A)" fillRule="evenodd" id="Vector_3" />
        </g>
      </g>
    </svg>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <Component3 />
    </div>
  );
}

function ColVar3BlueYellow() {
  return (
    <div className="absolute h-[57.605px] left-[calc(50%-0.328px)] overflow-clip top-[calc(50%-0.094px)] translate-x-[-50%] translate-y-[-50%] w-[226px]" data-name="Col_Var3_Blue&Yellow 1">
      <LayerX />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(30,58,138,0)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 w-[394.672px]" data-name="Container">
      <Container3 />
      <ColVar3BlueYellow />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fcfcfc] h-[256px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image />
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[346.672px]" data-name="Heading">
      <div className="absolute flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center leading-[0] left-0 not-italic text-[17px] text-gray-800 top-[13.5px] translate-y-[-50%] w-[304.625px]">
        <p className="leading-[28px]">CarAlert247</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Digital Solution</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">TypeScript</p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">Express</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">PostgreSQL</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Span2 />
      <Span3 />
      <Span4 />
      <Span5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end px-[23px] py-[24px] relative w-full">
          <Heading />
          <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[346.453px]">
            <p className="leading-[24px]">{`Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling. `}</p>
          </div>
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-[394.672px]" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Image1() {
  return <div className="absolute h-[256px] left-0 top-0 w-[394.672px]" data-name="Image" />;
}

function Frame2() {
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

function Container9() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[114.125px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[72px] left-0 top-[184px] w-[394.672px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(30,58,138,0)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 w-[394.672px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Group() {
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

function Group1() {
  return (
    <div className="absolute contents inset-[23.48%_44.85%_56.61%_45.55%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
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

function Group3() {
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

function Group4() {
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

function Group5() {
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

function Group6() {
  return (
    <div className="absolute contents inset-[25.91%_41.76%_63.07%_42.47%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[25.91%_41.76%_63.07%_42.47%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group8() {
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

function Group9() {
  return (
    <div className="absolute contents inset-[23.48%_32.01%_23.38%_32.01%]" data-name="Group">
      <p className="absolute font-['Century_Gothic:Bold',sans-serif] inset-[72.32%_40.1%_23.38%_41.15%] leading-[normal] not-italic text-[9.349px] text-black text-nowrap whitespace-pre">Master Anything</p>
      <Group1 />
      <Group2 />
      <Group7 />
      <Group8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.06%_32.01%_27.88%_32.01%] leading-[normal] not-italic text-[29.467px] text-black text-nowrap whitespace-pre">QuikLearn</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[25.45%_47.61%_64.78%_48.33%] leading-[normal] not-italic text-[20.624px] text-nowrap text-white whitespace-pre">Q</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[23.48%_32.01%_23.38%_32.01%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[23.48%_32.01%_23.38%_32.01%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#fcfcfc] h-[256px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image1 />
      <Container11 />
      <Group11 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[346.672px]" data-name="Heading">
      <div className="absolute flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center leading-[0] left-0 not-italic text-[17px] text-gray-800 top-[13.5px] translate-y-[-50%] w-[304.625px]">
        <p className="leading-[28px]">{`QuikLearn `}</p>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Digital Solution</p>
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">TypeScript</p>
      </div>
    </div>
  );
}

function Span8() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">Express</p>
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">PostgreSQL</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Span6 />
      <Span7 />
      <Span8 />
      <Span9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end px-[23px] py-[24px] relative w-full">
          <Heading1 />
          <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[346.453px]">
            <p className="leading-[24px]">{`Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling. `}</p>
          </div>
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-[394.672px]" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Image2() {
  return <div className="absolute h-[256px] left-0 top-0 w-[394.672px]" data-name="Image" />;
}

function Frame4() {
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

function Container16() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[114.125px]" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[72px] left-0 top-[184px] w-[394.672px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(30,58,138,0)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 w-[394.672px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#fcfcfc] h-[256px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image2 />
      <Container18 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[346.672px]" data-name="Heading">
      <div className="absolute flex flex-col font-['General_Sans:Bold',sans-serif] h-[27px] justify-center leading-[0] left-0 not-italic text-[17px] text-gray-800 top-[13.5px] translate-y-[-50%] w-[304.625px]">
        <p className="leading-[28px]">Anything</p>
      </div>
    </div>
  );
}

function Span10() {
  return (
    <div className="bg-[#1a1a1a] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Digital Solution</p>
      </div>
    </div>
  );
}

function Span11() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">TypeScript</p>
      </div>
    </div>
  );
}

function Span12() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">Express</p>
      </div>
    </div>
  );
}

function Span13() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.2px] text-blue-700 text-nowrap">
        <p className="leading-[16px] whitespace-pre">PostgreSQL</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Span10 />
      <Span11 />
      <Span12 />
      <Span13 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end px-[23px] py-[24px] relative w-full">
          <Heading2 />
          <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-gray-600 w-[346.453px]">
            <p className="leading-[24px]">{`Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling. `}</p>
          </div>
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 w-[394.672px]" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0">
      <Container8 />
      <Container15 />
      <Container22 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame5 />
      <Container1 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame17 key={i} />
      ))}
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[100px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Group12() {
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
      <Group12 />
    </div>
  );
}

function Frame9() {
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

function Span14() {
  return <div className="bg-[#1559cb] rounded-[9999px] shrink-0 size-[8px]" data-name="Span" />;
}

function Span15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1559cb] text-[14px] text-nowrap tracking-[0.98px]">
        <p className="leading-[20px] whitespace-pre">Testimonials</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Span14 />
      <Span15 />
    </div>
  );
}

function Frame10() {
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Container23 />
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[671px]">
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Component2() {
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

function Group14() {
  return (
    <div className="absolute contents left-[93.07px] top-[268.39px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.841px] left-0 not-italic text-[#ffe9e9] text-[19.441px] top-0 w-[146.697px]">Esther Jackson</p>
      <Component2 />
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
      <Group14 />
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

function Component1() {
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
      <Component1 />
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[25.38px] not-italic text-[20px] text-white top-[64.8px] w-[386.114px]">I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!”</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Msg key={i} />
      ))}
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame18 />
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

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame19 />
      <ProgressSegmented />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#020e37] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[100px] relative w-full">
          <Component />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Group13() {
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
      <Group13 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1559cb] box-border content-stretch flex h-[68px] items-center justify-between ml-0 mt-0 px-[50px] py-[20px] relative w-[1440px]">
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

function Button5() {
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

function Button6() {
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

function Button7() {
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

function Button8() {
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
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Frame22() {
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
      <SocialMediaContainer />
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[65px] items-start leading-[0] relative shrink-0 w-[531.75px]">
      <Featurs />
      <OpenTrip />
      <Resource />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame22 />
      <Frame21 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex font-['General_Sans:Regular',sans-serif] items-center justify-between not-italic relative shrink-0 text-[16px] text-nowrap text-white w-[1181px] whitespace-pre">
      <p className="leading-[30px] relative shrink-0">{`Terms & Conditions  ,  Privacy Policy  , Cookies Policy , Sitemap `}</p>
      <p className="leading-[24px] relative shrink-0 tracking-[-0.24px]">© 2025 Backyard Technologies,All right reserved</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[grid-area:1_/_1] box-border content-end flex flex-wrap gap-[505px] items-end ml-0 mt-0 relative w-[1181px]">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1181 1">
            <line id="Line 16" stroke="var(--stroke-0, #A7A7A7)" x2="1181" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame26 />
    </div>
  );
}

function Lisense() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="lisense">
      <Frame25 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0">
      <Frame23 />
      <Lisense />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[grid-area:1_/_1] bg-[#020e37] box-border content-stretch flex flex-col gap-[30px] items-center justify-center ml-0 mt-[68px] overflow-clip p-[100px] relative w-[1440px]">
      <Frame24 />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame13 />
      <Frame16 />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Projects  Page">
      <Navbar1 />
      <Frame1 />
      <Frame7 />
      <Frame9 />
      <Frame8 />
      <Group15 />
    </div>
  );
}