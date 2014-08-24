flag=true;

function stuff(){
	var list=[];
	chrome.tabs.query({'url':'https://www.facebook.com/*'} , function(tabs){
		for(var i=0;i<tabs.length;i++){
			list.push(tabs[i].id);
		}
		flag=true;
		//alert(list);	
		chrome.tabs.remove(list);
	})
}
function mylistener(tab){
		chrome.storage.sync.get({stfbtime:5},function(it){
			if(flag && tab.url.match("facebook.com")){
				setTimeout(stuff,60000*it.stfbtime);
				flag=false
		}});
}	

function mylistener1(i,change,tab){
	mylistener(tab);
}	
chrome.tabs.onCreated.addListener(mylistener)

chrome.tabs.onUpdated.addListener(mylistener1)
