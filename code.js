function calculate() {
  const opt = document.querySelector('input[name="option"]:checked').value;
  let result;

  switch (opt) {
    case "1":
      const theta1 = document.getElementById("theta1").value;
      const order1 = document.getElementById("order1").value;
      const wavelength1 = document.getElementById("wavelength1").value;
      const tr1 = Math.sin(theta1* (Math.PI/180));
      result = braggInterplanarSpacing(tr1, order1, wavelength1);
      document.getElementById("result1").innerHTML = result;
      break;
    case "2":
      const theta2 = document.getElementById("theta2").value;
      const spacing2 = document.getElementById("spacing2").value;
      const Wavelength2 = document.getElementById("wavelength2").value;
      const tr2 = Math.sin(theta2* (Math.PI/180));
      const order2 = braggOrder(tr2,spacing2,Wavelength2);
      document.getElementById("result2").innerHTML = order2;
      break;
    case "3":
      const theta3 = document.getElementById("theta3").value;
      const spacing3 = document.getElementById("spacing3").value;
      const tr3 = Math.sin(theta3* (Math.PI/180));
      const order3 = document.getElementById("order3").value;
      const wavelength3 = braggWavelength(tr3, spacing3,order3);
      document.getElementById("result3").innerHTML = wavelength3;
      break;
    case "4":
      const wavelength4 = document.getElementById("wavelength4").value;
      const spacing4 = document.getElementById("spacing4").value;
      const order4 = document.getElementById("order4").value;
      const theta4 = braggTheta(wavelength4, spacing4, order4);
      document.getElementById("result4").innerHTML = theta4;
      break;
  }
}


    function switchForms() 
    {
      let opt =parseInt(document.querySelector('input[name="option"]:checked').value);
      // Hide form1
      document.getElementById("form").style.display = "none";

      switch(opt)
      {
        case 1: 
        document.getElementById("form1").style.display = "block";
      break;
      
      case 2:
          document.getElementById("form2").style.display = "block";  
        break;
        
        case 3:
          document.getElementById("form3").style.display = "block";
        break;
        
        case 4:

          document.getElementById("form4").style.display = "block";
        break;
        
      }}

      function braggInterplanarSpacing(tr1, order1, wavelength1)
      {
        spacing1 = (order1 * wavelength1) / (2 * tr1);
        return spacing1;
      }
      function braggOrder(tr2,spacing2,Wavelength2)
      {
        order2 = (2*spacing2*tr2)/Wavelength2;
        return order2;

      }
      function braggWavelength(tr3, spacing3,order3)
      {
        wavelength3 = (2 * tr3 * spacing3) / order3;
        return wavelength3;
      }
      function braggTheta(wavelength4, spacing4, order4)
      {
        t=Math.asin((order4*wavelength4)/(2*spacing4));
        t=(t*180)/Math.PI;
        return t;
      }