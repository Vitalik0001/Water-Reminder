import Start from "./components/Start/index.js";
import Profile from "./components/Profile/index.js";
import Main from "./components/Main/index.js";

export default function App() {
  return (
    <>
      <Start />
      <Profile />
      <Main 
        typeOfTip='Hydration'
        subtitleTip='Consuming fruit juices keeps up the hydration level.'
        userName='ViMADI'
      />
    </>
  )
}
