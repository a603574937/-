$(function(){
	var x=-1;
	var xxx=$("#banner").children('li').length;
	function lun(){
		if(x>(xxx-2)){
			x=0;}
			else{
				x++;};
		$("#banner li").eq(x).siblings().css({zIndex:1});
		$("#banner li").eq(x).css({zIndex:10});
		$("#banner li").eq(x).fadeIn(200);
		$("#banner li").eq(x).siblings().fadeOut();
		$("#bannerbz li").eq(x).siblings().removeClass("ac");
		$("#bannerbz li").eq(x).addClass("ac");
	}

	var bb=window.setInterval(lun,3000);
	lun();

	var y=0;
	var yyy=$("#alche").children('li').length;
	$("#alche").css("width",365*yyy);
	$("#aljtz").click(function(){
		if(y<((yyy)/2-1)){y++}
		$("#alche").stop().animate({left:(-y)*710},1000);
	});
	$("#aljty").click(function(){
		if(y>0){y--}
		$("#alche").stop().animate({left:(-y)*710},1000);
	});

	$("#mnav").click(function(){
		$("#dh").animate({right:'0'});
		$("#hei").show();
	});
	$("#hei").click(function(){
		$("#dh").animate({right:'-376px'});
		$("#hei").hide();
	});

	$("#xf li:nth-child(1)").click(function(){$('html,body').animate({scrollTop:0}, 600)})

	var w=$("#ym").width();
	$("#ym").css("marginLeft",-w/2)

	var ss=$("#dl ul").children().length;
	$("#dl ul").css("width",ss*210-30);

	
})
