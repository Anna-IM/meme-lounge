import { detailsTemplate } from "./detailsTemplate.js";
import memeService from "./../../services/memeService.js";
import authService from "./../../services/authService.js";

async function getView(context) {
    let id = context.params.id;
    let detailsMeme = await memeService.get(id);
    let boundDeleteHandler = deleteMeme.bind(null, context, id);
    // detailsMeme = changeUrlImage(detailsMeme);
    let isOwner = authService.getUserId() === detailsMeme._ownerId;
    let templateResult = detailsTemplate(detailsMeme, isOwner, boundDeleteHandler);
    context.renderView(templateResult);
}
// function changeUrlImage(detailsMeme) {
//     detailsMeme.img = `./.${detailsMeme.img}`;
//     return detailsMeme;
// }
async function deleteMeme(context, id) {
    let confirmed = confirm("Are you sure you want to delete the meme?")
    if (confirmed) {
        await memeService.deleteItem(id);
        context.page.redirect('/all-memes');
    }
}

export default {
    getView
}