import { Button } from "@/components/ui/button";

const TimeSlote = ({ time, avialable, isSelected, onSelect }) => {
  return (
    <Button
      onClick={onSelect}
      variant="outline"
      disabled={!avialable}
      className={`w-full h-12 border-blue-800 hover:bg-blue-50 transition${
        !avialable ? " opacity-50" : " cursor-pointer"
      } ${isSelected ? "bg-blue-800 text-white" : ""}`}
    >
      {time}
    </Button>
  );
};

export default TimeSlote;
