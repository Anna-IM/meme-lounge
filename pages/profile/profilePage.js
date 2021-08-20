import { allMyMemeTemplate } from "./profileTemplate.js";
import authService from "./../../services/authService.js";
import memeService from "./../../services/memeService.js";

async function getView(context) {
    let user = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let gender = localStorage.getItem("gender");
    let id = authService.getUserId();
    let myMeme = await memeService.getMyMemes(id);
    let templateResult = allMyMemeTemplate(myMeme, email, user, gender);
    context.renderView(templateResult);
}

export default {
    getView
}