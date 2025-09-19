// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,


  //apiUrl: 'https://laritechfarmsbackendnode-production.up.railway.app/api',
  apiUrl: 'http://localhost:3001/api',

  // firebase: {
  //   apiKey: "***************************************",
  //   authDomain: "************************",
  //   projectId: "***********************************",
  //   storageBucket: "************************",
  //   messagingSenderId: "*********************",
  //   appId: "*******************************************",
  //   measurementId: "*********************"
  // },
  firebase: {
    apiKey: "AIzaSyDZtT9KF1lngCvtsyIGW4T532ojKJD9BIo",
    authDomain: "fl-farms-gl.firebaseapp.com",
    projectId: "fl-farms-gl",
    storageBucket: "fl-farms-gl.firebasestorage.app",
    messagingSenderId: "210556388433",
    appId: "1:210556388433:web:be15faf02a843f70cf2470",
    measurementId: "*********************"
  },



};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
