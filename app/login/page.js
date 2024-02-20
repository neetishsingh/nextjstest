'use client';

import { RedirectType, useSearchParams } from 'next/navigation'

import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'

import { useParams } from 'next/navigation'
import { useCookies } from 'next-client-cookies';

import { KiteTicker, Tick,KiteConnect } from 'kiteconnect-ts';
export default function LoginScreen(){
    
  //const [url, setUrls] = useState("")

  
const searchParams = useSearchParams()
    //router.query;
    //console.log(searchParams)
    if(searchParams.has('request_token')){
        
         console.log('written')
        //console.log(searchParams.get('request_token'))

    
       

    }else{
        useEffect(() => {
            console.log("Performing Logon")
            const kc = new KiteConnect({
                api_key: process.env.apiKey,
              });
    
            window.location.assign(kc.getLoginURL())    
            
            // Client-side-only code
        })

       
          
        
    }
    return (<div className='bg-white'>Redirecting you to Login</div>);
}