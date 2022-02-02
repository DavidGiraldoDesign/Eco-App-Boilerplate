(function controller (view){

    view.onButton = () => {
        console.log("Hello from controler");
        bird.flyUpward();
    }

    view.render();
    console.log('Hello from controller');

})(view);