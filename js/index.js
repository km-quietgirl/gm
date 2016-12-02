$(document).ready(function(){

   
 // 懒加载

//	$("img.lazy").lazyload({
//  	effect:"fadeIn",
//  	failure_limit:10,
//  	skip_invisible:false,
//  	threshold:200
//  })


 // 头部
    function Hide(Li,Drop){
    	$(Li).on("mouseover",function(){
    		i=$(Li).index($(this));
    		$(Drop).eq(i).show();
    		

    	})
    	$(Li).on("mouseout",function(){
    		
    		$(Drop).eq(i).hide();
    		

    	})
    }

    Hide(".gmhy",".hy-drop")
    Hide(".mygm",".mygm-drop")
    Hide(".gm-service",".service-drop")
    Hide(".gm-daohang",".daohang-drop")
    Hide(".gm-phone",".phone-drop")
    Hide(".menu",".shopcars")


    $(".gmhy").hover(function(){
    	$(".tiao").show();
    },function(){
    	$(".tiao").hide();
    });

    $(".mygm").hover(function(){
    	$(".two-tt").show();
    },function(){
    	$(".two-tt").hide();
    });

    $(".gm-service").hover(function(){
    	$(".three-tt").show();
    },function(){
    	$(".three-tt").hide();
    });

    $(".gm-daohang").hover(function(){
    	$(".four-tt").show();
    },function(){
    	$(".four-tt").hide();
    });

    $(".gm-phone").hover(function(){
    	$(".five-tt").show();
    },function(){
    	$(".five-tt").hide();
    });


    // 广告条

    $(".close-tiao").on("click",function(){
    	$(".pic-hid").css("display","none");
    })

    // banner 图下效果

    $(".jinage").hover(function(){
    	$(this).css("opacity","0.9");
    },function(){
    	$(this).css("opacity","1");
    })

    $(".jiange").hover(function(){
    	$(this).css("opacity","0.9");
    },function(){
    	$(this).css("opacity","1");
    })

    $(".tao").hover(function(){
    	$(this).css("opacity","0.9");
    },function(){
    	$(this).css("opacity","1");
    })

    $(".jr1").hover(function(){
    	$(this).css("opacity","0.9");
    },function(){
    	$(this).css("opacity","1");
    })


    //  猜你喜欢


    $(".guessxia ul").eq(0).css("display","block");
    Unow=0;
    $(".guessshang .ext").on("click",function(){
    	Unow++;
    	if(Unow>=$(".guessxia ul").length){
    		Unow=0;
    	}
    	$(".guessxia ul").css("display","none");
    	$(".guessxia ul").eq(Unow).css("display","block");
    })
    

    

    
      // 侧导航
    	
    	$(".lisroll .item").hover(function(){
    		n=$(".lisroll .item").index($(this));
    		$(".dpdown").eq(n).css("display","block");
    	},function(){
    		$(".dpdown").eq(n).css("display","none");
    	})






  // 楼层轮播
    function louceng(obj){
      var btnl=$(".lbtnl",obj)
      var btnr=$(".lbtnr",obj)
      var anniu=$("ul li",obj)
      var img=$("a",obj)
      img.slice(1).css("opacity",0)
      anniu.eq(0).css("background","#b61b1f")
      var now=0;
      var next=0;
      bflag=true;
      function lmove(){
      next=now+1;
        if(next==img.length){
         next=0;
         }
       img.eq(next).css({"zIndex":2}).end().eq(now).animate({"opacity":0},600,function(){$(this).css({"zIndex":1})}).
       end().eq(next).animate({"opacity":1},600,function(){bflag=true});
       anniu.eq(now).css("background","#3e3e3e").end().eq(next).css("background","#b61b1f")
       now=next;
       }
       function lmover(){
      next=now-1;
        if(next<0){
         next=img.length-1;
         }
       img.eq(next).css({"zIndex":2}).end().eq(now).animate({"opacity":0},600,function(){$(this).css({"zIndex":1})}).
       end().eq(next).animate({"opacity":1},600,function(){bflag=true});
       anniu.eq(now).css("background","#3e3e3e").end().eq(next).css("background","#b61b1f")
       now=next;
       }
       var t=setInterval(lmove,2000)
       obj.hover(function(){
        clearInterval(t)
        btnl.css("display","block")
        btnr.css("display","block")
       },function(){
       t=setInterval(lmove,2000)
       btnl.css("display","none")
       btnr.css("display","none")
       })
       anniu.mouseover(function(){
        $(this).stop(true);
        var index=anniu.index($(this));
        img.eq(index).css({"zIndex":2}).end().eq(now).animate({"opacity":0},600,function(){$(this).css({"zIndex":1})}).
        end().eq(index).animate({"opacity":1},600,function(){bflag=true});
        anniu.eq(now).css("background","#3e3e3e").end().eq(index).css("background","#b61b1f")
        now=index;
       })
       btnl.click(function(){
        if(flag){
          lmover();
        }
        bflag=false
       })
       btnr.click(function(){
          if(flag){
          lmove();
        }
          bflag=false;
       })
    }
     
      var block=$(".block")
      for(var s=0;s<block.length;s++)
      {louceng(block.eq(s))};

   // 第一层
   var lou1=$(".lou_one");
   var tab=$(".tab li",lou1)
   var nav=$(".tab a",lou1)
   var main=$(".tx_list")
   var rnow=0;
   var rnext=0;
   nav.eq(0).css({"background":"#535353","color":"#fff"})
   tab.mouseover(function(){
   var index=tab.index($(this))
   main.css("display","none").eq(index).css("display","block")
   nav.css({"background":"#fff","color":"#333"}).eq(index).css({"background":"#535353","color":"#fff"})
   rnow=index;
   })
   
   var mainright=$(".mainright",lou1)
    mainright.click(function(){
      rnext=rnow+1
    if(rnext==main.length){rnext=0}
    main.css("display","none").eq(rnext).css("display","block")
    nav.css({"background":"#fff","color":"#333"}).eq(rnext).css({"background":"#535353","color":"#fff"})
    rnow=rnext
   })
   // 第二层
   var lou2=$(".lou2_one");
   var tab2=$(".tab2 li",lou2)
   var main2=$(".tx2_list")
   var nav2=$(".tab2 a",lou2)
   var rnow2=0;
   var rnext2=0;
   nav2.eq(0).css({"background":"#535353","color":"#fff"})
   tab2.mouseover(function(){
    var index=tab2.index($(this))
    main2.css("display","none").eq(index).css("display","block")
    nav2.css({"background":"#fff","color":"#333"}).eq(index).css({"background":"#535353","color":"#fff"})
    rnow2=index;
   })
    var mainright2=$(".mainright",lou2)
    mainright2.click(function(){
      console.log(1)
    rnext2=rnow2+1
    if(rnext2==main2.length){rnext2=0}
    main2.css("display","none").eq(rnext2).css("display","block")
    nav2.css({"background":"#fff","color":"#333"}).eq(rnext2).css({"background":"#535353","color":"#fff"})
    rnow2=rnext2
   })

   //第三层
   var lou3=$(".lou3_one");
   var tab3=$(".tab3 li",lou3)
   var main3=$(".tx3_list")
   var nav3=$(".tab3 a",lou3)
   var rnow3=0;
   var rnext3=0;
   nav3.eq(0).css({"background":"#535353","color":"#fff"})
   tab3.mouseover(function(){
    var index=tab3.index($(this))
    main3.css("display","none").eq(index).css("display","block")
    nav3.css({"background":"#fff","color":"#333"}).eq(index).css({"background":"#535353","color":"#fff"})
    rnow3=index;
   })
    var mainright3=$(".mainright",lou3)
    mainright3.click(function(){
      console.log(1)
    rnext3=rnow3+1
    if(rnext3==main3.length){rnext3=0}
    main3.css("display","none").eq(rnext3).css("display","block")
    nav3.css({"background":"#fff","color":"#333"}).eq(rnext3).css({"background":"#535353","color":"#fff"})
    rnow3=rnext3
   })
   //第四层
   var lou4=$(".lou4_one");
   var tab4=$(".tab4 li",lou4)
   var main4=$(".tx4_list")
    var nav4=$(".tab4 a",lou4)
    var rnow4=0;
   var rnext4=0;
   nav4.eq(0).css({"background":"#535353","color":"#fff"})
   tab4.mouseover(function(){
    var index=tab4.index($(this))
    main4.css("display","none").eq(index).css("display","block")
    nav4.css({"background":"#fff","color":"#333"}).eq(index).css({"background":"#535353","color":"#fff"})
    rnow4=index;
   })
   var mainright4=$(".mainright",lou4)
    mainright4.click(function(){
      console.log(1)
    rnext4=rnow4+1
    if(rnext4==main4.length){rnext4=0}
    main4.css("display","none").eq(rnext4).css("display","block")
    nav4.css({"background":"#fff","color":"#333"}).eq(rnext4).css({"background":"#535353","color":"#fff"})
    rnow4=rnext4
   })

     //第五层
   var lou5=$(".lou5_one");
   var tab5=$(".tab5 li",lou5)
   var main5=$(".tx5_list")
   var nav5=$(".tab5 a",lou5)
    var rnow5=0;
   var rnext5=0;
   nav5.eq(0).css({"background":"#535353","color":"#fff"})
   tab5.mouseover(function(){
    var index=tab5.index($(this))
    main5.css("display","none").eq(index).css("display","block")
    nav5.css({"background":"#fff","color":"#333"}).eq(index).css({"background":"#535353","color":"#fff"})
    rnow5=index;
   })
    var mainright5=$(".mainright",lou5)
    mainright5.click(function(){
      console.log(1)
    rnext5=rnow5+1
    if(rnext5==main5.length){rnext5=0}
    main5.css("display","none").eq(rnext5).css("display","block")
    nav5.css({"background":"#fff","color":"#333"}).eq(rnext5).css({"background":"#535353","color":"#fff"})
    rnow5=rnext5
   })



     //楼层跳转
  var sflag=true;
  var louceng=$(".zuobian")
  console.log(louceng)
  var loutz=$(".louceng")
  var lou=$(".loul")
  console.log(lou)
  var lou1=$(".louceng span")
  var lou2=$(".louceng p")
  var loutz1=$(".fangxiang")
  var top=loutz1.eq(0)
 
  var bot=loutz1.eq(1)
  $(window).scroll(function(){
    if(sflag){
      var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(lou.eq(0).offset().top<=obj.scrollTop+800)
        {
            louceng.css("display","block")
        }
        else 
        {
           louceng.css("display","none")

        }
     for(var i=0;i<lou.length;i++)
        {    
          if(lou.eq(i).offset().top<=obj.scrollTop+500)
          {  
            lou1.css("color","#777");
            lou2.css("color","#5e5e5e")
            lou1.eq(i).css("color","#e3101e")
            lou2.eq(i).css("color","#e3101e")         
          }   
        }
       
    }
  })
 
 loutz.click(function(){
          var index=loutz.index($(this))
          sflag=false;
          $("body").animate({"scrollTop":lou.eq(index).offset().top-200},function(){sflag=true})
        })
 top.click(function(){
     sflag=false;
       $("body").animate({"scrollTop":0},function(){sflag=true})
})
 bot.click(function(){
     sflag=false;
       $("body").animate({"scrollTop":4674},function(){sflag=true})
})

 // 自动轮播
  // var tip=$(".sideroll")
  //  var tips=$(".adnavside");
  //  var a=$("a",tips);
  //  a.slice(1).css("top",-44)
  //  var btl=$(".hdrbtn-up")
  //  var btr=$(".hdrbtn-down")
  //  var now=0;
  //  var next=0;
  //  var flag=true;
  //  var t=setInterval(movel,2000)
  //  function move(){
  //   next=now+1;
  //   if(next==a.length){
  //     next=0
  //   }
  //   a.eq(next).css("top",-44).animate({"top":0}).end().eq(now).
  //   animate({"top":44},function(){flag=true})
  //    now=next;
  //  }
  //   function movel(){
  //   next=now-1;
  //   if(next<0){
  //     next=a.length-1
  //   }
  //   a.eq(next).css("top",44).animate({"top":0}).end().eq(now).
  //   animate({"top":-44},function(){flag=true})
  //    now=next;
  //  }
  //  tip.hover(function(){clearInterval(t)},function(){t=setInterval(movel,2000)})
  // btl.click(function(){
  //   if(flag){move()}
  //   flag=true;
  // })
  //  btr.click(function(){
  //   if(flag){movel()}
  //   flag=true;
  // })

  


   // banner 

   /*banner轮播图*/
   var bnow=0;
   var bnext=0;
   var bflag=true;
   var banner=$(".banner")
   var btnone=$(".btnone")
   var b=$("b",banner)
   var i=$("i",banner)
   var span=$("span",banner)
   var imgs=$("a",banner)
   var bt;
   var bw=$("a",$(".main1")).width()
   var bannerl=$(".leftzz")
   var bannerr=$(".rightyy")
   i.eq(0).css({height:5,background:"#e3101e"})
    btnone.eq(0).css("display","block")
    span.eq(0).css("display","none")
   imgs.css({"zIndex":0,"opacity":0})
   imgs.eq(0).css({"zIndex":1,"opacity":1})
   function bmove(){
    bnext=bnow+1;
    if(bnext==imgs.length){
      bnext=0;
    }
    imgs.eq(bnext).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   function bmovey(){
   
    bnext=bnow+1;
    if(bnext>=imgs.length){
      bnext=0;
    }
    imgs.css({"zIndex":2,"opacity":0})
    if(bnow%2!=0){
    imgs.eq(bnext).css({"zIndex":4}).end().eq(bnow).animate({"opacity":0.5},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext;
    }
    else{
      imgs.eq(bnext-1).css("opacity",1)
      bnow=bnext;
    }
   
   }
    function bmovez(){
    bnext=bnow-1;
    if(bnext<0){
      bnext=imgs.length-1;
    }
    imgs.eq(bnext).css({"zIndex":2,"opacity":1}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
    end().eq(bnext).animate({"opacity":1},function(){bflag=true});
    i.css({height:3,background:"#fff"})
    btnone.css("display","none")
    span.css("display","block")
    i.eq(bnext).css({height:5,background:"#e3101e"})
    var bnext1=Math.floor((bnext)/2)
    btnone.eq(bnext1).css("display","block")
    span.eq(bnext1).css("display","none")
    bnow=bnext
   }
   bannerr.click(function(){
      if(bflag){bmove()}
      bflag=false;
   })
    bannerl.click(function(){
      if(bflag){bmovez()}
      bflag=false;
   })
    bth=setInterval(bmovey,2000)
   banner.hover(function(){clearInterval(bth);
   },function(){bth=setInterval(bmovey,2000)
   })
   b.mouseover(function(){
    
      i.css({height:3,background:"#fff"})
      btnone.css("display","none")
      span.css("display","block")
      var index=b.index($(this))
      i.eq(index).css({height:5,background:"#e3101e"})
      var index1=Math.floor((index)/2)
      btnone.eq(index1).css("display","block")
      span.eq(index1).css("display","none")
      imgs.eq(index).css({"zIndex":2}).end().eq(bnow).animate({"opacity":0},function(){$(this).css({"zIndex":1})}).
      end().eq(index).animate({"opacity":1},function(){bflag=true});
      bnow=index;
   
   })
   
   
   //右导航
$(".app").mouseover(function(){
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":-140});
  $(".app b").css("background-position","-40px -464px");
})
$("body").click(function(){
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":140});
  $(".app b").css("background-position","-47px -464px");
})
function hover(a,b,c){
  a.hover(function(){
  b.stop(true);
  b.delay(200).animate({"left":-82});
  c.css("background-position","-40px -464px");
  $(".saoma").stop(true);
  $(".saoma").delay(200).animate({"left":140});
  $(".app b").css("background-position","-47px -464px");
},function(){
   b.stop(true);
   b.delay(200).animate({"left":82});
   c.css("background-position","-47px -464px");
})
}
hover($(".servy"),$(".servy .transform"), $(".servy b"));
hover($(".service"),$(".service .transform"), $(".service b"));
hover($(".go-back"),$(".go-back .transform"), $(".go-back b"));

 jQuery.backTop($(".go-back"),300);  



   

   







    









})