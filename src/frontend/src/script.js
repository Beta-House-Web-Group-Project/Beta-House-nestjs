


let searchForm = document.getElementById('search-input');
let searchResultList = document.querySelectorAll('.property');
let result = document.querySelector('.properties');
let searchValue = result.getElementsByTagName("h3");
let catagories = document.querySelector(".catagories")
let section1 = document.querySelector(".section1")
let footer = document.querySelector(".footer")
let header_thumb = document.querySelector(".search-result")
let no_result = document.querySelector(".search-result1")
let text = document.querySelector(".property-text")


searchForm.addEventListener("keyup", function(){
	for(var i=0; i< searchValue.length; i++){
		
		console.log(searchForm.value);
		
	   catagories.style.display = "none";
	   section1.style.display = "none";
	   footer.style.display = "none";
	   result.style.display = "none";
	   text.style.color = "white";
		let value = searchResultList[i].getElementsByTagName('h3')[0];
		
		   let filterValue = value.textContent || value.innerHTML;

		   if(filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase()) > -1){
			searchResultList[i].style.display = "block";
			header_thumb.style.marginTop = "1rem";
			header_thumb.style.marginLeft = "40rem";
		
			header_thumb.style.display = "block";
			header_thumb.appendChild(searchResultList[i]);
			return ;
		   }
		   
		   
	}
	{
		no_result.style.display = "block";
		div = document.createElement("div");
		div.textContent = "No result found";
		no_result.append(div);
	   
		
	   }
})