let btns = Array.from(document.getElementsByClassName('btn'));

btns.map((btn) => {
    btn.addEventListener('click', (e) => {
        if (btn.value === 'C') {
            document.querySelector('#display-text').textContent = '';
        } else if (btn.value === 'Del') {
            document.querySelector('#display-text').textContent = document
                .querySelector('.display')
                .textContent.trim()
                .slice(
                    -document.querySelector('.display').textContent.trim()
                        .length,
                    -1
                );
        } else if (btn.value === 'equals') {
            solution = eval(
                document.querySelector('.display').textContent.trim()
            );
            document.querySelector('#display-text').textContent = solution;
        } else {
            document.querySelector('#display-text').textContent +=
                e.target.innerText;
        }
    });
});
