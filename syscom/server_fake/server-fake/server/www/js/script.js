var temp = [0];
var humi = [0];
var tempir = [0];
var pres = [0];
var myObj = [];
var comT = 0, comH = 0, comTir = 0, comP = 0;

window.onload = function() {
    $(".button-collapse").sideNav();
    humidity();
    temperature();
    pression();
    temperatureIr();
    afficher();
    setInterval(afficher,1000);
};

function updateT(rand){

    if(temp.length > 10){
        temp.shift();
        comT++;
    }
    temp.push(rand); 
    console.log(rand);
    temperature();
}

function updateTir(rand){

    if(tempir.length > 10){
        tempir.shift();
        comTir++;
    }
    tempir.push(rand); 
    console.log(rand);
    temperatureIr();
}

function updateP(rand){

    if(pres.length > 10){
        pres.shift();
        comP++;
    }
    pres.push(rand); 
    console.log(rand);
    pression();
}

function updateH(rand){

    if(humi.length > 10){
        humi.shift();
        comH++;
    }
    humi.push(rand);
    console.log(rand);
    humidity();
    
}

function resetH(){
    humi = [0];
    comH = 0;
    console.log(humi);
    humidity();

    
}

function resetTir(){
    tempir = [0];
    comTir = 0;
    console.log(tempir);
    temperatureIr();
}

function resetP(){
    pres = [0];
    comP = 0;
    console.log(pres);
    pression();
}

function resetT(){
    temp = [0];
    comT = 0;
    console.log(temp);
    temperature();    
}

function afficher() {
    var offsetUTC = +12,
    lD = new Date();
    document.getElementById("date").innerHTML = lD.toLocaleString().substr(0,10) + " - " + lD.toLocaleString().substr(12);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		myObj = JSON.parse(this.responseText);
		console.log(myObj);
		
	    }
	};
    xmlhttp.open("GET", "http://localhost:8000/html/data.json", true);
    xmlhttp.send();
    updateH(parseFloat(myObj.humd));
    updateT(parseFloat(myObj.tempA));
    updateTir(parseFloat(myObj.tempIR));
    updateP(parseFloat(myObj.pression));
    if (myObj.tempA != null)
	    document.getElementById("temp").innerHTML = myObj.tempA.toFixed(2);
    if (myObj.pression != null)
	    document.getElementById("pres").innerHTML = myObj.pression.toFixed(2);
    if (myObj.humd != null)	
	    document.getElementById("hum").innerHTML = myObj.humd.toFixed(2);
    if (myObj.tempIR != null)	
	    document.getElementById("tempir").innerHTML = myObj.tempIR.toFixed(2);
    document.getElementById("mac").innerHTML = "Adresse Mac du SensorTag : " + myObj.addr;

}
   

function login(){
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    if((name == "walid" && pass == "upmc10") || (name == "kaci" && pass == "upmc15") || (name == "omar" && pass == "upmc"))
    {
        document.getElementById("iderrone").innerHTML = "";
        main();
    }else{
        document.getElementById("iderrone").innerHTML = "Identifiants erron&eacute;s";
        document.getElementById("name").value = "";
        document.getElementById("pass").value = "";
        name = "";
        pass = "";
    }
 
}
function check(){
    if(document.getElementById('test5').checked) {
        document.getElementById('pass').type='text';
    } else {
        document.getElementById('pass').type='password';
    }
}

function main(){
    window.location.href="./html/main.html";
}

function scrtop(){
    window.scrollTo(0, 0);   
}


function pression(){
    Highcharts.chart('canvasP', {
        
        title: {
            text: 'Pression à temps réel'
        },
    
        yAxis: {
            title: {
                text: 'Pression'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: comP,
                animation: false
            }
        },
    
        series: [{
            name: 'Pression',
            data: pres
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
}


function temperatureIr(){
    Highcharts.chart('canvasTir', {
        
        title: {
            text: 'Temperature IR à temps réel'
        },
    
        yAxis: {
            title: {
                text: 'Temperature IR'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: comTir,
                animation: false
            }
        },
    
        series: [{
            name: 'Temperature IR',
            data: tempir
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
}

function temperature(){
    Highcharts.chart('canvasT', {
        
        title: {
            text: 'Temperature à temps réel'
        },
    
        yAxis: {
            title: {
                text: 'Temperature'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: comT,
                animation: false
            }
        },
    
        series: [{
            name: 'Temperature',
            data: temp
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
}

function humidity(){
    Highcharts.chart('canvasH', {
        
            title: {
                text: 'humidité à temps réel'
            },
        
            yAxis: {
                title: {
                    text: 'humidité'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: comH,
                    animation: false
                }
            },
        
            series: [{
                name: 'humidité',
                data: humi
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
}
