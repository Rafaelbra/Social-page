
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post ({ author, content }) {

    const [comments, setComments] = useState([
        'Really cool post !!' 
    ]);

    const [newCommentText, setNewCommentText] = useState ()

    function handleCreateNewContent () {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange () {
        setNewCommentText(event.target.value);
    }

    function deleteComment (commentsToDelete ) {
        const commentsWithoutDeletedOnes = comments.filter(comment => {
            return comment !== commentsToDelete
        })
        
        setComments(commentsWithoutDeletedOnes);
    }

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
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })} 
            </div>

            <form onSubmit={handleCreateNewContent} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea 
                  name='comment'
                  placeholder='Add a comment...'
                  value={newCommentText}
                  onChange={handleNewCommentChange}
                  required={true}
                />

                <footer>
                    <button type='submit'>Post</button>
                </footer>
            </form>

            <div className={styles.commentList}>
              {comments.map(comment => {
                  return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                )
              })}
            </div>
        </article>
    )
}