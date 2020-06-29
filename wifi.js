const SSID = $network.wifi.ssid;
const proxywifi = ["zhang_5G","zhang"];
let res = proxywifi.some(val => val === SSID);
if (res) {
$surge.setOutboundMode("direct");
notify(1);
} else {
$surge.setOutboundMode("rule");
notify(0);
}

function notify(mode) {
setTimeout(function(){
!!mode ? $notification.post("Wi-Fi助手","切换直连模式",`your SSID is ${SSID}`) : $notification.post("Wi-Fi assistant","switch to proxy mode", `${!!SSID ?  "your SSID is " + SSID : "you are using cellular"}`)
}) }
$done();
