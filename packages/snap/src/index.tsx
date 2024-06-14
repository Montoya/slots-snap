import { type OnHomePageHandler, type OnUserInputHandler, type OnInstallHandler, UserInputEventType } from "@metamask/snaps-sdk";
import { SnapComponent, Box, Button, Image, Heading, Text, Italic, Row, Form, Dropdown, Option, Field, Divider } from '@metamask/snaps-sdk/jsx';

const svgTitle = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><style>.sign{text-anchor:middle;dominant-baseline:middle;font-size:64px;font-weight:bold}</style><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#818181"/><stop offset=".24" stop-color="#b8b8b8"/><stop offset=".51" stop-color="#f3f3f3"/><stop offset=".86" stop-color="#b4b4b4"/><stop offset="1" stop-color="#666"/></linearGradient><filter id="c" x="-50%" y="-50%" width="200%" height="200%"><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="4"/><feOffset dy="5" result="offsetblur"/><feFlood flood-color="#000" result="color"/><feComposite in2="offsetblur" operator="in"/><feComposite in2="SourceAlpha" operator="in"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode/></feMerge></filter><filter id="g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8 8" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="glow"/><feMergeNode in="glow"/></feMerge></filter></defs><path fill="url(#a)" style="box-shadow:0 0 112px 168px inset rgba(0,0,0,.8)" d="M0 0h400v200H0z"/><rect fill="#334" filter="url(#c)" x="16" y="16" width="368" height="168"/><text x="200" y="62" class="sign" style="font-size:24px;font-weight:normal;font-family:'Comic Sans MS','Comic Sans',Charcoal,cursive" fill="white">Let's play...</text><text x="200" y="124" class="sign" fill="#ff8c00" filter="url(#g)">Slots</text><text x="200" y="124" class="sign" fill="white">Slots</text></svg>`; 

const svgArr = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><style>.emoji{text-anchor:middle;dominant-baseline:middle;font-size:80px;}</style><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#818181"/><stop offset=".24" stop-color="#b8b8b8"/><stop offset=".51" stop-color="#f3f3f3"/><stop offset=".86" stop-color="#b4b4b4"/><stop offset="1" stop-color="#666"/></linearGradient><linearGradient id="b" gradientTransform="rotate(90)"><stop offset="0" stop-color="rgba(0,0,0,0)"/><stop offset="60%" stop-color="#444"/><stop offset="100%" stop-color="rgba(0,0,0,0)"/></linearGradient><filter id="c" x="-50%" y="-50%" width="200%" height="200%"><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="4"/><feOffset dy="5" result="offsetblur"/><feFlood flood-color="#000" result="color"/><feComposite in2="offsetblur" operator="in"/><feComposite in2="SourceAlpha" operator="in"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode/></feMerge></filter></defs><path fill="url(#a)" style="box-shadow:0 0 112px 168px inset rgba(0,0,0,.8)" d="M0 0h400v200H0z"/><path fill="#fff" filter="url(#c)" d="M16 16h112v168H16zm128 0h112v168H144zm128 0h112v168H272z"/><text x="72" y="76" class="emoji" opacity="0">`,
  `<animate attributeName="opacity" values="0.6;1" dur="0.15s" begin="2s" repeatCount="0" fill="freeze"/><animate attributeName="y" values="76;114" dur="0.15s" begin="2s" repeatCount="0" fill="freeze"/></text><rect x="16" y="-40" width="112" height="40" opacity="1" fill="url(#b)"><animate attributeName="y" values="16;144" dur="0.5s" repeatCount="4"/></rect><text x="200" y="76" class="emoji" opacity="0">`,
  `<animate attributeName="opacity" values="0.6;1" dur="0.15s" begin="3s" repeatCount="0" fill="freeze"/><animate attributeName="y" values="76;114" dur="0.15s" begin="3s" repeatCount="0" fill="freeze" /></text><rect x="144" y="-40" width="112" height="40" opacity="1" fill="url(#b)"><animate attributeName="y" values="16;144" dur="0.5s" repeatCount="6"/></rect><text x="328" y="76" class="emoji" opacity="0">`,
  `<animate attributeName="opacity" values="0.6;1" dur="0.15s" begin="4.5s" repeatCount="0" fill="freeze"/><animate attributeName="y" values="76;114" dur="0.15s" begin="4.5s" repeatCount="0" fill="freeze"/></text><rect x="272" y="-40" width="112" height="40" opacity="1" fill="url(#b)"><animate attributeName="y" values="16;144" dur="0.5s" repeatCount="9"/></rect></svg>`
];

const svgStaticArr = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><style>.emoji{text-anchor:middle;dominant-baseline:middle;font-size:80px}</style><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#818181"/><stop offset=".24" stop-color="#b8b8b8"/><stop offset=".51" stop-color="#f3f3f3"/><stop offset=".86" stop-color="#b4b4b4"/><stop offset="1" stop-color="#666"/></linearGradient><filter id="c" x="-50%" y="-50%" width="200%" height="200%"><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="4"/><feOffset dy="5" result="offsetblur"/><feFlood flood-color="#000" result="color"/><feComposite in2="offsetblur" operator="in"/><feComposite in2="SourceAlpha" operator="in"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode/></feMerge></filter></defs><path fill="url(#a)" style="box-shadow:0 0 112px 168px inset rgba(0,0,0,.8)" d="M0 0h400v200H0z"/><path fill="#fff" filter="url(#c)" d="M16 16h112v168H16zm128 0h112v168H144zm128 0h112v168H272z"/><text x="72" y="114" class="emoji">`,
  `</text><text x="200" y="114" class="emoji">`,
  `</text><text x="328" y="114" class="emoji">`,
  `</text></svg>`
]

let reel = ['🦊','🍒','🍊','🍌','🍌','🍎','🍎']; 

const getRandom = () => { 
  
}

type SlotProps = { 
  one: string;
  two: string;
  three: string; 
}; 

const Slot: SnapComponent<SlotProps> = ({ one, two, three }) => {
  return (
    <Image src={svgArr[0]+one+svgArr[1]+two+svgArr[2]+three+svgArr[3]}/>
  );
};

const StaticSlot: SnapComponent<SlotProps> = ({ one, two, three }) => { 
  return ( 
    <Image src={svgStaticArr[0]+one+svgStaticArr[1]+two+svgStaticArr[2]+three+svgStaticArr[3]}/>
  );
}

export const onHomePage: OnHomePageHandler = async () => {
  const playerState = await snap.request({
    method: "snap_manageState",
    params: { operation: "get" },
  })  || { balance: 1000, new: true, lastBet: 0, lastResult: [reel[0],reel[0],reel[0]], reel: "fox" };
  const interfaceId = await snap.request({
    method: "snap_createInterface",
    params: {
      ui: (
        <Box>
          <Image src={svgTitle}/>
          <Button name={playerState.new ? "new" : "start"} variant="primary">Start</Button>
        </Box>
      )
    },
  }); 
  return { 
    id: interfaceId
  }
};

export const onUserInput: OnUserInputHandler = async ({id, event}) => { 

  if(event.name=="clear") { 
    await snap.request({ 
      method: "snap_manageState",
      params: { operation: "clear" },
    }); 
    event.name = "startFresh"; 
  }

  const playerState = await snap.request({
    method: "snap_manageState",
    params: { operation: "get" },
  }) || { balance: 1000, new: true, lastBet: 0, lastResult: [reel[0],reel[0],reel[0]], reel: "fox" };

  if(event.name=="settingsForm" && event.type==UserInputEventType.FormSubmitEvent) { 
    playerState.reel = ''+event.value.reel; 
  }

  switch(playerState.reel) { 
    case 'gator': 
      reel = ['🐊','🐘','🦒','🐅','🐅','🦓','🦓']; 
      break; 
    case 'frog': 
      reel = ['🐸','🍱','🍵','🍥','🍥','🍄','🍄']; 
      break; 
    case 'gem': 
      reel = ['💎','👑','💰','👠','👠','🛍️','🛍️']; 
      break; 
    case 'fox': 
    default: 
      reel = ['🦊','🍒','🍊','🍌','🍌','🍎','🍎']; 
      break; 
  }

  if(event.name=="settingsForm" && event.type==UserInputEventType.FormSubmitEvent) { 
    playerState.lastResult = [reel[0],reel[0],reel[0]]; 
    await snap.request({
      method: "snap_manageState",
      params: { 
        operation: "update",
        newState: playerState,
      },
    });
    event.name = "start"; 
  }

  switch (event.name) { 
    case "new": 
      snap.request({ 
        method: "snap_updateInterface",
        params: { 
          id, 
          ui: (
            <Box>
              <Heading>Welcome to Slots!</Heading>
              <Text>In this game, you start with (virtual) $1000 and bet on a slot machine to earn more. If you run out of money, you can reset and start again. Sounds fun, right? Let's play...</Text>
              <Button name="startFresh">Continue</Button>
            </Box>
          )
        }
      }); 
      break;
    case "startOver": 
      playerState.balance = 1000; 
      playerState.lastBet = 0;
      playerState.lastResult = [reel[0],reel[0],reel[0]]; 
    case "startFresh": 
      playerState.new = false; 
      await snap.request({
        method: "snap_manageState",
        params: { 
          operation: "update",
          newState: playerState,
        },
      });
    case "start": 
      snap.request({ 
        method: "snap_updateInterface",
        params: { 
          id, 
          ui: ( 
            <Box>
              <StaticSlot one={playerState.lastResult[0]} two={playerState.lastResult[1]} three={playerState.lastResult[2]}/>
              <Row label="Balance"><Text>{"$"+playerState.balance}</Text></Row>
              <Box direction="horizontal" alignment="space-between">
                { playerState.balance >= 5 ? ( 
                  <Button name="bet5">Bet 5</Button>
                ) : ( 
                  <Box direction="horizontal" alignment="space-between"><Text>You are out of money... </Text><Button name="startOver">Start over</Button></Box>
                )}
                {playerState.balance >= 10 ? ( 
                  <Button name="bet10">Bet 10</Button>
                ) : null}
                {playerState.balance >= 25 ? (
                  <Button name="bet25">Bet 25</Button>
                ) : null}
                <Button name="settings">⚙️</Button>
              </Box>
            </Box>
          )
        }
      }); 
      break; 
    case "bet5": 
    case "bet10": 
    case "bet25": 
      playerState.lastBet = parseInt(event.name.substring(3)); 
      playerState.balance -= playerState.lastBet; 
      const valuesArray = new Uint32Array(3);
      crypto.getRandomValues(valuesArray); 
      const one = reel[valuesArray[0]%reel.length]; 
      const two = reel[valuesArray[1]%reel.length]; 
      const three = reel[valuesArray[2]%reel.length]; 
      let win = 0; 
      if(one==two && two==three) { 
        switch(one) { 
          case reel[0]: 
            win = playerState.lastBet * 40; 
            break; 
          case reel[1]: 
            win = playerState.lastBet * 25; 
            break; 
          case reel[2]: 
            win = playerState.lastBet * 10; 
            break; 
          case reel[3]: 
            win = playerState.lastBet * 5; 
            break; 
          case reel[5]: 
            win = playerState.lastBet * 2; 
            break; 
        }
      } else if(one==reel[0] && one==two || two==reel[0] && two==three || three==reel[0] && one==three) { 
        win = playerState.lastBet * 8; 
      }
      else if(one==reel[0] || two==reel[0] || three==reel[0]) { 
        win = playerState.lastBet; 
      }
      playerState.lastResult[0] = one;
      playerState.lastResult[1] = two; 
      playerState.lastResult[2] = three; 
      await snap.request({
        method: "snap_updateInterface",
        params: { 
          id, 
          ui: ( 
            <Box>
              <Slot one={playerState.lastResult[0]} two={playerState.lastResult[1]} three={playerState.lastResult[2]}/>
              <Row label="Balance"><Text>{"$"+playerState.balance}</Text></Row>
            </Box>
          ),
        },
      }); 
      playerState.balance += win; 
      await snap.request({
        method: "snap_manageState",
        params: { 
          operation: "update",
          newState: playerState,
        },
      });
      const prom = new Promise<void>((resolve) => { 
        setTimeout(() => {
          snap.request({ 
            method: "snap_updateInterface",
            params: { 
              id, 
              ui: ( 
                <Box>
                  <StaticSlot one={playerState.lastResult[0]} two={playerState.lastResult[1]} three={playerState.lastResult[2]}/>
                  <Row label="Balance"><Text>{"$"+playerState.balance}</Text></Row>
                  <Text><Italic>{win?"You won $"+win+"!":"Try again..."}</Italic></Text>
                  <Box direction="horizontal" alignment="space-between">
                    { playerState.balance >= 5 ? ( 
                      <Button name="bet5">Bet 5</Button>
                    ) : ( 
                      <Box direction="horizontal" alignment="space-between"><Text>You are out of money... </Text><Button name="startOver">Start over</Button></Box>
                    )}
                    {playerState.balance >= 10 ? ( 
                      <Button name="bet10">Bet 10</Button>
                    ) : null}
                    {playerState.balance >= 25 ? (
                      <Button name="bet25">Bet 25</Button>
                    ) : null}
                    <Button name="settings">⚙️</Button>
                  </Box>
                </Box>
              )
            }
          }); 
          resolve(); 
        }, 5000); 
      }); 
      return prom; 
      break; 
    case 'settings': 
      await snap.request({
        method: "snap_updateInterface",
        params: { 
          id, 
          ui: ( 
            <Box>
              <Heading>Settings</Heading>
              <Form name="settingsForm">
                <Field label="Theme">
                  <Dropdown name="reel" value={''+playerState.reel}>
                    <Option value="fox">🦊 🍒 🍊 🍌 🍎</Option>
                    <Option value="gator">🐊 🐘 🦒 🐅 🦓</Option>
                    <Option value="frog">🐸 🍱 🍵 🍥 🍄</Option>
                    <Option value="gem">💎 👑 💰 👠 🛍️</Option>
                  </Dropdown>
                </Field>
                <Button name="save">Save</Button>
                <Button name="start">Cancel</Button>
              </Form>
              <Divider/>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
              <Button name="attemptClear" variant="destructive">Reset</Button>
            </Box>
          ),
        },
      }); 
      break; 
    case 'attemptClear': 
      await snap.request({
        method: "snap_updateInterface",
        params: { 
          id, 
          ui: ( 
            <Box>
              <Heading>Are you sure?</Heading>
              <Text>This will erase your game data. This cannot be undone.</Text>
              <Box direction="horizontal" alignment="space-between">
                <Button name="settings">Cancel</Button>
                <Button name="clear" variant="destructive">Confirm</Button>
              </Box>
            </Box>
          ),
        },
      }); 
      break; 
  }
}; 

export const onInstall: OnInstallHandler = async () => {
  await snap.request({
    method: "snap_dialog",
    params: {
      type: "alert",
      content: (
        <Box>
          <Image src={svgTitle}/>
          <Text>Thank you for installing Slots!</Text>
          <Text><Italic>To play, open the MetaMask menu, then click "Snaps", then "Slots".</Italic></Text>
        </Box>
      )
    },
  });
};