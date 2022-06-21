import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/diebraga.png' />
                    <div className={styles.authorInfo}>
                         <strong>Diego Braga</strong>
                         <span>Full Stack Developer</span>
                    </div>
                </div>
                
                <time title='20 June at 08:13h' dateTime= '2022-06-20 08:13:30'>Published 1h ago</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>jane.design/doctorcare</a></p>
                <p> 
                  <a href=''>#novoprojeto </a>{' '}
                  <a href=''>#nlw </a>{' '}
                  <a href=''>#rocketseat </a>
                </p>     
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea 
                  placeholder='Add a comment...'
                />

                <footer>
                    <button type='submit'>Post</button>
                </footer>
            </form>

            <div className={styles.commentList}>
              <Comment />
              <Comment />
              <Comment />
            </div>
        </article>
    )
}