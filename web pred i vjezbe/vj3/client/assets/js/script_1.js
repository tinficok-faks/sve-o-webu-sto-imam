const getBio = (callb) => {
    $.get("/bio", (res) => {
        callb(res.bio);
    });
};

const renderBio = (bio) => {
    // ovo je syntax-sugar
    const {img, firstName, lastName, about} = bio;
    // za ovo
    /*
    const img = bio.img;
    const about = bio.about;
    ...
    */

    let profile = $("#profile");

    let avatar = $(`<div class='profile-container'></div>`);
    avatar.css({
        "background": `url(./assets/imgs/${img})`,
        "background-position": "center",
        "background-size": "cover"
    });

    let h = $(`
        <h1>
            ${firstName} ${lastName}
        </h1>
    `);

    let p = $(`<p>${about}</p>`)
    p.css({ 'line-height': "20px" });

    profile.append(avatar);
    profile.append(h);
    profile.append(p);

};

// ovo ovdje je legitimno, ali nije ono što nam treba
// getBio(console.log);
getBio(renderBio);