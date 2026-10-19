import "../scss/styles.scss"

import * as bootstrap from "bootstrap";

// async function getTodos(callback) {
//     const res = await fetch("/todos");
//     const data = await res.json();
//     callback(data);
// }

// function renderTableRows(todos) {
//     const tbody = $("#todo-body");
//     tbody.html("");

//     todos.forEach(t => {
//         const icon = t.completed
//             ? "check-circle-fill"
//             : "x-circle-fill";

//         tbody.append(`
//             <tr>
//                 <td>${t.description}</td>
//                 <td>${prettyDate(t.datetime)}</td>
//                 <td class="text-center">
//                     <i class="bi bi-${icon}"></i>
//                 </td>
//             </tr>
//         `);
//     });
// }

// $(document).ready(() => {
//     getTodos(renderTableRows);
// });

const prettyDate = (dateStr) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
        timeStyle: "short"
    });
    return formatter.format(new Date(dateStr));
};

function getTodos(callback) {
    $.get("/todos", function(data) {
        callback(data);
    });
}

function renderTableRows(todos) {
    const tbody = $("#todo-body");
    tbody.empty();

    todos.forEach(t => {
        const icon = t.completed
            ? `<i class="bi bi-check-circle-fill text-success"></i>`
            : `<i class="bi bi-x-circle-fill text-danger"></i>`;

        const row = `
            <tr>
                <td>${t.description}</td>
                <td>${prettyDate(t.datetime)}</td>
                <td class="text-center">${icon}</td>
            </tr>
        `;
        tbody.append(row);
    });
}

$(document).ready(() => {
    getTodos(renderTableRows);
});
