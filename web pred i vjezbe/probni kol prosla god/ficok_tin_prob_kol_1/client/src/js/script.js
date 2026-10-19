import $ from "jquery";

const items_per_page = 4;
let current_page = 0;

const getTodos = (callb) => {
    $.get(`/api/todos/${items_per_page}/${current_page}`).then(callb);
}

const toggle = (id) => {
    $.ajax({
        url: `/api/todos/${id}`,
        type: "PUT",
        data: { id },
        success: (res) => {
            console.log(res);
            getTodos(renderTodos);
        }
    });
}

window.toggle = toggle;

const del = (id) => {
    $.ajax({
        url: `/api/todos/${id}`,
        type: "DELETE",
        data: { id },
        success: (res) => {
            console.log(res);
            getTodos(renderTodos);
        }
    });
}

window.del = del;

const setPagination = (i) => {
    current_page = i;
    getTodos(renderTodos);
}

window.setPagination = setPagination;

const renderPagination = (length) => {
    let pagination = $("#pagination");
    pagination.empty();

    for (let i = 0; i < Math.ceil(length / items_per_page); ++i) {
        let additionalClass = "";
        if (i === current_page)
            additionalClass = "active";

        pagination.append(`
            <li class="page-item ${additionalClass}"
                onclick=setPagination(${i})
            >
                <a class="page-link">
                    ${ i + 1 }
                </a>
            </li>    
        `);

    }


    

}

const renderTodos = (res) => {

    let { length, todos } = res;

    if (current_page * items_per_page >= length)
        setPagination(current_page - 1);

    renderPagination(length);

    let row = $("#cards-row");
    row.empty();
    
    for (let todo of todos) {
        row.append(`
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${todo.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Date: ${todo.date}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                    Done: <span onclick='toggle("${todo.id}")'> ${todo.done ? '<i class="bi bi-check-lg text-success"></i>' : '<i class="bi bi-x-lg text-danger"></i>'} </span>
                </h6>
                <a onclick='del("${todo.id}")' class="card-link text-decoration-none text-danger">
                    <i class="bi bi-x-circle"></i>
                </a>
                </div>
            </div>        
        </div>

        `);
    }

}

$(() => {
    getTodos(renderTodos);
});