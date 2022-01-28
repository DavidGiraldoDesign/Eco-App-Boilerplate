let view = {
    bodyElement: document.querySelector('#Root'),

    getButton: function () {
        //Create a HTML element
        let div = document.createElement('div');
        div.className = "controls-container"
        //fill it up
        div.innerHTML = `
            <button id="up-btn">Up!</button>`;

        let btn = div.querySelector('#up-btn');

        btn.addEventListener('click', (e) => {
            console.log("Hello from view");
            this.onButton();
        });

        return div;

    },

    render: function () {
        this.bodyElement.appendChild(this.getButton());
    }

};