const myform=document.querySelector('form')
//this will give u empty value
// const myheight=document.querySelector('#height').value

myform.addEventListener('submit',function(chai){
    chai.preventDefault()
    const height=parseInt((document.querySelector('#height')).value)
    const weight=parseInt((document.querySelector('#weight')).value)
    const results=document.querySelector('#results')
    if (height===''|| height<=0 ||isNaN(height)){
        results.innerHTML='please give a valid height'
    }
    if (weight=== ''|| weight<0 ||isNaN(weight)){
        results.innerHTML='please give a valid weight'
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiCategory='';
    if(bmi<=18.6){
        bmiCategory=`person is under weight`

    }
    if(bmi<=24){
        bmiCategory=`person weight is normal`

    }
    if(bmi>25){
        bmiCategory=`person is overweight `

    }
    results.innerHTML=`<span>BMI:${bmi}</span><br><span>category:${bmiCategory}</span>`
    // results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${bmiCategory}</span>`; 
});
