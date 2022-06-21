import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author = 'Rafael Braga' 
            content= 'Life is beautiful. I am the bex that contains the box'
          />
          <Post 
            author = 'Rafael Murphy' 
            content= 'The same as I am the dreamer and the persond doing the dream'
          />
        </main>
      </div>
    </div>
  )
}

export default App
