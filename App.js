import './App.css';

function App() {
  return (
    <div className="App">
      <h2><b>Welcome to My Awesome Video Streaming Site</b></h2>
      <video width="700px" height="480px" controls>
        <source src = "https://d8hdu9iqr0wqs.cloudfront.net/video1.mp4" type="video/mp4" />
        <source src = "https://d8hdu9iqr0wqs.cloudfront.net/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
