import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FONTS } from "../constants";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function CommentSection({
  comments,
  addComment,
  isOpen,
  toggleOpen,
}) {
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const containerRef = useRef(null);
  const textareaRef = useRef(null);

  const { t } = useTranslation();

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
      <Title>{t("Album.Comments.Title")}</Title>
      <Content isOpen={isOpen}>
        <CloseButton onClick={toggleOpen}>
          <IoMdClose size={25} />
        </CloseButton>
        <CommentsList>
          {comments.length === 0 ? (
            <EmptyState>{t("Album.Comments.EmptyState")}</EmptyState>
          ) : (
            comments.map((comment) => (
              <Comment key={comment.id}>
                <CommentText>{comment.text}</CommentText>
                <CommentAuthor>{comment.name || "Anonymous"}</CommentAuthor>
              </Comment>
            ))
          )}
        </CommentsList>
        <CommentForm
          onSubmit={(e) => {
            e.preventDefault();
            if (newComment.trim() !== "") {
              addComment(newComment, name || "Anonymous");
              setNewComment("");
              setName("");
              if (textareaRef.current) {
                textareaRef.current.style.height = "auto"; // Reset height after submit
              }
            }
          }}
        >
          <InputRow>
            <CommentInput
              ref={textareaRef}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onInput={handleInput}
              placeholder={t("Album.Comments.CommentPlaceholder")}
              rows={1}
            />
            <NameInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Album.Comments.NamePlaceholder")}
            />
          </InputRow>
          <SubmitButton type="submit">
            {t("Album.Comments.Submit")}
          </SubmitButton>
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
  max-width: 500px;
  background-color: var(--color-body-primary);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  border-radius: 4px;
  cursor: pointer;
  z-index: 20000;
  overflow: auto;
  transform: translateY(
    ${({ isOpen }) => (isOpen ? "0%" : "calc(100% - 35px)")}
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

const CommentText = styled.div`
  font-size: 1rem;
  color: #000;
  margin-bottom: 4px;
`;

const CommentAuthor = styled.div`
  font-size: 0.9rem;
  position: absolute;
  right: 8px;
  bottom: -24px;
  color: var(--color-primary-blue);
  font-style: italic;
  text-align: right;
`;

const EmptyState = styled.div`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const Comment = styled.div`
  position: relative;
  padding: 8px;
  margin-bottom: 24px;
  background-color: var(--color-lighter-sand);
  border-radius: 8px;
  color: #000;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: auto;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const InputRow = styled.div`
  display: flex;
  align-self: center;
  gap: 8px;
  margin-bottom: 8px;
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

  &::placeholder {
    font-size: calc(14rem / 16);
  }
`;

const NameInput = styled.input`
  flex: 0.4;
  padding: 8px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 8px;
  font-size: 1rem;
  ${FONTS.bodyFont};

  &:focus {
    outline: none;
    border-color: var(--color-primary-blue);
  }

  &::placeholder {
    font-size: calc(14rem / 16);
  }
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  margin-bottom: 1px;
  align-self: center;
  background-color: var(--color-primary-blue);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
