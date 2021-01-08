import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
import Maps from "./views/examples/Maps.js";
import Register from "./views/examples/Register.js";
import Login from "./views/auth/Login.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";
import ListCategories from "./views/articles/category";
import ListSponsors from "./views/sponsors/index";
import CreateSponsor from "./views/sponsors/addSponsor";
import CreateResource from "./views/resources/resource/addResource";
import addCategory from "./views/articles/category/addCategory";
import ListResource from "./views/resources/resource/index";
import addCategoryResource from "./views/resources/category/addCategoryResource";
import ListResourceCategories from "./views/resources/category/index";
import ListAgent from "./views/agents/index";
import uploadAgent from "./views/agents/uploadAgent";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/article/category/create",
    name: "Create Article Category",
    icon: "ni ni-tv-2 text-primary", 
    component: addCategory,
    layout: "/admin"
  },
  {
    path: "/article/categories",
    name: "Article Categories",
    icon: "ni ni-tv-2 text-primary", 
    component: ListCategories,
    layout: "/admin"
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    icon: "ni ni-tv-2 text-primary",
    component: ListSponsors,
    layout: "/admin"
  },
  {
    path: "/sponsor/create",
    name: "Create Sponsor",
    icon: "ni ni-tv-2 text-primary",
    component: CreateSponsor,
    layout: "/admin"
  },
  {
    path: "/resource/create",
    name: "Create Resource",
    icon: "ni ni-tv-2 text-primary",
    component: CreateResource,
    layout: "/admin"
  },
  {
    path: "/resource/category/create",
    name: "Create Resource Category",
    icon: "ni ni-tv-2 text-primary", 
    component: addCategoryResource,
    layout: "/admin"
  },
  {
    path: "/resource/categories",
    name: "Resource Categories",
    icon: "ni ni-tv-2 text-primary", 
    component: ListResourceCategories,
    layout: "/admin"
  },
  {
    path: "/resources",
    name: "List Resource",
    icon: "ni ni-tv-2 text-primary",
    component: ListResource,
    layout: "/admin"
  },
  {
    path: "/agents",
    name: "List Agents",
    icon: "ni ni-tv-2 text-primary",
    component: ListAgent,
    layout: "/admin"
  },
  {
    path: "/agent/upload",
    name: "Upload Agents",
    icon: "ni ni-tv-2 text-primary",
    component: uploadAgent,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
