AFRAME.registerComponent("fall-down", {
    schema: {
      moveY: {type: "number", default:0}
    },
   
      tick:function(){
          window.addEventListener("click",(e)=>{
              this.data.moveY=this.data.moveY-0.001
          })
var pose=this.el.getAttribute("position")
pose.y=this.data.moveY
this.el.setAttribute("position",{x:pose.x,y:pose.y,z:pose.z})
      }
  });