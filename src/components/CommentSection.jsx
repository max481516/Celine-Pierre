import { useState, useRef, useEffect } from "react";
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
  const containerRef = useRef(null);
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height
    }
  };

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target)
        ) {
          toggleOpen(); // Close the comment section
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, toggleOpen]);

  return (
    <Container
      ref={containerRef}
      isOpen={isOpen}
      onClick={() => {
        if (!isOpen) {
          toggleOpen(); // Open the comment section if it is not already open
        }
      }}
    >
      <Title>COMMENTS</Title>
      <Content isOpen={isOpen}>
        <CloseButton onClick={toggleOpen}>
          <IoMdClose size={25} />
        </CloseButton>
        <CommentsList>
          {comments.length === 0 ? (
            <EmptyState>Nothing here yet...</EmptyState>
          ) : (
            comments.map((comment) => (
              <Comment key={comment.id}>{comment.text}</Comment>
            ))
          )}
        </CommentsList>
        <CommentForm
          onSubmit={(e) => {
            e.preventDefault();
            if (newComment.trim() !== "") {
              addComment(newComment);
              setNewComment("");
              if (textareaRef.current) {
                textareaRef.current.style.height = "auto"; // Reset height after submit
              }
            }
          }}
        >
          <CommentInput
            ref={textareaRef}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onInput={handleInput}
            placeholder="Add a comment..."
            rows={1}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </CommentForm>
      </Content>
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
  max-height: 50%;
  background-color: var(--color-element-sand);
  transition: transform 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  z-index: 20000;
  overflow: auto;
  transform: translateY(
    ${({ isOpen }) => (isOpen ? "0%" : "calc(100% - 25px)")}
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
  padding: 16px;
  cursor: default;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
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
  flex: 1;
  margin-bottom: 16px;
  padding-top: 0;
`;

const EmptyState = styled.div`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const Comment = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  background-color: var(--color-light-sand);
  border-radius: 8px;
  color: #000;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  flex-shrink: 0;
`;

const CommentInput = styled.textarea`
  flex: 1;
  padding: 8px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 8px;
  resize: none;
  overflow: hidden;
  line-height: 1.5;
  font-size: 1rem;
  height: auto;
  ${FONTS.bodyFont};

  &:focus {
    outline: none;
    border-color: var(--color-primary-blue);
    max-height: 150px;
  }
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  margin-bottom: 1px;
  background-color: var(--color-primary-blue);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
