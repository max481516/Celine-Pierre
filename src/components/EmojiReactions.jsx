import { useEffect, useState, useRef } from "react";
import { firestore } from "../firebase/firebaseConfig";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import styled from "styled-components";
import { QUERIES } from "../constants";

export default function EmojiReactions({ mediaItemId }) {
  const [reactions, setReactions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const emojis = ["🔥", "❤️", "😂", "👏", "😍"];

  useEffect(() => {
    const ref = collection(firestore, `mediaItems/${mediaItemId}/reactions`);
    const unsubscribe = onSnapshot(ref, (snap) => {
      setReactions(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [mediaItemId]);

  const addReaction = async (emoji) => {
    const ref = collection(firestore, `mediaItems/${mediaItemId}/reactions`);
    const match = reactions.find((r) => r.emoji === emoji);

    if (match) {
      const docRef = doc(ref, match.id);
      await updateDoc(docRef, {
        count: increment(1),
      });
    } else {
      await addDoc(ref, {
        emoji,
        count: 1,
      });
    }
  };

  // Close emoji menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <EmojiBox ref={containerRef}>
      <MainToggle onClick={() => setIsExpanded((prev) => !prev)}>😊</MainToggle>

      <EmojiList expanded={isExpanded}>
        {emojis.map((emoji) => {
          const r = reactions.find((r) => r.emoji === emoji);
          return (
            <EmojiButton key={emoji} onClick={() => addReaction(emoji)}>
              <Emoji>{emoji}</Emoji>
              <Count hasCount={!!r?.count}>{r?.count || ""}</Count>
            </EmojiButton>
          );
        })}
      </EmojiList>
    </EmojiBox>
  );
}

const EmojiBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 15px;
  left: 15px;
  z-index: 9999;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    top: 15px;
    left: 20px;
    gap: 10px;
  }
`;

const MainToggle = styled.button`
  display: block;
  width: fit-content;
  background: hsla(183, 94%, 25%, 0.7);
  border: none;
  border-radius: 50%;
  padding: 6px 10px;
  margin-bottom: 8px;
  font-size: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const EmojiList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  max-height: ${(props) => (props.expanded ? "1000px" : "0")};
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  pointer-events: ${(props) => (props.expanded ? "auto" : "none")};
  transition: max-height 0.9s ease-in-out, opacity 0.3s ease-in-out;
  will-change: max-height, opacity;

  @media ${QUERIES.tabletAndUp} {
    max-height: none;
    opacity: 1;
    overflow: visible;
    flex-direction: row;
    pointer-events: auto;
    gap: 10px;
  }
`;

const EmojiButton = styled.button`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 20px;
  padding: 4px 8px;
  font-size: 18px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  @media ${QUERIES.tabletAndUp} {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Count = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary-blue);

  ${(props) =>
    props.hasCount
      ? `
    margin-left: 4px;
  `
      : `
    display: none;
  `}
`;

const Emoji = styled.span``;
