function toBeSentAsParameter(){
    console.log('this will be passed as parameter');
    

}


function toReceiveAFunctionAsParameter(functionReceivedAsParameter){
    functionReceivedAsParameter();
    return 1;
}

toReceiveAFunctionAsParameter(toBeSentAsParameter);
