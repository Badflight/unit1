class CustomSprite extends Phaser.Physics.Arcade.Sprite {
    /**
     * @param {Phaser.Scene} scene
     * @param {number} x
     * @param {number} y
     * @param {string} texture
     */
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

}


class BulletTest extends Phaser.Scene {
    /** @type {CustomSprite}*/
    player
    /**@type {Bullets} */
    bullets
    /**@type {Phaser.Physics.Arcade.Group} */
    enemy
    /**@type {Phaser.Types.Input.keyboard.KeyCodes} */
    cursors
    // /**@type {Phaser.Physics.Arcade.Group} */
    // projectile
    /**@type {Phaser.Cameras.Scene2D.Camera} */
    camera
    constructor() {
        super('Scene1')
    }
    preload() {
        this.load.image('player', 'assets/Player.png')
        this.load.image('enemy', 'assets/enemy.png')
        this.load.image('bullet', 'assets/Projectile.png')
        this.cursors = this.input.keyboard.createCursorKeys()

    }
    create() {
        //this.createBaseLayer()
        this.bullets = new Bullets(this)
        this.player = new CustomSprite(this, 100, 100, 'player')
        this.player.setCollideWorldBounds(true)
        //this.bullets.setCollideWorldBounds(true)
        //this.player.setSize(24,24)
        this.input.on('pointerdown', (pointer) => {
            console.log('click')
            this.bullets.fireBullet(this.player.x, this.player.y, this.player.flipX)
        })
    }
    update() {
        if (this.cursors.right.isDown) {
            this.player.setVelocityX(100)
            this.player.flipX = false
            console.log(this.player.flipX)
        }
        else if (this.cursors.left.isDown) {
            this.player.setVelocityX(-100)
            this.player.flipX = true
            console.log(this.player.flipX)
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(100)

        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-100)

        }
        else {
            this.player.setVelocityX(0)
            this.player.setVelocityY(0)
        }
        console.log(Between(this.player.x,this.player.y,this.bullets.x,this.bullets.y))
    }
    /** @type {CustomSprite}*/
    player
    /**@type {Bullets} */
    bullets
    getDist(player,bullet){
        return player - bullet
    }

}
console.log('Base Scene')