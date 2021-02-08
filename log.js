AFRAME.registerComponent("move-box-on-click", {
    schema: {
      moveX: {type: "number", default:0}
    },
   
      tick:function(){
        window.addEventListener("click",(e)=>{
          this.data.moveX=this.data.moveX+0.005
      })
var pose=this.el.getAttribute("position")
pose.x=this.data.moveX
this.el.setAttribute("position",{x:pose.x,y:pose.y,z:pose.z})
      }
  });