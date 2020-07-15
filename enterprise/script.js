window.onload = function () {
  /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
  为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
  getRem(750, 10);
  let width = $(document).width() + getScrollbarWidth();
  let menuMobile = $(".nav .mobile");
  let menuNormal = $(".nav .normal");
  if (width < 920) {
    $(".banner").css("display", "none");
    let img = $(".product-item:eq(1) img");
    let des = $(".product-item:eq(1) .description");
    img.insertBefore(des);
    menuMobile.css("display", "block");
    menuNormal.css("display", "none");
  }
  if (width > 920) {
    $(".banner").css("display", "block");
    let img = $(".product-item:eq(1) img");
    let des = $(".product-item:eq(1) .description");
    des.insertBefore(img);
    menuMobile.css("display", "blnoneck");
    menuNormal.css("display", "block");
  }
  let clickMenuFlag = true;
  $(".mobile img").click(function () {
    if (clickMenuFlag) {
      $(".mobile-nav").animate({
        top: "80px",
      });
      clickMenuFlag = false;
    }else{
      $(".mobile-nav").animate({
        top: "-200px",
      });
      clickMenuFlag = true;
    }
  });
};
window.addEventListener("resize", () => {
  getRem(750, 10);
  let menuMobile = $(".nav .mobile");
  let menuNormal = $(".nav .normal");
  let width = $(document).width() + getScrollbarWidth();
  if (width < 920) {
    menuMobile.css("display", "block");
    menuNormal.css("display", "none");
  }
  if (width > 920) {
    menuMobile.css("display", "none");
    menuNormal.css("display", "block");
  }
});

function getRem(pwidth, prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (oWidth / pwidth) * prem + "px";
}
function getScrollbarWidth() {
  var odiv = document.createElement("div"), //创建一个div
    styles = {
      width: "100px",
      height: "100px",
      overflowY: "scroll", //让他有滚动条
    },
    i,
    scrollbarWidth;
  for (i in styles) odiv.style[i] = styles[i];
  document.body.appendChild(odiv); //把div添加到body中
  scrollbarWidth = odiv.offsetWidth - odiv.clientWidth; //相减
  odiv.remove(); //移除创建的div
  return scrollbarWidth; //返回滚动条宽度
}
