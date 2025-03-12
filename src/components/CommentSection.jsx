import React from 'react';

function CommentSection({ comments, setComments }) {

    const handleDelete = (commentId) => {

        if (comments != null) {
            setComments(comments.filter(comment => comment.id !== commentId));
        }

    };

    return (
        <div>
            <h3>Comentarios:</h3>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.user} : {comment.comment}</p>
                        <button onClick={() => handleDelete(comment.id)}>Eliminar</button>
                    </div>
                ))
            ) : (
                <p>No hay comentarios aún.</p>
            )}
        </div>
    );
}

export default CommentSection;
