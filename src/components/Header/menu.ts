import { MenuItemDef } from "../../interfaces/menuItemDef";

const _menu: Array<MenuItemDef> = [
    { label: "Proyectos", link: "/proyectos" },
    { label: "Eventos", link: "/eventos" },
    { label: "Logs", link: "/logs" },
  ];
  
  const menu = _menu.map((item, index) => ({
    ...item,
    key: index + 1, 
  }));
  
  export default menu;
    