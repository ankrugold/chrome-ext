
var ntes ={
	'c' : 0,
	'd' : 2,
	'e' : 5,
	'f' : 6,
	'g' : 8,
	'a' : 10,
	'b' : 12
}
var hkeys = ["c", "d", "f", "g", "a"];	
var nkeys = ["b", "e"];
function read(str){
	var ach = false;
	var fin =[];
	str=str.toLowerCase();
	for(var i = 0; i< str.length ; i++){
		//console.log(i+""+str[i]+fin);
		if (hkeys.indexOf(str[i])>-1){
		
			ach=true;
			acn=true;
			fin.push(ntes[str[i]]);
			}
		else if (nkeys.indexOf(str[i])>-1){
		
			ach=false;
			acn=true;
			fin.push(ntes[str[i]]);
			}
		else if (str[i]=="#" && ach){
		
			ach=false;
			acn=true;
			fin.push(fin.pop()+1);
		} else if(!isNaN(parseInt(str[i]))){
		
			ach=false;
			acn=false;
			fin.push(fin.pop()+12*parseInt(str[i]));
		}
	}
	return fin;
		
}

function getword(info,tab) {

    console.log(info.selectionText);
    var j =(read(info.selectionText));
	//alert(j);
	var sounds=[];
	for(var i = 0 ; i < j.length ; i++){
		
		var snd =Notes.getCachedSound(j[i]);
		snd.alphakey=j[i];
		sounds.push(snd);
		//alert(sounds);
		//setTimeout(function(){sounds.pop().play()},(j.length-i)*500);
		
	}
	sounds.reverse();
	for(var i = 0 ; i < sounds.length ; i++){
		setTimeout(function(){snd =sounds.pop(); //alert(snd.alphakey);
		snd.play()},(i)*700);

		}
	
		

}
chrome.contextMenus.create({

    title: "play: %s", 
    contexts:["selection"], 
    onclick: getword,

});

function play(vals){
	
}