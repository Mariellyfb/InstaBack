import { useState } from "react";
import logo from "../assets/logo.png";
import "./ImageSelect.css";

function ImageSelect({ onChange }) {
  const [img, setImg] = useState();
  const [preview, setPreview] = useState(logo);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImg(file);
    setPreview(URL.createObjectURL(file));
    onChange?.(file);
  };

  const style = {};
  if (preview) style.backgroundImage = `url("${preview}")`;

  return (
    <label className="image-select">
      <div className="preview" style={style} />
      <input type="file" onChange={handleFile} />
    </label>
  );
}

export default ImageSelect;
