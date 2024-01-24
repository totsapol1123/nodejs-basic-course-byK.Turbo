export function middleware () {
    return (
        (req,res,next)=> {
            const time = new Date();
          
            res.on("finish", () => {
              console.log(time, req.method, req.originalUrl , res.statusCode);
            });
          
            next();
          }
    );
}