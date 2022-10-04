import axios from "axios";
import * as API from '../common/Api'
import { err } from "react-native-svg/lib/typescript/xml";
import { workout } from '../common/Api'
class Service {
    static getApi(uri, params) {
        return new Promise(function (resolve, reject) {
            console.log('workout api ' + uri)
            axios.get(uri)
                .then(res => {
                    {
                        resolve(res.data);
                    }
                }).catch(error => error)
        });


    }

    static postApi(uri, params) {
        console.log('postApi ' + uri)
        return new Promise(function (resolve, reject) {
            axios.post(uri, params,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => {
                    { 
                        resolve(res.data);
                    }
                }).catch(error => error)
        });
    }

}

export default Service