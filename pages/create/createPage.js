import { createTemplate } from "./createTemplate.js";
import memeService from "./../../services/memeService.js";

let form = undefined;
async function submitHandler(context, e) {
    e.preventDefault();
    try {
        let formData = new FormData(e.target);
        let invalidFields = "All fields are required!";
        let isInvalid = false;
    
        let title = formData.get("title");
        let description = formData.get("description");
        let imageUrl = formData.get("imageUrl");
    
        if (title === "" || description === "" || imageUrl === "") {
            window.alert(invalidFields);
            isInvalid = true;
        }
        if (isInvalid === false) {
            let newMeme = {
                title,
                description,
                imageUrl
            }
            let result = await memeService.create(newMeme);
            context.page.redirect("/all-memes");
        }
    } catch (err) {
        window.alert(err);
    }
}

async function getView(context) {
    //partial application to access the context and avoid nesting submitHandler
    let boundSubmitHandler = submitHandler.bind(null, context);
    form = {
        submitHandler: boundSubmitHandler
    }

    let templateResult = createTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}