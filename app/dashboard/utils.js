
'use client';

import { useCookies } from 'next-client-cookies';
function getCookieValue(){

  const cookies = useCookies();
  const token=cookies.get('token');
  return token
}