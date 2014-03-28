//表示图片状态的数组(0有 1没有)
var dec=[1,1,1,1,1,1,1,1,1,1];
var count=0;
//第一个box
function preview1(){
	if(dec[1]==0){
		document.getElementById("box1").style.background="#ffffff";
		dec[1]=1;
		if(dec[4]==1){	
			document.getElementById("box4").style.background="url(images/4.jpg)";
			dec[4]=0;
		}
		else if(dec[4]==0){
			document.getElementById("box4").style.background="#ffffff";
			dec[4]=1;
		}
		return;
	}
	if(dec[1]==1){
		document.getElementById("box1").style.background="url(images/1.jpg)";
		dec[1]=0;
		if(dec[4]==1){	
			document.getElementById("box4").style.background="url(images/4.jpg)";
			dec[4]=0;
		}
		else if(dec[4]==0){
			document.getElementById("box4").style.background="#ffffff";
			dec[4]=1;
		}
		return;
	}
}
function previewover1(){
	if(dec[1]==0){
		document.getElementById("box1").style.background="#ffffff";
		dec[1]=1;
		if(dec[4]==1){	
			document.getElementById("box4").style.background="url(images/4.jpg)";
			dec[4]=0;
		}
		else if(dec[4]==0){
			document.getElementById("box4").style.background="#ffffff";
			dec[4]=1;
		}
		return;
	}
	else if(dec[1]==1){
		document.getElementById("box1").style.background="url(images/1.jpg)";
		dec[1]=0;
		if(dec[4]==1){	
			document.getElementById("box4").style.background="url(images/4.jpg)";
			dec[4]=0;
		}
		else if(dec[4]==0){
			document.getElementById("box4").style.background="#ffffff";
			dec[4]=1;
		}
		return;
	}
	else if(dec[1]==2){
		dec[1]=0;
		return;
	}
	else if(dec[1]==3){
		dec[1]=1;
		return;
	}
}
function change1(){
	if(dec[1]==0){
		dec[1]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[1]==1){
		dec[1]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}


//第二个box
function preview2(){
	if(dec[2]==0){
		document.getElementById("box2").style.background="#ffffff";
		dec[2]=1;
		if(dec[7]==1){	
			document.getElementById("box7").style.background="url(images/7.jpg)";
			dec[7]=0;
		}
		else if(dec[7]==0){
			document.getElementById("box7").style.background="#ffffff";
			dec[7]=1;
		}
		return;
	}
	if(dec[2]==1){
		document.getElementById("box2").style.background="url(images/2.jpg)";
		dec[2]=0;
		if(dec[7]==1){	
			document.getElementById("box7").style.background="url(images/7.jpg)";
			dec[7]=0;
		}
		else if(dec[7]==0){
			document.getElementById("box7").style.background="#ffffff";
			dec[7]=1;
		}
		return;
	}
}
function previewover2(){
	if(dec[2]==0){
		document.getElementById("box2").style.background="#ffffff";
		dec[2]=1;
		if(dec[7]==1){	
			document.getElementById("box7").style.background="url(images/7.jpg)";
			dec[7]=0;
		}
		else if(dec[7]==0){
			document.getElementById("box7").style.background="#ffffff";
			dec[7]=1;
		}
		return;
	}
	else if(dec[2]==1){
		document.getElementById("box2").style.background="url(images/2.jpg)";
		dec[2]=0;
		if(dec[7]==1){	
			document.getElementById("box7").style.background="url(images/7.jpg)";
			dec[7]=0;
		}
		else if(dec[7]==0){
			document.getElementById("box7").style.background="#ffffff";
			dec[7]=1;
		}
		return;
	}
	else if(dec[2]==2){
		dec[2]=0;
		return;
	}
	else if(dec[2]==3){
		dec[2]=1;
		return;
	}
}
function change2(){
	if(dec[2]==0){
		dec[2]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[2]==1){
		dec[2]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}

//第三个box
function preview3(){
	if(dec[3]==0){
		document.getElementById("box3").style.background="#ffffff";
		dec[3]=1;
		if(dec[5]==1){	
			document.getElementById("box5").style.background="url(images/5.jpg)";
			dec[5]=0;
		}
		else if(dec[5]==0){
			document.getElementById("box5").style.background="#ffffff";
			dec[5]=1;
		}
		return;
	}
	if(dec[3]==1){
		document.getElementById("box3").style.background="url(images/3.jpg)";
		dec[3]=0;
		if(dec[5]==1){	
			document.getElementById("box5").style.background="url(images/5.jpg)";
			dec[5]=0;
		}
		else if(dec[5]==0){
			document.getElementById("box5").style.background="#ffffff";
			dec[5]=1;
		}
		return;
	}
}
function previewover3(){
	if(dec[3]==0){
		document.getElementById("box3").style.background="#ffffff";
		dec[3]=1;
		if(dec[5]==1){	
			document.getElementById("box5").style.background="url(images/5.jpg)";
			dec[5]=0;
		}
		else if(dec[5]==0){
			document.getElementById("box5").style.background="#ffffff";
			dec[5]=1;
		}
		return;
	}
	else if(dec[3]==1){
		document.getElementById("box3").style.background="url(images/3.jpg)";
		dec[3]=0;
		if(dec[5]==1){	
			document.getElementById("box5").style.background="url(images/5.jpg)";
			dec[5]=0;
		}
		else if(dec[5]==0){
			document.getElementById("box5").style.background="#ffffff";
			dec[5]=1;
		}
		return;
	}
	else if(dec[3]==2){
		dec[3]=0;
		return;
	}
	else if(dec[3]==3){
		dec[3]=1;
		return;
	}
}
function change3(){
	if(dec[3]==0){
		dec[3]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[3]==1){
		dec[3]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}

//第四个box
function preview4(){
	if(dec[4]==0){
		document.getElementById("box4").style.background="#ffffff";
		dec[4]=1;
		if(dec[8]==1){	
			document.getElementById("box8").style.background="url(images/8.jpg)";
			dec[8]=0;
		}
		else if(dec[8]==0){
			document.getElementById("box8").style.background="#ffffff";
			dec[8]=1;
		}
		return;
	}
	if(dec[4]==1){
		document.getElementById("box4").style.background="url(images/4.jpg)";
		dec[4]=0;
		if(dec[8]==1){	
			document.getElementById("box8").style.background="url(images/8.jpg)";
			dec[8]=0;
		}
		else if(dec[8]==0){
			document.getElementById("box8").style.background="#ffffff";
			dec[8]=1;
		}
		return;
	}
}
function previewover4(){
	if(dec[4]==0){
		document.getElementById("box4").style.background="#ffffff";
		dec[4]=1;
		if(dec[8]==1){	
			document.getElementById("box8").style.background="url(images/8.jpg)";
			dec[8]=0;
		}
		else if(dec[8]==0){
			document.getElementById("box8").style.background="#ffffff";
			dec[8]=1;
		}
		return;
	}
	else if(dec[4]==1){
		document.getElementById("box4").style.background="url(images/4.jpg)";
		dec[4]=0;
		if(dec[8]==1){	
			document.getElementById("box8").style.background="url(images/8.jpg)";
			dec[8]=0;
		}
		else if(dec[8]==0){
			document.getElementById("box8").style.background="#ffffff";
			dec[8]=1;
		}
		return;
	}
	else if(dec[4]==2){
		dec[4]=0;
		return;
	}
	else if(dec[4]==3){
		dec[4]=1;
		return;
	}
}
function change4(){
	if(dec[4]==0){
		dec[4]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[4]==1){
		dec[4]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}

//第五个box
function preview5(){
	if(dec[5]==0){
		document.getElementById("box5").style.background="#ffffff";
		dec[5]=1;
		if(dec[1]==1){	
			document.getElementById("box1").style.background="url(images/1.jpg)";
			dec[1]=0;
		}
		else if(dec[1]==0){
			document.getElementById("box1").style.background="#ffffff";
			dec[1]=1;
		}
		return;
	}
	if(dec[5]==1){
		document.getElementById("box5").style.background="url(images/5.jpg)";
		dec[5]=0;
		if(dec[1]==1){	
			document.getElementById("box1").style.background="url(images/1.jpg)";
			dec[1]=0;
		}
		else if(dec[1]==0){
			document.getElementById("box1").style.background="#ffffff";
			dec[1]=1;
		}
		return;
	}
}
function previewover5(){
	if(dec[5]==0){
		document.getElementById("box5").style.background="#ffffff";
		dec[5]=1;
		if(dec[1]==1){	
			document.getElementById("box1").style.background="url(images/1.jpg)";
			dec[1]=0;
		}
		else if(dec[1]==0){
			document.getElementById("box1").style.background="#ffffff";
			dec[1]=1;
		}
		return;
	}
	else if(dec[5]==1){
		document.getElementById("box5").style.background="url(images/5.jpg)";
		dec[5]=0;
		if(dec[1]==1){	
			document.getElementById("box1").style.background="url(images/1.jpg)";
			dec[1]=0;
		}
		else if(dec[1]==0){
			document.getElementById("box1").style.background="#ffffff";
			dec[1]=1;
		}
		return;
	}
	else if(dec[5]==2){
		dec[5]=0;
		return;
	}
	else if(dec[5]==3){
		dec[5]=1;
		return;
	}
}
function change5(){
	if(dec[5]==0){
		dec[5]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[5]==1){
		dec[5]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}


//第六个box
function preview6(){
	if(dec[6]==0){
		document.getElementById("box6").style.background="#ffffff";
		dec[6]=1;
		if(dec[2]==1){	
			document.getElementById("box2").style.background="url(images/2.jpg)";
			dec[2]=0;
		}
		else if(dec[2]==0){
			document.getElementById("box2").style.background="#ffffff";
			dec[2]=1;
		}
		return;
	}
	if(dec[6]==1){
		document.getElementById("box6").style.background="url(images/6.jpg)";
		dec[6]=0;
		if(dec[2]==1){	
			document.getElementById("box2").style.background="url(images/2.jpg)";
			dec[2]=0;
		}
		else if(dec[2]==0){
			document.getElementById("box2").style.background="#ffffff";
			dec[2]=1;
		}
		return;
	}
}
function previewover6(){
	if(dec[6]==0){
		document.getElementById("box6").style.background="#ffffff";
		dec[6]=1;
		if(dec[2]==1){	
			document.getElementById("box2").style.background="url(images/2.jpg)";
			dec[2]=0;
		}
		else if(dec[2]==0){
			document.getElementById("box2").style.background="#ffffff";
			dec[2]=1;
		}
		return;
	}
	else if(dec[6]==1){
		document.getElementById("box6").style.background="url(images/6.jpg)";
		dec[6]=0;
		if(dec[2]==1){	
			document.getElementById("box2").style.background="url(images/2.jpg)";
			dec[2]=0;
		}
		else if(dec[2]==0){
			document.getElementById("box2").style.background="#ffffff";
			dec[2]=1;
		}
		return;
	}
	else if(dec[6]==2){
		dec[6]=0;
		return;
	}
	else if(dec[6]==3){
		dec[6]=1;
		return;
	}
}
function change6(){
	if(dec[6]==0){
		dec[6]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[6]==1){
		dec[6]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}
//第七个box
function preview7(){
	if(dec[7]==0){
		document.getElementById("box7").style.background="#ffffff";
		dec[7]=1;
		if(dec[9]==1){	
			document.getElementById("box9").style.background="url(images/9.jpg)";
			dec[9]=0;
		}
		else if(dec[9]==0){
			document.getElementById("box9").style.background="#ffffff";
			dec[9]=1;
		}
		return;
	}
	if(dec[7]==1){
		document.getElementById("box7").style.background="url(images/7.jpg)";
		dec[7]=0;
		if(dec[9]==1){	
			document.getElementById("box9").style.background="url(images/9.jpg)";
			dec[9]=0;
		}
		else if(dec[9]==0){
			document.getElementById("box9").style.background="#ffffff";
			dec[9]=1;
		}
		return;
	}
}
function previewover7(){
	if(dec[7]==0){
		document.getElementById("box7").style.background="#ffffff";
		dec[7]=1;
		if(dec[9]==1){	
			document.getElementById("box9").style.background="url(images/9.jpg)";
			dec[9]=0;
		}
		else if(dec[9]==0){
			document.getElementById("box9").style.background="#ffffff";
			dec[9]=1;
		}
		return;
	}
	else if(dec[7]==1){
		document.getElementById("box7").style.background="url(images/7.jpg)";
		dec[7]=0;
		if(dec[9]==1){	
			document.getElementById("box9").style.background="url(images/9.jpg)";
			dec[9]=0;
		}
		else if(dec[9]==0){
			document.getElementById("box9").style.background="#ffffff";
			dec[9]=1;
		}
		return;
	}
	else if(dec[7]==2){
		dec[7]=0;
		return;
	}
	else if(dec[7]==3){
		dec[7]=1;
		return;
	}
}
function change7(){
	if(dec[7]==0){
		dec[7]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[7]==1){
		dec[7]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}

//第八个box
function preview8(){
	if(dec[8]==0){
		document.getElementById("box8").style.background="#ffffff";
		dec[8]=1;
		if(dec[6]==1){	
			document.getElementById("box6").style.background="url(images/6.jpg)";
			dec[6]=0;
		}
		else if(dec[6]==0){
			document.getElementById("box6").style.background="#ffffff";
			dec[6]=1;
		}
		return;
	}
	if(dec[8]==1){
		document.getElementById("box8").style.background="url(images/8.jpg)";
		dec[8]=0;
		if(dec[6]==1){	
			document.getElementById("box6").style.background="url(images/6.jpg)";
			dec[6]=0;
		}
		else if(dec[6]==0){
			document.getElementById("box6").style.background="#ffffff";
			dec[6]=1;
		}
		return;
	}
}
function previewover8(){
	if(dec[8]==0){
		document.getElementById("box8").style.background="#ffffff";
		dec[8]=1;
		if(dec[6]==1){	
			document.getElementById("box6").style.background="url(images/6.jpg)";
			dec[6]=0;
		}
		else if(dec[6]==0){
			document.getElementById("box6").style.background="#ffffff";
			dec[6]=1;
		}
		return;
	}
	else if(dec[8]==1){
		document.getElementById("box8").style.background="url(images/8.jpg)";
		dec[8]=0;
		if(dec[6]==1){	
			document.getElementById("box6").style.background="url(images/6.jpg)";
			dec[6]=0;
		}
		else if(dec[6]==0){
			document.getElementById("box6").style.background="#ffffff";
			dec[6]=1;
		}
		return;
	}
	else if(dec[8]==2){
		dec[8]=0;
		return;
	}
	else if(dec[8]==3){
		dec[8]=1;
		return;
	}
}
function change8(){
	if(dec[8]==0){
		dec[8]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[8]==1){
		dec[8]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}

//第九个box
function preview9(){
	if(dec[9]==0){
		document.getElementById("box9").style.background="#ffffff";
		dec[9]=1;
		if(dec[3]==1){	
			document.getElementById("box3").style.background="url(images/3.jpg)";
			dec[3]=0;
		}
		else if(dec[3]==0){
			document.getElementById("box3").style.background="#ffffff";
			dec[3]=1;
		}
		return;
	}
	if(dec[9]==1){
		document.getElementById("box9").style.background="url(images/9.jpg)";
		dec[9]=0;
		if(dec[3]==1){	
			document.getElementById("box3").style.background="url(images/3.jpg)";
			dec[3]=0;
		}
		else if(dec[3]==0){
			document.getElementById("box3").style.background="#ffffff";
			dec[3]=1;
		}
		return;
	}
}
function previewover9(){
	if(dec[9]==0){
		document.getElementById("box9").style.background="#ffffff";
		dec[9]=1;
		if(dec[3]==1){	
			document.getElementById("box3").style.background="url(images/3.jpg)";
			dec[3]=0;
		}
		else if(dec[3]==0){
			document.getElementById("box3").style.background="#ffffff";
			dec[3]=1;
		}
		return;
	}
	else if(dec[9]==1){
		document.getElementById("box9").style.background="url(images/9.jpg)";
		dec[9]=0;
		if(dec[3]==1){	
			document.getElementById("box3").style.background="url(images/3.jpg)";
			dec[3]=0;
		}
		else if(dec[3]==0){
			document.getElementById("box3").style.background="#ffffff";
			dec[3]=1;
		}
		return;
	}
	else if(dec[9]==2){
		dec[9]=0;
		return;
	}
	else if(dec[9]==3){
		dec[9]=1;
		return;
	}
}
function change9(){
	if(dec[9]==0){
		dec[9]=2;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
	else if(dec[9]==1){
		dec[9]=3;
		count= count+1;
		if(count==1){
			document.getElementById("txt").innerHTML="好的，就是这个feel，倍儿爽！";
		}
		else if(count==3){
			document.getElementById("txt").innerHTML="骚年，翻转所有格子拯救世界吧！";
		}
		else if(count==10){
			document.getElementById("txt").innerHTML="革命尚未成功，同志仍需努力！";
		}
		else if(count==30){
			document.getElementById("txt").innerHTML="撸多了？智力不够用了吧！";
		}
		else if(count==60){
			document.getElementById("txt").innerHTML="别翻了，妈妈叫你回家吃饭！";
		}
		else if(count==99){
			document.getElementById("txt").innerHTML="不要翻下一次了，你会后悔的！";
		}
		else if(count==100){
			document.getElementById("txt").innerHTML="好吧，其实是不能通关的！_(:з」∠)_";
			count="?";	
		}
		else if(count=="?"+1){
			count="?";
		}
		document.getElementById("count").innerHTML=count;
		return;
	}
}

//文字格子鼠标经过变色
function bianse1(){
	document.getElementById("box10").style.backgroundColor="#eeeeee";
	document.getElementById("box10").style.color="#666666";
}
function bianse2(){
	document.getElementById("box11").style.backgroundColor="#eeeeee";
	document.getElementById("box11").style.color="#666666";
}
function bianse3(){
	document.getElementById("box12").style.backgroundColor="#eeeeee";
	document.getElementById("box12").style.color="#666666";
}
function bianse4(){
	document.getElementById("count").style.backgroundColor="#eeeeee";
	document.getElementById("count").style.color="#666666";
}
function bianse5(){
	document.getElementById("box14").style.backgroundColor="#eeeeee";
	document.getElementById("box14").style.color="#666666";
}
function bianse6(){
	document.getElementById("box15").style.backgroundColor="#eeeeee";
	document.getElementById("h1").style.color="#666666";
	document.getElementById("h2").style.color="#666666";
	document.getElementById("h3").style.color="#666666";
	document.getElementById("h4").style.color="#666666";
	document.getElementById("h5").style.color="#666666";
}
function bianse7(){
	document.getElementById("txt").style.backgroundColor="#eeeeee";
	document.getElementById("txt").style.color="#666666";
}
function bianhui1(){
	document.getElementById("box10").style.backgroundColor="#ffffff";
	document.getElementById("box10").style.color="#b5b5b5";
}
function bianhui2(){
	document.getElementById("box11").style.backgroundColor="#ffffff";
	document.getElementById("box11").style.color="#b5b5b5";
}
function bianhui3(){
	document.getElementById("box12").style.backgroundColor="#ffffff";
	document.getElementById("box12").style.color="#b5b5b5";
}
function bianhui4(){
	document.getElementById("count").style.backgroundColor="#ffffff";
	document.getElementById("count").style.color="#b5b5b5";
}
function bianhui5(){
	document.getElementById("box14").style.backgroundColor="#ffffff";
	document.getElementById("box14").style.color="#b5b5b5";
}
function bianhui6(){
	document.getElementById("box15").style.backgroundColor="#ffffff";
	document.getElementById("h1").style.color="#b5b5b5";
	document.getElementById("h2").style.color="#b5b5b5";
	document.getElementById("h3").style.color="#b5b5b5";
	document.getElementById("h4").style.color="#b5b5b5";
	document.getElementById("h5").style.color="#b5b5b5";
}
function bianhui7(){
	document.getElementById("txt").style.backgroundColor="#ffffff";
	document.getElementById("txt").style.color="#b5b5b5";
}