// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginUrl: 'http://3.18.201.167:6090/authenticate',
  brandUrl:'http://3.18.201.167:6090/devicePe-ws/v1/brands/find/all',
  brandSaveUrl:'http://3.18.201.167:6090/devicePe-ws/v1/brands/save',
  brandUpdateUrl:'http://3.18.201.167:6090/devicePe-ws/v1/brands/update',
  accessoriesUrl:'http://3.18.201.167:6090/devicePe-ws/v1/accessories/find/all',
  accessoriesUpdateUrl:'http://3.18.201.167:6090/devicePe-ws/v1/accessories/update',
  modelsUrl:'http://3.18.201.167:6090/devicePe-ws/v1/models/find/all',
  modelsUpdateUrl:'http://3.18.201.167:6090/devicePe-ws/v1/models/update',
  varientsUrl:'http://3.18.201.167:6090/devicePe-ws/v1/varients/find/all',
  varientsUpdateUrl:'http://3.18.201.167:6090/devicePe-ws/v1/varients/update',
  varientsCheckListUrl:'http://3.18.201.167:6090/devicePe-ws/v1/varients/checklst/find/all',
  varientsCheckListUpdateUrl:'http://3.18.201.167:6090/devicePe-ws/v1/varients/checklst/update',
  bulkUploadUrl:'http://3.18.201.167:6090/devicePe-ws/v1/devices/import',
  otpValidateUrl:'http://3.18.201.167:6090/notification-ws/v1/otp/validate',
  registerUrl:'http://3.18.201.167:6090/user-ws/v1/register',
  resendOtpUrl:'http://3.18.201.167:6090/notification-ws/v1/otp/resend',
  fileUploadUrl:'http://3.18.201.167:6090/fileuploader-ws/v1/upload'
};  

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
