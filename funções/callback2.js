function espera(callback){
    setTimeout(function(){
        console.log('Executando callback...');
        if(callback) callback();
    }, 2000);
  
}

 espera(function(){
    console.log('olá mundo');
 });
 