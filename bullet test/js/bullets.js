class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet')
    }
    fire(x, y, flipX) {
        this.body.reset(x, y)
        console.log(flipX)
        if (flipX === false) {
            this.setActive(true)
            this.setVisible(true)
            this.setVelocityX(600)
            console.log('right')
        }
        
        else if(flipX === true){
            console.log('left')
            this.setActive(true)
            this.setVisible(true)
            this.setVelocityX(-600)
        }
        

    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta)
        if (this.x >= 1000) {
            this.setActive(false)
            this.setVisible(false)
        }
        else if (this.x<= 0){
            this.setActive(false)
            this.setVisible(false)
        }
    }
}
class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene)
        this.createMultiple({
            frameQuantity: 2,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }
    fireBullet(x, y,flipX) {
        let bullet = this.getFirstDead(false)
        //console.log(flipX)
        if (bullet) {
            bullet.fire(x, y, flipX)
            //console.log('bang')
        }
    }
}