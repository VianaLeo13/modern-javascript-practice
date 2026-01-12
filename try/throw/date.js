function retornaHora(data){
    if(!(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}


try{
    const data = new Date('12-06-2026 14:47:12');
    console.log(retornaHora(data));
}catch(e){
    console.log(e);
}finally{
    console.log('Tenha um bom dia.');
}