import authService from "../services/authService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";
import page from "./../node_modules/page/page.mjs";

async function logoutUser(user) {
    // console.log("test");
    await authService.logout(user);
    page.redirect("/home");
}

export let navTemplate = (navInfo) => html `
            <a href="/all-memes">All Memes</a>
            ${navInfo.isLoggedIn
            ? loggedControls(navInfo)
            : guestControls()}`;

        let loggedControls = (navInfo) => html`
        <!-- Logged users -->
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${navInfo.email}</span>
                    <a href="/profile">My Profile</a>
                    <a href="javascript:void(0)" @click=${logoutUser}>Logout</a>
                </div>
            </div>`;

        let guestControls = (navInfo) => html`
        <!-- Guest users -->
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/home">Home Page</a>
            </div>`;