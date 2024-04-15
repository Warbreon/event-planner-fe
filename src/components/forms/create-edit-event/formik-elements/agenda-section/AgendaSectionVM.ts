import { useState } from "react";

const AgendaSectionVM = () => {
  const [showForm, setShowForm] = useState(false);

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Toggle activated');
    setShowForm(event.target.checked);
  }

  return { showForm, onToggle }
}

export default AgendaSectionVM