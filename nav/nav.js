import authService from "../services/authService.js";
import { navTemplate } from "./navTemplate.js";

function getView(context, next) {
    // let user = context.user;
    // let email = user !== undefined ? user.email : undefined;
    let email = localStorage.getItem("email");

    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        email,
        currentPage: context.pathname
    }
    
    let templateResult = navTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}