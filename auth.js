//------------GET------------
//auth
app.get('/auth/:check', function(req, res) {
    var check = parseInt(req.query.auth);
    if(isNaN(check)){
        return res.status(400).json({message: 'Spiacente ma non sei autenticabile!'})
    } else if (check%2 == 0) {
        res.status(200).json({message: 'Sei autenticato, accesso consentito!'})
    } else res.status(401).json({message: 'Spiacente non sei autorizzato!'})
})