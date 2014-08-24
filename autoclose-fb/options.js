function save_op(){
	var t = document.getElementById('stfb_time').value;
	chrome.storage.sync.set({
		stfbtime:t}, function(){
		var status = document.getElementById('status');
    		status.textContent = 'Options saved.';
		})
}

document.getElementById('save').addEventListener('click',save_op);

