window.onload = function () {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/index.min.js';
    script.onload = () => {
      const app = new PIXI.Application({
        view: document.createElement("canvas"),
        autoStart: true,
        transparent: true,
        width: 400,
        height: 600,
      });
      document.body.appendChild(app.view);
      PIXI.live2d.Live2DModel.from("https://cdn.jsdelivr.net/gh/Yvelle/live2d-plugin/model/miku/miku.model3.json").then(model => {
        model.scale.set(0.1);
        model.x = 100;
        model.y = 300;
        app.stage.addChild(model);
      });
    };
    document.body.appendChild(script);
  };
  