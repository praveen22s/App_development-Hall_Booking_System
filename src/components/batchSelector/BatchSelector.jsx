import React, { useState } from 'react';
import styles from './BatchSelector.module.scss';

function BatchSelector({ selectedBatches, setSelectedBatches }) {
  const batchOptions = ['Marriage', 'Buissness', 'Party', 'other'];

  const handleCheckboxChange = (event) => {
    const batch = event.target.value;
    if (selectedBatches.includes(batch)) {
      setSelectedBatches(selectedBatches.filter((b) => b !== batch));
    } else {
      setSelectedBatches([...selectedBatches, batch]);
    }
  };

  return (
    <div className={styles.options}>
      <div className={styles.optionLabel}>Occation</div>
      <div className={`${styles.optionContent} ${styles.checkboxes}`}>
        {batchOptions.map((batch) => (
          <div key={batch} className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              value={batch}
              id={batch}
              checked={selectedBatches.includes(batch)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={batch}>{batch}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BatchSelector;
