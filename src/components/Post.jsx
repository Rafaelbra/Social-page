import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=65&q=750' />
                    <div className={styles.authorInfo}>
                         <strong>Rafael Braga</strong>
                         <span>Web Developer</span>
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