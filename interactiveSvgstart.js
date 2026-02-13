

document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});

const lokationer = [
    {
        "lokation":"assistens",
        "tekst":`Assistenskirkegård, Nørrebro 

        Her er Michael Strunge i dag begravet. Assistenskirkegård er et kulturhistorisk sted, hvor mange kendte danskere hviler. Her får fortællingen en fysisk afslutning i byen, men stemmen lever videre.
        
        “Vi folder drømmens faner ud i natten.” 
        - Michael Strunge (Vi folder drømmens faner ud fra 1981)`
      
      },
      {
        "lokation":"webersgade",
        "tekst":`Webersgade 17, Østerbro

        Den 9. marts 1986 døde Michael Strunge, 27 år gammel, efter at have kastet sig ud fra 4. sal i sin kærestes lejlighed på Webersgade 17. I dag markerer en mindetavle stedet.

Hans liv og digtning var præget af intensitet, længsel og en grænsesøgende energi. Ordene, der knytter sig til hans sidste øjeblik, står som et stærkt og tragisk billede:

“Nu kan jeg flyve.”
— Michael Strunges (9.marts 1986)`
      
      },
      {
        "lokation":"københavn",
        "tekst":`København
        
        København er scenen for Michael Strunges poetiske univers. Storbyens tempo, lys og rytme gennemstrømmer hans digte, hvor temaer som identitet, fremmedhed og indre uro står centralt. 
        
        Byen er ikke blot baggrund – den er en levende maskine, der bevæger menneskene gennem natten. Dette kommer til udtryk i digtet "Natmaskinen",
        
        Uddrag fra “Natmaskinen” (1981):
        "“Langsomt oplades natten af byens lys.
Stjerneknapperne blinker og på måneskærmen ses de første billeder.
Åh, jeg vugges som på en damper, et tungt exprestog gennem mørket, flyver højt i natmaskinen.
Skyerne af drømmedamp hvisker hvidt til jorden.
Natmaskinen arbejder og absorberer menneskenes sjæle.”

- Michael Strunge"`
       
      },
      {
        "lokation":"hvidovre",
        "tekst":`Hvidovre 

        Michael Strunge blev født 19. juni 1958 og voksede op i Hvidovre i en almindelig og stabil kernefamilie. Han gik på Sønderkærskolen, var fagligt stærk og blev student fra Vester Borgerdyd Gymnasium i 1977. 

        Netop det almindelige blev et spændingsfelt i hans liv. Hans outsiderrolle var ikke social – men eksistentiel. Fra han var 19 til sin død 9. marts 1986 udgav han elleve digtsamlinger og blev en central stemme i 80’er-lyrikken. 
        
        “Hvem ved / ved hvad ens selv er lig? / - jeg er ligeglad / skaber selv mit selv” 
        - Michael Strunge (Livets hastighed fra 1978)`
      
      }
    ]

// global definition af variabler
async function runProgram() {
let selected;
let selectedId;
let fillcolor;
let active;
const popover = document.querySelector("#lokationer");

    // 1. Load svg map
    //------------------------------------------------------------------------------------	
let rawSvg = await fetch("kort_.svg");  // henter svg ind
let svg = await rawSvg.text(); 
document.querySelector("#kort").innerHTML = svg; // smider den ind i html

    // 2. Skift farve ved klik, og vis tekst
    //-----------------------------------------------------------------------
document.querySelector("#kort #poi").addEventListener("click", (evt) => clicked(evt)); 

    //function clicked
    //--------------------------------------------------------------------

function clicked(evt) {
  // a. find det klikkede element
    //----------------------------------------------
    selected = evt.target;

  // b. find det klikkede elementets ID
    //---------------------------------------------
    selectedId = selected.id;

  // c. find  det klikkede elements fillfarve
    //---------------------------------------------
    fillcolor = selected.getAttribute("fill");

  
    // d. vis info
    //--------------------------------------------
lokationer.forEach(lokation => {
    if (lokation.lokation === selectedId) {
        document.querySelector("#lokationtekst").textContent = lokation.tekst;
        // document.querySelector("#kunstnerbillede").src ="billeder/" + kunstner.billede + ".jpeg";
        
    }
});

    // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
    //------------------------------------------------------------------------------------
if(active){
    active.setAttribute("fill", fillcolor);
}

    //gør det klikkede til det aktive
    //-------------------------------------------------------------------------
active = selected; 

    //skift farve på det valgte
    //-------------------------------------------------------------------------
if (fillcolor == "#666675"){
    document.querySelector("#666675" + selectedId).setAttribute("fill", "#123456");
}

    //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
    //--------------------------------------------------------------------------
    else {
        document.querySelector("#" + selectedId).setAttribute("fill", "#666675");
    }
popover.togglePopover();
}

document.addEventListener("click", () => {
if (!popover.matches(":popover-open")){
    selected.setAttribute("fill", "#666675");
}
});
};
