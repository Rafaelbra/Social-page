import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
          <Avatar hasBorder={false} src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=65&q=750' />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                    <strong>Rafael Braga</strong>
                    <time title='20 June at 08:13h' dateTime= '2022-06-20 08:13:30'>Published 3h ago</time>
                </div>

                <button title='Delete comment'>
                    <Trash size= {24} />
                </button>
              </header>

              <p>{content}</p>
            </div>

            <footer>
              <button>
                <ThumbsUp />
                Like <span>20</span>
              </button>
            </footer>
          </div>
        </div>
    )
}