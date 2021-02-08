AFRAME.registerComponent( {
  schema: {
    moveZ: {type: "number", default:10}
  },
 
    tick:function(){
var pose=this.el.getAttribute("position")
this.data.moveZ=this.data.moveZ+0.01
pose.z=this.data.moveZ
this.el.setAttribute("position",{x:pose.x,y:pose.y,z:pose.z})
    }
});