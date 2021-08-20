import { memeTemplate } from "./dashboardTemplate.js";
import memeService from "./../../services/memeService.js";

async function getView(context) {
    let allMemes = await memeService.getAll();
    let templateResult = memeTemplate(allMemes);
    context.renderView(templateResult);
}

export default {
    getView
}