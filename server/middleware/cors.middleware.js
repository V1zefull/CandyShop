export default function corsMiddleware(req,res,next){
    res.header("Access-Control-Allow_Origin", "*");
    res.header("Access-Control-Allow_Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Origin", "Content-Type");
    res.header('Access-Control-Allow-Credentials: true');
    res.header('Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Accept, Content-Type');
    next();

}