function setRouter(app){ 
 var router = app; 

/**
 * Created by Administrator on 2017-06-20.
 */
app.get('/loadMore', function(req, res) {

	var curIdx = req.query.index
	var len = req.query.length
	var data = []

	for(var i = 0; i < len; i++) {
		data.push('新闻' + (parseInt(curIdx) + i))
	}

	setTimeout(function(){
		res.send(data);
	}, 1000)
	//res.send(data)
});
}
 module.exports.setRouter = setRouter