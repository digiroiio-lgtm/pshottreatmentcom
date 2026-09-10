/**
 * Sets `data-currency` on <html> before the browser paints, so the correct price
 * is on screen from the very first frame with no flash and no layout shift.
 *
 * Kept as a raw inline <script> rather than next/script: it must execute
 * synchronously during head parsing, which `beforeInteractive` does not
 * guarantee for the first paint of a statically rendered page.
 *
 * The source is a literal with no interpolated values, so there is no injection
 * surface here.
 */
const script = `(function(){try{
var m=document.cookie.match(/(?:^|;\\s*)currency=(GBP|EUR|USD)/);
var c=m&&m[1];
if(!c){
var l=(navigator.language||"").toLowerCase();
if(l.indexOf("en-us")===0||l.indexOf("en-ca")===0){c="USD";}
else if(l.indexOf("en-gb")===0){c="GBP";}
else{
var tz="";try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||"";}catch(e){}
var eu=["Europe/Berlin","Europe/Paris","Europe/Madrid","Europe/Rome","Europe/Amsterdam","Europe/Brussels","Europe/Vienna","Europe/Warsaw","Europe/Prague","Europe/Budapest","Europe/Bucharest","Europe/Sofia","Europe/Athens","Europe/Helsinki","Europe/Stockholm","Europe/Oslo","Europe/Copenhagen","Europe/Dublin","Europe/Lisbon","Europe/Riga","Europe/Tallinn","Europe/Vilnius","Europe/Ljubljana","Europe/Bratislava","Europe/Zagreb","Europe/Nicosia","Europe/Luxembourg","Europe/Malta"];
if(eu.indexOf(tz)>-1){c="EUR";}
else if(tz.indexOf("America/")===0){c="USD";}
}
}
document.documentElement.setAttribute("data-currency",c||"GBP");
}catch(e){document.documentElement.setAttribute("data-currency","GBP");}})();`;

export default function CurrencyScript() {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
