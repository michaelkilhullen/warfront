import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App tests", () => {
    test("component renders", () => {
        render(<App />);
        expect(screen.getByText(/Car Shop/i)).toBeDefined();
    })
})