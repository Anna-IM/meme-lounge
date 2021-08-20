import { html } from "./../../../node_modules/lit-html/lit-html.js";

export let notificationsTemplate = (errorMsg) => html `
        <div id="errorBox" class="notification">
                <span>${errorMsg}</span>
        </div>`;