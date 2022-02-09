import Index from "./views/Index.js";
import Profile from "./views/admin/Profile.js";
import Login from "./views/auth/Login.js";
import PasswordReset from "./views/auth/PasswordReset";
import Reset from "./views/auth/Reset";
import Icons from "./views/examples/Icons.js";

import ListCategories from "./views/articles/category/";
import editCategory from "./views/articles/category/editCategory";
import addCategory from "./views/articles/category/addCategory";

import ListArticles from "./views/articles/article";
import addArticle from "./views/articles/article/AddArticle";
import editArticle from "./views/articles/article/editArticle";

import ListSponsors from "./views/sponsors/index";
import editSponsor from "./views/sponsors/editSponsor";
import CreateSponsor from "./views/sponsors/addSponsor";

import CreateResource from "./views/resources/resource/addResource";
import ListResource from "./views/resources/resource/index";
import editResource from "./views/resources/resource/editResource";

import addCategoryResource from "./views/resources/category/addCategoryResource";
import editCategoryResource from "./views/resources/category/editCategoryResource";
import ListResourceCategories from "./views/resources/category/index";

import ListAgent from "./views/agents/index";
import uploadAgent from "./views/agents/uploadAgent";

import ListUsers from "./views/users/index";

import ListQuestions from "./views/questions/index";
import ListQuestionCategories from "./views/questions/category/index";
import addCategoryQuestion from "./views/questions/category/addCategory";
import EditCategoryQuestion from "./views/questions/category/editCategory";
//Faq
import ListFaq from "./views/faq/index";
import addFaq from "./views/faq/addFaq";
import EditFaq from "./views/faq/editFaq";

import Claims from "./views/claim/index"
import Listing from "./views/listing-request/index"
import Config from "./views/config/index";
import Log from "./views/logs/index";
import Subscribers from "./views/subscribers/index";
import Offshore from "./views/offshore/index";
import Contact from "./views/contact/index";
import License from "./views/license-verification/index";

//Staffs and Roles
import AddRole from "./views/config/roles/addRole";
import EditRole from "./views/config/roles/editRole";

import AddStaff from "./views/config/staffs/addStaff";
import EditStaff from "./views/config/staffs/editStaff";

//Payment
import Payment from "./views/payment/index";

//Partners
import ListPartner from "./views/partners/index";

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
    path: "/article/category/edit/:id",
    name: "Edit Article Categories",
    icon: "ni ni-tv-2 text-primary", 
    component: editCategory,
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
    path: "/sponsor/edit/:id",
    name: "Edit Sponsor",
    icon: "ni ni-tv-2 text-primary",
    component: editSponsor,
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
    path: "/resource/edit/:id",
    name: "Edit Resource",
    icon: "ni ni-tv-2 text-primary", 
    component: editResource,
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
    path: "/resource/category/edit/:id",
    name: "Edit Resource Category",
    icon: "ni ni-tv-2 text-primary", 
    component: editCategoryResource,
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
    path: "/partners",
    name: "List Partners",
    icon: "ni ni-tv-2 text-primary",
    component: ListPartner,
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
  {
    path: "/question/category/edit/:id",
    name: "Create Queestion Category",
    icon: "ni ni-tv-2 text-primary", 
    component: EditCategoryQuestion,
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
    path: "/subscribers",
    name: "Subscription Mailing List",
    icon: "ni ni-tv-2 text-primary", 
    component: Subscribers,
    layout: "/admin"
  },
  {
    path: "/offshore-team-list",
    name: "Offshore Team List",
    icon: "ni ni-tv-2 text-primary", 
    component: Offshore,
    layout: "/admin"
  },
  {
    path: "/contacts",
    name: "Contact List",
    icon: "ni ni-tv-2 text-primary", 
    component: Contact,
    layout: "/admin"
  },
  {
    path: "/licence-verification",
    name: "License Verification List",
    icon: "ni ni-tv-2 text-primary", 
    component: License,
    layout: "/admin"
  },
  //Listing request
  {
    path: "/listing-requests",
    name: "Agent Listing Request",
    icon: "ni ni-tv-2 text-primary", 
    component: Listing,
    layout: "/admin"
  },
  //Payments
  {
    path: "/payments",
    name: "All Payments",
    icon: "ni ni-tv-2 text-primary", 
    component: Payment,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  //Staffs and Roles
  {
    path: "/roles/create",
    name: "Add Role",
    icon: "ni ni-key-25 text-info",
    component: AddRole,
    layout: "/admin"
  },
  {
    path: "/role/edit/:id",
    name: "Edit Role",
    icon: "ni ni-tv-2 text-primary", 
    component: EditRole,
    layout: "/admin"
  },

  //Staff
  {
    path: "/staffs/create",
    name: "Add Staff",
    icon: "ni ni-key-25 text-info",
    component: AddStaff,
    layout: "/admin"
  },
  {
    path: "/staff/edit/:id",
    name: "Edit Staff",
    icon: "ni ni-tv-2 text-primary", 
    component: EditStaff,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/password/reset",
    name: "Password Reset",
    icon: "ni ni-key-25 text-info",
    component: PasswordReset,
    layout: "/auth"
  },
  {
    path: "/reset/:token",
    name: "Password Reset",
    icon: "ni ni-key-25 text-info",
    component: Reset,
    layout: "/auth"
  },

];
export default routes;
