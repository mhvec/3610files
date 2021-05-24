var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 850,
    _parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload (){
    this.load.image('cakes','assets/cakes.png');
    this.load.image('strawberry','assets/strawberry.png');
}

function create ()
{   this.add.image(0,0,'cakes');
    var strawberry = this.add.sprite(200, 100, 'strawberry');
    var strawberry2 = this.add.sprite(300, 100, 'strawberry');
    var strawberry3 = this.add.sprite(400, 100, 'strawberry');
    strawberry.setInteractive();
    strawberry2.setInteractive();
    strawberry3.setInteractive();

    this.input.setDraggable(strawberry);
    this.input.setDraggable(strawberry2);
    this.input.setDraggable(strawberry3);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}
