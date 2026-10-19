import $ from "jquery";

const redirect = () => {
    window.location.href = "./index.html"
}

const add_todo = (todo) => {
    $.ajax({
        url: `/api/todos/`,
        type: "POST",
        data: todo,
        success: (res) => {
            console.log(res);
            redirect();
        }
    });
}

$("#new-form").on("submit", (event) => {
    event.preventDefault();
    const data = $("#new-form").serializeArray();
    const title = data[0].value;
    const date = data[1].value;
    const done = data.length === 3;
    const new_todo = { title, date, done };

    add_todo(new_todo);

});
