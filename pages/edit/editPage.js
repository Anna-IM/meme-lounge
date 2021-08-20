import { editTemplate } from "./editTemplate.js";
import memeService from "./../../services/memeService.js";

let form = undefined;
async function submitHandler(context, id, e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let invalidFields = "All fields are required!";

    let title = formData.get("title");
    let description = formData.get("description");
    let imageUrl = formData.get("imageUrl");

    if (title === "" || description === "" || imageUrl === "") {
        window.alert(invalidFields);
    }

    let editedMeme = {
        title,
        description,
        imageUrl
    }
    let result = await memeService.update(editedMeme, id);
    context.page.redirect(`/details/${id}`);
}

async function getView(context) {
    let id = context.params.id;
    let memeDetails = await memeService.get(id);
    //partial application to access the context and avoid nesting submitHandler
    let boundSubmitHandler = submitHandler.bind(null, context, id);
    form = {
        submitHandler: boundSubmitHandler,
        values: {
            title: memeDetails.title,
            description: memeDetails.description,
            img: memeDetails.imageUrl,
        }
    }
    console.log(form)
    let templateResult = editTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}