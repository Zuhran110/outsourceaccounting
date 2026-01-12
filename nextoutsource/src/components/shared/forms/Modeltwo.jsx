const Modeltwo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-101 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 w-full overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl relative w-full md:w-3/4 max-h-[90vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-4 sticky top-0 bg-white z-10">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="px-8 pb-8">{children}</div>
      </div>
    </div>
  );
};

export default Modeltwo;
