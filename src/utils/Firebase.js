import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage';

export class Firebase {

    constructor() {

        this.init();

    }

    init(){

        if (!window._initializedFirebase) {

            firebase.initializeApp({
                apiKey: "AIzaSyDaRXQlhbBVU8NJcJdTyp8iiI8PyX8UuaY",
                authDomain: "whatsapp-clone-13b91.firebaseapp.com",
                projectId: "whatsapp-clone-13b91",
                storageBucket: "gs://whatsapp-clone-13b91.appspot.com",
                messagingSenderId: "401031557577",
                appId: "1:401031557577:web:e615e409900b2b99dff818"
            });

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            window._initializedFirebase = true;

        }   

    }

    initAuth(){

        return new Promise((resolve, reject)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function (result) {

                let token = result.credential.accessToken;
                let user = result.user;

                resolve(user, token);

            }).catch(function (error) {

                reject(error);

            });

        });        

    }

    static db(){

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }

}