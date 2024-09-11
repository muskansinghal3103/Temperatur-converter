const calculate = ()=>{
    const number=document.getElementById('number').value;
    // const degree=document.getElementById('degrees');
    const valuetemp= document.getElementById("degrees").value;
    console.log(number);

    let result;

    const celToFar=(cel)=>{
        let Farheneit=Math.round((cel*9/5)+32);
        return Farheneit;
    }
    const farToCel = (far) => {
      let Farheneit = Math.round((far-32)*5/9);
      return Farheneit;
    };
    if(valuetemp=='celsius'){
        result=celToFar(number);
        document.getElementById('answer').innerHTML=`Answer=${result} ºFarheneit `;
    }
    else{
        result=farToCel(number);
        document.getElementById('answer').innerHTML=`Answer=${result} ºCelsius`; 
    }
}