var temp = [0];
var humi = [0];
var myObj = [];
var comT = 0, comH = 0;

window.onload = function() {
    $(".button-collapse").sideNav();
    humidity();
    temperature();
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
    xmlhttp.open("GET", "http://192.168.43.83:8000/html/data.json", true);
    xmlhttp.send();

    updateH(parseFloat(myObj.pression));
    updateT(parseFloat(myObj.temperature));
    document.getElementById("temp").innerHTML = myObj.temperature;
    document.getElementById("pres").innerHTML = myObj.pression;

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


function humidity(){
    Highcharts.chart('canvasH', {
        
            title: {
                text: 'pression à temps réel'
            },
        
            yAxis: {
                title: {
                    text: 'pression'
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
                name: 'pression',
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

