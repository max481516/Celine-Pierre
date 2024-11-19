import { useState } from "react";
import styled from "styled-components";
import { FONTS } from "../constants";
import { IoMdClose } from "react-icons/io";

export default function CommentSection({
  comments,
  addComment,
  isOpen,
  toggleOpen,
}) {
  const [newComment, setNewComment] = useState("");

  return (
    <Container isOpen={isOpen} onClick={() => !isOpen && toggleOpen()}>
      <Title>COMMENTS</Title>
      {isOpen && (
        <Content onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={toggleOpen}>
            <IoMdClose size={25} />
          </CloseButton>
          <CommentsList>
            {comments.map((comment) => (
              <Comment key={comment.id}>{comment.text}</Comment>
            ))}
          </CommentsList>
          <CommentForm
            onSubmit={(e) => {
              e.preventDefault();
              if (newComment.trim() !== "") {
                addComment(newComment);
                setNewComment("");
              }
            }}
          >
            <CommentInput
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <SubmitButton type="submit">Send</SubmitButton>
          </CommentForm>
        </Content>
      )}
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  position: absolute;
  margin: 0 auto;
  bottom: 19px;
  left: 0;
  right: 0;
  width: 95%;
  height: 50%;
  background-color: var(--color-element-sand);
  transition: transform 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  z-index: 20000;
  transform: translateY(
    ${({ isOpen }) => (isOpen ? "0%" : "calc(100% - 40px)")}
  );
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  color: var(--color-primary-blue);
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Content = styled.div`
  height: 100%;
  padding: 16px;
  overflow-y: hidden; /* Adjust as needed */
  cursor: default;
  position: relative;
  display: flex;
  flex-direction: column; /* Add this */
`;

const CloseButton = styled.button`
  position: fixed;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
`;

const CommentsList = styled.div`
  flex: 1; /* Ensures it takes up available space */
  overflow-y: auto;
  margin-bottom: 16px;
  padding-top: 24px;
`;

const Comment = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  background-color: var(--color-light-sand);
  border-radius: 8px;
  color: #000;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: baseline;
  margin-bottom: 2rem;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc; /* Optional: Add border */
  border-radius: 8px;
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: var(--color-primary-blue);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
