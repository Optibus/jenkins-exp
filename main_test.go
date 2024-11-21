package main

import "testing"

func TestSalute(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{"test with world", "world", "Hello, world!"},
		{"test with empty string", "", "Hello, !"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := salute(tt.input)
			if result != tt.expected {
				t.Errorf("salute(%s) = %s; want %s", tt.input, result, tt.expected)
			}
		})
	}
}
