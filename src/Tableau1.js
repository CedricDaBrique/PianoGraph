/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets olalamamamihamatata
     */
    preload(){
        //Arrière plan
        this.load.image('nuage', 'assets/level/assets/nuage.png');


        //bg 1 (gris légèrement flou)
        this.load.image('colline', 'assets/level/assets/background.png');


        // premier plan
        this.load.image('abmillieu', 'assets/level/assets/arbrecentral.png');
        this.load.image('sol', 'assets/level/assets/ground.png');
        this.load.image('bosse', 'assets/level/assets/groundboss.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle


        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent


        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple


    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create() {

        let nuage=this.add.sprite(0,0, 'nuage').setOrigin(0,0);
        this.nuage = this.add.sprite(0, 0, 'nuage').setOrigin(0, 0);


        //--------------background 2 (tout au fond et flou)--------------------
        this.colline=this.add.image(0,-50, 'colline').setOrigin(0,0);
        this.colline.scale = 0.5
        //--------------background 1 (gris) --------------------


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


