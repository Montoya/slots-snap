import type { OnHomePageHandler } from "@metamask/snaps-sdk";
import { SnapComponent, Box, Text, Image, JsonObject } from '@metamask/snaps-sdk/jsx';

const svgTitle = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><style>.sign{text-anchor:middle;dominant-baseline:middle;font-size:64px;font-weight:bold}</style><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#818181"/><stop offset=".24" stop-color="#b8b8b8"/><stop offset=".51" stop-color="#f3f3f3"/><stop offset=".86" stop-color="#b4b4b4"/><stop offset="1" stop-color="#666"/></linearGradient><filter id="c" x="-50%" y="-50%" width="200%" height="200%"><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="4"/><feOffset dy="5" result="offsetblur"/><feFlood flood-color="#000" result="color"/><feComposite in2="offsetblur" operator="in"/><feComposite in2="SourceAlpha" operator="in"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode/></feMerge></filter><filter id="g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8 8" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="glow"/><feMergeNode in="glow"/></feMerge></filter></defs><path fill="url(#a)" style="box-shadow:0 0 112px 168px inset rgba(0,0,0,.8)" d="M0 0h400v200H0z"/><rect fill="#334" filter="url(#c)" x="16" y="16" width="368" height="168"/><text x="200" y="62" class="sign" style="font-size:24px;font-weight:normal;font-family:'Comic Sans MS','Comic Sans',Charcoal,cursive" fill="white">Let's play...</text><text x="200" y="124" class="sign" fill="#ff8c00" filter="url(#g)">Slots</text><text x="200" y="124" class="sign" fill="white">Slots</text></svg>`; 

const svgArr = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><style>.emoji{text-anchor:middle;dominant-baseline:middle;font-size:80px;}</style><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#818181"/><stop offset=".24" stop-color="#b8b8b8"/><stop offset=".51" stop-color="#f3f3f3"/><stop offset=".86" stop-color="#b4b4b4"/><stop offset="1" stop-color="#666"/></linearGradient><linearGradient id="b" gradientTransform="rotate(90)"><stop offset="0" stop-color="rgba(0,0,0,0)"/><stop offset="60%" stop-color="#444"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></linearGradient><filter id="c" x="-50%" y="-50%" width="200%" height="200%"><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="4"/><feOffset dy="5" result="offsetblur"/><feFlood flood-color="#000" result="color"/><feComposite in2="offsetblur" operator="in"/><feComposite in2="SourceAlpha" operator="in"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode/></feMerge></filter></defs><path fill="url(#a)" style="box-shadow:0 0 112px 168px inset rgba(0,0,0,.8)" d="M0 0h400v200H0z"/><path fill="#fff" filter="url(#c)" d="M16 16h112v168H16zm128 0h112v168H144zm128 0h112v168H272z"/><text x="72" y="76" class="emoji" opacity="0">`,
  `<animate attributeName="opacity" values="0.6;1" dur="0.15s" begin="2s" repeatCount="0" fill="freeze"/><animate attributeName="y" values="76;114" dur="0.15s" begin="2s" repeatCount="0" fill="freeze"/></text><rect x="16" y="-40" width="112" height="40" opacity="1" fill="url(#b)"><animate attributeName="y" values="16;144" dur="0.5s" repeatCount="4"/></rect><text x="200" y="76" class="emoji" opacity="0">`,
  `<animate 
    attributeName="opacity" 
    values="0.6;1" 
    dur="0.15s" 
    begin="3s" 
    repeatCount="0" 
    fill="freeze" />
  <animate 
    attributeName="y" 
    values="76;114" 
    dur="0.15s" 
    begin="3s" 
    repeatCount="0" 
    fill="freeze" />
</text>
<rect x="144" y="-40" width="112" height="40" opacity="1" fill="url(#b)">
  <animate
      attributeName="y" 
      values="16;144"
      dur="0.5s"
      repeatCount="6" />
</rect>
<text x="328" y="76" class="emoji" opacity="0">`,
  `<animate 
    attributeName="opacity" 
    values="0.6;1" 
    dur="0.15s" 
    begin="4.5s" 
    repeatCount="0" 
    fill="freeze" />
  <animate 
    attributeName="y" 
    values="76;114" 
    dur="0.15s" 
    begin="4.5s" 
    repeatCount="0" 
    fill="freeze" />
</text>
<rect x="272" y="-40" width="112" height="40" opacity="1" fill="url(#b)">
  <animate
      attributeName="y"
      values="16;144"
      dur="0.5s"
      repeatCount="9" />
</rect>
</svg>`
];

type State = {
  balance: Number; 
  new: boolean; 
};

type SlotProps = { 
  one: string;
  two: string;
  three: string; 
}; 

export const Slot: SnapComponent<SlotProps> = ({ one, two, three }) => {
  return (
    <Image src={svgArr[0]+one+svgArr[1]+two+svgArr[2]+three+svgArr[3]}/>
  );
};

export const onHomePage: OnHomePageHandler = async () => {
  const playerState = await snap.request({
    method: "snap_manageState",
    params: { operation: "get" },
  }) || { balance: 1000, new: true };
  if(playerState.new) { 
    return { content: (
      <Box>
        <Image src={svgTitle}/>
      </Box>
    ) }; 
  }
  return { content: (
    <Box>
      <Slot one="🦊" two="🍒" three="🍒"/>
    </Box>
  ) };
};