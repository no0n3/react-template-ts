import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

function C1() {
  return (
    <div>
      <h1>C1 (h1)</h1>
      <C2 />
    </div>
  );
}

function C2() {
  return (
    <div>
      <h1 data-testid="test-c2-h1">C2 (h1)</h1>
    </div>
  );
}

function Fetch(props: any) {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>hello there</h1>
      <p>{props.url}</p>
      <div>
        <button disabled={loading} onClick={() => setLoading(true)}>Load</button>
      </div>
      <C1 />
    </div>
  );
}

test('loads and displays', async () => {
  render(<Fetch url="/greeting" />)

  await userEvent.click(screen.getByText('Load Greeting'));
  await screen.findByTestId('test-c2-h1');

  expect(screen.getByTestId('test-c2-h1')).toHaveTextContent('C2 (h1)');
  expect(screen.getByRole('button')).toBeDisabled();
});
