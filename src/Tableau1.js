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
        this.load.image('cloud2', 'assets/level/characters/cloud/cloud-2.png');
        this.load.image('grey', 'assets/level/assets/fondgris.png');


        //second plan)
        this.load.image('colline', 'assets/level/assets/background.png');
        this.load.image('grass', 'assets/level/assets/grass.png');
        this.load.image('tree', 'assets/level/assets/tree.png');


        // premier plan
        this.load.image('abmillieu', 'assets/level/assets/arbrecentral.png');
        this.load.image('sol', 'assets/level/assets/ground.png');
        this.load.image('bosse', 'assets/level/assets/groundboss.png');



      // On charge les animations
        for(let i=1;i<=4;i++){
            this.load.image('vulture'+i, 'assets/level/characters/Vulture/idle-'+ i + '.png');
        }
        for(let i=1;i<=3;i++){
            this.load.image('male'+i, 'assets/level/characters/c2/humain/male/h-'+ i + '.png');
        }
        for(let i=1;i<=3;i++) {
            this.load.image('female' + i, 'assets/level/characters/c2/humain/female2/f-' + i + '.png');
        }
        for(let i=1;i<=3;i++) {
            this.load.image('sun' + i, 'assets/level/characters/sun/sun-' + i + '.png');
        }
        for(let i=1;i<=3;i++) {
            this.load.image('rain' + i, 'assets/level/characters/rain/rain-' + i + '.png');
        }
        for(let i=1;i<=4;i++) {
            this.load.image('snake' + i, 'assets/level/characters/snake/snake-' + i + '.png');
        }
        for(let i=1;i<=6;i++) {
            this.load.image('bird' + i, 'assets/level/characters/oiseau/ow-' + i + '.png');
        }
        for(let i=1;i<=6;i++) {
            this.load.image('fox' + i, 'assets/level/characters/fox/foxwalk/fw-' + i + '.png');
        }
        for(let i=1;i<=8;i++) {
            this.load.image('apple' + i, 'assets/level/apple/fall-' + i + '.png');
        }
        for(let i=1;i<=10;i++) {
            this.load.image('deer' + i, 'assets/level/characters/deer/deer-' + i + '.png');
        }




    }
    /**
     *
     *
     *
     */
    create() {
        //Fond

        this.nuage = this.add.sprite(0, 0, 'nuage').setOrigin(0, 0);
        this.nuage.setVisible(true)
        this.grey = this.add.sprite(0, 0, 'grey').setOrigin(0, 0);
        this.grey.setVisible(false)
        this.sun = this.add.sprite(0, -200, 'sun').setOrigin(0,0);

        this.anims.create({
            key: 'sun',
            frames: this.getFrames('sun', 3),
            frameRate: 2,
            repeat: -1
        });
        this.sun.setVisible(false)
        this.sun.play('sun');
        this.sun.scale = 0.5

        //Montagne
        this.mount1=this.add.image(-250,-80, 'mount1').setOrigin(0,0);
        this.mount1.scale = 0.5
        this.mount2=this.add.image(300,-50, 'mount2').setOrigin(0,0);
        this.mount2.scale = 0.5
        this.cloud2=this.add.image(-250,280, 'cloud2').setOrigin(0,0);




        //Second plan
        this.grasss=this.add.image(0,-140, 'grass').setOrigin(0,0);
        this.grasss.scale = 0.6
        this.colline=this.add.image(0,-50, 'colline').setOrigin(0,0);
        this.colline.scale = 0.5
        let bosse=this.add.image(-500,-170, 'bosse').setOrigin(0,0);
        let sol=this.add.image(-400,0, 'sol').setOrigin(0,0);
        let sol2=this.add.image(-800,0, 'sol').setOrigin(0,0);


       //Placement du renard pour qu'il soit derrière l'arbre
        this.fox = this.add.sprite(500, 100, 'fox').setOrigin(0,0);
        this.anims.create({
            key: 'fox',
            frames: this.getFrames('fox', 6),
            frameRate: 5,
            repeat: -1
        });
        this.fox.setVisible(false)
        this.fox.play('fox');
        this.fox.scale = 0.5



        //Arbres qui seront attribués aux touches
        this.tree1=this.add.image(-80,80, 'tree').setOrigin(0,0);
        this.tree1.scale = 0.3
        this.tree1.setVisible(false)
        this.tree2=this.add.image(550,30, 'tree').setOrigin(0,0);
        this.tree2.scale = 0.4
        this.tree2.setVisible(false)
        this.tree3=this.add.image(400,60, 'tree').setOrigin(0,0);
        this.tree3.scale = 0.5
        this.tree3.setVisible(false)
        this.tree4=this.add.image(-380,60, 'tree').setOrigin(0,0);
        this.tree4.scale = 0.5
        this.tree4.setVisible(false)
        this.tree5=this.add.image(450,80, 'tree').setOrigin(0,0);
        this.tree5.scale = 0.3
        this.tree5.setVisible(false)
        this.tree6=this.add.image(-150,10, 'tree').setOrigin(0,0);
        this.tree6.scale = 0.5
        this.tree6.setVisible(false)
        this.tree7=this.add.image(150,10, 'tree').setOrigin(0,0);
        this.tree7.scale = 0.5
        this.tree7.setVisible(false)
        this.bird = this.add.sprite(-50, -200, 'bird').setOrigin(0,0);
        this.anims.create({
            key: 'bird',
            frames: this.getFrames('bird', 6),
            frameRate: 3,
            repeat: 1


        });
        this.bird.setVisible(false)
        this.bird.scale = 0.7
        this.bird.play('bird');
        this.tweens.add({
            targets: this.bird,
            x: 2000,
            duration: 5000,
            yoyo: true,
            delay: 0,
            repeat: 0,
            flipX:false
        });
        this.arbremillieu=this.add.image(-20,-15, 'abmillieu').setOrigin(0,0);
        this.arbremillieu.scale = 0.5

        this.cloud=this.add.image(250, -10, 'cloud2').setOrigin(0,0);
        this.cloud.scale = 0.5
        this.cloud.setVisible(false)
        this.cloud2=this.add.image(-550, -10, 'cloud2').setOrigin(0,0);
        this.cloud2.scale = 0.5
        this.cloud2.setVisible(false)



        //On créer le reste des animations
        this.snake = this.add.sprite(-380, 100, 'snake').setOrigin(0,0);
        this.anims.create({
            key: 'snake',
            frames: this.getFrames('snake', 4),
            frameRate: 2,
            repeat: -1
        });
        this.snake.setVisible(false)
        this.snake.play('snake');
        this.snake.scale = 0.5
        this.tweens.add({
            targets: this.snake,
            x: -100,
            duration: 5000,
            ease: Phaser.Math.Easing.Sine.InOut,
            yoyo: true,
            delay: 0,
            repeat: -1,
            flipX:true
        });

        this.male = this.add.sprite(-380, -140, 'male').setOrigin(0,0);
        this.anims.create({
            key: 'male',
            frames: this.getFrames('male', 3),
            frameRate: 2,
            repeat: -1
        });
        this.male.setVisible(false)
        this.male.play('male');
        this.male.scale = 1
        this.tweens.add({
            targets: this.male,
            x: 10,
            duration: 5000,
            ease: Phaser.Math.Easing.Sine.InOut,
            yoyo: true,
            delay: 0,
            repeat: -1,
            flipX:true
        });


        this.apple = this.add.sprite(300, 200, 'apple').setOrigin(0,0);
        this.anims.create({
            key: 'apple',
            frames: this.getFrames('apple', 8),
            frameRate: 6,
            repeat: 0
        });
        this.apple.setVisible(false)
        this.apple.play('apple');
        this.apple.scale = 0.2


        this.deer = this.add.sprite(-500, -200, 'deer1').setOrigin(0,0);
        this.anims.create({
            key: 'deer',
            frames: this.getFrames('deer', 10),
            frameRate: 7,
            repeat: -1
        });
        this.deer.play('deer');
        this.deer.scale = 1
        this.deer.visible=false


        this.female = this.add.sprite(-380, 50, 'female').setOrigin(0,0);
        this.anims.create({
            key: 'female',
            frames: this.getFrames('female', 3),
            frameRate: 3,
            repeat: -1
        });
        this.female.setVisible(false)
        this.female.play('female');
        this.female.scale = 0.7
        this.tweens.add({
            targets: this.female,
            x: 100,
            duration: 5000,
            yoyo: true,
            delay: 0,
            repeat: -1,
            flipX:true
        });


        this.rain = this.add.sprite(0, 0, 'rain').setOrigin(0,0);
        this.anims.create({
            key: 'rain',
            frames: this.getFrames('rain', 3),
            frameRate: 5,
            repeat: -1
        });
        this.rain.setVisible(false)
        this.rain.scale = 0.7
        this.rain.play('rain');

        this.vulture = this.add.sprite(-40, -50, 'vulture').setOrigin(0,0);
        this.anims.create({
            key: 'vulture',
            frames: this.getFrames('vulture', 4),
            frameRate: 8,
            repeat: -1
        });
        this.vulture.setVisible(false)
        this.vulture.play('vulture');
        this.vulture.scale = 0.4







        this.initKeyboard()


    }
        getFrames(prefix,length){
            let frames=[];
            for (let i=1;i<=length;i++){
                frames.push({key: prefix+i});
            }
            return frames;
    }

    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.tree1.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.tree2.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.tree3.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.tree4.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.tree5.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.tree6.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.tree7.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.sun.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.grey.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.cloud.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.cloud2.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.snake.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.male.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.female.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.apple.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.rain.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.vulture.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
                    me.deer.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
                    me.fox.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.bird.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.sun.visible=false
                    break;
            }
        });

        }

     update(){
    }
}


