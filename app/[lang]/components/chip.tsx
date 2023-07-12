"use client";

//need comment here or empty line to activate the vs code color picker in js file
export const Chip = ({ children, backgroundColor = "#4d45e1" }: { children: React.ReactNode; backgroundColor?: string }) => {
  return (
    <div className={`inline-block text-white text-xs rounded-full py-1 px-3 text-center`} style={{ background: backgroundColor }}>
      {children}
    </div>
  );
};
