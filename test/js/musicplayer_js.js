onload=function(){
	titles();
	if (navigator.appName!="Microsoft Internet Explorer" || navigator.appName!="Netscape"){							//浏览器判断
		document.getElementById("play").innerHTML="";
		document.getElementById('title').innerHTML="您的浏览器不支持此播放模块！"
	}
	if($("#music_play").css("opacity")==1){											//播放状态监测
		document.getElementById("music_playpause").title="暂停"
	}
	else{
		document.getElementById("music_playpause").title="播放"
	}
	var time=Math.round(Player.currentPosition);									//时间进度条监测
	$("#time1").html(carry(time));
	var ttime=Math.round(Player.duration);
	$("#time2").html(carry(ttime));
	var i=Math.round(200*Player.currentPosition/Player.duration);
 	document.getElementById("process_inner").style.width=i+"px";
 	if(Player.currentPosition/Player.duration>0.999){
		song+=1;
		songs();
		document.getElementById("process_inner").style.width="0";
 	}
 	setTimeout("onload()", 100)
 }
 function songs(){																	//控制歌曲
	
	if(song>songmax){
		song=0;
	}
	if(song<0){
		song=songmax
	}
	Player.stop();
	document.getElementById("play").innerHTML='<embed id="Player" src="media/bgsound/'+song+'.mp3" autostart="flase" loop="flase" hidden="true"/>';
}
 function carry(time){																//秒转时间格式函数
 	var second=time%60;
	var minute=(time-second)/60;
	if(second<10){
		second="0"+second;
	}
	if(minute<10){
		minute="0"+minute;
	}
	if(second=="NaN"){
		return("00:00");
	}
	return(minute+":"+second);
}
function playdec(){																//切换歌曲时暂停状态则播放
	if($("#music_play").css("opacity")==0){			
		$("#music_play").stop().animate({opacity:"1"},0);
		$("#music_pause").stop().animate({opacity:"0"},0);
		Player.play();	
	}
}
$(function(){																		//鼠标事件
	$("#music_prev").mouseover(function(){											//上一曲
		$("#music_prev1").stop().animate({opacity:"0"},200);
		$("#music_prev2").stop().animate({opacity:"1"},200);
	});
	$("#music_prev").mouseout(function(){
		$("#music_prev1").stop().animate({opacity:"1"},200);
		$("#music_prev2").stop().animate({opacity:"0"},200);
	});
	$("#music_prev").click(function(){
		song-=1;
		songs();
		document.getElementById("process_inner").style.width="0";
		playdec();
	});
	$("#music_playpause").mouseover(function(){										//播放暂停
		$("#music_play1").stop().animate({opacity:"0"},200);
		$("#music_play2").stop().animate({opacity:"1"},200);
		$("#music_pause1").stop().animate({opacity:"0"},200);
		$("#music_pause2").stop().animate({opacity:"1"},200);
	});
	$("#music_playpause").mouseout(function(){
		$("#music_play1").stop().animate({opacity:"1"},200);
		$("#music_play2").stop().animate({opacity:"0"},200);
		$("#music_pause1").stop().animate({opacity:"1"},200);
		$("#music_pause2").stop().animate({opacity:"0"},200);
	});
	$("#music_playpause").click(function(){
	 	if($("#music_play").css("opacity")==1){
	 		Player.pause();
	 		$("#music_play").stop().animate({opacity:"0"},0);
			$("#music_pause").stop().animate({opacity:"1"},0);
	 	}
	 	else{
	 		Player.play();
	 		$("#music_play").stop().animate({opacity:"1"},0);
			$("#music_pause").stop().animate({opacity:"0"},0);
	 	}
	});
	$("#music_next").mouseover(function(){											//下一曲
		$("#music_next1").stop().animate({opacity:"0"},200);
		$("#music_next2").stop().animate({opacity:"1"},200);
	});
	$("#music_next").mouseout(function(){
		$("#music_next1").stop().animate({opacity:"1"},200);
		$("#music_next2").stop().animate({opacity:"0"},200);
	});
	$("#music_next").click(function(){
		song+=1;
		songs();
		document.getElementById("process_inner").style.width="0";
		playdec();
	});
	$("#volup").mouseover(function(){												//音量+
		$("#volup1").stop().animate({opacity:"0"},200);
		$("#volup2").stop().animate({opacity:"1"},200);
	});
	$("#volup").mouseout(function(){
		$("#volup1").stop().animate({opacity:"1"},200);
		$("#volup2").stop().animate({opacity:"0"},200);
	});
	$("#voldown").mouseover(function(){												//音量-
		$("#voldown1").stop().animate({opacity:"0"},200);
		$("#voldown2").stop().animate({opacity:"1"},200);
	});
	$("#voldown").mouseout(function(){
		$("#voldown1").stop().animate({opacity:"1"},200);
		$("#voldown2").stop().animate({opacity:"0"},200);
	});

})
var vol=80																		//音量鼠标事件
function volup(){
 	if(vol>=98){
 		vol=100;
 	}
 	else{
 		vol+=2;
 	}
 	voldiv();
 }
 function voldown(){
 	if(vol<=2){
 		vol=0;
 	}
 	else{
 		vol-=2;
 	}
 	voldiv();		
 }
 function voldiv(){
 	if(vol==0){																		//音量条监测
		Player.volume=-10000;
	}
	else{
		Player.volume=Math.round(2500*Math.log(vol/100)/Math.LN10);
	}
	document.getElementById("vol").style.height=4*vol/5+"px";
	document.getElementById("vol").style.paddingTop=80-4*vol/5+"px";
	document.getElementById("vol_inner").style.height=4*vol/5+"px";
}
 /************************************下面是修改区域****************************************************/
function titles(){																					  
switch(song){																						  
	case 0:$("#title").html('凤凰花开的路口-林志炫');break;											  
	case 1:$("#title").html('苦瓜-陈奕迅');break;												      
	case 2:$("#title").html('最冷一天-陈奕迅');break;												  
	case 3:$("#title").html('十年-陈奕迅');break;													  
	case 4:$("#title").html('情人-Beyond');break;													  
	case 5:$("#title").html('要死就死在你手里-莫西子诗');break;                                       
	case 6:$("#title").html('记得-张惠妹');break;													  
	}																								  
}																								      
var song=0;																			//歌曲选择全局变量
var songmax=6;																		//歌曲数目