    let a =prompt('write a');
        defX=10;
        defY=10;
        square.style.top = defX+"px";
        square.style.left= defY+"px";
        function corner(){
           var ret = Math.tan(a/180*Math.PI)
             return ret;
        }
        function move() {
            defX+=1;
            defY+=1*corner();
            square.style.top = defX+"px";
            square.style.left= defY+"px";
            console.log(defX)
            if(defX === 837){
                clearInterval(d);
            }
                 
        }
       var d =  setInterval(move,16)
    