const showProfile = (req, res) => {
    // Lógica para mostrar el perfil del usuario
    const { user } = req.session;
    res.render('profile', { user });
};

export { showProfile };