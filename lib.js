window.addEventListener('load',function(){

var modul = function(){	
function core(){		
 	globalEl = document.getElementsByTagName("body")[0];
	myWalking(globalEl);
	function myWalking(objMy){
		var arr = objMy.children;
		var emptyArr = [];
		if(!arr[0]){
			return ;
		}else{ 		
			var size = arr.length;
			for(var i = 0; i < size; i++){
				if( arr[i].hasAttribute("go") ){
				//console.log("OK");
				emptyArr[i] = contaner();
				emptyArr[i](arr[i]);
				}
				
				myWalking(arr[i]);
			}
		}
	}
 

	
function contaner(){	
	  function addEventToSpan(el){

		createSpanRow(el);
		var allSpan = el.children;
		var allSpanLength = allSpan.length;
		var startChar;
		var endChar;
		var startR;
		var endR;
		var selectedText;
	 
//-----------------------------------------------------------------
	var core = function(){ 
			for(var i = 0; i<allSpanLength; i++){
				allSpan[i].addEventListener("mousedown",mouseDownFn,false);//устанавливаю на элементы блока событие "mousedown"		
				allSpan[i].addEventListener("mouseup",mouseUpFn,false);//устанавливаю на элементы блока событие "mouseup"		
				
			}
			document.addEventListener("mousedown",clearColorFn,false);
			 
			 function mouseDownFn(e) { 				
					startChar = getIndex(allSpan, e.currentTarget);console.log(startChar);//взятие первого символа 
					if(getRange(startChar)){  //проверка повторного нажатия для перетягивания
						createEmptyDiv.setText(selectedText);	
							checkPosition(selectedText);
					}
					if(!getRange(startChar)){
						for(var i = 0; i<allSpanLength; i++){	
							allSpan[i].addEventListener("mousemove",drowSelect,false);
						} 
					}
					 
				}
			function mouseUpFn(e){
					endChar = getIndex(allSpan, e.currentTarget);	console.log(endChar)	
					selectedText = getSelectedText(startChar,endChar); console.log(selectedText);	
					 
				}	

			 function drowSelect(e){	
					if(startChar){
						var indexTarget = getIndex(allSpan, e.target);
						clearColorFn( indexTarget);		//очищаю строку от выделения
						setColorFn( indexTarget, startChar, allSpan);  //крашу строку
					}	
				}  
			
			  document.addEventListener("mouseup",stopSelect,false);
				function stopSelect(){
					for(var j = 0; j<allSpanLength; j++){
							allSpan[j].removeEventListener("mousemove",drowSelect,false);					 
						}	
					}
	}();
//-----------------------------------------------------------------	
			 
			function checkPosition(selectedText){
				var index;
				for(var i = 0; i<allSpanLength; i++){
					allSpan[i].addEventListener("mousemove",drowSelect,false);				
				}
				function drowSelect(e){
					index = getIndex(allSpan,e.currentTarget);		 
				}
				el.addEventListener("mouseup",insert,false);	
				function insert(){
					var befor = el.getElementsByClassName("mySpan")[index];
				
					var appSpan = document.createElement("span");
					appSpan.innerHTML = selectedText;
					
					el.insertBefore(appSpan, befor);	
					//el.innerHTML += "123";
					var cont =  el.textContent;	
					if(index<startChar){startChar+=(selectedText.split("").length)-1;}
					el.innerHTML = subFn(cont,startChar,selectedText);
					 
					el.removeEventListener("mouseup",insert,false);
					addEventToSpan(el);
					
				}
	
			}
			
			//console.log(subFn("abcabczx",1,4));
			function subFn(textVar,fs,selectedText){
				var len = selectedText.split("").length;
				var arr = textVar.split("");
				console.log("startChar",fs,"len",len);
				var rez = arr.splice(fs,len);
				 
				return arr.join("");
			}   
	
			function clearColorFn(indexTarget){//console.log("clicks");
				for(var i = 0; i<allSpanLength; i++){
					allSpan[i].style.background = "#fff";
				}
			}
			function setColorFn(indexTarget, startChar, allSpan){
				var arr = getMax(indexTarget, startChar);
				
				for(var i = 0; i<allSpanLength; i++){
					if( (i<=arr[0])&&(i>=arr[1]) ){
						allSpan[i].style.background = "#ff5"; //console.log("getMax",arr[0], arr[1]);
					}
				}
							
			}
			function getMax(fst,sec){
			var arr = [];
				if(fst <= sec){ arr[0]=sec; arr[1]=fst; return arr; }
				if(fst >= sec){ arr[1]=sec; arr[0]=fst; return arr; }
			
			}
		
		  
			function getRange(indexChar){
			//console.log(indexChar,startR,endR);
			if ( (indexChar>=startR)&&(indexChar<=endR) ){
				return 1;
			}else{ return }
		}
		
			function getIndex(allContainers,myChar){
		allContainersLength = allContainers.length;
			for(var j = 0; j<allContainersLength; j++){
				if(allContainers[j] == myChar){return j}
			}
		}
		
			function getSelectedText(startCharIn,endCharIn){
		//console.log(startCharIn,endCharIn);
			if(startCharIn < endCharIn){
				startR = startCharIn; 
				endR = endCharIn;
				return el.textContent.slice( startCharIn,(endCharIn+1));		 
			}else if(startCharIn > endCharIn){
				startR = endCharIn; 
				endR = startCharIn;
				return el.textContent.slice(endCharIn,(startCharIn+1));		
			}else if(startCharIn == endCharIn){
				startR = startCharIn; 
				endR = startCharIn;
				return el.textContent.slice(startCharIn,startCharIn+1);
			}
		}
			
			function createSpanRow(el){
			var splitTextX = el.textContent.split("");
			el.innerHTML = "";
			var splitTextXLength = splitTextX.length;
			for(var i = 0; i<splitTextXLength; i++){
				el.innerHTML += "<span class='mySpan'>"+splitTextX[i]+"</span>";
				document.getElementsByClassName("mySpan")[i].style.cssText = "position:relative;-moz-user-select: none;-khtml-user-select: none; user-select: none;";
			}	
	 }
	 
	  
	  
		
		createEmptyDiv();
		function createEmptyDiv(){
			var body = document.getElementsByTagName("body")[0];
			body.style.cssText = "-moz-user-select: none;-khtml-user-select: none; user-select: none;";
			var myDiv = document.createElement("div");
			myDiv.style.cssText = "  height:20px; position:absolute;";	
			body.appendChild(myDiv);
			
			document.addEventListener("mousemove",mouseMove,false);
			function mouseMove(e){		 
				myDiv.style.left = (e.clientX+15)+"px";
				myDiv.style.top = (e.clientY+10)+"px";
			} 
			createEmptyDiv.setText = function(text){
				myDiv.innerHTML = text;
				document.addEventListener("mouseup",deleteText,false);
				function deleteText(){
					console.log("deleteText");
					myDiv.innerHTML = "";
				}
			}
			 
		}
	
	 
	}
	
	return addEventToSpan;
	
	}
	
	
	
}

return core();
}();
	
	/* console.log(subFn("abcabczx",1,4));
	function subFn(textVar,fs,sec){
		var arr = textVar.split("");
		var leng = Math.abs(fs - sec);
		var rez = arr.splice(fs,leng);
		return arr.join("");
	}  */
	/* console.log(subFn());
	function subFn(){
		textVar = "abcabczx";
		var arr = textVar.slice("");
		 console.log(arr );
		var rez = arr.splice(0,2);
		return rez;
	} */
	
	
	
	
	
	
	
	

},false);
 