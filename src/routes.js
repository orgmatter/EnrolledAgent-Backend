import Index from "./views/Index.js";
import Profile from "./views/admin/Profile.js";
import Login from "./views/auth/Login.js";
import Icons from "./views/examples/Icons.js";

import ListCategories from "./views/articles/category";
import addCategory from "./views/articles/category/addCategory";

import ListArticles from "./views/articles/article";
import addArticle from "./views/articles/article/AddArticle";
import editArticle from "./views/articles/article/editArticle";

import ListSponsors from "./views/sponsors/index";
import CreateSponsor from "./views/sponsors/addSponsor";

import CreateResource from "./views/resources/resource/addResource";
import ListResource from "./views/resources/resource/index";

import addCategoryResource from "./views/resources/category/addCategoryResource";
import ListResourceCategories from "./views/resources/category/index";

import ListAgent from "./views/agents/index";
import uploadAgent from "./views/agents/uploadAgent";

import ListUsers from "./views/users/index";

import ListQuestions from "./views/questions/index";
import ListQuestionCategories from "./views/questions/category/index";
import addCategoryQuestion from "./views/questions/category/addCategory";

//Faq
import ListFaq from "./views/faq/index";
import addFaq from "./views/faq/addFaq";
import EditFaq from "./views/faq/editFaq";

import Claims from "./views/claim/index"
import Config from "./views/config/index";
import Log from "./views/logs/index";
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
    path: "/articles",
    name: "News & Articles",
    icon: "ni ni-tv-2 text-primary", 
    component: ListArticles,
    layout: "/admin"
  },
  {
    path: "/article/create",
    name: "Create New Article",
    icon: "ni ni-tv-2 text-primary", 
    component: addArticle,
    layout: "/admin"
  },
  {
    path: "/article/edit/:id",
    name: "Edit Article",
    icon: "ni ni-tv-2 text-primary", 
    component: editArticle,
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
    path: "/users",
    name: "List Users",
    icon: "ni ni-tv-2 text-primary",
    component: ListUsers,
    layout: "/admin"
  },
  {
    path: "/questions",
    name: "List Questions",
    icon: "ni ni-tv-2 text-primary",
    component: ListQuestions,
    layout: "/admin"
  },
  {
    path: "/agent/upload",
    name: "Upload Agents",
    icon: "ni ni-tv-2 text-primary",
    component: uploadAgent,
    layout: "/admin"
  },
  {
    path: "/question/categories",
    name: "Question Categories",
    icon: "ni ni-tv-2 text-primary", 
    component: ListQuestionCategories,
    layout: "/admin"
  },
  {
    path: "/question/category/create",
    name: "Create Queestion Category",
    icon: "ni ni-tv-2 text-primary", 
    component: addCategoryQuestion,
    layout: "/admin"
  },
  //Claim Listing
  {
    path: "/account-listing-claims",
    name: "Account Listing Claims",
    icon: "ni ni-tv-2 text-primary", 
    component: Claims,
    layout: "/admin"
  },
  //FAQ
  {
    path: "/faqs",
    name: "Faqs",
    icon: "ni ni-tv-2 text-primary", 
    component: ListFaq,
    layout: "/admin"
  },
  {
    path: "/faq/create",
    name: "Faqs",
    icon: "ni ni-tv-2 text-primary", 
    component: addFaq,
    layout: "/admin"
  },
  {
    path: "/faq/edit/:id",
    name: "Edit Article",
    icon: "ni ni-tv-2 text-primary", 
    component: EditFaq,
    layout: "/admin"
  },
  //Admin Configuration
  {
    path: "/configuration",
    name: "Admin Configuration",
    icon: "ni ni-tv-2 text-primary", 
    component: Config,
    layout: "/admin"
  },
  {
    path: "/logs",
    name: "User Logs",
    icon: "ni ni-tv-2 text-primary", 
    component: Log,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
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
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
