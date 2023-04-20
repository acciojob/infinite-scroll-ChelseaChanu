const list = document.getElementById("infi-list");
let i = 1;
for(;i<=10;i++){
	const item = document.createElement("li");
	item.innerText = `Item ${i}`;
	list.appendChild(item);
}

list.addEventListener("scroll",()=>{
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		for(;i<=2;i++){
			const item = document.createElement("li");
			item.innerText = `Item ${i}`;
			list.appendChild(item);
		}
	}
});