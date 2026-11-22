(function(){
var rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// hero name word reveal
var h=document.getElementById("name");
if(h&&!rm){var i=0;h.setAttribute("aria-label","Md. Mahi Shahriar Niloy");
h.innerHTML=[["Md.",0],["Mahi",0],["Shahriar",0],["Niloy",1]].map(function(w){return '<span class="w" aria-hidden="true"><i class="'+(w[1]?'grad':'')+'" style="--i:'+(i++)+'">'+w[0]+'</i></span>'}).join(" ");}
// typing
var roles=["Web Developer","Mobile App Developer","CSE Graduate","Aspiring Researcher"],t=document.getElementById("typed"),ri=0,ci=0,del=false;
function tick(){var r=roles[ri];if(rm){t.textContent=r;return}
ci+=del?-1:1;t.textContent=r.slice(0,ci);var d=del?40:80;
if(!del&&ci===r.length){del=true;d=1600}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}
setTimeout(tick,d)}
tick();
// skills
var sk=["Java","C","C++","Python","JavaScript","HTML5","CSS3","WordPress","MySQL","Flutter","Kali Linux","Linux","Windows","VS Code","PyCharm","VirtualBox","Photoshop","Illustrator","Excel","Word","PowerPoint"];
var tr=document.getElementById("track");
tr.innerHTML=sk.concat(sk).map(function(s){return "<span>"+s+"</span>"}).join("");
document.getElementById("skilllist").innerHTML=sk.map(function(s){return "<li>"+s+"</li>"}).join("");
// reveal + counters
function count(el){var n=parseFloat(el.dataset.n),d=parseInt(el.dataset.d||0,10);
if(rm){el.textContent=n.toFixed(d);return}var s=null;
function st(ts){s=s||ts;var p=Math.min((ts-s)/1400,1),e=1-Math.pow(1-p,3);el.textContent=(n*e).toFixed(d);if(p<1)requestAnimationFrame(st)}
requestAnimationFrame(st)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll("[data-n]").forEach(count);io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
// card spotlight
document.querySelectorAll(".card").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")})});
// progress bar + nav hide
var bar=document.getElementById("bar"),nav=document.getElementById("nav"),ly=0;
addEventListener("scroll",function(){var y=scrollY,m=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(m>0?y/m:0)+")";nav.classList.toggle("hide",y>ly&&y>300);ly=y},{passive:true});
})();
