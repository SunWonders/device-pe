// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',
  brandUrl:'http://34.70.99.100:6090/devicePe-ws/v1/brands/find/all',
  brandSaveUrl:'http://34.70.99.100:6090/devicePe-ws/v1/brands/save',
  brandUpdateUrl:'http://34.70.99.100:6090/devicePe-ws/v1/brands/update',
  accessoriesUrl:'http://34.70.99.100:6090/devicePe-ws/v1/accessories/find/all',
  accessoriesUpdateUrl:'http://34.70.99.100:6090/devicePe-ws/v1/accessories/update',
  modelsUrl:'http://34.70.99.100:6090/devicePe-ws/v1/models/find/all',
  modelsUpdateUrl:'http://34.70.99.100:6090/devicePe-ws/v1/models/update',
  varientsUrl:'http://34.70.99.100:6090/devicePe-ws/v1/varients/find/all',
  varientsUpdateUrl:'http://34.70.99.100:6090/devicePe-ws/v1/varients/update',
  varientsCheckListUrl:'http://34.70.99.100:6090/devicePe-ws/v1/varients/checklst/find/all',
  varientsCheckListUpdateUrl:'http://34.70.99.100:6090/devicePe-ws/v1/varients/checklst/update'
};  

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
