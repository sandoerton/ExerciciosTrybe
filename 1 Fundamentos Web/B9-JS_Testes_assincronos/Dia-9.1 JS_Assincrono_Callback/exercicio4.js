const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature(callback, time) {
  const messageCuriosityRobo = `Mars temperature is: ${callback} degree Celsius`
  setTimeout(() => console.log(messageCuriosityRobo), time);
}

sendMarsTemperature(getMarsTemperature(), messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
