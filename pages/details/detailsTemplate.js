import { html } from "./../../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (detailsMeme, isOwner, deleteMeme) => html`
<!-- Details Meme Page (for guests and logged users) -->
        <section id="meme-details">
            <h1>${detailsMeme.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${detailsMeme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${detailsMeme.description}</p>

                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    ${isOwner 
                    ? html `
                    <a class="button warning" href="/edit/${detailsMeme._id}">Edit</a>
                    <button class="button danger" @click=${deleteMeme}>Delete</button>`
                    : ""} 
                
                </div>
            </div>
        </section>`;