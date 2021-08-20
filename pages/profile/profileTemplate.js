import { html } from "./../../../node_modules/lit-html/lit-html.js";

export let myMemeTemplate = (meme) => html`
   <!-- Display : All created memes by this user (If any) --> 
              <div class="user-meme">
                    <p class="user-meme-title">${meme.title}</p>
                    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
                    <a class="button" href="/details/${meme._id}">Details</a>
                </div>`;

export let allMyMemeTemplate = (allMemes, email, username, gender) => html`
<!-- Profile Page ( Only for logged users ) -->
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${gender === 'male' 
            ? "/images/male.png"
            : "/images/female.png"}>
        <div class="user-content">
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>My memes count: ${allMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
    ${allMemes.length > 0
        ? allMemes.map(f => myMemeTemplate(f))
        : html`<p class="no-memes">No memes in database.</p>`}
  </div>
</section>`;