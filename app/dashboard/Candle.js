export default class Candle{
    constructor(){
        this.open=null;
        this.timeofopen=null;
        this.timeperiod=3;
        this.close=null;
        this.low=null;
        this.high=null;
        this.instrument_token=null;
        this.lasttick=null
        
    }
    updateInitializedCandle(currenttick){
        this.open=currenttick["last_price"];
        this.timeofopen=currenttick["last_trade_time"];
        this.timeperiod=3;
        this.close=currenttick["last_price"];
        this.low=currenttick["last_price"];
        this.high=currenttick["last_price"];
        this.instrument_token=currenttick["instrument_token"];
        this.lasttick=currenttick
        console.log(this.lasttick)
    }
    timeDifference(date1,date2) {
        //var date1=new Date()
        var difference = date1.getTime() - date2.getTime();
    
        var daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24
    
        var hoursDifference = Math.floor(difference/1000/60/60);
        difference -= hoursDifference*1000*60*60
    
        var minutesDifference = Math.floor(difference/1000/60);
        difference -= minutesDifference*1000*60
    
        var secondsDifference = Math.floor(difference/1000);
        var am=[daysDifference,hoursDifference,minutesDifference,secondsDifference]
         console.log(am)
        return am  
    }
    updateDataBasedonTicker(ticks){

        const tickvalue=ticks[0]
        const lasttick=this.lasttick


        //if timeperiod expired then create a blank candle and return
        if(this.timeDifference(new Date(tickvalue["last_trade_time"]),new Date(this.lasttick["last_trade_time"]))[2]>=3){
            //#logic to check if this is a fav candle
            console.log("3 min timechanges")
            //this.Candle(tickvalue)
            const pp=new Candle()
            pp.updateInitializedCandle(tickvalue)
            //this.replaceCandle(pp.updateInitializedCandle(tickvalue))
            
            return 0
        }else{
            this.close=tickvalue["last_price"]
            if(this.lasttick["last_price"]<=tickvalue["last_price"]){
                
                this.high=tickvalue["last_price"]
            }
            if(this.lasttick["last_price"]>=tickvalue["last_price"]){
                
                this.low=tickvalue["last_price"]
            }
            return 1;
        }


    

    }
    replaceCandle(tickvalue){
        const nn=new Candle(tickvalue);
        this.close=nn.close
        this.high=nn.high
        this.instrument_token=nn.instrument_token
        this.open=nn.open
        this.lasttick=nn.lasttick
        this.timeofopen=nn.timeofopen
        this.timeperiod=nn.timeperiod
        this.low=nn.low

      }
    
}