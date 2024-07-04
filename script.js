function setClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDegrees = (hours % 12) * 30 + (minutes / 2); // 30 degrees per hour + half a degree per minute
    const minuteDegrees = minutes * 6; // 6 degrees per minute
    const secondDegrees = seconds * 6; // 6 degrees per second
  
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
  
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  }
  
  setClock();
  setInterval(setClock, 1000);
  

  