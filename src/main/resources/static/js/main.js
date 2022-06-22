window.addEventListener("load",function(){
   		//가위 바위 보 선택시 이미지 변경
   		var select = document.getElementsByClassName("label_img");
	 	var you = document.getElementById("you");
	 	var check_box = document.getElementsByName("rsp");
	 	var select_btn = document.getElementsByClassName("select_btn")[0];
	 	var check_box = document.getElementsByName("rsp");
	 	
	 	
	 	function init(){
	 		for(var i=0; i<check_box.length; i++){
	 			if(check_box[i].checked){
	 				select[i].classList.add("on");
	 				if(i == 0){
   					 	you.src="/img/rock_icon.png";
       				 } else if( i == 1){
       					 you.src="/img/scissor_icon.png";
       				 }else {
       					 you.src="/img/paper_icon.png";
       				 } 
	 			} 
	 			
	 		}
	 		
	 	}
	 	
	 	init();
	 	
   		for(var i=0; i<select.length; i++){
   			select[i].idx=i;
   			 
   			select[i].addEventListener("click",function(e){	           				
   				 
       			 var n = e.currentTarget.idx;
       			 
       			 for(var j=0; j<select.length; j++){
       				 if(j == n){
        				 select[j].classList.add("on");
        				 if(j == 0){
        					 you.src="/img/rock_icon.png";
        				 } else if( j == 1){
        					 you.src="/img/scissor_icon.png";
        				 }else {
        					 you.src="/img/paper_icon.png";
        				 } 
        			 }else{
        				 select[j].classList.remove("on");
        			 } 
       			 }
       		});	 
		}
   		
		select_btn.addEventListener("click",function(e){
			if(check_box[0].checked == false && check_box[1].checked == false && check_box[2].checked == false){
				alert("가위, 바위, 보 중 하나를 선택해주세요!");
				e.preventDefault();
				return false;
			 }
		});
 });
               	