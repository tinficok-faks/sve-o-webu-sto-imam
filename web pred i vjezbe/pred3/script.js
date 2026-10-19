$(() => {
    $('#mybutton').on('click mouseover', (event) => {
        const type = event.type;
        const button = event.target;

        if (type === 'click'){
            button.innerText = 'Clicked';
        }
        else if (type === 'mouseover') {
            button.innerText = 'Hovered'
        }
    });

    $('#hide-p').click((event) => {
        let p = $('p').first();
        const is_hidden = p.attr('hidden');
        let btn = $(event.target);
        if (is_hidden) {
            p.attr('hidden', false);
            btn.text('Hide');
        } else {
            p.attr('hidden', true)
            btn.text('Show');
        }
    });

    $('#myInput').blur((event) => {
        const user_input = $(event.target).val();
        alert(user_input);
    });

    const fillListDinamically = () => {
        const arr = ["tomato", "gold", "deepbluesky"];

        let body = $('body').first();
        let ul = $(`
            <ul>
            </ul>`
        );

        for (let c of arr) {
            let li = $(`
                <li>
                    ${c}
                </li>`
            );
            li.attr("style",`color:${c}`);
            ul.append(li);
        }

        body.append(ul);
    }
    fillListDinamically();

    const ani = () => {
        let body = $('body'.first());
        let r1 = $(`<div></div>`).css({
            "width" : "150px",
            "height" : "150px",
            "background" : "deeppink"
        });
        body.append(r1, r2);

        const pulse = () => {
            r1.animate({"border-radius" : "50%"}, 500);
            setTimeout(() => {
                r1.animate({"border-radius": "0%"}, 500)
            }, 500);
        }

        pulse();
        setInterval(pulse, 1000);
    }
    ani();

});