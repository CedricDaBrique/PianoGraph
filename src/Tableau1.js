/**
 *
 *
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets olalamamamihamatata
     */
    preload(){
        //dp plan
        this.load.image('nuage', 'assets/level/assets/nuage.png');
        this.load.image('mount1', 'assets/level/assets/mountain-1.png');
        this.load.image('mount2', 'assets/level/assets/mountain-2.png');


        //second plan)
        this.load.image('colline', 'assets/level/assets/background.png');
        this.load.image('grass', 'assets/level/assets/grass.png');


        // premier plan
        this.load.image('abmillieu', 'assets/level/assets/arbrecentral.png');
        this.load.image('sol', 'assets/level/assets/ground.png');
        this.load.image('bosse', 'assets/level/assets/groundboss.png');





    }

    /**
     *
     *
     *
     */
    create() {

        let nuage=this.add.sprite(0,0, 'nuage').setOrigin(0,0);
        this.nuage = this.add.sprite(0, 0, 'nuage').setOrigin(0, 0);


        //----------------------------------
        this.mount1=this.add.image(-250,-80, 'mount1').setOrigin(0,0);
        this.mount1.scale = 0.5
        this.mount2=this.add.image(300,-50, 'mount2').setOrigin(0,0);
        this.mount2.scale = 0.5





        this.grasss=this.add.image(-45,100, 'grass').setOrigin(0,0);
        this.grasss.scale = 0.6

        this.colline=this.add.image(0,-50, 'colline').setOrigin(0,0);
        this.colline.scale = 0.5

        //-------------- --------------------


        //-------------ground premier plan---------------------------

        this.arbremillieu=this.add.image(-20,-15, 'abmillieu').setOrigin(0,0);
        this.arbremillieu.scale = 0.5


        let bosse=this.add.image(-500,-170, 'bosse').setOrigin(0,0);




        let sol=this.add.image(-400,0, 'sol').setOrigin(0,0);
        let sol2=this.add.image(-800,0, 'sol').setOrigin(0,0);








        this.initKeyboard();
    }
        initKeyboard(){
            let me=this;
            this.input.keyboard.on('keydown', function(kevent)
            {
                switch (kevent.keyCode)
                {
                    case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                        me.speed=1;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.speed=-1;
                        break;
                }
            });
            this.input.keyboard.on('keyup', function(kevent)
            {
                switch (kevent.keyCode)
                {
                    case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.speed=0;
                        break;
                }
            });
        }

     update(){
    }
}


