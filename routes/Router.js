module.exports = function(app){

    getNumber= function(req,res){
	console.log(req.params.id);
	var romano={};
	x=req.params.id;	
        romano["NumeroEnRomano"]=aRomano(x);
	res.send(romano);
};
  
function aRomano (valor){
     
    	var unidades = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
	var decenas = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
	var centenas = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
	var uMil = ['','M','MM','MMM']; 

	if (valor > 4000) {
                    
		console.log("El numero ingresado es demasiado grande!!!");                    
    	}else{

 	var valMil = valor/1000;
	var valCentena = (valor%1000)/100;
	var valDecena = ((valor %1000)%100)/10;
	var residuo = ((valor%1000)%100)%10;

	var valRomano = uMil[Math.floor(valMil)].concat(centenas[Math.floor(valCentena)],
                        decenas[Math.floor(valDecena)],unidades[Math.floor(residuo)]);
	console.log("Número romano : " + valRomano);
    }
    	return valRomano;
};

//Redireccionamiento peticiones
    app.get('/intToRoman/:id', getNumber);
}
