const { verify } = require('jsonwebtoken');


const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if( token == null) return res.status(401).json({info: 'not authorized, please log in'});

    verify(token, "8e4ce8bb19283fbc93a47ddbb7fa505df02afeb2a5c5c34880d0c7823d82632af86c8b8a8489a2ebeecaee2cbd9e54c5323fc77efc472dd6e85f365d5658c2a5"
, (err, user) =>{
        if(err) return res.sendStatus(403)
        req.user = user.id
        next()
    })
}

module.exports = {authenticateToken}