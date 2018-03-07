var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'Eli'
	};

	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUser(5, (user) => {
	console.log(user);
});