import "./index.css";
import emojipedia from "./emoji";
import Entry from "./components/Entry";
import Footer from "./components/Footer";

function CreateEmoji(emojipedia){
  return (
    <Entry

    emoji={emojipedia.emoji}
    name={emojipedia.name}
    meaning={emojipedia.meaning}
    />
  );
}


function App() {
  return (
    <div>
    <h1>
      <span>Emojipedia</span>
    </h1>
    <dl className="dictionary">
    {emojipedia.map(CreateEmoji)}
    </dl>
    <Footer />
    </div>
    
  );
}

export default App;
