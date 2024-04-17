import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageProps from './components/LikeImageProps';
import LikePost from './components/LikePost';
import LikePostProps from './components/LikePostProps';

function App() {
  return (
    <div>
      <h3>Using HOC</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h3>Using Render Props</h3>
      <div className='buttons'>
        <LikeImageProps/>
        <LikePostProps/>
      </div>
    </div>
    // <UserWithLoader/>

  );
}

export default App;
