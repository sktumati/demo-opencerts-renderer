import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";
import {
  IMG_LOGO_RP,
  IMG_CERTIFICATE_SEAL,
  IMG_LOGO_ALLPOLY,
  IMG_LOGO_SUSS,
  IMG_LOGO_SIM,
  IMG_LOGO_SIM_SIGN
} from "./images";
import {
  formatDDMMMYYYY,
  formatDate,
  formatDatePrefix,
  formatDDMONYYYY,
  formatCertName,
  formatSignatoriesPosition
} from "./functions";

export const logoLStyle = {
  textAlign: "left",
  width: "100%",
  height: "auto"
};
export const logoRStyle = {
  width: "100%",
  height: "auto",
  textAlign: "right"
};
export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};
export const signatureTextStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "500!important",
  color: "black",
  fontSize: "1.1rem"
};
export const printCertStyle = {
  fontFamily: "Old English Text MT",
  fontWeight: "500!important",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};

export const printRecipientStyle = {
  fontFamily: "Lucida Calligraphy",
  fontWeight: "500!important",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};

export const printTextStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR01 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "1.6rem",
  color: "black",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR02 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "black",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR03 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "1.6rem",
  color: "solid black",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR04 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "2.4rem",
  color: "solid black",
  textAlign: "center"
};

export const SIMprintTextStyle_TNR05 = {
  fontFamily: "TimesNewRoman",
  fontWeight: "500!important",
  fontSize: "1.4rem",
  color: "black",
  textAlign: "center"
};

export const SIMprintTextStyle_LSR01 = {
  fontFamily: "LucidaSansRoman",
  fontWeight: "500!important",
  fontSize: "1.4rem",
  color: "black",
  textAlign: "center"
};

export const printTextStyle_01 = {
  fontFamily: "garage-gothic, sans-serif",
  fontWeight: "400", 
  fontstyle: "normal",  
  fontSize: "4.2rem",
  textAlign: "center"
};

export const SIMtitleTextStyle_01 = {
fontFamily: "Bodoni MT Condensed",
  color: "solid black",
  fontSize: "5rem",
  textAlign: "center"
};

export const singaporeTextStyle = {
  color: "#555",
  fontSize: "3rem"
};

export const nameTextStyle = {
  fontSize: "3rem",
  textAlign: "center"
};

export const titleTextStyle = {
  color: "rgb(30,93,200)",
  fontSize: "3rem",
  textAlign: "center"
};

export const SIMtitleTextStyle = {
  color: "#555",
  fontSize: "4rem",
  textAlign: "center"
};

export const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  height: "auto"
};

export const supportSUSSTextStyle = {
  display: "block",
  fontSize: "2rem",
  textAlign: "center"
};

export const supportJPTextStyle = {
  fontFamily: "Times New Roman",
  display: "block",
  fontSize: "1.5rem",
  fontWeight: "900",
  textAlign: "center"
};

export const arial10Pt = {
  fontFamily: "Arial",
  fontSize: "16px",
  textAlign: "center",
  marginTop: "0",
  marginBottom: "0",
  marginLeft: "0",
  marginRight: "0"
};

export const renderSingapore = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "2rem" }}
  >
    <p style={singaporeTextStyle} />
  </div>
);

export const renderLogoRP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img src={IMG_LOGO_SIM} />
    </div>
    <div className="col-2" />
  </div>
);



// type = 0 (SUSS), 1 (Joint Poly)
export const renderLogoRPPartner = type => {
  let logo = IMG_LOGO_SUSS;
  if (type === 1) logo = IMG_LOGO_ALLPOLY;
  const logoST = type === 0 ? "col-4 mx-auto" : "mx-auto";
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ marginTop: "3rem" }}
    >
      <div className="col-1" />
      <div className="col-10">

      </div>
      <div className="col-1" />
    </div>
  );
};

// Render Signature
export const renderTwoSignatures = certificate => {
  const certSign = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[0].position")
  );
  return (
  <div className="container"> 
     <style> {`
        .signature-container{
        width:100%;
        float:right;
        text-align:center;
        color:#aaa;
                            } 

        .Examination-boardsign-label{
        border-top:1px solid #aaa;
        text-align:center;
        color: #aaa;
      }							
							
             `}
     </style>
	
    <div className="row" style={{ marginTop: "8rem", marginBottom: "1rem" }}>
	   <div className="col-6">
	   </div>
      <div className="col-3">
        <div className="signature-container">
          <img style={logoLStyle} src={get(certificate,"additionalData.certSignatories[0].signature")} />
		  <span style={arial10Pt}><strong>_______________________________________</strong></span>
		  <span style={signatureTextStyle}>{certSign[0]}</span>		  
        </div>
      </div>

      <div className="col-3">
        <div className="signature-container">
          <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />
        </div>
      </div>
	</div>	

		
  </div>
  );
};

export const renderIssuingDate = certificate => (
  <span>
    {formatDDMONYYYY(get(certificate, "issuedOn"))}{" "}
  </span>
);

// Cert Text
export const renderAwardTextCET = (certificate, type) => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />

    <div style={printTextStyle}>&nbsp;</div>

    <div style={printTextStyle}>&nbsp;</div>

    <div style={printTextStyle}>It is hereby certified that</div>

    <div className="row d-flex justify-content-center">
      <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    </div>

    <div style={printTextStyle}>having satisfied all course requirements</div>

    <div style={printTextStyle}>was awarded the</div>

	
    <div className="row d-flex justify-content-center">
      <div style={SIMprintTextStyle_TNR02}>
        <p style={SIMprintTextStyle_TNR02}>{get(certificate, "name")}</p>
      </div>
    </div>

	
	
    <div style={printTextStyle}>{type === 1 ? "leading to the " : null}</div>

    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>
        <p style={printCertStyle}>
          {type === 1 ? get(certificate, "description") : null}
        </p>
      </div>
    </div>

    <div className="row d-flex justify-content-center">
      <p style={printTextStyle}>
        {formatDDMMMYYYY(get(certificate, "issuedOn"))}
      </p>
    </div>
  </div>
);
export const renderAwardText = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "1rem" }}
    />

    <div className="row d-flex justify-content-center">
      <div style={SIMprintTextStyle_TNR01}>
        <p style={SIMprintTextStyle_TNR01}>SINGAPORE INSTITUTE OF MANAGEMENT</p>
      </div>
    </div>	

	
    <div className="row d-flex justify-content-center">
      <div style={printTextStyle_01}>
        <p style={{printTextStyle_01}}>{get(certificate, "additionalData.description")}</p>
		<p style={{printTextStyle_01}}>{get(certificate, "additionalData.description1")}</p>
      </div>
    </div>	
	

	
    <div style={SIMprintTextStyle_TNR05}>&nbsp;</div>	

    <div style={SIMprintTextStyle_LSR01}>It is hereby certified that</div>
	
	<div style={SIMprintTextStyle_TNR05}>&nbsp;</div>

    <div className="row d-flex justify-content-center">
      <p style={SIMprintTextStyle_TNR04}>{get(certificate, "recipient.name")}</p>
    </div>
	
    <div style={SIMprintTextStyle_LSR01}>&nbsp;</div>
			
    <div style={SIMprintTextStyle_LSR01}>having attended the prescribed course</div>

    <div style={SIMprintTextStyle_LSR01}>and successfully passed the required  </div>

    <div style={SIMprintTextStyle_LSR01}>examination(s) was awarded the</div>
	
    <div className="row d-flex justify-content-center">
      <div style={supportSUSSTextStyle}>
        <p style={supportSUSSTextStyle}>{get(certificate, "name")}</p>
      </div>
    </div>	
	
		
    <div style={printTextStyle}>&nbsp;</div>
			

    <div className="row d-flex justify-content-center">
	  <p style={SIMprintTextStyle_LSR01}>on </p>
      <p style={SIMprintTextStyle_TNR03}>&nbsp; {renderIssuingDate(certificate)}</p>
    </div>
  </div>
);

export const renderFooter = certificate => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-6 text-left">&nbsp;</div>
      <div className="col-6 text-right">
        {get(certificate, "additionalData.transcriptId")}
      </div>
    </div>
  </div>
);


Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
