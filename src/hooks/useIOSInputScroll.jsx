import { useEffect } from "react";

const useIOSInputScroll = (formRef, containerRef) => {
  useEffect(() => {
    if (/^iPad|iPhone$/.test(navigator.platform)) {
      const form = formRef.current;
      const inputs = form.querySelectorAll(
        'input[type="radio"], input[type="checkbox"]'
      );
      inputs.forEach((i) => {
        i.addEventListener("focus", function (e) {
          const input = e.target;
          input.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });

          // Scroll the container to make the validation message visible
          containerRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        });
      });
    }
  }, [formRef, containerRef]);
};

export default useIOSInputScroll;
