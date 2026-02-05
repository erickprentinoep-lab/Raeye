document.addEventListener("DOMContentLoaded",function(){
var f=document.getElementById("resvForm");
if(!f)return;
f.addEventListener("submit",function(e){
e.preventDefault();
var name=document.getElementById("name").value.trim();
var phone=document.getElementById("phone").value.trim();
var date=document.getElementById("date").value;
var time=document.getElementById("time").value;
var guests=document.getElementById("guests").value;
var area=document.getElementById("area").value;
var table=document.getElementById("table").value;
var note=document.getElementById("note").value.trim();
var lines=[
"Reservasi Raeye Medan",
"Nama: "+name,
"No WA: "+(phone||"-"),
"Tanggal: "+date,
"Waktu: "+time,
"Tamu: "+guests,
"Area: "+area,
"Tipe Meja: "+table,
"Catatan: "+(note||"-")
];
var text=encodeURIComponent(lines.join("\n"));
var number=(window.config&&config.WHATSAPP_NUMBER)?config.WHATSAPP_NUMBER:"6281234567890";
var url="https://wa.me/"+number+"?text="+text;
window.open(url,"_blank");
});
});