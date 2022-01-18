import { useEffect, useState } from "react";
import json from "data.json";

const useSlides = (name) => {
  const [value, setValue] = useState(0);
  const data = json[name];
  const slide = data[value];

  const set = (id) => setValue(id);

  useEffect(() => {
    let cleanup = false;
    window.onkeydown = (e) => {
      if (!cleanup) {
        if (e.key === "ArrowLeft") {
          setValue((p) => (p === 0 ? data.length - 1 : p - 1));
        }
        if (e.key === "ArrowRight") {
          setValue((p) => (p === data.length - 1 ? 0 : p + 1));
        }
      }
    };
    return () => (cleanup = true);
  });

  return { data, slide, set };
};

export default useSlides;
