/**
 * Created by Administrator on 2017-06-20.
 */
var btn = document.getElementById('load-more');
var length =5;
var index = 3;
var isDataArrival = true;
btn.addEventListener('click',function (e) {
	e.preventDefault();
	if (!isDataArrival){
		return;
	}
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300){
			var data = JSON.parse(xhr.responseText);
			console.log(data);
			appendHtml(data);
			isDataArrival=true;
			index=index+length;
		}
	};
	xhr.open('get',`/loadMore?index=${index}&length=${length}`);
	xhr.send();
	isDataArrival = false;
});
function appendHtml(res) {
	var fragment = document.createDocumentFragment();
	var ct = document.getElementById('ct');
  res.forEach(function (value) {
	  var li = document.createElement('li');
	  li.innerText = value;
	  fragment.appendChild(li);
  })
	ct.appendChild(fragment);
}