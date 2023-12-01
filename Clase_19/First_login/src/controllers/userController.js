const showProfile = (req, res) => {
    const { user } = req.session;
    res.render('profile', { user });
};

export { showProfile };