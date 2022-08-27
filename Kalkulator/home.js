function one(angka){
    form.hasil.value=form.hasil.value+angka;
}
function hasil(){
    const wsh=form.hasil.value;
        if(wsh){
            form.hasil.value=eval(wsh);
        }
    }
    function hapus(){
        form.hasil.value="";
    }

    function mengurangi (){
        const wsh=form.hasil.value;
        form.hasil.value=wsh.substring(0,wsh.length-1)
    }
