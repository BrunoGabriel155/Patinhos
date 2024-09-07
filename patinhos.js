var patinhos = 10;

while(patinhos >0){

    if(patinhos >1){
    document.write('<p> ', patinhos ," patinhos foram passear. Além das montanhas para brincar. A mamãe gritou quá quá quá quá, mas só ", patinhos-=1 , " voltaram de lá </p>");

    } else{
        document.write('<p> ', patinhos ," foram passear. Além das montanhas para brincar. A mamãe gritou quá quá quá quá , mas nenhum patinho voltou de lá </p>");
        patinhos--
    }
}