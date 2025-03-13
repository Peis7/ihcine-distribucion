import { Device } from "../enums/Device";


export const getDeviceType = (): Device => {
    const width = window.innerWidth;
  
    if (width <= 768) {
      return Device.MOBILE; 
    } else if (width <= 1024) {
      return Device.TABLET; 
    } else {
      return Device.DESKTOP;
    }
  }
  
  export const isMobile = (): boolean => {
    return getDeviceType() == Device.MOBILE
  }
  