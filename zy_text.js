						function shuai(){
				do{
				var x=prompt("照片上的那个同学帅吗？","")
				var zy1="虽然已经不止一个人这么说了";
				var zy2="但我还是很欣赏你的眼光,真诚而犀利。";
				var zy3="生活中你一定是一个温暖、精致、正直且智慧的人，如果能成为你的朋友是我的荣幸！"+"</br>"+"——————————————谢谢！";
				
				
					if(x=="帅"){
					alert("谢谢")
					document.getElementById("text1").innerHTML=zy1;
					document.getElementById("text2").innerHTML=zy2;
					document.getElementById("text3").innerHTML=zy3;
					var text_array=document.getElementsByClassName("bottom_text");
					var i;
					for(i=0;i<text_array.length;i++){
						text_array[i].innerHTML="谢谢";
					}
					var text_array=document.getElementsByClassName("right_text");
					var a;
					for(a=0;a<text_array.length;a++){
						text_array[a].style.color="red";
					}
//					document.getElementsByClassName("bottom_text").innerHTML="zy4";
				}else{
					alert("请输入标准答案")
				     }
				}
				while(x!="帅")
			    }
