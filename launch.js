AFRAME.registerComponent("move", {
  schema: {
    moveX: {type: "number", default:1}
  },
 
    tick:function(){
var pose=this.el.getAttribute("position")
this.data.moveX=this.data.moveX+0.01
pose.x=this.data.moveX
this.el.setAttribute("position",{x:pose.x,y:pose.y,z:pose.z})
    }
});