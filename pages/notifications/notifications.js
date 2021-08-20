import { notificationsTemplate } from "./notificationsTemplate";

async function getView(context) {
    setTimeout(() => {
        let templateResult = notificationsTemplate();
        context.renderView(templateResult);
    } ,5000);
}

export default {
    getView
}