document.addEventListener('DOMContentLoaded', () => {
document.getElementById('clickbutton').addEventListener('click',function(){
    const city=document.getElementById('inputfield').value;
    if(String(city).trim() ==='')
    {
        alert('Enter city!');
    }
    else
    {
    fetch(`https://api.weatherapi.com/v1/current.json?key=bbe0ee0024484fc8800130253253005&q=${city}`)
        .then(response => response.json())
        .then(data =>
        {
            // console.log('Name: '+data.location.name);
            // console.log('Temperature in C: '+data.current.temp_c);
            // console.log('Temperature in F: '+data.current.temp_f);
            document.getElementById('result').innerHTML=`Celsius: ${data.current.temp_c} \n Fahrenheit ${data.current.temp_f} `;
             document.getElementById('result').style.backgroundColor = 'white';
            document.getElementById('result').style.color = 'black';
            document.getElementById('result').style.textShadow = 'none';
        })
        .catch(err => 
        {
            document.getElementById('result').innerHTML = 'Enter valid input!';
            document.getElementById('result').style.backgroundColor = 'transparent';
            document.getElementById('result').style.color = 'red';
            document.getElementById('result').style.textShadow = '0px 0px 10px white';
        }
        )
    }
    })
})


