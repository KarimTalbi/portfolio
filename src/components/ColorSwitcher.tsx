import {useState} from "react";
import {cn} from "../lib/utils.ts";

const colors = [
  {name: 'Sunshine', value: '#f9d679'},
  {name: 'Blue', value: '#3b82f6'},
  {name: 'Emerald', value: '#10b981'},
  {name: 'Violet', value: '#8b5cf6'},
  {name: 'Rose', value: '#f43f5e'},
  {name: 'neutral-600', value: '#525252'},
];

const bgColors = [
  {name: 'white', value: '#FFFFFF'},
  {name: 'neutral-800', value: '#292524'},
]

export function ColorSwitcher() {
  const changeAccentColor = (colorHex: string | null) => {
    document.documentElement.style.setProperty('--accent-color', colorHex);
  };
  const changeBgColor = (colorHex: string | null) => {
    document.documentElement.style.setProperty('--bg-color', colorHex);
  };

  const [currentColor, setCurrentColor] = useState(0)
  const [currentBgColor, setCurrentBgColor] = useState(0)


  const handleClickAccent = () => {
    const nextColorIndex = (currentColor + 1) % colors.length;
    setCurrentColor(nextColorIndex);
    changeAccentColor(colors[nextColorIndex].value);
  }

  const handleClickBg = () => {
    const nextBgIndex = (currentBgColor + 1) % bgColors.length;
    setCurrentBgColor(nextBgIndex);
    changeBgColor(bgColors[nextBgIndex].value);
  }

  return (
    <div className="flex gap-2 p-4 rounded-lg">
      <button
        onClick={handleClickAccent}
        className={cn("btn btn-circle w-4 h-4 bg-acc border-2 border-[#f5f3ed]")}
      >
      </button>
      <button
        onClick={handleClickBg}
        className={cn("btn btn-circle w-4 h-4 bg-bg border-2 border-[#f5f3ed]")}
      >
      </button>
    </div>
  );
}