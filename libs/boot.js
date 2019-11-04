module.exports = app =>{
    
    if(process.env.NODE_ENV != "test"){
        app.listen(3000, ()=>{

            console.log('Servidor do Tmanager Rodando');

        });
    }
}