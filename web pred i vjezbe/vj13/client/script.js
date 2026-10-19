const login = async () => {
    try {
        const res = await $.post("/api/login", { username: "tficok" });
        return res;
    } catch (e) {
        console.log(e);
        return;
    }
}

const save_token = (token) => {
    window.localStorage.setItem("myToken", token);
}

const get_token = () => {
    return window.localStorage.getItem("myToken");
}

const logout = () => {
    window.localStorage.removeItem("myToken");
}

const confidential_data = async (token) => {
    $.ajax({
        url: "api/confidential",
        method: "GET",
        data: {},
        headers: {
            "authorization": token
        }
    })
}

$(async () => {
    const res = await login();

    if (res) {
        save_token(res.token);
        const token = get_token();
        const payload = JSON.parse(window.atob(token.split(".")[1]));

        console.log("Hello ", payload.username);

        const cr = await confidential_data(token);
        console.log(cr);
    }

    //console.log(res);
});