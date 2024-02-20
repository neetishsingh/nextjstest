
import { KiteConnect } from 'kiteconnect-ts';
import { getCookies } from 'next-client-cookies/server';
import { KiteTicker, Tick } from 'kiteconnect-ts';
import Candle from '@/app/dashboard/Candle'

export default async function Dahsboard({searchParams}){
  console.log(searchParams)
  //candletime='3 min'
  var isfirstcandlecreated=0
  //const cookies = getCookies();
  const candle=new Candle();
  //const token=cookies.get('token');
  const token=searchParams["request_token"]
    const kc = new KiteConnect({
        api_key: process.env.apiKey,
      });
      
     //constaccesstok=getCookieValue()
    try {
        const { access_token } = await kc.generateSession(
            token,
          '0rxctel6v2u43lclrbj5ydakn6sj7inr'
        );
        console.log('Access token:', access_token);
        const ticker = new KiteTicker({
            api_key: process.env.apiKey,
            access_token: access_token,
          });
           
          ticker.on('ticks', (ticks) => {
            console.log(isfirstcandlecreated)
            if(isfirstcandlecreated==0){
             candle.updateInitializedCandle(ticks[0])   
             //candle.replaceCandle(ticks[0]);
             console.log("New Candle Created")
             isfirstcandlecreated=1;
            }
            if(candle.updateDataBasedonTicker(ticks)!=1){
                console.log("new Data created")
                console.log(candle)
                //candle=new Candle(ticks[0])
            }else{
                candle.updateDataBasedonTicker(ticks)
            }
            //console.log('Ticks', ticks);
          });
           
          ticker.on('connect', () => {

            const items = [11740418];
            ticker.subscribe(items);
            ticker.setMode('full',[11740418])
          });
           
          ticker.connect();  
      } catch (error) {
        console.error('Error while generating session', error);
        //process.exit(1);
      }  

      
    //const ws = new WebSocket("wss://ws.kite.trade?api_key=xxx&access_token=xxxx");
    
    return(<div><p className='text-red'>Hi {token}</p></div>)

}