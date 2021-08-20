import page from "./../node_modules/page/page.mjs";
import nav from "./nav/nav.js";
import allMemesPage from "./pages/allMemes/allMemesPage.js";
import createPage from "./pages/create/createPage.js";
import dashboardPage from "./pages/dashboard/dashboardPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import editPage from "./pages/edit/editPage.js";
import loginPage from "./pages/login/loginPage.js";
import profilePage from "./pages/profile/profilePage.js";
import registerPage from "./pages/register/registerPage.js";
import renderingMiddleware from "./rendering/renderingMiddleware.js";

let appContainer = document.getElementById("viewContainer");
let navContainer = document.getElementById("navigation");
renderingMiddleware.initialize(appContainer, navContainer);

page("/index.html", "/home");
page("/", "/home");

page("/home", renderingMiddleware.decorateContext, nav.getView, dashboardPage.getView);
page("/login", renderingMiddleware.decorateContext, nav.getView, loginPage.getView);
page("/register", renderingMiddleware.decorateContext, nav.getView, registerPage.getView);
page("/all-memes", renderingMiddleware.decorateContext, nav.getView, allMemesPage.getView);
page("/create", renderingMiddleware.decorateContext, nav.getView, createPage.getView);
page("/details/:id", renderingMiddleware.decorateContext, nav.getView, detailsPage.getView);
page("/edit/:id", renderingMiddleware.decorateContext, nav.getView, editPage.getView);
page("/profile", renderingMiddleware.decorateContext, nav.getView, profilePage.getView);

page.start();