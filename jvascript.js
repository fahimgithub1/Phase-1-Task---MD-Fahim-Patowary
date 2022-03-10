function Claculatesyeas(){
    var oyers = document.getElementById("valuyearsold").value;
    var omounths = document.getElementById("valumounthold").value;
    var odayse = document.getElementById("evaludaysold").value;

    
    var nyers = document.getElementById("valuyearsnew").value;
    var nmounths = document.getElementById("valumounthnew").value;
    var ndayse = document.getElementById("evaludaysnew").value;

    var yer = (oyers + 1) - nyers;

    console.log(yer);
    document.getElementById("result").innerHTML = +yer;
}


function claculatesyeas(){
    let oyears = document.getElementById("valuyearsold").value;
    var omounths = document.getElementById("valumounthold").value;
    var odayse = document.getElementById("evaludaysold").value;

    
    var nyears = document.getElementById("valuyearsnew").value;
    var nmounths = document.getElementById("valumounthnew").value;
    var ndayse = document.getElementById("evaludaysnew").value;

    if ( oyears > 0 &&  omounths > 0  &&  odayse > 0 ){
        // years calculation 
        var yer = nyears - oyears;
        var yer1 = yer - 1;

        // mounth calculation 
        var calolmou = 12 - omounths;
        var totalmoun = (+calolmou) + (+nmounths) - 1;

        // days calculation
        if(omounths % 2 != 0){
            var da1 = 31 - (odayse);
            var dar = (+da1) + (+ndayse);
        }else{
            var da1 = 30 - (odayse);
            var dar = (+da1) + (+ndayse);
        }

        if(dar >= 30 && omounths % 2 != 0){
            totalmoun = 1 + (+totalmoun);
            dar = (+dar) - 31;
        }else if(dar >= 30){
            totalmoun = 1 + (+totalmoun);
            dar = (+dar) - 30;
        }

        // for 12 mounths
        if(totalmoun == 12){
            var yer1 = (+yer1) + 1;
            var totalmoun = 12 - (+totalmoun);
        }

        alert("present yages : "+ yer1 + "years  " + totalmoun + "mounth  " + dar + "days") ;
    }
    else{
        alert("!!!!!!Enter value!!!!!");
    }
    

    // console.log(+yer);
    // document.getElementById("result").innerHTML = "present yages : "+ yer1 + "years  " + totalmoun + "mounth  " + dar + "days";
}

