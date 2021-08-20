import authService from "./../../services/authService.js";
import { registerTemplate } from "./registerTemplate.js";

async function submitHandler(context, e) {
    e.preventDefault();

    try{
        let form = e.currentTarget;
        let formData = new FormData(form);
        console.log(form)
        let user = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            repeatPassword: formData.get("repeatPass"),
            gender: formData.get("gender"),
        }
        if (user.username === "" || user.email === "" || user.password === "" || user.gender === "" || user.repeatPassword === ""){
            window.alert("All fields are required!");
        } else {
            let registerResponse = await authService.register(user);
            context.page.redirect('/all-memes');
        }
    } catch(err) {
        window.alert(err);
    }
    
}

async function getView(context) {
    //partial application to access the context and avoid nesting submitHandler
    let boundSubmitHandler = submitHandler.bind(null, context);
    let form = {
        submitHandler: boundSubmitHandler,
    }
    let templateResult = registerTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView,
}