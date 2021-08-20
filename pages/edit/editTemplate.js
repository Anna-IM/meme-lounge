import { html } from "./../../../node_modules/lit-html/lit-html.js";

export let editTemplate = (form) => html`
 <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
        <section id="edit-meme">
            <form id="edit-form" @submit=${form.submitHandler}>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${form.values.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${form.values.description}>
                    </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${form.values.img}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>`;