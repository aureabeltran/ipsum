import {  API_URL, API_HUBSPOT } from '../../env';
import axios from 'axios';

class RequestHttp
{

    requestPost(url, params){
        const headers = {'Content-Type': 'application/json' };
        const http =  axios.create({ baseURL: API_URL,  headers: headers  });
        return http.post( `${url}`, params ).then(resp => {
            return resp
        }).catch( error => { console.log(error); 
            return false
        });        
    }

    requestGet(url){
        const headers = {'Content-Type': 'application/json' };
        const http =  axios.create({ baseURL: API_URL,  headers: headers  });
        return http.get( `${url}` ).then(resp => {
            return resp
        }).catch( error => { console.log(error); 
            return false
        });        
    }

    requestPostHubspot(params){
        const headers = {'Content-Type': 'application/json' };
        const http =  axios.create({ headers: headers  });
        return http.post(API_HUBSPOT, params ).then(resp => {
            return resp
        }).catch( error => { console.log(error); 
            return false
        });        
    }

}

export const requestHttp = new RequestHttp();