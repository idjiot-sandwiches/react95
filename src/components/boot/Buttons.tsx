import React, { useState, useRef, useEffect } from "react";

interface ButtonGroupProps {
  items?: string[];
  onChange?: (selectedItem: string) => void;
  autoFocus?: boolean;
}

function Buttons({
  items = [
    "Continue Startup",
    "System Information",
    "System Diagnostics",
    "BIOS Setup",
    "System Recovery",
  ],
  onChange,
  autoFocus = true,
}: ButtonGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        buttonRefs.current[selectedIndex]?.focus();
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let nextIndex = selectedIndex;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        nextIndex = (selectedIndex + 1) % items.length;
        break;

      case "ArrowUp":
        e.preventDefault();
        nextIndex = (selectedIndex - 1 + items.length) % items.length;
        break;

      case "Enter":
        e.preventDefault();
        onChange?.(items[selectedIndex]);
        return;

      default:
        return;
    }

    handleSelect(nextIndex);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div
      role="group"
      aria-label="Action Toolbar"
      onKeyDown={handleKeyDown}
      className="flex flex-col w-56 text-base"
    >
      {items.map((label, index) => {
        const isActive = selectedIndex === index;

        return (
          <button
            key={label}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleSelect(index)}
            className={`focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 text-left px-2
              ${isActive ? "bg-white text-slate-900" : "text-white"}
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
