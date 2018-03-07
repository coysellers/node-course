var getUser = (id, dopeStuff) => {
    var user = {
        id,
        name: 'Vikram'
    };

    setTimeout(() => {
        dopeStuff(user);
    }, 3000);
};

// The second argument is the function we want to run when the user data comes back
getUser(31, (userObject) => {
    console.log(userObject);
});