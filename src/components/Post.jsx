import { format } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post ({ author, publishedAt }) {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} /> 
                    <div className={styles.authorInfo}>
                         <strong>{author.name}</strong>
                         <span>{author.role}</span>
                    </div>
                </div>
                
                <time title='20 June at 08:13h'>
                    Published 1h ago
                </time>
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