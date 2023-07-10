import React from "react";
import "./StudentProfiles.css"
import Aiden from "./../../../assets/publicImages/students/AidenAndrews.png";
import Alice from "./../../../assets/publicImages/students/AliceKindellan.png";
import Courtney from "./../../../assets/publicImages/students/CourtneyBristol.png";
import Hanu from "./../../../assets/publicImages/students/HanuNepe.png";
import Harry from "./../../../assets/publicImages/students/HarryMcGrath.png";
import Javier from "./../../../assets/publicImages/students/JavierFuego.png";
import Lisa from "./../../../assets/publicImages/students/LisaHoran.png";
import Lucia from "./../../../assets/publicImages/students/LuciaMendez.png";
import Mark from "./../../../assets/publicImages/students/MarkOLeary.png";
import Nagani from "./../../../assets/publicImages/students/NaganiCortes.png";
import Neveah from "./../../../assets/publicImages/students/NeveahMachenry.png";
import Rawiri from "./../../../assets/publicImages/students/RawiriFletcher.png";
import Shane from "./../../../assets/publicImages/students/ShaneOMonahan.png";
import Simon from "./../../../assets/publicImages/students/SimonLaine.png";
import Tokio from "./../../../assets/publicImages/students/TokioHan.png"






const StudenProfiles = ( {isSideBarCollapsed} ) => {
  return (
    <div
      className={`rightContentContainer2 ${
        isSideBarCollapsed ? "collapsedBody" : ""
      }`}
    >
      
      <div
        className={`helpReqContent ${
          isSideBarCollapsed ? "collapsedHelpReqContent" : ""
        }`}
      >
        <section className="scroll-bar">
          {/* <div className="scrollbar"> */}
            <div className="scrollbarblue"></div>
          {/* </div> */}
        </section>

        
        <div className="group1">
<div className="whitebox">
  <img src={Aiden} alt="Aiden" className="facePhoto"/>
  <div className="StudentName">AIDEN ANDREWS</div>
</div>
<div className="whitebox">
<img src={Courtney} alt="Courtney" className="facePhoto"/>
<div className="StudentName">COURTNEY BRISTOL</div>
</div>
<div className="whitebox">
<img src={Nagani} alt="Nagani" className="facePhoto"/>
<div className="StudentName">NAGANI CORTES</div>
</div>
<div className="whitebox">
<img src={Rawiri} alt="Rawiri" className="facePhoto"/>
<div className="StudentName">RAWIRI FLETCHER</div>
</div>
<div className="whitebox">
<img src={Javier} alt="Javier" className="facePhoto"/>
<div className="StudentName">JAVIER FUEGO</div>
</div>
</div>
<div className="group2">
<div className="whitebox">
<img src={Tokio} alt="Tokio" className="facePhoto"/>
  <div className="StudentName">TOKIO HAN</div>
</div>
<div className="whitebox">
<img src={Lisa} alt="Lisa" className="facePhoto"/>
  <div className="StudentName">LISA HORAN</div>
</div>
<div className="whitebox">
<img src={Alice} alt="Alice" className="facePhoto"/>
  <div className="StudentName">ALICE KINDELLAN</div>
</div>
<div className="whitebox">
<img src={Simon} alt="Simon" className="facePhoto"/>
  <div className="StudentName">SIMON LAINE</div>
</div>
<div className="whitebox">
<img src={Neveah} alt="Neveah" className="facePhoto"/>
  <div className="StudentName">NEVEAH MACHENRY</div>
</div>
</div>
<div className="group3">
<div className="whitebox">
<img src={Harry} alt="Harry" className="facePhoto"/>
  <div className="StudentName">HARRY MCGRATH</div>
</div>
<div className="whitebox">
<img src={Lucia} alt="Lucia" className="facePhoto"/>
  <div className="StudentName">LUCIA MENDEZ</div>
</div>
<div className="whitebox">
<img src={Hanu} alt="Hanu" className="facePhoto"/>
  <div className="StudentName">HANU NEPE</div>
</div>
<div className="whitebox">
<img src={Shane} alt="Shane" className="facePhoto"/>
  <div className="StudentName">SHANE O'MONAHAN</div>
</div>
<div className="whitebox">
<img src={Mark} alt="Mark" className="facePhoto"/>
  <div className="StudentName">MARK O'LEARY</div>
</div>
</div>
      </div>
      
    </div>
  );
};

export default StudenProfiles;
