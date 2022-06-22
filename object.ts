class Kripto {       
    btc():void {   
        console.log("Bitcoin")   
}   
}   
class ethe extends Kripto {   
    eth():void {   
        console.log("etherium")   
}   
}  
class sol extends ethe{   
    sola():void {   
        console.log("solana")   
    }  
}
class binance extends sol{   
    bnb():void {   
        console.log("binance")   
    }  
}
class lite extends binance {   
    lte():void {   
        console.log("litecoin")   
    }  
}  
let obj = new lite();   
obj.btc();  
obj.eth();  
obj.sola()  
obj.bnb();
obj.lte();