$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
});

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);
    
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`)
    next_page.classList.add('is-active');
}

function nozzlemeter(){

    var A = Number(document.getElementById("nozA").value);
    var R = Number(document.getElementById("nozR").value);
    var k = Number(document.getElementById("nozk").value);
    var h1 = Number(document.getElementById("nozh1").value);
    var h2 = Number(document.getElementById("nozh2").value);
    var T = Number(document.getElementById("nozT").value);
    var x = h1 - h2;
    var h = 12.6*x;
    var Qth = (k*Math.sqrt(h));
    var Qact = (A*R)/T;
    var Cd = Qact/Qth;
    document.getElementById("nozx").value = String(x.toFixed(3));
    document.getElementById("nozh").value = String(h.toFixed(3));
    document.getElementById("nozQth").value = String(Qth.toFixed(3));
    document.getElementById("nozQact").value = String(Qact.toFixed(3));
    document.getElementById("nozCd").value = String(Cd.toFixed(3));

}

function venturimeter(){

    var A = Number(document.getElementById("venA").value);
    var R = Number(document.getElementById("venR").value);
    var k = Number(document.getElementById("venk").value);
    var h1 = Number(document.getElementById("venh1").value);
    var h2 = Number(document.getElementById("venh2").value);
    var T = Number(document.getElementById("venT").value);
    var x = h1 - h2;
    var h = 12.6*x;
    var Qth = (k*Math.sqrt(h));
    var Qact = (A*R)/T;
    var Cd = Qact/Qth;
    document.getElementById("venx").value = String(x.toFixed(3));
    document.getElementById("venh").value = String(h.toFixed(3));
    document.getElementById("venQth").value = String(Qth.toFixed(3));
    document.getElementById("venQact").value = String(Qact.toFixed(3));
    document.getElementById("venCd").value = String(Cd.toFixed(3));

}

function orificemeter(){

    var A = Number(document.getElementById("orfA").value);
    var R = Number(document.getElementById("orfR").value);
    var k = Number(document.getElementById("orfk").value);
    var h1 = Number(document.getElementById("orfh1").value);
    var h2 = Number(document.getElementById("orfh2").value);
    var T = Number(document.getElementById("orfT").value);
    var x = h1 - h2;
    var h = 12.6*x;
    var Qth = (k*Math.sqrt(h));
    var Qact = (A*R)/T;
    var Cd = Qact/Qth;
    document.getElementById("orfx").value = String(x.toFixed(3));
    document.getElementById("orfh").value = String(h.toFixed(3));
    document.getElementById("orfQth").value = String(Qth.toFixed(3));
    document.getElementById("orfQact").value = String(Qact.toFixed(3));
    document.getElementById("orfCd").value = String(Cd.toFixed(3));

}

function smallorificecv(){

    var x0 = Number(document.getElementById("sovx0").value);
    var y0 = Number(document.getElementById("sovy0").value);
    var h = Number(document.getElementById("sovh").value);
    var x1 = Number(document.getElementById("sovx1").value);
    var y1 = Number(document.getElementById("sovy1").value);
    var Cd = Number(document.getElementById("sovCd").value);
    var x = x1 - x0;
    var y = y0 - y1;
    var Cv = x/(2*Math.sqrt(y*h));
    var Cc = Cd/Cv;
    document.getElementById("sovx").value = String(x.toFixed(3));
    document.getElementById("sovy").value = String(y.toFixed(3));
    document.getElementById("sovCv").value = String(Cv.toFixed(3));
    document.getElementById("sovCc").value = String(Cc.toFixed(3));

}

function francisturbine(){

    var D = Number(document.getElementById("ftD").value);
    var d0 = Number(document.getElementById("ftd0").value);
    var d1 = Number(document.getElementById("ftd1").value);
    var Cd = Number(document.getElementById("ftCd").value);
    var T0 = Number(document.getElementById("ftT0").value);
    var P = Number(document.getElementById("ftP").value);
    var p1 = Number(document.getElementById("ftp1").value);
    var p2 = Number(document.getElementById("ftp2").value);
    var T1 = Number(document.getElementById("ftT1").value);
    var T2 = Number(document.getElementById("ftT2").value);
    var N = Number(document.getElementById("ftN").value);
    var H = 10*P;
    var h = 10*(p2-p1);
    var T = 9.81*(T1 - T2 + T0);
    var a0 = (Math.PI*Math.pow(d0,2))/4;
    var a1 = (Math.PI*Math.pow(d1,2))/4;
    var Q = (Cd*a0*a1*Math.sqrt(2*9.81*h))/(Math.sqrt(Math.pow(a0,2) - Math.pow(a1,2)));
    var Pi = 9.81*Q*H;
    var Po = (Math.PI*D*N*T)/60000;
    var n = (Po*100)/Pi;
    var Nu = N/Math.sqrt(H);
    var Pu = Po/Math.pow(H,3/2);
    var Qu = Q/Math.sqrt(H);
    var Ns = Nu*Math.sqrt(Pu);
    document.getElementById("ftH").value = String(H.toFixed(0));
    document.getElementById("fth").value = String(h.toFixed(0));
    document.getElementById("ftT").value = String(T.toFixed(2));
    document.getElementById("ftQ").value = String(Q.toFixed(7));
    document.getElementById("ftPi").value = String(Pi.toFixed(3));
    document.getElementById("ftPo").value = String(Po.toFixed(3));
    document.getElementById("ftn").value = String(n.toFixed(2));
    document.getElementById("ftNu").value = String(Nu.toFixed(2));
    document.getElementById("ftPu").value = String(Pu.toFixed(4));
    document.getElementById("ftQu").value = String(Qu.toFixed(6));
    document.getElementById("ftNs").value = String(Ns.toFixed(2));

}

function impactflat(){

    var A = Number(document.getElementById("ijfA").value);
    var R = Number(document.getElementById("ijfR").value);
    var d = Number(document.getElementById("ijfd").value);
    var w = Number(document.getElementById("ijfw").value);
    var T = Number(document.getElementById("ijfT").value);
    var a = (Math.PI*Math.pow(d,2))/4;
    var Qact = (A*R)/T;
    var v = Qact/a;
    var Fth = 1000*a*Math.pow(v,2);
    var Fact = 9.81*w;
    var Ci = Fact/Fth;
    document.getElementById("ijfQact").value = String(Qact.toFixed(6));
    document.getElementById("ijfv").value = String(v.toFixed(2));
    document.getElementById("ijfFth").value = String(Fth.toFixed(2));
    document.getElementById("ijfFact").value = String(Fact.toFixed(2));
    document.getElementById("ijfCi").value = String(Ci.toFixed(2));

}

function impacthemi(){

    var A = Number(document.getElementById("ijhA").value);
    var R = Number(document.getElementById("ijhR").value);
    var d = Number(document.getElementById("ijhd").value);
    var w = Number(document.getElementById("ijhw").value);
    var T = Number(document.getElementById("ijhT").value);
    var a = (Math.PI*Math.pow(d,2))/4;
    var Qact = (A*R)/T;
    var v = Qact/a;
    var Fth = 2*1000*a*Math.pow(v,2);
    var Fact = 9.81*w;
    var Ci = Fact/Fth;
    document.getElementById("ijhQact").value = String(Qact.toFixed(6));
    document.getElementById("ijhv").value = String(v.toFixed(2));
    document.getElementById("ijhFth").value = String(Fth.toFixed(2));
    document.getElementById("ijhFact").value = String(Fact.toFixed(2));
    document.getElementById("ijhCi").value = String(Ci.toFixed(2));

}

function pipefriction(){

    var l = Number(document.getElementById("pipl").value);
    var A = Number(document.getElementById("pipA").value);
    var R = Number(document.getElementById("pipR").value);
    var D = Number(document.getElementById("pipD").value);
    var L = Number(document.getElementById("pipL").value);
    var R = Number(document.getElementById("pipR").value);
    var T = Number(document.getElementById("pipT").value);
    var a = (Math.PI*Math.pow(D,2))/4;
    var x = (L-R)/100;
    var hf = 12.6*x;
    var Qact = (A*R)/T;
    var v = Qact/a;
    var f = (2*9.81*D*hf)/(l*Math.pow(v,2));
    document.getElementById("pipx").value = String(x.toFixed(2));
    document.getElementById("piphf").value = String(hf.toFixed(2));
    document.getElementById("pipQact").value = String(Qact.toFixed(6));
    document.getElementById("pipv").value = String(v.toFixed(2));
    document.getElementById("pipf").value = String(f.toFixed(3));

}

function centrifugalpump(){

    var EMC = Number(document.getElementById("cenEMC").value);
    var A = Number(document.getElementById("cenA").value);
    var R = Number(document.getElementById("cenR").value);
    var T = Number(document.getElementById("cenT").value);
    var N = Number(document.getElementById("cenN").value);
    var pd = Number(document.getElementById("cenpd").value);
    var ps = Number(document.getElementById("cenps").value);
    var n = Number(document.getElementById("cenn").value);
    var tn = Number(document.getElementById("centn").value);
    var Pi = (n*3600*1000)/(tn*EMC);
    var Ps = 0.8*Pi;
    var Q = (A*R)/T;
    var H = ((ps/1000)*13.6)+(pd*10)+2;
    var Po = 9810*Q*H;
    var np = (Po*100)/Ps;
    var no = (Po*100)/Pi;
    var Ns = (N*Math.sqrt(Q))/(Math.pow(H,3/4));
    document.getElementById("cenPi").value = String(Pi.toFixed(2));
    document.getElementById("cenPs").value = String(Ps.toFixed(2));
    document.getElementById("cenQ").value = String(Q.toFixed(6));
    document.getElementById("cenH").value = String(H.toFixed(3));
    document.getElementById("cenPo").value = String(Po.toFixed(3));
    document.getElementById("cennp").value = String(np.toFixed(2));
    document.getElementById("cenno").value = String(no.toFixed(2));
    document.getElementById("cenNs").value = String(Ns.toFixed(2));
}

function reciprocatingpump(){

    var EMC = Number(document.getElementById("recEMC").value);
    var A = Number(document.getElementById("recA").value);
    var L = Number(document.getElementById("recL").value);
    var D = Number(document.getElementById("recD").value);
    var R = Number(document.getElementById("recR").value);
    var T = Number(document.getElementById("recT").value);
    var N = Number(document.getElementById("recN").value);
    var pd = Number(document.getElementById("recpd").value);
    var ps = Number(document.getElementById("recps").value);
    var n = Number(document.getElementById("recn").value);
    var tn = Number(document.getElementById("rectn").value);
    var a = (Math.PI*Math.pow(D,2))/4;
    var V = a*L;
    var q = (V*N)/60;
    var Pi = (n*3600*1000)/(tn*EMC);
    var Ps = 0.8*Pi;
    var Q = (A*R)/T;
    var H = ((ps/1000)*13.6)+(pd*10)+2;
    var Po = 9810*Q*H;
    var np = (Po*100)/Ps;
    var no = (Po*100)/Pi;
    var slip =((q-Q)/q)*100;
    document.getElementById("recPi").value = String(Pi.toFixed(2));
    document.getElementById("recPs").value = String(Ps.toFixed(2));
    document.getElementById("recQ").value = String(Q.toFixed(6));
    document.getElementById("recH").value = String(H.toFixed(3));
    document.getElementById("recPo").value = String(Po.toFixed(3));
    document.getElementById("recnp").value = String(np.toFixed(2));
    document.getElementById("recno").value = String(no.toFixed(2));
    document.getElementById("recslip").value = String(slip.toFixed(2));
}

 function rugosity(){
    var L = Number(document.getElementById("rugL").value);
    var B = Number(document.getElementById("rugB").value);
    var D = Number(document.getElementById("rugD").value);
    var d1 = Number(document.getElementById("rugd1").value);
    var d2 = Number(document.getElementById("rugd2").value);
    var s = Number(document.getElementById("rugs").value);
    var Cd = Number(document.getElementById("rugCd").value);
    var p1 = Number(document.getElementById("rugp1").value);
    var p2 = Number(document.getElementById("rugp2").value);
    var b1 = Number(document.getElementById("rugb1").value);
    var w1 = Number(document.getElementById("rugw1").value);
    var b2 = Number(document.getElementById("rugb2").value);
    var w2 = Number(document.getElementById("rugw2").value);
    var b3 = Number(document.getElementById("rugb3").value);
    var w3 = Number(document.getElementById("rugw3").value);
    var x = p1-p2;
    var h = 10*x;
    var a1 = (Math.PI*Math.pow(d1,2))/4;
    var a2 = (Math.PI*Math.pow(d2,2))/4;
    var Q = (Cd*a1*a2*Math.sqrt(2*9.81*h))/(Math.sqrt(Math.pow(a1,2) - Math.pow(a2,2)));
    var y = ((w1-b1)+(w2-b2)+(w3-b3))/300;
    var A = B*y;
    var P = B+(2*y);
    var R = A/P;
    var v = Q/A;
    var C = v/Math.sqrt(R*s);
    var n = Math.pow(R,2/3)*Math.sqrt(s)/v;
    document.getElementById("rugx").value = String(x.toFixed(1));
    document.getElementById("rugh").value = String(h.toFixed(0));
    document.getElementById("rugy").value = String(y.toFixed(2));
    document.getElementById("rugQ").value = String(Q.toFixed(4));
    document.getElementById("rugA").value = String(A.toFixed(3));
    document.getElementById("rugP").value = String(P.toFixed(3));
    document.getElementById("rugR").value = String(R.toFixed(3));
    document.getElementById("rugv").value = String(v.toFixed(3));
    document.getElementById("rugC").value = String(C.toFixed(3));
    document.getElementById("rugn").value = String(n.toFixed(3));

}

function hydraulicjump(){

    var L = Number(document.getElementById("hjL").value);
    var B = Number(document.getElementById("hjB").value);
    var D = Number(document.getElementById("hjD").value);
    var d1 = Number(document.getElementById("hjd1").value);
    var d2 = Number(document.getElementById("hjd2").value);
    var Cd = Number(document.getElementById("hjCd").value);
    var p1 = Number(document.getElementById("hjp1").value);
    var p2 = Number(document.getElementById("hjp2").value);
    var b1 = Number(document.getElementById("hjb1").value);
    var w1 = Number(document.getElementById("hjw1").value);
    var b2 = Number(document.getElementById("hjb2").value);
    var w2 = Number(document.getElementById("hjw2").value);
    var x = p1-p2;
    var h = 10*x;
    var a1 = (Math.PI*Math.pow(d1,2))/4;
    var a2 = (Math.PI*Math.pow(d2,2))/4;
    var Q = (Cd*a1*a2*Math.sqrt(2*9.81*h))/(Math.sqrt(Math.pow(a1,2) - Math.pow(a2,2)));
    var y1 = (w1-b1)/100;
    var y2 = (w2-b2)/100;
    var v1 = Q/(B*y1);
    var v2 = Q/(B*y2);
    var E1 = y1+(Math.pow(v1,2)/(2*9.81));
    var E2 = y2+(Math.pow(v2,2)/(2*9.81));
    var E = E1-E2;
    var Hj = (y2-y1)*100;
    var Lj = (y2-y1)*600;
    var Fr = v1/Math.sqrt(9.81*y1);
    document.getElementById("hjx").value = String(x.toFixed(1));
    document.getElementById("hjh").value = String(h.toFixed(0));
    document.getElementById("hjy1").value = String(y1.toFixed(4));
    document.getElementById("hjy2").value = String(y2.toFixed(4));
    document.getElementById("hjQ").value = String(Q.toFixed(4));
    document.getElementById("hjv1").value = String(v1.toFixed(4));
    document.getElementById("hjv2").value = String(v2.toFixed(4));
    document.getElementById("hjE1").value = String(E1.toFixed(4));
    document.getElementById("hjE2").value = String(E2.toFixed(4));
    document.getElementById("hjE").value = String(E.toFixed(4));
    document.getElementById("hjHj").value = String(Hj.toFixed(4));
    document.getElementById("hjLj").value = String(Lj.toFixed(4));
    document.getElementById("hjFr").value = String(Fr.toFixed(4));

}

function smallorificecdc(){
    
    var d = Number(document.getElementById("sochd").value);
    var A = Number(document.getElementById("sochA").value);
    var R = Number(document.getElementById("sochR").value);
    var H = Number(document.getElementById("sochH").value);
    var T = Number(document.getElementById("sochT").value);
    var a = (Math.PI*Math.pow(d,2))/4;
    var Qth = a*Math.sqrt(2*981*H);
    var Qact = (A*R)/T;
    var Cd = Qact/Qth;
    document.getElementById("sochQth").value = String(Qth.toFixed(2));
    document.getElementById("sochQact").value = String(Qact.toFixed(2));
    document.getElementById("sochCd").value = String(Cd.toFixed(3));

}

function mouthpiecec(){

    var d = Number(document.getElementById("mpd").value);
    var A = Number(document.getElementById("mpA").value);
    var R = Number(document.getElementById("mpR").value);
    var H = Number(document.getElementById("mpH").value);
    var T = Number(document.getElementById("mpT").value);
    var a = (Math.PI*Math.pow(d,2))/4;
    var Qth = a*Math.sqrt(2*981*H);
    var Qact = (A*R)/T;
    var Cd = Qact/Qth;
    document.getElementById("mpQth").value = String(Qth.toFixed(2));
    document.getElementById("mpQact").value = String(Qact.toFixed(2));
    document.getElementById("mpCd").value = String(Cd.toFixed(3));

}

function smallorificecdv(){

    var d = Number(document.getElementById("socvd").value);
    var A = Number(document.getElementById("socvA").value);
    var H1 = Number(document.getElementById("socvH1").value);
    var H2 = Number(document.getElementById("socvH2").value);
    var T = Number(document.getElementById("socvT").value);
    var a = (Math.PI*Math.pow(d,2))/4;
    var Cd = (2*A*(Math.sqrt(H1)-Math.sqrt(H2)))/(T*a*Math.sqrt(2*981));
    document.getElementById("socvCd").value = String(Cd.toFixed(3));

}

function mouthpiecev(){

    var d = Number(document.getElementById("mpvd").value);
    var A = Number(document.getElementById("mpvA").value);
    var H1 = Number(document.getElementById("mpvH1").value);
    var H2 = Number(document.getElementById("mpvH2").value);
    var T = Number(document.getElementById("mpvT").value);
    var a = (Math.PI*Math.pow(d,2))/4;
    var Cd = (2*A*(Math.sqrt(H1)-Math.sqrt(H2)))/(T*a*Math.sqrt(2*981));
    document.getElementById("mpvCd").value = String(Cd.toFixed(3));

}

function metacentricheight(){

    var A = Number(document.getElementById("mhA").value);
    var H1 = Number(document.getElementById("mhH1").value);
    var H2 = Number(document.getElementById("mhH2").value);
    var w1 = Number(document.getElementById("mhw1").value);
    var w2 = Number(document.getElementById("mhw2").value);
    var x = Number(document.getElementById("mhx").value);
    var t = Number(document.getElementById("mht").value);
    var H = H2 - H1;
    var w1 = H*A;
    var w = w1+w2;
    var GM = (w2*x)/(w*Math.tan((t*Math.PI)/180));
    document.getElementById("mhH").value = String(H.toFixed(1));
    document.getElementById("mhw1").value = String(w1.toFixed(0));
    document.getElementById("mhw").value = String(w.toFixed(0));
    document.getElementById("mhGM").value = String(GM.toFixed(3));

}

function triangularnotch(){
    
    var A = Number(document.getElementById("tnA").value);
    var t = Number(document.getElementById("tnt").value);
    var T = Number(document.getElementById("tnT").value);
    var H1 = Number(document.getElementById("tnH1").value);
    var H2 = Number(document.getElementById("tnH2").value);
    var R = Number(document.getElementById("tnR").value);
    var H = H2-H1;
    var Qact = (A*R)/T;
    var Qth = (8*Math.sqrt(2*981)*Math.pow(H,5/2)*Math.tan((Math.PI*t)/360))/15;
    var Cd = Qact/Qth;
    document.getElementById("tnH").value = String(H.toFixed(2));
    document.getElementById("tnQact").value = String(Qact.toFixed(2));
    document.getElementById("tnQth").value = String(Qth.toFixed(2));
    document.getElementById("tnCd").value = String(Cd.toFixed(2));

}