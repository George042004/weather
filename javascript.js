document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('clickbutton').addEventListener('click', function (e) {
        e.preventDefault();
        
        document.getElementById('maindiv').style.marginTop = '60px';
        const city = document.getElementById('inputfield').value.trim();

        if (city === '') {
            alert('Enter city!');
            return;
        }

        document.getElementById('maindiv').style.display = 'flex';
        document.getElementById('result').style.display = 'none';

        fetch(`https://api.weatherapi.com/v1/current.json?key=bbe0ee0024484fc8800130253253005&q=${city}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Invalid response");
                }
                return response.json(); 
            })
            .then(data => {
                document.getElementById('maindiv').style.display = 'none';

                document.getElementById('result').style.display = 'block';
                document.getElementById('result').textContent =
                    `Celsius: ${data.current.temp_c} °C \nFahrenheit: ${data.current.temp_f} °F`;
                document.getElementById('result').style.backgroundColor = 'white';
                document.getElementById('result').style.color = 'black';
                document.getElementById('result').style.textShadow = 'none';
            })
            .catch(err => {
                document.getElementById('maindiv').style.display = 'none';

                document.getElementById('result').style.display = 'block';
                document.getElementById('result').innerHTML = 'Enter valid input!';
                document.getElementById('result').style.backgroundColor = 'transparent';
                document.getElementById('result').style.color = 'red';
                document.getElementById('result').style.textShadow = '0px 0px 10px white';
            });
    });
});
