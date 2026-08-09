function rollDice() {
        const numDice = document.getElementById("dice").value;
        const diceResult = document.getElementById("diceResult");
        const imgResult = document.getElementById("imgResult");
        let resultText = [];
        let imgText = [];

        for (let i = 0; i < numDice; i++) {
            const roll = Math.floor(Math.random() * 6) + 1;
            resultText.push(roll);
            imgText.push(`<img src="C:\Users\Hp\OneDrive\Desktop\Mern Stack Practice\Dice Roller Program\images\${roll}.png" alt="Dice ${roll}" class="dice-image">`);
        }

        diceResult.textContent = "You rolled: " + resultText.join(", ");
        imgResult.innerHTML = imgText.join('');
}
