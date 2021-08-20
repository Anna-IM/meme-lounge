async function logoutUser(context, e) {
    e.preventDefault();
    // console.log("test");
    await authService.logout(user);
    context.page.redirect("/home");
}

export default {
    logoutUser
}