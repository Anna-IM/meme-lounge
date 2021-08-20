import { allMemesTemplate } from "./allMemesTemplate.js";
import memeService from "./../../services/memeService.js";

async function getView(context) {
    let allMemes = await memeService.getAll();
    console.log(allMemes)
    let templateResult = allMemesTemplate(allMemes);
    context.renderView(templateResult);
}

export default {
    getView
}