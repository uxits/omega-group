import { useState } from 'react';
import { Button, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const [playerOne, setPlayerOne] = useState("")
  const [playerTwo, setPlayerTwo] = useState("")
  const [playerThree, setPlayerThree] = useState("")
  const [playerFour, setPlayerFour] = useState("")
  const [playerFive, setPlayerFive] = useState("")
  const [playerSix, setPlayerSix] = useState("")

  const [result, setResult] = useState([""])

  const handleShuffle = () => {
    let array = [playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix]
    for (let index = 0; index < array.length; index++) {
      const random = Math.floor(Math.random() * (index + 1));
      [array[index], array[random]] = [array[random], array[index]]
    }
    setResult(array)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <div className="nameplates">
            <TextField variant="standard" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}></TextField>
            <TextField variant="standard" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}></TextField>
            <TextField variant="standard" value={playerThree} onChange={(e) => setPlayerThree(e.target.value)}></TextField>
            <TextField variant="standard" value={playerFour} onChange={(e) => setPlayerFour(e.target.value)}></TextField>
            <TextField variant="standard" value={playerFive} onChange={(e) => setPlayerFive(e.target.value)}></TextField>
            <TextField variant="standard" value={playerSix} onChange={(e) => setPlayerSix(e.target.value)}></TextField>
          </div>
          <div className="results">
            <div className="team-blue">
              <h3>青チーム</h3>
            {
              result.map((data, i) => {
                if (i % 2 == 0) {
                  return <div>{data}</div>
                }
              })
            }
            </div>
            <div className="team-red">
            <h3>赤チーム</h3>
            {
              result.map((data, i) => {
                if (i % 2 == 1) {
                  return <div>{data}</div>
                }
              })
            }
            </div>
          </div>
          <div className="buttons">
            <Button variant="outlined" color="warning" size="large" onClick={handleShuffle} className="shuffleButton">シャッフルする</Button>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
