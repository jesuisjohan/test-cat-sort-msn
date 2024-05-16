"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[360],{75:function(t,i,n){n.r(i),n.d(i,{default:function(){return $}});var e=n(0),o=n(8),s=n(48),a=n(65),h=n(62),r=n(63),c=o.Z.DEFAULT,u=c.KEY,m=c.FRAME,d=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation1=void 0,this.animation2=void 0,this.run=function(){},this.stop=function(){var t;i.animation1.stop(),null==(t=i.animation2)||t.stop(),i.scene.alignObjects()},this.runStarTwinkle=function(){var t=new r.Z(i.scene),n=i.scene.source,e=n.x,o=n.y,s=n.displayWidth,a=n.displayHeight;t.run(1,e,o,s,a),i.animation2=t},this.scene=t,this.name="SlideToTopAnimation"},l=function(t){var i=this;this.scene=void 0,this.name=void 0,this.confetti1=void 0,this.confetti2=void 0,this.run=function(){},this.stop=function(){var t,n,e,o;null==(t=i.confetti1)||t.stop(),null==(n=i.confetti2)||n.stop(),null==(e=i.confetti1)||e.kill(),null==(o=i.confetti2)||o.kill()},this.scene=t,this.name="ConfettiSmallAnimation"},v=function(t){var i=this;this.scene=void 0,this.name=void 0,this.confetti=void 0,this.run=function(){},this.stop=function(){i.confetti.stop(),i.confetti.kill()},this.scene=t,this.name="ConfettiHexagonAnimation"},f=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.pause(),i.animation.kill()},this.scene=t,this.name="StarExplosive"},p=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.pause(),i.animation.kill()},this.scene=t,this.name="DiamondsExplosive"},g=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.pause(),i.animation.kill()},this.scene=t,this.name="SparksExplosive"},k=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.pause(),i.animation.kill()},this.scene=t,this.name="SparksIdle"},A=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.pause(),i.animation.kill()},this.scene=t,this.name="StarTwinkleUp"},x=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.pause(),i.animation.kill()},this.scene=t,this.name="StarWhiteTwinkle"},S=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.pause(),i.animation.kill()},this.scene=t,this.name="CometTwinkle"},b=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.kill(),i.scene.alignObjects()},this.scene=t,this.name="BigStarExplosive"},w=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.stop(),i.animation.kill()},this.scene=t,this.name="StarsFlyUp"},T=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.stop(),i.scene.alignObjects()},this.scene=t,this.name="ShakeHorizontal"},B=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation1=void 0,this.animation2=void 0,this.animation3=void 0,this.run=function(){},this.stop=function(){var t,n,e,o,s;null==(t=i.animation1)||t.stop(),null==(n=i.animation1)||n.kill(),null==(e=i.animation2)||e.stop(),null==(o=i.animation3)||o.pause(),null==(s=i.animation3)||s.kill()},this.runSparksExplosive=function(){var t=i.scene,n=new h.Z(t);n.explode(100,t.target.x,t.target.y,180),i.animation3=n},this.scene=t,this.name="CurveAnimation"},Z=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){var t=i.scene,n=t.make.image({key:u,frame:m.FX_CIRCLE_LIGHT});n.setWorldSize(75.5,75),n.setPosition(t.source.x,t.source.y);var e=1/GameCore.Utils.Image.getImageScale(),o=new a.Z({targets:[n],duration:800,ease:Phaser.Math.Easing.Cubic.Out,props:{scale:2*e,alpha:0},onStop:function(){n.kill()}});o.play(),i.animation=o},this.stop=function(){i.animation.stop()},this.scene=t,this.name="StarTouchAnimation"},y=function(t){this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){},this.scene=t,this.name="CoinsExplosive"},E=function(t){this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){},this.scene=t,this.name="CoinsExplosive2"},C=function(t){var i=this;this.scene=void 0,this.name=void 0,this.timer=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){var t;null==(t=i.timer)||t.remove()},this.scene=t,this.name="PaperFireworkExplosive"},P=function(t){this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){},this.scene=t,this.name="ConfettiSmallFly"},I=function(t){this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){},this.scene=t,this.name="PaperFireworksCelebration"},z=function(t){this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){},this.scene=t,this.name="StarsExplosiveSmall"},F=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.stop()},this.scene=t,this.name="FallingStarSparkle"},N=function(t){var i=this;this.scene=void 0,this.name=void 0,this.animation=void 0,this.run=function(){},this.stop=function(){i.animation.stop()},this.scene=t,this.name="StarSparkle"},O=n(64),D=n(16),K=n(66),L=n(2),j=function(t){function i(i,n){var e,o=n.key,s=n.frame,a=n.width,h=n.height,r=n.usePixelPerfect;(e=t.call(this,i,o,s,a,h,r)||this).paddingZone=void 0,e.showDebugZone=void 0,e.debugZone=void 0;var c=n.paddingZone,u=void 0===c?0:c,m=n.showDebugZone,d=void 0!==m&&m;return e.paddingZone=u,e.showDebugZone=d,e}return(0,e.Z)(i,t),i.prototype.updateSize=function(){t.prototype.updateSize.call(this);var i,n=this.width,e=this.height,o=n+this.paddingZone,s=e+this.paddingZone;(this.setSize(o,s),this.hitZone.setSize(o,s),this.showDebugZone)&&(null==(i=this.debugZone)||i.destroy(),this.debugZone=this.hitZone.drawDebugBox(10699282,.5),this.add(this.debugZone))},i}(n(51).Z),M=o.Z.DEFAULT,R=M.KEY,U=M.FRAME,Y=function(t){function i(i,n){var e,o=i.textures.exists(n);return(e=t.call(this,i,{key:o?n:R,frame:o?"":U.BLANK,width:160,height:120})||this).animationNameStr=void 0,e.animationName=void 0,e.updateSize(),e.createText(o?R:n||""),e.scene.children.bringToTop((0,L.Z)(e)),!o&&e.loadImage(n),e}(0,e.Z)(i,t);var n=i.prototype;return n.createText=function(t){this.animationNameStr=t;var i=this.scene.make.bitmapText({font:D.Z.PRIMARY.KEY,size:this.scene.fontSize(14),text:this.normalizeText(t),origin:{x:.5,y:0}});i.setPosition(0,this.button.height/2),i.setCenterAlign(),i.setMaxWidth(this.button.width,95),this.animationName=i,this.add([i])},n.normalizeText=function(t){return t.replace(/\.?([A-Z]+)/g,"_$1").replace(/^_/,"")},n.loadImage=function(t){var i=this,n=this.scene.load.image(t,"./assets/animation-thumbnails/"+t+".png");this.scene.load.start(),n.on("filecomplete",(function(n){if(n===t){var e=i.button,o=e.width,s=e.height;i.createButton(n,"",o-6,s-6),i.bringToTop(i.animationName)}}))},n.getName=function(){return this.normalizeText(this.animationNameStr)},i}(j),W=function(t){function i(i){var n,e=i.gameZone,o=e.width,s=e.height,a={listConfigs:[],width:o,height:s};(n=t.call(this,i,a)||this).scene=void 0,n.nextItemPos=void 0,n.animationButtons=[],n.openAnimationScrollerButton=void 0,n.currentAnimation=void 0,n.currentAnimationText=void 0,n.background=void 0,n.openScroller=function(){var t;null==(t=n.currentAnimation)||t.stop(),n.revive(),n.currentAnimationText.kill(),n.openAnimationScrollerButton.kill(),n.background.revive()},n.closeScroller=function(){n.background.kill(),n.currentAnimationText.revive(),n.openAnimationScrollerButton.revive(),n.kill()},n.runCurrentAnim=function(){n.currentAnimation&&(n.currentAnimation.stop(),n.currentAnimation.run())},n.scene=i;return n.nextItemPos={x:0,y:-s/2,offsetX:-o/4-5},n.setPosition(187.5,333.5),n.setEnable(!0),n.createBackground(o,s),n.createOpenButton(),n.createCurrentAnimationText(),n.closeScroller(),n}(0,e.Z)(i,t);var n=i.prototype;return n.createBackground=function(t,i){this.background=this.scene.make.image({key:o.Z.DEFAULT.KEY,frame:o.Z.DEFAULT.FRAME.BLANK}),this.background.setOrigin(0,0),this.background.setTint(0),this.background.setWorldSize(t,i),this.scene.children.bringToTop(this),this.background.kill()},n.createOpenButton=function(){var t=o.Z.DEFAULT,i=t.KEY,n=t.FRAME,e=new O.Z(this.scene,{key:i,button:n.BLANK,icon:n.BLANK,text:"     Menu"},148,60);e.setPosition(0,50),e.kill(),this.openAnimationScrollerButton=e,this.openAnimationScrollerButton.onClick=this.openScroller},n.createCurrentAnimationText=function(){this.currentAnimationText=this.scene.make.bitmapText({font:D.Z.PRIMARY.KEY,size:this.scene.fontSize(18),text:"",origin:{x:.5,y:0}},!0),this.currentAnimationText.setMaxWidth(300,95),this.currentAnimationText.setCenterAlign(),Phaser.Display.Align.In.TopCenter(this.currentAnimationText,this.scene.gameZone,0,-50)},n.addButton=function(i){var n=this,e=this.nextItemPos,o=e.x,s=e.y,a=e.offsetX,h=new Y(this.scene,i.name);h.setPosition(o+a,s+h.height/2+34),this.nextItemPos.offsetX=-a,a>0&&(this.nextItemPos.y+=h.height+34),this.animationButtons.push(h),h.onClick=function(){var t;n.closeScroller(),null==(t=n.currentAnimation)||t.stop(),i.run(),n.currentAnimation=i,n.currentAnimationText.setText(h.getName())},t.prototype.addItem.call(this,h)},i}(K.Z),_=W,H=o.Z.DEFAULT,X=H.KEY,G=H.FRAME,V=function(t){function i(){for(var i,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).target=void 0,i.source=void 0,i.objects=void 0,i.scroller=void 0,i}(0,e.Z)(i,t);var n=i.prototype;return n.preload=function(){this.textures.removeKey(o.Z.DEFAULT.KEY)},n.create=function(){t.prototype.create.call(this),this.createBackground(X,G.BLANK,0),this.createTargetObject(),this.createSourceObject(),this.createMultiObjects(),this.createAnimationScroller(),this.alignObjects();var i=Phaser.Input.Events.POINTER_DOWN;this.gameZone.setInteractive().on(i,this.scroller.runCurrentAnim)},n.createAnimationScroller=function(){var t=new _(this);t.addButton(new b(this)),t.addButton(new y(this)),t.addButton(new E(this)),t.addButton(new S(this)),t.addButton(new v(this)),t.addButton(new l(this)),t.addButton(new P(this)),t.addButton(new B(this)),t.addButton(new p(this)),t.addButton(new F(this)),t.addButton(new C(this)),t.addButton(new I(this)),t.addButton(new T(this)),t.addButton(new d(this)),t.addButton(new g(this)),t.addButton(new k(this)),t.addButton(new f(this)),t.addButton(new z(this)),t.addButton(new w(this)),t.addButton(new N(this)),t.addButton(new Z(this)),t.addButton(new A(this)),t.addButton(new x(this)),this.scroller=t},n.createTargetObject=function(){this.target=this.make.image({key:X,frame:G.BLANK}),this.target.setTint(5162135),this.target.setWorldSize(50,50)},n.createSourceObject=function(){this.source=this.make.image({key:X,frame:G.BLANK}),this.source.setTint(4824278),this.source.setWorldSize(50,50)},n.createMultiObjects=function(){this.objects=this.make.group({repeat:10,key:X,frame:G.BLANK,classType:Phaser.GameObjects.Image,createMultipleCallback:function(t){t.forEach((function(t){t.setSize(80,80)}))}}),this.objects.setTint(12433838),this.objects.setVisible(!1)},n.alignObjects=function(){Phaser.Display.Align.In.TopCenter(this.target,this.gameZone,0,-100),Phaser.Display.Align.In.BottomCenter(this.source,this.gameZone,0,-150)},i}(s.Z);var $=V}}]);