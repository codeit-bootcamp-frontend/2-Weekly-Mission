export const handleOutsideClick = (e, targetRef, onClose) => {
  if (targetRef.current && !targetRef.current.contains(e.target)) {
    onClose();
  }
};
