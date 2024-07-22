import React, { useState } from 'react';

function EditForm(props) {
  const [value, setValue] = useState(props.item.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.index, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Update the value"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Update</button>
    </form>
  );
}

export default EditForm;