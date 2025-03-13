import { MenuItemDef } from "../../interfaces/menuItemDef";

const _menu: Array<MenuItemDef> = [
    { label: "Catálogo", link: "/proyectos" },
    { label: "CINELAB", link: "/eventos" },
    { label: `Boletín "Fuera de Campo"`, link: "/logs" },
    { label: "Cine desde Nuestros Pueblos", link: "/logs" },
  ];
  
  const menu = _menu.map((item, index) => ({
    ...item,
    key: index + 1, 
  }));
  
  export default menu;
    