document.onmousemove = mouseMove; 
	function mouseMove(ev){ 
	    ev           = ev || window.event; 
	    var mousePos = mouseCoords(ev); 
	    document.getElementById(dispXY).innerHTML = mousePos.x;
	} 
	function mouseCoords(ev){ 
	    if(ev.pageX || ev.pageY){ 
         return {x:ev.pageX, y:ev.pageY}; 
	    } 
	    return { 
	        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
	        y:ev.clientY + document.body.scrollTop  - document.body.clientTop 
	    }; 
	} 
