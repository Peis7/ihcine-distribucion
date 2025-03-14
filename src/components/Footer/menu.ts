import { MenuItemDef } from "../../interfaces/menuItemDef";

const _menu: Array<MenuItemDef> = [
    { label: "Catálogo", full: true,  link: "https://drive.google.com/file/d/1UfIxY_A0_zx_er6BDUaKJz5yywc5OZ5T/view?usp=drive_link" },
    { label: "CINELAB", full: true,link: "https://youtu.be/Eh0hmQHX488" },
    { label: `Boletín "Fuera de Campo"`, full: true, link: "https://drive.google.com/file/d/15xH20p8hF_UH2GPNFllKjTZ3j6DIr_Js/view?usp=drive_link" },
    { label: "Cine desde Nuestros Pueblos", full: true,link: "https://youtu.be/yjY3qSVcAmk" },
  ];
  
  const menu = _menu.map((item, index) => ({
    ...item,
    key: index + 1, 
  }));
  
  export default menu;
    