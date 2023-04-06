import Start from "./components/Start/index.jsx";
import Profile from "./components/Profile/index.jsx";
import Main from "./components/Main/index.jsx";

export default function App() {
  return (
    <>
      <Start />
      <Profile />
      <Main 
        userName='ViMADI'
      />
    </>
  )
}
